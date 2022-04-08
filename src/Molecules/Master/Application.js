import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Api";
import Applybyfilling from './../../Images/Apply-by-filling.png'
import Admissions from './../../Images/Admissions.png'
import Shortlisted from './../../Images/Shortlisted.png'
import Screeningcall from './../../Images/Screening-call.png'

const Application = () => {
    return (
        <>
            {/* application_process_sec */}
            <div className='application_process_sec scroll-spbx bg-gray-50' id='application'>
                <div className='container py-16'>
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold">Aplicación <span className="orange-clrsite">Proceso</span></h2>
                        <p className="text-gray-500 text-base md:text-lg fw-medium">Inscríbase en el programa con un sencillo formulario en línea.</p>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>

                    <div className="pt-0">
                        <div className="row pt-1">
                            {/* first */}
                            <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                                <div className='tt-iconbox-customimg'>
                                    <img className="img-round" src={Applybyfilling} />
                                </div>
                                <div className="full-w">
                                    <h4 className='text-gray-700 font-bold text-base mb-0'>Aplicar llenando un
                                        sencillo en línea
                                        formulario de solicitud</h4>
                                </div>
                            </div>

                            {/* second */}
                            <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                                <div className='tt-iconbox-customimg'>
                                    <img className="img-round" src={Admissions} />
                                </div>
                                <div className="full-w">
                                    <h4 className='text-gray-700 font-bold text-base mb-0'>admisiones
                                        el comité lo hará
                                        revisión y
                                        lista corta.</h4>

                                </div>
                            </div>
                            {/* third */}
                            <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                                <div className='tt-iconbox-customimg'>
                                    <img className="img-round" src={Shortlisted} />
                                </div>
                                <div className="full-w">
                                    <h4 className='text-gray-700 font-bold text-base mb-0'>preseleccionado
                                        los candidatos necesitan
                                        comparecer por un
                                        aptitud en línea
                                        prueba.</h4>

                                </div>
                            </div>
                            {/* fourth */}
                            <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                                <div className='tt-iconbox-customimg'>
                                    <img className="img-round" src={Screeningcall} />
                                </div>
                                <div className="full-w">
                                    <h4 className='text-gray-700 font-bold text-base mb-0'>Llamada de proyección con Alumni/Facultad</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Application;

