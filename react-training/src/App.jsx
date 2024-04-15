import { useState } from "react";

import { Modal } from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(["Element 1", "Element 2", "Element 3"]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setItems((prevItems) => [...prevItems, inputValue]);
          setInputValue("");
        }}
      >
        <input
          name="item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type="submit">Dodaj</button>
      </form>
      <button onClick={toggleModal}>Pokaż szczegóły</button>
      {isModalOpen && <Modal onClose={toggleModal} itemsCount={items.length} />}
    </div>
  );
};

export default App;
