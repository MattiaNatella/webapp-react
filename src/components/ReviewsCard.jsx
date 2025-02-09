import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'

const ReviewsCard = (props) => {


    const { reviews, user_vote } = props.movie
    const { getStars } = useGlobalContext()
    return (
        <>
            {reviews.map((review, index) => (
                <div key={index} className="card my-3">
                    <div className="card-header">Recensione dell'utente: <strong>{review.name}</strong>

                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Voto: {getStars(review.vote)}</h5>
                        <p className="card-text">{review.text}</p>
                        <p>E' stata utile?</p>
                    </div>
                </div>
            ))}

        </>

    )
}

export default ReviewsCard