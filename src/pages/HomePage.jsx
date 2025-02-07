import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import BookCard from "../components/BookCard"

const HomePage = () => {

    const { movies, fetchMovies } = useGlobalContext()

    useEffect(() => fetchMovies(), [])

    console.log(movies)
    return (
        <>
            <h1 className="text-center">Lista films</h1>
            <div className="row row-cols-1 row-cols-sm-3">
                {movies.map((movie, index) => (
                    <BookCard key={index} movieData={movie} />
                ))}

            </div>

        </>



    )
}

export default HomePage