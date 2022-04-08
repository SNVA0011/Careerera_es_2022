import React from 'react'
import whypartner from '../../Images/whypartner.jpg'
import toplayer from '../../Images/mocktest/top-layer.png'

const Why = () => {
    return (
        <div className='testimonials-areamock whyobject-sc learnus' id='online_education'>
            <div className="shape-bottom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path className="shape-fill" fill="#fff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path></svg></div>

            <div className='full-w overflow-hidden'>
                <div className="container py-16">

                    <div className="sec_title text-center">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase">
                            POR QUÉ ASOCIARSE <span className="orange-clrsite">CON NOSOTROS</span>
                        </h2>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                    </div>

                    <div className='inner-cont'>
                        <div className="row pt-4">
                            <div className="col-lg-7 col-12 reqhelp-mn">
                                <h3 className="text-xl md:text-2xl light font-bold tracking-wide d-block">
                                    <span className="sitblu-clrsite">
                                        Objetivo de la asociación</span>
                                </h3>
                                <span className="heading-border-line d-block left-0 mt-2 mb-4" />
                                <p className="md:text-lg text-gray-700 font-medium">
                                    Una enorme y creciente comunidad de estudiantes, ya sean recién
                                    graduados, posgraduados, profesionales en activo o cualquier persona
                                    interesada en actualizar sus conocimientos y habilidades, está
                                    constantemente en busca de cursos y programas educativos que aborden e
                                    incorporen el aprendizaje contemporáneo que mejorará su Cociente de
                                    Empleabilidad y /o mejorar el crecimiento profesional.</p>
                                <p className="md:text-lg text-gray-700 font-medium">Careerera se ha asociado con varios líderes de la industria e
                                    instituciones académicas para cocrear programas a corto plazo
                                    específicos de la industria que aborden la brecha entre la educación y
                                    la empleabilidad de la industria.{" "}
                                    Con la visión de explorar y explotar el enorme potencial de la
                                    economía del conocimiento, Careerera busca asociarse con empresarios
                                    de ideas afines y aprovechar las sinergias para el crecimiento y el
                                    desarrollo mutuos.</p>
                            </div>
                            <div className="col-lg-5 col-12 text-lg font-semibold mt-5 mt-lg-0">
                                <div className="row">
                                    <div className="col-xl-11 col-12 position-relative">
                                        <h3 className="text-2xl light font-bold tracking-wide d-block sitblu-clrsite mt-3 mb-0">Beneficios</h3>
                                        <span className="heading-border-line d-block left-0 mt-2 mb-4"></span>
                                        <img src={toplayer} className='dotstp' alt='dots-texture' width='70'></img>
                                        <img src={whypartner} alt='WHY PARTNER WITH US' className="mt-4 rounded-2xl full-w position-relative z-10 shadow-image-lgright" />
                                        <div className='text-right'>
                                            <img src={toplayer} className='dotstp d-inline-block right' width='70'></img>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold tracking-normal mb-3 ">Cómo puedes beneficiarte de este programa:</h3>
                                <ul className="p-0 font-medium text-base md:text-lg">
                                    <li className="d-flex mb-2">
                                        <i className="bi bi-check-circle-fill mr-3 text-2xl orange-clrsite" />
                                        Agregue una ruta paralela de ingresos a su negocio existente.</li>
                                    <li className="d-flex mb-2">
                                        <i className="bi bi-check-circle-fill mr-3 text-2xl orange-clrsite" />
                                        Conviértete en Channel Partner de una prestigiosa marca.</li>
                                    <li className="d-flex mb-2">
                                        <i className="bi bi-check-circle-fill mr-3 text-2xl orange-clrsite" />
                                        Presente una amplia selección de soluciones de aprendizaje
                                        innovadoras a sus clientes empresariales existentes.</li>
                                </ul>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}
export default Why
