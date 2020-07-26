
import { Component, Fragment } from 'react'


class MovieList extends Component {

    constructor(props) {
        super(props);
    }

    shorten = (text) => {
        if (text && 100 < text.length ) {
            return text.substr(0, 200) + '...'
        }
        return text
    }

    renderMovies(movies) {
        return  movies.map((movie) => (
                <div key={movie.id}  className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#">
                            <img className="card-img-top" src={movie.image}
                                 alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">{movie.name}</a>
                            </h4>
                            <h5>{movie.releaseYear}</h5>
                            <p className="card-text">
                                {this.shorten(movie.description)}
                            </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{movie.rating}</small>
                        </div>
                    </div>
                </div>
            )
        )}

    render() {
        return (
            <Fragment>
                {this.renderMovies(this.props.movies)}
            </Fragment>
        )
    }
}

export default MovieList