import React from 'react';
import profileImg from '../static/images/profile.jpg';

interface Props {}

export const HomePage = (props: Props) => {
  return (
    <div className="w-screen bg-gray-100 p-2">
      <img
        className="w-36 h-36 mt-8 shadow-lg mx-auto rounded-full object-cover"
        src={profileImg}
        alt="a"
      />

      <p className="mt-8 text-center font-medium text-2xl md:text-5xl">
        Mahbubur Rahman
      </p>
      <p className="pt-2 md:pt-8 text-center text-xl  md:text-3xl">
        Product Builder
      </p>
      <p className="py-1 md:py-2 text-center text-md md:text-xl">
        Flutter Developer
      </p>
    </div>
  );
};
