import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {

    const api_Url = import.meta.env.VITE_API_URL;

    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({})


    const fetchMovies = () => {
        axios.get(api_Url)
            .then(res => {
                setMovies(res.data)
            })
    }

    const fetchMovie = (id, redirect) => {
        axios.get(api_Url + id)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                //reindirizzo alla pagina 404
                if (err.status == 404) redirect();
            })
    }

    const getStars = (vote) => {
        return [1, 2, 3, 4, 5].map((_, i) => (<i key={i} className={`fa-star fa-${i < vote ? 'solid text-warning fa-spin' : 'regular text-danger fa-fade'}`}></i>))
    }

    const value = {
        movies,
        fetchMovies,
        fetchMovie,
        movie,
        getStars,
        api_Url
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}
const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalProvider }