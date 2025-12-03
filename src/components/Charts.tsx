import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import type { PieLabelRenderProps } from "recharts";
import type { ChartDefinition } from "../types/dashboard";

// color schemes for donut chart
const colorSchemes = {
  Purchases: ["#10b981", "#34d399"],
  Sales: ["#1e40af", "#3b82f6", "#93c5fd", "#dbeafe"],
};

const renderLabel = ({
  cx = 0,
  cy = 0,
  midAngle = 0,
  innerRadius = 0,
  outerRadius = 0,
  percent = 0,
}: PieLabelRenderProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
  return (
    <text
      x={x}
      y={y}
      fill="#FFFFFF"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface ChartsProps {
  charts: ChartDefinition[];
}

const Charts: React.FC<ChartsProps> = ({ charts }) => {
  const purchasesChart = charts?.find((chart) => chart.title === "Purchases");
  const salesChart = charts?.find((chart) => chart.title === "Sales");

  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="bg-[#dae6f5] text-white py-4 px-6">
        <h3 className="text-base font-medium text-gray-700"><b className="text-[#314562]">Read our documentation</b> with code samples.</h3>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 flex-1">
        {purchasesChart && purchasesChart.values.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md">
            <div className="px-4 py-3 border-b border-gray-200">
              <h4 className="text-base font-semibold text-gray-900">Purchases</h4>
            </div>
            <div className="p-4">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={purchasesChart.values.map((value, idx) => ({
                      name: `Segment ${idx + 1}`,
                      value,
                    }))}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={50} // for donut hole
                    outerRadius={80}
                    label={renderLabel}
                    labelLine={false}
                  >
                    {purchasesChart.values.map((_, idx) => (
                      <Cell
                        key={`cell-${idx}`}
                        fill={colorSchemes.Purchases[idx % colorSchemes.Purchases.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-6">
            <p className="text-sm text-gray-500 text-center">
              Purchases data will appear once the dashboard loads.
            </p>
          </div>
        )}

        {/* Sales Pie */}
        {salesChart && salesChart.values.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md">
            <div className="px-4 py-3 border-b border-gray-200">
              <h4 className="text-base font-semibold text-gray-900">Sales</h4>
            </div>
            <div className="p-4">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={salesChart.values.map((value, idx) => ({
                      name: `Segment ${idx + 1}`,
                      value,
                    }))}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    label={renderLabel}
                    labelLine={false}
                  >
                    {salesChart.values.map((_, idx) => (
                      <Cell
                        key={`cell-${idx}`}
                        fill={colorSchemes.Sales[idx % colorSchemes.Sales.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-6">
            <p className="text-sm text-gray-500 text-center">
              Sales data will appear once the dashboard loads.
            </p>
          </div>
        )}
      </div>

      {/* empty cards */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h4 className="text-base font-semibold text-gray-900">New feedback</h4>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h4 className="text-base font-semibold text-gray-900">Today profit</h4>
        </div>
      </div>
    </div>
  );
};

export default Charts;
