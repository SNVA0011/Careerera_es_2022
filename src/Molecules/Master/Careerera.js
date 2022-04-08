import React, { useContext } from "react";
import { Context } from "../../Api";

const Careerera = (props) => {

    return (
        <>
            <div className="full-w enroll-sduwhy scroll-spbx" id="Careera">
                <div className="container py-16">
                    <div className="text-left">
                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-capitalize">Por qué <span className="text-blue-500 sitblu-clrsite">Careerera</span>
                        </p>
                        {props.lomejores ?
                            <p className="text-base md:text-lg font-semibold text-gray-600">{props.lomejores}</p>
                            :
                            <p className="text-base md:text-lg font-semibold text-gray-600">Aprenda de los mejores profesores de todo el mundo.</p>
                        }
                    </div>
                    <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    <div className="row pt-1">
                        <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center mb-4">
                            <i className="fas fa-users fa-2x border-1 border-white rounded-full bg-blue-500 p-4 text-white "></i>

                            {props.incluyen ?
                                <div className="pt-10 px-3 text-white bg-gray-100 bg-blue-100">
                                    <h3 className="text-gray-700 font-bold text-lg">{props.incluyen1}</h3>
                                    <p className="text-blue-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0">{props.incluyenpara1}</p>
                                </div>
                                :
                                <div className="pt-10 px-3 text-white bg-gray-100 bg-blue-100">
                                    <h3 className="text-gray-700 font-bold text-lg">USUARIOS</h3>
                                    <p className="text-blue-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0">250000+</p>
                                </div>
                            }
                        </div>
                        <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center mb-4">
                            <i className="fas fa-trophy fa-2x border-1 border-white rounded-full bg-red-500 p-4 text-white "></i>

                            {props.incluyen ?
                                <div className="pt-10 px-3 text-white bg-gray-100 bg-red-100">
                                    <h3 className="text-gray-700 font-bold text-lg">{props.incluyen2}</h3>
                                    <p className="text-red-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0">{props.incluyenpara2}</p>
                                </div>
                                :
                                <div className="pt-10 px-3 text-white bg-gray-100 bg-red-100">
                                    <h3 className="text-gray-700 font-bold text-lg">PROGRAMAS MEJOR CLASIFICADOS</h3>
                                    <p className="text-red-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0">10</p>
                                </div>
                            }
                        </div>
                        <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center mb-4">
                            <i className="fas fa-user-shield fa-2x border-1 border-white rounded-full bg-green-500 p-4 text-white "></i>

                            <div className="pt-10 px-3 text-white bg-gray-100 bg-green-100">
                                {props.cursotitle3 ?
                                    <h3 className="text-gray-700 font-bold text-lg">
                                        {props.cursotitle3}
                                    </h3>
                                    :
                                    <h3 className="text-gray-700 font-bold text-lg">
                                        SOCIOS DE CONTRATACIÓN
                                    </h3>
                                }
                                {props.curso ?
                                    <p className="text-green-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0">{props.cursoval}+</p>
                                    :
                                    <p className="text-green-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0">200+</p>
                                }
                            </div>
                        </div>
                        <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center mb-4">
                            <i className="fas fa-medal fa-2x border-1 border-white rounded-full bg-purple-500 p-4 text-white "></i>

                            <div className="pt-10 px-3 text-white bg-gray-100 bg-purple-100">
                                {props.curso ?
                                    <h3 className="text-gray-700 font-bold text-lg">
                                        {props.cursotitle4}
                                    </h3>
                                    :
                                    <h3 className="text-gray-700 font-bold text-lg">
                                        MEJOR FACULTAD DE LA INDIA
                                    </h3>
                                }
                                {props.incluyen ?
                                    <p className="text-purple-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0">{props.incluyenpara4}</p>
                                    :
                                    <p className="text-purple-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0">1000+</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Careerera;

