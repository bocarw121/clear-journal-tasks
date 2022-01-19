import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchQuotes } from '../../quote/quoteSlice';
import { clearQuoteErrorMessage } from '../errorSlice';

const QuoteError = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Error loading Quote</p>
      <button
        onClick={() => {
          dispatch(fetchQuotes());
          dispatch(clearQuoteErrorMessage());
        }}
        className="refresh-button"
      >
        Refresh
      </button>
    </div>
  );
};

export default QuoteError;
