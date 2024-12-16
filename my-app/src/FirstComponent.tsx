import { useState } from "react";

const [count, setCount] = useState(0);

function handleClick() {
    setCount(count+1);
}

function FirstComponent() {
    return (
      <>
      <button className="button" onClick={handleClick}>click</button>
      <p>Button Clicked: {count}</p>
      </>
    )
  }

  export default FirstComponent;