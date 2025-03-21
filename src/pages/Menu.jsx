import { useReducer } from "react";

const Count = () => {

    const initialValue = { counter: 0, onDarkMode: false };

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { ...state, counter: state.counter + 1 }
            case "decrement":
                return { ...state, counter: state.counter - 1 }
            case "reset":
                return { ...state, counter: 0 }
            case "darkMode":
                return { ...state, onDarkMode: state.onDarkMode == false ? true : false }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialValue);

    const style = state.onDarkMode == false ? "white" : "black";

    return <div style={{ background: style }}>
        <h1>Welcome to a Counter</h1>
        <p>Current number: <b>{state.counter}</b></p>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "darkMode" })}>{state.onDarkMode == false ? "Active dark mode": "Active white mode"}</button>
    </div>;
}

export default Count;