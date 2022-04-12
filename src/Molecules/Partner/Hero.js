import React, { useContext, useState, useEffect } from 'react'
import partner from '../../Images/Partner.jpg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { Context, Provider } from "../../Api";
import { CurrencyContxt } from '../../Atoms/Contextcurrency'

const Hero = () => {
  // Country List Api
  const { value11, value12 } = useContext(Context);
  const [cntry, setcntry] = value11;
  const [cntryLoad, setcntryLoad] = value12;

  // currency inr/usd
  const [contextcur, setContextCur] = useContext(CurrencyContxt)


  // setvalPhoneCode
  const [selectphoneval, setselectphoneval] = useState([]);

  function setvalPhone(e) {
    setselectphoneval(e.target.value)
  }

  if (selectphoneval == 'Please select your country') {
    setselectphoneval('')
  }

  // phoneSetvalue
  const [phoneSetvalue, Updatephonevalue] = useState();



  return (
    <div className='partner-marketing-affiliates would full-w' style={{
      backgroundImage: `url(${partner})`,
      backgroundSize: 'cover',
    }}>
      <div style={{ background: 'rgb(5 54 105 / 80%)' }} className="z-10	position-relative">

        <div className="container pt-16 text-white">
          <div className='row'>
            <div className="col-xl-7 col-12 pb-4 pb-xl-0">
              <h1 className="text-2xl md:text-3xl font-bold leading-loose tracking-normal  text-center text-lg-left">
              Mejora tu negocio con Careerera for Business
              </h1>

              <span className="text-xl md:text-2xl light font-light tracking-wide  text-center text-lg-left d-block">
              Únase a Careerera para empresas  <strong className='orange-clrsite'>programa Socio con nosotros</strong>
              </span>

              <span className="heading-border-line d-block left-0 mt-3 mb-4 mx-auto mx-lg-0 "></span>

              <h3 className='text-lg md:text-xl font-semibold tracking-normal'>Con nuestros servicios en la red de su empresa, puede ayudar a su organización a llegar más lejos como socio de canal:</h3>
              <ul className='p-0 text-gray-300 font-medium text-base md:text-lg '>
                <li className='d-flex mb-2'><i className="bi bi-check2-circle mr-3 text-2xl orange-clrsite"></i> Trabaje para la prestigiosa firma de educación superior de India, que tiene oficinas en APAC, EE. UU., Dubái, India, Reino Unido, Malasia y Europa.</li>
                <li className='d-flex mb-2'><i className="bi bi-check2-circle mr-3 text-2xl orange-clrsite"></i> Desarrolle nuevas capacidades, innove más rápidamente y colabore en ideas.</li>
                <li className='d-flex mb-2'><i className="bi bi-check2-circle mr-3 text-2xl orange-clrsite"></i> Encuentre nuevas estrategias para expandir las ventas y el pipeline de su empresa</li>
                <li className='d-flex mb-2'><i className="bi bi-check2-circle mr-3 text-2xl orange-clrsite"></i> Forme parte de un ecosistema dinámico con una variedad de soluciones en constante expansión.</li>
                <li className='d-flex mb-2'><i className="bi bi-check2-circle mr-3 text-2xl orange-clrsite"></i> Obtenga acceso a nuevos mercados y clientes.</li>
                <li className='d-flex'><i className="bi bi-check2-circle mr-3 text-2xl orange-clrsite"></i> Demostración de nuestros servicios</li>
              </ul>

              <hr></hr>
              <div className='mt-3 text-center text-xl-left parner-uscal'>
                <div className='mailto-partnerjoin text-left text-base md:text-lg font-light'>
                  <div className="row">
                    <div className='col-md-6 mb-3 col-12'>
                      <a className="no-underline text-white d-inline-flex align-items-center font-medium tracking-wide" href="tel:+919643034607" target="_blank">
                        <i class="bi  bi-telephone roundmail-ul mr-2 orange-clrsite"></i>
                        <span className='d-inline-block'>+91 9643-034-607</span>
                      </a>
                    </div>

                    <div className='col-md-6 mb-3 col-12'>
                      <a className="no-underline text-white d-inline-flex align-items-center font-medium tracking-wide" href="https://api.whatsapp.com/send?phone=+919643034607&text=Hi%2C%20I%20am%20interested%20in%20Partner%20with%20us%20program%20of%20Careerera" target="_blank">
                        <i class="bi bi-whatsapp roundmail-ul mr-2 orange-clrsite"></i>
                        <span className='d-inline-block'>+91 9643-034-607</span>
                      </a>
                    </div>
                    <div className='col-12 mb-3'>
                      <hr className='m-0'></hr>
                    </div>

                    <div className='col-md-6 col-12'>
                      <a className="no-underline text-white d-inline-flex align-items-center font-medium tracking-wide" href="mailto:partnerwithus@careerera.com" target="_blank">
                        <i class="bi bi-envelope roundmail-ul mr-2 orange-clrsite"></i>
                        <span className='d-inline-block'>partnerwithus@careerera.com</span>
                      </a>
                    </div>
                  </div>
                </div>


              </div>



            </div>



            <div className="ml-auto col-xxl-4 col-xl-5 col-12 help-page mt-4 mt-xl-0">

              <Form className="form-annum border-0 talwin-formstyle services-movingr bg-white overflow-hidden">
                <div className="shape-bottom waveontopform">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="shape-fill" fill="rgb(7 81 159 / 05%)" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path></svg>
                </div>
                <div className="waveontopform-above full-w">

                  {cntryLoad ?
                    <>
                      <Form.Select onChange={setvalPhone} value={selectphoneval} className="mb-3">
                        <option selected>Please select your country</option>
                        {cntry.map((item, i) =>
                          <option value={[item.phonecode, item.country_title]}>{item.country_title}</option>
                        )}
                      </Form.Select>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicEmail"
                      >
                        <Form.Control className='block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control'  type="text" placeholder="Nombre" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control className='block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control'
                          type="email"
                          placeholder="Correo electrónico"
                        />
                      </Form.Group>

                      <InputGroup className="mb-3">
                        {contextcur.currency == "Asia/Kolkata" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[3].phonecode :
                              selectphoneval.toString().split(',')[0]
                            } &nbsp;
                          </InputGroup.Text>

                          : <div>
                            {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                          </div>}



                        {contextcur.currency == "Asia/Singapore" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[7].phonecode :
                              selectphoneval.toString().split(',')[0]
                            } &nbsp;
                          </InputGroup.Text>

                          : <div>
                            {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                          </div>}


                        {contextcur.currency == "America/New_York" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[6].phonecode :
                              selectphoneval.toString().split(',')[0]
                            } &nbsp;
                          </InputGroup.Text>

                          : <div>
                            {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                          </div>}

                        {contextcur.currency == "SGT" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[194].phonecode :
                              selectphoneval.toString().split(',')[0]
                            } &nbsp;
                          </InputGroup.Text>

                          : <div>
                            {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                          </div>}


                        {contextcur.currency == "Europe/London" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[2].phonecode :
                              selectphoneval.toString().split(',')[0]
                            } &nbsp;
                          </InputGroup.Text>
                          : <div>
                            {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                          </div>}


                        {contextcur.currency == "Asia/Dubai" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[5].phonecode :
                              selectphoneval.toString().split(',')[0]
                            } &nbsp;
                          </InputGroup.Text>

                          : <div>
                            {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                          </div>}


                        {contextcur.currency == "Asia/Dhaka" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[30].phonecode :
                              selectphoneval.toString().split(',')[0]} &nbsp;
                          </InputGroup.Text>
                          : ''}
                        {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}

                        <FormControl
                          placeholder="Teléfono*"
                          type="number"
                          value={phoneSetvalue}
                          onChange={(e) => { Updatephonevalue(e.target.value) }}
                          aria-label="Text input with dropdown button" />
                        {selectphoneval == '' ?
                          <input type="hidden" name="phone-bycountry" value={'+' + cntry[0].phonecode + '-' + phoneSetvalue} />
                          :
                          <input type="hidden" name="phone-bycountry" value={'+' + selectphoneval.toString().split(',')[0] + '-' + phoneSetvalue} />
                        }
                      </InputGroup>
                    </>

                    : <div className="text-center align-self-center mb-3">
                      <div className="p-5">
                        <button className="btn btn-dark pt-2 shadow-lg" type="button" disabled>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ width: '2rem', height: '2rem' }}></span>
                          <span className="sr-only">Loading...</span>
                        </button>
                      </div>
                    </div>}

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Control className='block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control'  type="text" placeholder="Ciudad" />
                  </Form.Group>

                  <InputGroup className="mb-4">
                    <InputGroup.Text className="py-1 fw-medium shadow-sm input-group-text input-group-text">
                      5 + 2 =
                    </InputGroup.Text>
                    <FormControl
                      aria-label="First name"
                      placeholder="?"
                      className='block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                            h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control'
                    />
                  </InputGroup>

                  <Button
                    className="btn-site w-100 invert shadow-0 btn h-14 btn btn-primary"
                    type="submit">
                    <span>Consultar ahora</span>
                  </Button>
                </div>
              </Form>
            </div>


          </div>

          <div className='text-center mt-5'>
            <a href="#online_education" className="btn-site invert no-underline down-pprog">
              <span><i className="bi bi-arrow-down-circle text-2xl"></i></span>
            </a>
          </div>

        </div>

        <div className="overflow-hidden ppt-clistaff mt-shapeneed"><div className="shape-bottom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path className="shape-fill" fill="#fff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path></svg></div></div>
      </div>
    </div>
  )
}
export default Hero
