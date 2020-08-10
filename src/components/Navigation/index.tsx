import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { GithubDataStateContext } from "../../context";
import NavigationItem from "./NavigationItem";

const NavigationBar = (): JSX.Element => {
  const { state } = useContext(GithubDataStateContext);

  return (
    <Nav defaultActiveKey="/repos" justify fill variant="tabs">
      <NavigationItem
        link="/repos"
        title="REPOSITORIES"
        subtitle={state.repository?.length || 0}
      />
      <NavigationItem
        link="/orgs"
        title="ORGANIZATION"
        subtitle={state.organization?.length || 0}
      />
    </Nav>
  );
};

export default NavigationBar;
