// Action type: when this is dispatched, the dashboard saga starts fetching data
// create function to return action object

// the action string will not be called directly as the action object
// will be dispatched in a component for saga to watch out for //


export const FETCH_DASHBOARD_DATA = 'dashboard/fetchDashboardData';

export const fetchDashboardData = () => ({
  type: FETCH_DASHBOARD_DATA,
});
