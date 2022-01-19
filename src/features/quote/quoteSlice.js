import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchQuotesApi } from '../../api/quotes';

export const fetchQuotes = createAsyncThunk('quote', fetchQuotesApi);

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quotes: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchQuotes.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchQuotes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.quotes = action.payload;
    },
    [fetchQuotes.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const quoteSelector = (state) => state.quote;

export default quoteSlice.reducer;
