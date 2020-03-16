import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PivotTable from './Components/PivotTable/PivotTable';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <Router>
          <Route exact path="/" component={PivotTable}/>
          <Route exact path="/home" component={Welcome}/>
        </Router>
  );
}

export default App;
