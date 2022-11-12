import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {


    const [year, setYear] = useState(2020);

    function yearSelectionHandler(year) {
        setYear(year)
    }

    const filteredItems = props.items.filter(it => it.date.getFullYear() === year);
    
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedYear={year} onYearSelect={yearSelectionHandler}/>
                <ExpensesChart expenses={filteredItems}/>
                <ExpensesList items={filteredItems}/>
            </Card>
        </div>
    );
}

export default Expenses;