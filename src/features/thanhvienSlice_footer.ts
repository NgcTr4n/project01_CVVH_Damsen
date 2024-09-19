// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Thanhvien {
    title: string;
    description: string;
    imageUrl: string;
    date: string;

  }
  
  // Khai báo kiểu cho state
  interface ThanhvienState {
    thanhvien: Thanhvien[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchThanhvien = createAsyncThunk<Thanhvien[]>(
    'thanhvien/fetchThanhvien',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'thanhvien'));
      const thanhvien: Thanhvien[] = querySnapshot.docs.map((doc) => doc.data() as Thanhvien);
      return thanhvien;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: ThanhvienState = {
    thanhvien: [],
    loading: false,
    error: null,
  };
  
  const thanhvienSlice = createSlice({
    name: 'thanhvien',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchThanhvien.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchThanhvien.fulfilled, (state, action) => {
          state.loading = false;
          state.thanhvien = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchThanhvien.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default thanhvienSlice.reducer;