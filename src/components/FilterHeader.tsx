import React, { FC } from 'react';
import { DatePicker, Input } from 'antd';
import { connect } from 'react-redux';
import { setStartDate, setEndDate, setFilterText } from '../redux/FilterActions'

const { RangePicker } = DatePicker;

const FilterHeader: FC = (props: any) => (
  <>
    <Input 
      placeholder="Filter description here"
      defaultValue={props.text}
      onChange={(e: any) => {
        props.setFilterText(e.target.value);
      }}
    />
    <RangePicker 
      allowClear
      onChange={(date: any) => {
        props.setStartDate(date ? date[0] : null);
        props.setEndDate(date ? date[1] : null);
      }}
      defaultValue={[props.startDate, props.endDate]}
    />
  </>
);

const mapStateToProps = (state: any) => {
  return {
    startDate: state.filters.startDate,
    endDate: state.filters.endDate,
    text: state.filters.text
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setStartDate: (startDate: any) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate: any) => dispatch(setEndDate(endDate)),
    setFilterText: (text: string) => dispatch(setFilterText(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterHeader);