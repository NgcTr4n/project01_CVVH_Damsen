// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Quangtruongslider2{
  description: string;
  imageUrl: string;
}

// Khai báo kiểu cho state
interface Quangtruongslider2State {
  quangtruongslider2: Quangtruongslider2[];
  loading: boolean;
  error: string | null;
}

// Async thunk để fetch services từ Firebase
export const fetchQuangtruongslider2 = createAsyncThunk<Quangtruongslider2[]>(
  "quangtruongslider2/fetchQuangtruongslider2",
  async () => {
    const querySnapshot = await getDocs(collection(db, "quangtruongslider2"));
    const quangtruongslider2: Quangtruongslider2[] = querySnapshot.docs.map(
      (doc) => doc.data() as Quangtruongslider2
    );
    return quangtruongslider2;
  }
);

// Khởi tạo state ban đầu
const initialState: Quangtruongslider2State = {
  quangtruongslider2: [],
  loading: false,
  error: null,
};

const quangtruongslider2Slice = createSlice({
  name: "quangtruongslider2",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuangtruongslider2.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuangtruongslider2.fulfilled, (state, action) => {
        state.loading = false;
        state.quangtruongslider2 = action.payload; // Gán payload kiểu `Service[]` vào state
      })
      .addCase(fetchQuangtruongslider2.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load services";
      });
  },
});

export default quangtruongslider2Slice.reducer;
