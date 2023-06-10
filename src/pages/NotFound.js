import { Link } from "react-router-dom"
import './NotFound.css'
export default function NoteFound(){
    return(
        <div className="notFound-container">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to="/" className="back-home-btn--NoteFound btn">Return to Home</Link>
        </div>
    )
}