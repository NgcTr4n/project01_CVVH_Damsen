// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Gioithieulist {
  id: string;
  banner: string;
  title: string;
  description: string;
  }
  
  // Khai báo kiểu cho state
  interface GioithieulistState {
    gioithieulist: Gioithieulist[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchGioithieulist = createAsyncThunk<Gioithieulist[]>(
    'gioithieulist/fetchGioithieulist',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'gioithieulist'));
      const gioithieulist: Gioithieulist[] = querySnapshot.docs.map((doc) => doc.data() as Gioithieulist);
      return gioithieulist;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: GioithieulistState = {
    gioithieulist: [],
    loading: false,
    error: null,
  };
  
  const gioithieulistcontentSlice = createSlice({
    name: 'gioithieulist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchGioithieulist.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchGioithieulist.fulfilled, (state, action) => {
          state.loading = false;
          state.gioithieulist = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchGioithieulist.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default gioithieulistcontentSlice.reducer;