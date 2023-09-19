import './Button.css'
export default function Button({children}){
    return (
        <button className="btn--Button">
            {children}
        </button>
    )
}