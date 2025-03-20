import { useState } from "react";
import Availabletimes from "./Availabletimes";

const Bookingform = () => {

    const [numberGuest, setNumberGuest] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [occasion,setOccasion] = useState("");
    const handleEventguest = (e) => {
        setNumberGuest(e.target.value);
    }
    const handleEventDate = (e) => {
        setDate(e.target.value);
    }


    return <section className="form-book">
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleEventDate}
            />
            <label htmlFor="res-time">Choose time</label>
            <Availabletimes value={time} onChange={e=>setTime(e.target.value)}/>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={numberGuest}
                onChange={handleEventguest}
            />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion"
            value={occasion}
            onChange={e=>setOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit">Make Your reservation</button>
        </form>
    </section>;
};

export default Bookingform;