import {Link} from "react-router-dom";

export function Navbar() {
    function initMode() {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
    }

    initMode()

    function modeSwitch() {
        console.log("clicked!")
        if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
            document.getElementById("btnSwitch").innerText = "Light"
            document.documentElement.setAttribute('data-bs-theme', 'light')
        } else {
            document.getElementById("btnSwitch").innerText = "Dark"
            document.documentElement.setAttribute('data-bs-theme', 'dark')
        }
    }

    return <>
        <nav className="navbar border-bottom navbar-expand-lg navStyle mb-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Furama Đà Nẵng</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/customers" className="nav-link">Customer</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
                <button className="btn btn-outline shadow ms-3" id="btnSwitch" onClick={modeSwitch}>Dark</button>
            </div>
        </nav>
    </>
}