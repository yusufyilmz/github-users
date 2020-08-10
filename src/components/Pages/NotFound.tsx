import React from "react";
import { Container } from "react-bootstrap";
import Zero from "../../logos/zero.svg";

interface NotFoundProps {
  type: string;
}

const NotFound = ({ type }: NotFoundProps): JSX.Element => {
  return (
    <Container style={{ textAlign: "center" }}>
      <img
        style={{
          maxWidth: "100%",
          height: "auto",
          width: 50,
          margin: 30,
        }}
        src={Zero}
        alt="Zero Logo"
      />
      <p>
        <b>Hmm... We didnt find any {type} with that user.</b>
      </p>
    </Container>
  );
};

export default NotFound;