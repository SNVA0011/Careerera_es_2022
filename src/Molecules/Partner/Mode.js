import React from 'react'
import onlineimage from '../../Images/onlineimage.png'

const Mode = () => {
    return (
        <div className='online-programus'>
            <div className="container py-16">
                <div className="sec_title text-center">
                    <h2 className="text-2xl md:text-3xl font-bold">
                      MODO <span className="orange-clrsite">DE ENTREGAS</span>
                    </h2>
                    <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                </div>

                <div className="row text-left text-black align-items-center pt-6">
                    <div className="text-center col-lg-6 col-12 xl:border-r-2 xl:border-gray-200 pb-3 pb-lg-0">
                        <img src={onlineimage} className="mx-auto" alt='MODO DE ENTREGAS' />
                    </div>

                    <div className="col-lg-6 col-12  mt-4 mt-lg-0">
                        <div className='d-flex px-lg-4 flex-column flex-xl-row'>
                            <div className='left pr-xl-5'>
                                <i className="bi bi-person-workspace text-5xl text-blue-400"></i>
                            </div>
                            <div className='leftcontent text-center text-xl-left'>
                                <div className="sec_title">
                                    <p className="text-xl lg:text-2xl font-semibold mt-2 mb-0">
                                    Entrega en línea
                                    </p>
                                </div>

                                <p className="pt-2 mb-0 block md:text-lg font-medium leading-loose text-gray-500">
                                La tecnología nos ha ayudado a llegar a estudiantes de todo el mundo con
                                     sesión de clase en línea en vivo. Ofertas de carrera
                                     programa dirigido por un instructor para tener un cara a cara
                                     interacción con los entrenadores.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Mode
