import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DetailPage, Home } from "pages";
import { Footer, Header } from "component";

const App = () => {
  return (
    <Router className="font-primary">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/detail-page" component={DetailPage}>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
