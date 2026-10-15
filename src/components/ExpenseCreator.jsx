import React, { useContext, useState } from 'react'
import ThemeContext from '../context/ThemeContext';
import ExpenseContext from '../context/ExpenseContext';

const CATEGORIES = [
    {
        id: 'Food',
        value: 'Food'
    },
    {
        id: 'Grocery',
        value: 'Grocery'
    },
    {
        id: 'Rent',
        value: 'Rent'
    },
    {
        id: 'Car',
        value: 'Car'
    },
    {
        id: 'Misc',
        value: 'Misc'
    }
]

const ExpenseCreator = () => {

    const [expenseInfo, setExpenseInfo] = useState({});
    const theme = useContext(ThemeContext);
    const { expensesList, setExpensesList} = useContext(ExpenseContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        // This is the data we are going to use
        const dataWithDate = {
            ...expenseInfo,
            createdDate: new Date()
        }

        setExpensesList([
            ...expensesList,
            dataWithDate
        ])
    }

    return (
        <form className={theme === 'light'? 'form-light': 'form-dark'} onSubmit={handleSubmit}>
            <div class='form-control'>
                <label>Expense Name</label>
                <input
                    value={expenseInfo.name}
                    onChange={(event) => setExpenseInfo(
                        {
                            ...expenseInfo,
                            name: event.target.value
                        }
                    )}
                    type="text" placeholder='Enter Expense Name' />
            </div>

            <div class='form-control'>
                <label>Expense Amount</label>
                <input value={expenseInfo.amount}
                    onChange={(event) => setExpenseInfo(
                        {
                            ...expenseInfo,
                            amount: event.target.value
                        }
                    )}
                    type="number" placeholder='Enter Expense Amount' />
            </div>

            <div class='form-control'>
                <label>Expense Category</label>
                <select
                    value={expenseInfo.category}
                    onChange={(event) => setExpenseInfo(
                        {
                            ...expenseInfo,
                            category: event.target.value
                        }
                    )}
                >
                    {
                        CATEGORIES.map((category) => {
                            return <option value={category.id}>{category.value}</option>
                        })
                    }
                </select>
            </div>

            <button className={theme === 'light' ? 'form-button-light': 'form-button-dark'}>
                Submit
            </button>
        </form>
    )
}

export default ExpenseCreator