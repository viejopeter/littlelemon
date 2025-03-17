import logo from "../assets/logo.svg";
import Nav from "./Nav.jsx";

const Header = () => {
    return (
        <header>
            <div>
               <img src={logo} alt="Logo company" />
            </div>
            <Nav style="nav-menu"/>
        </header>
    );
};

export default Header;