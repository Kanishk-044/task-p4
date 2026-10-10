function TutorialCard({ tutorial }) {
    return (
        <div className="card">
            <img
                src={tutorial.image}
                alt={tutorial.name}
            />

            <h3>{tutorial.name}</h3>

            <p>{tutorial.description}</p>

            <div className="card-info">
                <span>⭐ {tutorial.rating}</span>
                <span>{tutorial.author}</span>
            </div>
        </div>
    );
}

export default TutorialCard;