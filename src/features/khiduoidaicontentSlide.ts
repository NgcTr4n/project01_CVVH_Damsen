// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Khiduoidaicontent {
  id: string;
  title: string;
  mota: string;
  content: string;
  content1: string;
  date: string;
  description1: string[];
  banner: string;
  content2: string;
  description2: string[];
  description3: string[];
  khi1: string;
  khi2: string;
  khi3: string;
  }
  
  // Khai báo kiểu cho state
  interface KhiduoidaicontentState {
    khiduoidaicontent: Khiduoidaicontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchKhiduoidaicontent = createAsyncThunk<Khiduoidaicontent[]>(
    'khiduoidaicontent/fetchKhiduoidaicontent',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'khiduoidaicontent'));
      const khiduoidaicontent: Khiduoidaicontent[] = querySnapshot.docs.map((doc) => doc.data() as Khiduoidaicontent);
      return khiduoidaicontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: KhiduoidaicontentState = {
    khiduoidaicontent: [],
    loading: false,
    error: null,
  };
  
  const khiduoidaicontentcontentSlice = createSlice({
    name: 'khiduoidaicontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchKhiduoidaicontent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchKhiduoidaicontent.fulfilled, (state, action) => {
          state.loading = false;
          state.khiduoidaicontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchKhiduoidaicontent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default khiduoidaicontentcontentSlice.reducer;