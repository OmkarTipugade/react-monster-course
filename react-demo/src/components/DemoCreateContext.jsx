// File: DemoCreateContext.jsx
import React, { createContext } from "react";
import DemoContext from "./DemoContext/DemoContext";

// Step 1: Create the context
export const Data = createContext();
export const Data1 = createContext();
const DemoCreateContext = () => {
  const name = "Omkar Tipugade"; // Context value
  const age = 22;

  return (
    // Step 2: Provide the value to children
    <Data.Provider value={name}>
      <Data1.Provider value={age}>
        <DemoContext />
      </Data1.Provider>
    </Data.Provider>
  );
};

export default DemoCreateContext;
