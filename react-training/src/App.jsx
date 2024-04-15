import { useState } from "react";
import { createPortal } from "react-dom";

import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app" onClick={() => console.log("Kliknięcie w div!")}>
      <button onClick={() => setIsModalOpen(true)}>Otwórz modal</button>
      {isModalOpen &&
        createPortal(
          <Modal onClose={() => setIsModalOpen(false)} />,
          document.body
        )}
    </div>
  );
};

export default App;
