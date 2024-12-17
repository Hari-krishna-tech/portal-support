import React, { useState } from "react";
import { postUserRolesUat, postUserRolesProd } from "../api/api";
import "./RoleAddition.css";

const RoleAddition = () => {
  const [userName, setUserName] = useState("");
  const [roleNames, setRoleNames] = useState("");
  const [key, setKey] = useState("");
  const [userRoles, setUserRoles] = useState([]);
  const [env, setEnv] = useState("UAT");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const rolesArray = roleNames.split(",").map((role) => role.trim());
    const newUserRoles = rolesArray.map((role) => ({
      id: 0,
      userName: userName,
      roleName: role,
      deletedFlag: false,
      priorityOrder: 0,
      key: parseInt(key, 10),
    }));

    setUserRoles(newUserRoles);
    if (env === "UAT") {
      setMessage(postUserRolesUat(newUserRoles));
    } else {
      setMessage(postUserRolesProd(newUserRoles));
    }
  };

  return (
    <div className="page">
      <div className="breadcrumb">
        <span className="breadcrumb-item">User Administration</span>
        <span className="breadcrumb-separator">{'>'}</span>
        <span className="breadcrumb-item">Role Addition</span>
      </div>
      
      <h1>Role Addition</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label>Role Names (comma-separated):</label>
          <input
            type="text"
            value={roleNames}
            onChange={(e) => setRoleNames(e.target.value)}
          />
        </div>

        <div>
          <label>Key:</label>
          <input
            type="number"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>

        <div>
          <label>Environment:</label>
          <select value={env} onChange={(e) => setEnv(e.target.value)}>
            <option value="UAT">UAT</option>
            <option value="PROD">PROD</option>
          </select>
        </div>

        <div>
          <button type="submit">Add Role(s)</button>
          <button type="button" onClick={() => {
            setUserName("");
            setRoleNames("");
            setKey("");
            setEnv("UAT");
          }}>Cancel</button>
        </div>
        
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default RoleAddition;
