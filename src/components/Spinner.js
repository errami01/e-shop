import './Spinner.css'
export default function Spinner({className, ...rest}){
    return(
        <div className= {`spinner ${className}`} {...rest}></div>
    )
}