import React, { useContext } from "react";
import { Context } from "../../Api";
import csr from "../../Images/CyberSecurityRole.png"


const Light = (props) => {

    return (
        <div className="alumni-highlights bg-blue-50">
            <div className="container py-16">

                {props.lightprofcurso ?
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            {props.ltitle} <span className="orange-clrsite">{props.ltitlesub}</span>
                        </h2>
                        <hr className="w-20 hr mb-5 mb-lg-0 bg-blue-400 sepfoll-hr" />
                    </div>

                    :
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Alumni <span className="orange-clrsite">Reflejos</span>
                        </h2>
                        <hr className="w-20 hr mb-5 mb-lg-0 bg-blue-400 sepfoll-hr" />
                    </div>
                }


                <div className="row align-items-center"> 
                    {
                        props.lightseguridad ?
                            <div className="col-lg-4 col-12">
                                <div>
                                    <span className='text-red-500 text-2xl font-semibold'>{props.seguridadtitle1}</span>
                                    <p className='text-gray-600 text-sm sm:text-lg font-medium'>
                                        {props.seguridadpara1}
                                    </p><div className="w-100 border-1 mb-3 border-dashed border-gray-300" />
                                </div>
                                <div>
                                    <span className='text-blue-500 text-2xl font-semibold'>{props.seguridadtitle2}</span>
                                    <p className='text-gray-600 text-sm sm:text-lg font-medium'>
                                        {props.seguridadpara2}
                                    </p><div className="w-100 border-1 mb-3 border-dashed border-gray-300" />
                                </div>
                                <div>
                                    <span className='text-yellow-500 text-2xl font-semibold'>{props.seguridadtitle3}</span>
                                    <p className='text-gray-600 text-sm sm:text-lg font-medium'>
                                        {props.seguridadpara3}
                                    </p><div className="w-100 border-1 mb-3 border-dashed border-gray-300" />
                                </div>
                                <div>
                                    <span className='text-green-500 text-2xl font-semibold'>{props.seguridadtitle4}</span>
                                    <p className='text-gray-600 text-sm sm:text-lg font-medium'>
                                       {props.seguridadpara4}
                                    </p>
                                </div>
                            </div>
                            :
                            <div className="col-lg-4 col-12">
                                <div>
                                    <span className='text-red-500 text-2xl font-semibold'>200+</span>
                                    <p className='text-gray-600 text-sm sm:text-lg font-medium'>
                                        Empresas participantes
                                    </p><div className="w-100 border-1 mb-3 border-dashed border-gray-300" />
                                </div>
                                <div>
                                    <span className='text-blue-500 text-2xl font-semibold'>$122K PA </span>
                                    <p className='text-gray-600 text-sm sm:text-lg font-medium'>
                                        CTC promedio
                                    </p><div className="w-100 border-1 mb-3 border-dashed border-gray-300" />
                                </div>
                                <div>
                                    <span className='text-yellow-500 text-2xl font-semibold'>$250K</span>
                                    <p className='text-gray-600 text-sm sm:text-lg font-medium'>
                                        CTC más alto
                                    </p><div className="w-100 border-1 mb-3 border-dashed border-gray-300" />
                                </div>
                                <div>
                                    <span className='text-green-500 text-2xl font-semibold'>87%</span>
                                    <p className='text-gray-600 text-sm sm:text-lg font-medium'>
                                        Aumento del salario promedio
                                    </p>
                                </div>
                            </div>
                    }

                    <div className="col-lg-8 col-12">
                        {props.image ?
                            <img src={props.image} alt='roles_offer_cyber_security' className='mx-auto d-block' />
                            :
                            <img src={csr} alt='roles_offer_cyber_security' className='mx-auto d-block' />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Light;


