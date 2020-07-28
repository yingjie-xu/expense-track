import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, SET_EXPENSES } from "../ActionTypes";
import { Reducer } from "redux";

const expenseReducer: Reducer = (prevState = [], action) => {
  switch (action.type){
    case ADD_EXPENSE:
      return [
        ...prevState,
        action.expense
      ];
    case REMOVE_EXPENSE:
      return prevState.filter((expense : any) => expense.id !== action.id);
    case EDIT_EXPENSE:
      return prevState.map((expense : any) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      })
    case SET_EXPENSES:
      return action.expenses;
    default:
      return prevState;
  }
};

export default expenseReducer;