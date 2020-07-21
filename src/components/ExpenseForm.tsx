import React, { FC } from 'react';
import { Form, Input, Button, InputNumber, DatePicker } from 'antd';
import moment from 'moment';

type Props = {
  expense?: any,
  onFinish: any,
  isEdit: boolean,
  onDelete?: any
};

const ExpenseForm: FC<Props> = (props: any) => {
  const [form] = Form.useForm();
  
  const { TextArea } = Input;

  const initialValues = {
    description: props.expense ? props.expense.description : '',
    note: props.expense ? props.expense.note : '',
    amount: props.expense ? (props.expense.amount / 100) : '',
    createdAt: props.expense ? moment(props.expense.createdAt) : moment()
  }

  const onFinish = (values: any) => {
    props.onFinish(values);
  }

  return (
    <>
      <Form form={form} onFinish={onFinish} initialValues={initialValues}>
        <Form.Item
          label="Description:"
          name="description"
          hasFeedback
          rules={[{ required: true, message: 'Please enter description!' }]}
        >
          <Input
            allowClear
            placeholder="Description"
          />
        </Form.Item>
        <Form.Item
          label="Amount:"
          name="amount"
          hasFeedback
          rules={[{ required: true, message: 'Please enter amount!' }]}
        >
          <InputNumber 
            style={{width: "auto"}}
            min={0}
            precision={2}
          />
        </Form.Item>
        <Form.Item
          label="Created at:"
          name="createdAt"
        >
          <DatePicker/>
        </Form.Item>
        <Form.Item
          label="Note:"
          name="note"
        >
          <TextArea
            allowClear
            placeholder="note"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
          <Button htmlType="button" onClick={() => form.resetFields()}>
            Reset
          </Button>
          {props.isEdit && 
            <Button htmlType="button" onClick={() => {
              console.log('delete')
              props.onDelete()
            }}>
              Delete
            </Button>
          }
        </Form.Item>
      </Form>
    </>
  )
}

export default ExpenseForm;