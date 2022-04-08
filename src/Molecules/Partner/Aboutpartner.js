import React from 'react'
import Requirement from '../Partner/Requirement'

export default function Aboutpartner() {
    return (
        <div className="discription_sec">
            <div className="container pb-16 pt-12">
                <div className='row'>
                    <div className='col-xl-6 col-12 reqhelp-mn'>
                        <div className="sec_title">
                            <h3 className="text-2xl md:text-3xl font-bold">
                                Sobre <span className="orange-clrsite">nosotras</span>
                            </h3>
                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                        </div>
                        <div className="course_content_area pt-2 md:text-lg text-gray-700 font-medium">
                            <p>Careerera es uno de los principales proveedores de capacitación de certificación profesional de educación superior y otra capacitación de habilidades para graduados y profesionales en activo en el campo de TI, administración, desarrollo de software, administración de proyectos, control de calidad, y la lista continúa. </p>
                            <p>Al ser socio de algunas de las principales universidades y organismos de certificación, la organización tiene como objetivo facilitar una formación de calidad a los profesionales de todo el mundo. Careerera tiene sus estudiantes en línea en 60 países, incluidos América, Canadá, Europa y la región de Asia Pacífico. Tiene un historial de capacitación exitosa de miles de profesionales a través de capacitación presencial y en línea. Careerera le da la bienvenida a unirse a uno de los mayores sistemas de educación en línea en vivo. </p>
                            <p>Desde sus inicios, la organización se dedica a desarrollar metodologías de aprendizaje de última generación al involucrar a los estudiantes y profesores experimentados y facilitar a las personas y a la empresa materiales de capacitación de alta calidad, lo que a su vez ha ayudado profesionales para lograr sus objetivos de carrera y convertirse en un profesional. </p>
                        </div>
                    </div>
                    <div className='col-xl-6 col-12 reqhelp bg-gray-50 mt-4 mt-xl-0'>
                        <Requirement />
                    </div>
                </div>

            </div>
        </div>

    )
}
