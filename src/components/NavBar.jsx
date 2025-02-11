import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container d-flex justify-content-center">

                {/* Bottone HomePage */}
                <NavLink to="/" className="nav-link text-center text-white mx-3 ">
                    <i className="fa-solid fa-film fa-spin" style={{ fontSize: "1.5rem" }}></i>
                    <div>Homepage</div>
                </NavLink>
                <NavLink to="/new-film" className="nav-link text-center text-white mx-3 ">
                    <i class="fa-solid fa-file-circle-plus"></i>
                    <div>Aggiungi Film</div>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;