// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Thanhviencf {
  description: string;
  imageUrl: string;
}

// Khai báo kiểu cho state
interface ThanhviencfState {
  thanhviencf: Thanhviencf[];
  loading: boolean;
  error: string | null;
}

// Async thunk để fetch services từ Firebase
export const fetchThanhviencf = createAsyncThunk<Thanhviencf[]>(
  "thanhviencf/fetchThanhviennhahang",
  async () => {
    const querySnapshot = await getDocs(collection(db, "thanhviencf"));
    const thanhviennhahang: Thanhviencf[] = querySnapshot.docs.map(
      (doc) => doc.data() as Thanhviencf
    );
    return thanhviennhahang;
  }
);

// Khởi tạo state ban đầu
const initialState: ThanhviencfState = {
  thanhviencf: [],
  loading: false,
  error: null,
};

const thanhviencfSlice = createSlice({
  name: "thanhviencf",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchThanhviencf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchThanhviencf.fulfilled, (state, action) => {
        state.loading = false;
        state.thanhviencf = action.payload; // Gán payload kiểu `Service[]` vào state
      })
      .addCase(fetchThanhviencf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load services";
      });
  },
});

export default thanhviencfSlice.reducer;
