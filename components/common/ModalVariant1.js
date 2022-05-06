import React from 'react'
import { Modal } from 'react-bootstrap'

function ModalVariant1({ title, description, link, show, handleClose, image }) {

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
    >
      <Modal.Body className='flex flex-col items-center text-center'>
        {image}
        {title}
        {description}
      </Modal.Body>
      <Modal.Footer>
        {link}
      </Modal.Footer>
    </Modal>
  )
}

export default ModalVariant1