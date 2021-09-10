import React from 'react';
import ProjectList from '../components/ProjectList';
import appData, { AppInfo } from '../data/AppData';
import profileImg from '../static/images/profile.jpg';

interface Props {}

const HomePage = (props: Props) => {
  const data: AppInfo[] = appData;

  return (
    <div className=" bg-main-dark p-2 text-gray-100">
      <Profile />
      <div>
        <ProjectList appInfoList={data} />
      </div>
    </div>
  );
};

export default HomePage;

const Profile = () => {
  return (
    <>
      <img
        className="w-44 h-44 mt-8 shadow-lg mx-auto rounded-full object-cover object-top"
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
    </>
  );
};
