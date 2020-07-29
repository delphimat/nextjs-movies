
import {Component} from 'react'
import Router from 'next/router'
import MovieCreateForm from "../../../components/movieCreateForm";
import {updateMovie, getMovieById} from "../../../actions";

class Edit extends Component {

    constructor(props) {
        super(props);
    }

    static async getInitialProps({query}) {
        const movie = await getMovieById(query.id)

        return { movie }
    }

    handleUpdateMovie = (movie) => {
        updateMovie(movie).then((movies) => {
            Router.push('/movies/[id]', `/movies/${movie.id}`)
        })
    }


    render() {
        const { movie } = this.props

        return (
            <div className="container">
                <h1>Edit the movie</h1>
                <MovieCreateForm handleFormSubmit={this.handleUpdateMovie} initialData={movie}/>
            </div>
        )
    }
}

export default  Edit