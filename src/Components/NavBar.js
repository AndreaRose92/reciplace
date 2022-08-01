import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    // width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
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
                activeStyle={{background: "darkblue"}}
            >
                Home
            </NavLink>
            <NavLink
                to='/recipes'
                exact
                style={linkStyles}
                activeStyle={{background: "darkblue"}}
            >
                Recipes                
            </NavLink>
            <NavLink
                to='/new'
                exact
                style={linkStyles}
                activeStyle={{background: "darkblue"}}
            >
                New Recipe
            </NavLink>
        </div>
    )
}