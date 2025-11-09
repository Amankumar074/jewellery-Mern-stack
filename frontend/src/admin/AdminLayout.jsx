import { Link, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2C2F59] text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-3">
          <Link to="/admin/dashboard" className="block hover:text-yellow-400">
            📊 Dashboard
          </Link>
          <Link to="/admin/products" className="block hover:text-yellow-400">
            📦 Products
          </Link>
          <Link to="/admin/categories" className="block hover:text-yellow-400">
            🏷️ Categories
          </Link>
          <Link to="/admin/orders" className="block hover:text-yellow-400">
            🧾 Orders
          </Link>
        </nav>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white py-2 m-4 rounded-lg"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
