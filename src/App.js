import "./App.css";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import theme from "./components/palette/palette";

// pages components
import Home from "./views/Home";
import Discover from "./views/Discover";
import MyBuilding from "./views/Buildings";
import Messages from "./views/Messages";
import AllBuildings from "./views/All-buildings";
import AllUsers from "./views/Users";
import FormBuilding from "./components/Forms/FormBuilding";
import EditBuilding from "./components/Forms/EditBuilding";
import NewChat from "./components/Forms/NewChat";
import FormKey from "./components/Forms/FormKey";
import FormInformation from "./components/Forms/FormInformation";
import SignUp from "./components/Forms/SignUp";
import SignIn from "./components/Forms/SignIn";
import EditUser from "./components/Forms/EditUser";
import AdminEditUser from "./components/Forms/AdminEditUser";

// partials
import HeaderMain from "./components/HeaderMain";
import FooterMain from "./components/FooterMain";
// import SearchBar from "./components/SearchBar";

// auth
import { useAuth } from "./auth/useAuth";
import UserContext from "./auth/UserContext";
import { ProtectedRoute } from "./auth/ProtectedRoute";

function App() {
  const { isLoading } = useAuth();

  const [currentUser, setCurrentUser] = useState(null);

  const UserContextValue = {
    currentUser,
    setCurrentUser
  };

  return (
    <UserContext.Provider value={UserContextValue}>
      {isLoading ? null : (
        <ThemeProvider theme={theme}>
          <HeaderMain />
          <div className="protect-header"></div>
          {/* <SearchBar /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/discover" component={Discover} />
            {/* <Route exact path="/user/building" component={MyBuilding} /> */}
            {/* Why to do a protectet route: */}
            <ProtectedRoute
              exact
              path="/user/building"
              component={MyBuilding}
            />
            <Route
              exact
              path="/admin/create-building"
              component={FormBuilding}
            />
            <ProtectedRoute exact path="/admin/buildings" component={AllBuildings} />
            <ProtectedRoute exact path="/admin/users" component={AllUsers} />
            <ProtectedRoute exact path="/user/messages" component={Messages} />
            <ProtectedRoute exact path="/admin/building/:id" component={EditBuilding} />
            <ProtectedRoute exact path="/admin/key" component={FormKey} />
            <ProtectedRoute exact path="/profile/:id" component={EditUser} />
            <ProtectedRoute
              exact
              path="/admin/edit_user/:id"
              component={AdminEditUser}
            />
            <ProtectedRoute
              exact
              path="/building/create-information"
              component={FormInformation}
            />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <ProtectedRoute exact path="/user/create-a-chat" component={NewChat} />
          </Switch>
          <FooterMain />
        </ThemeProvider>
      )}
    </UserContext.Provider>
  );
}

export default App;
