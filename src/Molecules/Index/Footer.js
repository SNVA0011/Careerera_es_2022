import React, { useContext } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import logo from '../../Images/logo.svg'
import '../../style.css'
import Flag from '../../Atoms/Flag'
import { CurrencyContxt } from '../../Atoms/Contextcurrency'
import { Link } from 'react-router-dom'
const Footer = () => {
    // currency inr/usd
    const [contextcur, setContextCur] = useContext(CurrencyContxt)
    return (
        <div className='footer-bottom full-w'>
            <div className="container pt-10">
                {/* section 1 */}
                <div className="row">
                    {/* first */}
                    <div className="col-xl-3 col-sm-6 col-12">
                        <Link to="/" className='mb-4 d-inline-block' >
                            <img src={logo} alt='logo' width={169} />
                        </Link>
                        <ul className='p-0 hoveff'>
                            <li className='mb-2'>
                                <Link to="/news-events" className="no-underline text-black text-sm font-semibold">
                                    Noticias y eventos

                                </Link></li>
                            <li className='mb-2'>
                                <Link to="/blog" className="no-underline text-black text-sm font-semibold">

                                    Blogs y artículos
                                </Link>
                            </li>
                        </ul>

                        <hr></hr>




                        <p className="text-sm font-semibold mt-3 mb-3">
                            {contextcur.currency === 'Asia/Kolkata' ? (
                                <a target="_blank" href="mailto:support@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    support@careerera.com
                                </a>
                            ) : (
                                ''
                            )}

                            {contextcur.currency === 'Asia/Singapore' ? (
                                <a target="_blank" href="mailto:support@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    support@careerera.com
                                </a>
                            ) : (
                                ''
                            )}

                            {contextcur.currency === 'America/New_York' ? (
                                <a target="_blank" href="mailto:info@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    info@careerera.com
                                </a>
                            ) : (
                                ''
                            )}

                            {contextcur.currency === 'SGT' ? (
                                <a target="_blank" href="mailto:support@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    support@careerera.com
                                </a>
                            ) : (
                                ''
                            )}

                            {contextcur.currency === 'Europe/London' ? (
                                <a target="_blank" href="mailto:info@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    info@careerera.com
                                </a>
                            ) : (
                                ''
                            )}

                            {contextcur.currency === 'Asia/Dubai' ? (
                                <a target="_blank" href="mailto:info@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    info@careerera.com
                                </a>
                            ) : (
                                ''
                            )}

                            {contextcur.currency === 'Asia/Dhaka' ? (
                                <a target="_blank" href="mailto:support@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    support@careerera.com
                                </a>
                            ) : (
                                ''
                            )}
                        </p>


                        <Flag />


                        <div className="rounded-social-buttons mt-4">
                            <a
                                className="social-button facebook text-center"
                                href="https://www.facebook.com/careerera"
                                target="_blank">

                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                className="social-button twitter"
                                href="https://twitter.com/Careerera1"
                                target="_blank">

                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                className="social-button linkedin"
                                href="https://www.linkedin.com/company/careerera"
                                target="_blank">

                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                className="social-button instagram"
                                href="https://www.instagram.com/careereraonline/ "
                                target="_blank">

                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                className="social-button youtube"
                                href="https://www.youtube.com/channel/UCQaNKS04OqIjTs9oJaMWbuQ?view_as=subscriber"
                                target="_blank">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>

                    </div>

                    {/* second  */}
                    <div className="col-xl-3 col-sm-6 col-12 hoveff">
                        <p className="text-2xl md:text-3xl font-semibold mt-4 mb-1 mb-md-2">
                            enlaces rápidos
                        </p>
                        <ul className='p-0'>
                            {/* <li className='mb-2'>
                                <Link to="/post-graduate-program" className="no-underline text-black text-sm font-semibold">
                                    Programa de Postgrado y Maestría
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/certification-program" className="no-underline text-black text-sm font-semibold">
                                    Programa de Certificado
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/language-program" className="no-underline text-black text-sm font-semibold">
                                    Programa de idiomas
                                </Link>
                            </li> */}

                            <li className='mb-2'>
                                <Link to="/mocktest" className="no-underline text-black text-sm font-semibold">
                                    Simulacros de examen
                                </Link>
                            </li>

                            <li className='mb-2'>
                                <Link to="/training-room" className="no-underline text-black text-sm font-semibold">
                                    Habitación de entrenamiento
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/staffing-solution" className="no-underline text-black text-sm font-semibold">
                                    Soluciones de dotación de personal
                                </Link>
                            </li>
                        </ul>


                        <hr className="d-sm-none" />
                    </div>

                    {/* third */}
                    <div className="col-xl-3 col-sm-6 col-12 hoveff">

                        <p className="text-2xl md:text-3xl font-semibold mt-4 mb-1 mb-md-2">
                            Enlaces legales
                        </p>
                        <ul className='p-0'>
                            <li className='mb-2'>
                                <Link to="/disclaimer" className="no-underline text-black text-sm font-semibold">
                                    Descargo de responsabilidad
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/terms-of-use" className="no-underline text-black text-sm font-semibold">
                                    Condiciones de uso
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/privacy-policy" className="no-underline text-black text-sm font-semibold">
                                    Política de privacidad
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/refund-policy" className="no-underline text-black text-sm font-semibold">
                                    Politica de reembolso
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/terms-and-conditions" className="no-underline text-black text-sm font-semibold">
                                    Términos y condiciones
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/rescheduling-policy" className="no-underline text-black text-sm font-semibold">
                                    Política de reprogramación
                                </Link>
                            </li>
                        </ul>
                        <hr className="d-sm-none" />
                    </div>

                    {/* fourth */}
                    <div className="col-xl-3 col-sm-6 col-12 hoveff">

                        <p className="text-2xl md:text-3xl font-semibold mt-4 mb-1 mb-md-2">Ubícanos </p>
                        <ul className='p-0'>
                            <li className='mb-2'>
                                <Link to="/about" className="no-underline text-black text-sm font-semibold">
                                    Sobre nosotros
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/contact" className="no-underline text-black text-sm font-semibold">
                                Contacta con nosotras
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <a href={"https://my.sappmail.net/account/"} target="_blank" className="no-underline text-black text-sm font-semibold">
                                    Correo electrónico del entrenador
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a href={"https://my.sappmail.net/account/"} target="_blank" className="no-underline text-black text-sm font-semibold">
                                    Correo electrónico del socio
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
           

                <hr />

                <div className="text-black text-center pb-4 pt-2 text-sm font-semibold">
                    © 2013-{(new Date().getFullYear())}
                    {contextcur.currency === 'Asia/Kolkata' ? (
                        <> SNVA Ventures </>
                    ) : (
                        ''
                    )}
                    {contextcur.currency === 'Asia/Singapore' ? (
                        <> SNVA LLC (USA) </>
                    ) : (
                        ''
                    )}
                    {contextcur.currency === 'America/New_York' ? (
                        <> SNVA LLC (USA) </>
                    ) : (
                        ''
                    )}
                    {contextcur.currency === 'SGT' ? <> SNVA LLC (USA) </> : ''}
                    {contextcur.currency === 'Europe/London' ? (
                        <> SNVA EduTech UK </>
                    ) : (
                        ''
                    )}
                    {contextcur.currency === 'Asia/Dubai' ? (
                        <> AV Ventures FZC LLC </>
                    ) : (
                        ''
                    )}
                    {contextcur.currency === 'Asia/Dhaka' ? (
                        <> SNVA LLC (USA) </>
                    ) : (
                        ''
                    )}
                    Reservados todos los derechos
                </div>
            </div>
        </div>
    )
}
export default Footer





