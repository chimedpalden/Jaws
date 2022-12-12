import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { registerIntercepts, setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";
import { ToastContainer } from "react-toastify";
import { either, isEmpty, isNil } from "ramda";
import { getFromLocalStorage } from "utils/storage";

import Dashboard from "components/Dashboard";
import CreateProduct from "components/Menu/Create";
import NavBar from "components/NavBar"
import Checkout from "components/Cart/Checkout"
import { Login, Signup } from "components/Authentication";
import Message from "components/Message";
import PrivateRoute from "components/Common/PrivateRoute";

const App = () => {
  const [loading, setLoading] = useState(true);
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn = !either(isNil, isEmpty)(authToken);

  useEffect(() => {
    initializeLogger();
    registerIntercepts();
    setAuthHeaders(setLoading);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <NavBar />
      <ToastContainer />
      <Switch>
        {/*<Route exact path="/" render={() => <div>Home</div>} />*/}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/products/create" component={CreateProduct} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cart" component={Checkout} />
        <Route exact path="/messages" component={Message} />
        <PrivateRoute
          path="/"
          redirectRoute="/login"
          condition={isLoggedIn}
          component={Dashboard}
        />
      </Switch>
    </Router>
  );
};

export default App;
