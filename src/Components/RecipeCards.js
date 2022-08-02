
import { Link } from "react-router-dom";


export default function RecipeCards({recipes}) {

    // const renderThumbnails = recipes.map(recipe=> (
    //         <div key={recipe.id} className="card" >
    //             <h3>{recipe.name}</h3>
    //             <Link to={`/recipe/${recipe.id}`}>
    //                 <img src={recipe.image} alt={recipe.name} />
    //             </Link>
    //         </div>
    // ))

    const renderThumbnails = Object.keys(recipes).map((recipeID) => 
        <div className="card" key={recipeID}>
            <Link to={`/recipe/${recipeID}`}>
                <h3>{recipes[recipeID].name}</h3>
                <img src={recipes[recipeID].image} alt={recipes[recipeID].title}/>
            </Link>
        </div>
    )

    return (
        <div className="cards" >{renderThumbnails}</div>
    )
}


