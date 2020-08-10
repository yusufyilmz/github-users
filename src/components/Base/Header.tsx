import React from "react";
import { Jumbotron } from "react-bootstrap";

const Header = (): JSX.Element => {
  return (
    <Jumbotron>
      <h1 className="header">Search for github users</h1>
    </Jumbotron>
  );
};

export default Header;
