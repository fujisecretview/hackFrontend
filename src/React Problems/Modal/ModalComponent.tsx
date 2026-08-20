import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import "./style.css";

type ModalProps = {
  children: ReactNode;
  isModalOpen: boolean;
  closeModal: () => void;
};

const Modal = ({ children, isModalOpen, closeModal }: ModalProps) => {
  // Your code here
  // TODO: Implement useEffect for:
  // 1. Escape key listener
  // 2. Body scroll blocking
  // 3. Cleanup

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("keydown", keyHandler);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", keyHandler);
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="modal-content"
        onClick={(event) => {
          event.stopPropagation();
          console.log(event);
        }}
      >
        {children}
      </div>
    </div>
  );
};

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <h1>Modal Component</h1>

      <div className="info-box">
        <p>Click the button below to open the modal</p>
        <ul>
          <li>Click outside to close</li>
          <li>Press Escape to close</li>
          <li>Click X button to close</li>
        </ul>
      </div>

      <button onClick={() => setIsModalOpen(true)} className="open-button">
        Open Modal
      </button>

      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <h2>Welcome to the Modal!</h2>
        <p>This is a modal dialog. You can put any content here.</p>
        <p>
          Try clicking outside the modal, pressing Escape, or clicking the X
          button to close it.
        </p>
        <div className="modal-actions">
          <button onClick={closeModal} className="primary-button">
            Got it!
          </button>
        </div>
        <button onClick={closeModal}>X</button>
      </Modal>

      <div className="content">
        <h3>Page Content</h3>
        <p>
          This is the main page content. When the modal is open, you cannot
          scroll this page.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default ModalComponent;
