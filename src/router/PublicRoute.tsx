import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ isAuthed, component: Component, ...rest}: any) => (
  <Route {...rest} component={(props: any) => (
    !isAuthed ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/dashboard" />
    )
  )}/>
);

const mapStateToProps = (state: any) => ({
  isAuthed: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);