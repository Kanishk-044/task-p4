import Banner from "../Banner";
import About from "./About";
import Work from "./Work";
import Gallery from "../Gallery";
import FeaturedArticles from "../FeaturedArticle";
import FeaturedTutorials from "../Featuredtutorial";
import Contact from "./Contact";

function Home() {
    return (
        <>
            <h1>DEAKIN UNIVERSITY</h1>

            <Banner />
            <About />
            <Work />
            <Gallery />
            <FeaturedArticles />
            <FeaturedTutorials />
            <Contact />
        </>
    );
}

export default Home;