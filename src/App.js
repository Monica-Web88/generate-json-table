import React, { useState, useEffect } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div>
    
        <Routes>
          <Route path="generate-json-table/" element={<Login />} />
          <Route path="generate-json-table/Login" element={<Login />} />
          <Route path="generate-json-table/Dashboard" element={<Dashboard />} />
        </Routes>
      
    </div>
  );
}
