// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Quangtruongslider3{
  description: string;
  imageUrl: string;
}

// Khai báo kiểu cho state
interface Quangtruongslider3State {
  quangtruongslider3: Quangtruongslider3[];
  loading: boolean;
  error: string | null;
}

// Async thunk để fetch services từ Firebase
export const fetchQuangtruongslider3 = createAsyncThunk<Quangtruongslider3[]>(
  "quangtruongslider3/fetchQuangtruongslider3",
  async () => {
    const querySnapshot = await getDocs(collection(db, "quangtruongslider3"));
    const quangtruongslider3: Quangtruongslider3[] = querySnapshot.docs.map(
      (doc) => doc.data() as Quangtruongslider3
    );
    return quangtruongslider3;
  }
);

// Khởi tạo state ban đầu
const initialState: Quangtruongslider3State = {
  quangtruongslider3: [],
  loading: false,
  error: null,
};

const quangtruongslider3Slice = createSlice({
  name: "quangtruongslider3",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuangtruongslider3.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuangtruongslider3.fulfilled, (state, action) => {
        state.loading = false;
        state.quangtruongslider3 = action.payload; // Gán payload kiểu `Service[]` vào state
      })
      .addCase(fetchQuangtruongslider3.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load services";
      });
  },
});

export default quangtruongslider3Slice.reducer;
