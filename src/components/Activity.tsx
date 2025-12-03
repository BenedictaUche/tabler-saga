import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
} from "recharts";
import { Trash } from "lucide-react";
import type { ActivityItem } from "../types/dashboard";

interface ChartData {
  date: string;
  Purchases: number;
}

interface DevelopmentActivityProps {
  activity: ActivityItem[];
  onDeleteActivityItem?: (id: string) => void;
}

const DevelopmentActivity = ({ activity, onDeleteActivityItem }: DevelopmentActivityProps) => {
  const chartData: ChartData[] = activity.map((item) => ({
    date: item.date,
    Purchases: item.purchases,
  }));

  // show only first 3 items in table
  const displayActivity = activity.slice(0, 3).filter((item) => item.user);

  return (
    <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Development Activity</h2>
      </div>

      {/* Area chart*/}
      <div className=" pt-4 flex-1">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={chartData}>
            <XAxis dataKey="date" tick={{ fontSize: 12 }} hide />
            <YAxis hide />
            <Tooltip />
            <Legend
              verticalAlign="top"
              height={36}
              iconType="square"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "10px" }}
            />
            <Area
              type="monotone"
              dataKey="Purchases"
              stroke="#6695d7"
              fill="#ecf2fa"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="border-t border-gray-200 shrink-0 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 sm:px-4 py-3 text-left font-medium text-gray-700 uppercase tracking-wider">
                User
              </th>
              <th className="px-3 sm:px-4 py-3 text-left font-medium text-gray-700 uppercase tracking-wider">
                Commit
              </th>
              <th className="px-3 sm:px-4 py-3 text-left font-medium text-gray-700 uppercase tracking-wider">
                Date
              </th>
              <th className="px-3 sm:px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayActivity.map((item, index) => (
              <tr key={index}>
                <td className="px-3 sm:px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.imageUrl}
                      alt={`${item.user} avatar`}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-gray-900">{item.user}</span>
                  </div>
                </td>
                <td className="px-3 sm:px-4 py-3 whitespace-normal sm:whitespace-nowrap text-gray-600">
                  {item.commit}
                </td>
                <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-gray-600">
                  {item.date}
                </td>
                <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-right">
                  <button
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => item.id && onDeleteActivityItem?.(item.id)}
                    aria-label={`Delete activity for ${item.user}`}
                  >
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DevelopmentActivity;
