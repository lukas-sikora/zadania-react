const Modal = ({ onClose }) => (
  <div className="modal" onClick={onClose}>
    <div className="modal-content">
      <p>Modal z komunikatem</p>
      <button onClick={onClose}>Zamknij</button>
    </div>
  </div>
);

export default Modal;
