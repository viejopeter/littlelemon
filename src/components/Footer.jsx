import logo from "../assets/logo.svg";
import Nav from "./Nav";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_logo">
                <img src={logo} alt="Logo company" />
            </div>
            <Nav style="nav-footer" showSubtitle={true}/>
            <address className="footer_contact">
                <h3>Contact us</h3>
                <p>Email: <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></p>
                <p>Phone: <a href="tel:+123456789">+123456789</a></p>
                <p>123 Main Street, Melbourne, Australia</p>
            </address>
            <div className="footer_social">
                <h3>Social Media Links</h3>
                <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">Facebook</a>
                <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">Instagram</a>
                <a href="https://x.com/" target="_blank" aria-label="X">X</a>
            </div>
        </footer>
    );
};

export default Footer;