export const fetchImages = async () => {
  const url = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;
  const response = await fetch(url);
  const images = await response.json();
  return images.map((image) => image.urls.full);
};
