import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Homepage from './Homepage';
import RecipeList from './RecipeList';
import NewRecipeForm from './NewRecipeForm';
import About from './About';
import RecipePage from './RecipePage';

function App() {
  const [recipes, setRecipes] = useState([]);

  const url = `https://reciplace.herokuapp.com/recipes`
//   const url = `http://localhost:3000/recipes`;

  useEffect(() => {
    fetch(`${url}`)
      .then((r) => r.json())
      .then((data) => setRecipes(data));
  }, [url]);

  const addNewRecipe = (newRecipe) => {
    fetch(`${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe),
    })
      .then((r) => r.json())
      .then((data) => setRecipes((recipes) => [...recipes, data]));
  };

  return (
    <div>
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route path='/recipes'>
          <RecipeList recipes={recipes} />
        </Route>
        <Route path='/new'>
          <NewRecipeForm addNewRecipe={addNewRecipe} />
        </Route>
        <Route path='/recipe/:recipeID'>
          <RecipePage recipes={recipes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
