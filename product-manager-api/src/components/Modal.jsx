export default function Modal({ children, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-window">
        <button type="button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}