import { Github } from 'react-bootstrap-icons';
import { AppInfo } from '../data/AppData';

interface Props {
  appInfo: AppInfo;
  switchSide: boolean;
}

const ProjectDetail = ({ appInfo, switchSide }: Props) => {
  console.log(switchSide);

  return (
    <div>
      {/* APPINFO DIV */}
      <div className="grid md:grid-cols-2">
        {/* Image DIV */}
        <div
          className={`${switchSide ? 'hidden' : ''} grid grid-cols-2 space-x-2`}
        >
          <ShowImages appInfo={appInfo} />
        </div>

        {/* Description DIV */}
        <div className="px-2 py-4 text-gray-300 font-mono">
          <Description appInfo={appInfo} />
        </div>
        {/* Image DIV For Side Switch */}
        <div className={`${switchSide ? '' : 'hidden'}  grid grid-cols-2`}>
          <ShowImages appInfo={appInfo} />
        </div>
      </div>

      {/* DIVIDER DIV */}
      <div className="flex justify-center w-full">
        <hr className="mt-16 sm:mt-48 mx-16  border-1 w-full   border-gray-700" />
      </div>
    </div>
  );
};

export default ProjectDetail;

const ShowImages = ({ appInfo }: { appInfo: AppInfo }) => {
  return (
    <>
      <div className="relative mx-auto pl-2 py-4">
        <img
          className="w-screen md:w-48 border-2 border-gray-400 object-cover object-center   h-full  my-2 rounded-2xl"
          src={appInfo.image1}
          alt={appInfo.title}
        />
      </div>

      <div className="mx-auto pr-2 py-4 ">
        <img
          className="w-screen md:w-48 border-2 border-gray-400 object-cover object-center   h-full  my-2 rounded-2xl"
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
