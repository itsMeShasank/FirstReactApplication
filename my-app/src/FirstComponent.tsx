import { useState } from "react";

function FirstComponent() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count+1);
    }
    return (
      <>
      <button className="button" onClick={handleClick}>click</button>
      <p>Button Clicked: {count}</p>
      </>
    )
  }

  export default FirstComponent;