import { getWithExpiry, setWithExpiry } from '../utils/sessionExpiry';
// cache quotes for 12 hours
const TWELVE_HOURS = 1000 * 60 * 60 * 12;

export const fetchQuotesApi = async () => {
  const cache = getWithExpiry('quotes');
  let quoteDetails = [];

  // TODO default quote till issue is resolved with https request to api
  const defaultQuote = [
    'Michael John Bobak',
    'All progress takes place outside the comfort zone.',
  ];
  if (cache) {
    return cache;
  } else {
    try {
      const response = await fetch('https://quotes.rest/qod?category=inspire');
      const { contents } = await response.json();
      const { author, quote } = contents.quotes[0];

      setWithExpiry('quotes', [author, quote], TWELVE_HOURS);

      return [author, quote];
    } catch (error) {
      return defaultQuote;
    }
  }
};
