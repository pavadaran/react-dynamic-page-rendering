import React, { Fragment, useState, useEffect } from "react";

import { getRegistrationFlow } from "../utils/registration_flow.js";

/**
 * Display different components based on the index.
 */
const PageLoader = () => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Get the current page component
  const { Component, ...props } =
    !isLoading &&
    pages.registrationPages.find((item) => item.Index === currentPage);

  useEffect(() => {
    setPages(getRegistrationFlow());
    setIsLoading(false);
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  return (
    <Fragment key={props.index}>
      {!isLoading && (
        <Component
          {...props}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {isLoading && <Loading />}
    </Fragment>
  );
};

export default PageLoader;
