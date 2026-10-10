function Gallery() {
    const images = [
        "images (1).jpeg",
        "images (2).jpeg",
        "images (3).jpeg",
        "images.jpeg",
        "images.png"
    ];

    return (
        <section className="gallery-section">
            <h2>Gallery</h2>

            <div className="gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={`/images/${image}`}
                        alt={`Gallery image ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Gallery;