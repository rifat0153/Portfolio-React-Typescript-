import { Github } from 'react-bootstrap-icons';
import { AppInfo } from '../data/AppData';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface Props {
  appInfo: AppInfo;
  switchSide: boolean;
}

const ProjectDetail = ({ appInfo, switchSide }: Props) => {
  console.log(switchSide);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out-quart',
    });
  }, []);

  return (
    <div className="pt-16">
      {/* APPINFO GRID */}
      <div className="grid md:grid-cols-2">
        {/* Image DIV */}
        <div
          className={`${switchSide ? 'hidden' : ''} grid grid-cols-2 space-x-2`}
        >
          <ShowImages appInfo={appInfo} />
        </div>

        {/* Description DIV */}
        <div
          data-aos={`${switchSide ? 'fade-right' : 'fade-left'}`}
          className="px-2 py-4 text-gray-300 font-mono"
        >
          <Description appInfo={appInfo} />
        </div>

        {/* Image DIV For Side Switch */}
        <div
          className={`${
            switchSide ? '' : 'hidden'
          }  grid grid-cols-2 space-x-2`}
        >
          <ShowImages appInfo={appInfo} />
        </div>
      </div>

      {/* Technogloy LIST */}
      <div className="mt-16">
        <div
          className="flex flex-wrap justify-center mx-auto max-w-xl  divide-x divide-gray-300 text-lg sm:text-2xl
                     font-bold  text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          {appInfo.technologyList.map((item, index) => (
            <div className="px-2 my-2">
              <p key={index}>{item} </p>
            </div>
          ))}
        </div>
      </div>

      {/* DIVIDER DIV */}
      <div className="flex justify-center w-full">
        <hr className="my-16  border-1 w-full   border-gray-700" />
      </div>
    </div>
  );
};

export default ProjectDetail;

const ShowImages = ({ appInfo }: { appInfo: AppInfo }) => {
  return (
    <>
      <div data-aos="zoom-in" className=" mx-auto  py-4">
        <img
          className="w-screen  346 border-2 border-gray-400 object-cover object-center   h-full  my-2 rounded-2xl"
          src={appInfo.image1}
          alt={appInfo.title}
        />
      </div>

      <div data-aos="zoom-in" className="mx-auto  py-4 ">
        <img
          className="w-screen 346 border-2 border-gray-400 object-cover object-center   h-full  my-2 rounded-2xl"
          src={appInfo.image2}
          alt={appInfo.title}
        />
      </div>
    </>
  );
};

const Description = ({ appInfo }: { appInfo: AppInfo }) => {
  return (
    <div className="">
      <p className=" font-bold   text-3xl sm:text-4xl text-appText">
        {appInfo.title}
      </p>
      <p className="mt-4 text-gray-400 font-semibold  text-lg sm:text-xl">
        {appInfo.introduction}
      </p>
      <p className="mt-8 text-3xl sm:text-4xl text-appText">Technology</p>
      <p className="mt-4 text-lg  sm:text-xl text-gray-400">
        {appInfo.technology}
      </p>

      {/* LINK DIV */}
      <div className=" flex mt-16 justify-center items-center">
        <div className="flex   max-w-lg justify-center items-center text-xl font-sans font-extralight text-green-300">
          <p className="flex border-r-2 border-gray-400 bg-indigo-800 hover:bg-indigo-900 px-8 py-4 rounded-l-xl  ">
            CODE
          </p>
          <div className="flex bg-indigo-800 hover:bg-indigo-900 px-8 py-4 rounded-r-xl ">
            <Github className="h-7 w-7" />
          </div>
        </div>
      </div>
    </div>
  );
};
