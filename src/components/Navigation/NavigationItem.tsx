import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

interface INavItemProps {
  title: string;
  link: string;
  subtitle: number;
}

const NavigationItem = ({
  title,
  link,
  subtitle,
}: INavItemProps): JSX.Element => (
  <NavItem>
    <Nav.Link href={link} as={Link} to={link}>
      <h6 style={{ color: "black" }}>
        <span>{title} </span>
        <span>({subtitle})</span>
      </h6>
    </Nav.Link>
  </NavItem>
);

export default NavigationItem;
