import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import {Private} from "./Routs/Private";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<Private><AdminLayout /></Private>} />
        <Route path="rtl/*" element={<Private><RtlLayout /></Private>} />
        <Route path="/" element={<Private><Navigate to="/admin" replace /></Private>} />
    </Routes>
  );
};

export default App;
