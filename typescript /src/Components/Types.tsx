import * as React from "react";

export default function Types() {
    const [counter, setCounter] = React.useState<number>(0);

    return (
        <div className="App">
            <h1>Result: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    );
}
