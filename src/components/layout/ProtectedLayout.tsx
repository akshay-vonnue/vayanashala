import { Outlet } from "react-router";

function ProtectedLayout() {
  return (
    <div className="bg-green-700">
      <Outlet />
    </div>
  );
}

export default ProtectedLayout;
