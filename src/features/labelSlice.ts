import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../API/firebaseConfig";

export interface LabelPosition {
  id: number;
  top: string;
  left: string;
  label: string;
  description: string;
}

interface LabelState {
  labels: LabelPosition[];
  loading: boolean;
  error: string | null;
}

export const fetchLabels = createAsyncThunk("labels/fetchLabels", async () => {
  const querySnapshot = await getDocs(collection(db, "labels"));
  const labels: LabelPosition[] = [];
  querySnapshot.forEach((doc) => {
    labels.push({ id: Number(doc.id), ...doc.data() } as LabelPosition);
  });
  return labels;
});

const initialState: LabelState = {
  labels: [],
  loading: false,
  error: null,
};

const labelSlice = createSlice({
  name: "labels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLabels.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLabels.fulfilled, (state, action: PayloadAction<LabelPosition[]>) => {
        state.loading = false;
        state.labels = action.payload;
      })
      .addCase(fetchLabels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default labelSlice.reducer;
