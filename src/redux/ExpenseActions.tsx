import database from '../firebase/Firebase';
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, SET_EXPENSES } from './ActionTypes'

export const addExpense = (expense: any) => ({
  type: ADD_EXPENSE,
  expense
});

export const startAddExpense: any = (expenseData : any = {}) => {
  return (dispatch : any, getState: any) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  }
};

export const removeExpense = (id: any) => ({
  type: REMOVE_EXPENSE,
  id
});

export const startRemoveExpense = (id: any) => {
  return (dispatch: any, getState: any) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense(id));
    });
  };
};

export const editExpense = (id: string, updates: any) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});

export const startEditExpense = (id: string, updates: any) => {
  return (dispatch: any, getState: any) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

export const setExpenses = (expenses: any) => ({
  type: SET_EXPENSES,
  expenses
});

export const startSetExpenses : any = () => {
  return (dispatch: any, getState: any) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/`).once('value').then((snapshot) => {
      const expenses : any = [];
      snapshot.forEach((childrenSnapshot) => {
        expenses.push({
          id: childrenSnapshot.key,
          ...childrenSnapshot.val()
        });
      });
      dispatch(setExpenses(expenses));
    });
  };
};