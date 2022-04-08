import React, { useContext } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Context, Provider } from '../../Api'

const Navs = () => {
  const { value5, value6 } = useContext(Context)
  const [Catfinal, Catsetfinal] = value5
  const [Catsts, Catloadsts] = value6


  return (
    Catsts ?
      <div className="full-w navbar-highcr background1 z-0 sticky top-28 z-10 des-explornav">
        <div className="container">
          <Navbar variant="dark" className="shadow-0">
            <Nav className="me-auto">
              <Nav.Link href="#Description">Descripción</Nav.Link>
              <Nav.Link href="#explore">Explorar cursos</Nav.Link>
              <Nav.Link href="#why">Por qué {Catfinal[0].category_title}</Nav.Link>
              <Nav.Link href="#FAQ">Preguntas frecuentes</Nav.Link>
              <Nav.Link href="#HiringPartner">Usuarios de</Nav.Link>
              <Nav.Link href="#ApplicationProcess">Proceso de solicitud</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </div>
      : ''
  )
}
export default Navs;




