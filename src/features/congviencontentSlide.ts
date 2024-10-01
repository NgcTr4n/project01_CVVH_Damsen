// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Congviencontent {
  id: string;
  banner: string;
  title: string;
  mota: string;
  }
  
  // Khai báo kiểu cho state
  interface CongviencontentState {
    congviencontent: Congviencontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchCongviencontent = createAsyncThunk<Congviencontent[]>(
    'congviencontent/fetchCongviencontent',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'congviencontent'));
      const congviencontent: Congviencontent[] = querySnapshot.docs.map((doc) => doc.data() as Congviencontent);
      return congviencontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: CongviencontentState = {
    congviencontent: [],
    loading: false,
    error: null,
  };
  
  const congviencontentcontentSlice = createSlice({
    name: 'congviencontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCongviencontent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCongviencontent.fulfilled, (state, action) => {
          state.loading = false;
          state.congviencontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchCongviencontent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default congviencontentcontentSlice.reducer;