import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { GithubDataProvider } from "../context";
import UserInput from "./UserInput";
import Header from "./Base/Header";
import Initial from "./Pages/Initial";
import DataList from "./DataList";
import NavigationBar from "./Navigation";

const customHistory = createBrowserHistory();

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Initial />
      </Route>
      <Route exact path="/repos">
        <DataList type="repos" />
      </Route>
      <Route path="/orgs">
        <DataList type="orgs" />
      </Route>
    </Switch>
  );
};

const App = (): JSX.Element => {
  return (
    <Container className="p-5">
      <Header />
      <Row>
        <Router history={customHistory}>
          <GithubDataProvider>
            <UserInput />
            <Col>
              <NavigationBar />
              <Routes />
            </Col>
          </GithubDataProvider>
        </Router>
      </Row>
    </Container>
  );
};

export default App;
