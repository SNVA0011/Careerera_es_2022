import React from 'react'
import application from '../../Images/application.png'
import discuss from '../../Images/discuss.png'
import schedule from '../../Images/schedule.png'
import meet from '../../Images/meet.png'
import pen from '../../Images/pen.png'
import tool from '../../Images/tool.png'
import Testimonial from '../../Atoms/Testimonial'
import deepak from '../../Images/deepak.png'

const Partnership = () => {
    return (
        <div className="full-w partnership-withus">

            <div className='application_process_sec full-w start-yourcareer partnership-reach'>
                <div className="container py-16">

                    <div className="sec_title text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">
                        Proceso de asociación  <span className="orange-clrsite">comercial</span>
                        </h2>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                    </div>
 
                    <div className="pt-4 row justify-content-center">
                        <div className='justify-items-center col-xxl col-lg-4 col-md-6 col-12 text-center pt-3 rounded-lg mb-2'>

                            <div className="tt-iconbox-customimg">
                                <img alt='Application for the Partnership' src={application} className="img-round" width="48" />
                            </div>
                            <div className="full-w">
                                <h4 className="text-gray-700 font-bold text-lg md:text-xl mb-2">Solicitud de la Asociación</h4>
                                <p className='md:text-lg text-gray-500 font-medium'>Comuníquese con el representante de Careera/Complete y envíe el formulario de asociación comercial en el sitio web</p>
                            </div>

                        </div>

                        <div className='justify-items-center col-xxl col-lg-4 col-md-6 col-12 text-center pt-3 rounded-lg mb-2'>

                            <div className="tt-iconbox-customimg">
                                <img alt='Schedule a Meeting Online' src={schedule} className="img-round" width="48" />
                            </div>
                            <div className="full-w">
                                <h4 className="text-gray-700 font-bold text-lg md:text-xl mb-2">Programar una reunión en línea</h4>
                                <p className='md:text-lg text-gray-500 font-medium'>El panel de carrera te invitará a una discusión y evaluación.</p>
                            </div>

                        </div>

                        <div className='justify-items-center col-xxl col-lg-4 col-md-6 col-12 text-center pt-3 rounded-lg mb-2'>

                            <div className="tt-iconbox-customimg">
                                <img alt='Discus and Supply the Documents' src={discuss} className="img-round" width="48" />
                            </div>
                            <div className="full-w">
                                <h4 className="text-gray-700 font-bold text-lg md:text-xl mb-2">Discuta y suministre los documentos</h4>
                                <p className='md:text-lg text-gray-500 font-medium'>Publicar la discusión, encuesta e inspección de los locales propuestos.</p>
                            </div>

                        </div>



                        <div className='justify-items-center col-xxl col-lg-4 col-md-6 col-12 text-center pt-3 rounded-lg mb-2'>

                            <div className="tt-iconbox-customimg">
                                <img alt='Start Your Operation' src={tool} className="img-round" width="48" />
                            </div>
                            <div className="full-w">
                                <h4 className="text-gray-700 font-bold text-lg md:text-xl mb-2">Inicia tu operación</h4>
                                <p className='md:text-lg text-gray-500 font-medium'>Plan de negocio detallado y estudio de viabilidad y sostenibilidad realizado por el equipo de Careerera</p>
                            </div>

                        </div>

                        <div className='justify-items-center col-xxl col-lg-4 col-md-6 col-12 text-center pt-4 rounded-lg'>

                            <div className="tt-iconbox-customimg">
                                <img alt='Go Through the agreement and Sign it' src={pen} className="img-round" width="48" />
                            </div>
                            <div className="full-w">
                                <h4 className="text-gray-700 font-bold text-lg md:text-xl mb-2">Ir a través del acuerdo y firmarlo</h4>
                                <p className='md:text-lg text-gray-500 font-medium'>Tras la aceptación mutua, proceder con el acuerdo oficial y la documentación requerida.</p>
                            </div>
                        </div>

                       

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

            <div className='indexhome'>

                <div className="querysign-full full-w partnetapk-area">

                    <div className="container py-14  text-center">

                        <div className="sec_title">
                            <h2 className="text-2xl md:text-3xl font-bold">
                            HABLA DE <span className="orange-clrsite">SOCIO</span>
                            </h2>
                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                        </div>


                        <div className='row text-left pt-3'>
                            <div className='col-xl-3 col-12'>
                                <div className="justify-content-center mt-8">
                                    <img src={deepak} alt='author_pic' className="rounded-circle mx-auto" />                                   
                                </div>
                            </div>
                            <div className='col-xl-9 col-12 mt-4 mt-xl-0'>
                                <div className='services-movingr'>
                                    <div className='position-relative text-center text-xl-left'>
                                        <p className="text-2xl md:text-3xl font-bold">
                                            DEEPAK JHA
                                            <span className="heading-border-line d-none d-md-inline-block"></span>
                                        </p>

                                        <p className="font-medium text-lg text-gray-500 mb-0 text-justify">
                                        Había estado observando a los estudiantes de mi ciudad que sufrían de una falta
                                            de proveedores educativos de alta calidad durante varios años.
                                            Los padres indios son muy particulares a la hora de desear lo mejor
                                            posibles criterios educativos para sus hijos y
                                            no deje piedra sin remover en esta búsqueda de excelencia
                                            educación. Traté de remediar el problema proporcionando
                                            educación en línea relativamente económica y de primer nivel
                                            módulos formando un vínculo con Careerera. Carrera tiene una
                                            merecida reputación como proveedor educativo que
                                            no compromete ni una sola pulgada en calidad mientras
                                            entregando materiales de estudio de clase mundial junto con estelar
                                            e instructores calificados que guían a los estudiantes de manera experta
                                            y efectivamente a través de currículos de cursos bien diseñados. Mi
                                            La experiencia de la alianza con Careerera ha sido
                                            inequívocamente positivo y beneficioso.
                                        </p>

                                        <hr></hr>

                                        <div className='full-w text-center d-flex justify-content-between align-items-center flex-column flex-sm-row'>
                                        <h3 className="text-lg font-semibold text-gray-600 mb-1 mb-sm-0">
                                        Sigue a nuestra compañera
                                        </h3>

                                        <div className="rounded-social-buttons text-center m-0">
                                            <a
                                                className="shadow-md social-button facebook text-center"
                                                href="https://www.facebook.com/careerera"
                                                target="_blank">

                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a
                                                className="shadow-md social-button twitter"
                                                href="https://twitter.com/Careerera1"
                                                target="_blank">

                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a
                                                className="shadow-md social-button linkedin mr-0"
                                                href="https://www.linkedin.com/company/careerera"
                                                target="_blank">

                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
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
export default Partnership





                                

                                

                                

                                

                                

                                