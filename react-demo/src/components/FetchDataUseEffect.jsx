import React, { useEffect, useState } from "react";

const FetchDataUseEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://dummyjson.com/todos");
      const d = await res.json();
      setData(d.todos);
    };

    fetchTodos();
  }, []);
  return (
    <div>
      <ul>
        {data.map((t) => (
          <li
            key={t.id}
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <span className="mr-4">User ID: {t.userId}</span>
            <span className="mr-4">Name: {t.todo}</span>
            <span>{t.completed ? "✅ Completed" : "❌ Uncompleted"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataUseEffect;
