import SingleCard from "../components/SingleCard";
import ReviewsCard from "../components/ReviewsCard";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FilmDetail = () => {
    const { fetchMovie, movie } = useGlobalContext();
    const { id } = useParams();
    const redirect = useNavigate();

    const renderReviews = () => {
        if (!movie.reviews) return null;
        return movie.reviews.map((review) => (
            <ReviewsCard key={review.id} recensione={review} />
        ));
    };

    useEffect(() => {
        console.table(movie);
    }, [movie]);

    useEffect(() => {
        fetchMovie(id, () => redirect('/404'));
    }, [id, fetchMovie]);

    return (
        <div className="container">
            <h1>Dettaglio Film</h1>
            <SingleCard movie={movie} />
            <h2>Recensioni</h2>
            {movie && renderReviews()}
            <Link to='/'><button className="btn btn-primary">Torna ai film</button></Link>
        </div>
    );
};

export default FilmDetail;