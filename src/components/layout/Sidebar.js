import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/OFI_logo.svg";
import "./Sidebar.css";

const menuItems = [
  { path: "/", icon: "📊", label: "Dashboard", exact: true },
  { path: "/transactions", icon: "📝", label: "Transaction Report" },
  { path: "/users", icon: "👥", label: "User Administration" },
  { path: "/portal", icon: "⚙️", label: "Portal Configuration" },
  { path: "/vega", icon: "🔧", label: "Vega Configuration" },
  { path: "/role", icon: "👤", label: "DW Role Addition" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Digital Warehousing" />
        <h2>Digital Warehousing</h2>
      </div>

      <nav className="nav-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            end={item.exact}
          >
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
