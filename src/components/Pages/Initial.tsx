import React from "react";
import { Container } from "react-bootstrap";
import Search from "../../logos/search.svg";

const Initial = (): JSX.Element => {
  return (
    <Container style={{ textAlign: "center" }}>
      <img
        style={{
          maxWidth: "100%",
          height: "auto",
          width: 50,
          margin: 30,
        }}
        src={Search}
        alt="Search Logo"
      />
      <p>
        <b>Enter a login, name or company that you are looking for</b>
      </p>
    </Container>
  );
};

export default Initial;
