import React, { useContext } from "react";

import { RegistrationContext } from "../context/RegistrationContext";

import "../styles/Registration.css";

// Page to enter personal details
const UserDetails = ({ currentPage, setCurrentPage }) => {
  const { getRegistrationContext, setRegistrationContext } = useContext(RegistrationContext);
  const context = getRegistrationContext();

  const handleNext = () => {
    const form = document.querySelector(".form");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    setRegistrationContext(data);
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="container">
      <div>
        <h2>Personal Details</h2>
        <form className="form">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              className="input"
              placeholder={context.firstName}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              className="input"
              placeholder={context.lastName || ""}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              className="input"
              placeholder={context.email || ""}
            />
          </label>
          <br />
          <label>
            Date of Birth:
            <input
              type="date"
              name="dateOfBirth"
              className="input"
              placeholder={context.dateOfBirth || ""}
            />
          </label>
          <br />
          <div className="btn-grp">
            <button type='button' className="button" onClick={() => handleNext()}>Next</button>
          </div>
        </form>
      </div>

      <div>
        <h2>Context</h2>
        {Object.keys(context).length === 0? <p>No data</p> :
        Object.keys(context).map((key) => (
          <p key={key}>
            {key}: {context[key]}
          </p>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
