import React from 'react';
import { AppInfo } from '../data/AppData';

interface Props {
  appInfo: AppInfo;
  switchSide: boolean;
}

const ProjectDetail = ({ appInfo, switchSide }: Props) => {
  console.log(switchSide);

  return (
    <div className="grid md:grid-cols-2">
      {/* Image DIV */}
      <div className={`${switchSide? 'hidden' : '' } grid grid-cols-2`}>
        <div className="relative mx-auto pl-2 py-4">
          <img
            className="w-screen md:w-48 object-cover object-center  h-full  my-2 rounded-2xl    "
            src={appInfo.image1}
            alt={appInfo.title}
          />
        </div>

        <div className="mx-auto pr-2 py-4 ">
          <img
            className="w-screen md:w-48 object-cover object-center  h-full  my-2 rounded-2xl   "
            src={appInfo.image2}
            alt={appInfo.title}
          />
        </div>
      </div>
      {/* Description DIV */}
      <div className="px-2 py-4 text-gray-300 font-mono">
        <p className=" font-bold  text-3xl sm:text-4xl">{appInfo.title}</p>
        <p className="mt-4 text-gray-400 font-semibold  text-lg sm:text-xl">
          {appInfo.introduction}
        </p>
        <p className="mt-8 text-3xl sm:text-4xl">Technology</p>
        <p className="mt-4 text-lg  sm:text-xl text-gray-400">
          {appInfo.technology}
        </p>
      </div>
      {/* Image DIV For Side Switch */}
      <div className={`${switchSide ? '' : 'hidden'}  grid grid-cols-2`}>
        <div className="relative mx-auto pl-2 py-4">
          <img
            className="w-screen md:w-48 object-cover object-center  h-full  my-2 rounded-2xl    "
            src={appInfo.image1}
            alt={appInfo.title}
          />
        </div>

        <div className="mx-auto pr-2 py-4 ">
          <img
            className="w-screen md:w-48 object-cover object-center  h-full  my-2 rounded-2xl   "
            src={appInfo.image2}
            alt={appInfo.title}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

{
  /* <div className="lg:flex justify-center ">
{/* Image DIV 
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
Description DIV 
<div className="mx-auto lg:mx-28 w-full text-left">
  <p className="text-gray-100 font-bold font-mono text-2xl">
    {appInfo.title}
  </p>
  <p className="text-gray-100 font-semibold font-mono text-lg">
    {appInfo.introduction}
  </p>
  <p>Technology</p>
</div>
</div> */
}
