import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { weatherSelector, fetchWeather } from "./weatherSlice";
import { getLocalInformation } from "../../api/apiUtil/geocode";
import WeatherInformation from "./components/WeatherInformation";
import "./Weather.css";

const Weather = () => {
  const { weatherData, isLoading } = useSelector(weatherSelector);

  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [latitude, setLatidude] = useState("");
  const [longitude, setLongitude] = useState("");



  useEffect(() => {
    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
       
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
        getLocalInformation(latitude, longitude, setCity, setState, setCountry);
        dispatch(fetchWeather(coordinates));
      }, (err) => {
        console.error(err)
      });
    } else {
      console.log("Could not get location");
    }
  }, [dispatch, city, country]);
  return (
    <div className='weather-wrapper'>
      <WeatherInformation
        weatherData={weatherData}
        city={city}
        state={state}
        country={country}
        isLoading={isLoading}
        latitude={latitude}
        longitude={longitude}
      />
    </div>
  );
};

export default Weather;
