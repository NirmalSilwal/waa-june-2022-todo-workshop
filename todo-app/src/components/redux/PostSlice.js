import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async (param) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
);

const initialState = {
  posts: [],
  loading: "idle",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
