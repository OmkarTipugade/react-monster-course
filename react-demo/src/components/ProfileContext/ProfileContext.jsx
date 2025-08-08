import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Omkar Tipugade",
    age: 22,
    dob: "15 feb 2003",
  });

  const updateUser = (e) => {
    setUser(...user, { [e.target.name]: [e.target.value] });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
