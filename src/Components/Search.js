
import React, { useState } from "react"
import '../styles/Search.css'

export default function Search({ filterType, handleSearch }) {

    const [search, setSearch] = useState('')

    const searchSubmit = (e) => {
        e.preventDefault()
        handleSearch(search)
    }


    return (

        <form onSubmit={searchSubmit} className="searchbar">
            <select onChange={e => filterType(e.target.value)} name="type">
                <option value='All'>Filter by Meal</option>
                <option value='breakfast'>Breakfast</option>
                <option value='lunch'>Lunch</option>
                <option value='dinner'>Dinner</option>
                <option value='dessert'>Dessert</option>
                <option value='snack'>Snack</option>
            </select>
            <input
                type="text"
                id="search"
                placeholder="Type an ingredient to search..."
                onChange={e => setSearch(e.target.value)}
            />
            <button type="submit" >search</button>

        </form>
    )
}