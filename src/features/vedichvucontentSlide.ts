// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Vedichvucontent {
  id: string;
  banner1: string;
  title: string;
  mota: string;
  description: string[];
  }
  
  // Khai báo kiểu cho state
  interface VedichvucontentState {
    vedichvucontent: Vedichvucontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchVedichvucontent = createAsyncThunk<Vedichvucontent[]>(
    'vedichvucontent/fetchVedichvucontent',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'vedichvucontent'));
      const vedichvucontent: Vedichvucontent[] = querySnapshot.docs.map((doc) => doc.data() as Vedichvucontent);
      return vedichvucontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: VedichvucontentState = {
    vedichvucontent: [],
    loading: false,
    error: null,
  };
  
  const vedichvucontentcontentSlice = createSlice({
    name: 'vedichvucontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchVedichvucontent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchVedichvucontent.fulfilled, (state, action) => {
          state.loading = false;
          state.vedichvucontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchVedichvucontent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default vedichvucontentcontentSlice.reducer;