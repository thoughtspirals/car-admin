import React, { useState, useContext } from "react";
import { ProductContext } from "../../../context/product-context";
import "../../../styles/global.css";
import "../../../styles/product-components/delete-product.css";
import axios from "axios";

const DeleteProduct = () => {
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
  const [productData, setProductData] = useState(null);
  const [productId, setProductId] = useState("");

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
        setProductId(res.data.data._id);
        console.log(productId);

        setProductDetails({
          ...res.data.data,
        });
        console.log("Image Preview:", productDetails.image);

        alert(`Product found: ${res.data.data._id}`);
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

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the product with ID: ${productId}?`
    );

    try {
      const response = await axios.delete(
        `/products/api/v1/deleteProduct/${productId}`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert("Product deleted successfully!");
      } else {
        alert("Failed to delete product.");
      }
    } catch (error) {
      console.error(
        "Error deleting product:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div>
      <div className="title">
        <h1>Delete Product</h1>
      </div>

      <div className="delete-product-container">
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

        {productDetails ? (
          <div
            className="product-card"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <h3>{productDetails.name}</h3>
            <h4>Product ID: {productDetails._id}</h4>
            <p>{productDetails.description}</p>
            <p>Category: {productDetails.category}</p>
            <p>Price: Rs. {productDetails.price}</p>
            <img
              src={productDetails.image}
              alt={productDetails.name}
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />
            <div>
              <button onClick={handleDelete} className="btn btn-danger">
                Delete Product
              </button>
            </div>
          </div>
        ) : (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h4>No product found matching the search criteria.</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteProduct;
