import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../pages/admin/componentmenu/Modal.module.css";

export default function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href="#" onClick={handleClose}>
          <button className="px-4 py-2 text-gray-lightest font-produk3 tracking-wider bg-gray-black rounded"
          >
          Close
          </button>
          </a>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
