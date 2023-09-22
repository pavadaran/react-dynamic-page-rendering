import React from "react";

import "../styles/Registration.css";

// Page to enter health details
const HealthDetails = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="container">
      <h2>Health Details</h2>
      <form className="form">
        <label>
          Height (cm):
          <input
            type="number"
            name="height"
            className="input"
          />
        </label>
        <br />
        <label>
          Weight (kg):
          <input
            type="number"
            name="weight"
            className="input"
          />
        </label>
        <br />
        <label>
          Blood Pressure:
          <input
            type="text"
            name="bloodPressure"
            className="input"
          />
        </label>
        <br />
        <div className="btn-grp">
          <button className="button" onClick={() => setCurrentPage(currentPage-1)}>Previous</button>
          <button className="button">Register</button>
        </div>
      </form>
    </div>
  );
}

export default HealthDetails;
