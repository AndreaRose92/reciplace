

import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import Homepage from './Homepage';
import RecipeList from './RecipeList';
import NewRecipeForm from './NewRecipeForm';
import { useEffect, useState } from "react";
import RecipePage from "./RecipePage";

function App() {

  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/recipes`)
      .then(r=>r.json())
      .then(data=>setRecipes(data))
  }, [])

  const addNewRecipe = newRecipe => {
    fetch('http://localhost:3000/recipes', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newRecipe)
    })
      .then(r=>r.json())
      .then(data=>setRecipes(recipes => [...recipes, data]))
  }

  return (
    <div>
      <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/recipes">
            <RecipeList recipes={recipes} />
          </Route>
          <Route path="/new">
            <NewRecipeForm addNewRecipe={addNewRecipe} />
          </Route>
          <Route path="/recipe/:recipeID">
            <RecipePage recipes={recipes} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
