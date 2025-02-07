import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const DefaultLayout = () => {
    return (
        <>
            <header><NavBar /></header>
            <main className="container my-5"><Outlet /></main>
        </>

    )
}

export default DefaultLayout