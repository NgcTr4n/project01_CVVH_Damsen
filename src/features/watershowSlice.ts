// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Watershow {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    date: string;

  }
  
  // Khai báo kiểu cho state
  interface WatershowState {
    watershow: Watershow[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchWatershows = createAsyncThunk<Watershow[]>(
    'watershow/fetchWatershows',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'watershow'));
      const watershow: Watershow[] = querySnapshot.docs.map((doc) => doc.data() as Watershow);
      return watershow;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: WatershowState = {
    watershow: [],
    loading: false,
    error: null,
  };
  
  const watershowSlice = createSlice({
    name: 'watershow',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchWatershows.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchWatershows.fulfilled, (state, action) => {
          state.loading = false;
          state.watershow = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchWatershows.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default watershowSlice.reducer;