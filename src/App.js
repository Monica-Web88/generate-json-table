import React, { useState, useEffect } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    
    </div>
  );
}
