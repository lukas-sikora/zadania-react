const Modal = ({ onClose }) => (
  <div
    className="modal"
    onClick={(e) => {
      e.stopPropagation();
      onClose();
    }}
  >
    <div className="modal-content">
      <p>Modal z komunikatem</p>
      <button onClick={onClose}>Zamknij</button>
    </div>
  </div>
);

export default Modal;
