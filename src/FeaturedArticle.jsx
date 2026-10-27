import ArticleCard from "./ArticleTemp";

function FeaturedArticles() {

    const articles = [
        {
            id: 1,
            name: "Introduction to React",
            description: "Learn the basics of React",
            image: "/images/react.webp",
            rating: "5",
            author: "Kanishk Jangra"
        },
        {
            id: 2,
            name: "Understanding NodeJS",
            description: "Learn about NodeJS and backend development",
            image: "/images/node.png",
            rating: "5",
            author: "Kanishk Jangra"
        },
        {
            id: 3,
            name: "Getting Started with React Hooks",
            description: "Learn how React Hooks work",
            image: "/images/hook.jpeg",
            rating: "5",
            author: "Kanishk Jangra"
        }
    ];

    return (
        <section className="featured-section">

            <h2>Featured Articles</h2>

            <div className="cards-container">
                {articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                    />
                ))}
            </div>

        </section>
    );
}

export default FeaturedArticles;