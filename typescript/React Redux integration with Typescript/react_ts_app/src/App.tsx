import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Products  from "./funcComponents/Products";

function App() {
  return (
    <Router>
      <Route exact path={'/functional'}>
        <Products></Products>
      </Route>
      <Route exact path={'/class_based'}></Route>
    </Router>
  );
}

export default App;
