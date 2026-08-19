import { useState, useEffect } from 'react';
import './styles.css';

const Modal = () => {
  // Your code here
  // TODO: Implement useEffect for:
  // 1. Escape key listener
  // 2. Body scroll blocking
  // 3. Cleanup


  return (
    <div className="modal-overlay">
      <div className="modal-content">
      
       
      </div>
    </div>
  );
}

const ModalComponent = () => {
  // Your code here

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

      <button className="open-button">
        Open Modal
      </button>

      <Modal >
        <h2>Welcome to the Modal!</h2>
        <p>
          This is a modal dialog. You can put any content here.
        </p>
        <p>
          Try clicking outside the modal, pressing Escape, or clicking the X button to close it.
        </p>
        <div className="modal-actions">
          <button className="primary-button">
            Got it!
          </button>
        </div>
      </Modal>

      <div className="content">
        <h3>Page Content</h3>
        <p>This is the main page content. When the modal is open, you cannot scroll this page.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
}

export default ModalComponent
