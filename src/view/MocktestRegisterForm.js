import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet'
import Hero from '../Atoms/Hero'
import { Context, Provider } from "../Api";
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';


export default function MocktestRegisterForm() {
    // Event
    const [Event, setEvent] = useState([])
    const [Eventsts, setEventsts] = useState(false)

    // List of Event
    async function Eventslist() {
        const allEventsList = await fetch(
            'https://my.careerera.com/API/common/EventsList.php'
        )
        const allEventsListapi = await allEventsList.json()
        setEvent(allEventsListapi.records)
        setEventsts(true)
    }

    // Country List Api
    const { value11, value12 } = useContext(Context);
    const [cntry, setcntry] = value11;
    const [cntryLoad, setcntryLoad] = value12;
    // setvalPhoneCode
    const [selectphoneval, setselectphoneval] = useState([]);
    function setvalPhone(e) {
        setselectphoneval(e.target.value)
    }

    useEffect(() => {
        Eventslist();
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='mocktestregister-form'>
            <Helmet>
                <title>Mocktest Register</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="https://www.careerera.com/es/mocktest-register.php"/>
            </Helmet>

            <Hero title="MOCKTEST REGISTER" detail=""  batch={<><Link to="/" className='no-underline badge bg-info'>Hogar</Link><span className='mx-1'> / </span><Link to="/mocktest" className='no-underline badge bg-info'>Mock Test</Link><span className='mx-1'> / </span>Mocktest Register</>}/>

            <div className="container py-16">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12 xl:border-r-2 xl:border-gray-200">
                        <div className='row'>



                            {cntryLoad ?
                                <div className='col-xxl-8 col-xl-10 col-12 mx-auto'>
                                    <p className="text-3xl font-bold text-gray-700 mb-0">Mocktest Register</p>
                                    <div className="border-t-2 border-gray-300 w-14 mt-2 mb-2"></div>
                                    <div className="pt-4">

                                        <div className="row pb-2">
                                            <div className="col-12">
                                                <input type="text" placeholder="Nombre (esto se reflejará en su certificado)" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
         h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm sm:text-base" />
                                            </div>
                                        </div>

                                        <div className="row py-2">
                                            <div className="col-12">
                                                <input type="text" placeholder="Correo electrónico del usuario" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
         h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm sm:text-base" />
                                            </div>
                                        </div>


                                        <div className="row py-2">
                                            <div className="col-12">
                                                <input type="password" placeholder="Contraseña de usuario" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
         h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm sm:text-base" />
                                            </div>
                                        </div>


                                        <div className="row py-2">
                                            <div className="col-12">
                                                <input type="password" placeholder="Confirmar contraseña" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
         h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm sm:text-base" />
                                            </div>
                                        </div>

                                        <div className="row py-2">
                                            <div className="col-12">
                                                <input type="text" placeholder="Contacto de usuario" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
         h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm sm:text-base" />
                                            </div>
                                        </div>

                                        <div className="row py-2">
                                            <div className="col-12">
                                                <Form.Select onChange={setvalPhone} value={selectphoneval} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
         h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm sm:text-base">
                                                    <option selected>Please select your country</option>
                                                    {cntry.map((item, i) =>
                                                        <option value={[item.phonecode, item.country_title]}>{item.country_title}</option>
                                                    )}
                                                </Form.Select>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12 col-12">
                                                <button className="h-12 btn-site w-100 mt-4 invert">
                                                    <span>Registrarse</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <h2 className="form_text text-base font-semibold mt-3">
                                        ¿Ya tienes una cuenta? <Link to="/mocktest-login" className='no-underline'>Acceso</Link>
                                    </h2>

                                </div>


                                : <div className="col-xxl-8 col-xl-10 col-12 mx-auto text-center align-self-center">
                                    <div className="p-5">
                                        <button className="btn btn-dark pt-2 shadow-lg" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ width: '2rem', height: '2rem' }}></span>
                                            <span className="sr-only">Loading...</span>
                                        </button>
                                    </div>
                                </div>}


                        </div>
                    </div>
                    <div className="text-center col-lg-6 col-12 pb-5 pb-lg-0">
                        <hr className='mb-20 d-block d-lg-none'></hr>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-0">Conéctate con Redes Sociales</h3>
                        <div className="border-t-2 border-gray-300 w-14 mt-2 mb-2 mx-auto"></div>
                        <div className="mt-3">
                            <div className="rounded-social-buttons mt-4 text-center mb-0">
                                <a
                                    className="mb-0 social-button facebook text-center"
                                    href="https://business.facebook.com/careerera/?business_id=145787346668818"
                                    target="_blank">

                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    className="mb-0 social-button twitter"
                                    href="https://twitter.com/Careerera1"
                                    target="_blank">

                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                    className="mb-0 social-button linkedin"
                                    href="https://www.linkedin.com/company/careerera"
                                    target="_blank">

                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a
                                    className="mb-0 social-button instagram"
                                    href="https://www.instagram.com/the_career_era/"
                                    target="_blank">

                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                    className="mb-0 social-button youtube"
                                    href="javascript:;"
                                    target="_blank">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
