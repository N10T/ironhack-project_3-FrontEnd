import './App.css';
import { Route, Switch } from "react-router-dom";
import React from "react";
import HeaderMain from "./components/HeaderMain";
import FooterMain from "./components/FooterMain";
import home from "./views/home";


function App() {
  return (
<React.Fragment>
          <HeaderMain />
            <Switch>
              <Route exact path="/" component={home} />
            </Switch>
          <FooterMain />
        </React.Fragment>
  );
}

export default App;
