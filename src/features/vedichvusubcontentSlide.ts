// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Vedichvusubcontent {
  id: string;
  title1: string;
  title2: string;
  title3: string;
  note1: string;
  note2: string;
  description1: string[];
  description3: string[];
  }
  
  // Khai báo kiểu cho state
  interface VedichvusubcontentState {
    vedichvusubcontent: Vedichvusubcontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchVedichvusubcontent = createAsyncThunk<Vedichvusubcontent[]>(
    'vedichvusubcontent/fetchVedichvusubcontent',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'vedichvusubcontent'));
      const vedichvusubcontent: Vedichvusubcontent[] = querySnapshot.docs.map((doc) => doc.data() as Vedichvusubcontent);
      return vedichvusubcontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: VedichvusubcontentState = {
    vedichvusubcontent: [],
    loading: false,
    error: null,
  };
  
  const vedichvusubcontentcontentSlice = createSlice({
    name: 'vedichvusubcontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchVedichvusubcontent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchVedichvusubcontent.fulfilled, (state, action) => {
          state.loading = false;
          state.vedichvusubcontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchVedichvusubcontent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default vedichvusubcontentcontentSlice.reducer;