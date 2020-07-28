import React, { FC } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { startLogout } from '../redux/AuthActions';
import { firebase } from '../firebase/Firebase';
import { startSetExpenses } from '../redux/ExpenseActions';
import { login, logout } from '../redux/AuthActions';

const Header: FC = (props: any) => {
  const history = useHistory();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      props.dispatch(login(user.uid));
      props.dispatch(startSetExpenses()).then(() => {
        if (history.location.pathname === '/') {
          history.push('/dashboard');
        }
      });
    } else {
      props.dispatch(logout());
      history.push('/');
    }
  });

  return (
    <>
      {props.isAuthed &&
        <>
          <h1>Expense Track App</h1>
          <NavLink to="/dashboard" exact>Dashboard</NavLink>
          <NavLink to="/create">Create Expense</NavLink>
          <Button onClick={() => props.dispatch(startLogout())}>Logout</Button>
        </>
      }
    </>
  )
};

const mapStateToProps = (state: any) => ({
  isAuthed: !!state.auth.uid
});

export default connect(mapStateToProps)(Header);