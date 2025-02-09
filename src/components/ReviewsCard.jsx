import { useGlobalContext } from '../context/GlobalContext.jsx'

const ReviewsCard = ({ recensione }) => {

    if (!recensione) return null;
    const { getStars } = useGlobalContext()
    const { id, name, text, vote } = recensione;

    return (
        <div className="card my-3">
            <div className="card-header">Recensione dell'utente: {name}</div>
            <div className="card-body">
                <p className="card-title">{text}</p>
                <h5 className="card-text">Voto:  {getStars(vote)}</h5>

            </div>
        </div>
    );
};

export default ReviewsCard;