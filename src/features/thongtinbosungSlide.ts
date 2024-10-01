// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Thongtinbosung {
  id: string;
  description: string[];  
  }
  
  // Khai báo kiểu cho state
  interface ThongtinbosungState {
    thongtinbosung: Thongtinbosung[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchThongtinbosung = createAsyncThunk<Thongtinbosung[]>(
    'thongtinbosung/fetchThongtinbosung',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'thongtinbosung'));
      const thongtinbosung: Thongtinbosung[] = querySnapshot.docs.map((doc) => doc.data() as Thongtinbosung);
      return thongtinbosung;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: ThongtinbosungState = {
    thongtinbosung: [],
    loading: false,
    error: null,
  };
  
  const thongtinbosungcontentSlice = createSlice({
    name: 'thongtinbosung',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchThongtinbosung.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchThongtinbosung.fulfilled, (state, action) => {
          state.loading = false;
          state.thongtinbosung = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchThongtinbosung.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default thongtinbosungcontentSlice.reducer;