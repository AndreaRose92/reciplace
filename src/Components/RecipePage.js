import { useParams } from "react-router-dom"



export default function RecipePage({recipes}) {

    const params = useParams()
    const recipe = recipes[params.recipeID]
    const renderIngredients = recipe.ingredients.map(ingredient => <li key={Math.random()} >{ingredient}</li>)
    const renderDirections = recipe.directions.map(directions => <li key={Math.random()} >{directions}</li>)

    return (
        <div classname="recipePage">
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name}></img>
            <h3>Ingredients</h3>
            <ul>{renderIngredients}</ul>
            <h3>Directions</h3>
            <ol>{renderDirections}</ol>
        </div>
    )
}