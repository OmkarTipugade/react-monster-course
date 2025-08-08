import { useState, useEffect } from "react";

let id = -1;
const UpdateArrUseState = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleSumbit = () => {
    setItems([
      ...items,
      {
        id: ++id,
        name: newItem,
      },
    ]);
  };
  useEffect(() => {
    items.sort();
  }, [items]);
  return (
    <div>
      <input
        type="text"
        placeholder="Item name"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleSumbit}>Submit</button>

      <div>
        <ul>
          {items.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default UpdateArrUseState;
