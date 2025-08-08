import { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Call useEffect");
    document.title = `Count: ${count}`;
  }, [count]);
  return (
    <div>
      {count} <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default UseEffectDemo;
