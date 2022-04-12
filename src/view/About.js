import React, { useEffect } from 'react'
import about1 from '../Images/about1.png'
import about2 from '../Images/about2.png'
import about3 from '../Images/about3.png'
import about4 from '../Images/about4.png'
import about5 from '../Images/about5.png'
import toplayer from '../Images/mocktest/top-layer.png'
import live from '../Images/live.png'
import learning from '../Images/learning.png'
import Creative from '../Images/creative.png'
import Quiz from '../Images/quiz.png'
import Cost from '../Images/cost.png'
import Flexible from '../Images/flex.png'
import Discussion from '../Images/discussion.png'
import Certificate from '../Images/certificate.png'
import Trained from '../Images/trained.png'
import vivek from '../Images/vivek.jpeg'
import alok from '../Images/alok.jpg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AnimatedNumbers from "react-animated-numbers";


const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='full-w about-page'>
            <Helmet>
                <title>Careerera- About the Company</title>
                <meta name="description" content="Read here history of Careerera online professional training company. Careerera is USA based Herndon company, offering different certification programs & online classroom training." />
                <meta name="keywords" content="About Careerera, History of Careerera, Careerera About us Page" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <link rel="canonical" href="https://www.careerera.com/es/about" />
            </Helmet>

            <div className='certification-courseslight full-w'>
                <div className="container py-16">

                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12 order-2 order-lg-1  mt-4 mt-lg-0">
                            <div className="sec_title">
                                <h1 className="text-2xl md:text-3xl font-bold">
                                    Sobre <span className="orange-clrsite">nosotros</span>
                                </h1>
                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                            </div>
                            <p className="font-semibold list-disc text-gray-700 leading-relaxed text-base lg:text-justify sm:text-lg pt-2">
                                Careerera es uno de los principales proveedores de capacitación de
                                certificación profesional de educación superior, preparación de exámenes,
                                educación K-12, capacitación en idiomas y otras capacitaciones para adultos
                                y niños en el campo de TI, administración, desarrollo de software, gestión
                                de proyectos, garantía de calidad, Y la lista continúa. <br /> <br />
                                Al ser socio de algunas de las principales universidades y organismos de
                                certificación, la organización tiene como objetivo facilitar una formación
                                de calidad a los profesionales de todo el mundo. Careerera tiene sus
                                estudiantes en línea en 60 países, incluidos América, Canadá, Europa y la
                                región de Asia Pacífico. Tiene un historial de capacitación exitosa de miles
                                de profesionales a través de capacitación presencial y en línea. Careerera
                                le da la bienvenida a unirse a uno de los mayores sistemas de educación en
                                línea en vivo.
                                <br /> <br />
                                Desde sus inicios, la organización se dedica a desarrollar metodologías de
                                aprendizaje de última generación mediante la participación de estudiantes y
                                profesores experimentados y facilitando a las personas y empresas materiales
                                de capacitación de alta calidad, lo que a su vez ha ayudado a los
                                profesionales a lograr sus objetivos profesionales y convertirse en un
                                profesional.
                            </p>
                        </div>

                        <div className='col-lg-6 col-12 order-1 order-lg-2 text-center'>
                            <img src={about1} alt='About Us' className="mx-auto" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container py-16">
                <div className="row align-items-center">
                    <div className='col-lg-6 col-12'>
                        <img src={about2} alt='Mission' />
                    </div>
                    <div className="col-xxl-5 col-lg-6 col-12 mt-4 mt-lg-0 ml-auto">
                        <div className="sec_title">
                            <h2 className="text-2xl md:text-3xl font-bold">Misión</h2>
                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                        </div>
                        <p className="text-gray-800 pt-2" />
                        <ul className="font-semibold list-disc pl-6 text-gray-700 leading-relaxed text-base lg:text-justify sm:text-lg">
                            <li className="mb-3">
                                APRENDER, CRECER y EXCELAR son el lema de cada individuo en Careerera.
                            </li>
                            <li className="mb-3">
                                Nuestra misión es ser el destino preferido para una educación de calidad
                                en el campus virtual y demostrar un compromiso extraordinario con todas
                                las personas a las que servimos.
                            </li>
                            <li className="mb-3">
                                También aspiramos a servir a la comunidad en general haciendo un uso
                                adecuado de los sistemas y conceptos más avanzados para ofrecer resultados
                                de calidad de forma constante.
                            </li>
                            <li className="mb-3">
                                Nos esforzamos por proporcionar una experiencia de aprendizaje de clase
                                mundial a estudiantes y profesionales que trabajan.
                            </li>
                            <li>
                                Nuestra misión es proporcionar un entorno de aprendizaje no solo para
                                adquirir conocimientos, sino también para el desarrollo general de la
                                personalidad, la confianza, la ética laboral, el profesionalismo y la
                                motivación.
                            </li>
                        </ul>
                        <p />
                    </div>

                </div>
            </div>

            <div className="container pb-16">
                <div className="row align-items-center">

                    <div className="col-xxl-5 col-lg-6 col-12 order-2 order-lg-1 mr-auto">
                        <div className="sec_title">
                            <h2 className="text-2xl md:text-3xl font-bold">Visión</h2>
                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                        </div>
                        <p className="text-gray-800 pt-2" />
                        <ul className="font-semibold list-disc pl-6 text-gray-700 leading-relaxed text-base lg:text-justify sm:text-lg">
                            <li className="mb-3">
                                Convertirnos en una marca familiar integral de renombre mundial para el
                                aprendizaje permanente.
                            </li>
                            <li className="mb-3">
                                Superar los obstáculos en la educación virtual y hacer que la sociedad se
                                prepare para la educación en línea.
                            </li>
                            <li className="mb-3">
                                Ser ampliamente aclamado por la transformación de la sociedad a través de
                                la educación y la innovación.
                            </li>
                            <li className="mb-3">
                                Nos esforzamos por proporcionar una experiencia de aprendizaje de clase
                                mundial a estudiantes y profesionales que trabajan.
                            </li>
                            <li>
                                Crear modelos de educación diferenciados, un modelo que se enfoque y se
                                comprometa a construir mejores perspectivas de carrera para cada
                                individuo.
                            </li>
                        </ul>
                        <p />
                    </div>
                    <div className='col-lg-6 col-12  mt-4 mt-lg-0 order-1 order-lg-2'>
                        <img src={about3} className="mx-auto" alt='Vision' />
                    </div>
                </div>
            </div>



            <div className='application_process_sec full-w start-yourcareer partnership-reach'>
                <div className="container py-16">
                    <div className="sec_title text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            POR QUÉ <span className="orange-clrsite">CARRERA</span>
                        </h2>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                    </div>

                    <div className="row align-items-center">
                        {/* 1st */}
                        <div className='col-lg-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Live Online'} src={live} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">Vive en línea</h4>
                            </div>
                        </div>
                        {/* 2nd */}
                        <div className='col-lg-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'E-Learning'} src={learning} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">aprendizaje electronico</h4>
                            </div>
                        </div>

                        {/* 3rd */}
                        <div className='col-lg-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Creative Courses'} src={Creative} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">Cursos creativos</h4>
                            </div>
                        </div>

                        {/* 4th */}
                        <div className='col-lg-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Quiz & Exam'} src={Quiz} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">Cuestionario y examen</h4>
                            </div>
                        </div>

                        {/* 5th */}
                        <div className='col-lg-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Cost & Time'} src={Cost} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">Costo y tiempo</h4>
                            </div>
                        </div>

                        {/* 6th */}
                        <div className='col-lg-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Flexible Learning'} src={Flexible} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">Aprendizaje flexible</h4>
                            </div>
                        </div>

                        {/* 7th */}
                        <div className='col-lg-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Discussion'} src={Discussion} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">Discusión</h4>
                            </div>
                        </div>

                        {/* 8th */}
                        <div className='col-lg-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Certificate'} src={Certificate} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">Certificado</h4>
                            </div>
                        </div>

                        {/* 9th */}
                        <div className='col-lg-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Trained Faculty'} src={Trained} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">Facultad capacitada</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container pt-16 pb-4">
                <div className="sec_title text-center">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        NUESTRA <span className="orange-clrsite">FUNDADOR</span>
                    </h2>
                    <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                </div>

                <div className="row pt-3 align-items-center justify-content-center">
                    <div className="col-xl-4 col-lg-5 col-sm-6 col-12">
                        <div className="single-team-box">
                            <div className="image">
                                <img src={vivek} alt="Vivek K Singh" className='rounded border' />

                                <ul className="social">
                                    <li>
                                        <a href="https://www.facebook.com/vivek00999" target="_blank">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/the_vivek_ks" target="_blank">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/the-vivek-k-singh/" target="_blank">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="content">
                                <h3>Vivek K Singh</h3>
                                <span>Fundador</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-1 col-lg-1 col-sm-1 col-12 d-none d-lg-block"></div>


                    <div className="col-xl-4 col-lg-5 col-sm-6 col-12">
                        <div className="single-team-box">
                            <div className="image">
                                <img src={alok} alt="Alok K Singh" className='rounded-circle border' />

                                <ul className="social">
                                    <li>
                                        <a href="https://www.facebook.com/alok0099" target="_blank">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/alok0099" target="_blank">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/alok-singh-104991157/" target="_blank">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="content">
                                <h3>Alok K Singh</h3>
                                <span>Fundador</span>
                            </div>
                        </div>
                    </div>



                </div>
            </div>



            <div className='regiavail full-w requirement-sale'>
                <div className='overflow-hidden ppt-clistaff norotate'>
                    <div className="shape-bottom top-2-relativeminus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="shape-fill" fill="#fff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                        </svg>
                    </div>
                </div>

                <div className="container pt-16 pb-4">
                    <div className="sec_title text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            NUESTROS <span className="orange-clrsite">LOGROS</span>
                        </h2>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                    </div>


                    <div className="row pt-3 align-items-center">
                        <div className='col-lg-6 col-12'>

                            <img src={about4} alt='our_journey_banner' className="rounded-2xl full-w position-relative z-10" />
                            <div className='text-right'>
                                <img src={toplayer} alt='dots' className='dotstp d-inline-block right'></img>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 text-center text-lg-left mt-lg-0 pt-lg-4 position-relative z-10">
                            <div className="row">

                                <div className='col-xl-10 col-12 mx-auto'>
                                    <div className='row mb-3'>
                                        <div className="col-sm-6 col-12 mb-4">
                                            <div className='shadow-0'>
                                                <h2 className="text-blue-500 sitblu-clrsite font-semibold text-3xl md:text-4xl xxl:text-5xl">
                                                    <div className='d-inline-block'><AnimatedNumbers  animateToNumber={60} configs={[ { mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 }, ]}></AnimatedNumbers></div>+
                                                </h2>
                                                <p className="text-gray-700 text-lg lg:text-xl font-semibold">Los paises</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12 mb-4">
                                            <div className='shadow-0'>
                                                <h2 className="text-blue-500 sitblu-clrsite font-semibold text-3xl md:text-4xl xxl:text-5xl">
                                                    <div className='d-inline-block'><AnimatedNumbers  animateToNumber={253851} configs={[ { mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 }, ]}></AnimatedNumbers></div>
                                                </h2>
                                                <p className="text-gray-700 text-lg lg:text-xl font-semibold">Usuarios</p>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-12 mb-4">
                                            <div className='shadow-0'>
                                                <h2 className="text-blue-500 sitblu-clrsite font-semibold text-3xl md:text-4xl xxl:text-5xl">
                                                    <div className='d-inline-block'><AnimatedNumbers  animateToNumber={29} configs={[ { mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 }, ]}></AnimatedNumbers></div>
                                                </h2>
                                                <p className="text-gray-700 text-lg lg:text-xl font-semibold">Trayectoria profesional</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12 mb-4">
                                            <div className='shadow-0'>
                                                <h2 className="text-blue-500 sitblu-clrsite font-semibold text-3xl md:text-4xl xxl:text-5xl">
                                                   <div className='d-inline-block'><AnimatedNumbers animateToNumber={146} configs={[ { mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 }, ]}></AnimatedNumbers></div>
                                                </h2>
                                                <p className="text-gray-700 text-lg lg:text-xl font-semibold">Cursos</p>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-12 mb-4">
                                            <div className='shadow-0'>
                                                <h2 className="text-blue-500 sitblu-clrsite font-semibold text-3xl md:text-4xl xxl:text-5xl">
                                                   <div className='d-inline-block'><AnimatedNumbers animateToNumber={1054} configs={[ { mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 }, ]}></AnimatedNumbers></div>
                                                </h2>
                                                <p className="text-gray-700 text-lg lg:text-xl font-semibold">próximas clases</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className='shadow-0'>
                                                <h2 className="text-blue-500 sitblu-clrsite font-semibold text-3xl md:text-4xl xxl:text-5xl">
                                                   <div className='d-inline-block'><AnimatedNumbers animateToNumber={47} configs={[ { mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 }, ]}></AnimatedNumbers></div>
                                                </h2>
                                                <p className="text-gray-700 text-lg lg:text-xl font-semibold">aprendizaje electronico</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
                <div className='overflow-hidden ppt-clistaff'>
                    <div className="shape-bottom top-2-relativeminus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="shape-fill" fill="#fff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                        </svg>
                    </div>
                </div>
            </div>



            <div className="container py-16">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12 order-2 order-lg-1  mt-4 mt-lg-0">
                        <div className="sec_title">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                De
                                <span className="orange-clrsite">nuestro blog</span>
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg fw-medium">
                                La importancia del aprendizaje automático para los científicos de datos
                            </p>
                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                        </div>
                        <p className="text-gray-800 pt-2">
                            Big Data, Machine Learning (ML) e Inteligencia Artificial (IA) son conceptos
                            bien establecidos que han tenido relevancia durante mucho tiempo. Sin
                            embargo, la capacidad de aplicar algoritmos y cálculos numéricos a datos
                            masivos solo ha cobrado impulso recientemente. La misma dinámica que ha
                            impulsado la popularidad de la minería de datos está alimentando un mayor
                            interés en el aprendizaje automático. El aumento de los volúmenes y la
                            variedad de datos, el procesamiento informático más económico y potente y el
                            almacenamiento de datos rentable son algunos ejemplos. Todo este imp...
                        </p>
                        <p className="font-bold text-xl mb-0 text-gray-800 mt-5">
                            La ciberseguridad como opción de carrera y su alcance
                        </p>
                        <p className="text-gray-800 pt-2">
                            Las organizaciones se han visto cada vez más expuestas a la piratería y los
                            ataques cibernéticos a medida que nuestra economía global ha dado lugar a
                            más informática y comunicaciones basadas en Internet en todo el mundo. La
                            demanda de seguridad cibernética está en su punto más alto, ya que el
                            entorno comercial global cambia al almacenamiento y la gestión de datos en
                            línea y en la nube. Esto ha aumentado la demanda de expertos en
                            ciberseguridad que estén familiarizados y sean expertos en inteligencia
                            artificial y ciencia de datos. En términos de conjuntos de habilidades y
                            ocupaciones, la amplitud de la ciberseguridad ha gr...
                        </p>
                        <Link to="/blog"
                            className="md:h-12 btn-site invert no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">
                            <span>VER TODO</span>
                        </Link>
                    </div>

                    <div className='col-lg-6 col-12 order-1 order-lg-2'>
                        <img src={about5} alt='From Our Blog' className="mx-auto" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
