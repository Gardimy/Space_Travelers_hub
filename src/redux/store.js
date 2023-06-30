import { configureStore } from '@reduxjs/toolkit';
import MissionReducer from './missions/MissionSlice';
import RocketReducer from './rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    missions: MissionReducer,
    rockets: RocketReducer,
  },
});

export default store;
