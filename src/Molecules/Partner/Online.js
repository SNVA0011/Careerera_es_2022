import React from 'react'
import online from '../../Images/online.jpg'
import toplayer from '../../Images/mocktest/top-layer.png'

const Online = () => {
    return (
        <div className='online-education-opp'>
            <div className="container py-16">

                <div className="sec_title text-center">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase">
                        Oportunidad de educación <span className='orange-clrsite'>en línea</span>
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl lg:text-2xl fw-medium">
                        - Una visión general 2016 vs {(new Date().getFullYear()+1)} -
                    </p>
                    <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                </div>

                <div className="row pt-4">
                    <div className='col-lg-3 col-12'>
                        <img src={toplayer} className='dotstp' alt='dots-texture'></img>
                        <img src={online} alt='online_education' className="rounded-2xl full-w position-relative z-10  shadow-image-lg" />
                        <div className='text-right'>
                            <img src={toplayer} alt='dots-texture' className='dotstp d-inline-block right'></img>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12 font-semibold">


                        <div className="verview-tmline">
                            <div className="row align-items-center how-it-works d-flex">
                                <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-start">
                                    <div className="circle font-weight-bold">1</div>
                                </div>
                                <div className="col-9">
                                    <p className="md:text-lg text-gray-700 font-semibold my-3">
                                        En 2016, el mercado de educación en línea tenía 1800 núcleos, que para
                                        {(new Date().getFullYear()+1)} serán 14 000 millones de rupias al 52 % CAGR.
                                    </p>
                                </div>
                            </div>
                            <div className="row timeline">
                                <div className="col-2">
                                    <div className="corner top-right" />
                                </div>
                                <div className="col-8">
                                    <hr />
                                </div>
                                <div className="col-2">
                                    <div className="corner left-bottom" />
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-end how-it-works d-flex">
                                <div className="col-9 text-right">
                                    <p className="md:text-lg text-gray-700 font-semibold my-3">
                                        En 2016, la recapacitación y la certificación en línea costaron 696
                                        millones de rupias para {(new Date().getFullYear()+1)} estarán en 3400 millones de rupias con una
                                        CAGR del 38 %.
                                    </p>
                                </div>
                                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                                    <div className="circle font-weight-bold">2</div>
                                </div>
                            </div>
                            <div className="row timeline">
                                <div className="col-2">
                                    <div className="corner right-bottom" />
                                </div>
                                <div className="col-8">
                                    <hr />
                                </div>
                                <div className="col-2">
                                    <div className="corner top-left" />
                                </div>
                            </div>
                            <div className="row align-items-center how-it-works d-flex">
                                <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                                    <div className="circle font-weight-bold">3</div>
                                </div>
                                <div className="col-9">
                                    <p className="md:text-lg text-gray-700 font-semibold my-3">
                                        Este aumento en el tamaño del mercado se debe principalmente al aumento
                                        en el número de estudiantes que cursan estudios superiores y cursos
                                        profesionales.
                                    </p>
                                </div>
                            </div>
                            <div className="row timeline">
                                <div className="col-2">
                                    <div className="corner top-right" />
                                </div>
                                <div className="col-8">
                                    <hr />
                                </div>
                                <div className="col-2">
                                    <div className="corner left-bottom" />
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-end how-it-works d-flex">
                                <div className="col-9 text-right">
                                    <p className="md:text-lg text-gray-700 font-semibold my-3">
                                        Una industria a prueba de recesión.
                                    </p>
                                </div>
                                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                                    <div className="circle font-weight-bold">4</div>
                                </div>
                            </div>
                            <div className="row timeline">
                                <div className="col-2">
                                    <div className="corner right-bottom" />
                                </div>
                                <div className="col-8">
                                    <hr />
                                </div>
                                <div className="col-2">
                                    <div className="corner top-left" />
                                </div>
                            </div>
                            <div className="row align-items-center how-it-works d-flex">
                                <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                                    <div className="circle font-weight-bold">5</div>
                                </div>
                                <div className="col-9">
                                    <p className="md:text-lg text-gray-700 font-semibold my-3">
                                        Con 1.300 millones de habitantes y una edad media de 29 años.
                                    </p>
                                </div>
                            </div>
                            <div className="row timeline">
                                <div className="col-2">
                                    <div className="corner top-right" />
                                </div>
                                <div className="col-8">
                                    <hr />
                                </div>
                                <div className="col-2">
                                    <div className="corner left-bottom" />
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-end how-it-works d-flex">
                                <div className="col-9 text-right">
                                    <p className="md:text-lg text-gray-700 font-semibold my-3">
                                        El 29% de la población india es menor de 18 años (26,6% en el tramo de
                                        edad de 0 a 14 años).
                                    </p>
                                </div>
                                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                                    <div className="circle font-weight-bold">6</div>
                                </div>
                            </div>
                            <div className="row timeline">
                                <div className="col-2">
                                    <div className="corner right-bottom" />
                                </div>
                                <div className="col-8">
                                    <hr />
                                </div>
                                <div className="col-2">
                                    <div className="corner top-left" />
                                </div>
                            </div>
                            <div className="row align-items-center how-it-works d-flex">
                                <div className="col-2 text-center top d-inline-flex justify-content-center align-items-end">
                                    <div className="circle font-weight-bold">7</div>
                                </div>
                                <div className="col-9">
                                    <p className="md:text-lg text-gray-700 font-semibold my-3">
                                        Hay alrededor de 23,65 millones de rupias (en el grupo de edad de 0 a 14
                                        años), que es el público objetivo de tutorías, conocimientos básicos de
                                        TI, pruebas de aptitud y cursos básicos destinados a profesionales.
                                    </p>
                                </div>
                            </div>
                        </div>;



                    </div>
                </div>
            </div>
        </div>
    )
}
export default Online
