import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchQuotes, quoteSelector } from './quoteSlice';
import { errorSelector } from '../error/errorSlice';
import Loading from '../../components/Loading';
import Error from '../error/Error';

import './Quote.css';

const Quote = () => {
  const { quotes, isLoading } = useSelector(quoteSelector);
  const { errorMessages } = useSelector(errorSelector);
  const [author, quote] = quotes;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  if (errorMessages.quote) {
    return <Error quote="quote-error" />;
  }

  if (isLoading || !quote) {
    return (
      <div className="quote-loading">
        <Loading
          type="cylon"
          color="#221f1f"
          height={'100px'}
          width={'100px'}
        />
      </div>
    );
  }
  return (
    <div className="quote">
      <div className="scrim">
        <blockquote>{quote}</blockquote>
        <cite>
          <span>-{author}</span>
        </cite>
      </div>
    </div>
  );
};

export default Quote;
