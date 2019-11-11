// import React from 'react';
// import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

// const ExpenseDashboardPage = () =>(
//   <div>
//     This is from my dashboard
//   </div>
// )

// const AddExpensePage = () =>(
//   <div>
//     This is add expense page
//   </div>
// )

// const EditExpensePage = () =>(
//   <div>
//     Edit expense page
//   </div>
// )


// const HelpPage = () =>(
//   <div>
//     Help page .......
//   </div>
// )

// const NotFound = () =>(
//   <div>
//    404 page -- <Link to="/">Go home</Link>
//   </div>
// )

// const Header = () =>(
//   <div>
//     <h1>Expensify</h1>
//     <NavLink exact to="/"  activeClassName="selected">Dashboard</NavLink>
//     <NavLink to="/create" activeClassName="selected">Create Expense</NavLink>
//     <NavLink to="/edit" activeClassName="selected">Edit Expense</NavLink>
//     <NavLink to="/help" activeClassName="selected">Help</NavLink>
//   </div>
// )
// function App() {
//   return (

//       <BrowserRouter>
//       <div>
//         <Header />
//         <Switch>
//           <Route path="/" component={ExpenseDashboardPage} exact={true}/>
//           <Route path="/create" component={AddExpensePage}/>
//           <Route path="/edit" component={EditExpensePage}/>
//           <Route path="/help" component={HelpPage}/>
//           <Route component={NotFound}/>
//         </Switch> 
//       </div>
//       </BrowserRouter>
  
//   );
// }

// export default App;
