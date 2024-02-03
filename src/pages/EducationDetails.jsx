import React, { useContext } from "react";

import { RegistrationContext } from "../context/RegistrationContext";

import "../styles/Registration.css";

// Page to enter education details
const EducationDetails = ({ currentPage, setCurrentPage }) => {
  const {getRegistrationContext, setRegistrationContext} = useContext(RegistrationContext);
  const context = getRegistrationContext();

  const handleNext = () => {
    const form = document.querySelector(".form");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    setRegistrationContext(data);
    setCurrentPage(currentPage+1);
  }

  return (
    <div className="container">
      <div>
        <h2>Education Details</h2>
        <form className="form">
          <label>
            School Name:
            <input
              type="text"
              name="schoolName"
              className="input"
              placeholder={context.schoolName}
            />
          </label>
          <br />
          <label>
            Graduation Year:
            <input
              type="text"
              name="graduationYear"
              className="input"
              placeholder={context.graduationYear}
            />
          </label>
          <br />
          <label>
            Major:
            <input
              type="text"
              name="major"
              className="input"
              placeholder={context.major}
            />
          </label>
          <br />
          <div className="btn-grp">
            <button type='button' className="button" onClick={() => setCurrentPage(currentPage-1)}>Previous</button>
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

export default EducationDetails;
