import React, { useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Context, Provider } from '../../Api'
import { Link, useNavigate } from 'react-router-dom'

export default function SearchCourses() {
    // Api courses
    const { value13, value14 } = useContext(Context)
    const [exactData, setData] = value13
    const [status, loadStatus] = value14

    // Modal
    const [coursesname, setCoursesname] = useState('')
    const [show, setShow] = useState(false)
    const handleClose = () => {
        setShow(false)
        setCoursesname('')
    }
    const handleShow = () => setShow(true)

    return status ? (
        <>
            <Button
                variant="outline-primary"
                onClick={handleShow}
                className="rounded-circle rounded-scourses shadow-md"
            >
                <i className="bi bi-search"></i>
            </Button>

            <Modal
                show={show}
                size="lg"
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                className="searcharea-popup"
                backdrop="static"
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className="pb-0">
                    <InputGroup>
                        <FormControl
                            placeholder="Búsqueda"
                            value={coursesname}
                            onChange={(e) => setCoursesname(e.target.value)}
                        />
                        <Button
                            variant="outline-secondary"
                            className="rounded-circle rounded-scourses shadow-md"
                        >
                            <i className="bi bi-search"></i>
                        </Button>
                    </InputGroup>

                    <div
                        className={
                            'countryflag-menu dropdown' +
                            (coursesname.length > 0 ? ' show' : '')
                        }>
                           
                        <ul
                            className={
                                'dropdown-menu' +
                                (coursesname.length > 0 ? ' show' : '')
                            }>
                            {
                            exactData.length > 0 ?
                           

                            exactData.filter(({ CourseTitel }) =>
                            coursesname === '' ||
                            CourseTitel.toLowerCase().includes(coursesname.toLowerCase()
                            )).map((subitem, i) => (
                        <li
                            key={subitem.course_id}
                            className="dropdown-item p-0 rounded-0">
                            <Link
                                to={subitem.courseFUllURL}
                                key={subitem.course_id}
                                className="dropdown-item rounded-0 py-2"
                                onClick={()=>{handleClose()}}>
                                {subitem.CourseTitel}
                            </Link> 
                        </li>
                            ))

                              : '' }
                        </ul>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    ) : (
        <div className="mt-1">
            <div
                className="spinner-border text-secondary search-sprou"
                role="status"
            >
                <span className="sr-only">Cargando...</span>
            </div>
        </div>
    )
}
