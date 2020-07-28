import { 
  SET_FILTER_TEXT, 
  SET_START_DATE, 
  SET_END_DATE 
} from "./ActionTypes";

export const setFilterText = (text: string) => ({
  type: SET_FILTER_TEXT,
  text
});

export const setStartDate = (startDate: any) => ({
  type: SET_START_DATE,
  startDate
});

export const setEndDate = (endDate: any) => ({
  type: SET_END_DATE,
  endDate
});
