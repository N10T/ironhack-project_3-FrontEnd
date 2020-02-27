import './App.css';
import { Route, Switch } from "react-router-dom";
import React from "react";

// pages components
import home from "./views/home";
import AdminForms from "./views/AdminForms";
import FormBuilding from "./components/Forms/FormBuilding"


// partials
import HeaderMain from "./components/HeaderMain";
import FooterMain from "./components/FooterMain";

// auth


function App() {
  return (
<React.Fragment>
          <HeaderMain />
            <Switch>
              <Route exact path="/" component={home} />
              <Route
                exact
                path="/admin/building"
                component={FormBuilding}
              />
            </Switch>
          <FooterMain />
        </React.Fragment>
  );
}

export default App;
