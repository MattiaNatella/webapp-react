import { useGlobalContext } from '../context/GlobalContext.jsx'
import { useState } from 'react';

const ReviewsCard = ({ recensione }) => {

    if (!recensione) return null;
    const { getStars } = useGlobalContext()
    const { name, text, vote } = recensione;
    const [thumbUp, setThumbUp] = useState(0)
    const [thumbDown, setThumbDown] = useState(0)
    const renderThumbUp = () => {

        thumbDown > 0 ? setThumbDown(0) : setThumbDown(0)

        thumbUp > 0 ? alert('Hai già votato questa recensione!') : setThumbUp(1);

    }

    const renderThumbDown = () => {
        thumbUp > 0 ? setThumbUp(0) : null
        thumbDown > 0 ? alert('Hai già votato questa recensione!') : setThumbDown(1);
    }

    return (
        <div className="card my-3">
            <div className="card-header">Utente: <strong>{name}</strong> </div>
            <div className="card-body">
                <p className="card-title">{text}</p>
                <h5 className="card-text">Voto:  {getStars(vote)}</h5>
                <div className="review-vote">
                    <p>Questa recensione è stata utile?</p>
                    <i id="thumb" className="fa-regular fa-thumbs-up pe-1 text-success" onClick={renderThumbUp}>
                        {thumbUp}</i>
                    <i id="thumb" className="fa-regular fa-thumbs-down text-danger"
                        onClick={renderThumbDown}
                    >{thumbDown}</i>
                </div>

            </div>
        </div >
    );
};

export default ReviewsCard;