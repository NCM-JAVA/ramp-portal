
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

export const registerUser = createAsyncThunk(
    "auth/register",
    async (formData, { rejectWithValue }) => {
        try {
            const res = await authApi.register(formData);
            return res.data;
        } catch (err) {
            return rejectWithValue(
                err.response?.data || { message: "Registration failed. Please try again." }
            );
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) || null,
        token: localStorage.getItem("token") || null,
        loading: false,
        error: null,
        registrationSuccess: false,
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
        },

        clearError: (state) => {
            state.error = null;
        },

        resetRegistrationState: (state) => {
            state.registrationSuccess = false;
            state.error = null;
        },
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
            })

            // ===== REGISTER PENDING =====
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.registrationSuccess = false;
            })

            // ===== REGISTER SUCCESS =====
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.registrationSuccess = true;
                state.error = null;
            })

            // ===== REGISTER FAILED =====
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.registrationSuccess = false;
                state.error = action.payload || { message: "Registration failed" };
            });
    }
});

export const { logout, setUserFromStorage, clearError, resetRegistrationState } = authSlice.actions;
export default authSlice.reducer;
