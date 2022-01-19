import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color, height, width, bgImage, task }) => {
  return (
    <div>
      <ReactLoading
        className={bgImage || task}
        type={type}
        color={color}
        height={height}
        width={width}
      />
    </div>
  );
};

export default Loading;
