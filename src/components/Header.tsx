import React, { ReactElement, useState } from 'react';
import { Linkedin, Github, Instagram } from 'react-bootstrap-icons';
import { Link, Redirect } from 'react-router-dom';
import { animated, useTransition, config } from 'react-spring';

export default function Header(): ReactElement {
  return <DesktopHeader />;
}

const DesktopHeader = () => {
  const [open, setopen] = useState(false);

  const toggleMenu = () => {
    setopen(!open);
  };

  const transitions = useTransition(open, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 100,
    config: config.wobbly,
  });

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="bg-main-dark ">
      <div className={`min-w-full  ${open ? `py-32` : `py-10`}   opacity-70`}>
        <div className="fixed inset-x-0 top-0 bg-header  ">
          {/* Desktop Nav goes here */}

          <nav className="hidden lg:flex p-4 z-30  mx-auto justify-between items-center max-w-7xl text-gray-300">
            {/* LEFT */}

            <div className="text-4xl font-semibold ">Mahbubur</div>

            {/* Middle */}

            <div className="flex items-center text-gray-300 text-2xl font-semibold space-x-16">
              <Link
                to="/"
                className=" hover:text-appText transform ease-in-out hover:scale-125 duration-300 "
              >
                Projects
              </Link>

              <Link
                to="/tech"
                className=" hover:text-appText transform ease-in-out hover:scale-125 duration-300 "
              >
                Technologies
              </Link>

              <Link
                to="/about"
                className=" hover:text-appText transform ease-in-out hover:scale-125 duration-300 "
              >
                About
              </Link>
            </div>

            {/* Right */}

            <div className="flex items-center space-x-12">
              <Github
                onClick={() =>
                  openInNewTab('https://github.com/rifat0153?tab=repositories')
                }
                className=" h-6 w-6 transform hover:scale-125 transition ease-in-out duration-300"
              />{' '}
              <Linkedin
                onClick={() =>
                  openInNewTab(
                    'https://www.linkedin.com/in/mahbubur-rahman-988508172/'
                  )
                }
                className=" h-6 w-6 transform hover:scale-125 transition ease-in-out duration-300"
              />
              <Instagram
                onClick={() =>
                  openInNewTab('https://www.instagram.com/mahbuburrifat/')
                }
                className=" h-6 w-6 transform hover:scale-125 transition ease-in-out duration-300"
              />
            </div>
          </nav>

          {/* Mobile Nav goes here */}

          <nav className="flex z-50 lg:hidden h-12 justify-end items-center">
            <button onClick={toggleMenu} className="h-8 w-8 m-4 inline-flex">
              {transitions(({ opacity }, item) =>
                item ? (
                  <animated.div
                    style={{
                      position: 'absolute',
                      opacity: opacity.to({
                        range: [0.0, 1.0],
                        output: [0, 1],
                      }),
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                    {/* </div> */}
                  </animated.div>
                ) : (
                  <animated.div
                    style={{
                      position: 'absolute',
                      opacity: opacity.to({
                        range: [1.0, 0.0],
                        output: [1, 0],
                      }),
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </animated.div>
                )
              )}
            </button>
          </nav>
          <div
            id="mobile"
            className={` ${
              open ? 'flex-col items-end' : 'hidden'
            }  h-32 w-full p-4  space-y-2 text-gray-100 text-xl font-sans`}
          >
            <p>
              <Link to="/" className="">
                Projects
              </Link>
            </p>
            <p>
              <Link to="/tech" className="">
                {' '}
                Technologies
              </Link>
            </p>
            <p>
              <Link to="/about" className="">
                About
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
