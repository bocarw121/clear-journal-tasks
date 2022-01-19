import React from 'react';
import { useDispatch } from 'react-redux';

import { clearWeatherErrorMessage } from '../errorSlice';
import { fetchWeather } from '../../weather/weatherSlice';

import '../Error.css';

const WeatherError = ({ latitude, longitude }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Error Loading Weather</p>
      <button
        onClick={() => {
          dispatch(fetchWeather([latitude, longitude]));
          dispatch(clearWeatherErrorMessage());
        }}
        className="refresh-button"
      >
        Refresh
      </button>
    </div>
  );
};

export default WeatherError;
