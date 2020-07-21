import React, { FC } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { removeExpense, editExpense } from '../redux/ExpenseActions';

const EditExpensePage: FC = (props : any) => {
  const id = props.match.params.id;

  return (
    <>
      <h1>Editing Expense with Id: {id}</h1>
      <ExpenseForm 
        onFinish={(expense: any) => {
          props.editExpense(id, expense);
          props.history.push('/dashboard');
        }}
        expense={props.expense}
        isEdit={true}
        onDelete={() => {
          props.removeExpense(id)
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
    removeExpense: (id: string) => dispatch(removeExpense(id)),
    editExpense: (id: string, expense: any) => dispatch(editExpense(id, expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);