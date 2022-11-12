import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const dataPoints = [
        {label: "jan", value: 0},
        {label: "feb", value: 0},
        {label: "mar", value: 0},
        {label: "app", value: 0},
        {label: "may", value: 0},
        {label: "jun", value: 0},
        {label: "jul", value: 0},
        {label: "aug", value: 0},
        {label: "sep", value: 0},
        {label: "auc", value: 0},
        {label: "nov", value: 0},
        {label: "dec", value: 0},
    ]

    for (let expense of props.expenses) {
        let month = expense.date.getMonth();
        dataPoints[month].value += expense.amount
    }
    return <Chart dataPoints={dataPoints}/>
}

export default ExpensesChart