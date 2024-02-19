import {Link} from "react-router-dom";

export function Header() {
    return (<div className="container-fluid mb-3">
        <Link to="/" className="text-primary text-decoration-none"><h1>Home</h1></Link>
    </div>)
}