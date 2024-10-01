// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Dvxedien {
  id: string;
  loaihinh: string;
  songuoi: string;
  sotien: string;
  }
  
  // Khai báo kiểu cho state
  interface DvxedienState {
    dvxedien: Dvxedien[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchDvxedien = createAsyncThunk<Dvxedien[]>(
    'dvxedien/fetchDvxedien',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'dvxedien'));
      const dvxedien: Dvxedien[] = querySnapshot.docs.map((doc) => doc.data() as Dvxedien);
      return dvxedien;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: DvxedienState = {
    dvxedien: [],
    loading: false,
    error: null,
  };
  
  const dvxediencontentSlice = createSlice({
    name: 'dvxedien',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchDvxedien.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchDvxedien.fulfilled, (state, action) => {
          state.loading = false;
          state.dvxedien = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchDvxedien.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default dvxediencontentSlice.reducer;