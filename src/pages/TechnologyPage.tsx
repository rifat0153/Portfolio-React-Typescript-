import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

interface Props {}

export const TechnologyPage = (props: Props) => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: 'ease-in-out-quart',
    });
  }, []);

  return (
    <div className="justify-center mx-auto max-w-7xl bg-gray-300 grid grid-col-1 text-center">
      <div className="bg-blue-100 my-8 h-96 w-96 rounded-lg">1</div>
      <div className="bg-blue-100 my-8 h-96 w-96 rounded-lg">2</div>
      <div data-aos="fade-up" className="bg-blue-100 my-8 h-96 w-96 rounded-lg">
        3
      </div>
      <div className="bg-blue-100 my-8 h-96 w-96 rounded-lg">4</div>
      <div className="bg-blue-100 my-8 h-96 w-96 rounded-lg">5</div>
    </div>
  );
};
