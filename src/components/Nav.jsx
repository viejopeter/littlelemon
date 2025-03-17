import { Link } from "react-router-dom"
const Nav = ({style, showSubtitle}) => {
    return (
        <nav className={style}>
            {showSubtitle && <h3>Menu</h3>}
            <ul>
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><Link to="/about" className="nav-item">About us</Link></li>
                <li><Link to="/menu" className="nav-item">Menu</Link></li>
                <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                <li><Link to="/order" className="nav-item">Order online</Link></li>
                <li><Link to="/login" className="nav-item">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;