import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-16 sm:pt-10 2xl:mt-10 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400/90 via-green-600 to-green-800/50">
      <button
        className="btn px-3 py-2 mb-4 sm:mb-2"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <img src="404.png" alt="404 ERROR" className="w-full sm:w-1/2 lg:w-1/3 2xl:w-fit" />
      <p className="text-white text-sm sm:text-lg text-center">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default PageNotFound;