import React, { useState, useContext } from "react";
import "../../../styles/global.css";
import "../../../styles/product-components/create-product.css";
import { ProductContext } from "../../../context/product-context";
import axios from "axios";

const UpdateProduct = () => {
  const {
    currentProduct,
    setCurrentProduct,
    productDetails,
    setProductDetails,
    updateProductDetails,
    isProductUpdated,
    setIsProductUpdated,
  } = useContext(ProductContext);

  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProductDetails((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `/products/api/v1/products:name?name=${encodeURIComponent(
          searchQuery
        )}`,
        { withCredentials: true }
      );
      console.log(res.data);
      if (res.data) {
        setCurrentProduct(res.data.data);
        setProductDetails({
          ...res.data.data,
        });
        console.log("Image Preview:", productDetails.image);

        alert(`Product found: ${res.data.data.name}`);
      } else {
        alert("No product found.");
        setCurrentProduct(null);
        setProductDetails({
          name: "",
          description: "",
          price: "",
          category: "",
          image: null,
        });
      }
    } catch (error) {
      console.error(
        "Error searching for product:",
        error.response?.data?.message || error.message
      );
      alert(
        error.response?.data?.message || "Failed to search for the product."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        _id: productDetails._id,
        name: productDetails.name,
        description: productDetails.description,
        price: productDetails.price,
        category: productDetails.category,
        image: productDetails.image,
      };

      const response = await axios.put(
        `/products/api/v1/updateProduct`,
        productData,

        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert("Product updated successfully!");
        setIsProductUpdated(true);
        setProductDetails({
          name: "",
          description: "",
          price: "",
          category: "",
          image: null,
        });
      } else {
        alert("Failed to update product.");
      }
    } catch (error) {
      console.error(
        "Error updating product:",
        error.response?.data?.message || error.message
      );
      alert(
        error.response?.data?.message ||
          "An error occurred while updating the product."
      );
    }
  };

  const productCategories = [
    { label: "Engine", value: "Engine" },
    { label: "Exhaust", value: "Exhaust" },
    { label: "Interior", value: "Interior" },
    { label: "Brakes", value: "Brakes" },
    { label: "Suspension", value: "Suspension" },
  ];

  return (
    <div>
      <h1 className="title">Update Product</h1>
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
          {/* {productDetails.image && (
            <div className="image-preview mb-3">
              <img
                src={
                  productDetails.image instanceof File
                    ? URL.createObjectURL(productDetails.image)
                    : productDetails.image
                }
                alt="Product Preview"
                className="preview-image"
                style={{ maxWidth: "100%", height: "auto" }}
                onError={(e) => {
                  e.target.src = "/path/to/placeholder-image.jpg"; // Use a placeholder if the image URL is invalid
                }}
              />
            </div>
          )} */}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="product-name">Product Id</label>
              <input
                type="text"
                id="product-name"
                name="name"
                value={productDetails._id || ""}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="product-name">Product Name</label>
              <input
                type="text"
                id="product-name"
                name="name"
                value={productDetails.name || ""}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="product-category">Product Category</label>
              <select
                id="product-category"
                name="category"
                value={productDetails.category || ""}
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

            <div className="form-group">
              <label htmlFor="product-description">Product Description</label>
              <textarea
                id="product-description"
                name="description"
                value={productDetails.description || ""}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="product-price">Price (Rs.)</label>
              <input
                type="number"
                id="product-price"
                name="price"
                value={productDetails.price || ""}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="product-image">Product Image</label>
              <input
                type="file"
                id="product-image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-success mt-3">
              Update Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
