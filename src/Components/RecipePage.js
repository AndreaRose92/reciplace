import { useParams } from "react-router-dom"



export default function RecipePage({recipes}) {

    const params = useParams()
    console.log(params)

    const recipe = recipes[params.recipeID]

    const renderIngredients = recipe.ingredients.map(ingredient => <p>{ingredient}</p>)
    const renderDirections = recipe.directions.map(directions => <p>{directions}</p>)

    return (
        <div>
            <h3>{recipe.name}</h3>
            <img src={recipe.image} alt={recipe.name}></img>
            <ul>{renderIngredients}</ul>
            <ul>{renderDirections}</ul>

        </div>
    )
}