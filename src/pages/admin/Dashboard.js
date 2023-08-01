import AdminDashCell from "../../components/AdminDashCell";
import AdminTotalCell from "../../components/AdminTotalCell";

export default function Dashboard(){
    return (
        <div className="container--dashboard">
            <AdminDashCell>
                <AdminTotalCell 
                    iconClass ={'fa-solid fa-dollar-sign'}
                    totalLabel ={'Total Sales'}
                    totalValue ={1000}
                />
                <AdminTotalCell 
                    iconClass ={'fa-solid fa-cart-shopping'}
                    totalLabel ={'Total orders'}
                    totalValue ={1000}
                />
            </AdminDashCell>  
        </div>
    )
}