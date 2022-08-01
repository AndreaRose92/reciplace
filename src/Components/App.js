
import { Route, Switch } from "react-router-dom"
import Homepage from './Homepage';
import RecipeList from './RecipeList';
import NewRecipeForm from './NewRecipeForm';
import { useEffect, useState } from "react";
import Search from "./Search";

function App() {

  // const url = `http://localhost:3000/recipes`
  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/recipes`)
      .then(r=>r.json())
      .then(data=>setRecipes(data))
  }, [])

const[searchString, setSearch] = useState("")

function handleSearch(newSearch){
  setSearch(newSearch)
}


//const filteredRecipes = recipes.filter(recipe=>recipe.ingredients.toLowerCase().includes(searchString.toLowerCase()))
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/recipes">
        <Search handleSearch={handleSearch}/>
        <RecipeList recipes={recipes} />
      </Route>
      <Route path="/new">
        <NewRecipeForm />
      </Route>
    </Switch>
  );
}

export default App;
