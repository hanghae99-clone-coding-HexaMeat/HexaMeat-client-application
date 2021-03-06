import "./App.css";
import React from "react";
import PostList from "../pages/PostList";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../components/Header";
import Shopping from "../pages/Shopping";
import Cart from "../pages/Cart";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import { Grid } from "../elements";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <ConnectedRouter history={history}>
          <Header></Header>
          <Route path="/" exact component={PostList} />
          <Route path="/posts" exact component={Shopping} />
          <Route path="/posts/:id" exact component={Detail} />
          <Route path="/login" exacrt component={Login} />
          <Route path="/signup" exacrt component={Signup} />
          <Route path="/cart" exact component={Cart} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
