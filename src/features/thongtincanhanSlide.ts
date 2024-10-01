// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Thongtincanhan {
  id: string;
  content: string;
  description: string[];  
  }
  
  // Khai báo kiểu cho state
  interface ThongtincanhanState {
    thongtincanhan: Thongtincanhan[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchThongtincanhan = createAsyncThunk<Thongtincanhan[]>(
    'thongtincanhan/fetchThongtincanhan',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'thongtincanhan'));
      const thongtincanhan: Thongtincanhan[] = querySnapshot.docs.map((doc) => doc.data() as Thongtincanhan);
      return thongtincanhan;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: ThongtincanhanState = {
    thongtincanhan: [],
    loading: false,
    error: null,
  };
  
  const thongtincanhancontentSlice = createSlice({
    name: 'thongtincanhan',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchThongtincanhan.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchThongtincanhan.fulfilled, (state, action) => {
          state.loading = false;
          state.thongtincanhan = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchThongtincanhan.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default thongtincanhancontentSlice.reducer;