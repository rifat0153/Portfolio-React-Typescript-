import { AppInfo } from '../data/AppData';
import ProjectDetail from './ProjectDetail';

interface Props {
  appInfoList: AppInfo[];
}

const ProjectList = ({ appInfoList }: Props): JSX.Element => {
  return (
    <div className="max-w-5xl mx-auto">
      {appInfoList.map((item) => (
        <div key={item.id} className="">
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
