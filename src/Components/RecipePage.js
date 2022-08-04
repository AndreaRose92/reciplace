
import { useParams } from "react-router-dom"
import '../styles/RecipePage.css'

export default function RecipePage({ recipes }) {

    const params = useParams()
    const recipe = recipes[params.recipeID]
    const renderIngredients = recipe.ingredients.map(ingredient => <li key={Math.random()} >{ingredient}</li>)
    const renderDirections = recipe.directions.map(directions => <li key={Math.random()} >{directions}</li>)

    return (
        <div>
            <div className="split left">
                <h2 className="centered">{recipe.name}</h2>
                <img className="centeredimg" src={recipe.image} alt={recipe.name}></img>
            </div>
            <div className="split right">
                <div>
                    <h3>Ingredients</h3>
                    <ul>{renderIngredients}</ul>
                </div>
                <div>
                    <h3>Directions</h3>
                    <ol>{renderDirections}</ol>
                </div>
            </div>
        </div>
    )
}