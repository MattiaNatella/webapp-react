import { createContext, useContext } from "react";

const GlobalContext = createContext()




const value = {}

const GlobalProvider = ({ children }) => {
    <GlobalContext.Provider value={value}>
        {children}
    </GlobalContext.Provider>
}


//useGlobalContext acquisisce tutti gli elementi inseriti nella prop value
const useGlobalContext = () => useContext(GlobalContext)

export default { useGlobalContext, GlobalProvider }