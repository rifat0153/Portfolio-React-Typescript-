import { AppInfo } from '../data/AppData';
import ProjectDetail from './ProjectDetail';

interface Props {
  appInfoList: AppInfo[];
}

const ProjectList = ({ appInfoList }: Props): JSX.Element => {
  return (
    <div className="max-w-7xl   mx-auto">
      Project Showcase
      {appInfoList.map((item: AppInfo) => (
        <div key={item.id} className="my-16 sm:mt-32 sm:mb-48">
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

export default ProjectList;
