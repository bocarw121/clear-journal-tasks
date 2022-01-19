import { createSlice } from '@reduxjs/toolkit';

import { fetchBackgroundImages } from '../backgroundImage/backgroundImageSlice';
import { fetchQuotes } from '../quote/quoteSlice';
import { fetchWeather } from '../weather/weatherSlice';

export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    errorMessages: {
      bgImage: false,
      weather: false,
      quote: false,
    },
  },
  reducers: {
    clearWeatherErrorMessage: (state) => {
      state.errorMessages.weather = false;
    },
    clearBgImageErrorMessage: (state) => {
      state.errorMessages.bgImage = false;
    },
    clearQuoteErrorMessage: (state) => {
      state.errorMessages.quote = false;
    },
  },
  extraReducers: {
    [fetchBackgroundImages.rejected]: (state) => {
      state.errorMessages.bgImage = true;
    },
    [fetchWeather.rejected]: (state) => {
      state.errorMessages.weather = true;
    },
    [fetchQuotes.rejected]: (state) => {
      state.errorMessages.quote = true;
    },
  },
});

export const errorSelector = (state) => state.error;

export const {
  clearWeatherErrorMessage,
  clearBgImageErrorMessage,
  clearQuoteErrorMessage,
} = errorSlice.actions;

export default errorSlice.reducer;
