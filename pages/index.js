import React from 'react'
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";

import {getCategories, getMovies} from "../actions/index"


const Home = (props) => {

    const { images, categories, movies } = props

    return (
        <div>

            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SideMenu
                                categories={categories}
                                appName={"Movie DB"}
                            />
                        </div>
                        <div className="col-lg-9">
                            <Carousel images={images} />
                            <div className="row">

                                <MovieList
                                    movies={movies  || []}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .home-page {
                    padding-top: 80px;
                }`
            }
            </style>

        </div>
    )
}

Home.getInitialProps = async () => {


    const movies = await getMovies()
    const categories = await getCategories()
    const images = movies.map(movie =>{
                                        return (
                                            {
                                                id: `image-${movie.id}`,
                                                url: movie.image
                                            }
                                        )}
        )

    return {
        movies,
        images,
        categories
    }
}

export default Home