
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/AuthAPI";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await authApi.login({ email, password });
      return res.data; 
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null
  },

  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },

    setUserFromStorage: (state, action) => {
      console.log("Loaded from localStorage:", action.payload);

      state.user = action.payload.user;
      state.token = action.payload.token;
    }
  },

  extraReducers: (builder) => {
    builder
      // ===== LOGIN PENDING =====
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // ===== LOGIN SUCCESS =====
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        const { token, user_details } = action.payload;

        state.token = token;
        state.user = user_details;

        // Save to localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user_details));
      })

      // ===== LOGIN FAILED =====
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  }
});

export const { logout, setUserFromStorage } = authSlice.actions;
export default authSlice.reducer;
