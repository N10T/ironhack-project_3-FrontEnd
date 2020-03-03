import "./App.css";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import theme from "./components/palette/palette";

// pages components
import Home from "./views/Home";
import Discover from "./views/Discover";
import MyBuilding from "./views/Buildings";
import Messages from "./views/Messages";
import AllBuildings from "./views/All-buildings";
import FormBuilding from "./components/Forms/FormBuilding";
import EditBuilding from "./components/Forms/EditBuilding"
import NewChat from "./components/Forms/NewChat"
import FormKey from "./components/Forms/FormKey";
import FormInformation from "./components/Forms/FormInformation";
import SignUp from "./components/Forms/SignUp";
import SignIn from "./components/Forms/SignIn";

// partials
import HeaderMain from "./components/HeaderMain";
import FooterMain from "./components/FooterMain";
// import SearchBar from "./components/SearchBar";

// auth

function App() {
  return (
    <ThemeProvider theme={theme}>

      <HeaderMain />
      <div className="protect-header"></div>
      {/* <SearchBar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/admin/building" component={FormBuilding} />
        <Route exact path="/admin/buildings" component={AllBuildings} />
        <Route exact path="/user/building" component={MyBuilding} />
        <Route exact path="/user/messages" component={Messages} />
        <Route exact path="/admin/building/:id" component={EditBuilding} />
        <Route exact path="/admin/key" component={FormKey} />
        <Route exact path="/building/create-information" component={FormInformation} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/user/create-a-chat" component={NewChat} />
      </Switch>
      <FooterMain />
    </ThemeProvider>

  );
}

export default App;
