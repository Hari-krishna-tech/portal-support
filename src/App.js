import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/pages/Dashboard";
import RoleAddition from "./components/pages/RoleAddition";
import "./App.css";

// Placeholder components for other routes
const TransactionReport = () => (
  <div className="page">
    <h1>Transaction Report</h1>
  </div>
);
const UserAdmin = () => (
  <div className="page">
    <h1>User Administration</h1>
  </div>
);
const PortalConfig = () => (
  <div className="page">
    <h1>Portal Configuration</h1>
  </div>
);
const VegaConfig = () => (
  <div className="page">
    <h1>Vega Configuration</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionReport />} />
          <Route path="/users" element={<UserAdmin />} />
          <Route path="/portal" element={<PortalConfig />} />
          <Route path="/vega" element={<VegaConfig />} />
          <Route path="/role" element={<RoleAddition />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
