import { useState } from "react"



export default function NewRecipeForm({addNewRecipe}) {

    const [ingredients, setIngredients] = useState([{id: 1, text: ''}])
    const [directions, setDirections] = useState([{id: 1, text: ''}])
    const [recipeTitle, setRecipeTitle] = useState('')
    const [recipeMeal, setRecipeMeal] = useState('breakfast')
    const [recipeImage, setRecipeImage] = useState('https://thumbs.dreamstime.com/b/white-empty-dinner-plate-blue-border-wooden-table-93048343.jpg')
    const [ingredientsArray, setIngredientsArray] = useState([])
    const [directionsArray, setDirectionsArray] = useState([])


    const newRecipe = {
        "name": recipeTitle,
        "meal": recipeMeal,
        "image": recipeImage,
        "ingredients": ingredientsArray,
        "directions": directionsArray
    }

    const removeIngredient = e => {
        e.preventDefault();
        setIngredients(ingredients.filter(ingredient => ingredient.id !== ingredients.length))
    }

    const addIngredient = e => {
        e.preventDefault()
        setIngredients([...ingredients, {id: ingredients.length+1, text: ''}])
    }
   
    const removeDirection = e => {
        e.preventDefault();
        setDirections(directions.filter(direction => direction.id !== directions.length))
    }

    const addDirection = e => {
        e.preventDefault()
        setDirections([...directions, {id: directions.length+1, text: ''}])
    }

    const handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
        ingredients.forEach(ingredient => setIngredientsArray(ingredientsArray.push(ingredient.text)))
        directions.forEach(direction => setDirectionsArray(directionsArray.push(direction.text)))
        addNewRecipe(newRecipe)
        setDirections([{id: 1, text: ''}])
        setIngredients([{id: 1, text: ''}])
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="recipeForm">
                <input onChange={e=>setRecipeTitle(e.target.value)} type="text" name="title" placeholder="Recipe Title" /><br/>
                <label htmlFor="meal">Meal: </label>
                <select onChange={e=>setRecipeMeal(e.target.value)} id="meal" name="meal">
                    <option name="breakfast">Breakfast</option>
                    <option name="lunch">Lunch</option>
                    <option name="dinner">Dinner</option>
                    <option name="dessert">Dessert</option>
                </select><br/>
                <input onChange={e=>setRecipeImage(e.target.value)} type='text' name='image' placeholder="Image URL" />
                <div className="inputsContainer">
                    {ingredients.map(row => (
                        <div key={row.id} >
                            <input onChange={e=> {row.text = e.target.value }} className="ingredient" type="text" name={`ingredient${row.id}`} placeholder={`Ingredient ${row.id}`}></input>
                            <button onClick={(e)=>addIngredient(e)}
                            >Add</button>
                            <button onClick={(e)=>removeIngredient(e)}
                            >Remove</button>
                        </div>
                    ))}
                <div className="inputsContainer">
                    {directions.map(row => (
                        <div key={row.id} >
                            <input onChange={e=> {row.text = e.target.value}} className="direction" type="text" name={`direction${row.id}`} placeholder={`Step ${row.id}`}></input>
                            <button onClick={(e)=>addDirection(e)}
                            >Add</button>
                            <button onClick={(e)=>removeDirection(e)}
                            >Remove</button>
                        </div>
                    ))}
                </div>
                </div>
                <button type="submit">Add to CookBook</button>
            </form>
        </div>
    )
}