import Calltoaction from "../components/Calltoaction";
import Specials from "../components/Specials";

const Home = () => {
    return (<>
        <section className="calltoaction">
            <Calltoaction />
        </section>
        <section className="specials">
            <Specials />
        </section>
    </>
    );
};

export default Home;