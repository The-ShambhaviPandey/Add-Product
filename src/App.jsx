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
      <form onSubmit={handleSubmit} className="product-form">
        {/* Product Name */}
        <label>Product Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        {/* Product Description */}
        <label>Product Description</label>
        <textarea
          className="big-textarea"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        {/* Row 1 - Price Fields */}
        <div className="form-row">
          <div className="form-col">
            <label>Price</label>
            <input type="number" name="price" min="0" value={formData.price} onChange={handleChange} />
          </div>
          <div className="form-col">
            <label>Original Price</label>
            <input type="number" name="originalPrice" min="0" value={formData.originalPrice} onChange={handleChange} />
          </div>
          <div className="form-col">
            <label>Discount %</label>
            <input type="number" name="discount" min="0" value={formData.discount} onChange={handleChange} />
          </div>
        </div>

        {/* Row 2 - Category Fields */}
        <div className="form-row">
          <div className="form-col">
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">-- Select Category --</option>
              <option value="painting">Painting</option>
              <option value="craft">Craft</option>
              <option value="sculpture">Sculpture</option>
              <option value="jewelry">Jewelry</option>
            </select>
          </div>
          <div className="form-col">
            <label>Subcategory</label>
            <select name="subcategory" value={formData.subcategory} onChange={handleChange}>
              <option value="">-- Select Subcategory --</option>
              <option value="oil-painting">Oil Painting</option>
              <option value="watercolor">Watercolor</option>
              <option value="paper-craft">Paper Craft</option>
              <option value="wood-craft">Wood Craft</option>
            </select>
          </div>
          <div className="form-col">
            <label>Tags</label>
            <select name="tags" value={formData.subcategory} onChange={handleChange}>
              <option value="">-- Select Tags --</option>
              <option value="oil-painting">Oil Painting</option>
              <option value="watercolor">Watercolor</option>
              <option value="paper-craft">Paper Craft</option>
              <option value="wood-craft">Wood Craft</option>
            </select>
          </div>
        </div>

        {/* Row 3 - Rating Fields */}
        <div className="form-row">
          <div className="form-col">
            <label>Rating</label>
            <input type="number" min="1" max="5" name="rating" value={formData.rating} onChange={handleChange} />
          </div>
          <div className="form-col">
            <label>In Stock</label>
            <input type="number" name="inStock" min="0" placeholder="Enter quantity" onChange={handleChange} />
          </div>
          <div className="form-col">
            <label>Images</label>
            <input type="file" name="images" multiple onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="publish-btn">Publish and View</button>
      </form>
    </div>
  );
}
