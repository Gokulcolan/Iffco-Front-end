
import {  Pie } from "react-chartjs-2";
import './adminPaymentChart.scss'
const AdminPaymentChart = ({chartData}) => {

  return (
    <div className="pie">
      <Pie
        data={chartData}
        options={{
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

export default AdminPaymentChart;
