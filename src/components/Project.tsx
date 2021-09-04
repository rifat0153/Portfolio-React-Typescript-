import { AppInfo } from '../data/AppData';
import ProjectDetail from './ProjectDetail';

interface Props {
  appInfoList: AppInfo[];
}

const Project = ({ appInfoList }: Props): JSX.Element => {
  return (
    <div className="max-w-7xl   mx-auto">
      Project Showcase
      {appInfoList.map((item: AppInfo) => (
        <div key={item.id} className="mt-8 sm:mt-16">
          {item.id % 2 === 0 ? (
            <ProjectDetail appInfo={item} switchSide={true} />
          ) : (
            <ProjectDetail appInfo={item} switchSide={false} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Project;
