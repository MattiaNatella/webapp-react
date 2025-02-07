
const BookCard = (props) => {

    console.log(props)

    const { id, title, director, genre, release_year, image, abstract } = props.movieData

    return (
        <div className="col my-1">
            <div className="card">
                <img src={image} className="card-img-top book-image" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{abstract}</p>
                    <a href="#" className="btn btn-primary">Leggi le recensioni</a>
                </div>
            </div>
        </div >
    )
}

export default BookCard