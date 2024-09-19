// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Waterfooter {
    title: string;
    description: string;
    imageUrl: string;
    date: string;

  }
  
  // Khai báo kiểu cho state
  interface WaterfooterState {
    waterfooter: Waterfooter[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchWaterfooter = createAsyncThunk<Waterfooter[]>(
    'waterfooter/fetchWatershows',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'waterfooter'));
      const waterfooter: Waterfooter[] = querySnapshot.docs.map((doc) => doc.data() as Waterfooter);
      return waterfooter;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: WaterfooterState = {
    waterfooter: [],
    loading: false,
    error: null,
  };
  
  const waterfooterSlice = createSlice({
    name: 'waterfooter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchWaterfooter.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchWaterfooter.fulfilled, (state, action) => {
          state.loading = false;
          state.waterfooter = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchWaterfooter.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default waterfooterSlice.reducer;