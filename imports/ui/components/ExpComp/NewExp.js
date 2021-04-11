import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import AddExpense from './AddExpense';

export default function NewExp() {
    return (
        <div>
            <h1>New Expenses<DeleteIcon /></h1>
            <AddExpense/>
        </div>
    )
}
