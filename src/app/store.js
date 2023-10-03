import { configureStore } from '@reduxjs/toolkit';

import backgroundImageReducer from '../features/backgroundImage/backgroundImageSlice';
import weatherReducer from '../features/weather/weatherSlice';
import errorReducer from '../features/error/errorSlice';

export default configureStore({
  reducer: {
    backgroundImage: backgroundImageReducer,
    weather: weatherReducer,
    error: errorReducer,
  },
});
