import React, { useContext } from "react";

import { RegistrationContext } from "../context/RegistrationContext";

import "../styles/Registration.css";

// Page to enter health details
const HealthDetails = ({ currentPage, setCurrentPage }) => {
  const {getRegistrationContext, setRegistrationContext} = useContext(RegistrationContext);
  const context = getRegistrationContext();

  const handleRegister = () => {
    const form = document.querySelector(".form");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    setRegistrationContext(data);
  }

  return (
    <div className="container">
      <div>

        <h2>Health Details</h2>
        <form className="form">
          <label>
            Height (cm):
            <input
              type="number"
              name="height"
              className="input"
              placeholder={context.height}
            />
          </label>
          <br />
          <label>
            Weight (kg):
            <input
              type="number"
              name="weight"
              className="input"
              placeholder={context.weight}
            />
          </label>
          <br />
          <label>
            Blood Pressure:
            <input
              type="text"
              name="bloodPressure"
              className="input"
              placeholder={context.bloodPressure}
            />
          </label>
          <br />
          <div className="btn-grp">
            <button type="button" className="button" onClick={() => setCurrentPage(currentPage-1)}>Previous</button>
            <button type='button' className="button" onClick={() => handleRegister()}>Register</button>
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

export default HealthDetails;
