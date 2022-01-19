/**
 *  Set localStorage item to expire after a given time
 *
 * @param  {string} key
 * @param  {any} value
 * @param  {number} ttl
 */
export const setWithExpiry = (key, value, ttl) => {
  const now = new Date();
  const session = {
    value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(session));
};

/**
 * Get localStorage item or remove it from localStorage
 * if it has expired
 *
 * @param  {string} key
 */

export const getWithExpiry = (key) => {
  const itemString = localStorage.getItem(key);
  if (!itemString) {
    return null;
  }
  const item = JSON.parse(itemString);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
