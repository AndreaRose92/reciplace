import { useParams } from "react-router-dom"



export default function RecipePage({recipes}) {

    const params = useParams()
    console.log(params)

    const recipe = recipes[params.recipeID]

    const renderIngredients = recipe.ingredients.map(ingredient => <p>{ingredient}</p>)

    return (
        <div>
            <h3>{recipe.name}</h3>
            <ul>{renderIngredients}</ul>
        </div>
    )
}