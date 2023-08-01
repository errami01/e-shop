import './AdminTotalCell.css'
export default function AdminTotalCell({iconClass, totalLabel, totalValue }){
    return(
        <div className="container--adminTotal-cell">
            <i className={`${iconClass} icon--adminTotalCell`}></i>
            <div className='totals--adminTotalCell'>
                <h5 className="cell-title--adminTotalCell">{totalLabel}</h5>
                <p className="total-value--adminTotalCell">{totalValue}</p>
            </div>

        </div>
    )
}