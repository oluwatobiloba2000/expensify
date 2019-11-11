import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/expenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/editExpensePage';
import NotFound from '../components/NotFound';

const Header = () =>(
  <div>
    <h1>Expensify</h1>
    <NavLink exact to="/"  activeClassName="selected">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="selected">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="selected">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="selected">Help</NavLink>
  </div>
)

function AppRouter() {
  return (

      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true}/>
          <Route path="/create" component={AddExpensePage}/>
          <Route path="/edit" component={EditExpensePage}/>
          <Route path="/help" component={HelpPage}/>
          <Route component={NotFound}/>
        </Switch> 
      </div>
      </BrowserRouter>
  
  );
}

export default AppRouter;
