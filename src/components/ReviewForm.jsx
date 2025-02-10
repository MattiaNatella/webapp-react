import React from 'react'


const ReviewForm = () => {
    return (
        <div>

            <div class="card mb-3">
                <div class="card-header">
                    Aggiungi una recensione
                </div>
                <div class="card-body">
                    <p className='text-danger'>Gestione errori da inserire</p>
                    <form>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Nome</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Inserisci il tuo nome..." />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Voto</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="inserisci il tuo voto..." />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Testo</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Lascia un commento...'></textarea>
                            <button type='submit' className='btn btn-info mt-5'>Invia</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default ReviewForm