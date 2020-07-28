import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ isAuthed, component: Component, ...rest}: any) => (
  <Route {...rest} component={(props: any) => (
    isAuthed ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const mapStateToProps = (state: any) => ({
  isAuthed: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);