import React, { FC } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import ExpenseTable from './ExpenseTable';
import FilterHeader from './FilterHeader';
import { PageHeader } from 'antd';

const ExpenseList: FC = (props: any) => (
  <>
    <PageHeader 
      title={`Viewing ${props.expenses.length} expenses`}
      style={{padding: '0', paddingLeft: '24px'}}
    />
    <FilterHeader />
    <ExpenseTable expenses={props.expenses} />
  </>
);

const filterExpenses = (expenses: any, {text, startDate, endDate}: any) => {
  return expenses.filter((expense: any) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; 
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  });
};

const mapStateToProps = (state: any) => {
  return {
    expenses: filterExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);