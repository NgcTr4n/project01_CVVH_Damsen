// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Quangtruongslider1{
  description: string;
  imageUrl: string;
}

// Khai báo kiểu cho state
interface Quangtruongslider1State {
  quangtruongslider1: Quangtruongslider1[];
  loading: boolean;
  error: string | null;
}

// Async thunk để fetch services từ Firebase
export const fetchQuangtruongslider1 = createAsyncThunk<Quangtruongslider1[]>(
  "quangtruongslider1/fetchQuangtruongslider1",
  async () => {
    const querySnapshot = await getDocs(collection(db, "quangtruongslider1"));
    const quangtruongslider1: Quangtruongslider1[] = querySnapshot.docs.map(
      (doc) => doc.data() as Quangtruongslider1
    );
    return quangtruongslider1;
  }
);

// Khởi tạo state ban đầu
const initialState: Quangtruongslider1State = {
  quangtruongslider1: [],
  loading: false,
  error: null,
};

const quangtruongslider1Slice = createSlice({
  name: "quangtruongslider1",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuangtruongslider1.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuangtruongslider1.fulfilled, (state, action) => {
        state.loading = false;
        state.quangtruongslider1 = action.payload; // Gán payload kiểu `Service[]` vào state
      })
      .addCase(fetchQuangtruongslider1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load services";
      });
  },
});

export default quangtruongslider1Slice.reducer;
