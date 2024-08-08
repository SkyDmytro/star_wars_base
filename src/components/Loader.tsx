import React from 'react';
import '../styles/loader.style.scss';
import { SpinnerCircular } from 'spinners-react';
export const Loader = () => {
  return (
    <div className="loader">
      <SpinnerCircular color="white" size={100} />
    </div>
  );
};
