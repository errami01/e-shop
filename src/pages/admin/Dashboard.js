import AdminDashCell from "../../components/AdminDashCell";
import AdminTotalCell from "../../components/AdminTotalCell";
import './Dashboard.css'

export default function Dashboard(){
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
              
        </div>
    )
}