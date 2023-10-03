import React from 'react';

import BgImageError from './components/BgImageError';

import WeatherError from './components/WeatherError';

import './Error.css';

const Error = ({ weather, latitude, longitude, bgImage, quote }) => {
  return (
    <div className={`${weather} ${bgImage} ${quote}`}>
      {weather ? (
        <WeatherError latitude={latitude} longitude={longitude} />
      ) : bgImage ? (
        <BgImageError />
      ) : null}
    </div>
  );
};

export default Error;
