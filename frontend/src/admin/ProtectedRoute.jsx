import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const admin = JSON.parse(localStorage.getItem("admin"));

  if (!admin || admin.role !== "admin") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
