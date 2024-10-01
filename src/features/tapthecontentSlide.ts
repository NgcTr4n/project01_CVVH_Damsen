// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Tapthecontent {
  id: string;
  banner: string;
  title: string;
  mota: string;
  description1: string[];
  list1: string;
  content1: string[];
  list2: string;
  content2: string;
  list3: string;
  content3: string[];
  list4: string;
  content4: string;
  description2: string;
  diachi: string;
  sodt: string;
  }
  
  // Khai báo kiểu cho state
  interface TapthecontentState {
    tapthecontent: Tapthecontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchTapthecontent = createAsyncThunk<Tapthecontent[]>(
    'tapthecontent/fetchTapthecontent',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'tapthecontent'));
      const tapthecontent: Tapthecontent[] = querySnapshot.docs.map((doc) => doc.data() as Tapthecontent);
      return tapthecontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: TapthecontentState = {
    tapthecontent: [],
    loading: false,
    error: null,
  };
  
  const tapthecontentcontentSlice = createSlice({
    name: 'tapthecontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchTapthecontent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchTapthecontent.fulfilled, (state, action) => {
          state.loading = false;
          state.tapthecontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchTapthecontent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default tapthecontentcontentSlice.reducer;