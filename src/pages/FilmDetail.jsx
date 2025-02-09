import SingleCard from "../components/SingleCard"
import ReviewsCard from "../components/ReviewsCard"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

const FilmDetail = () => {

    const { fetchMovie, movie } = useGlobalContext()
    const { id } = useParams()

    useEffect(() => {
        console.table(movie)
    }, [movie])

    useEffect(() => {
        fetchMovie(id)
    }, [])

    return (
        <div className="container">Dettaglio Film
            <SingleCard movie={movie} />
            {movie && <ReviewsCard movie={movie} />}

        </div>
    )
}

export default FilmDetail