import React, { ReactElement, useState, useEffect } from 'react';
import { List } from 'react-bootstrap-icons';
import { Transition, animated } from 'react-spring';
import useComponentVisible from './../hooks/UseComponentVisible';

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
  const [show, set] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  return (
    <div className="bg-indigo-dark text-white">
      {/* Always open Row with Menu Button */}
      <div
        className="flex items-center h-50 justify-end px-8 py-2"
        onClick={() => {
          set(!show)
          setIsComponentVisible(!isComponentVisible)
        } }
      >
        <List className="block" size={40} />
      </div>
      {/* menu list */}

      <div ref={ref} className="bg">
        <Transition
          items={isComponentVisible && show}
          from={{ opacity: 0, marginRight: 500 }}
          enter={{ opacity: 1, marginRight: 0 }}
          leave={{  }}
          config={{ duration: 300 }}

        >
          {(styles, item) =>
            item && (
              <animated.div style={styles}>
                <div
                  className={`flex-col  items-center justify-end text-right px-7 pt-2 pb-4 space-y-3`}
                >
                  <div className="text-lg px-2">About</div>
                  <div className="text-lg px-2">Experience</div>
                  <div className=" text-lg px-2">Work</div>
                  <div className=" text-lg px-2">Contact</div>
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
