import { AppInfo } from '../data/AppData';
import ProjectDetail from './ProjectDetail';

interface Props {
  appInfoList: AppInfo[];
}

const Project = ({ appInfoList }: Props): JSX.Element => {
  return (
    <div className="max-w-7xl bg-red-600  m-auto">
      Project Showcase
      {appInfoList.map((item: AppInfo) => (
        <div key={item.id}>
          <ProjectDetail appInfo={item} />
        </div>
      ))}
    </div>
  );
};

export default Project;
