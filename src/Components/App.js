
import { Route, Switch } from "react-router-dom"
import Homepage from './Homepage';
import RecipeList from './RecipeList';
import NewRecipeForm from './NewRecipeForm';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/recipes">
        <RecipeList />
      </Route>
      <Route path="/new">
        <NewRecipeForm />
      </Route>
    </Switch>
  );
}

export default App;
