// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Thucvatcontent {
  id: string;
  title: string;
  title2: string;
  content: string;
  date: string;
  description: string[];
  banner: string;
  }
  
  // Khai báo kiểu cho state
  interface ThucvatcontentState {
    thucvatcontent: Thucvatcontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchThucvatcontent = createAsyncThunk<Thucvatcontent[]>(
    'thucvatcontent/fetchThucvatcontent',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'thucvatcontent'));
      const thucvatcontent: Thucvatcontent[] = querySnapshot.docs.map((doc) => doc.data() as Thucvatcontent);
      return thucvatcontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: ThucvatcontentState = {
    thucvatcontent: [],
    loading: false,
    error: null,
  };
  
  const thucvatcontentcontentSlice = createSlice({
    name: 'thucvatcontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchThucvatcontent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchThucvatcontent.fulfilled, (state, action) => {
          state.loading = false;
          state.thucvatcontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchThucvatcontent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default thucvatcontentcontentSlice.reducer;