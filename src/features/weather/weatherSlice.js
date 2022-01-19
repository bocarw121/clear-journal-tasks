import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchWeatherApi } from '../../api/weatherApi';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  fetchWeatherApi
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherData: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchWeather.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.weatherData = action.payload;
    },
    [fetchWeather.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const weatherSelector = (state) => state.weather;

export default weatherSlice.reducer;
