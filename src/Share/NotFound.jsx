import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle';

const NotFound = () => {
  return (
    <>
      <PageTitle title="404"></PageTitle>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-homeBg-dark">
        <h1 className="font-extrabold leading-none text-white text-7xl md:text-8xl">
          404!
        </h1>
        <p className="px-4 mt-6 text-sm text-center text-white capitalize  text-medium mb-7">
          the page you are looking for does not exist
        </p>

        <Link
          to="/"
          className="flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[5px]"
        >
          Back To Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
