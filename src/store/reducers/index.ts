import { combineReducers } from 'redux';
import dashboardReducer from './dashboardSlice';

const rootReducer = combineReducers({
  // to handle dashboard
  dashboard: dashboardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
