import PageLoader from "./PageLoader.jsx";

import { RegistrationContext } from "../context/RegistrationContext.js";

const Registration = () => {
  // Code to  initialize the registration context
  let registrationContext = {};

  const getRegistrationContext = () => {
    return registrationContext;
  }
  
  const setRegistrationContext = (context) => {
    registrationContext = {...registrationContext, ...context};
  }

  return (
    <RegistrationContext.Provider value={{setRegistrationContext, getRegistrationContext}}>
      <PageLoader />
    </RegistrationContext.Provider>
  )
}

export default Registration;