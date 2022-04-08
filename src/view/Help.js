import React, { useContext, useState, useEffect } from 'react'
import { Provider, Context } from '../Api'
import Hero from '../Molecules/Partner/Hero'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import partner from '../Images/Partner.jpg'
import { Helmet } from 'react-helmet'


const Help = () => {
    // Country List Api
    const { value11, value12 } = useContext(Context)
    const [cntry, setcntry] = value11
    const [cntryLoad, setcntryLoad] = value12


    // setvalPhoneCode
    const [selectphoneval, setselectphoneval] = useState([])

    function setvalPhone(e) {
        setselectphoneval(e.target.value)
    }

    if (selectphoneval == 'Please select your country') {
        setselectphoneval('')
    }

    // phoneSetvalue
    const [phoneSetvalue, Updatephonevalue] = useState()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='help-page'>
            <Helmet>
                <title>Careerera Support Ticket System </title>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <link rel="canonical" href="https://www.careerera.com/es/help" />
            </Helmet>

            <div style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                <div className='py-5' style={{
                    backgroundImage: `linear-gradient(to right,rgb(0,0,0,0.73) 40%,rgba(0,0,0,0.5),rgba(0,0,0,0.59)), url(${partner})`,
                    backgroundSize: 'cover',
                }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-8 col-xl-7 col-lg-6 col-12 pb-5 pb-xl-0">
                                <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">
                                    Creemos en <span className='orange-lgclr d-inline-block'>Ayudándote</span>
                                </h1>
                                <div className="border-t-4 border-green-500 w-10 my-3 rounded-xl"></div>
                                <h3 className="text-lg md:text-xl lg:text-xl xl:text-2xl  text-white font-semibold py-2 mb-4">
                                Por favor, rellene el formulario de esta página y escriba un breve
                                     sobre su problema Uno de nuestros ejecutivos se pondrá en contacto
                                     Hasta pronto.
                                </h3>

                                <div className="row align-items-center h-auto sideicon-web">
                                    <div className="col-xxl-4 col-sm-6 col-12">
                                        <div className="boxrounded d-flex flex-column justify-content-center bg-green-400 text-white text-center z-50 second mr-4">
                                            <i className="bi bi-clock"></i>
                                            <div className='text-xs text-center font-semibold mb-0 mt-2'>- Horas Laborales -<br></br> 9 AM to 7 PM (IST)</div>
                                        </div>
                                    </div>

                                    <div className="col-xxl-4 col-sm-6 col-12">
                                        <div className="boxrounded d-flex flex-column justify-content-center bg-green-400 text-white text-center z-50 second">
                                            <i className="bi bi-calendar-check"></i>
                                            <div className='text-xs text-center font-semibold mb-0 mt-2'>- Días laborables -<br></br>  de lunes a viernes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xxl-4 col-xl-5 col-lg-6 col-12 align-self-center">
                                <Form className="form-annum border-0 talwin-formstyle services-movingr bg-white overflow-hidden">
                                    <div className="shape-bottom waveontopform">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                            <path className="shape-fill" fill="rgb(51 52 56 / 05%)" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path></svg>
                                    </div>


                                    <div className="waveontopform-above full-w">
                                        {cntryLoad ? (
                                            <>
                                                <Form.Select
                                                    className="mb-3 bg-white shadow-sm">
                                                    <option selected>
                                                        Please select your Department
                                                    </option>
                                                    <option>Doubt Session Appointment </option>
                                                    <option>Sales Department </option>
                                                    <option>Academic Support</option>
                                                    <option>Technical Support </option>
                                                    <option>Billing Support </option>
                                                    <option>Credit and Loan Support </option>
                                                </Form.Select>


                                                <Form.Select onChange={setvalPhone} value={selectphoneval} className="mb-3 bg-white shadow-sm">
                                                    <option selected>Please select your country</option>
                                                    {cntry.map((item, i) =>
                                                        <option value={[item.phonecode, item.country_title]}>{item.country_title}</option>
                                                    )}
                                                </Form.Select>

                                                <Form.Group
                                                    className="mb-3 bg-white shadow-sm"
                                                    controlId="formBasicEmail">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Nombre" />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3 bg-white shadow-sm"
                                                    controlId="formBasicPassword">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Correo electrónico" />
                                                </Form.Group>

                                                <InputGroup className="mb-3 bg-white shadow-sm">
                                                    <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text'>
                                                        + {selectphoneval == '' ? cntry[0].phonecode :
                                                            selectphoneval.toString().split(',')[0]
                                                        }
                                                    </InputGroup.Text>
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

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicEmail">
                                                    <Form.Control
                                                        className='shadow-sm'
                                                        as="textarea" rows={4}
                                                        placeholder="Mensaje" />
                                                </Form.Group>

                                                <InputGroup className="mb-4">
                                                    <InputGroup.Text className="py-1 fw-medium shadow-sm input-group-text input-group-text input-group-text">
                                                        5 + 2 =
                                                    </InputGroup.Text>
                                                    <FormControl
                                                        className='shadow-sm'
                                                        aria-label="First name"
                                                        placeholder="?" />
                                                </InputGroup>

                                                <Button
                                                    className="h-14 btn-site w-100 invert shadow-0"
                                                    type="submit">
                                                    <span>Enviar</span>
                                                </Button>
                                            </>
                                        ) : (
                                            <div className=" text-center align-self-center">
                                                <div className="p-5">
                                                    <button
                                                        className="btn btn-dark pt-2 shadow-lg"
                                                        type="button"
                                                        disabled>
                                                        <span
                                                            className="spinner-border spinner-border-sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                            style={{
                                                                width: '2rem',
                                                                height: '2rem',
                                                            }}
                                                        ></span>
                                                        <span className="sr-only">Loading...</span>
                                                    </button>
                                                </div>
                                            </div>
                                        )}


                                    </div>
                                </Form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help
