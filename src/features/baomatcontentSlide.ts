// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Baomatcontent {
  id: string;
  banner1: string;
  banner2: string;
  title: string;
  mota: string;
  content: string;
  description: string[];
  }
  
  // Khai báo kiểu cho state
  interface BaomatcontentState {
    baomatcontent: Baomatcontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchBaomatcontent = createAsyncThunk<Baomatcontent[]>(
    'baomatcontent/fetchBaomatcontent',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'baomatcontent'));
      const baomatcontent: Baomatcontent[] = querySnapshot.docs.map((doc) => doc.data() as Baomatcontent);
      return baomatcontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: BaomatcontentState = {
    baomatcontent: [],
    loading: false,
    error: null,
  };
  
  const baomatcontentcontentSlice = createSlice({
    name: 'baomatcontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchBaomatcontent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchBaomatcontent.fulfilled, (state, action) => {
          state.loading = false;
          state.baomatcontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchBaomatcontent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default baomatcontentcontentSlice.reducer;