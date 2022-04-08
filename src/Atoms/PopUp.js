import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Sign from "../Molecules/Course/Sign";
import Forms from "./Form";
const PopUp = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
        handleShow()
    }, 4000);

    return () => window.clearTimeout(timeoutID );
}, []);


  return (
    <>
      <Modal className="student-coursepopup modal-width" show={show} onHide={handleClose}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="p-0">
          {/* <div className="grid grid-cols-2 gap-2"> <div> </div> <div> <img src={ds} className="w-100"/> </div> </div> */}
          <Sign title={props.title} />
        </Modal.Body>
      </Modal>
    </>
  )
}
export default PopUp;