import { useState, useEffect } from "react";

export default function Modals({ children, onClose }) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
  };

  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        onClose();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [closing, onClose]);

  return (
    <div className="modalOverlay" onClick={handleClose}>
      <div
        className={`modalContent ${closing ? "fade-out" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modalClose" onClick={handleClose}>X</button>
        {children}
      </div>
    </div>
  );
}
