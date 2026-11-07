import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

function AuthLayout() {
  return (
    <div className={`align-center bg-secondary-color w-full h-screen`}>
      <Outlet />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default AuthLayout;
