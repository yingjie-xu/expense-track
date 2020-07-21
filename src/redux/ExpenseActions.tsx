import { v4 as uuidv4 } from 'uuid';
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from './ActionTypes'

export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
});

export const removeExpense = (id: any) => ({
  type: REMOVE_EXPENSE,
  id
})

export const editExpense = (id: string, updates: any) => ({
  type: EDIT_EXPENSE,
  id,
  updates
})