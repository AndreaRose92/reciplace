import React, { useState } from "react"


export default function Search({handleSearch}) {

    const [search, setSearch] = useState('')

    const searchSubmit = (e) => {
        e.preventDefault()
        handleSearch(search)
        
    }

    return (
        <form onSubmit={searchSubmit} className="searchbar">
            <input
            type="text"
            id="search"
            placeholder="Type an ingredient to search..."
            onChange={e=>setSearch(e.target.value)}
            />
            <button type="submit" >search</button>
        </form>
    )
}