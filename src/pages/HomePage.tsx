import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectList from '../components/ProjectList';
import {
  selectCurrentProject,
  selectProjectList,
  setCurrentTech,
  setCurrentIndex,
} from '../slices/projectSlice';
import profileImg from '../static/images/profile.jpg';

interface Props {}

const HomePage = (props: Props) => {
  const data = useSelector(selectProjectList);
  const selected = useSelector(selectCurrentProject);

  const dispatch = useDispatch();

  return (
    <div className=" bg-main-dark p-2 text-gray-200">
      <div>
        <input
          className="text-black mx-24"
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(setCurrentTech(e.target.value));
          }}
        />
        <input
          className="text-black"
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(setCurrentIndex(parseInt(e.target.value)));
          }}
        />
      </div>
      {selected.technologyList.map((item) => (
        <p>{item}</p>
      ))}
      <div></div>
      <div className="my-16">
        <Profile />
      </div>
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
