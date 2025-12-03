// dispatch fetchDashboardDataStart function. This will set loading to true and clear error
// call the api function
//on success, dispatch fetchDashbiardDataSuccess function, parsing the data to it. The data being the response from the api
// reducer should put the fetched summary, activity and charts into the store and set loading to false
// on error, the failure action should be dispatched, error and loading are set to false by reducer - fetchDashboardDataFailure(errorMessage)

import { call, put, takeEvery } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import { fetchDashboardData } from "../../services/api";
import {
  fetchDashboardDataStart,
  fetchDashboardDataSuccess,
  fetchDashboardDataFailure,
} from "../reducers/dashboardSlice";
import { FETCH_DASHBOARD_DATA } from "../actions/dashboardActions";

type FetchDashboardResponse = Awaited<ReturnType<typeof fetchDashboardData>>;

function* fetchDashboardDataWorker(): SagaIterator {
  try {
    yield put(fetchDashboardDataStart());
    const data: FetchDashboardResponse = yield call(fetchDashboardData);
    yield put(fetchDashboardDataSuccess(data));
  } catch (error) {
    const parsedError = error as {
      response?: { data?: { message?: string } };
      message?: string;
    };
    yield put(
      fetchDashboardDataFailure(
        parsedError.response?.data?.message || parsedError.message || "Failed to fetch dashboard data"
      )
    );
  }
}

function* dashboardSaga(): SagaIterator {
  // whenever an action with the action string type is dspatched, the fetchDashboardDataWorker should be run
  yield takeEvery(FETCH_DASHBOARD_DATA, fetchDashboardDataWorker);
}

export default dashboardSaga;
