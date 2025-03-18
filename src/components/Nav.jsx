import { Link } from "react-router-dom"
const Nav = ({styleRulesNav}) => {
    return (
        <nav className={styleRulesNav.styleNav}>
            {styleRulesNav.showSubtitleNav && <h3>Menu</h3>}
            <ul className={styleRulesNav.styleUl}>
                <li><Link to="/" className="nav_item">Home</Link></li>
                <li><Link to="/about" className="nav_item">About us</Link></li>
                <li><Link to="/menu" className="nav_item">Menu</Link></li>
                <li><Link to="/reservations" className="nav_item">Reservations</Link></li>
                <li><Link to="/order" className="nav_item">Order online</Link></li>
                <li><Link to="/login" className="nav_item">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;