import React, { useState } from "react"

const someExpensiveComputation = value => {
  while (value < 5) {
    value++
  }
  return value
}
console.log("123")
function Counter({ initialCount }) {
  // Wait "someExpensiveComputation" function execute to set a value to count
  const [count, setCount] = useState(() => {
    const initialState = someExpensiveComputation(initialCount)

    return initialState
  })

  return (
    <>
      Count: {count}
      <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </>
  )
}

export default Counter
