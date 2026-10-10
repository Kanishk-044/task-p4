function ArticleCard({ article }) {
    return (
        <div className="card">
            <img
                src={article.image}
                alt={article.name}
            />

            <h3>{article.name}</h3>

            <p>{article.description}</p>

            <div className="card-info">
                <span>{article.rating}</span>
                <span>{article.author}</span>
            </div>
        </div>
    );
}

export default ArticleCard;