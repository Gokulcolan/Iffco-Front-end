
import {  Line } from "react-chartjs-2";
import './adminExpenseChart.scss'
const AdminExpenseChart = ({chartData}) => {

  return (
    <div className="line">
      <Line
         
        data={chartData}
        options={{
            responsive:true,
            maintainAspectRatio: false,
            plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
 
    </div>
  );
};

export default AdminExpenseChart;
