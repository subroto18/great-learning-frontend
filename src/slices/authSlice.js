import { createSlice } from "@reduxjs/toolkit";
import { LOGIN } from "../utils/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    activeTab: LOGIN, // which tab to active in auth page
    loginFormData: {
      email: "",
      password: "",
    },
    registerFormData: {
      name: "",
      email: "",
      password: "",
    },
  },
  reducers: {
    setActiveTabe: (state, action) => {
      state.activeTab = action.payload;
    },
    setLoginFormData(state, action) {
      state.loginFormData = action.payload;
    },
    setRegisterFormData(state, action) {
      state.loginFormData = action.payload;
    },
    clearUser(state) {
      state.name = "";
      state.email = "";
    },
  },
});

export const { setActiveTabe, setLoginFormData, setRegisterFormData } =
  authSlice.actions;
export default authSlice.reducer;
