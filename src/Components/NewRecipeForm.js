import { useState } from "react"



export default function NewRecipeForm({addNewRecipe}) {

    const [ingredients, setIngredients] = useState([{id: 1, text: ''}])
    const [recipeTitle, setRecipeTitle] = useState('')
    const [recipeMeal, setRecipeMeal] = useState('breakfast')
    const [recipeImage, setRecipeImage] = useState('https://thumbs.dreamstime.com/b/white-empty-dinner-plate-blue-border-wooden-table-93048343.jpg')
    const [recipeDirections, setRecipeDirections] = useState('')
    const [ingredientsArray, setIngredientsArray] = useState([])

    const newRecipe = {
        "name": recipeTitle,
        "meal": recipeMeal,
        "image": recipeImage,
        "ingredients": ingredientsArray,
        "directions": recipeDirections
    }

    const removeIngredient = e => {
        e.preventDefault();
        setIngredients(ingredients.filter(ingredient => ingredient.id !== ingredients.length))
    }

    const addIngredient = e => {
        e.preventDefault()
        setIngredients([...ingredients, {id: ingredients.length+1, text: ''}])
    }

    const handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
        ingredients.forEach(ingredient => setIngredientsArray(ingredientsArray.push(ingredient.text)))
        addNewRecipe(newRecipe)    
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
                {ingredients.map(row => (
                    <div  key={row.id} >
                        <input onChange={e=> {row.text = e.target.value }} className="ingredient" type="text" name={`ingredient${row.id}`} placeholder={`Ingredient ${row.id}`}></input>
                        <button onClick={(e)=>addIngredient(e)}
                        >Add</button>
                        <button onClick={(e)=>removeIngredient(e)}
                        >Remove</button>
                    </div>
                ))}
                <textarea onChange={e=>setRecipeDirections(e.target.value)} name="directions" placeholder="Directions"></textarea><br/>
                <button type="submit">Add to CookBook</button>
            </form>
        </div>
    )
}