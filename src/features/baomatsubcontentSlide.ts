// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Baomatsubcontent {
    id: string;
    content: string;
    description: string[];
  }
  
  // Khai báo kiểu cho state
  interface BaomatsubcontentState {
    baomatsubcontent: Baomatsubcontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchBaomatsubcontent = createAsyncThunk<Baomatsubcontent[]>(
    'baomatsubcontent/fetchBaomatsubcontent',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'baomatsubcontent'));
      const baomatsubcontent: Baomatsubcontent[] = querySnapshot.docs.map((doc) => doc.data() as Baomatsubcontent);
      return baomatsubcontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: BaomatsubcontentState = {
    baomatsubcontent: [],
    loading: false,
    error: null,
  };
  
  const baomatsubcontentcontentSlice = createSlice({
    name: 'baomatsubcontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchBaomatsubcontent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchBaomatsubcontent.fulfilled, (state, action) => {
          state.loading = false;
          state.baomatsubcontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchBaomatsubcontent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default baomatsubcontentcontentSlice.reducer;