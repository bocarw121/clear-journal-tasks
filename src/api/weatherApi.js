const cache = {};

export const fetchWeatherApi = async (coordinates) => {
  const apiKey = process.env.REACT_APP_OPENWEATHERAPI;
  const [latitude, longitude] = coordinates;

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,minutely,alerts&appid=${apiKey}`;

  try {
    let weatherData = [];
    if (cache[url]) {
      weatherData.push(...cache[url]);
      return weatherData;
    } else {
      const response = await fetch(url);
      const data = await response.json();
      const { temp, feels_like, weather } = data.current;
      const { icon, description } = weather[0];

      weatherData.push(temp, feels_like, icon, description);

      cache[url] = weatherData;
      return weatherData;
    }
  } catch (error) {
    console.log(error.message);
  }
};
