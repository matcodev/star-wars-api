import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="" width="150" height="84"></img>
                </Link>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-dark" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/naves">
                                Naves
                            </Link>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" activeClassName="active" to="/personajes">
                                Personajes
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Favoritos
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><Link className="dropdown-item" to="#">Luke Skywalker</Link></li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;