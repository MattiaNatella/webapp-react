import SingleCard from "../components/SingleCard";
import ReviewsCard from "../components/ReviewsCard";
import ReviewForm from "../components/ReviewForm";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FilmDetail = () => {
    const { fetchMovie, movie } = useGlobalContext();
    const { id } = useParams();
    const [reviewForm, setReviewForm] = useState(false)
    const redirect = useNavigate();

    const renderReviews = () => {
        if (!movie.reviews) return null;
        return movie.reviews.map((review, index) => (
            <ReviewsCard key={`${review.id}-${index}`} recensione={review} />
        ));
    };

    useEffect(() => {
        console.table(movie);
    }, [movie]);

    useEffect(() => {
        fetchMovie(id, () => redirect('/404'));
    }, [id]);

    return (
        <div className="container">

            <section>
                <h1>Dettaglio Film</h1>
                <SingleCard movie={movie} />
            </section>

            <section>
                {reviewForm && <ReviewForm setReviewForm={setReviewForm} />}
            </section>

            <section>
                <h2>Recensioni</h2>
                {movie && renderReviews()}
                <div className="justify-content-between d-flex">
                    <Link to='/'><button className="btn btn-primary ">Torna ai film</button></Link>
                    <a href="#aggiungi-recensione">
                        <button
                            className="btn btn-success"
                            onClick={() => setReviewForm(true)}>
                            Scrivi una recensione
                        </button>
                    </a>
                </div>

            </section>

        </div>
    );
};

export default FilmDetail;