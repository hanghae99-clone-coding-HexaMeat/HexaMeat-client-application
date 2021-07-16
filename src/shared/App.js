import "./App.css";
import React from "react";
import PostList from "../pages/PostList";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import { Grid } from "../elements";

function App() {

  return (
    <React.Fragment>
      <Grid>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
