import { Bar } from "react-chartjs-2";
import "./adminCostChart.scss"


const AdminCostChart = ({chartData})=>{
    return (
        <div className= "costbar">
        <Bar height="500px" width="600px" data ={chartData}  options={{
            indexAxis:'y',
            responsive:true,
            maintainAspectRatio: false,
            scales:{

                x:{
                   position:"left",
                  
                //    reverse:true
                },
                y:{
                    position:"left",
                    // reverse:true
                }
                
            },
        
        }}/>
        </div>
    )
}

export default AdminCostChart;