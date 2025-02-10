import { useGlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"

const FilmCards = (props) => {


    const { id, title, director, genre, release_year, image, abstract, average_vote } = props.movieData
    const { getStars } = useGlobalContext()
    console.log(release_year)

    return (
        <div className="col my-1">
            <div className="card">
                <img src={image} className="card-img-top book-image" alt={title} />
                <div className="card-body">
                    <h5 className="card-title"><strong>{release_year} - {title}</strong></h5>
                    <h5 className="card-text">Voto({average_vote}):{getStars(average_vote)}</h5>
                    <Link to={`/film-detail/${id}`} className="btn btn-primary">Dettagli film</Link>
                </div>
            </div>
        </div >
    )
}

export default FilmCards