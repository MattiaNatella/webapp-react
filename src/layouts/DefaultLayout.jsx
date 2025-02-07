import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const DefaultLayout = () => {
    return (
        <>
            <header><NavBar /></header>
            <main className="container d-flex justify-content-center my-5"><Outlet /></main>
        </>

    )
}

export default DefaultLayout