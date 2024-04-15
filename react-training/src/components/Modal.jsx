import ReactDOM from "react-dom";

const Modal = ({ onClose, itemsCount }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <p>Liczba elementów na liście: {itemsCount}</p>
        <button onClick={onClose}>Zamknij</button>
      </div>
    </div>,
    document.body
  );
};
export default Modal;
