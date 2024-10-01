// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Watershowcontent {
  id: string;
  banner1: string;
  banner2: string;
  banner3: string;

  title: string;
  mota: string;
  content1: string;
  content2: string;

  description1: string[];
  description2: string[];
  description3: string[];
  }
  
  // Khai báo kiểu cho state
  interface WatershowcontentState {
    watershowcontent: Watershowcontent[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchWatershowcontents = createAsyncThunk<Watershowcontent[]>(
    'watershowcontent/fetchWatershowcontents',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'watershowcontent'));
      const watershowcontent: Watershowcontent[] = querySnapshot.docs.map((doc) => doc.data() as Watershowcontent);
      return watershowcontent;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: WatershowcontentState = {
    watershowcontent: [],
    loading: false,
    error: null,
  };
  
  const watershowcontentSlice = createSlice({
    name: 'watershowcontent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchWatershowcontents.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchWatershowcontents.fulfilled, (state, action) => {
          state.loading = false;
          state.watershowcontent = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchWatershowcontents.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default watershowcontentSlice.reducer;