import React, { useContext } from "react";
import axios from "axios";
import { ProductContext } from "../../../context/product-context"; // Adjust the path if needed
import "../../../styles/global.css";
import "../../../styles/product-components/create-product.css";

const CreateProduct = () => {
  const { productDetails, updateProductDetails } = useContext(ProductContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateProductDetails(name, value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      updateProductDetails("image", file); // Store the file for backend compatibility
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.keys(productDetails).forEach((key) => {
        formData.append(key, productDetails[key]);
      });

      const response = await axios.post(
        "/products/api/v1/create-product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Product created successfully:", response.data);
      alert("Product created successfully!");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to create product. Please try again.");
    }
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
                value={productDetails.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="product-category">Product Category</label>
              <select
                id="product-category"
                name="category"
                value={productDetails.category}
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
                value={productDetails.description}
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
                value={productDetails.price}
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
              {productDetails.image && (
                <div className="image-preview">
                  <p>{productDetails.image.name}</p>
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
