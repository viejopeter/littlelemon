import logo from "../assets/logo.svg";
import Nav from "./Nav.jsx";

const Header = () => {

    const parameters = { styleNav: "nav_header", showSubtitleNav: false, styleUl: "ul_header" }

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo company" />
            </div>
            <Nav styleRulesNav={parameters} />
        </header>
    );
};

export default Header;