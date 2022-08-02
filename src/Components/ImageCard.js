
import { Link } from "react-router-dom";
import { Route, useRouteMatch } from "react-router-dom";
import RecipePage from "./RecipePage";

export default function ImageCard({recipe}) {

    const match=useRouteMatch();
    //console.log(recipe.id)
     const renderItems = 
        <li>
            <Link to={`/RecipePage/${recipe.id}`}>Recipe Page</Link>
        </li>
     

    return (
        <div className="card">
            <h3>{recipe.name}</h3>
            <img src={recipe.image} alt={recipe.name} />
            <ul>{renderItems}</ul>
            <Route path={`${match.url}/:recipe.id`}>
                <RecipePage/>
            </Route>
        </div>
    )
}


