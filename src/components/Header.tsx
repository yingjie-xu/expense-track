import React, { FC } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Menu, PageHeader } from 'antd';
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
          <PageHeader
            title="Expense Track App"
            subTitle="Start tracking your expenses here"
            extra={[
              <Button key="logout" onClick={() => props.dispatch(startLogout())}>Logout</Button>
            ]}
          >
            <Menu mode="horizontal">
              <Menu.Item key="dashboard" >
                <NavLink to="/dashboard" exact>Dashboard</NavLink>
              </Menu.Item>
              <Menu.Item key="create" >
                <NavLink to="/create">Create new expense</NavLink>
              </Menu.Item>
            </Menu>
          </PageHeader>
        </>
      }
    </>
  )
};

const mapStateToProps = (state: any) => ({
  isAuthed: !!state.auth.uid
});

export default connect(mapStateToProps)(Header);