import { useGlobalContext } from "../context/GlobalContext";

const SingleCard = (props) => {

    const { getStars } = useGlobalContext()
    const { id, title, genre, release_year, abstract, image, reviews, director, average_vote, user_vote } = props.movie

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start poster-detail" alt={title} />
                </div>
                <div className="col-md-8 ">
                    <div className="card-body w-100">
                        <h5 className="card-title">{title} - {getStars(average_vote)}</h5>
                        <p className="card-text  ">Year release: {release_year}</p>
                        <p className="card-text  ">Director: {director}</p>
                        <p className="card-text  ">{abstract}</p>
                        <p className="card-text"><small className="text-body-secondary">{genre}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCard