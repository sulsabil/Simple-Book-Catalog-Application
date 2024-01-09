import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserRegistration } from "../types/bookType";
import { RootState } from "./store";

export interface AuthState {
  loading: boolean;
  currentUser: UserRegistration | null;
  error: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const signUp = createAsyncThunk(
  "users/newUser",
  async (userData: UserRegistration, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 400) {
          return rejectWithValue({
            errorMessage: data.message || "Validation error occurred.",
          });
        } else {
          throw new Error(data.message || "An error occurred.");
        }
      }

      return data;
    } catch (error) {
      return rejectWithValue({ errorMessage: error });
    }
  }
);

export const signIn = createAsyncThunk(
  "users/login",
  async (
    formData: { emailAddress: string; password: string; remember: boolean },
    { rejectWithValue }
  ) => {
    try {
      const res = await fetch('/api/auth/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        
        credentials: 'include',


      });
      const data = await res.json();
     console.log('Server Response:', data);

      if (!res.ok) {
        throw new Error(data.message || "Login failed!");
      }

      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err);
    }
  }
);
 
export const signOut = createAsyncThunk(
  "users/logout",
  async () => {
    try {
      const res = await fetch("/api/auth/signOut");
      if (!res.ok) {
        throw new Error("Failed to log out");
      }
      return res.status;
    } catch (error) {
      throw new Error("Failed to log out");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error =
        action.error.message || "An error occurred during sign-up.";
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? `Error: ${action.payload}`
          : "Failed to sign in";
      })
      .addCase(signOut.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.currentUser = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "An error occurred during sign-out.";
      });
  },
});

export const selectAuthError = (state: RootState) => state.auth.error;
export default authSlice.reducer;
