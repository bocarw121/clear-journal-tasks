import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  backgroundImageSelector,
  fetchBackgroundImages,
} from './backgroundImageSlice';
import { errorSelector } from '../error/errorSlice';
import Loading from '../../components/Loading';
import Error from '../error/Error';

import './BackgroundImage.css';

const BackgroundImage = ({ children }) => {
  const { imageUrls, currentImagePosition, isLoading } = useSelector(
    backgroundImageSelector
  );
  const { errorMessages } = useSelector(errorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBackgroundImages());
  }, [dispatch]);

  if (errorMessages.bgImage) {
    return <Error bgImage="bg-image-error" />;
  }
  return (
    <div className="background-image-wrapper">
      {isLoading ? (
        <Loading
          bgImage="bg-loading"
          type="spin"
          color="#5f8bc5"
          height={'100px'}
          width={'60px'}
        />
      ) : (
        <img
          alt=""
          className="background-image"
          src={imageUrls[currentImagePosition]}
        />
      )}
      {children}
    </div>
  );
};

export default BackgroundImage;
