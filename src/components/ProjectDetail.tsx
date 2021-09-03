import React from 'react';
import { AppInfo } from '../data/AppData';

interface Props {
  appInfo: AppInfo;
}

const ProjectDetail = ({ appInfo }: Props) => {
  return (
    <div className="lg:flex justify-center ">
      {/* Image DIV */}
      <div className="flex-shrink-0 lg:flex mx-auto md:space-x-4 px-2 ">
        <div>
          <img
            className=" object-cover h-full w-screen my-2 rounded-2xl  lg:w-52 lg:h-auto lg:min-w-0 "
            src={appInfo.image1}
            alt={appInfo.title}
          />
        </div>

        <div className=" ">
          <img
            className="hidden lg:block object-cover h-full w-screen my-2 rounded-2xl   lg:w-52 lg:h-auto lg:min-w-0"
            src={appInfo.image2}
            alt={appInfo.title}
          />
        </div>
      </div>
      {/* Description DIV */}
      <div className="mx-auto lg:mx-28 w-full text-left">
        <p className="text-gray-100 font-bold font-mono text-2xl">
          {appInfo.title}
        </p>
        <p className="text-gray-100 font-semibold font-mono text-lg">
          {appInfo.introduction}
        </p>
        <p>Technology</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
