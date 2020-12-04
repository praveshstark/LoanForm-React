import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Lender from './Lender';
import Borrower from './Borrower';
import Navbar from './Navbar';
import { Redirect, Route, Switch } from "react-router-dom";


const App=()=>{
  return(
    <>
      <Navbar/>
      <Switch>
      <Route exact path="/Lender" component={Lender} />
      <Route exact path="/Borrower" component={Borrower} />
      <Route exact path="/Lender" component={Lender} />
      <Route exact path="/Lender" component={Lender} />
      </Switch>
      <Redirect to="/Lender" />    
    </>

  );
};
export default App;
