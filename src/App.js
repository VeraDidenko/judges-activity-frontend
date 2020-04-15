import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";
import TopMenu from './Components/TopMenu/TopMenu';
import PivotTable from './Components/PivotTable/PivotTable';
import Dashboard from './Components/Dashboard/Dashboard';
import Welcome from './Components/Welcome/Welcome';


const TopMenuWithRouter = withRouter(TopMenu);

function App() {
  return (

    <Router>
        <Fragment>
          <TopMenuWithRouter />
          <Route path="/" exact component={Welcome} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/pivot" exact component={PivotTable} />
        </Fragment>
      </Router>
      
  );
}

export default App;
