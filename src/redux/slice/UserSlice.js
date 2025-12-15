import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserAPI from "../../api/UserAPI";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, {rejectWithValue}) => {
        try{
            const res = await UserAPI.getAllUsers();
            console.log('user list - ', res.data);
            return res.data;
        }catch(err){
            return rejectWithValue(err.response.data.message);
        }
    }
);

const UserSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
        details: null,
        loading: false,
        error: null
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export default UserSlice.reducer;