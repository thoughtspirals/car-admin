import React, { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState("");
  const [currentProduct, setCurrentProduct] = useState(null);
  const [token, setToken] = useState("");
  const [isProductUpdated, setIsProductUpdated] = useState(false);

  // Consolidate all admin-related details into a single object
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  // Dynamic handler for updating admin details
  const updateProductDetails = (field, value) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        currentProduct,
        setCurrentProduct,
        productDetails,
        setProductDetails,
        updateProductDetails,
        token,
        setToken,
        isProductUpdated,
        setIsProductUpdated,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
