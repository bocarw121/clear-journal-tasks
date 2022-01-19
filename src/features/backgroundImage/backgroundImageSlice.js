import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchImages } from '../../api/unsplash';

export const fetchBackgroundImages = createAsyncThunk(
  'backgroundImage/fetchImages',
  fetchImages
);

const backgroundImageSlice = createSlice({
  name: 'backgroundImage',
  initialState: {
    imageUrls: [],
    currentImagePosition: 0,
    isLoading: false,
  },
  reducers: {
    nextImagePosition: (state) => {
      state.currentImagePosition =
        (state.currentImagePosition + 1 + state.imageUrls.length) %
        state.imageUrls.length;
    },
    previousImagePosition: (state) => {
      let currentImage = state.currentImagePosition - 1;
      if (currentImage < 0) {
        currentImage = state.imageUrls.length - 1;
      }

      state.currentImagePosition = currentImage;
    },
  },
  extraReducers: {
    [fetchBackgroundImages.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBackgroundImages.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.imageUrls = action.payload;
    },
    [fetchBackgroundImages.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const backgroundImageSelector = (state) => state.backgroundImage;

export const { nextImagePosition, previousImagePosition } =
  backgroundImageSlice.actions;

export default backgroundImageSlice.reducer;
