import { 
  SET_FILTER_TEXT, 
  SORT_BY_DATE, 
  SORT_BY_AMOUNT, 
  SET_START_DATE, 
  SET_END_DATE 
} from "./ActionTypes";

export const setFilterText = (text: string) => ({
  type: SET_FILTER_TEXT,
  text
});

export const sortByDate = () => ({
  type: SORT_BY_DATE
});

export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT
});

export const setStartDate = (startDate: any) => ({
  type: SET_START_DATE,
  startDate
});

export const setEndDate = (endDate: any) => ({
  type: SET_END_DATE,
  endDate
});
