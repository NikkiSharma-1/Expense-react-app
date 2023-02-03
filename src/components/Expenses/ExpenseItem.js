import React ,{useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title);
  const [amount,setAmount] = useState(props.amount);
  const changeExpense=() => {
    setAmount('100!');
    console.log('Change Expense!!!')
  }

  const clickHandler=() => {
    setTitle('updated!');
    console.log('Delete Expense!!!')
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={changeExpense}>Change</button>
        <button onClick={clickHandler }>Delete</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;