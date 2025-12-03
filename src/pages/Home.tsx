// create disptch function, so that on first render the useEffect runs
// and calls the fetchDashboardData function
// and dispatch the action (the type that was created in the dashbiardAction) into the redux system
// Overall, we've asked for it by dispatching the action

// useSelector to let components read redux state

import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatsCard from "../components/StatsCard";
import { fetchDashboardData } from "../store/actions/dashboardActions";
import {
  selectSummary,
  selectActivity,
  selectCharts,
  selectDashboardLoading,
  selectDashboardError,
} from "../store/selectors/dashboardSelectors";
import DevelopmentActivity from "../components/Activity";
import Charts from "../components/Charts";
import Skeleton from "../components/Skeleton";
import PageLoader from "../components/PageLoader";
import type { ActivityItem } from "../types/dashboard";

const Home = () => {
  const dispatch = useDispatch();
  const summary = useSelector(selectSummary);
  const activity = useSelector(selectActivity);
  const charts = useSelector(selectCharts);
  const loading = useSelector(selectDashboardLoading);
  const error = useSelector(selectDashboardError);
  const [initialLoad, setInitialLoad] = useState(true);
  const [activityFeed, setActivityFeed] = useState<ActivityItem[]>([]);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && initialLoad) {
      const timer = setTimeout(() => {
        setInitialLoad(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [loading, initialLoad]);

  // local state | copied fron Redux activity
  useEffect(() => {
    setActivityFeed(activity);
  }, [activity]);

  const handleDeleteActivityItem = (id: string) => {
    setActivityFeed((prev) => prev.filter((item) => item.id !== id));
  };

  const safeSummary = useMemo(() => summary ?? [], [summary]);
  const safeCharts = useMemo(() => charts ?? [], [charts]);

  if (initialLoad && loading) {
    return <PageLoader />;
  }

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-600 text-lg font-semibold mb-2">Error loading dashboard</p>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => dispatch(fetchDashboardData())}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
      {/* Stats cards */}
      <h1 className="text-[#878b91] font-semibold text-xl">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {safeSummary.length > 0 ? (
          safeSummary.map((stat) => <StatsCard key={stat.title} stat={stat} />)
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 col-span-full text-center text-gray-500">
            Stats will show up once data is available.
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DevelopmentActivity activity={activityFeed} onDeleteActivityItem={handleDeleteActivityItem} />
        <Charts charts={safeCharts} />
      </div>
    </div>
  );
};

export default Home;
