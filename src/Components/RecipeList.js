
import ImageCard from "./ImageCard"

export default function RecipeList({recipes}) {



    const renderThumbnails = recipes.map(recipe=> <ImageCard key={recipe.id} name={recipe.name} image={recipe.image} />)

    return (
        <div className="cards">
            {renderThumbnails}
        </div>
    )
}