import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/reusable_components/navbar";
import Dashboard from "./components/dashboard/dashboard";
import Footer from "./components/reusable_components/footer";

// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;
