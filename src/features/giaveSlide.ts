// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Giave {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  description: string;
  backgroundColor: string;
  bgColor: string;
  textColor: string;
  svgColor: string;
  link: string;
  }
  
  // Khai báo kiểu cho state
  interface GiaveState {
    giave: Giave[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchGiave = createAsyncThunk<Giave[]>(
    'giave/fetchGiave',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'giave'));
      const giave: Giave[] = querySnapshot.docs.map((doc) => doc.data() as Giave);
      return giave;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: GiaveState = {
    giave: [],
    loading: false,
    error: null,
  };
  
  const giavecontentSlice = createSlice({
    name: 'giave',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchGiave.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchGiave.fulfilled, (state, action) => {
          state.loading = false;
          state.giave = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchGiave.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default giavecontentSlice.reducer;