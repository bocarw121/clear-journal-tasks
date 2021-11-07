import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GEOAPI);

const storage = localStorage;
const cache = JSON.parse(storage.getItem("geoData"));
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
      setCity(city);
      setState(state);
      setCountry(country);
    } else {
      const response = await Geocode.fromLatLng(lat, lon);

      const data = await response;
      const city = data.results[0].address_components[2].long_name;
      const state = data.results[0].address_components[5].long_name;
      const country = data.results[0].address_components[6].long_name;

      storage.setItem("geoData", JSON.stringify({ city, state, country }));

      setCity(city);
      setState(state);
      setCountry(country);
    }
  } catch (error) {
    console.error(error.message);
  }
};
