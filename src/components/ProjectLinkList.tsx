import React from 'react';
import { IconType } from 'react-icons/lib';
import { ProjectLink } from '../data/appData';

const githubIcon = React.lazy(() =>
  import('react-icons/fa').then((module) => ({ default: module.FaGithub }))
);
const appStoreIcon = React.lazy(() =>
  import('react-icons/fa').then((module) => ({ default: module.FaAppStore }))
);
const playStoreIcon = React.lazy(() =>
  import('react-icons/fa').then((module) => ({ default: module.FaGooglePlay }))
);

const lazyIcons = {
  github: githubIcon,
  appStore: appStoreIcon,
  playStore: playStoreIcon,
};

const ProjectLinkList = ({ links }: { links: ProjectLink[] }) => {
  return (
    <div className="flex flex-wrap gap-8">
      {links.map((link, index) => {
        const Icon = lazyIcons[link.icon as keyof typeof lazyIcons];

        return (
          <div key={index} className="mt-8">
            <a
              href={link.url}
              target="_blank"
              className="text-purple-400 font-semibold text-lg sm:text-xl hover:text-purple-300"
            >
              <Icon className=" w-10 h-10" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectLinkList;
