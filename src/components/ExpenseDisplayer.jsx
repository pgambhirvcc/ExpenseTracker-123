import React, { useContext, useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'
import ExpenseContext from '../context/ExpenseContext';

const ExpenseDisplayer = () => {


 const theme = useContext(ThemeContext);
const { expensesList, setExpensesList } = useContext(ExpenseContext);

const handleSort = () => {
    const sortedExpensesList = expensesList.sort((a, b) => a.amount - b.amount);
    setExpensesList([...sortedExpensesList]);
}

  return (
    <div className='expense-displayer-container'>
        <button onClick={handleSort}>Sort By Price</button>

        {
            expensesList.map((expense) => {
                return (
                    <div className={
                        theme === 'light' ? 
                        'expense-displayer-list-light':
                        'expense-displayer-list-dark'
                    }>
                        <span>Expense Name: {expense.name}</span>
                        <span>Expense Amount: ${expense.amount}</span>
                        <span>Expense Category: {expense.category}</span>
                        <span>Expense Date: {expense.createdDate.toISOString()}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ExpenseDisplayer