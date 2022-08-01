



export default function NewRecipeForm() {
    return (
        <div>
            <form>
                <input type="text" name="title" placeholder="Recipe Title" /><br/>
                <select name="meal">
                    <option name="breakfast">Breakfast</option>
                    <option name="lunch">Lunch</option>
                    <option name="dinner">Dinner</option>
                    <option name="dessert">Dessert</option>
                </select><br/>
                <input type="text" name="ingredient">Ingredients</input>
            </form>
        </div>
    )
}