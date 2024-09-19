// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Khiduoidai {
    title: string;
    description: string;
    imageUrl: string;
    date: string;

  }
  
  // Khai báo kiểu cho state
  interface KhiduoidaiState {
    khiduoidai: Khiduoidai[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchKhiduoidai = createAsyncThunk<Khiduoidai[]>(
    'khiduoidai/fetchKhiduoidai',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'khiduoidai'));
      const khiduoidai: Khiduoidai[] = querySnapshot.docs.map((doc) => doc.data() as Khiduoidai);
      return khiduoidai;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: KhiduoidaiState = {
    khiduoidai: [],
    loading: false,
    error: null,
  };
  
  const khiduoidaiSlice = createSlice({
    name: 'khiduoidai',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchKhiduoidai.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchKhiduoidai.fulfilled, (state, action) => {
          state.loading = false;
          state.khiduoidai = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchKhiduoidai.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default khiduoidaiSlice.reducer;