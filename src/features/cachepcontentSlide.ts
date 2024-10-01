// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Cachepcontent {
    id: string;
  title: string;
  mota: string;
  content: string;
  date: string;
  description: string[];
  banner: string;
  }
  
  // Khai báo kiểu cho state
  interface CachepcontentState {
    cachepcontent: Cachepcontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchCachepcontent = createAsyncThunk<Cachepcontent[]>(
    'cachepcontent/fetchCachepcontent',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'cachepcontent'));
      const cachepcontent: Cachepcontent[] = querySnapshot.docs.map((doc) => doc.data() as Cachepcontent);
      return cachepcontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: CachepcontentState = {
    cachepcontent: [],
    loading: false,
    error: null,
  };
  
  const cachepcontentcontentSlice = createSlice({
    name: 'cachepcontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCachepcontent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCachepcontent.fulfilled, (state, action) => {
          state.loading = false;
          state.cachepcontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchCachepcontent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default cachepcontentcontentSlice.reducer;