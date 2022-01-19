import React from 'react';
import { useDispatch } from 'react-redux';

import '../BackgroundImage.css';
import { nextImagePosition } from '../backgroundImageSlice';

const NextButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(nextImagePosition())}
      className="button next"
    >
      {'>'}
    </button>
  );
};

export default NextButton;
