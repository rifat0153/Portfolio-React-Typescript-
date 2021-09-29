import React from 'react';

interface Props {}

export const AboutPage = (props: Props) => {
  return (
    <div className="bg-main-dark text-gray-200">
      <main className="max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-2">
          {/* Left Side */}
          <div>
            <text className="text-2xl">I am a Software Engineer. </text>
          </div>

          {/* Right Side */}
          <div>
            <text>Right Side</text>
          </div>
        </div>
      </main>
    </div>
  );
};
