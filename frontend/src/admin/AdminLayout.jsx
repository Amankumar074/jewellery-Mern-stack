import { Link, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <div className="flex h-100 bg-gray-100">
      <aside className="w-64 bg-[#2C2F59] text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-3">
          <Link to="/admin/dashboard" className="block font-semibold">
            Dashboard
          </Link>
          <Link to="/admin/products" className="block font-semibold">
            Products
          </Link>
          <Link to="/admin/categories" className="block font-semibold">
            Categories
          </Link>
          <Link to="/admin/orders" className="block font-semibold">
            Orders
          </Link>
        </nav>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white py-2 m-4 rounded-lg font-bold"
        >
          Logout
        </button>
        <Link
          to="/admin/changepassword"
          className="font-semibold bg-red-400 py-2 flex justify-center rounded-lg mx-4 mb-2"
        >
          Change Password
        </Link>
      </aside>
      <main className="flex-1 p-6 overflow-auto h-100">
        <Outlet />
      </main>
    </div>
  );
}
