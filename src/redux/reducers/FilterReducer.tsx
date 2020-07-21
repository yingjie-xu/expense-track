import { 
  SET_FILTER_TEXT, 
  SORT_BY_DATE, 
  SORT_BY_AMOUNT, 
  SET_START_DATE, 
  SET_END_DATE 
} from "../ActionTypes";
import { Reducer } from "redux";
import moment from "moment";

const filterReducer: Reducer  = (prevState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}, action)=> {
  switch (action.type){
    case SET_FILTER_TEXT:
      return {
        ...prevState,
        text: action.text
      };
    case SORT_BY_DATE:
      return {
        ...prevState,
        sortBy: 'date'
      };
    case SORT_BY_AMOUNT:
      return {
        ...prevState,
        sortBy: 'amount'
      };
    case SET_START_DATE:
      return {
        ...prevState,
        startDate: action.startDate
      };
    case SET_END_DATE:
      return {
        ...prevState,
        endDate: action.endDate
      };
    default:
      return prevState;
  }
};

export default filterReducer;