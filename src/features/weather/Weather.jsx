import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { weatherSelector, fetchWeather } from './weatherSlice';
import { getLocalInformation } from '../../api/apiUtil/geocode';
import WeatherInformation from './components/WeatherInformation';
import './Weather.css';
import { getWithExpiry } from '../../utils/sessionExpiry';

const Weather = () => {
  const { weatherData, isLoading } = useSelector(weatherSelector);

  const localWeatherData = getWithExpiry('weatherData');
  const localGeoData = JSON.parse(localStorage.getItem('geoData'));

  const dispatch = useDispatch();

  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [latitude, setLatidude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const coordinates = [latitude, longitude];

          /* Set latitude and longitude to pass as props to the Error Component
           to use in the WeatherError component to re-dispatch fetchWeather.
        */
          setLatidude(latitude);
          setLongitude(longitude);

          /*  Takes in the coordinates and 3 setters and returns the city, 
        state and country using Geocode which are then set into local 
        state variables */

          if (!localGeoData) {
            getLocalInformation(
              latitude,
              longitude,
              setCity,
              setState,
              setCountry
            );
          }

          // if (weatherData && latitude && longitude) {
          if (!localWeatherData) {
            dispatch(fetchWeather(coordinates));
          }

          // }
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="weather-wrapper">
      <WeatherInformation
        weatherData={localWeatherData || weatherData}
        city={localGeoData?.city || city}
        state={localGeoData?.state || state}
        country={localGeoData?.country || country}
        isLoading={isLoading}
        latitude={latitude}
        longitude={longitude}
      />
    </div>
  );
};

export default Weather;
