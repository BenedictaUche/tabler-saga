import type { RootState } from "../reducers";

// from which components will read the data
export const selectDashboardData = (state: RootState) => state.dashboard;
export const selectSummary = (state: RootState) => state.dashboard.summary;
export const selectActivity = (state: RootState) => state.dashboard.activity;
export const selectCharts = (state: RootState) => state.dashboard.charts;
export const selectDashboardLoading = (state: RootState) => state.dashboard.loading;
export const selectDashboardError = (state: RootState) => state.dashboard.error;
