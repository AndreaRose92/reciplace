

import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import Homepage from './Homepage';
import RecipeList from './RecipeList';
import NewRecipeForm from './NewRecipeForm';
import { useEffect, useState } from "react";
import Search from "./Search";

function App() {

  // const url = `http://localhost:3000/recipes`
  const [recipes, setRecipes] = useState([])
  const [newRecipe, setNewRecipe] = useState({})

  useEffect(()=>{
    fetch(`http://localhost:3000/recipes`)
      .then(r=>r.json())
      .then(data=>setRecipes(data))
  }, [])

  const addNewRecipe = e => {
    e.preventDefault();
    fetch('http://localhost:3000/recipes', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "name": e.target.title.value
      })
    })
      .then(r=>r.json())
      .then(data=>console.log(data))
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
            <NewRecipeForm handleSubmit={addNewRecipe} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
