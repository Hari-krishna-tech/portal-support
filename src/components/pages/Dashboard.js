import React from 'react';
import './Pages.css';

const Dashboard = () => {
  return (
    <div className="page">
      <h1>Dashboard Overview</h1>
      <div className="dashboard-filters">
        <div className="filter-group">
          <label>Profit Center</label>
          <select>
            <option>Select Profit Center</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Date Range</label>
          <input type="date" />
        </div>
        <button className="search-btn">Search</button>
        <button className="reset-btn">Reset</button>
      </div>
      <div className="dashboard-content">
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;
