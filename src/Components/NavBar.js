
import { NavLink } from "react-router-dom";
import '../styles/NavBar.css'

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    background: "orange",
    textDecoration: "none",
    color: "white",
};

export default function NavBar() {
    return (
        <div className="navbar">
            <NavLink
                to='/'
                exact
                style={linkStyles}
                activeStyle={{ background: "crimson" }}
            >
                Home
            </NavLink>
            <NavLink
                to='/about'
                exact
                style={linkStyles}
                activeStyle={{ background: "crimson" }}
            >
                About
            </NavLink>
            <NavLink
                to='/recipes'
                exact
                style={linkStyles}
                activeStyle={{ background: "crimson" }}
            >
                Recipes
            </NavLink>
            <NavLink
                to='/new'
                exact
                style={linkStyles}
                activeStyle={{ background: "crimson" }}
            >
                New Recipe
            </NavLink>
        </div>
    )
}