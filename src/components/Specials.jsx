import greekSalad from "../assets/greek salad.jpg"

const Specials = () => {

    const onlineMenu = () => {
        return alert("Menu");
    }

    return <>
        <section className="specials-containter">
            <div className="specials-title">
                <h3>This week specials</h3>
            </div>
            <aside className="specials-button">
                <button onClick={onlineMenu}>Online Menu</button>
            </aside>
            <article className="sp-cont-cards">
                <div className="card">
                    <img src={greekSalad} alt="Greek Salad" className="img-cards"/>
                    <h3>Greek Salad<span className="price">$12.99</span></h3>
                    <p>The famous Greek salad of crispy lettuce, peppers, olives, and feta cheese.</p>
                    <a href="#">Order delivery</a>
                </div>
                <div className="card">
                    <img src={greekSalad} alt="Greek Salad" className="img-cards"/>
                    <h3>Greek Salad<span className="price">$12.99</span></h3>
                    <p>The famous Greek salad of crispy lettuce, peppers, olives, and feta cheese.</p>
                    <a href="#">Order delivery</a>
                </div>
                <div className="card">
                    <img src={greekSalad} alt="Greek Salad" className="img-cards"/>
                    <h3>Greek Salad<span className="price">$12.99</span></h3>
                    <p>The famous Greek salad of crispy lettuce, peppers, olives, and feta cheese.</p>
                    <a href="#">Order delivery</a>
                </div>
            </article>
        </section>
    </>;
}

export default Specials;