import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserForm from "./UserForm";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter } from "react-router-dom";
import OrderDetails from "./OrderDetails";
// import ReactDOM from "react-dom";

function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header"> */}
    //   <UserForm />
    //   {/* </header> */}
    // </div>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={UserForm} />
        <Route exact path="/order-details" component={OrderDetails} />
      </div>
      {/* <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} /> */}
      {/* </Route> */}
    </BrowserRouter>
  );
}

export default App;
