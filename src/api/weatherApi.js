import { getWithExpiry, setWithExpiry } from '../utils/sessionExpiry';

const TWELVE_HOURS = 1000 * 60 * 60 * 12;

export const fetchWeatherApi = async (coordinates) => {
  const apiKey = process.env.REACT_APP_OPENWEATHERAPI;
  const [latitude, longitude] = coordinates;

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,minutely,alerts&appid=${apiKey}`;

  try {
    const cache = getWithExpiry('weatherData');
    let weatherData = [];
    if (cache) {
      return cache;
    } else {
      const response = await fetch(url);
      const data = await response.json();

      const { temp, feels_like, weather } = data.current;
      const { icon, description } = weather[0];

      weatherData.push(temp, feels_like, icon, description);

      setWithExpiry('weatherData', weatherData, TWELVE_HOURS);

      return weatherData;
    }
  } catch (error) {
    console.error(error.message);
  }
};
