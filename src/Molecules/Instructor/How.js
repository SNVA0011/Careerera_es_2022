import React from 'react'
import application from '../../Images/interview.png'
import discuss from '../../Images/ai.png'
import schedule from '../../Images/tp.png'
import meet from '../../Images/st.png'
import pen from '../../Images/ct.png'
import tool from '../../Images/ca.png'
import Testimonial from '../../Atoms/Testimonial'
import deepak from '../../Images/deepak.png'
import AnimatedNumbers from "react-animated-numbers";

const How = () => {
    return (
        <div className='full-w how-tobecome-teach testimonials-areamock whyobject-sc exc text-center text-black'>
            <div className='py-16'>
                <div className="container">
                    <div className="mt-0">
                        <h1 className="font-bold text-3xl md:text-4xl text-center mb-3 text-black">
                            Cómo convertirse en un <span className="text-blue-500">
                                Careerera
                            </span>
                        </h1>

                        <p className='text-gray-600 mb-2 md:text-lg'>
                            Careerera requiere excelentes habilidades de comunicación y experiencia y conocimientos técnicos prácticos. Un título, además de formación avanzada y experiencia docente son muy deseables. Debe poder enseñar un mínimo de 6 semanas por año, con un compromiso de 8-14 semanas de preferencia.
                        </p>
                        <h4 className="font-semibold text-base">
                            Nuestro Proceso de Selección y Formación
                        </h4>

                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                    </div>

                    <div className="row pt-10">
                        <div className="col-xl-4 col-md-6 col-12 mb-3 rounded-2xl">
                            <div className="justify-content-center flex">
                                <img alt='Interview' src={application} className="" width="80" />
                            </div>
                            <div className="text-center partner mt-2 rounded-2xl p-4">
                                <h4 className="font-bold  ">Entrevista</h4>
                                <p className="leading-relaxed">
                                    Primero, entrevistamos a los candidatos para asegurarnos de que tengan sólidas habilidades de comunicación para que puedan transmitir su experiencia de manera efectiva.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 col-12 mb-3 rounded-2xl ">
                            <div className="justify-content-center flex">
                                <img alt='Author Interview' src={schedule} className="" width="80" />
                            </div>
                            <div className="text-center partner mt-3 rounded-2xl p-4">
                                <h4 className="font-bold  ">Entrevista al autor</h4>
                                <p className="leading-relaxed">
                                    A continuación, el autor del curso lleva a todos los candidatos a través de
                                    una lista de verificación detallada para asegurarse de que tienen tanto la
                                    conocimientos técnicos y experiencia laboral práctica
                                    necesarios para impartir el curso.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 col-12 mb-3 rounded-2xl">
                            <div className="justify-content-center flex">
                                <img alt='Train-the-Trainer Program' src={discuss} className="" width="80" />
                            </div>
                            <div className="text-center partner mt-3 rounded-2xl p-4">
                                <h4 className="font-bold  ">Programa de formación de formadores</h4>
                                <p className="leading-relaxed">
                                    Todos los candidatos luego pasan por nuestro intensivo
                                    Programa Train-the-Trainer donde aprenden los
                                    últimas técnicas en Aprendizaje Activo. Graduarse,
                                    deben entregar tres presentaciones del curso y
                                    recibir excelentes valoraciones.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-12 mb-3 rounded-2xl   ">
                            <div className="justify-content-center flex">
                                <img alt='Course Audit' src={tool} className="" width="80" />
                            </div>
                            <div className="text-center partner mt-4 rounded-2xl p-4">
                                <h4 className="font-bold">Auditoría del curso</h4>
                                <p className="leading-relaxed">
                                    Los candidatos exitosos luego auditan el curso que
                                    enseñará y presentará parte del curso para
                                    evaluación por parte del instructor principal para un
                                    evaluación.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 col-12 mb-3 rounded-2xl ">
                            <div className="justify-content-center flex">
                                <img alt='Co-Teach' src={pen} className="" width="80" />
                            </div>
                            <div className="text-center partner mt-4 rounded-2xl p-4">
                                <h4 className="font-bold">co-enseñar</h4>
                                <p className="leading-relaxed">
                                    Los candidatos más exitosos enseñan juntos un
                                    curso con un instructor experimentado que actúe como
                                    su mentor Presentan la mitad o más de los
                                    curso para su evaluación por el instructor senior.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 col-12 mb-3  rounded-2xl  ">
                            <div className="justify-content-center flex">
                                <img alt='Solo Teac' src={meet} className="" width="80" />
                            </div>
                            <div className="text-center partner mt-4 rounded-2xl p-4">
                                <h4 className="font-bold">Enseñar solo</h4>
                                <p className="leading-relaxed">
                                    Finalmente, el candidato es asignado a una enseñanza individual.
                                    Los asistentes al curso completan evaluaciones detalladas de todos los instructores, y estas se utilizan para identificar actividades de desarrollo en curso que mejoran constantemente sus puntajes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='training-room'>
                <div className="why-datasciencesuf whatwe scroll-spbx bg-blue-50">
                    <div className="container py-28">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="main_heading heading_center mb-5">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    Que tenemos <span className='text-yellow-400'>Logrado hasta ahora</span></h2>
                                    <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-3">
                                <ul className="counter_number px-0 mb-3">
                                    <li className="font-bold text-4xl md:text-5xl mb-1 text-blue-300">
                                        <div className='animated_numberscenter w-100'>
                                            <AnimatedNumbers animateToNumber={253851}></AnimatedNumbers>
                                        </div>
                                    </li>
                                    <li className=" text-lg md:text-lg text-white">Usuarios Registrados</li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-3">
                                <ul className="counter_number px-0 mb-3">
                                    <li className="font-bold text-4xl md:text-5xl mb-1 text-blue-300">
                                        <div className='animated_numberscenter w-100'>
                                            <AnimatedNumbers animateToNumber={146}></AnimatedNumbers>
                                        </div>
                                    </li>
                                    <li className=" text-lg md:text-lg text-white">Cursos Disponibles</li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-3">
                                <ul className="counter_number px-0 mb-3">
                                    <li className="font-bold text-4xl md:text-5xl mb-1 text-blue-300">
                                        <div className='animated_numberscenter w-100'>
                                            <AnimatedNumbers animateToNumber={1054}></AnimatedNumbers>
                                        </div>
                                    </li>
                                    <li className=" text-lg md:text-lg text-white">Próximas Clases</li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-3">
                                <ul className="counter_number px-0 mb-3">
                                    <li className="font-bold text-4xl md:text-5xl mb-1 text-blue-300">
                                        <div className='animated_numberscenter w-100'>
                                            <AnimatedNumbers animateToNumber={47}></AnimatedNumbers>
                                        </div>
                                    </li>
                                    <li className=" text-lg md:text-lg text-white">aprendizaje electronico</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden ppt-clistaff d-none'>
                        <div className="shape-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                <path className="shape-fill" fill="#efefef" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                            </svg>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default How




