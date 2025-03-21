import { useState } from "react";

const Bookingform = ({ availabletimes, dispatch }) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numberGuest, setNumberGuest] = useState("");
    const [occasion, setOccasion] = useState("");
    const handleEventguest = (e) => {
        setNumberGuest(e.target.value);
    }
    const handleEventDate = (e) => {
        setDate(e.target.value);
    }

    const handleEventTime = (e) => {
        setTime(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'reserved', payload: time })
        setDate("");
        setTime("");
        setNumberGuest("");
        setOccasion("");
        alert("Reservation done")
    }

    return <section className="form-book">
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleEventDate}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={handleEventTime}
            ><option value="">Select One...</option>
                {availabletimes.map((time, index) => (<option key={index}>{time}</option>))}
            </select>
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
                onChange={e => setOccasion(e.target.value)}
            >
                <option value="">Select One...</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button disabled={!date || !time || !numberGuest || !occasion} type="submit">Make Your reservation</button>
        </form>
    </section>;
};

export default Bookingform;