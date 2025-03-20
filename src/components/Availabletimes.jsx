import { useState } from "react";

const Availabletimes = ({ value, onChange }) => {
    const [timeList] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]);
    return <select
        id="res-time"
        value={value}
        onChange={onChange}
        >
        {timeList.map((item, index) => (<option key={index}>{item}</option>))}
    </select>;
}

export default Availabletimes;