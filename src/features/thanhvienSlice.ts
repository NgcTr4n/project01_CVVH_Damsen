// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Thanhviennhahang {
  description: string;
  imageUrl: string;
}

// Khai báo kiểu cho state
interface ThanhviennhahangState {
  thanhviennhahang: Thanhviennhahang[];
  loading: boolean;
  error: string | null;
}

// Async thunk để fetch services từ Firebase
export const fetchThanhviennhahang = createAsyncThunk<Thanhviennhahang[]>(
  "thanhviennhahang/fetchThanhviennhahang",
  async () => {
    const querySnapshot = await getDocs(collection(db, "thanhviennhahang"));
    const thanhviennhahang: Thanhviennhahang[] = querySnapshot.docs.map(
      (doc) => doc.data() as Thanhviennhahang
    );
    return thanhviennhahang;
  }
);

// Khởi tạo state ban đầu
const initialState: ThanhviennhahangState = {
  thanhviennhahang: [],
  loading: false,
  error: null,
};

const thanhviennhahangSlice = createSlice({
  name: "thanhvien",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchThanhviennhahang.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchThanhviennhahang.fulfilled, (state, action) => {
        state.loading = false;
        state.thanhviennhahang = action.payload; // Gán payload kiểu `Service[]` vào state
      })
      .addCase(fetchThanhviennhahang.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load services";
      });
  },
});

export default thanhviennhahangSlice.reducer;
