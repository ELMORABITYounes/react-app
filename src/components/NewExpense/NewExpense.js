import React, {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    const [showForm, setShowForm] = useState(false);
    const saveExpenseData = (data) => {
        const newExpense = {
            ...data,
            id: Math.random().toString()
        }
        props.onAddExpense(newExpense)
        setShowForm(false)
    };

    function addNewExpenseHandler() {
        setShowForm(true)
    }

    function cancelHandler() {
        setShowForm(false)
    }

    if (!showForm){
        return <div className="new-expense">
            <button onClick={addNewExpenseHandler}> Add New Expense </button>
        </div>
    }

    return <div className="new-expense">
        <ExpenseForm onNewExpense={saveExpenseData} onCancel = {cancelHandler} showForm={showForm}/>
    </div>
}

export default NewExpense;