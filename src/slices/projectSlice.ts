import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import projectList, { Project } from '../data/AppData';
import { RootState } from '../store/store';

interface ProjectState {
  projectList: Project[];
  selectedProject: Project;
  searchString: string;
  currentTech: string;
}

const initialState: ProjectState = {
  projectList: projectList,
  selectedProject: projectList[0],
  searchString: '',
  currentTech: '',
};

export const projectListSlice = createSlice({
  name: 'projectList',
  initialState,
  reducers: {
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      if (action.payload > 0 && action.payload < state.projectList.length) {
        state.selectedProject = state.projectList[action.payload];
      }
    },
    setCurrentTech: (state, action: PayloadAction<string>) => {
      for (let index = 0; index < state.projectList.length; index++) {
        console.log(state.projectList[index].technologyList);
      }

    },
  },
});

export const { setCurrentTech, setCurrentIndex } = projectListSlice.actions;

export const selectProjectList = (state: RootState) =>
  state.projectList.projectList;

export const selectCurrentProject = (state: RootState) =>
  state.projectList.selectedProject;

export default projectListSlice.reducer;
