import React, { useContext } from 'react'
import { CurrencyContxt } from '../Atoms/Contextcurrency'
export default function Contactfooter() {
    // currency inr/usd
    const [contextcur, setContextCur] = useContext(CurrencyContxt)
    return (
        <div className='contact-batches testimonials-areamock react-worldcour'>
            <div className='container pt-16 pb-10'>
                <h3 className='font-semibold text-3xl mb-2'>Contacta con nosotros</h3>
                <span className="heading-border-line m-0 d-block left-0 mb-5"></span>



                <div className='full-w contact-page'>
                    {contextcur.currency === 'Asia/Kolkata' ? (
                        <div className="row">
                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes públicos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                        Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel:+91-92-5000-4000" target="_blank">+91-92-5000-4000</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                        Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:support@careerera.com" target="_blank">support@careerera.com</a>
                                    </div>
                                </div>
                            </div>


                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes privados</div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel:+91-92-5000-4000" target="_blank">+91-92-5000-4000</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                        Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:Kundan@careerera.com" target="_blank">Kundan@careerera.com</a>
                                    </div>
                                </div>
                            </div>



                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes Corporativos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel:+91-92-5000-4000" target="_blank">+91-92-5000-4000</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:ashwani@careerera.net" target="_blank">ashwani@careerera.net</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    {contextcur.currency === 'Asia/Singapore' ? (
                        <div className="row">
                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes públicos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +65-31-591-123" target="_blank"> +65-31-591-123</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:support@careerera.com" target="_blank">support@careerera.com</a>
                                    </div>
                                </div>
                            </div>


                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes privados</div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +65-31-591-123" target="_blank"> +65-31-591-123</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:pooja.arora@careerera.com" target="_blank">pooja.arora@careerera.com</a>
                                    </div>
                                </div>
                            </div>



                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes Corporativos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +65-31-591-123" target="_blank"> +65-31-591-123</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:neha.dwivedi@careerera.com" target="_blank">neha.dwivedi@careerera.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    {contextcur.currency === 'America/New_York' ? (
                        <div className="row">
                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes públicos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +1-844-889-4054" target="_blank"> +1-844-889-4054</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:support@careerera.com" target="_blank">support@careerera.com</a>
                                    </div>
                                </div>
                            </div>


                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes privados</div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +1-844-889-4054" target="_blank"> +1-844-889-4054</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:Sandeep@careerera.com" target="_blank">Sandeep@careerera.com</a>
                                    </div>
                                </div>
                            </div>



                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes Corporativos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +1-844-889-4054" target="_blank"> +1-844-889-4054</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:aditya@careerera.com" target="_blank">aditya@careerera.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    {contextcur.currency === 'SGT' ? (
                        <div className="row">
                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes públicos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +381-65-454-7847" target="_blank"> +381-65-454-7847</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:support@careerera.com" target="_blank">support@careerera.com</a>
                                    </div>
                                </div>
                            </div>


                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes privados</div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +381-65-454-7847" target="_blank"> +381-65-454-7847</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:Sandeep@careerera.com" target="_blank">Sandeep@careerera.com</a>
                                    </div>
                                </div>
                            </div>



                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes Corporativos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +381-65-454-7847" target="_blank"> +381-65-454-7847</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:aditya@careerera.com" target="_blank">aditya@careerera.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    {contextcur.currency === 'Europe/London' ? (
                        <div className="row">
                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes públicos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +44-203-769-0986" target="_blank"> +44-203-769-0986</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:support@careerera.com" target="_blank">support@careerera.com</a>
                                    </div>
                                </div>
                            </div>


                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes privados</div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +44-203-769-0986" target="_blank"> +44-203-769-0986</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:Sandeep@careerera.com" target="_blank">Sandeep@careerera.com</a>
                                    </div>
                                </div>
                            </div>



                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes Corporativos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +44-203-769-0986" target="_blank"> +44-203-769-0986</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:aditya@careerera.com" target="_blank">aditya@careerera.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    {contextcur.currency === 'Asia/Dubai' ? (
                        <div className="row">
                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes públicos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +971-56-583-7368" target="_blank"> +971-56-583-7368</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:support@careerera.com" target="_blank">support@careerera.com</a>
                                    </div>
                                </div>
                            </div>


                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes privados</div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +971-56-583-7368" target="_blank"> +971-56-583-7368</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:Sandeep@careerera.com" target="_blank">Sandeep@careerera.com</a>
                                    </div>
                                </div>
                            </div>



                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes Corporativos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +971-56-583-7368" target="_blank"> +971-56-583-7368</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:aditya@careerera.com" target="_blank">aditya@careerera.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    {contextcur.currency === 'Asia/Dhaka' ? (
                        <div className="row">
                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes públicos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +1-844-889-4054" target="_blank"> +1-844-889-4054</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:support@careerera.com" target="_blank">support@careerera.com</a>
                                    </div>
                                </div>
                            </div>


                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes privados</div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +1-844-889-4054" target="_blank"> +1-844-889-4054</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:Sandeep@careerera.com" target="_blank">Sandeep@careerera.com</a>
                                    </div>
                                </div>
                            </div>



                            <div className='col-xl-4 col-lg-6 col-12 mb-6'>
                                <div className="font-semibold text-xl mb-2 text-gray-900">Lotes Corporativos</div>

                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-phone-alt fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Telefono no.
                                        </span>
                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="tel: +1-844-889-4054" target="_blank"> +1-844-889-4054</a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm p-3 d-flex mt-2">
                                    <div className="media-left  w-10 text-left">
                                        <i className="shadow-md text-xs fas fa-envelope fa-2x text-blue-500"></i>
                                    </div>
                                    <div className="media-body text-left">
                                        <span className="text-base font-bold mb-1 d-block">
                                            Correo electrónico
                                        </span>

                                        <a className="text-gray-500 font-semibold no-underline"
                                            href="mailto:aditya@careerera.com" target="_blank">aditya@careerera.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    )
}
