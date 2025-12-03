import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

type Stat = {
  title: string;
  value: number | string;
  change: number | string;
};

interface StatsCardProps {
  stat: Stat;
}

const StatsCard: React.FC<StatsCardProps> = ({ stat }) => {
  const changeNum = typeof stat.change === "string" ? parseInt(stat.change.replace("-", "")) : Math.abs(stat.change);
  const isPositive = typeof stat.change === "string" ? !stat.change.startsWith("-") : stat.change > 0;

  return (
    <div className="bg-white p-8 shadow-md border border-gray-200 flex flex-col h-auto w-full relative">
      <div
        className={`absolute top-3 right-3 flex items-center text-sm font-semibold ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        <span>{isPositive ? `+${changeNum}%` : `-${changeNum}%`}</span>
        {isPositive ? (
          <ChevronUp className="w-4 h-4 ml-0.5" />
        ) : (
          <ChevronDown className="w-4 h-4 ml-0.5" />
        )}
      </div>

      <div className="flex flex-col items-center justify-center grow pt-2">
        <h3 className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</h3>
        <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
      </div>
    </div>
  );
};

export default StatsCard;
