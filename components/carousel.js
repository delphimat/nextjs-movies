


const Carousel = (props) => {

    const { images } = props

    return (
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
                {images.map((image, index) => (
                    <li key={index}
                        data-target="#carouselExampleIndicators"
                        data-slide-to={index}
                        className={index === 0 ? "active" : ""}>
                    </li>
                ))}
            </ol>
            <div className="carousel-inner" role="listbox">
                {images.map((image, index) => (
                    <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item" }>
                        <img
                            className="d-block img-fluid"
                            src={image.url}
                            alt={image.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default  Carousel