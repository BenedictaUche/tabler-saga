import { Outlet } from "react-router-dom";
import Header from "./Header";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-28 sm:pt-32 bg-[#f5f7fb]">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
