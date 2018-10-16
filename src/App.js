import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
      </Switch>
    </div>
  </Router>
);
 
export default App;