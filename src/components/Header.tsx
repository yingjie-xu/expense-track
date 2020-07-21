import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Header: FC = () => (
  <>
    <h1>Expense Track App</h1>
    <NavLink to="/dashboard">Dashboard</NavLink>
    <NavLink to="/create">Create Expense</NavLink>
  </>
)

export default Header;