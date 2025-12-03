import React from "react";

type LoaderSize = "sm" | "md" | "lg" | "xl";

interface LoaderProps {
  size?: LoaderSize;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = "md", className = "" }) => {
  const sizeClasses: Record<LoaderSize, string> = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-[3px]",
    xl: "w-16 h-16 border-[4px]",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-blue-600 border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
