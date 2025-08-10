import { useState } from "react";
import "./App.css";


export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    originalPrice: "",
    discount: "",
    category: "",
    subcategory: "",
    rating: 1,
    inStock: false,
    tags: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, images: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", formData);
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Product Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />

        <label>Price</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} />

        <label>Original Price</label>
        <input type="number" name="originalPrice" value={formData.originalPrice} onChange={handleChange} />

        <label>Discount %</label>
        <input type="number" name="discount" value={formData.discount} onChange={handleChange} />

        <label>Category</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} />

        <label>Subcategory</label>
        <input type="text" name="subcategory" value={formData.subcategory} onChange={handleChange} />

        <label>Rating</label>
        <input type="number" min="1" max="5" name="rating" value={formData.rating} onChange={handleChange} />

        <label for="inStock">In Stock</label>
          <input type="number" id="inStock" name="inStock" min="0" placeholder="Enter quantity"></input>
          


        <label>Tags (comma separated)</label>
        <input type="text" name="tags" value={formData.tags} onChange={handleChange} />

        <label>Images</label>
        <input type="file" name="images" multiple onChange={handleChange} />

        <button type="submit" className="publish-btn">Publish and View</button>
      </form>
    </div>
  );
}
