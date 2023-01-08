import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import appData, { AppInfo } from '../data/AppData';
import { RootState } from '../store/store';

interface ProjectState {
  projectList: AppInfo[];
  selectedProject: AppInfo;
  searchString: string;
  currentTech: string;
}

const initialState: ProjectState = {
  projectList: appData,
  selectedProject: appData[0],
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

      // if (action.payload.length > 0) {
      //   state.projectList = state.projectList.filter((item) => true);
      // } else {
      //   state.projectList = appData;
      // }
    },
  },
});

export const { setCurrentTech, setCurrentIndex } = projectListSlice.actions;

export const selectProjectList = (state: RootState) =>
  state.projectList.projectList;

export const selectCurrentProject = (state: RootState) =>
  state.projectList.selectedProject;

export default projectListSlice.reducer;