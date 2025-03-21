import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Menu from "../pages/Menu.jsx"
import Reservations from "../pages/Reservations.jsx"
import Order from "../pages/Order.jsx"
import Login from "../pages/Login.jsx"
import { useReducer } from "react"
import { Routes, Route } from "react-router-dom"

const Main = () => {

    const initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
    };

    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'reserved':
                return state.filter(rem => rem !== action.payload)
            default:
                return state
        }
    }

    const [availabletimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations availabletimes={availabletimes} dispatch={dispatch} />} />
                <Route path="/order" element={<Order />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    );
};

export default Main;