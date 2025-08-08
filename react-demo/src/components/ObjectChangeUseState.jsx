import React, { useState, useEffect } from "react";

const ObjectChangeUseState = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    age: 0,
    city: "",
  });
  useEffect(() => {
    console.log("Person object changed:", person);
  }, [setPerson]);

  const onChangeHandler = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Object Change UseState Example</h1>
      <input
        type="text"
        name="name"
        value={person.name}
        onChange={onChangeHandler}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={person.email}
        onChange={onChangeHandler}
        placeholder="Email"
      />
      <input
        type="number"
        name="age"
        value={person.age}
        onChange={onChangeHandler}
        placeholder="Age"
      />
      <input
        type="text"
        name="city"
        value={person.city}
        onChange={onChangeHandler}
        placeholder="City"
      />
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  );
};

export default ObjectChangeUseState;
