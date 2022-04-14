import React, { useEffect } from 'react';
import Hero from "../Atoms/Hero";
import { Helmet } from "react-helmet";
import noida1Img from '../Images/training-rooms/noida-1.jpg';
import noida3Img from '../Images/training-rooms/noida-3.jpg';
import noida2Img from '../Images/training-rooms/noida-2.jpg';
import gurgaon3Img from '../Images/training-rooms/gurgaon-3.jpg';
import gurgaon2Img from '../Images/training-rooms/gurgaon-2.jpg';
import gurgaon1Img from '../Images/training-rooms/gurgaon-1.jpg';
import { Link } from "react-router-dom";



export default function TrainingRoom() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='training-room'>
            <Helmet>
                <title>SALAS DE FORMACIÓN</title>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <link rel="canonical" href="https://www.careerera.com/es/training-room" />
            </Helmet>

            <Hero title="SALAS DE FORMACIÓN" 
            batch={<> <Link to="/" className="no-underline badge bg-info">Hogar</Link>
        <span className="mx-2"> / </span>SALAS DE FORMACIÓN </>} />

            {/*=========== discription_sec ===========*/}
            <div className="discription_sec">
                <div className="container py-16">

                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold text-center">
                            SALAS DE FORMACIÓN <span className="orange-clrsite">EN NOIDA</span>
                        </h2>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                    </div>

                    <div className="course_content_area pt-10">
                        <div className="row">
                            <div className="col-12 mb-3 xl:text-lg">
                                <p>Careerera: para entregar salas de formación en Noida</p>
                                <p>
                                    Las empresas conocen el valor de ofrecer a sus trabajadores las mejores
                                    estructuras de salas de formación disponibles; avanzan en la experiencia
                                    de aprendizaje general y mejoran el recuerdo del conocimiento de los
                                    alumnos. Mirando este avance que es esencial hoy en día, Careerera se ha
                                    propuesto ofrecer salas de formación en Noida.
                                </p>
                            </div>
                            <div className="col-lg-6 col-12">
                                <p className="font-bold text-lg mb-1">
                                    Nuestra sala de formación hace que el aprendizaje sea mejor con:
                                </p>
                                <ul className="list-disc pl-6 text-base">
                                    <li className="mb-2">
                                        Laboratorios completamente equipados con máquinas avanzadas
                                    </li>
                                    <li className="mb-2">Respaldo de energía</li>
                                    <li className="mb-2">Almuerzo, servicio de té y café</li>
                                    <li className="mb-2">Retroproyector adjunto y pizarra</li>
                                    <li className="mb-2">Conectividad de alta velocidad</li>
                                </ul>
                                <p>
                                    Careerera ofrece una sala de capacitación en Noida para la capacitación de
                                    certificación profesional con un rico entorno de aprendizaje,
                                    configuración y excelentes servicios finales según las necesidades de
                                    capacitación.
                                </p>
                                <h3 className="mt-8 font-semibold text-xl sm:text-2xl">
                                    Lugar de entrenamiento en Noida:
                                </h3>
                                <p>
                                    El lugar de entrenamiento está en (B-44) Sector 59, Noida. Las salas de
                                    formación tienen una capacidad total combinada de 75 + participantes en 3
                                    salas de formación. Estas habitaciones están bien equipadas con las
                                    comodidades necesarias.
                                </p>
                            </div>
                            <div className="col-lg-6 col-12">
                                <h4 className="mt-8 mt-lg-0 font-semibold text-xl sm:text-2xl">
                                    Facilidades disponibles:
                                </h4>
                                <ul className="list-disc pl-6 text-base">
                                    <li className="mb-2">Proyector avanzado</li>
                                    <li className="mb-2">
                                        Elementos esenciales (bloc-pen, pizarra y rotuladores) para el
                                        aprendizaje
                                    </li>
                                    <li className="mb-2">Internet de alta velocidad</li>
                                    <li className="mb-2">
                                        Se puede acceder a máquinas de 4 GB de RAM a 32 GB de RAM
                                    </li>
                                    <li className="mb-2">refrescos</li>
                                </ul>
                                <h4 className="mt-8 font-semibold text-xl sm:text-2xl">
                                    Hemos cubierto todas las necesidades de la sala de formación:
                                </h4>
                                <ul className="list-disc pl-6 text-base">
                                    <li className="mb-2">Espacio</li>
                                    <li className="mb-2">Accesibilidad</li>
                                    <li className="mb-2">Temperatura ambiente</li>
                                    <li className="mb-2">Encendiendo</li>
                                    <li className="mb-2">Configuración</li>
                                    <li className="mb-2">Mueble</li>
                                    <li className="mb-2">Tecnología</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            {/*=========== why-datasciencesuf ===========*/}
            <div className="why-datasciencesuf scroll-spbx bg-blue-50">
                <div className="container pt-16 pb-2">
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Nuestras Salas de Entrenamiento <span className="text-yellow-400">en Noida</span>
                        </h2>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>
                    <div className="time_mid_sec mt-10">
                        <ul className="row p-0">

                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                <div className="text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900">
                                    <div className="time_content">
                                        <img src={noida1Img} className="class_rooms_img" alt="Noida" title="Noida"></img>
                                    </div>
                                </div>
                            </li>

                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                <div className="text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900">
                                    <div className="time_content">
                                        <img src={noida3Img} className="class_rooms_img" alt="Noida" title="Noida"></img>
                                    </div>
                                </div>
                            </li>

                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                <div className="text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900">
                                    <div className="time_content">
                                        <img src={noida2Img} className="class_rooms_img" alt="Noida" title="Noida"></img>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className='overflow-hidden ppt-clistaff'>
                    <div className="shape-bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="shape-fill" fill="#fff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                        </svg>
                    </div>
                </div>

            </div>



            {/*=========== discription_sec ===========*/}
            <div className="discription_sec">
                <div className="container py-16">
                    <div className="course_content_area">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <h2 className="font-semibold text-xl sm:text-2xl">
                                    Salas de formación en Gurugram
                                </h2>
                                <p>Careerera: para entregar salas de formación en Gurugram</p>
                                <p>
                                    Las empresas conocen el valor de ofrecer a sus trabajadores las
                                    mejores estructuras de salas de formación disponibles; avanzan en la
                                    experiencia de aprendizaje general y mejoran el recuerdo del
                                    conocimiento de los alumnos. Mirando este avance que es esencial hoy
                                    en día, Careerera se ha propuesto ofrecer salas de formación en
                                    Gurgaon.
                                </p>
                                <p>
                                    Nuestra sala de formación hace que el aprendizaje sea mejor con:
                                </p>
                                <ul className="list-disc pl-6 text-base">
                                    <li className="mb-2">
                                        Laboratorios completamente equipados con máquinas avanzadas
                                    </li>
                                    <li className="mb-2">Respaldo de energía</li>
                                    <li className="mb-2">Almuerzo, servicio de té y café</li>
                                    <li className="mb-2">Retroproyector adjunto y pizarra</li>
                                    <li className="mb-2">Conectividad de alta velocidad</li>
                                </ul>
                                <p>
                                    Careerera ofrece una sala de capacitación en Noida para la
                                    capacitación de certificación profesional con un rico entorno de
                                    aprendizaje, configuración y excelentes servicios finales según las
                                    necesidades de capacitación.
                                </p>
                                <h4 className="mt-8 font-semibold text-xl sm:text-2xl">
                                    Lugar de entrenamiento en Gurgaon:
                                </h4>
                                <p>
                                    El lugar de entrenamiento está en 435 Udyog Vihar, Fase V, AIHP
                                    Horizon Tower, Gurugram. Estas habitaciones están bien equipadas con
                                    las comodidades necesarias.
                                </p>
                            </div>
                            <div className="col-lg-6 col-12">
                                <h4 className="mt-8 mt-lg-0 font-semibold text-xl sm:text-2xl">
                                    Facilidades disponibles:
                                </h4>
                                <ul className="list-disc pl-6 text-base">
                                    <li className="mb-2">Proyector avanzado</li>
                                    <li className="mb-2">
                                        Elementos esenciales (bloc-pen, pizarra y rotuladores) para el
                                        aprendizaje
                                    </li>
                                    <li className="mb-2">Internet de alta velocidad</li>
                                    <li className="mb-2">
                                        Se puede acceder a máquinas de 4 GB de RAM a 32 GB de RAM
                                    </li>
                                    <li className="mb-2">refrescos</li>
                                    <li className="mb-2">
                                        Se proporciona desayuno o almuerzo una vez, según los horarios de
                                        la sesión.
                                    </li>
                                </ul>
                                <h4 className="mt-8 font-semibold text-xl sm:text-2xl">
                                    Hemos cubierto todas las necesidades de la sala de formación:
                                </h4>
                                <ul className="list-disc pl-6 text-base">
                                    <li className="mb-2">Espacio</li>
                                    <li className="mb-2">Accesibilidad</li>
                                    <li className="mb-2">Temperatura ambiente</li>
                                    <li className="mb-2">Encendiendo</li>
                                    <li className="mb-2">Configuración</li>
                                    <li className="mb-2">Mueble</li>
                                    <li className="mb-2">Tecnología</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/*=========== why-datasciencesuf ===========*/}
            <div className="why-datasciencesuf scroll-spbx bg-blue-50">
                <div className="container pt-16 pb-2">
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Nuestras Salas de Entrenamiento <span className="text-yellow-400"> en Gurugram</span>
                        </h2>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>
                    <div className="time_mid_sec mt-10">
                        <ul className="row p-0">

                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                <div className="text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900">
                                    <div className="time_content">
                                        <img src={gurgaon3Img} className="class_rooms_img" alt="Gurgaon" title="Gurgaon"></img>
                                    </div>
                                </div>
                            </li>

                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                <div className="text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900">
                                    <div className="time_content">
                                        <img src={gurgaon2Img} className="class_rooms_img" alt="Gurgaon" title="Gurgaon"></img>
                                    </div>
                                </div>
                            </li>

                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                <div className="text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900">
                                    <div className="time_content">
                                        <img src={gurgaon1Img} className="class_rooms_img" alt="Gurgaon" title="Gurgaon"></img>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className='overflow-hidden ppt-clistaff'>
                    <div className="shape-bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="shape-fill" fill="#fff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                        </svg>
                    </div>
                </div>
            </div>



            {/*=========== discription_sec ===========*/}
            <div className="discription_sec full-w contact-page">
                <div className="container py-16">
                    <div className="course_content_area pt-1">
                        <div className='row'>
                            <div className='col-lg-6 col-12'>

                                <div className="d-flex text-left mb-3">
                                    <div className="media-left w-10">
                                        <i className="text-xs fas fa-map-marker-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Noida Address
                                        </span>
                                        <p className="text-gray-500 font-semibold">
                                            B-44, Sector - 59, Noida Uttar Pradesh - 201301
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex text-left mb-3">
                                    <div className="media-left  w-10 text-left">
                                        <i className="text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            {' '}
                                            Phone
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline" href="tel:+91-92-5000-4000">+91-92-5000-4000</a>
                                    </div>
                                </div>

                                <div className="d-flex text-left">
                                    <div className="media-left  w-10 text-left">
                                        <i className="text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            {' '}
                                            Email
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline" href="mailto:info@careerera.com" target="_blank" rel="noreferrer">info@careerera.com</a>
                                    </div>
                                </div>


                            </div>

                            <hr className='d-lg-none  my-5'></hr>

                            <div className='col-lg-6 col-12'>
                                <div className="d-flex text-left mb-3">
                                    <div className="media-left w-10">
                                        <i className="text-xs fas fa-map-marker-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Gurgaon Address
                                        </span>
                                        <p className="text-gray-500 font-semibold">
                                            435 Udyog Vihar, Phase V, AIHP Horizon Tower, Gurugram
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex text-left mb-3">
                                    <div className="media-left  w-10 text-left">
                                        <i className="text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            {' '}
                                            Phone
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline" href="tel:+91-92-5000-4000">+91-92-5000-4000</a>
                                    </div>
                                </div>

                                <div className="d-flex text-left">
                                    <div className="media-left  w-10 text-left">
                                        <i className="text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            {' '}
                                            Email
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline" href="mailto:info@careerera.com " target="_blank" rel="noreferrer">info@careerera.com </a>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
