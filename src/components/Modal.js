import React from 'react'
import '../Modal.css'

const Modal = ({isOpen,onClose,title,children}) => {
    if (!isOpen) return null;
    
  return (
    <div className='modal-overlay' onClick={onClose}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <div className='modal-header'>
             {title}
             <button className="modal-close" onClick={onClose}>×</button>
            </div>
            <div className='modal-body'>
                {children}
            </div>

        </div>
    </div>
  )
}

export default Modal
