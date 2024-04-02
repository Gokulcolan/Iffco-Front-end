import { Bar } from "react-chartjs-2";
import "./adminLocation.scss"


const LocationChart = ({chartData})=>{
    return (
        <div className= "bar">
        <Bar  data ={chartData}  options={{
            responsive:true,
            maintainAspectRatio: false,
            scales:{
                x:{
                    grid:{
                        display:false
                    }
                }
            }
        }}/>
        </div>
    )
}

export default LocationChart;