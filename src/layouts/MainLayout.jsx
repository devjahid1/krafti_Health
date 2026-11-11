
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">

      {/* Page Content */}
      <main className="w-full flex-1">
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;
