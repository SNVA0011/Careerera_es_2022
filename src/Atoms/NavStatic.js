import React, { useContext } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavStatic = (props) => {
  return (
  
    <div className="full-w navbar-highcr background1 z-0 sticky top-28 z-10 des-explornav">
      <div className="container-fluid">
        <Navbar variant="dark" className="shadow-0 text-sm">
          <Nav className="me-auto text-base navstick w-100 justify-content-center">
            {props.about ? <Nav.Link href="#DescriptionStatic">{props.about}</Nav.Link> : ''}
            {props.Why ? <Nav.Link href="#why">{props.Why}</Nav.Link> : ''}
            {props.Program ? <Nav.Link href="#highlight">{props.Program}</Nav.Link> : ''}
            {props.Carriculum ? <Nav.Link href="#cariculum">{props.Carriculum}</Nav.Link> : ''}
            {props.WhyC ? <Nav.Link href="#Careera">{props.WhyC}</Nav.Link> : ''}
            {props.hiring ? <Nav.Link href="#HiringPartner">{props.hiring}</Nav.Link> : ''}
            {props.Colocacion ? <Nav.Link href="#tieupsguarantee">{props.Colocacion}</Nav.Link> : ''}
            { props.Application ? <Nav.Link href="#ApplicationProcess">{props.Application}</Nav.Link> : ''}
            {props.queryInscribirse ? <Nav.Link href="#query">{props.queryInscribirse}</Nav.Link> : ''}
            {props.Project ? <Nav.Link href="#capstone">{props.Project}</Nav.Link> : ''}
            {/* { props.Placement ? <Nav.Link href="#profile">{props.Placement}</Nav.Link> : ''} */}
            {props.faq ? <Nav.Link href="#FAQ">{props.faq}</Nav.Link> : ''}
            {props.blogs ? <Nav.Link href="#blog">{props.blogs}</Nav.Link> : ''}
            {props.Review ? <Nav.Link href="#review">{props.Review}</Nav.Link> : ''}
            <Nav.Link className="mr-0">{" "}</Nav.Link> 
          </Nav>
        </Navbar>
      </div>
    </div>
  )}
export default NavStatic;

