import SingleCard from "../components/SingleCard";
import ReviewsCard from "../components/ReviewsCard";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

const FilmDetail = () => {
    const { fetchMovie, movie } = useGlobalContext();
    const { id } = useParams();

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
        fetchMovie(id);
    }, [id, fetchMovie]);

    return (
        <div className="container">
            <h1>Dettaglio Film</h1>
            <SingleCard movie={movie} />
            <h2>Recensioni</h2>
            {movie && renderReviews()}
        </div>
    );
};

export default FilmDetail;