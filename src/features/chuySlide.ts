// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Chuy {
  id: string;
  content: string;
  description: string;  
  }
  
  // Khai báo kiểu cho state
  interface ChuyState {
    chuy: Chuy[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchChuy = createAsyncThunk<Chuy[]>(
    'chuy/fetchChuy',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'chuy'));
      const chuy: Chuy[] = querySnapshot.docs.map((doc) => doc.data() as Chuy);
      return chuy;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: ChuyState = {
    chuy: [],
    loading: false,
    error: null,
  };
  
  const chuycontentSlice = createSlice({
    name: 'chuy',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchChuy.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchChuy.fulfilled, (state, action) => {
          state.loading = false;
          state.chuy = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchChuy.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default chuycontentSlice.reducer;