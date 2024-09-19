// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Cachep {
    title: string;
    description: string;
    imageUrl: string;
    date: string;

  }
  
  // Khai báo kiểu cho state
  interface CachepState {
    cachep: Cachep[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchCachep = createAsyncThunk<Cachep[]>(
    'cachep/fetchCachep',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'cachep'));
      const cachep: Cachep[] = querySnapshot.docs.map((doc) => doc.data() as Cachep);
      return cachep;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: CachepState = {
    cachep: [],
    loading: false,
    error: null,
  };
  
  const cachepSlice = createSlice({
    name: 'cachep',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCachep.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCachep.fulfilled, (state, action) => {
          state.loading = false;
          state.cachep = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchCachep.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default cachepSlice.reducer;