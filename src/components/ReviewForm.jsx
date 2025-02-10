import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import axios from "axios"

const ReviewForm = ({ setReviewForm, fetchMovie, movieId }) => {

    const initialFormData = {
        name: '',
        text: '',
        vote: ''
    }

    const [formData, setFormData] = useState(initialFormData)
    const { api_Url } = useGlobalContext()

    const handleChange = (e) => {

        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)


        //una volta ottenuto l'oggetto con i dati del form, effettuiamo una chiamata all'API Store per inserire nel database la nuova recensione
        axios.post(api_Url + movieId + '/reviews', formData, { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                //dopo il salvataggio del nuovo post resetto la variabile formData
                setFormData(initialFormData)

                //rieffettuo la chiamata all'api per refreshare al click la pagina
                fetchMovie(movieId, () => redirect('/404'))

                //scorro in automatico verso l'ultima recensione dopo 100 millisecondi per assicurarmi che sia arrivata risposta dal server -- top:document.body.scrollHeight  imposta la posizione verticale di scorrimento alla massima altezza del contenuto del documento, il che significa che la pagina scorrerà fino in fondo, questo perché rappresenta l'altezza totale del contenuto di un documento, inclusi i contenuti non visibili a causa dello scorrimento.
                setTimeout(() => {
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }, 100)

            })
            .catch(error => {
                console.error("Errore durante l'invio della recensione:", error);
            });
    }

    return (

        <>
            <div id="aggiungi-recensione" className="card mb-3">
                <div className="card-header">
                    Aggiungi una recensione
                </div>
                <div className="card-body">
                    <p className='text-danger'>Gestione errori da inserire</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Inserisci il tuo nome..."
                                value={formData.name}
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Voto</label>
                            <input
                                name="vote"
                                type="text"
                                className="form-control"
                                placeholder="inserisci il tuo voto..."
                                value={formData.vote}
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Testo</label>
                            <textarea
                                name="text"
                                className="form-control"
                                rows="3"
                                placeholder='Lascia un commento...'
                                value={formData.text}
                                onChange={handleChange}>
                            </textarea>

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
            </div >
        </ >
    )
}

export default ReviewForm