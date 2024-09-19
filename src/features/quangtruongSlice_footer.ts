// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Quangtruong {
    title: string;
    description: string;
    imageUrl: string;
    date: string;

  }
  
  // Khai báo kiểu cho state
  interface QuangtruongState {
    quangtruong: Quangtruong[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchQuangtruong = createAsyncThunk<Quangtruong[]>(
    'quangtruong/fetchQuangtruong',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'quangtruong'));
      const quangtruong: Quangtruong[] = querySnapshot.docs.map((doc) => doc.data() as Quangtruong);
      return quangtruong;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: QuangtruongState = {
    quangtruong: [],
    loading: false,
    error: null,
  };
  
  const quangtruongSlice = createSlice({
    name: 'quangtruong',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchQuangtruong.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchQuangtruong.fulfilled, (state, action) => {
          state.loading = false;
          state.quangtruong = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchQuangtruong.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default quangtruongSlice.reducer;