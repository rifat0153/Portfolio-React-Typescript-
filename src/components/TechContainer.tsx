import React from 'react';
import { Tech } from '../data/TechList';

import { BsFillStarFill } from 'react-icons/bs';

interface Props {
  tech: Tech;
}

export const TechContainer = ({ tech }: Props) => {
  return (
    <div className="m-4 text-gray-200 p-4 flex flex-col rounded-3xl border-2 border-blue-500">
      {/* First Row */}
      <div className="p-4 font-medium text-4xl text-center relative z-0">
        <div className="">
          <img className="" src={tech.image} alt={tech.name} />
        </div>
        <div className="z-10">
          <p>{tech.name}</p>
        </div>
      </div>

      <div className="">
        {
          <div>
            <BsFillStarFill />
          </div>
        }
      </div>

      {/* Second Row */}
      <div>
        <p>{tech.description}</p>
      </div>

      {/* Divider */}
      <div className="">
        <hr className="my-4   border-1 w-full   border-gray-700" />
      </div>

      {/* Chips Row */}
      <div className="flex flex-wrap">
        {tech.chips.map((chip, key) => (
          <div
            key={key}
            className="bg-blue-500 max-w-max rounded-3xl px-4 py-2 mx-3 my-2 font-semibold shadow-md"
          >
            <p>{chip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
