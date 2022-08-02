
import { useState } from "react"
import { Route, useRouteMatch } from "react-router-dom"
import RecipeCards from './RecipeCards'
import RecipePage from "./RecipePage"
import Search from "./Search"


export default function RecipeList({recipes}) {

    const match = useRouteMatch()
    const[searchString, setSearch] = useState("")

    function handleSearch(data){
        setSearch(data)
    }

    const filteredRecipes = recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchString.toLowerCase()) ))


    return (
        <div className="cards">
            <Search handleSearch={handleSearch}/>
            <RecipeCards recipes={filteredRecipes}/>
            <Route path={`${match.url}/:recipeID`}>
                <RecipePage recipes={filteredRecipes} />
            </Route>
        </div>
    )
}