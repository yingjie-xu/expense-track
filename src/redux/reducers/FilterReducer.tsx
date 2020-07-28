import { 
  SET_FILTER_TEXT,
  SET_START_DATE, 
  SET_END_DATE 
} from "../ActionTypes";
import { Reducer } from "redux";
import moment from "moment";

const filterReducer: Reducer  = (prevState = {
  text: '',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}, action)=> {
  switch (action.type){
    case SET_FILTER_TEXT:
      return {
        ...prevState,
        text: action.text
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