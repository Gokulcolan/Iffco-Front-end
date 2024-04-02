import { display } from "@mui/system";
import { plugins } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import "./adminAccomChart.scss";
const AdminAccomChart = ({ chartData }) => {
  let labelData = chartData.labels;
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };
  return (
    <div className="container">
      {/* <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      /> */}
      
      <Doughnut
  data={chartData}
  className="doughchart"
  options={{
    responsive: true,
    maintainAspectRatio: false, 
    plugins: { legend: { display: false } },
  }}
/>
      <ul className="chartLabel">
        {labelData.map((data, index) => {
          return (
            <div>
              {" "}
              <li  key={index} style={{ borderColor: data.color }}>
                {data.year} <span>{data.value}</span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminAccomChart;
