import React from 'react';
import { useDispatch } from 'react-redux';
import Project from '../components/Project';
import appData, { AppInfo } from '../data/AppData';
import { decrement, increment, selectCount } from '../slices/counterSlice';
import profileImg from '../static/images/profile.jpg';
import { useAppSelector } from '../store/hooks';

interface Props {}

const HomePage = (props: Props) => {
  const data: AppInfo[] = appData;

  const counter = useAppSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className=" bg-indigo-dark p-2 text-gray-100">
      <img
        className="w-44 h-44 mt-8 shadow-lg mx-auto rounded-full object-cover"
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

      <div className="flex justify-center items-center">
        <p className="text-6xl text-center">{counter}</p>

        <div onClick={() => dispatch(increment(2))}>Add random</div>
        <div onClick={() => dispatch(decrement(2))}>Decrease Random</div>
      </div>

      <div>
        <Project appInfoList= {data} />
      </div>
    </div>
  );
};

export default HomePage;
