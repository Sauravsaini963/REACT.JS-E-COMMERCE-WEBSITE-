import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Toastify } from "../../service/tostifyContainer";

// signup
export const signUp = createAsyncThunk("auth/signUp", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/users/register",
      data
    );
    console.log("register response", response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    return error.response.data;
  }
});
// sign in
export const signIn = createAsyncThunk("auth/signIn", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/users/login",
      data
    );
    console.log("login response", response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    return error.response.data;
  }
});
//  forgot password
export const ForgottenPassword = createAsyncThunk(
  "auth/ForgottenPassword",
  async (data) => {
    console.log("forgotten data", data);
    try {
      const response = await axios.post(
        "http://localhost:8080/users/forgotPassword",
        data
      );
      if (response.status == 200) {
        return response.data;
      }
    } catch (error) {
      return error.response.data;
    }
  }
);

// update password
export const upDatePassword = createAsyncThunk(
  "auth/changePassword",
  async ({ values, token }) => {
    console.log("updatepassword valuee", values);
    console.log("updatepassword token", token);

    try {
      const response = await axios.put(
        `http://localhost:8080/users/updatePassword/${token.token}`,
        {
          password: values.newpassword,
        }
      );
      console.log("send log post", response);
      if (response.data.success === true) {
        return response.data;
      }
    } catch (error) {
      return error.response.data;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder

      // signup
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        console.log("signUp action", action);

        if (action.payload.success === true) {
          Toastify({ value: true, msg: action.payload.message });
        } else {
          Toastify({ value: false, msg: action.payload.message });
        }
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
      })

      // login
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        console.log(" login action", action);
        if (action.payload.success === true) {
          Toastify({ value: true, msg: action.payload.message });
        } else {
          Toastify({ value: false, msg: action.payload.message });
        }
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
      })
      // forget password
      .addCase(ForgottenPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(ForgottenPassword.fulfilled, (state, action) => {
        state.loading = false;
        console.log(" forgotttt action", action);
        if (action.payload.success === true) {
          Toastify({ value: true, msg: action.payload.message });
        } else {
          Toastify({ value: false, msg: action.payload.message });
        }
      })
      .addCase(ForgottenPassword.rejected, (state, action) => {
        state.loading = false;
      })

      // upDate password
      .addCase(upDatePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(upDatePassword.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success === true) {
          Toastify({ value: true, msg: action.payload.message });
        } else {
          Toastify({ value: false, msg: action.payload.message });
        }
      })
      .addCase(upDatePassword.rejected, (state, action) => {
        state.loading = false;
      });
  },
});
export default authSlice.reducer;
