import React, { useEffect, useState, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import mocktestbanner1 from '../Images/mocktest/mocktest-banner-1.jpg'
import mocktestbanner2 from '../Images/mocktest/mocktest-banner-2.jpg'
import mocktestbanner3 from '../Images/mocktest/mocktest-banner-3.jpg'
import toplayer from '../Images/mocktest/top-layer.png'
import allinone from '../Images/mocktest/all_in_one.png'
import expertadvice from '../Images/mocktest/expert_advice.png'
import freemocktests from '../Images/mocktest/free_mocktests.png'
import evaluation from '../Images/mocktest/evaluation.png'
import colloquium from '../Images/mocktest/colloquium.png'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Testimonial from '../Atoms/Testimonial'
import Blog from "../Atoms/Blog";
import Form from 'react-bootstrap/Form'
import { Context, Provider } from "../Api";
import { Helmet } from 'react-helmet'
import AnimatedNumbers from "react-animated-numbers";


export default function Mocktest() {

    //Owl Carousel Settings
    const [KeyOwl, setKeyOwl] = useState();

    const options = {
        responsiveClass: true,
        loop: false,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        dots: true,
        nav: true,
        center: false,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
                stagePadding: 10
            },
            400: {
                items: 1,
                slideBy: 1,
                stagePadding: 10
            },
            768: {
                items: 2,
                slideBy: 2,
                smartSpeed: 100,
            },
            992: {
                items: 3,
                slideBy: 3,
                smartSpeed: 100,
            },
            1200: {
                items: 4,
                slideBy: 4,
                smartSpeed: 100,
            }
        },
    };


    // Event
    const [Event, setEvent] = useState([])
    const [Eventsts, setEventsts] = useState(false)

    // List of Event
    async function Eventslist() {
        const allEventsList = await fetch(
            'https://my.careerera.com/API/common/EventsList.php'
        )
        const allEventsListapi = await allEventsList.json()
        setEvent(allEventsListapi.records)
        setEventsts(true)
    }

    // Country List Api
    const { value11, value12 } = useContext(Context);
    const [cntry, setcntry] = value11;
    const [cntryLoad, setcntryLoad] = value12;
    // setvalPhoneCode
    const [selectphoneval, setselectphoneval] = useState([]);
    function setvalPhone(e) {
        setselectphoneval(e.target.value)
    }


    useEffect(() => {
        Eventslist();
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='mocktest-page'>

            <Helmet>
                <title>Mock Test - Careerera</title>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <link rel="canonical" href="https://www.careerera.com/es/mocktest" />
            </Helmet>

            <div className="full-w">
                <div className='certification-courseslight full-w'>
                    <div className="container py-16 vast-knowslider">
                        <div className='row align-items-center'>
                            <div className='col-xxl-9 col-xl-8 col-12 mb-4 mb-xl-0'>
                                <img src={toplayer} className='dotstp' alt='dots-texture'></img>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={mocktestbanner1}
                                            alt="mocktest-slider-image"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={mocktestbanner2}
                                            alt="mocktest-slider-image"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={mocktestbanner3}
                                            alt="mocktest-slider-image"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>

                            <div className='col-xxl-3 col-xl-4 col-12'>
                                <div className='full-w contact-page xl:pl-3 pt-xl-4'>
                                    <div className='row'>


                                        <div className="d-flex col-xl-12 col-sm-6 col-12 text-left mb-4 align-items-center">
                                            <div className="media-left  w-10 text-left">
                                                <i className="fas fa-users text-blue-500 shadow-md"></i>
                                            </div>
                                            <div className="media-body text-left">
                                                <span className="text-base sm:text-lg font-bold mb-1 d-block">
                                                    Registro gratis
                                                </span>
                                            </div>
                                        </div>

                                        <div className="d-flex col-xl-12 col-sm-6 col-12 text-left mb-4 align-items-center">
                                            <div className="media-left  w-10 text-left">
                                                <i className="fas fa-book-reader text-blue-500 shadow-md"></i>
                                            </div>
                                            <div className="media-body text-left">
                                                <span className="text-base sm:text-lg font-bold mb-1 d-block">
                                                    Información del examen
                                                </span>
                                            </div>
                                        </div>


                                        <div className="d-flex col-xl-12 col-sm-6 col-12 text-left mb-4 align-items-center">
                                            <div className="media-left  w-10 text-left">
                                                <i className="fas fa-tasks text-blue-500 shadow-md"></i>
                                            </div>
                                            <div className="media-body text-left">
                                                <span className="text-base sm:text-lg font-bold mb-1 d-block">
                                                    Examen simulado basado en MCQ
                                                </span>
                                            </div>
                                        </div>

                                        <div className="d-flex col-xl-12 col-sm-6 col-12 text-left mb-4 mb-xl-0 align-items-center">
                                            <div className="media-left  w-10 text-left">
                                                <i className="fas fa-search text-blue-500 shadow-md"></i>
                                            </div>
                                            <div className="media-body text-left">
                                                <span className="text-base sm:text-lg font-bold mb-1 d-block">
                                                    Resultado instantáneo
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='indexhome'>
                    <div className="regiavail full-w">
                        <div className="container pt-12 sm:pt-20">
                            <div className="row">
                                <div className="text-center text-white pb-5 col-xl-3 col-sm-6 col-12 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-full mb-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <h2 className="font-bold text-4xl md:text-5xl mb-1">
                                        <div className='animated_numberscenter w-100'>
                                            <AnimatedNumbers animateToNumber={253851}></AnimatedNumbers>
                                        </div>
                                    </h2>
                                    <h3 className=" text-lg md:text-lg">Usuarios Registrados</h3>
                                </div>


                                <div className="text-center text-white pb-5 col-xl-3 col-sm-6 col-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-full mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                    <h2 className="font-bold text-4xl md:text-5xl mb-1">
                                        <div className='animated_numberscenter w-100'>
                                            <AnimatedNumbers animateToNumber={146}></AnimatedNumbers>
                                        </div>
                                    </h2>
                                    <h3 className="text-lg md:text-lg">Cursos Disponibles</h3>
                                </div>

                                <div className="text-center text-white pb-5 col-xl-3 col-sm-6 col-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-full mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h28M3 10h28M3 7l9-4 9 4M4 10h26v11H4V10z" />
                                    </svg>
                                    <h2 className="font-bold text-4xl md:text-5xl mb-1">
                                        <div className='animated_numberscenter w-100'>
                                            <AnimatedNumbers animateToNumber={1054}></AnimatedNumbers>
                                        </div>
                                    </h2>
                                    <h3 className="text-lg md:text-lg">Próximas Clases</h3>
                                </div>

                                <div className="text-center text-white pb-5 col-xl-3 col-sm-6 col-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-full mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h28M4 4h26v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                    </svg>
                                    <h2 className="font-bold text-4xl md:text-5xl mb-1">
                                        <div className='animated_numberscenter w-100'>
                                            <AnimatedNumbers animateToNumber={47}></AnimatedNumbers>
                                        </div>
                                    </h2>
                                    <h3 className="text-lg md:text-lg">Aprendizaje electrónico</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="shape-bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="shape-fill" fill="#084f99" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                        </svg>
                    </div>
                </div>

            </div>




            <div className="mockprocess">
                <div className="container py-16">
                    <div className="sec_title">
                        <h1 className="text-2xl md:text-3xl font-bold text-center">
                            <span className="orange-clrsite">Proceso de registro de</span> examen
                            simulado
                            <span className="orange-clrsite">
                                <font style={{ verticalAlign: "inherit" }} />
                            </span>
                        </h1>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                    </div>
                    <div className="pt-2">
                        <ul className="timeline">
                            <li>
                                <div className="direction-r">
                                    <div className="flag-wrapper">
                                        <i className="fas fa-book-reader orange-lgclr text-4xl d-block mb-3"></i>

                                        <br />
                                        <span className="flag">Selecciona una Certificación</span>
                                        <span className="time-wrapper">
                                            <span className="time">
                                                Ver de la lista de más de 15 certificaciones para seleccionar
                                            </span>
                                        </span>
                                        <div className="desc">
                                            Busque oportunidades para mejorar su carrera a partir de varias
                                            certificaciones en línea en gestión de proyectos, espacio de TI,
                                            finanzas y otras áreas centrales.
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="direction-l">
                                    <div className="flag-wrapper">
                                        <i className="fas fa-users  orange-lgclr text-4xl d-block mb-3"></i>

                                        <br />
                                        <span className="flag">Registro gratis</span>
                                        <span className="time-wrapper">
                                            <span className="time">
                                                ¡Regístrese gratis y comience a tomar los exámenes de prueba
                                                hoy!
                                            </span>
                                        </span>
                                        <div className="desc">
                                            Careerera es un espacio ideal para conocerlo TODO y poner a
                                            prueba tu preparación para el examen. Las pruebas simuladas
                                            brindan una idea de las preguntas reales del examen.
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="direction-r">
                                    <div className="flag-wrapper">
                                        <i className="fas fa-tasks orange-lgclr text-4xl d-block mb-3"></i>

                                        <br />
                                        <span className="flag">
                                            Realice una prueba de muestra/simulacro
                                        </span>
                                        <span className="time-wrapper">
                                            <span className="time">
                                                Eche un vistazo a lo que podría esperar en el examen real
                                            </span>
                                        </span>
                                        <div className="desc">
                                            Sería prudente realizar tantos exámenes como sea posible para
                                            aumentar la confianza y poner a prueba sus niveles de evaluación
                                            preliminar. Cada uno de los exámenes se cuestiona atentamente
                                            para garantizar que se cubra todo el material del curso.
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="direction-l">
                                    <div className="flag-wrapper">
                                        <i className="fas  fa-search orange-lgclr text-4xl d-block mb-3"></i>

                                        <br />
                                        <span className="flag">
                                            Resultado de examen instantáneo y comentarios
                                        </span>
                                        <span className="time-wrapper">
                                            <span className="time">
                                                Obtenga resultados en segundos a través de gráficos
                                                circulares, revise los resultados de las pruebas y las
                                                estadísticas de las pruebas.
                                            </span>
                                        </span>
                                        <div className="desc">
                                            ¡La actuación llama su atención sobre las áreas del programa de
                                            estudios que requieren una mayor comprensión y le ayuda a medir
                                            su estado de preparación!
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* application_process_sec */}
            <div className='application_process_sec full-w start-yourcareer'>
                <div className="container py-20">
                    <div className="sec_title text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            POR QUÉ
                            <span className="orange-clrsite">CARRERA</span>
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg fw-medium">
                            Simplifica la preparación de exámenes
                        </p>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                    </div>
                    <div className="pt-4">
                        <div className="row pt-1 justify-content-center">
                            <div className="justify-items-center  col-lg-4 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                                <div className="tt-iconbox-customimg">
                                    <img
                                        className="img-round"
                                        src={allinone}
                                        width="45"
                                        alt="All-in-One"
                                    />
                                </div>
                                <div className="full-w">
                                    <h4 className="text-gray-700 font-bold text-lg mb-2">Todo en uno</h4>
                                    <p>
                                        Busca toda la información sobre certificaciones a un clic de
                                        distancia
                                    </p>
                                </div>
                            </div>
                            <div className="justify-items-center  col-lg-4 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                                <div className="tt-iconbox-customimg">
                                    <img
                                        className="img-round"
                                        src={expertadvice}
                                        width="45"
                                        alt="Expert Advice"
                                    />
                                </div>
                                <div className="full-w">
                                    <h4 className="text-gray-700 font-bold text-lg mb-2">
                                        Consejos de expertos
                                    </h4>
                                    <p>
                                        Recomendaciones de expertos y profesionales de la industria sobre
                                        recursos de lectura e institutos de capacitación
                                    </p>
                                </div>
                            </div>
                            <div className="justify-items-center  col-lg-4 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                                <div className="tt-iconbox-customimg">
                                    <img
                                        className="img-round"
                                        src={freemocktests}
                                        width="45"
                                        alt="Free Mock Tests"
                                    />
                                </div>
                                <div className="full-w">
                                    <h4 className="text-gray-700 font-bold text-lg mb-2">
                                        Pruebas simuladas gratuitas
                                    </h4>
                                    <p>
                                        Intente pruebas de prueba gratuitas cuestionadas atentamente y
                                        alivie las dudas de examen, si las hubiere.
                                    </p>
                                </div>
                            </div>
                            <div className="justify-items-center  col-lg-4 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                                <div className="tt-iconbox-customimg">
                                    <img
                                        className="img-round"
                                        src={evaluation}
                                        width="45"
                                        alt="Evaluation"
                                    />
                                </div>
                                <div className="full-w">
                                    <h4 className="text-gray-700 font-bold text-lg mb-2">Evaluación</h4>
                                    <p>
                                        Obtenga comentarios instantáneos y calcule sus niveles de
                                        preparación para el examen mediante la revisión de resultados, las
                                        estadísticas de desempeño de los compañeros y el análisis de
                                        calificaciones
                                    </p>
                                </div>
                            </div>
                            <div className="justify-items-center  col-lg-4 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                                <div className="tt-iconbox-customimg">
                                    <img
                                        className="img-round"
                                        src={colloquium}
                                        width="45"
                                        alt="Colloquium"
                                    />
                                </div>
                                <div className="full-w">
                                    <h4 className="text-gray-700 font-bold text-lg mb-2">Coloquio</h4>
                                    <p>
                                        Discuta con personas de ideas afines utilizando nuestro Foro, una
                                        plataforma de código abierto
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            {/* mockexam-certi */}
            <div className='mockexam-certi scroll-spbx' id='mockexamcerti'>
                <div className='container py-20'>
                    <div className="sec_title text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">EXAMEN SIMULADO <span className="orange-clrsite">CERTIFICACIONES</span></h2>
                        <hr className="w-20 hr mb-2 bg-blue-400 sepfoll-hr mx-auto" />
                    </div>

                    <div className="pt-4 megamenu-wrapper media-prtslider">
                        <div className='ourclient-staffing'>
                            <Tabs defaultActiveKey="Certifications" transition={true} onSelect={(k) => setKeyOwl(options)}>
                                <Tab eventKey="Certifications" title="Certificación">
                                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">PMP® Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cyber-security" src="/upcoming_batches_icon/cyber-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Certified Information Systems Security Professional (CISSP)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Scrum Master Professional By SCRUMVersity</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Scrum Product Owner Professional By SCRUMVersity</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">AWS Certified Solutions Architect - Associate</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="software-development" src="/upcoming_batches_icon/software-development.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Full Stack Development Professional</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="software-development" src="/upcoming_batches_icon/software-development.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">UI/UX Design Professional</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="internet-marketing" src="/upcoming_batches_icon/internet-marketing.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Digital Marketing Professional (DMP by DMVersity)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ITIL® Intermediate ST Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ITIL® Intermediate SO Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ITIL® Intermediate CSI Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ITIL® Intermediate PPO Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ITIL® intermediate SOA Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ITIL® intermediate RCV Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ITIL® Intermediate OSA Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ITIL® MALC Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ITIL® Expert Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="big-data-analytics" src="/upcoming_batches_icon/big-data-analytics.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Big Data Hadoop Administrator Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">SAFe Advanced Scrum Master Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="artificial-intelligence-and-machine-learning" src="/upcoming_batches_icon/artificial-intelligence-and-machine-learning.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                AIMLF (Artificial Intelligence and Machine Learning Fundamental)
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="artificial-intelligence-and-machine-learning" src="/upcoming_batches_icon/artificial-intelligence-and-machine-learning.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                AIMLP (Artificial Intelligence and Machine Learning
                                                                Professionals )
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="quality-management" src="/upcoming_batches_icon/quality-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Six Sigma Green Belt Certification by SixSigmaVersity</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="quality-management" src="/upcoming_batches_icon/quality-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                Lean Six Sigma Black belt Certification by SixSigmaVersity
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="quality-management" src="/upcoming_batches_icon/quality-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                Lean Six Sigma Green Belt Certification by SixSigmaVersity
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">CSPO® Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ITIL® Foundation Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">PRINCE 2® Foundation Practitioner Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">PMI-ACP ® Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ITIL® Intermediate SS Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ITIL® Intermediate SD Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="big-data-analytics" src="/upcoming_batches_icon/big-data-analytics.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Big Data Hadoop Developer Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Scrum Product Owner Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="quality-management" src="/upcoming_batches_icon/quality-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Six Sigma Black Belt Certification by SixSigmaVersity</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">TOGAF® 9 Training Course: Level 1 and Level 2</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="internet-marketing" src="/upcoming_batches_icon/internet-marketing.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Search Engine Optimisation (SEO)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">AWS Certified Developer - Associate</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">AWS Certified SysOps Administrator - Associate</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">AWS Certified Solutions Architect - Professional</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="devops" src="/upcoming_batches_icon/devops.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">AWS Certified DevOps Engineer - Professional</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Scrum Developer Professional By SCRUMVersity</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cyber-security" src="/upcoming_batches_icon/cyber-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">EHP (Ethical Hacking Professional)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="internet-marketing" src="/upcoming_batches_icon/internet-marketing.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">MDM(Masters In Digital Marketing)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="medical-science" src="/upcoming_batches_icon/medical-science.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                Doctor of Medicine (MD) by Metropolitan University College of
                                                                Medicine
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Advanced Scrum Product Owner Professional (ASPOP)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cyber-security" src="/upcoming_batches_icon/cyber-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Masters in Cyber Security</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="software-development" src="/upcoming_batches_icon/software-development.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">JAVA PROGRAMMING CERTIFICATION</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Certified Associate in Project Management (CAPM)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="red-hat" src="/upcoming_batches_icon/red-hat.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">JBoss Middleware Certification</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">LEADING SAFe (SA)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="devops" src="/upcoming_batches_icon/devops.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Devops Practitioner Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="quality-management" src="/upcoming_batches_icon/quality-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                Six Sigma Yellow Belt Certification Training by SixSigmaVersity
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Masters in Cloud Computing</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Advanced Scrum Master Professionals (ASMP)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="data-science" src="/upcoming_batches_icon/data-science.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Data Science with R Certification</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="business-productivity-tools" src="/upcoming_batches_icon/business-productivity-tools.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Advanced Excel Certification</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="devops" src="/upcoming_batches_icon/devops.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Puppet for System Administrators Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="business-intelligence" src="/upcoming_batches_icon/business-intelligence.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Microsoft Power BI Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Configuring BIG-IP APM Access Policy Manager</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">F5 BIG-IP Global Traffic Manager</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="software-testing" src="/upcoming_batches_icon/software-testing.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Ranorex Test Automation Online Training Programs</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                Microsoft Certified Azure Administrator Associate Training
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="software-development" src="/upcoming_batches_icon/software-development.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Blockchain Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="software-testing" src="/upcoming_batches_icon/software-testing.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Selenium Testing Training &amp; Certification</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                Administering Microsoft Exchange Server 2016 Training and
                                                                Certification
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                PowerShell for SharePoint Administrators Training &amp;
                                                                Certification Courses
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">AZ-300 Microsoft Azure Architect Technologies</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                AWS Certified Security - Specialty ( Security Engineering on AWS
                                                                ) Training &amp; Certification
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cyber-security" src="/upcoming_batches_icon/cyber-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Checkpoint Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cyber-security" src="/upcoming_batches_icon/cyber-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Trend Micro Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">JIRA ADMINISTRATION TRAINING</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Oracle Primavera P6 V8 Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="professional-development" src="/upcoming_batches_icon/professional-development.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">BRMP Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="os-and-database" src="/upcoming_batches_icon/os-and-database.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                Automating Administration With Windows Powershell Certification
                                                                Training
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="network-security" src="/upcoming_batches_icon/network-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Blue Coat Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="software-testing" src="/upcoming_batches_icon/software-testing.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">UFT Training and Certification</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">HP Data Protector Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cyber-security" src="/upcoming_batches_icon/cyber-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Implementing the NIST Standards using COBIT 5</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cyber-security" src="/upcoming_batches_icon/cyber-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">COBIT5 Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="software-development" src="/upcoming_batches_icon/software-development.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Robotic Process Automation(RPA) Training using UiPath</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cyber-security" src="/upcoming_batches_icon/cyber-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">COBIT 5 Implementation Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cyber-security" src="/upcoming_batches_icon/cyber-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">COBIT 5 Assessor for Security Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">AWS Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cyber-security" src="/upcoming_batches_icon/cyber-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">COBIT 5 Assessor Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="data-protection" src="/upcoming_batches_icon/data-protection.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">GDPR Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="artificial-intelligence-and-machine-learning" src="/upcoming_batches_icon/artificial-intelligence-and-machine-learning.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Masters in Artificial Intelligence and Machine Learning</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="data-science" src="/upcoming_batches_icon/data-science.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Masters in Data Science Engineering</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="data-science" src="/upcoming_batches_icon/data-science.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Masters in Data Science and Analytics</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="management" src="/upcoming_batches_icon/management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Executive MBA</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="software-development" src="/upcoming_batches_icon/software-development.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Masters in Full stack Development</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="software-development" src="/upcoming_batches_icon/software-development.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">PGP in Mobile App Development</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="networking" src="/upcoming_batches_icon/networking.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">CCNA Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="it-service-management" src="/upcoming_batches_icon/it-service-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ITIL 4 Managing Professional Transition Module Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cyber-security" src="/upcoming_batches_icon/cyber-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">CISA Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cyber-security" src="/upcoming_batches_icon/cyber-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">CISM Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="software-development" src="/upcoming_batches_icon/software-development.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Pega Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Scrum Fundamental Professional by SCRUMVersity</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                Google Cloud Platform Fundamentals (CP100A) Certification
                                                                Training
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="internet-marketing" src="/upcoming_batches_icon/internet-marketing.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">DMF (Digital Marketing Fundamental)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="data-science" src="/upcoming_batches_icon/data-science.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">DSF (Data Science Fundamental)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cyber-security" src="/upcoming_batches_icon/cyber-security.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">CSF (Cyber Security Fundamental)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Cloud Computing Fundamental</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="software-development" src="/upcoming_batches_icon/software-development.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Full Stack Development Fundamental</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="data-science" src="/upcoming_batches_icon/data-science.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">DSEP (Data Science Engineering Professionals)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="data-science" src="/upcoming_batches_icon/data-science.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">DSAP (Data Science Analytics Professionals)</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">CBAP Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                Microsoft Certified Azure Developer Associate AZ-203
                                                                Certification Training
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                Microsoft Certified Azure Architect Design AZ-301 Certification
                                                                Training
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ScrumVersity Agile Leadership Professional</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ScrumVersity Scaled Scrum Professional</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ScrumVersity Kanban Professional</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ScrumVersity Certified Agile Coach</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ScrumVersity Certified Trainer Certification</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Expert Scrum Master Professional By ScrumVersity</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Expert Scrum Product Owner Professional By ScrumVersity</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Expert Scrum Developer Professional By ScrumVersity</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                Program Management Professional Certification Training PgMP
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">Certified Scrum Master® (CSM) Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">SAFe for Architects Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">SAFe DEVOPS CERTIFICATION TRAINING</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">SAFe for Team Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}



                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">SAFe Scrum Master Certification Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cloud-and-virtualization" src="/upcoming_batches_icon/cloud-and-virtualization.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">
                                                                Microsoft Azure Solutions Architect Certification Training for
                                                                AZ 300-301
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="agile-and-scrum" src="/upcoming_batches_icon/agile-and-scrum.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">SAFe® Product Owner/Product Manager Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="software-testing" src="/upcoming_batches_icon/software-testing.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title">ISTQB® Foundation Training</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}
                                    </OwlCarousel>
                                </Tab>


                                <Tab eventKey="Preparations" title="Examen de preparación">
                                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="jee_mains" src="/upcoming_batches_icon/jee_mains.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>JEE MAINS</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="neet" src="/upcoming_batches_icon/neet.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>NEET</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="upsc" src="/upcoming_batches_icon/upsc.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>UPSC</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="ssc" src="/upcoming_batches_icon/ssc.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>SSC</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="gmat" src="/upcoming_batches_icon/gmat.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>GMAT</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="gre" src="/upcoming_batches_icon/gre.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>GRE</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="clat" src="/upcoming_batches_icon/clat.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>CLAT</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="cat" src="/upcoming_batches_icon/cat.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>CAT</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="gate" src="/upcoming_batches_icon/gate.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>GATE</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="ielts" src="/upcoming_batches_icon/ielts.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>IELTS</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="bank_po" src="/upcoming_batches_icon/bank_po.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>BANK PO</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                    </OwlCarousel>
                                </Tab>

                                <Tab eventKey="ktwelve" title="K+12">
                                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>K4</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}



                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>K5</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}



                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>K6</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}



                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>K7</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}



                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>K8</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}



                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>K9</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}



                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>K10</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}



                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>K11</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}



                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="project-management" src="/upcoming_batches_icon/project-management.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>K12</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                    </OwlCarousel>
                                </Tab>

                                <Tab eventKey="kidsLearning" title="Niños aprendiendo">
                                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="kids-skill" src="/upcoming_batches_icon/kids-skill.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>Reasoning Training For Kids</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="kids-skill" src="/upcoming_batches_icon/kids-skill.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>English Training For Kids</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="kids-skill" src="/upcoming_batches_icon/kids-skill.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>Vedic Mathematics Training For Kids</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="kids-skill" src="/upcoming_batches_icon/kids-skill.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>Coding Training For Kids</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="kids-skill" src="/upcoming_batches_icon/kids-skill.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>Mathematics Training For Kids</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="kids-skill" src="/upcoming_batches_icon/kids-skill.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>Abacus Training For Kids</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}



                                    </OwlCarousel>
                                </Tab>

                                <Tab eventKey="Language" title="Idioma">
                                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="languages" src="/upcoming_batches_icon/languages.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>Business English Language Training</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="languages" src="/upcoming_batches_icon/languages.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>Spanish Language Training</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="languages" src="/upcoming_batches_icon/languages.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>French Language Training</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="languages" src="/upcoming_batches_icon/languages.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>German Language Training</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="languages" src="/upcoming_batches_icon/languages.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>Chinese Language Training</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="languages" src="/upcoming_batches_icon/languages.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>Italian Language Training</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="languages" src="/upcoming_batches_icon/languages.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>Russian Language Training</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="languages" src="/upcoming_batches_icon/languages.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>Korean Language Training</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="languages" src="/upcoming_batches_icon/languages.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>Portuguese Language Training</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}

                                        {/* owlitem */}
                                        <div className="owlitem">
                                            <div className="cards h-100 d-flex flex-column w-100">
                                                <div className="mb-1">
                                                    <div className="pt-2 pl-4 rounded-lg">
                                                        <div className="eiml-shadow blue" />
                                                        <img alt="languages" src="/upcoming_batches_icon/languages.png" className="w-1/3 relative top-4 border rounded-full"></img>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                        <div className="flex-grow-1">
                                                            <h3 className="font-bold text-gray-600 course-title"><span>Arabic language Training</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-auto mb-0 py-0'>
                                                    <Link className="durationcou course-type no-underline font-semibold"
                                                        to="/mocktest-register">
                                                        <span>Enroll Now <i className="bi bi-arrow-right ml-2 align-middle"></i></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        {/* end owlitem */}


                                    </OwlCarousel>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>




            {/* TESTIMONIALS */}
            <Testimonial
                title1="TESTIMONIOS" />



            {/* TESTIMONIALS */}
            <div className='newsev-mocktest full-w'>
                {Eventsts ?
                    <Blog
                        heading="NEWS"
                        heading2="AND EVENTS"

                        title1={Event[0].title}
                        url1={'https://my.careerera.com/' + Event[0].image}
                        redirect1={'/news-events/' + Event[0].url}
                        date1={Event[0].Date}

                        title2={Event[1].title}
                        url2={'https://my.careerera.com/' + Event[1].image}
                        redirect2={'/news-events/' + Event[1].url}
                        date2={Event[1].Date}

                        title3={Event[2].title}
                        url3={'https://my.careerera.com/' + Event[2].image}
                        redirect3={'/news-events/' + Event[2].url}
                        date3={Event[2].Date}
                    />
                    : ''}
                <div className='mt-8 text-center'>
                    <Link to="/news-events" className='btn-site gray capitalize no-underline'>
                        <span>Ver todo</span>
                    </Link>
                </div>
            </div>






            {/* background_contact_us */}
            <div className="disclaimer-bx background_contactus_mocktest">
                <div className="container py-16">
                    <div className="row">



                        <div className="col-xl-8 mx-auto col-12">
                            <div className="main_heading bg-white rounded-xl px-4 py-5 px-sm-5 py-sm-5">
                                <h3 className="text-2xl md:text-3xl font-bold text-center">Inscribirse <span className='orange-clrsite'>para prueba simulada</span></h3>
                                <div className="border-t-2 border-gray-300 w-14 mt-3 mb-4 mb-sm-5 mx-auto"></div>

                                {/*main_heading*/}
                                <form className="mocktest_form" action="" method="post" id="Enquire">
                                    <div className="row">
                                        <div className="mb-4 col-12 col-md-6 col-lg-6">
                                            <label className='text-gray-700 font-bold text-base w-100 mb-1'>Nombre de usuario</label>
                                            <input
                                                type="text"
                                                placeholder="Nombre (esto se reflejará en su certificado)"
                                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                        h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base"
                                                required=""
                                                name="Name"
                                                id="name"
                                            />
                                        </div>
                                        {/*cols*/}
                                        <div className="mb-4 col-12 col-md-6 col-lg-6">
                                            <label className='text-gray-700 font-bold text-base w-100 mb-1'>Correo electrónico del usuario</label>
                                            <input
                                                type="email"
                                                placeholder="Correo electrónico *"
                                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                        h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base"
                                                name="Email"
                                                required=""
                                                id="email"
                                            />
                                        </div>
                                        {/*cols*/}
                                        <div className="mb-4 col-12 col-md-6 col-lg-6">
                                            <label className='text-gray-700 font-bold text-base w-100 mb-1'>Contraseña de usuario</label>
                                            <input
                                                type="text"
                                                placeholder="Contraseña de usuario"
                                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                        h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base"
                                                name="Password"
                                                required=""
                                                id="Password"
                                            />
                                        </div>
                                        {/*cols*/}
                                        <div className="mb-4 col-12 col-md-6 col-lg-6">
                                            <label className='text-gray-700 font-bold text-base w-100 mb-1'>Confirmar contraseña</label>
                                            <input
                                                type="text"
                                                placeholder="Confirmar contraseña"
                                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                        h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base"
                                                name="CPassword"
                                                required=""
                                                id="CPassword"
                                            />
                                        </div>
                                        {/*cols*/}
                                        <div className="mb-4 col-12 col-md-6 col-lg-6">
                                            <label className='text-gray-700 font-bold text-base w-100 mb-1'>Número de contacto</label>
                                            <input
                                                type="text"
                                                placeholder="Teléfono *"
                                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                        h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base"
                                                name="Mobile"
                                                id="mobile"
                                                required=""
                                            />
                                        </div>
                                        {/*cols*/}

                                        {cntryLoad ?
                                            <div className="mb-4 col-12 col-md-6 col-lg-6">
                                                <input
                                                    type="hidden"
                                                    name="CountryFullName"
                                                    id="CountryFullName"
                                                    defaultValue=""
                                                />
                                                <label className='text-gray-700 font-bold text-base w-100 mb-1'>País</label>
                                                <Form.Select onChange={setvalPhone} value={selectphoneval} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                        h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base">
                                                    <option selected>Please select your country</option>
                                                    {cntry.map((item, i) =>
                                                        <option value={[item.phonecode, item.country_title]}>{item.country_title}</option>
                                                    )}
                                                </Form.Select>
                                            </div>
                                            : <div className="mb-4 col-12 col-md-6 col-lg-6 text-center align-self-end">
                                                <button className="btn btn-dark shadow-lg" type="button" disabled>
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    <span className="sr-only">Loading...</span>
                                                </button>
                                            </div>}
                                        {/*cols*/}
                                    </div>
                                    {/*row*/}
                                    <p className="text-center mb-0 mt-1">
                                        <button className="btn-site invert capitalize no-underline h-12 rounded-t-3xl">
                                            <span> Enviar mensaje</span>
                                        </button>
                                    </p>
                                    <div className="clear" />
                                    {/*clear*/}
                                </form>
                            </div>

                        </div>


                        {/*cols*/}
                    </div>
                    {/*row*/}
                </div>
                {/*container*/}
            </div>


        </div>
    )
}










