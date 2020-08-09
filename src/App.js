import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
