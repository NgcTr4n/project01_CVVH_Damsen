// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Trangchu {
  id: string;
  imageUrl: string;
}

// Khai báo kiểu cho state
interface TrangchuState {
  trangchu: Trangchu[];
  loading: boolean;
  error: string | null;
}

// Async thunk để fetch services từ Firebase
export const fetchTrangchu = createAsyncThunk<Trangchu[]>(
  "trangchu/fetchTrangchu",
  async () => {
    const querySnapshot = await getDocs(collection(db, "trangchu"));
    const trangchu: Trangchu[] = querySnapshot.docs.map(
      (doc) => doc.data() as Trangchu
    );
    return trangchu;
  }
);

// Khởi tạo state ban đầu
const initialState: TrangchuState = {
  trangchu: [],
  loading: false,
  error: null,
};

const trangchucontentSlice = createSlice({
  name: "trangchu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrangchu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrangchu.fulfilled, (state, action) => {
        state.loading = false;
        state.trangchu = action.payload; // Gán payload kiểu `Service[]` vào state
      })
      .addCase(fetchTrangchu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load services";
      });
  },
});

export default trangchucontentSlice.reducer;
