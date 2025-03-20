import restaurantFood from "../assets/restauranfood.jpg";
const Calltoaction = () => {

    const reserveTable = () => {
        alert('Reserve a table');
    }

    return <div className="main-card">
        <div className="main-card-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes serve with a modern twist</p>
            <button onClick={reserveTable}>Reserve a Table</button>
        </div>
        <div className="main-card-img">
            <img src={restaurantFood} alt="Restaurant food" />
        </div>
    </div>;
}

export default Calltoaction;