// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';

const Modalportal = ({ children, onClose }) => {

  return ReactDOM.createPortal(

    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    
    document.getElementById('portal-root') // Target element outside the root
  );

};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  modal: {
    background: 'white',
    padding: '20px',
    borderRadius: '10px'
  }
};

export default Modalportal;
