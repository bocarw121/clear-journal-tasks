const storage = localStorage;
const cache = JSON.parse(storage.getItem('geoData'));

export const getLocalInformation = async (
  lat,
  lon,
  setCity,
  setState,
  setCountry
) => {
  try {
    if (cache) {
      const { city, state, country } = cache;

      // Sets state for city, state, and country
      setCity(city);
      setState(state);
      setCountry(country);
    } else {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`,
        {
          headers: {
            'User-Agent': 'Journal app',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }

      const data = await response.json();
      const { city, country, state } = data.address;

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
