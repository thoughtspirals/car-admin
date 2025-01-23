import React, { useState } from "react";
import "../../../styles/global.css";
import "../../../styles/product-components/create-product.css";

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductData((prevData) => ({
        ...prevData,
        image: URL.createObjectURL(file), // Create a URL for the uploaded image
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Product data submitted:", productData);
  };

  const productCategories = [
    { label: "Engine", value: "Engine" },
    { label: "Exhaust", value: "Exhaust" },
    { label: "Interior", value: "Interior" },
    { label: "Breaks", value: "Breaks" },
    { label: "Suspension", value: "Suspension" },
  ];

  return (
    <div className="create-product">
      <div className="title">
        <h1>Create Product</h1>
      </div>
      <div className="create-product-container">
        <div className="create-product-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="product-name">Product Name</label>
              <input
                type="text"
                id="product-name"
                name="name"
                value={productData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="product-category">Product Category</label>
              <select
                id="product-category"
                name="category"
                value={productData.category}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select a Category
                </option>
                {productCategories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="product-description">Product Description</label>
              <textarea
                id="product-description"
                name="description"
                value={productData.description}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="product-price">Price (Rs.)</label>
              <input
                type="number"
                id="product-price"
                name="price"
                value={productData.price}
                onChange={handleInputChange}
                required
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="product-image">Product Image</label>
              <input
                type="file"
                id="product-image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
              {productData.image && (
                <div className="image-preview">
                  <img
                    src={productData.image}
                    alt="Product Preview"
                    className="preview-image"
                  />
                </div>
              )}
            </div>

            <button type="submit" className="submit-btn">
              Create Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
