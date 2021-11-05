import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GEOAPI);

export const getLocalInformation = async (
  lat,
  lon,
  setCity,
  setState,
  setCountry
) => {
  try {
     const response = await Geocode.fromLatLng(lat, lon);

  const data = await response;
  const city = data.results[0].address_components[2].long_name;
  const state = data.results[0].address_components[5].long_name;
  const country = data.results[0].address_components[6].long_name;

  setCity(city);
  setState(state);
  setCountry(country);
  } catch (error) {
    console.log(error.message)
  }
 
  
};
