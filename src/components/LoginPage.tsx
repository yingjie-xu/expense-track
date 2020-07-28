import React, { FC } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { startLogin } from '../redux/AuthActions';
import '../styles/LoginPage.css';

const LoginPage: FC = (props: any) => (
  <div className="login-page">
    <div>
      <h1>Expense Track App</h1>
      <p>This is an app for tracking your everyday expenses</p>
      <Button onClick={props.startLogin}>Login with Google</Button>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch : any) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);