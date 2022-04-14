import React, { useContext, useState, useEffect } from 'react'
import Hero from '../Atoms/Hero'
import login from '../Images/blogs.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { CurrencyContxt } from '../Atoms/Contextcurrency'

import { Context, Provider } from "../Api";
import { Helmet } from 'react-helmet'
import Forms from '../Atoms/Form'
import { Link } from "react-router-dom";


const Contact = () => {
  // Country List Api
  const { value11, value12 } = useContext(Context);
  const [cntry, setcntry] = value11;
  const [cntryLoad, setcntryLoad] = value12;

  // setvalPhoneCode
  const [selectphoneval, setselectphoneval] = useState([]);

  function setvalPhone(e) {
    setselectphoneval(e.target.value)
  }

  if (selectphoneval == 'Please select your country') {
    setselectphoneval('')
  }

  // currency inr/usd
  const [contextcur, setContextCur] = useContext(CurrencyContxt)

  // phoneSetvalue
  const [phoneSetvalue, Updatephonevalue] = useState();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='full-w contact-page'>
      <Helmet>
        <title>Careerera Contact Number & Official Address</title>
        <meta name="description" content="Search here Careerera contact telephone number, Careerera Official Address, Careerera Headquarters Address, Careerera email id, Careerera helpline number" />
        <meta name="keywords" content="Careerera contact number, Careerera contact telephone number, Careerera official address, Careerera headquarters address, Careerera email id" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://www.careerera.com/es/contact" />

      </Helmet>

      <Hero
        title="Contacto  "
        detail="Nosotros"
        batch={<> <Link to="/" className="no-underline badge bg-info">Hogar</Link>
          <span className="mx-2"> / </span>Contacto </>}
        img={login}
      />

      <div className='querysign-full full-w partnetapk-area'>
        <div className="container py-16">
          {/* <div className="text-center font-bold text-5xl text-blue-500 py-4">
                <span className="text-gray-700"> Login</span> with your account
            </div> */}
          <div className="row">
            <div className="col-xl-5 col-12 text-center">
              <h3 className="font-bold text-left  text-gray-700 text-3xl md:text-4xl uppercase">
                Contáctenos
              </h3>
              <p className="text-left ">
                Bienvenido a nuestro sitio web. Estamos contentos de tenerte cerca.
              </p>
              <div className="border-t-2 border-gray-500 w-10 mb-5"></div>

              <div className="row mt-6 py-xl-2">
                <div className="d-flex col-12">
                  <div className="media-left  w-10 text-left">
                    <i className="text-xs fas fa-phone-alt fa-2x text-blue-500 shadow-md"></i>
                  </div>
                  <div className="media-body text-left">
                    <span className="text-base font-bold mb-1 d-block">
                      {' '}
                      Teléfono
                    </span>

                    <a className="text-gray-500 font-semibold no-underline" href={"tel:" + contextcur.title} target="_blank">
                      {contextcur.title}
                    </a>
                  </div>
                </div>
                <div className="d-flex col-12 mt-4">
                  <div className="media-left  w-10 text-left">
                    <i className="text-xs fas fa-envelope fa-2x text-blue-500 shadow-md"></i>
                  </div>
                  <div className="media-body text-left">
                    <span className="text-base font-bold mb-1 d-block">
                      {' '}
                      Correo electrónico
                    </span>

                    {contextcur.currency == "Asia/Kolkata" ?
                      <a href="mailto:support@careerera.com" className="text-gray-500 font-semibold no-underline" target="_blank">
                        support@careerera.com
                      </a> : ''}

                    {contextcur.currency == "Asia/Singapore" ?
                      <a href="mailto:support@careerera.com" className="text-gray-500 font-semibold no-underline" target="_blank">
                        support@careerera.com
                      </a> : ''}


                    {contextcur.currency == "America/New_York" ?
                      <a href="mailto:info@careerera.com" className="text-gray-500 font-semibold no-underline" target="_blank">
                        info@careerera.com
                      </a> : ''}

                    {contextcur.currency == "SGT" ?
                      <a href="mailto:support@careerera.com" className="text-gray-500 font-semibold no-underline" target="_blank">
                        support@careerera.com
                      </a> : ''}


                    {contextcur.currency == "Europe/London" ?
                      <a href="mailto:info@careerera.com" className="text-gray-500 font-semibold no-underline" target="_blank">
                        info@careerera.com
                      </a> : ''}

                    {contextcur.currency == "Asia/Dubai" ?
                      <a href="mailto:info@careerera.com" className="text-gray-500 font-semibold no-underline" target="_blank">
                        info@careerera.com
                      </a> : ''}


                    {contextcur.currency == "Asia/Dhaka" ?
                      <a href="mailto:support@careerera.com" className="text-gray-500 font-semibold no-underline" target="_blank">
                        support@careerera.com
                      </a> : ''}
                  </div>
                </div>
              </div>
              <div className="d-flex text-left mt-6">
                <div className="media-left w-10">
                  <i className="text-xs fas fa-map-marker-alt fa-2x text-blue-500 shadow-md"></i>
                </div>

                {contextcur.currency == "Asia/Kolkata" ? <div>
                  <div className="media-body text-left">
                    <span className="text-base font-bold mb-1 d-block">
                      {' '}
                      Dirección de Noida
                    </span>
                    <p className="text-gray-500 font-semibold">
                      B 44, Sector 59, Noida, Uttar Pradesh 201301, India
                    </p>
                  </div>

                </div> : <div>
                  {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                </div>}



                {contextcur.currency == "Asia/Singapore" ? <div>
                  <div className="media-body text-left">
                    <span className="text-base font-bold mb-1 d-block">
                      {' '}
                      Dirección de Singapur
                    </span>
                    <p className="text-gray-500 font-semibold">
                      Centennial Tower, Levels 21 & 34, 3 Temasek Avenue, Singapore, 039190
                    </p>
                  </div>

                </div> : <div>
                  {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                </div>}


                {contextcur.currency == "America/New_York" ? <div>
                  <div className="media-body text-left">
                    <span className="text-base font-bold mb-1 d-block">
                      {' '}
                      Dirección de Maryland
                    </span>
                    <p className="text-gray-500 font-semibold">
                      2 -Industrial Park Drive, E -Waldorf, MD, 20602, United States
                    </p>
                  </div>

                </div> : <div>
                  {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                </div>}

                {contextcur.currency == "SGT" ? <div>
                  <div className="media-body text-left">
                    <span className="text-base font-bold mb-1 d-block">
                      {' '}
                      Dirección de Maryland
                    </span>
                    <p className="text-gray-500 font-semibold">
                      2 -Industrial Park Drive, E -Waldorf, MD, 20602, United States
                    </p>
                  </div>

                </div> : <div>
                  {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                </div>}


                {contextcur.currency == "Europe/London" ? <div>
                  <div className="media-body text-left">
                    <span className="text-base font-bold mb-1 d-block">
                      {' '}
                      Dirección de Londres
                    </span>
                    <p className="text-gray-500 font-semibold">
                      18 Soho Square, Greater London, W1D 3QL, United Kingdom
                    </p>
                  </div>

                </div> : <div>
                  {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                </div>}


                {contextcur.currency == "Asia/Dubai" ? <div>
                  <div className="media-body text-left">
                    <span className="text-base font-bold mb-1 d-block">
                      {' '}
                      Dirección de los EAU
                    </span>
                    <p className="text-gray-500 font-semibold">
                      A-66-01-01-15-Flamingo Villas, Ajman
                    </p>
                  </div>

                  <div className="media-body text-left">
                    <span className="text-base font-bold mb-1 d-block">
                      {' '}
                      Dirección de Dubái
                    </span>
                    <p className="text-gray-500 font-semibold">
                      M102,Hilal Bank Building,Al Qusais,Dubai
                    </p>
                  </div>


                </div> : <div>
                  {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                </div>}


                {contextcur.currency == "Asia/Dhaka" ? <div>
                  <div className="media-body text-left">
                    <span className="text-base font-bold mb-1 d-block">
                      {' '}
                      Dirección de la sede
                    </span>
                    <p className="text-gray-500 font-semibold">
                      B 44, Sector 59, Noida, Uttar Pradesh 201301, India
                    </p>
                  </div>

                </div> : <div>
                  {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                </div>}




              </div>
            </div>

            <div className="text-center col-xl-7 col-12 mt-5 mt-xl-0">
              <h3 className="font-bold text-left  text-gray-700 text-3xl md:text-4xl capitalize">
                Enviar un mensaje
              </h3>
              <p className="text-left mb-5">
                Su dirección de correo electrónico No será publicado, Campos requeridos están marcados.

              </p>

              {/* FORM */}
              <Forms />

            </div>

          </div>
        </div>
      </div>


      <div className="subscribe_news certification-courses full-w staticsyber py-5 text-center w-100 border-top">
        <div className="container my-10">
          <div className="row justify-items-center">
            <div className="col-12 col-xl-6 col-lg-8 mx-auto">
              <div className="main_heading">
                <h3 className="uppercase font-bold text-white text-3xl md:text-4xl">Suscríbete a nuestras noticias</h3>
                <form>
                  <div className="input-group mt-4 flex-column flex-sm-row">
                    <input type="text" className="form-control rounded flex-grow-1" placeholder="Your email here" />
                    <div className="input-group-append sm:pl-3">
                      <button className="btn-site invert h-100 shadow-lg" type="button">
                        <span>Suscribir</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>


  )
}

export default Contact
