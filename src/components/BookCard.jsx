import { useGlobalContext } from "../context/GlobalContext"

const BookCard = (props) => {


    const { id, title, director, genre, release_year, image, abstract, average_vote } = props.movieData
    const { getStars } = useGlobalContext()

    return (
        <div className="col my-1">
            <div className="card">
                <img src={image} className="card-img-top book-image" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title} - {release_year} - {director}</h5>
                    <h5 className="card-text">{getStars(average_vote)}</h5>
                    <p className="card-text">{abstract}</p>
                    <a href="#" className="btn btn-primary">Leggi le recensioni</a>
                </div>
            </div>
        </div >
    )
}

export default BookCard