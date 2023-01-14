import { useDispatch, useSelector } from 'react-redux';
import ProjectList from '../components/ProjectList';
import { selectProjectList } from '../slices/projectSlice';
import Profile from '../components/Profile';

const HomePage = () => {
  const data = useSelector(selectProjectList);

  return (
    <div className=" bg-main-dark p-2 text-gray-200">
      <div className="my-16">
        <Profile />
      </div>

      <ProjectList projectList={data} />
    </div>
  );
};

export default HomePage;
