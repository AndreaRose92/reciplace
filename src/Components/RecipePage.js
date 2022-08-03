import { useParams } from "react-router-dom"



export default function RecipePage({recipes}) {

    const params = useParams()
    const recipe = recipes[params.recipeID]
    const renderIngredients = recipe.ingredients.map(ingredient => <li key={Math.random()} >{ingredient}</li>)
    const renderDirections = recipe.directions.map(directions => <li key={Math.random()} >{directions}</li>)

    return (
        <div>
            <div className="recipePage">
                <h2>{recipe.name}</h2>
                <img className="fullImage" src={recipe.image} alt={recipe.name}></img>
                <div className="listContainer">
                    <div className="ingredientList">
                        <h3>Ingredients</h3>
                        <ul>{renderIngredients}</ul>
                    </div>
                    <div className="directionList">
                        <h3>Directions</h3>
                        <ol>{renderDirections}</ol>
                    </div>
                </div>
            </div>
        </div>
    )
}