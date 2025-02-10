const ReviewForm = ({ setReviewForm }) => {




    return (

        <>
            <div id="aggiungi-recensione" className="card mb-3">
                <div className="card-header">
                    Aggiungi una recensione
                </div>
                <div className="card-body">
                    <p className='text-danger'>Gestione errori da inserire</p>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Inserisci il tuo nome..." />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Voto</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="inserisci il tuo voto..." />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Testo</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Lascia un commento...'></textarea>
                            <div className="buttons d-flex justify-content-between">
                                <button type='submit' className='btn btn-info mt-5'>Invia</button>
                                <a href="#single-card"><button
                                    className='btn btn-danger mt-5'
                                    onClick={() => setReviewForm(false)}
                                >Annulla</button></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </ >
    )
}

export default ReviewForm