import "./Footer.css"
export default function Footer(){
    const date = new Date()
    return(
        <footer className="container--footer">
            <span className="copyright--footer">Copyright © {date.getFullYear()} - All righs reserved</span>
        </footer>
    )
} 