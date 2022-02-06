import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import LineChart from '../LineChart/LineChart'
import Feeling from "../Question/Feeling";
import Understanding from "../Question/Understanding";
import Supported from "../Question/Supported";
import Comments from "../Question/Comments";
import Review from "../Review/Review";
import ThankYou from "../ThankYou/ThankYou";
import Admin from "../Admin/Admin";

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Understanding">Understanding</Link>
          <Link to="/Supported">Supported</Link>
          <Link to="/Comments">Comments</Link>
          <Link to="/Review">Review</Link>
          <Link to="/ThankYou">ThankYou</Link>
          <Link to="/Admin">Admin</Link>
        </nav>

        <Route path="/" exact>
          <Feeling />
          <br />
          <div className="container">
            <LineChart />
          </div>
        </Route>

        <Route path="/Understanding" exact>
          <Understanding />
        </Route>

        <Route path="/Supported" exact>
          <Supported />
        </Route>

        <Route path="/Review" exact>
          <Review />
        </Route>

        <Route path="/ThankYou" exact>
          <ThankYou />
        </Route>

        <Route path="/Comments" exact>
          <Comments />
        </Route>

        <Route path="/Admin" exact>
          <Admin />
        </Route>
      </div>
    </Router>
  );
}

export default App;
