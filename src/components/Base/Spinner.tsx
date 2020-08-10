import React from "react";
import { Spinner as BootstrapSpinner } from "react-bootstrap";

const Spinner = (): JSX.Element => {
  return (
    <BootstrapSpinner animation="grow" variant="primary" role="status">
      <span className="sr-only">Loading...</span>
    </BootstrapSpinner>
  );
};

export default Spinner;
