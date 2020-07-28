import React, { FC } from 'react';
import Header from '../components/Header';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrviateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter: FC = () => (
  <Router>
    <Header />
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact />
      <PrviateRoute path="/dashboard" component={DashboardPage} />
      <PrviateRoute path="/create" component={AddExpensePage} />
      <PrviateRoute path="/edit/:id" component={EditExpensePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

export default AppRouter;