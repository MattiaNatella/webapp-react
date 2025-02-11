import { useState } from "react"
import { data, generatePath } from "react-router-dom"


const FilmForm = () => {

    const initialFilmData = {
        title: '',
        genre: '',
        release_year: '',
        director: '',
        image: null,
        abstract: ''
    }

    const [newFilm, setNewFilm] = useState(initialFilmData)
    const [imagePreview, setImagePreview] = useState('https://placehold.co/200x150')

    const handleFilmChange = (e) => {
        const { name, value } = e.target
        console.log(e.target.value)
        if (name == 'image') {
            setImagePreview(URL.createObjectURL(e.target.files[0]));
            setNewFilm(prev => ({
                ...prev,
                image: e.target.files[0]
            }))
        } else {
            setNewFilm(prev => ({
                ...prev,
                [name]: value
            }))
        }
        console.log(newFilm)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //creo una nuova istanza di FormData()
        const dataToSend = new FormData()

        //ciclo le chiavi di newFilm per aggiungerle in dataToSend
        for (let key in newFilm) {
            console.log(key, newFilm[key])
            dataToSend.append(key, newFilm[key])
        }
        console.log(dataToSend)
    }

    return (
        <div className="card">
            <h5 className="card-header bg-dark text-white">Aggiungi un film alla lista</h5>
            <div className="card-body">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Titolo</span>
                        <input
                            name="title"
                            value={newFilm.title}
                            onChange={handleFilmChange}
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Genere</span>
                        <input
                            type="text"
                            name="genre"
                            value={newFilm.genre}
                            onChange={handleFilmChange}
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Anno di pubblicazione</span>
                        <input
                            name="release_year"
                            value={newFilm.release_year}
                            onChange={handleFilmChange}
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Director</span>
                        <input
                            name="director"
                            value={newFilm.director}
                            onChange={handleFilmChange}
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <input
                            name="image"
                            type="file"
                            className="form-control"
                            onChange={handleFilmChange} />
                        <label className="input-group-text" >Upload</label>
                    </div>

                    {/* ANTEPRIMA IMMAGINE */}
                    <img className="thumb mb-3" src={imagePreview} alt="Anteprima upload"></img>
                    <div className="input-group">
                        <span className="input-group-text">Abstract</span>
                        <textarea
                            name="abstract"
                            value={newFilm.abstract}
                            onChange={handleFilmChange}
                            className="form-control"
                            aria-label="With textarea"></textarea>
                    </div>
                    <div className="button d-flex justify-content-center mt-3">
                        <button type='submit' className='btn btn-success '>Invia</button>
                    </div>


                </form>

            </div>
        </div>
    )
}

export default FilmForm