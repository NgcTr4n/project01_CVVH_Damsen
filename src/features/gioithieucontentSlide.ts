// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Gioithieucontent {
  id: string;
  banner: string;
  title: string;
  description: string;
  }
  
  // Khai báo kiểu cho state
  interface GioithieucontentState {
    gioithieucontent: Gioithieucontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchGioithieucontent = createAsyncThunk<Gioithieucontent[]>(
    'gioithieucontent/fetchGioithieucontent',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'gioithieucontent'));
      const gioithieucontent: Gioithieucontent[] = querySnapshot.docs.map((doc) => doc.data() as Gioithieucontent);
      return gioithieucontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: GioithieucontentState = {
    gioithieucontent: [],
    loading: false,
    error: null,
  };
  
  const gioithieucontentcontentSlice = createSlice({
    name: 'gioithieucontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchGioithieucontent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchGioithieucontent.fulfilled, (state, action) => {
          state.loading = false;
          state.gioithieucontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchGioithieucontent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default gioithieucontentcontentSlice.reducer;