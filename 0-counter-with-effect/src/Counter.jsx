import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('')

  console.log("render");

  useEffect(() => {// 
    document.title = count; // the effect
    console.log("effect ran");
  }, [count]); // the dependencies

  return (
    <>
      <input onChange={(e) => setName(e.target.value)} type='text'/>
      <p>{name}</p>
      {/* What about the following line of code should we change? Why? */}
      <button onClick={() => setCount((currentCount) => currentCount +1)}>+</button> 
      <p>{count}</p>
    </>
  )
}
export default Counter;