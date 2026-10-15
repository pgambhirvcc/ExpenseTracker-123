import React from 'react'

const EXPENSES = [
    {
        name: 'Gasoline',
        category: 'Car',
        createdDate: new Date(),
        amount: 100
    },
    {
        name: 'Wallmart',
        category: 'Grocery',
        createdDate: new Date(),
        amount: 250
    }
]
const ExpenseDisplayer = () => {

  return (
    <div className='expense-displayer-container'>
        {
            EXPENSES.map((expense) => {
                return (
                    <div className='expense-displayer-list'>
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