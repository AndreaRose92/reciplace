import { Link } from "react-router-dom";




export default function Homepage() {
    return (
        <div className="home">
            <h1>Welcome to Reciplace!</h1>
            <Link to='/recipes' >Let's Get Started!</Link>
        </div>
    )
}