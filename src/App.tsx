import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/Home';
import Add from './components/Add';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Route exact path="/" children={<Home />} />
      <Route path="/add" children={<Add lines={3} columns={2} />} />
      {/* <Route path="*" children={<NotFound />} /> */}
    </Router>
  );
}

export default App;
