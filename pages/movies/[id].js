import { useRouter}  from "next/router";


const Movie = () => {
    const router= useRouter
    // const { id } = router.query

    console.log(router.query)

    return (
        <div className="container">
            <h1>Movie with id :</h1>
        </div>
    )
}


export default Movie