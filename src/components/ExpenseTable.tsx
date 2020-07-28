import React, { FC } from 'react';
import moment from 'moment';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

interface IProps {
  expenses: any
}

const ExpenseTable: FC<IProps> = (props) => {
  return (
    <>
      <Table 
        columns={columns}
        dataSource={props.expenses}
        rowKey="id"
        expandable={{
          expandedRowRender: record => <p style={{ margin: 0 }}>Note: {record.note}</p>,
          rowExpandable: record => record.note !== '',
        }}
      />
    </>
  )
};

const columns = [
  {
    title: 'Decription',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount: number) => amount / 100,
    sorter: (a: any, b: any) => a.amount - b.amount
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (time: any) => moment(time).format('YYYY-MM-DD'),
    sorter: (a: any, b: any) => moment(a.createdAt).valueOf() - moment(b.createdAt).valueOf() 
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (text: any, record:any) => <Link to={`/edit/${record.id}`}>Edit</Link>
  }
];

export default ExpenseTable;