// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Service {
    title: string;
    description: string;
    imageUrl: string;
    color: string;
  }
  
  // Khai báo kiểu cho state
  interface ServicesState {
    services: Service[];
    loading: boolean;
    error: string | null;
  }
  
  // Async thunk để fetch services từ Firebase
  export const fetchServices = createAsyncThunk<Service[]>(
    'services/fetchServices',
    async () => {
      const querySnapshot = await getDocs(collection(db, 'services'));
      // Mapping dữ liệu Firebase thành kiểu `Service[]`
      const services: Service[] = querySnapshot.docs.map((doc) => doc.data() as Service);
      return services;
    }
  );
  
  // Khởi tạo state ban đầu
  const initialState: ServicesState = {
    services: [],
    loading: false,
    error: null,
  };
  
  const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchServices.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchServices.fulfilled, (state, action) => {
          state.loading = false;
          state.services = action.payload; // Gán payload kiểu `Service[]` vào state
        })
        .addCase(fetchServices.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load services';
        });
    },
  });
  
  export default servicesSlice.reducer;