const storage = localStorage;
const cache = JSON.parse(storage.getItem('geoData'));

export const getLocalInformation = async (
  lat,
  lon,
  setCity,
  setState,
  setCountry
) => {
  const { REACT_APP_OPENCAGE_API_KEY } = process.env;
  try {
    if (cache) {
      const { city, state, country } = cache;

      // Sets state for city, state, and country
      setCity(city);
      setState(state);
      setCountry(country);
    } else {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${REACT_APP_OPENCAGE_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }

      const data = await response.json();
      const { city, country, state } = data.results[0].components;

      // Sets the geodata for city, state, and country in cache
      storage.setItem('geoData', JSON.stringify({ city, state, country }));

      setCity(city);
      setState(state);
      setCountry(country);
    }
  } catch (error) {
    console.error(error.message);
  }
};
