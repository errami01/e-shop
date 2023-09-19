import './Button.css'
export default function Button({children,className, ...rest}){
    return (
        <button className={`btn--Button ${className}`} {...rest}>
            {children}
        </button>
    )
}