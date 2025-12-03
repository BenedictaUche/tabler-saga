import Loader from "./Loader";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="tabler logo"
            className="h-10"
          />
          <h2 className="text-2xl font-semibold text-gray-900">tabler</h2>
        </div>
        <Loader size="lg" />
        <p className="text-sm text-gray-500">Loading dashboard...</p>
      </div>
    </div>
  );
};

export default PageLoader;
