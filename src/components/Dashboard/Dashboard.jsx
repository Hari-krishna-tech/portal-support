import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css"; // Ensure to create this CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h2>Digital Warehousing</h2>
          <p>By Digital Warehouse System</p>
        </header>

        <section className="dashboard-overview">
          <h3>Dashboard Overview</h3>
          <div className="filter-box">
            <div className="filter-item">
              <label>Profit Center</label>
              <select>
                <option>Select Profit Center</option>
                <option>Center 1</option>
                <option>Center 2</option>
              </select>
            </div>

            <div className="filter-item">
              <label>Date Range</label>
              <input type="date" placeholder="Select Date Range" />
            </div>

            <div className="filter-buttons">
              <button className="btn-search">Search</button>
              <button className="btn-reset">Reset</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
