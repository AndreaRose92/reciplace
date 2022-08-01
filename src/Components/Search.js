import React from "react"


export default function Search({handleSearch}) {
    return (
        <div className="searchbar">
            <input
            type="text"
            id="search"
            placeholder="Type a ingredient to search..."
            onChange={(e) => handleSearch(e.target.value) }
            />
            <button>search</button>
        </div>
    )
}