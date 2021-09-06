import React, { ReactElement, useState, useEffect } from 'react';
import { List, Linkedin, Github, Instagram, XLg } from 'react-bootstrap-icons';
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

  // return <div>{width >= 800 ? <DesktopHeader /> : <MobileHeader />}</div>;
  return (
    <div>
      <DesktopHeader />{' '}
    </div>
  );
}

const MobileHeader = () => {
  const [show, set] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(show);

  return (
    <div className={'bg-main-dark  text-white'}>
      {/* Always open Row with Menu Button */}
      <div
        className="flex items-center h-50 px-8 py-2"
        onClick={() => {
          set(!show);
          setIsComponentVisible(!isComponentVisible);
        }}
      >
        <Transition
          items={isComponentVisible && show}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={{ duration: 200 }}
        >
          {({ opacity }, styles, item) =>
            show && isComponentVisible ? (
              <animated.div style={{}}>
                <div className="flex -mx-8 px-8 justify-end  w-screen">
                  <XLg className="w-8 h-8" />
                </div>
              </animated.div>
            ) : (
              <animated.div style={{}}>
                <div className="flex -mx-8 px-8 justify-between  w-screen">
                  <p className="font-mono text-2xl">Mahbubur</p>
                  <List className="w-8 h-8 " />
                </div>
              </animated.div>
            )
          }
        </Transition>
      </div>
      {/* menu list */}

      <div ref={ref} className="flex justify-end ">
        <Transition
          items={isComponentVisible && show}
          from={{ opacity: 0, marginRight: 300 }}
          enter={{ opacity: 1, marginRight: 0 }}
          leave={{}}
          config={{ duration: 200 }}
        >
          {(styles, item) =>
            item && (
              <animated.div style={styles}>
                <div
                  className={`flex-col text-right  min-w-screen px-7 pt-2 pb-4 space-y-3`}
                >
                  <div className="block  text-lg px-2">Projects</div>
                  <div className="block   text-lg px-2">Technologies</div>
                  <div className="block    text-lg px-2">About</div>
                  <div className="  flex justify-end items-center px-2 py-4 space-x-12">
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
    <div className="bg-main-dark ">
      <div className=" min-w-full py-10   opacity-70">
        <div className="fixed inset-x-0 top-0 bg-header  ">
          {/* Desktop Nav goes here */}

          <nav className="hidden lg:flex p-4 z-30  mx-auto justify-between items-center max-w-7xl text-gray-300">
            {/* LEFT */}

            <div className="text-4xl font-semibold ">Mahbubur</div>

            {/* Middle */}

            <div className="flex items-center text-gray-300 text-2xl font-semibold space-x-16">
              <a
                href="*"
                className=" hover:text-appText transform ease-in-out hover:scale-125 duration-300 "
              >
                Projects{' '}
              </a>

              <a
                href="*"
                className=" hover:text-appText transform ease-in-out hover:scale-125 duration-300 "
              >
                Technologies
              </a>

              <a
                href="*"
                className=" hover:text-appText transform ease-in-out hover:scale-125 duration-300 "
              >
                About{' '}
              </a>
            </div>

            {/* Right */}

            <div className="flex items-center space-x-12">
              <Github className=" h-6 w-6 transform hover:scale-125 transition ease-in-out duration-300" />
              <Linkedin className=" h-6 w-6 transform hover:scale-125 transition ease-in-out duration-300" />
              <Instagram className=" h-6 w-6 transform hover:scale-125 transition ease-in-out duration-300" />
            </div>
          </nav>

          {/* Mobile Nav goes here */}

          <nav className="flex lg:hidden">
            <div>Mobile Nav</div>
          </nav>
        </div>
      </div>
    </div>
  );
};
