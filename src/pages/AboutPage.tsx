import React from 'react';

interface Props {}

export const AboutPage = (props: Props) => {
  return (
    <div className="bg-main-dark text-gray-200">
      <main className="max-w-4xl mx-auto py-8">
        <p className="text-center font-bold lg:text-4xl text-3xl">
          About Mahbubur Rahman
        </p>

        <div className="grid grid-cols-2"></div>

        <div className="py-8 text-2xl">
          <p>
            I am a Full Stack Developer with 1 year commercial experience and
            graduate of Computer Science. I creates successful apps that are
            fast, easy to use, and built with best practices.
          </p>
        </div>
        <div className="grid grid-cols-2 space-x-2 ">
          {/* First Row */}
          <div className="pl-2 bg-gray-800">
            <text className="text-2xl">I am a Software Engineer. </text>
          </div>
          <div>
            <text>Right Side</text>
          </div>

          {/* 2nd Row */}
          <div className="bg-gray-800">
            <text className="text-2xl">I am a Software Engineer. </text>
          </div>
          <div>
            <text>Right Side</text>
          </div>

          <div className="text-4xl">Age</div>
          <div className="text-3xl">26</div>

          <div>5th Div</div>
        </div>
      </main>
    </div>
  );
};
