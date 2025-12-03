import axios from 'axios';

export const fetchDashboardData = async () => {
  const response = await axios.get('/dashboardData.json');
  return response.data;
};
