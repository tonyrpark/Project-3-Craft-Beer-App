import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Graphs from './components/Graphs'

function App() {
  return (
    <Router>
       <div>
        <Graphs />
      </div>
    </Router>
   
  );
}

export default App;
