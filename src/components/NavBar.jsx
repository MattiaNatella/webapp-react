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
            </div>
        </nav>
    );
};

export default Navbar;