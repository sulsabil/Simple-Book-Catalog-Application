import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { YourBookType } from "../types/bookType";

export const fetchBookData = createAsyncThunk(
  "books/fetchBookData",
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

export const createBookData = createAsyncThunk(
  "books/createBookData",
  async (bookData: YourBookType) => {
    const currentUser = useSelector(
      (state: RootState) => state.auth.currentUser
    );

    const res = await fetch("/api/v1/createBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...bookData,
        userRef: currentUser?._id || null,
      }),
    });

    const data = await res.json();
    return data;
  }
);

export const fetchBookDataDetails = createAsyncThunk(
  "books/fetchBookDataDetails",
  async (bookId: string) => {
    const url = `/api/v1/books/${bookId}`;
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch book details');
      }

      const data: YourBookType = await response.json();
      return data;
    } catch (error) {
     console.log(error)
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    currentBook: [] as YourBookType[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookData.fulfilled, (state, action) => {
        state.currentBook = action.payload;
      })
      .addCase(createBookData.fulfilled, (state, action) => {
        state.currentBook = action.payload;
      });
     
  },
});

export default bookSlice.reducer;
