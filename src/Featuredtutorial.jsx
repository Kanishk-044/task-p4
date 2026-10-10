import TutorialCard from "./TutorialCard";

function FeaturedTutorials() {

    const tutorials = [
        {
            id: 1,
            name: "JavaScript Basics",
            description: "Learn the basic concepts of JavaScript",
            image: "/images/images.jpeg",
            rating: "5",
            author: "Kanishk"
        },
        {
            id: 2,
            name: "React Router",
            description: "Learn how to navigate between React pages",
            image: "/images/images.png",
            rating: "5",
            author: "Kanishk"
        },
        {
            id: 3,
            name: "ExpressJS Basics",
            description: "Learn the basics of ExpressJS",
            image: "/images/images (1).jpeg",
            rating: "4.9",
            author: "Kanishk"
        }
    ];

    return (
        <section className="featured-section">

            <h2>Featured Tutorials</h2>

            <div className="cards-container">
                {tutorials.map((tutorial) => (
                    <TutorialCard
                        key={tutorial.id}
                        tutorial={tutorial}
                    />
                ))}
            </div>

            <button className="see-all">
                See all tutorials
            </button>

        </section>
    );
}

export default FeaturedTutorials;