import Bookingform from "./Bookingform";
const Bookingpage = ({availabletimes,dispatch}) => {
    return <>
    <Bookingform availabletimes={availabletimes} dispatch={dispatch}/>
    </>;
}

export default Bookingpage;