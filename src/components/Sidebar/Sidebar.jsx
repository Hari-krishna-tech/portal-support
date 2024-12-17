import react from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>ofi</h2>
        <p>make it real</p>
      </div>
      
      <nav className="nav-menu">
        <ul>
          <li className="active">
            <i className="icon-dashboard"></i> Dashboard
          </li>
          <li>
            <i className="icon-report"></i> Transaction Report
          </li>
          <li>
            <i className="icon-user"></i> User Administration
          </li>
          <li>
            <i className="icon-portal"></i> Portal Configuration
          </li>
          <li>
            <i className="icon-vega"></i> Vega Configuration
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
