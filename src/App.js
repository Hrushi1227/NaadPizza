import React from "react";
import { Route, Switch } from "react-router-dom";
import Pizza from "./components/card/Pizza";
import User from "./components/user/User";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/user" component={User} />
        <Route exact path="/pizza" component={Pizza} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
