import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {

    const api_Url = import.meta.env.VITE_API_URL;

    const [movies, setMovies] = useState([])


    const fetchMovies = () => {
        axios.get(api_Url)
            .then(res => {
                setMovies(res.data)
            })
    }

    const value = {
        movies,
        fetchMovies
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}
const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalProvider }