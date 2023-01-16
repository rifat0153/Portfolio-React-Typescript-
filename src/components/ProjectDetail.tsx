import { useEffect } from 'react';
import { Github } from 'react-bootstrap-icons';
import { FaAppStore } from 'react-icons/fa';
import { Project, ProjectLink } from '../data/appData';
import Aos from 'aos';

import 'aos/dist/aos.css';
import ProjectLinkList from './ProjectLinkList';

interface Props {
  project: Project;
  switchSide: boolean;
}

const ProjectDetail = ({ project, switchSide }: Props) => {
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
        {!switchSide && (
          <div className=" grid grid-cols-2 space-x-6 ">
            <AppImages appInfo={project} />
          </div>
        )}

        {/* Description DIV */}
        <div
          data-aos={switchSide ? 'fade-right' : 'fade-left'}
          className="px-2 py-4 text-gray-300 font-mono"
        >
          <Description appInfo={project} />
        </div>

        {/* Image DIV For Side Switch */}
        {switchSide && (
          <div className="grid grid-cols-2 space-x-2">
            <AppImages appInfo={project} />
          </div>
        )}
      </div>

      {/* Technogloy LIST */}
      <div
        className="mt-16 flex flex-wrap justify-center mx-auto max-w-xl  divide-x divide-gray-300 text-lg sm:text-2xl
                     font-bold  text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        {project.technologyList.map((item, index) => (
          <div key={index} className="px-2 my-2">
            <p>{item} </p>
          </div>
        ))}
      </div>

      {/* DIVIDER DIV */}
      <hr className="my-16  border-1 w-full   border-gray-700" />
    </div>
  );
};

export default ProjectDetail;

const AppImages = ({ appInfo }: { appInfo: Project }) => {
  return (
    <>
      <div data-aos="zoom-in" className=" mx-auto px-4  py-4 z-10">
        <img
          className="w-screen   border-2 border-purple-200 object-cover object-center h-full  my-2 rounded-2xl"
          src={appInfo.image1}
          alt={appInfo.title}
        />
      </div>

      <div data-aos="zoom-in" className="mx-auto py-4 pr-4 z-10">
        <img
          className="w-screen  border-2 border-purple-200 object-cover object-center h-full my-2 rounded-2xl"
          src={appInfo.image2}
          alt={appInfo.title}
        />
      </div>
    </>
  );
};

const Description = ({ appInfo }: { appInfo: Project }) => {
  return (
    <div className="flex flex-col justify-between h-full w-full">
      <div>
        <p className=" font-bold   text-3xl sm:text-4xl text-appText">
          {appInfo.title}
        </p>
        <p className="mt-4 text-gray-400 font-semibold  text-lg sm:text-xl">
          {appInfo.introduction}
        </p>

        {appInfo.description && (
          <>
            <p className="mt-8 text-3xl sm:text-4xl text-appText">Technology</p>
            <p className="mt-4 text-lg  sm:text-xl text-gray-400">
              {appInfo.description}
            </p>
          </>
        )}
      </div>

      <div className="mt-auto">
        <ProjectLinkList links={appInfo.links ?? []} />
      </div>
    </div>
  );
};
