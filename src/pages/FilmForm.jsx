

const FilmForm = () => {
    return (
        <div className="card">
            <h5 className="card-header bg-dark text-white">Aggiungi un film alla lista</h5>
            <div className="card-body">
                <form action="#">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Titolo</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Genere</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Anno di pubblicazione</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Director</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <input
                            type="file"
                            className="form-control" />
                        <label className="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>

                    <div className="input-group">
                        <span className="input-group-text">Abstract</span>
                        <textarea
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