// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Cachepslider{
  description: string;
  imageUrl: string;
}

// Khai báo kiểu cho state
interface CachepsliderState {
  cachepslider: Cachepslider[];
  loading: boolean;
  error: string | null;
}

// Async thunk để fetch services từ Firebase
export const fetchCachepslider = createAsyncThunk<Cachepslider[]>(
  "cachepslider/fetchCachepslider",
  async () => {
    const querySnapshot = await getDocs(collection(db, "cachepslider"));
    const cachepslider: Cachepslider[] = querySnapshot.docs.map(
      (doc) => doc.data() as Cachepslider
    );
    return cachepslider;
  }
);

// Khởi tạo state ban đầu
const initialState: CachepsliderState = {
  cachepslider: [],
  loading: false,
  error: null,
};

const cachepsliderSlice = createSlice({
  name: "cachepslider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCachepslider.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCachepslider.fulfilled, (state, action) => {
        state.loading = false;
        state.cachepslider = action.payload; // Gán payload kiểu `Service[]` vào state
      })
      .addCase(fetchCachepslider.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load services";
      });
  },
});

export default cachepsliderSlice.reducer;
