import React, { FC } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startRemoveExpense, startEditExpense } from '../redux/ExpenseActions';
import { PageHeader } from 'antd';

const EditExpensePage: FC = (props : any) => {
  const id = props.match.params.id;

  return (
    <>
      <PageHeader 
        title={`Editing Expense`}
        style={{padding: '0', paddingLeft: '24px'}}
      />
      <ExpenseForm 
        onFinish={(expense: any) => {
          props.startEditExpense(id, expense);
          props.history.push('/dashboard');
        }}
        expense={props.expense}
        isEdit={true}
        onDelete={() => {
          props.startRemoveExpense(id)
          props.history.push('/dashboard');
        }}
      />
    </>
  )
}

const mapStateToProps = (state : any, props : any) => {
  return {
    expense: state.expenses.find((expense : any) => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch : any) => {
  return {
    startRemoveExpense: (id: string) => dispatch(startRemoveExpense(id)),
    startEditExpense: (id: string, expense: any) => dispatch(startEditExpense(id, expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);