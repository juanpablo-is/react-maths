import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import AddSub from './components/Operation/AddSub';

const App = () => {
  return (
    <Router>
      <Route exact path="/" children={<Home />} />
      <Route path="/add" children={<AddSub operation="+" />} />
      <Route path="/subtraction" children={<AddSub operation="-" />} />
    </Router>
  );
};

export default App;
