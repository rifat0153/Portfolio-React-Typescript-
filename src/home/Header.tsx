import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

interface Props {}

export default function Header({}: Props): ReactElement {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log(window.innerWidth);
      setWidth(window.innerWidth);
    });
  }, []);

  return <div>{width <= 640 ? <MobileHeader /> : <DesktopHeader />}</div>;
}

const MobileHeader = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="  h-50 justify-end px-8">
        Mobile
        <span className="fa fa-facebook"></span>
       
    </div>
  );
};

const DesktopHeader = () => {
  return (
    <div className="flex  justify-between px-8 py-4 bg-indigo-dark text-white">
      <div>logo</div>
      <div className="flex xl:pr-40 text-gray-200 text-xl space-x-4">
        <p className="flex">
          {' '}
          <p className="px-1 text-headerNumber">01. </p> About
        </p>
        <p className="flex">
          {' '}
          <p className="px-1 text-headerNumber">02. </p> Experience
        </p>
        <p className="flex">
          {' '}
          <p className="px-1 text-headerNumber">03. </p> Work
        </p>
        <p className="flex">
          {' '}
          <p className="px-1 text-headerNumber">04. </p> Contact
        </p>
      </div>
    </div>
  );
};
