import React from 'react'
import requiremnet1 from '../../Images/requirement-1.png'
import requiremnet2 from '../../Images/requirement-2.png'
import requiremnet3 from '../../Images/requirement-3.png'

const Requirement = () => {
    return (
        <div className='indexhome'>
            <div className="regiavail full-w regiavail-eligi"> 
                <div className="sec_title">
                    <h2 className="orange-clrsite text-base text-xl font-semibold ">Elegibilidad </h2>
                    <p className='text-2xl lg:text-3xl font-bold'>Para calificar como socio de canal autorizado, para Careerera for business:</p>
                    <span className="heading-border-line d-block left-0 mt-3 mb-5"></span>
                </div>

                <ul className="p-0 text-gray-700 leading-relaxed m-0">
                    <li className="font-medium text-base mb-5">
                        <div className='d-flex'>
                            <i className="bi bi-people text-5xl mr-3 text-blue-500"></i>
                            <div>
                                <h4 className='pt-1 font-bold text-xl capitalize mb-1'>Gran red comercial</h4>
                                <p className=' text-gray-500 font-medium mb-0'>Una gran red comercial con empresas.</p>
                            </div>
                        </div>
                    </li>
                    <li className="font-medium text-base mb-5">
                        <div className='d-flex'>
                            <i className="bi bi-shield-fill-check text-5xl mr-3 text-blue-500"></i>
                            <div>
                                <h4 className='pt-1 font-bold text-xl capitalize mb-1'>Un negocio calificado y creíble</h4>
                                <p className=' text-gray-500 font-medium mb-0'>Funcionamiento durante un mínimo de 3-4 años.</p>
                            </div>
                        </div>
                    </li>
                    <li className="font-medium text-base">
                        <div className='d-flex'>
                            <i className="bi bi-graph-up-arrow text-5xl mr-3 text-blue-500"></i>
                            <div>
                                <h4 className='pt-1 font-bold text-xl capitalize mb-1'>Experiencia en el manejo de empresas</h4>
                                <p className=' text-gray-500 font-medium mb-0'>Ofertas por encima de INR 25 lacs</p>
                            </div>
                        </div>
                    </li>
                </ul>
 
            </div>

        </div>

    )
}
export default Requirement
