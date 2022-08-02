import { useParams } from "react-router-dom"



export default function RecipePage({recipes}) {

    const params = useParams()
    console.log(params)

    return (
        <div>
            <h3>{recipes[params.recipeID].name}</h3>
        </div>
    )
}