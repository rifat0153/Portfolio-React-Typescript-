import { Project } from '../data/AppData';
import ProjectDetail from './ProjectDetail';

interface Props {
  projectList: Project[];
}

const ProjectList = ({ projectList }: Props): JSX.Element => {
  return (
    <div className="max-w-5xl mx-auto">
      {projectList.map((item) => (
        <div key={item.id} className="">
          {item.id % 2 === 0 ? (
            <ProjectDetail project={item} switchSide={true} />
          ) : (
            <ProjectDetail project={item} switchSide={false} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
