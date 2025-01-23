import React, { useState } from "react";
import "../../../styles/global.css";
import "../../../styles/product-components/create-product.css";

const CreateProduct = () => {
  // State to hold the form data
  const [productData, setProductData] = useState({
    productId: "",
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Sample products (could be fetched from an API or Redux store)
  const productList = [
    {
      productId: "1",
      name: "Engine Part",
      description: "High-quality engine part",
      price: 500,
      category: "Engine",
      image: "path/to/engine-part-image.jpg", // Replace with actual image path
    },
    {
      productId: "2",
      name: "Suspension Kit",
      description: "Durable suspension kit",
      price: 300,
      category: "Suspension",
      image: "path/to/suspension-kit-image.jpg", // Replace with actual image path
    },
    {
      productId: "3",
      name: "Brake Pads",
      description: "Reliable brake pads",
      price: 100,
      category: "Brakes",
      image: "path/to/brake-pads-image.jpg", // Replace with actual image path
    },
  ];

  // Handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Find product based on search query
  const handleSearch = () => {
    const product = productList.find((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (product) {
      setProductData(product);
    } else {
      alert("Product not found");
    }
  };

  const productCategories = [
    { label: "Engine", value: "Engine" },
    { label: "Exhaust", value: "Exhaust" },
    { label: "Interior", value: "Interior" },
    { label: "Brakes", value: "Brakes" },
    { label: "Suspension", value: "Suspension" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., save or update the product)
    console.log("Product data submitted:", productData);
  };

  return (
    <div>
      <div className="title">
        <h1>Update Product</h1>
      </div>

      {/* Centering the search container */}
      <div className="d-flex justify-content-center align-items-center vh-25">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a product..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="form-control"
          />
          <button onClick={handleSearch} className="btn btn-primary ml-20">
            Search
          </button>
        </div>
      </div>

      <div className="create-product-container">
        <div className="create-product-card">
          {/* Display Product Image at the top */}
          {productData.image && (
            <div className="image-preview mb-3">
              <img
                src={productData.image}
                alt="Product Preview"
                className="preview-image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Product ID (hidden or displayed) */}
            <div className="form-group">
              <label htmlFor="product-id">Product ID</label>
              <input
                type="text"
                id="product-id"
                name="productId"
                value={productData.productId}
                onChange={handleChange}
                disabled
                className="form-control"
              />
            </div>

            {/* Product Name */}
            <div className="form-group">
              <label htmlFor="product-name">Product Name</label>
              <input
                type="text"
                id="product-name"
                name="name"
                value={productData.name}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            {/* Product Category */}
            <div className="form-group">
              <label htmlFor="product-category">Product Category</label>
              <select
                id="product-category"
                name="category"
                value={productData.category}
                onChange={handleChange}
                required
                className="form-control"
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

            {/* Product Description */}
            <div className="form-group">
              <label htmlFor="product-description">Product Description</label>
              <textarea
                id="product-description"
                name="description"
                value={productData.description}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            {/* Product Price */}
            <div className="form-group">
              <label htmlFor="product-price">Price (Rs.)</label>
              <input
                type="number"
                id="product-price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="form-control"
              />
            </div>

            {/* Product Image Upload */}
            <div className="form-group">
              <label htmlFor="product-image">Product Image</label>
              <input
                type="file"
                id="product-image"
                accept="image/*"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-success mt-3">
              Update Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
