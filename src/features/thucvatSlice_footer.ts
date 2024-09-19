// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Thucvat {
    title: string;
    description: string;
    imageUrl: string;
    date: string;

  }
  
  // Khai báo kiểu cho state
  interface ThucvatState {
    thucvat: Thucvat[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchThucvat = createAsyncThunk<Thucvat[]>(
    'thucvat/fetchThucvat',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'thucvat'));
      const thucvat: Thucvat[] = querySnapshot.docs.map((doc) => doc.data() as Thucvat);
      return thucvat;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: ThucvatState = {
    thucvat: [],
    loading: false,
    error: null,
  };
  
  const thucvatSlice = createSlice({
    name: 'thucvat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchThucvat.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchThucvat.fulfilled, (state, action) => {
          state.loading = false;
          state.thucvat = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchThucvat.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default thucvatSlice.reducer;