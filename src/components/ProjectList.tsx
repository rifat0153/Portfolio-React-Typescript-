import { AppInfo } from '../data/AppData';
import ProjectDetail from './ProjectDetail';

interface Props {
  appInfoList: AppInfo[];
}

const ProjectList = ({ appInfoList }: Props): JSX.Element => {
  return (
    <div className="">
      {appInfoList.map((item: AppInfo) => (
        <div key={item.id} className="">
          {item.id % 2 === 0 ? (
            <div>
              <div className="max-w-7xl   mx-auto">
                <ProjectDetail appInfo={item} switchSide={true} />
              </div>
            </div>
          ) : (
            <div className="bg-main-light ">
              <div className="max-w-7xl   mx-auto ">
                <ProjectDetail appInfo={item} switchSide={false} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
