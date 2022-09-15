import { useState } from "react";
import { CounterChildApp } from "./counter.child.component";
import PropType from 'prop-types';


export const CounterApp = ({ value }) => {

    const[counter, setCounter] = useState(value);

    const sumar= () => setCounter(counter + 1);
    const restar= () => setCounter(counter - 1);
    const resetear= () => setCounter(0);
    
    
    return (
        <>
        <h2>Estoy en counter app</h2>
        <hr></hr>
        <CounterChildApp value={counter}></CounterChildApp>
        <hr></hr>

        {counter}
        <hr></hr>
        <button onClick={sumar}>Sumar + 1</button>
        <button onClick={restar}>Restar - 1</button>
        <button onClick={resetear}>Resetear</button>
        </>
    );
}

CounterApp.protoType = {
    value: PropType.number.isRequired
};