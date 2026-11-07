import { Routes, Route } from "react-router";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import AuthLayout from "../components/layout/AuthLayout";
import Dashboard from "../pages/protected/Dashboard";
import ProtectedLayout from "../components/layout/ProtectedLayout";
import LandingPage from "../pages/LandingPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default Router;
