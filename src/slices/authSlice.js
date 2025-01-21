import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOGIN } from "../utils/helper";
import api from "../api/api";
import { toast } from "react-toastify";

export const asyncRegister = createAsyncThunk(
  "user/register",
  async (payload, thunkAPI) => {
    try {
      const response = await api.post("/user/signup", payload);
      if (response.status !== 201) {
        // Throw an error for non-200 responses
        throw new Error("Failed to register");
      }
      const data = await response.data;
      return data; // This resolves the promise with the payload
    } catch (error) {
      // Optional: Use thunkAPI to reject with a custom error
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const asyncLogin = createAsyncThunk(
  "user/login",
  async (payload, thunkAPI) => {
    try {
      const response = await api.post("/user/login", payload);

      if (response.status !== 200) {
        // Throw an error for non-200 responses
        throw new Error("Failed to register");
      }

      toast.success("LoggedIn successfull!");
      const data = await response.data;
      return data; // This resolves the promise with the payload
    } catch (error) {
      // Optional: Use thunkAPI to reject with a custom error
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const asyncLoggedInUser = createAsyncThunk(
  "user",
  async (payload, thunkAPI) => {
    try {
      const response = await api.get("/user");

      if (response.status !== 200) {
        // Throw an error for non-200 responses
        throw new Error("Failed to register");
      }
      const data = await response.data;
      toast.success("Loggedin successfull!");
      return data; // This resolves the promise with the payload
    } catch (error) {
      // Optional: Use thunkAPI to reject with a custom error
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    activeTab: LOGIN, // which tab to active in auth page
    isAuthorized: false,

    loginFormData: {
      email: "",
      password: "",
    },
    registerFormData: {
      name: "",
      email: "",
      password: "",
    },

    loginLoading: false,
    loginError: false,

    registerLoading: false,
    registerError: false,

    loggedInUser: {}, // loggedIn user data
    userLoading: false,
    userError: false,
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
  extraReducers: (builder) => {
    //register
    builder
      .addCase(asyncRegister.pending, (state) => {
        state.registerLoading = true;
        state.registerError = null;
      })
      .addCase(asyncRegister.fulfilled, (state) => {
        state.registerLoading = false;

        state.isAuthorized = true;
        state.registerError = false;
      })
      .addCase(asyncRegister.rejected, (state) => {
        state.isAuthorized = false;
        state.registerLoading = false;
        state.registerError = true;
      });
    //login
    builder
      .addCase(asyncLogin.pending, (state) => {
        state.registerLoading = true;
        state.registerError = null;
      })
      .addCase(asyncLogin.fulfilled, (state) => {
        state.registerLoading = false;
        state.isAuthorized = true;
        state.registerError = false;
      })
      .addCase(asyncLogin.rejected, (state) => {
        state.isAuthorized = false;
        state.registerLoading = false;
        state.registerError = true;
      });

    //loggedIn user
    builder
      .addCase(asyncLoggedInUser.pending, (state) => {
        state.loginLoading = true;
      })
      .addCase(asyncLoggedInUser.fulfilled, (state) => {
        state.loginLoading = false;
        state.isAuthorized = true;
        state.loginError = false;
      })
      .addCase(asyncLoggedInUser.rejected, (state) => {
        state.isAuthorized = false;
        state.loginError = false;
      });
  },
});

export const { setActiveTabe, setLoginFormData, setRegisterFormData } =
  authSlice.actions;
export default authSlice.reducer;
