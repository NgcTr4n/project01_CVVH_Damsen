// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Dvchothue {
  id: string;
  chothue: string;
   gia: string[];
  }
  
  // Khai báo kiểu cho state
  interface DvchothueState {
    dvchothue: Dvchothue[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchDvchothue = createAsyncThunk<Dvchothue[]>(
    'dvchothue/fetchDvchothue',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'dvchothue'));
      const dvchothue: Dvchothue[] = querySnapshot.docs.map((doc) => doc.data() as Dvchothue);
      return dvchothue;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: DvchothueState = {
    dvchothue: [],
    loading: false,
    error: null,
  };
  
  const dvchothuecontentSlice = createSlice({
    name: 'dvchothue',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchDvchothue.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchDvchothue.fulfilled, (state, action) => {
          state.loading = false;
          state.dvchothue = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchDvchothue.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default dvchothuecontentSlice.reducer;