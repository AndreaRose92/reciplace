
import { useState } from "react"
import { Route, useRouteMatch } from "react-router-dom"
import RecipeCards from './RecipeCards'
import RecipePage from "./RecipePage"
import Search from "./Search"


export default function RecipeList({recipes}) {

    const match = useRouteMatch()
    const[searchString, setSearch] = useState("")
    let [mealType, setMealType] = useState('All')

    function handleSearch(data){
        setSearch(data)
    }
    function handleChange(data) {
        setMealType(data)
    }

    const mealsbyType = recipes.filter(recipe => 
        mealType === 'All' ? true : recipe.meal === mealType
    )
    const filteredRecipes = mealsbyType.filter(recipe => recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchString.toLowerCase()) ))

    return (
        <div className="cards">
            <Search handleSearch={handleSearch} filterType={handleChange} />
            <RecipeCards recipes={filteredRecipes}/>
            <Route path={`${match.url}/:recipeID`}>
                <RecipePage recipes={filteredRecipes} />
            </Route>
        </div>
    )
}