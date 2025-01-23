import React from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";
import "../../styles/regular_components/inventory-management.css";

const InventoryManagement = () => {
  return (
    <div>
      <div>
        <header className="title">
          <h1>Inventory Management</h1>
        </header>
      </div>

      <div className="inventory-management-container">
        <section className="card-container">
          <Link to="/create-product" className="action-card">
            <div className="card-content">
              <h3>Create Product</h3>
              <p>Add new products to your inventory.</p>
            </div>
          </Link>

          <Link to="/update-product" className="action-card">
            <div className="card-content">
              <h3>Update Product</h3>
              <p>Edit product details in your inventory.</p>
            </div>
          </Link>

          <Link to="/delete-product" className="action-card">
            <div className="card-content">
              <h3>Delete Product</h3>
              <p>Remove obsolete products from your inventory.</p>
            </div>
          </Link>

          <Link to="/analyze-product-sales" className="action-card">
            <div className="card-content">
              <h3>Analyze Sales</h3>
              <p>Track and analyze product sales performance.</p>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default InventoryManagement;
