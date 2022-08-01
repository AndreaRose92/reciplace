


export default function ImageCard({name, image}) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={image} alt={name} />
        </div>
    )
}