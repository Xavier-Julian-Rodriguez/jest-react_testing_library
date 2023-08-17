import { useState } from "react"

export const Counter = () => {

    const [Counter, setCounter] = useState(0)
    const [amount, setAmount] = useState(0)

    return (
        <div>
            <h1>{Counter}</h1>
            <button onClick={() => { setCounter(Counter + 1)}}>Increment</button>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={ (e) => setAmount(parseInt(e.target.value)) }
            />
            <button onClick={ () => setCounter(amount)}>Set</button>
        </div>
    )
}
