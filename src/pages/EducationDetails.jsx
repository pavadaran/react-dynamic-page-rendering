import React from "react";

import "../styles/Registration.css";

// Page to enter education details
const EducationDetails = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="container">
      <h2>Education Details</h2>
      <form className="form">
        <label>
          School Name:
          <input
            type="text"
            name="schoolName"
            className="input"
          />
        </label>
        <br />
        <label>
          Graduation Year:
          <input
            type="text"
            name="graduationYear"
            className="input"
          />
        </label>
        <br />
        <label>
          Major:
          <input
            type="text"
            name="major"
            className="input"
          />
        </label>
        <br />
        <div className="btn-grp">
          <button className="button" onClick={() => setCurrentPage(currentPage-1)}>Previous</button>
          <button className="button" onClick={() => setCurrentPage(currentPage+1)}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default EducationDetails;
