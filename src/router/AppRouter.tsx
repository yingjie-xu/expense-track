import React, { FC } from 'react';
import Header from '../components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

const AppRouter: FC = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" component={LoginPage} exact />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

export default AppRouter;