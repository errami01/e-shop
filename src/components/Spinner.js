import './Spinner.css'
export default function Spinner({className}){
    return(
        <div className={`spinner--container ${className}`}>
            <div className="spinner"></div>
        </div>
    )
}