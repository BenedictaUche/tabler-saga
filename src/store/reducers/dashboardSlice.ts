import type { ActivityItem, DashboardState } from "../../types/dashboard";

// before the fetch
const initialState: DashboardState = {
  summary: [],
  activity: [],
  charts: [],
  loading: false,
  error: null,
};

const FETCH_DASHBOARD_DATA_START = "dashboard/fetchDashboardDataStart";
const FETCH_DASHBOARD_DATA_SUCCESS = "dashboard/fetchDashboardDataSuccess";
const FETCH_DASHBOARD_DATA_FAILURE = "dashboard/fetchDashboardDataFailure";

// to add ids to each activity for stable keys and deletion
const addStableIds = (activity: ActivityItem[]): ActivityItem[] =>
  activity.map((item, index) => ({
    ...item,
    id: item.id ?? `${item.user ?? "user"}-${item.date ?? "date"}-${index}`,
  }));

interface FetchDashboardDataStartAction {
  type: typeof FETCH_DASHBOARD_DATA_START;
}

interface FetchDashboardDataSuccessAction {
  type: typeof FETCH_DASHBOARD_DATA_SUCCESS;
  payload: {
    summary: DashboardState["summary"];
    activity: ActivityItem[];
    charts: DashboardState["charts"];
  };
}

interface FetchDashboardDataFailureAction {
  type: typeof FETCH_DASHBOARD_DATA_FAILURE;
  payload: string;
}

type DashboardActions =
  | FetchDashboardDataStartAction
  | FetchDashboardDataSuccessAction
  | FetchDashboardDataFailureAction;

export const fetchDashboardDataStart = (): FetchDashboardDataStartAction => ({
  type: FETCH_DASHBOARD_DATA_START,
});

export const fetchDashboardDataSuccess = (payload: FetchDashboardDataSuccessAction["payload"]) => ({
  type: FETCH_DASHBOARD_DATA_SUCCESS,
  payload,
});

export const fetchDashboardDataFailure = (payload: string): FetchDashboardDataFailureAction => ({
  type: FETCH_DASHBOARD_DATA_FAILURE,
  payload,
});

const dashboardReducer = (
  state: DashboardState = initialState,
  action: DashboardActions
): DashboardState => {
  switch (action.type) {
    case FETCH_DASHBOARD_DATA_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        summary: action.payload.summary,
        activity: addStableIds(action.payload.activity),
        charts: action.payload.charts,
        error: null,
      };
    case FETCH_DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
