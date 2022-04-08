import React from 'react'
import application from '../../Images/formpen.png'
import discuss from '../../Images/network.png'
import schedule from '../../Images/workforce.png'
import meet from '../../Images/calculate.png'
import pen from '../../Images/way.png'
import tool from '../../Images/skill.png'
import Testimonial from '../../Atoms/Testimonial'
import deepak from '../../Images/deepak.png'

const Reason = () => {
    return (
        <div className='full-w greatan-instructor'>

            <div className="container py-16">
                <h1 className="font-bold text-3xl md:text-4xl text-center mb-5 text-black">
                    Grandes razones para convertirse en un <span className="text-blue-500">
                        entrenador de carrera
                    </span>
                    <div className="border-t-2 border-gray-400 w-14 mt-3 mb-2 mx-auto"></div>
                </h1>


                <div className="row">
                    <div className='col-xl-4 col-lg-6 col-12 mb-4'>
                        <div className=" bg-white-fullw h-100 d-flex">
                            <div className="justify-content-center">
                                <span className="rotateme"></span>
                                <img
                                    src={application}
                                    alt='Realize big rewards for a part-time assignment'
                                    className="bg-red-500 card-img-top"
                                />
                            </div>
                            <div className="text-left pl-5">
                                <h4 className="font-semibold text-xl md:text-2xl mb-2">Obtenga grandes recompensas por una asignación de medio tiempo.</h4>

                                <p className="text-base">Como instructor de Careerera, enseñará de 4 a 14 semanas o más
                                    por año. Eres libre de gastar la mayor parte de tu
                                    tiempo buscando otras oportunidades profesionales y
                                    objetivos.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-6 col-12 mb-4'>
                        <div className="bg-white-fullw h-100 d-flex">
                            <div className="justify-content-center">
                                <span className="rotateme"></span>
                                <img
                                    src={schedule}
                                    alt='Network with top IT professionals from Fortune 1000  companies'
                                    className="bg-blue-500  card-img-top"
                                />
                            </div>
                            <div className="text-left pl-5">
                                <h4 className="font-semibold text-xl md:text-2xl mb-2">Red con los mejores profesionales de TI de Fortune 1000 empresas.</h4>

                                <p className="text-base">Haga crecer su práctica de consultoría desde el aula.
                                    Obtenga nuevos clientes mientras demuestra experiencia y
                                    habilidades de enseñanza que muestran su consultoría
                                    talentos.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-6 col-12 mb-4'>
                        <div className=" bg-white-fullw h-100 d-flex">
                            <div className="justify-content-center">
                                <span className="rotateme"></span>
                                <img
                                    src={discuss}
                                    alt='Enjoy full logistical and operational support for flawless course execution'
                                    className="bg-green-500  card-img-top"
                                />
                            </div>
                            <div className="text-left pl-5">
                                <h4 className="font-semibold text-xl md:text-2xl mb-2">Disfrute de todo el apoyo logístico y operativo para ejecución impecable del curso.</h4>

                                <p className="text-base">Concéntrate en lo que haces mejor en el aula.
                                    ...¡enseñando! Careerera gestiona el desarrollo del curso,
                                    incluye hardware, software y notas del curso, además
                                    coordina el viaje y el alojamiento, y nos encargamos de todo
                                    los detalles necesarios para asegurar su éxito en el
                                    salón de clases.</p>
                            </div>
                        </div>
                    </div>


                    <div className='col-xl-4 col-lg-6 col-12 mb-4'>
                        <div className="bg-white-fullw  h-100 d-flex">
                            <div className="justify-content-center">
                                <span className="rotateme"></span>
                                <img
                                    src={tool}
                                    alt='Expand your skills'
                                    className="bg-purple-500  card-img-top"
                                />
                            </div>
                            <div className="text-left pl-5">
                                <h4 className="font-semibold text-xl md:text-2xl mb-2">Amplíe sus habilidades.</h4>

                                <p className="text-base">Careera fomenta tu crecimiento profesional. Tú
                                    tendrá la oportunidad de auditar muchos de nuestros
                                    cursos, dentro o fuera de su campo de especialización. Nosotros
                                    también ofrecen programas de capacitación y tutoría
                                    diseñado para mantener su enseñanza y presentación
                                    habilidades en los niveles máximos. Incluso puede solicitar unirse
                                    las filas de autores de cursos y editores técnicos.
                                    Seleccionamos a todos nuestros autores y editores de nuestra
                                    cuerpo de instructores.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-6 col-12 mb-4'>
                        <div className="bg-white-fullw  h-100 d-flex">
                            <div className="justify-content-center">
                                <span className="rotateme"></span>
                                <img
                                    src={pen}
                                    alt='Find scheduling flexibility'
                                    className="bg-yellow-500  card-img-top"
                                />
                            </div>
                            <div className="text-left pl-5">
                                <h4 className="font-semibold text-xl md:text-2xl mb-2">Encuentre flexibilidad de horarios.</h4>

                                <p className="text-base">Un coordinador de programación dedicado a su(s) curso(s)
                                    y sensible a su disponibilidad individual
                                    trabajar con usted en horarios a corto y largo plazo.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-6 col-12 mb-4'>
                        <div className=" pt-10 bg-white-fullw  h-100 d-flex   ">
                            <div className="justify-content-center">
                                <span className="rotateme"></span>
                                <img
                                    src={meet}
                                    alt='Gain immediate access to the latest advances in software and hardwar'
                                    className="bg-red-500 card-img-top"
                                />
                            </div>
                            <div className="text-left pl-5">
                                <h4 className="font-semibold text-xl md:text-2xl mb-2">Obtenga acceso inmediato a los últimos avances en software y hardware</h4>

                                <p className="text-base">Carrera inicia instrucción en nuevas tecnologías
                                    a menudo antes de que el producto se ofrezca a la venta pública.
                                    Tienes acceso a toda la información específica del curso,
                                    historial y actualizaciones. También tienes una línea abierta de
                                    comunicación a los autores del curso, editores técnicos
                                    y gerentes de desarrollo de productos.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default Reason














