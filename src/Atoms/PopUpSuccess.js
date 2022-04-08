import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'

export default function PopUpSuccess() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow()

        setTimeout(function(){
            handleClose()
          },4000);
    }, [])

    return (
        <>
            <Modal className="student-coursepopup successrequest" show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className="p-0">
                    <section className="page_404 pt-12">
                        <div className="container text-center">

                            <div className="contant_box_404">
                                <div className={"circle-loader " + (show ? 'load-complete' : '')}>
                                    <div className="checkmark draw" style={{ display: "block" }} />
                                </div>

                                <div className="row">
                                <div className='overflow-hidden ppt-clistaff p-0  mt-3'>
                                    <div className="shape-bottom top-2-relativeminus">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                            <path className="shape-fill" fill="#eaf6ea" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="bg-white pt-9 pb-12">
                                    <div className="row">
                                        <div className="mx-auto col-12 col-sm-10 col-md-11 ">
                                            <div className="bg-white">
                                                <div className="four_zero_four_bg">
                                                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 font-bold">¡Gracias!</h1>
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-semibold orange-clrsite mb-0 pt-1">
                                                Hemos recibido su solicitud, uno de nuestros ejecutivos de atención al cliente se comunicará con usted en breve.
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                </div>

                               
                            </div>
                        </div>
                    </section>
                </Modal.Body>
            </Modal>
        </>
    )
}
