
import { Link } from "react-router-dom";
import '../styles/RecipeCards.css'

export default function RecipeCards({ recipes }) {

    // console.log(recipes)

    const renderThumbnails = recipes.map(recipe =>
        <div key={recipe.id} className="card">
            <Link to={`/recipe/${recipe.id - 1}`}>
                <h3>{recipe.name}</h3>
                <img src={recipe.image} alt={recipe.name} />
            </Link>
        </div>
    )

    return (
        <div className="cards">{renderThumbnails}</div>
    )
}