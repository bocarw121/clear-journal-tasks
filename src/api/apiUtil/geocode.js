import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GEOAPI);

const cache = {};
export const getLocalInformation = async (
  lat,
  lon,
  setCity,
  setState,
  setCountry
) => {
  try {
    if (cache[lat + lon]) {
      console.log("from cache");
      const { city, state, country } = cache[lat + lon];
      setCity(city);
      setState(state);
      setCountry(country);
    } else {
      const response = await Geocode.fromLatLng(lat, lon);

      const data = await response;
      const city = data.results[0].address_components[2].long_name;
      const state = data.results[0].address_components[5].long_name;
      const country = data.results[0].address_components[6].long_name;

      cache[lat + lon] = { city, state, country };

      setCity(city);
      setState(state);
      setCountry(country);
    }
  } catch (error) {
    console.log(error.message);
  }
};
