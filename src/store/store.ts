import { configureStore } from '@reduxjs/toolkit';
import projectListReducer from '../slices/projectSlice';
import counterReducer from './../slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    projectList: projectListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
