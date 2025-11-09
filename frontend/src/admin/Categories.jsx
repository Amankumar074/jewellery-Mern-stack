import { useState, useEffect } from "react";
import api from "../api";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Fetch all categories
  const fetchCategories = async () => {
    try {
      const { data } = await api.get("/admin/categories");
      setCategories(data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  // ✅ Add new category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Category name required");
    setLoading(true);
    try {
      await api.post("/admin/categories", { name });
      setName("");
      fetchCategories();
    } catch (err) {
      console.error("Error adding category:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete category
  const handleDelete = async (id) => {
    if (window.confirm("Delete this category?")) {
      await api.delete(`/admin/categories/${id}`);
      fetchCategories();
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🏷️ Categories</h1>

      {/* Add Category Form */}
      <form
        onSubmit={handleAddCategory}
        className="flex gap-3 mb-6 items-center"
      >
        <input
          type="text"
          placeholder="New Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg flex-1"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
        >
          {loading ? "Adding..." : "Add Category"}
        </button>
      </form>

      {/* Category Table */}
      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 border-b">Category Name</th>
            <th className="p-3 border-b">Slug</th>
            <th className="p-3 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat._id} className="hover:bg-gray-100">
              <td className="p-3 border-b">{cat.name}</td>
              <td className="p-3 border-b text-gray-600">{cat.slug}</td>
              <td className="p-3 border-b text-center">
                <button
                  onClick={() => handleDelete(cat._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {categories.length === 0 && (
            <tr>
              <td
                colSpan="3"
                className="text-center p-4 text-gray-500 italic"
              >
                No categories found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
