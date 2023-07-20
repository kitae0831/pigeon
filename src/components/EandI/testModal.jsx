import React from 'react';

const Modal = ({ closeModal, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
      <button onClick={closeModal} className="modal-close">
        X
      </button>
    </div>
  );
};

export default Modal;
