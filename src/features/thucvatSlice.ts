// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface ThucvatCard {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    date: string;

  }
  
  // Khai báo kiểu cho state
  interface ThucvatCardState {
    thucvatcard: ThucvatCard[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchThucvatCard = createAsyncThunk<ThucvatCard[]>(
    'thucvat_card/fetchThucvatCard',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'thucvat_card'));
      const thucvatcard: ThucvatCard[] = querySnapshot.docs.map((doc) => doc.data() as ThucvatCard);
      return thucvatcard;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: ThucvatCardState = {
    thucvatcard: [],
    loading: false,
    error: null,
  };
  
  const ThucvatCardSlice = createSlice({
    name: 'thucvatcard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchThucvatCard.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchThucvatCard.fulfilled, (state, action) => {
          state.loading = false;
          state.thucvatcard = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchThucvatCard.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default ThucvatCardSlice.reducer;