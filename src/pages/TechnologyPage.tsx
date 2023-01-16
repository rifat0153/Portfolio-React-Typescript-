import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import techs from '../data/techList';
import { TechContainer } from '../components/TechContainer';

interface Props {}

export const TechnologyPage = (props: Props) => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: 'ease-in-out-quart',
    });
  }, []);

  return (
    <div className="bg-main-light">
      <div className="mx-auto  grid grid-col-1 max-w-5xl">
        {techs.map((tech, key) => (
          <TechContainer tech={tech} key={key} />
        ))}
      </div>
    </div>
  );
};
