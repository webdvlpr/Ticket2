import { configureStore, createSlice } from '@reduxjs/toolkit';


export const auth = createSlice({
  name: 'user',
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("userId");
      state.isLoggedIn = false;
    },
  },
});

export const  userid  = auth.actions;

export const store = configureStore({
  reducer: auth.reducer,
});