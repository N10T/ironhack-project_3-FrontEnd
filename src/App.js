import './App.css';
import { Route, Switch } from "react-router-dom";
import React from "react";

// pages components
import home from "./views/home";
import FormBuilding from "./components/Forms/FormBuilding"
import FormKey from "./components/Forms/FormKey"
import FormInformation from "./components/Forms/FormInformation";


// partials
import HeaderMain from "./components/HeaderMain";
import FooterMain from "./components/FooterMain";
// import SearchBar from "./components/SearchBar";

// auth


function App() {
  return (
<React.Fragment>
          <HeaderMain />
          {/* <SearchBar /> */}
            <Switch>
              <Route exact path="/" component={home} />
              <Route
                exact
                path="/admin/building"
                component={FormBuilding}
              />
                            <Route
                exact
                path="/admin/key"
                component={FormKey}
              />
                            <Route
                exact
                path="/building/create-information"
                component={FormInformation}
              />
            </Switch>
          <FooterMain />
        </React.Fragment>
  );
}

export default App;
