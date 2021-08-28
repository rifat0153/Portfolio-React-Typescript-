import React, { ReactElement, useState, useEffect } from 'react';
import { List, Linkedin, Github, Instagram } from 'react-bootstrap-icons';
import { Transition, animated } from 'react-spring';
import useComponentVisible from '../hooks/UseComponentVisible';

export default function Header(): ReactElement {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return <div>{width >= 640 ? <DesktopHeader /> : <MobileHeader />}</div>;
}

const MobileHeader = () => {
  const [show, set] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(show);

  return (
    <div className={'bg-indigo-dark  text-white'}>
      {/* Always open Row with Menu Button */}
      <div
        className="flex items-center h-50 justify-end px-8 py-2"
        onClick={() => {
          set(!show);
          setIsComponentVisible(!isComponentVisible);
        }}
      >
        <List className="block" size={40} />
      </div>
      {/* menu list */}

      <div ref={ref} className="bg">
        <Transition
          items={isComponentVisible && show}
          from={{ opacity: 0, marginRight: 500 }}
          enter={{ opacity: 1, marginRight: 0 }}
          leave={{}}
          config={{ duration: 300 }}
        >
          {(styles, item) =>
            item && (
              <animated.div style={styles}>
                <div
                  className={`flex-col  items-center justify-end text-right px-7 pt-2 pb-4 space-y-3`}
                >
                  <div className="text-lg px-2">Projects</div>
                  <div className="text-lg px-2">Technologies</div>
                  <div className=" text-lg px-2">About</div>
                  <div className="flex justify-around items-center py-4">
                    <Github className=" h-5 w-5" />
                    <Linkedin className=" h-5 w-5" />
                    <Instagram className=" h-5 w-5" />
                  </div>
                </div>
              </animated.div>
            )
          }
        </Transition>
      </div>
    </div>
  );
};

const DesktopHeader = () => {
  return (
    <div className=" min-w-full   bg-indigo-dark">
      <div className="flex h-20  mx-auto justify-between max-w-7xl items-center  text-gray-300">
        {/* LEFT */}
        <div className="text-4xl font-semibold">Portfolio</div>
        {/* Middle */}
        <div className="flex items-center text-gray-300 text-2xl font-semibold space-x-8">
          <p className=" text-headerNumber"> </p> Projects
          <p className=" text-headerNumber"> </p> Technologies
          <p className=" text-headerNumber"> </p> About
        </div>
        {/* Right */}
        <div className="flex items-center space-x-12">
          <Github className=" h-6 w-6" />
          <Linkedin className=" h-6 w-6" />
          <Instagram className=" h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
