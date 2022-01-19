import React from 'react';
import { useDispatch } from 'react-redux';

import '../BackgroundImage.css';
import { previousImagePosition } from '../backgroundImageSlice';

const PreviousButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(previousImagePosition())}
      className="button previous"
    >
      {'<'}
    </button>
  );
};

export default PreviousButton;
