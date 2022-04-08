import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Sign from "../Molecules/Course/Sign";
const ConfirmPopup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleShow()
  }, [])

  return (
    <>
      <Modal className="student-coursepopup modal-width" show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="p-0">
          HECHO
        </Modal.Body>
      </Modal>
    </>
  )
}
export default ConfirmPopup;