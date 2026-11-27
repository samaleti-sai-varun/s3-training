import React from "react";
import {Link,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import "./App.css";

const App=()=>{
  return(<>
  <div id="com-name">
    <h3>S3 DATA SOLUTIONS</h3>
  </div>
  <hr />
    <div id="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
    <div id="routes">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
    <hr />
    <div id="foot">
      <h2>© 2026 S3 Data Solutions. All Rights Reserved.</h2>
    </div>
  </>);
}

export default App;