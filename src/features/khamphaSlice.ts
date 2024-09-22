// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

// Định nghĩa kiểu cho dữ liệu service
interface Khampha{
  label_id: number;
  top: string;
  left: string;
  label: string;
  description: string;}

// Khai báo kiểu cho state
interface KhamphaState {
  khampha: Khampha[];
  loading: boolean;
  error: string | null;
}

// Async thunk để fetch services từ Firebase
export const fetchKhampha = createAsyncThunk<Khampha[]>(
  "khampha/fetchKhampha",
  async () => {
    const querySnapshot = await getDocs(collection(db, "khampha"));
    const khampha: Khampha[] = querySnapshot.docs.map(
      (doc) => doc.data() as Khampha
    );
    return khampha;
  }
);

// Khởi tạo state ban đầu
const initialState: KhamphaState = {
  khampha: [],
  loading: false,
  error: null,
};

const khamphaSlice = createSlice({
  name: "khampha",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchKhampha.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchKhampha.fulfilled, (state, action) => {
        state.loading = false;
        state.khampha = action.payload; // Gán payload kiểu `Service[]` vào state
      })
      .addCase(fetchKhampha.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load services";
      });
  },
});

export default khamphaSlice.reducer;
