import React from 'react'
import Modal from './Modal'
import { useState } from 'react';


const Modalparent = () => {
    const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div>

        <h1>Dynamic Modal Demo</h1>
      <button onClick={openModal}>Show Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Dynamic Modal Header"
      >
        <p>This is the dynamic modal body content.</p>
        <p>You can pass anything as children.</p>
      </Modal>

      
    </div>
  )
}

export default Modalparent
