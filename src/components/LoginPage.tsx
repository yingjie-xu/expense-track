import React, { FC } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { startLogin } from '../redux/AuthActions';

const LoginPage: FC = (props: any) => (
  <>
    <h1>Plase log in here</h1>
    <Button onClick={props.startLogin}>Login</Button>
  </>
)

const mapDispatchToProps = (dispatch : any) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);