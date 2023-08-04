import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(CategoryScale);
export default function BarChart({chartData, className}){
    return(
    <div className={className} >
      <Bar
        data={chartData}
        options={{
          layout: {
            padding: 10
        },
          plugins: {
            title: {
              display: true,
              text: "Sales chart",
              align: 'start',
              font: {
                size: 16
              },
              padding:{
                bottom: 20
              }
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
    )
}