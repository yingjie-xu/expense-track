import React, { FC } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../redux/ExpenseActions';
import { withRouter } from 'react-router-dom';

const AddExpensePage: FC = (props:any) => (
  <>
    <h1>Create a new expense</h1>
    <ExpenseForm 
      onFinish={(expense: any) => {
        props.startAddExpense(expense);
        props.history.push('/dashboard');
      }}
      isEdit={false}
    />
  </>
);

const mapDispatchToProps = (dispatch: any) => {
  return {
    startAddExpense: (expense: any) => dispatch(startAddExpense(expense))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(AddExpensePage));