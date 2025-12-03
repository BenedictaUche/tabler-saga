const SkeletonStatsCard = () => (
  <div className="bg-white p-4 rounded-md shadow-md border border-gray-200 animate-pulse">
    <div className="flex justify-between items-start mb-4">
      <div className="h-4 w-24 bg-gray-200 rounded"></div>
      <div className="h-4 w-16 bg-gray-200 rounded"></div>
    </div>
    <div className="h-8 w-20 bg-gray-200 rounded mt-2"></div>
  </div>
);

const SkeletonActivityChart = () => (
  <div className="px-4 pt-4 animate-pulse">
    <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
    <div className="h-64 bg-gray-100 rounded"></div>
  </div>
);

const SkeletonTableRow = () => (
  <tr className="animate-pulse">
    <td className="px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
      </div>
    </td>
    <td className="px-4 py-3">
      <div className="h-4 w-24 bg-gray-200 rounded"></div>
    </td>
    <td className="px-4 py-3">
      <div className="h-4 w-20 bg-gray-200 rounded"></div>
    </td>
    <td className="px-4 py-3">
      <div className="h-4 w-4 bg-gray-200 rounded ml-auto"></div>
    </td>
  </tr>
);

const SkeletonActivity = () => (
  <div className="bg-white rounded-lg shadow-md">
    <div className="px-4 py-3 border-b border-gray-200">
      <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
    </div>
    <SkeletonActivityChart />
    <div className="border-t border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              <div className="h-3 w-12 bg-gray-200 rounded"></div>
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              <div className="h-3 w-16 bg-gray-200 rounded"></div>
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              <div className="h-3 w-12 bg-gray-200 rounded"></div>
            </th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <SkeletonTableRow key={index} />
            ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SkeletonChartCard = () => (
  <div className="bg-white rounded-lg shadow-md animate-pulse">
    <div className="px-4 py-3 border-b border-gray-200">
      <div className="h-5 w-24 bg-gray-200 rounded"></div>
    </div>
    <div className="p-4">
      <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
        <div className="h-24 w-24 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  </div>
);

const SkeletonCharts = () => (
  <div className="space-y-4">
    <div className="bg-blue-600 text-white py-4 px-6 rounded-t-lg animate-pulse">
      <div className="h-5 w-64 bg-blue-500 rounded"></div>
    </div>

    {/* grid skeleton */}
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <SkeletonChartCard />
      <SkeletonChartCard />
    </div>

    {/* empty cards skeleton */}
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
        <div className="h-5 w-32 bg-gray-200 rounded"></div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
        <div className="h-5 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
);

// Main Skeleton Component
const Skeleton = () => {
  return (
    <div className="space-y-6 sm:px-14 px-4">
      <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <SkeletonStatsCard key={index} />
          ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SkeletonActivity />
        <SkeletonCharts />
      </div>
    </div>
  );
};

export default Skeleton;
