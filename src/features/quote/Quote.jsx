import React, { useEffect, useState } from 'react';

import Loading from '../../components/Loading';

import './Quote.css';
import { positiveQuotes } from '../../data/quotes';

const Quote = () => {
  const [quote, setQuote] = useState(null);

  function getRandomQuote() {
    const quote =
      positiveQuotes[Math.floor(Math.random() * positiveQuotes.length)];

    return quote;
  }

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  if (!quote) {
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
        <blockquote>{quote?.quote}</blockquote>
        <cite>
          <span>-{quote?.author}</span>
        </cite>
      </div>
    </div>
  );
};

export default Quote;
