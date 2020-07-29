import React, { FC } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../redux/ExpenseActions';
import { withRouter } from 'react-router-dom';
import { PageHeader } from 'antd';

const AddExpensePage: FC = (props:any) => (
  <>
    <PageHeader 
      title={`Create a new expense`}
      style={{padding: '0', paddingLeft: '48px'}}
    />
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