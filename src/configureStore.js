import { configureStore } from '@reduxjs/toolkit';
import { missionReducer } from './redux/Mission/Mission';
import reducerRockets from './redux/Rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: reducerRockets,
    missions: missionReducer,
  },
});

export default store;
