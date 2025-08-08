// File: DemoContext/DemoContext.jsx
import { useContext } from "react";
import { Data, Data1 } from "../DemoCreateContext";

const DemoContext = () => {
  const name = useContext(Data);
  const age = useContext(Data1);

  console.log(name + " " + age);
  return (
    <h1>
      May name is {name} and I'm {age} years old.
    </h1>
  );
};

export default DemoContext;
