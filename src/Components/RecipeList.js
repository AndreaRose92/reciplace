
import { useState } from "react"
import ImageCard from "./ImageCard"
import Search from "./Search"


export default function RecipeList({recipes}) {

    const[searchString, setSearch] = useState("")

    function handleSearch(data){
        setSearch(data)
    }

    const filteredRecipes = recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchString.toLowerCase()) ))

    const renderThumbnails = filteredRecipes.map(recipe=> <ImageCard key={recipe.id} name={recipe.name} image={recipe.image} ingredients={recipe.ingredients} />)

    return (
        <div className="cards">
            <Search handleSearch={handleSearch}/>
            {renderThumbnails}
        </div>
    )
}