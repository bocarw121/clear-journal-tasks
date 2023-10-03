import React from 'react';
import { useSelector } from 'react-redux';

import { errorSelector } from '../../../features/error/errorSlice';
import Loading from '../../../components/Loading';
import Error from '../../../features/error/Error';

const WeatherInformation = ({
  country,
  city,
  state,
  weatherData,
  isLoading,
  latitude,
  longitude,
}) => {
  const { errorMessages } = useSelector(errorSelector);
  const convertToFahrenheit = (temperature) => {
    return Math.round((temperature * 9) / 5 + 32);
  };

  const [temp, feelsLike, icon, description] = weatherData;

  if (errorMessages.weather) {
    return (
      <Error
        weather={'weather-Error'}
        latitude={latitude}
        longitude={longitude}
      />
    );
  }

  if (isLoading || !temp) {
    return (
      <div className="weather-loading">
        <Loading type="cylon" color="blue" height={'50px'} width={'60px'} />
      </div>
    );
  }
  return (
    <div>
      {city ? (
        <p className="location">
          {city}, {state}
        </p>
      ) : null}
      <div className="weather-information">
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
          />
        </div>
        <div className="temperature-and-description">
          {country === 'United States' ? (
            <p className="temp">{convertToFahrenheit(temp)}°F</p>
          ) : (
            <p className="temp">{Math.round(temp)}°C</p>
          )}
          <p>{description}</p>
        </div>
      </div>
      {country === 'United States' ? (
        <p>Feels like {convertToFahrenheit(feelsLike)}°F</p>
      ) : (
        <p>Feels like {Math.round(feelsLike)}°C</p>
      )}
    </div>
  );
};

export default WeatherInformation;
