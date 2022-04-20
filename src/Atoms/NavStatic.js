import React, { useContext } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavStatic = (props) => {
  return (
  
    <div className="full-w navbar-highcr background1 z-0 sticky top-28 z-10 des-explornav px-0">
    <div className={props.containerleftbox ? 'container':'container-fluid'}>
      <Navbar variant="dark" className="shadow-0 text-sm">
        <Nav className={"me-auto text-base navstick w-100 "+(props.containerleftbox ? '':'justify-content-center')}>
            {props.about ? <Nav.Link href="#DescriptionStatic" className='text-base'>{props.about}</Nav.Link> : ''}
            {props.Why ? <Nav.Link href="#why" className='text-base'>{props.Why}</Nav.Link> : ''}
            {props.Program ? <Nav.Link href="#highlight" className='text-base'>{props.Program}</Nav.Link> : ''}
            {props.Carriculum ? <Nav.Link href="#cariculum" className='text-base'>{props.Carriculum}</Nav.Link> : ''}
            {props.WhyC ? <Nav.Link href="#Careera" className='text-base'>{props.WhyC}</Nav.Link> : ''}
            {props.hiring ? <Nav.Link href="#HiringPartner" className='text-base'>{props.hiring}</Nav.Link> : ''}
            {props.Colocacion ? <Nav.Link href="#tieupsguarantee" className='text-base'>{props.Colocacion}</Nav.Link> : ''}
            { props.Application ? <Nav.Link href="#ApplicationProcess" className='text-base'>{props.Application}</Nav.Link> : ''}
            {props.queryInscribirse ? <Nav.Link href="#query" className='text-base'>{props.queryInscribirse}</Nav.Link> : ''}
            {props.Project ? <Nav.Link href="#capstone" className='text-base'>{props.Project}</Nav.Link> : ''}
            {/* { props.Placement ? <Nav.Link href="#profile" className='text-base'>{props.Placement}</Nav.Link> : ''} */} 
            {props.faq ? <Nav.Link href="#FAQ" className='text-base'>{props.faq}</Nav.Link> : ''}
            {props.blogs ? <Nav.Link href="#blog" className='text-base'>{props.blogs}</Nav.Link> : ''}
            {props.Review ? <Nav.Link href="#review" className='text-base'>{props.Review}</Nav.Link> : ''}
            <Nav.Link className="mr-0">{" "}</Nav.Link> 
          </Nav>
        </Navbar>
      </div>
    </div>
  )}
export default NavStatic;

