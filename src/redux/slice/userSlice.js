import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: "",
        loaderContent: "",
        snackBarContent: ""
    },
    reducers: {
        saveUserDetails: (state, action) => {
            state.userName = action.payload;
        },
        saveSnackbar: (state, action) => {
            state.snackBarContent = action.payload;
        },
        saveLoader: (state, action) => {
            state.loaderContent = action.payload;
        }
    }
})
export const { saveUserDetails, saveSnackbar, saveLoader } = userSlice.actions;
export default userSlice.reducer;