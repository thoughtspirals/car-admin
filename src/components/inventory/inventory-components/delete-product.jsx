import React, { useState } from "react";
import "../../../styles/global.css";
import "../../../styles/product-components/delete-product.css";

const DeleteProduct = () => {
  // Sample product list
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

  // State to hold search query and selected product data
  const [searchQuery, setSearchQuery] = useState("");
  const [productData, setProductData] = useState(null);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to search for a product
  const handleSearch = () => {
    const product = productList.find((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (product) {
      setProductData(product); // Update product data with the found product
    } else {
      setProductData(null); // Clear product data if not found
      alert("Product not found");
    }
  };

  // Function to delete a product (not connected to a backend or state here)
  const handleDelete = (productId) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the product with ID: ${productId}?`
    );
    if (confirmDelete) {
      alert(`Product with ID: ${productId} has been deleted.`);
      setProductData(null); // Clear product data after deletion
    }
  };

  return (
    <div>
      <div className="title">
        <h1>Delete Product</h1>
      </div>

      <div className="delete-product-container">
        {/* Search bar container */}
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

        {/* Display product details or no product found */}
        {productData ? (
          <div
            className="product-card"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <h3>{productData.name}</h3>
            <h4>Product ID: {productData.productId}</h4>
            <p>{productData.description}</p>
            <p>Category: {productData.category}</p>
            <p>Price: Rs. {productData.price}</p>
            <img
              src={productData.image}
              alt={productData.name}
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />
            <div>
              <button
                onClick={() => handleDelete(productData.productId)}
                className="btn btn-danger"
              >
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
