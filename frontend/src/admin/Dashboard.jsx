import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // New category/product
  const [newCategory, setNewCategory] = useState("");
  const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "", image: null });

  // Fetch categories & products
  const fetchData = async () => {
    try {
      const [catRes, prodRes] = await Promise.all([
        axios.get("http://localhost:5000/api/categories", { headers: { Authorization: `Bearer ${token}` } }),
        axios.get("http://localhost:5000/api/products", { headers: { Authorization: `Bearer ${token}` } }),
      ]);
      setCategories(catRes.data);
      setProducts(prodRes.data);
    } catch (err) {
      console.log(err);
      alert("Error fetching data. Please login again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add Category
  const addCategory = async () => {
  if (!newCategory) return;

  try {
    const res = await axios.post(
      "http://localhost:5000/api/admin/categories",
      { name: newCategory },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setCategories([...categories, res.data]);
    setNewCategory("");
    alert("Category added successfully!"); // Success message
  } catch (err) {
    console.log(err);
    alert(err.response?.data?.message || "Error adding category");
  }
};


  // Add Product
 const addProduct = async () => {
  if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.image) return;

  try {
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("category", newProduct.category);
    formData.append("image", newProduct.image);

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }


    const res = await axios.post(
      "http://localhost:5000/api/admin/products",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setProducts([...products, res.data]);
    setNewProduct({ name: "", price: "", category: "", image: null });
    alert("Product added successfully!"); // Success message
  } catch (err) {
    console.log(err);
    alert(err.response?.data?.message || "Error adding product");
  }
};


  // Delete category
const deleteCategory = async (id) => {
  // Ek baar confirm popup
  const confirmDelete = window.confirm("Are you sure you want to delete this category?");
  if (!confirmDelete) return;

  try {
    await axios.delete(`http://localhost:5000/api/admin/categories/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setCategories(categories.filter((c) => c._id !== id));
    alert("Category deleted successfully!"); // Delete hone ke baad success message
  } catch (err) {
    console.log(err);
    alert(err.response?.data?.message || "Error deleting category");
  }
};

  // Delete Product
  const deleteProduct = async (id) => {
  // Ek baar confirm popup
  const confirmDelete = window.confirm("Are you sure you want to delete this product?");
  if (!confirmDelete) return;

  try {
    await axios.delete(`http://localhost:5000/api/admin/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setProducts(products.filter((p) => p._id !== id));
    alert("Product deleted successfully!"); // Success message
  } catch (err) {
    console.log(err);
    alert(err.response?.data?.message || "Error deleting product");
  }
};


  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Categories Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="flex mb-4 gap-2">
          <input
            type="text"
            placeholder="New Category"
            className="border p-2 rounded flex-1"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button
            onClick={addCategory}
            className="bg-green-500 text-white px-4 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat._id} className="flex justify-between items-center border p-2 rounded">
              <span>{cat.name}</span>
              <button
                onClick={() => deleteCategory(cat._id)}
                className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Products Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
          <input
            type="text"
            placeholder="Product Name"
            className="border p-2 rounded"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            className="border p-2 rounded"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <select
            className="border p-2 rounded"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
          <input
            type="file"
            className="border p-2 rounded"
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })}
          />
          <button
            onClick={addProduct}
            className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {products.map((p) => (
            <li key={p._id} className="flex justify-between items-center border p-2 rounded">
              <span>{p.name} - ${p.price}</span>
              <button
                onClick={() => deleteProduct(p._id)}
                className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
