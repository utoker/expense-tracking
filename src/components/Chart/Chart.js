import "./Chart.css";
import ChartBar from "./ChartBar.js";
const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((d) => d.value);
  const max = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={max}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
