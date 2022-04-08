import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Context } from '../../Api'
import { CurrencyContxt } from '../../Atoms/Contextcurrency'
export default function EnquireNowForm() {
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
  // phoneSetvalue
  const [phoneSetvalue, Updatephonevalue] = useState();


  // currency inr/usd
  const [contextcur, setContextCur] = useContext(CurrencyContxt)

  return (
    <>
      {cntryLoad ?
        <div className='col-xxl-4 col-xl-5 col-lg-6 col-12 align-self-center'>
          <Form className="form-annum talwin-formstyle services-movingr bg-white">
            <div className="shape-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className="shape-fill" fill="rgb(51 52 56 / 05%)" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path></svg>
            </div>
            <div className='above full-w'>
              <h2 className="text-center mb-4 text-2xl font-semibold text-black">
                Consultar ahora
              </h2>
              <Form.Group
                className="mb-3 "
                controlId="formBasicEmail">
                <Form.Control
                  className='block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control' type="text" placeholder="Nombre" />
              </Form.Group>

              <Form.Group
                className="mb-3 "
                controlId="formBasicPassword">
                <Form.Control
                  className='block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control'
                  type="email"
                  placeholder="Correo electrónico" />
              </Form.Group>

              <Form.Select onChange={setvalPhone} value={selectphoneval} className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control form-select mb-3 ">
                <option selected>Please select your country</option>
                {cntry.map((item, i) =>
                  <option value={[item.phonecode, item.country_title]}>{item.country_title}</option>
                )}
              </Form.Select>

              <InputGroup className="mb-3">


                {contextcur.currency == "Asia/Kolkata" ?

                  <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                    + {selectphoneval == '' ? cntry[3].phonecode :
                      selectphoneval.toString().split(',')[0]
                    }
                  </InputGroup.Text>
                  : <>
                    {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                  </>}



                {contextcur.currency == "Asia/Singapore" ?
                  <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                    + {selectphoneval == '' ? cntry[7].phonecode :
                      selectphoneval.toString().split(',')[0]
                    }
                  </InputGroup.Text>

                  : <>
                    {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                  </>}


                {contextcur.currency == "America/New_York" ?
                  <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                    + {selectphoneval == '' ? cntry[6].phonecode :
                      selectphoneval.toString().split(',')[0]
                    }
                  </InputGroup.Text>

                  : <>
                    {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                  </>}

                {contextcur.currency == "SGT" ?
                  <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                    + {selectphoneval == '' ? cntry[194].phonecode :
                      selectphoneval.toString().split(',')[0]
                    }
                  </InputGroup.Text>

                  : <>
                    {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                  </>}


                {contextcur.currency == "Europe/London" ?
                  <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                    + {selectphoneval == '' ? cntry[2].phonecode :
                      selectphoneval.toString().split(',')[0]
                    }
                  </InputGroup.Text>

                  : <>
                    {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                  </>}


                {contextcur.currency == "Asia/Dubai" ?
                  <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                    + {selectphoneval == '' ? cntry[5].phonecode :
                      selectphoneval.toString().split(',')[0]
                    }
                  </InputGroup.Text>

                  : <>
                    {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                  </>}


                {contextcur.currency == "Asia/Dhaka" ?
                  <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                    + {selectphoneval == '' ? cntry[30].phonecode :
                      selectphoneval.toString().split(',')[0]
                    }
                  </InputGroup.Text>

                  : <>
                    {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                  </>}

                <FormControl
                  placeholder="Teléfono*"
                  type="number"
                  value={phoneSetvalue}
                  className='block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                  h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control form-control'
                  onChange={(e) => { Updatephonevalue(e.target.value) }}
                  aria-label="Text input with dropdown button" />
                {selectphoneval == '' ?
                  <input type="hidden" name="phone-bycountry" value={'+' + cntry[0].phonecode + '-' + phoneSetvalue} />
                  :
                  <input type="hidden" name="phone-bycountry" value={'+' + selectphoneval.toString().split(',')[0] + '-' + phoneSetvalue} />
                }
              </InputGroup>

              <InputGroup className="mb-4">
                <InputGroup.Text className="">
                  5 + 2 =
                </InputGroup.Text>
                <FormControl
                  aria-label="First name" className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                    h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control" />
              </InputGroup>

              <div className='full-w'>
                <button className="btn-site w-100 invert shadow-0 btn h-14 btn btn-primary btn btn-primary"
                  type="submit">
                  <span>Enviar</span>
                </button>
              </div>
            </div>
          </Form>
        </div>
        : <div className="col-xl-4 col-lg-6 col-12 align-self-center text-center">
          <div className="p-5">
            <button className="btn btn-dark pt-2 shadow-lg" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ width: '2rem', height: '2rem' }}></span>
              <span className="sr-only">Cargando...</span>
            </button>
          </div>
        </div>
      }
    </>
  )
}
