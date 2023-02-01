import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate=new Date(2022,2,28);
    const expenseDescription='Car Insurance';
    const expensePrice=269;
    const expenseLocation='USA';
    return (
        <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
        <h2>{expenseDescription}</h2>
        <div className="expense-item__price">${expensePrice}</div>
        <div>{expenseLocation}</div>
        </div> 
    </div>
    ); 
}

export default ExpenseItem;