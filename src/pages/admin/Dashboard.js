import AdminDashCell from "../../components/AdminDashCell";
import AdminTotalCell from "../../components/AdminTotalCell";
import BarChart from "../../components/BarChart";
import './Dashboard.css'

export default function Dashboard(){
    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = ["red", "green","blue","orange","brown"];
    const data = {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }],
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "World Wine Production 2018"
            }
        }
    }
    return (
        <div className="container--dashboard">
            <AdminDashCell>
                <AdminTotalCell 
                    iconClass ={'fa-solid fa-dollar-sign'}
                    totalLabel ={'Total Sales'}
                    totalValue ={1000}
                />
            </AdminDashCell>
            <AdminDashCell>
                <AdminTotalCell 
                    iconClass ={'fa-solid fa-cart-shopping'}
                    totalLabel ={'Total orders'}
                    totalValue ={1000}
                />
            </AdminDashCell>
            <AdminDashCell>
                <AdminTotalCell 
                    iconClass ={'fa-solid fa-bag-shopping'}
                    totalLabel ={'Total products'}
                    totalValue ={1000}
                />
            </AdminDashCell>
            <AdminDashCell>
                <AdminTotalCell 
                    iconClass ={"fa-solid fa-user"}
                    totalLabel ={'Total customers'}
                    totalValue ={1000}
                />
            </AdminDashCell>
            <AdminDashCell className='sales-chart--dashboard' title='Sales statistics'>
                <BarChart chartData={data}></BarChart>
            </AdminDashCell>
              
        </div>
    )
}