// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Thanhviencontent {
  id: string;
  banner: string;
  title: string;
  mota: string;
  content1: string;
  description1: string[];
  logo1: string;
  content2: string;
  description2: string[];
  logo2: string;
  }
  
  // Khai báo kiểu cho state
  interface ThanhviencontentState {
    thanhviencontent: Thanhviencontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchThanhviencontent = createAsyncThunk<Thanhviencontent[]>(
    'thanhviencontent/fetchThanhviencontent',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'thanhviencontent'));
      const thanhviencontent: Thanhviencontent[] = querySnapshot.docs.map((doc) => doc.data() as Thanhviencontent);
      return thanhviencontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: ThanhviencontentState = {
    thanhviencontent: [],
    loading: false,
    error: null,
  };
  
  const thanhviencontentcontentSlice = createSlice({
    name: 'thanhviencontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchThanhviencontent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchThanhviencontent.fulfilled, (state, action) => {
          state.loading = false;
          state.thanhviencontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchThanhviencontent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default thanhviencontentcontentSlice.reducer;