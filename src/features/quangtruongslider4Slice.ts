// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Quangtruongslider4{
  description: string;
  imageUrl: string;
}

// Khai báo kiểu cho state
interface Quangtruongslider4State {
  quangtruongslider4: Quangtruongslider4[];
  loading: boolean;
  error: string | null;
}

// Async thunk để fetch services từ Firebase
export const fetchQuangtruongslider4 = createAsyncThunk<Quangtruongslider4[]>(
  "quangtruongslider4/fetchQuangtruongslider4",
  async () => {
    const querySnapshot = await getDocs(collection(db, "quangtruongslider4"));
    const quangtruongslider4: Quangtruongslider4[] = querySnapshot.docs.map(
      (doc) => doc.data() as Quangtruongslider4
    );
    return quangtruongslider4;
  }
);

// Khởi tạo state ban đầu
const initialState: Quangtruongslider4State = {
  quangtruongslider4: [],
  loading: false,
  error: null,
};

const quangtruongslider4Slice = createSlice({
  name: "quangtruongslider4",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuangtruongslider4.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuangtruongslider4.fulfilled, (state, action) => {
        state.loading = false;
        state.quangtruongslider4 = action.payload; // Gán payload kiểu `Service[]` vào state
      })
      .addCase(fetchQuangtruongslider4.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load services";
      });
  },
});

export default quangtruongslider4Slice.reducer;
