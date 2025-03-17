import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Menu from "../pages/Menu.jsx"
import Reservations from "../pages/Reservations.jsx"
import Order from "../pages/Order.jsx"
import Login from "../pages/Login.jsx"
import { Routes, Route } from "react-router-dom"
const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/order" element={<Order />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    );
};

export default Main;