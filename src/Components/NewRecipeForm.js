import { useState } from "react"



export default function NewRecipeForm({handleSubmit}) {

    const [ingredients, setIngredients] = useState([{id: 1}])

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     console.log("Please work")
    // }

    const removeIngredient = e => {
        e.preventDefault();
        setIngredients(ingredients.filter(ingredient => ingredient.id !== ingredients.length))
    }

    const addIngredient = e => {
        e.preventDefault()
        setIngredients([...ingredients, {id: ingredients.length+1}])
    }

    return (
        <div>
            <form className="recipeForm">
                <input type="text" name="title" placeholder="Recipe Title" /><br/>
                <label htmlFor="meal">Meal: </label>
                <select id="meal" name="meal">
                    <option name="breakfast">Breakfast</option>
                    <option name="lunch">Lunch</option>
                    <option name="dinner">Dinner</option>
                    <option name="dessert">Dessert</option>
                </select><br/>
                <input type='text' name='image' placeholder="Image URL" />
                {ingredients.map(row => (
                    <div key={row.id} >
                        <input className="ingredient" type="text" name="ingredient" placeholder={`Ingredient ${row.id}`}></input>
                        <button onClick={(e)=>addIngredient(e)}
                        >Add</button>
                        <button onClick={(e)=>removeIngredient(e)}
                        >Remove</button>
                    </div>
                ))}
                <textarea name="directions" placeholder="Directions"></textarea><br/>
                <button onClick={(e)=>handleSubmit(e)} type="submit">Add to CookBook</button>
            </form>
        </div>
    )
}