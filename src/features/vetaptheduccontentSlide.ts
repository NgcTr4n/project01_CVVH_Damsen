// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Vetaptheduccontent {
  id: string;
  banner1: string;
  title: string;
  mota: string;
  description: string[];
  }
  
  // Khai báo kiểu cho state
  interface VetaptheduccontentState {
    vetaptheduccontent: Vetaptheduccontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchVetaptheduccontent = createAsyncThunk<Vetaptheduccontent[]>(
    'vetaptheduccontent/fetchVetaptheduccontent',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'vetaptheduccontent'));
      const vetaptheduccontent: Vetaptheduccontent[] = querySnapshot.docs.map((doc) => doc.data() as Vetaptheduccontent);
      return vetaptheduccontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: VetaptheduccontentState = {
    vetaptheduccontent: [],
    loading: false,
    error: null,
  };
  
  const vetaptheduccontentcontentSlice = createSlice({
    name: 'vetaptheduccontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchVetaptheduccontent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchVetaptheduccontent.fulfilled, (state, action) => {
          state.loading = false;
          state.vetaptheduccontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchVetaptheduccontent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default vetaptheduccontentcontentSlice.reducer;