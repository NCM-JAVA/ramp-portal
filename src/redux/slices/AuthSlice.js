
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authApi from "../../api/AuthAPI";

// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const res = await authApi.login({ email, password });
//       return res.data; 
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: JSON.parse(localStorage.getItem("user")) || null,
//     token: localStorage.getItem("token") || null,
//     loading: false,
//     error: null
//   },

//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//     },

//     saveUserDetails: (state, action) => {
//       console.log("Loaded from localStorage:", action.payload);

//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     }
//   },

//   extraReducers: (builder) => {
//     builder
//       // ===== LOGIN PENDING =====
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       // ===== LOGIN SUCCESS =====
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;

//         const { token, user_details } = action.payload;

//         state.token = token;
//         state.user = user_details;

//         // Save to localStorage
//         localStorage.setItem("token", token);
//         localStorage.setItem("user", JSON.stringify(user_details));
//       })

//       // ===== LOGIN FAILED =====
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Login failed";
//       });
//   }
// });

// export const { logout, saveUserDetails } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authData",
  initialState: {
    userDetails: {},
  },
  reducers: {
    saveUserDetails: (state, action) => {  
      console.log('auth slice data --- ', action.payload);
          
      state.userDetails = action.payload;
      // let data = JSON.parse(sessionStorage.getItem("loginUserDetails"))
      sessionStorage.setItem(
        "loginUserDetails",
        JSON.stringify(action.payload)
      );
    },
    
    logout: (state) => {
      state.user = null;
      state.token = null;
      // localStorage.removeItem("token");
      // localStorage.removeItem("user");
    },
  },
});

export const { saveUserDetails, logout } = authSlice.actions;
export default authSlice.reducer;

// src/store/slices/authSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   loading: false,
//   user: null,          // or userDetails if you prefer that name
//   token: null,
//   error: null
// };

// const authSlice = createSlice({
//   name: "authData",    // keep this name only for readability; store key matters below
//   initialState,
//   reducers: {
//     loginStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     loginUser: (state, action) => {
//       state.loading = false;
//       state.user = action.payload.user ?? action.payload; // defensive
//       state.token = action.payload.token ?? state.token;
//       // persist if needed
//       sessionStorage.setItem("loginUserDetails", JSON.stringify(state.user));
//     },
//     loginFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload ?? "Login failed";
//     },
//     saveUserDetails: (state, action) => {
//       state.user = action.payload;
//       sessionStorage.setItem("loginUserDetails", JSON.stringify(action.payload));
//     },
//     logout: (state) => {
//       state.loading = false;
//       state.user = null;
//       state.token = null;
//       state.error = null;
//       sessionStorage.removeItem("loginUserDetails");
//     },
//   },
// });

// export const { loginStart, loginUser, loginFailure, saveUserDetails, logout } = authSlice.actions;
// export default authSlice.reducer;
