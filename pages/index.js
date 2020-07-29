import React, { useState, useEffect } from 'react'
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";


import {getCategories, getMovies} from "../actions/index"


const Home = (props) => {

    const { images, categories, movies } = props
    const [ filter, setFilter ] = useState('')

    const changeCategoy = category => {
        setFilter(category)
    }

    const filterMovies = movies => {
        if (filter == 'all') {
            return movies
        }

        return movies.filter((m) => {
            return m.genre && m.genre.includes(filter)
        })
    }

    return (
        <div>

            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SideMenu
                                changeCategory={changeCategoy}
                                activeCategory={filter}
                                categories={categories}
                                appName={"Movie DB"}
                            />
                        </div>
                        <div className="col-lg-9">
                            <Carousel images={images} />
                            <h1>Display {filter} movies </h1>
                            <div className="row">

                                <MovieList
                                    movies={filterMovies(movies)  || []}
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