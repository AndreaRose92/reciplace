import { useParams } from "react-router-dom"



export default function RecipePage({recipes}) {

    const params = useParams()
    console.log(params)

    const recipe = recipes[params.recipeID]

    const renderIngredients = recipe.ingredients.map(ingredient => <p>{ingredient}</p>)
    const renderDirections = recipe.directions.map(directions => <p>{directions}</p>)

    return (
        <div className="card">
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name}></img>
            <h3>Ingredients</h3>
            <ul>{renderIngredients}</ul>
            <h3>Directions</h3>
            <ul>{renderDirections}</ul>
        </div>
    )
}