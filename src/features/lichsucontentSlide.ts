// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Lichsucontent {
  id: string;
  title: string;
  mota: string;
  description: string[];
  history: string;
  milestones: string[];
  banner1: string; // Store URLs of the images
  banner2: string;
  }
  
  // Khai báo kiểu cho state
  interface LichsucontentState {
    lichsucontent: Lichsucontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchLichsucontent = createAsyncThunk<Lichsucontent[]>(
    'lichsucontent/fetchLichsucontent',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'lichsucontent'));
      const lichsucontent: Lichsucontent[] = querySnapshot.docs.map((doc) => doc.data() as Lichsucontent);
      return lichsucontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: LichsucontentState = {
    lichsucontent: [],
    loading: false,
    error: null,
  };
  
  const lichsucontentcontentSlice = createSlice({
    name: 'lichsucontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchLichsucontent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchLichsucontent.fulfilled, (state, action) => {
          state.loading = false;
          state.lichsucontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchLichsucontent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default lichsucontentcontentSlice.reducer;