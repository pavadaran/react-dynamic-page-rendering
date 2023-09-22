import React from "react";

import "../styles/Registration.css";

// Page to enter personal details
const UserDetails = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="container">
      <h2>Personal Details</h2>
      <form className="form">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            className="input"
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            className="input"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            className="input"
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            className="input"
          />
        </label>
        <br />
        <div className="btn-grp">
          <button className="button" onClick={() => setCurrentPage(currentPage+1)}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default UserDetails;
