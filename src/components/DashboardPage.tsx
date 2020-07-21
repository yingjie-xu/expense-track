import React, { FC } from 'react';
import { connect } from 'react-redux';
import ExpenseList from './ExpenseList';

const DashboardPage: FC = (props:any) => (
  <>
    <h1>Dashboard</h1>
    <ExpenseList />
  </>
)

const mapStateToProps = (state:any) => ({
  expenses: state.expenses
})

export default connect(mapStateToProps)(DashboardPage);