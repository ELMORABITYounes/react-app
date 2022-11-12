import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = (props) => {
    let values = props.dataPoints.map(it => it.value);
    let maxValue = Math.max(...values);

    return <div className="chart">
        {props.dataPoints.map(it => <ChartBar key={it.label} value={it.value} maxValue={maxValue} label={it.label}/>)}
    </div>
}

export default Chart