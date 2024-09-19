// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface SukienSlider {
    title: string;
    description: string;
    imageUrl: string;
    id: number

  }
  
  // Khai báo kiểu cho state
  interface SukienSliderState {
    sukienslider: SukienSlider[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchSukienSlider = createAsyncThunk<SukienSlider[]>(
    'sukienslider/fetchSukienSlider',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'sukienslider'));
      const sukienslider: SukienSlider[] = querySnapshot.docs.map((doc) => doc.data() as SukienSlider);
      return sukienslider;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: SukienSliderState = {
    sukienslider: [],
    loading: false,
    error: null,
  };
  
  const SukienSliderSlice = createSlice({
    name: 'sukienslider',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSukienSlider.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSukienSlider.fulfilled, (state, action) => {
          state.loading = false;
          state.sukienslider = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchSukienSlider.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default SukienSliderSlice.reducer;