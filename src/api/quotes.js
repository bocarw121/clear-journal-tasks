import { getWithExpiry, setWithExpiry } from "../utils/sessionExpiry";
// cache quotes for 12 hours
const TWELVE_HOURS = 1000 * 60 * 60 * 12;

export const fetchQuotesApi = async () => {
  const response = await fetch("http://quotes.rest/qod.json?category=inspire");
  const cache = getWithExpiry("quotes");
  let quoteDetails = [];
  if (cache) {
    console.log("cache");
    return cache;
  } else {
    const { contents } = await response.json();
    const { author, quote } = contents.quotes[0];
    setWithExpiry("quotes", [author, quote], TWELVE_HOURS);
    quoteDetails.push(author, quote);
    return quoteDetails;
  }
};
