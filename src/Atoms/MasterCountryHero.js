import React, { useContext, useState, useEffect } from 'react'
import partner from '../Images/Partner.jpg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Context, Provider } from "../Api";
import { CurrencyContxt } from './Contextcurrency';

export default function MasterCountryHero(props) {
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
        <div style={{ background: 'rgba(0, 0, 0, 0.5)' }} className='partner-marketing-affiliates would full-w'>
            <div style={{
                backgroundImage: `url(${partner})`,
                backgroundSize: 'cover',
            }}>

                <div className="container py-16">
                    <div className='row align-items-center'>

                        <div className="col-xl-7 col-12 pb-16 pb-xl-0">
                            <h1 className="text-2xl md:text-3xl text-white font-bold mt-1 mb-4 uppercase maintitle mastercnhero">
                                {props.title}
                            </h1>
                            <span className="heading-border-line d-block left-0 mt-2 mb-4 mx-auto mx-lg-0 d"></span>
                            <div className="row mt-1 mb-4 text-white">
                                <div className="col-xxl-6 col-12">
                                    <ul className="px-0 mb-0">
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            {props.durationasitis ?
                                                props.durationasitis
                                                :
                                                <>
                                                    36 horas
                                                </>
                                            }
                                        </li>
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            Vive en línea
                                        </li>
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            Folletos para estudiantes{" "}
                                        </li>
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            Asistir 3 Veces en 6 Meses
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xxl-6 col-12">
                                    <ul className="px-0">
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            Aprendizaje electrónico
                                        </li>
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            Vídeo grabado
                                        </li>
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            Simulacros de examen
                                        </li>
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            Orientación profesional
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-5 mt-lg-4">
                                <a href={"tel:" + contextcur.title}
                                    target="_blank"
                                    className="md:h-12 btn-site invert mr-4 no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">
                                    <span><i className="fa mr-1 fa-phone"></i> {contextcur.title}</span>
                                </a>

                                {contextcur.currency === 'Asia/Kolkata' ?
                                    <a href="mailto:support@careerera.com"
                                        target='_blank'
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-1 fa-envelope"></i>
                                            support@careerera.com
                                        </span>
                                    </a>
                                    : ''}

                                {contextcur.currency === 'Asia/Singapore' ?
                                    <a href="mailto:support@careerera.com"
                                        target='_blank'
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-1 fa-envelope"></i>
                                            support@careerera.com
                                        </span>
                                    </a>
                                    : ''}

                                {contextcur.currency === 'America/New_York' ?
                                    <a href="mailto:info@careerera.com"
                                        target='_blank'
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-1 fa-envelope"></i>
                                            info@careerera.com
                                        </span>
                                    </a>
                                    : ''}

                                {contextcur.currency === 'SGT' ?
                                    <a href="mailto:support@careerera.com"
                                        target='_blank'
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-1 fa-envelope"></i>
                                            support@careerera.com
                                        </span>
                                    </a>
                                    : ''}

                                {contextcur.currency === 'Europe/London' ?
                                    <a href="mailto:info@careerera.com"
                                        target='_blank'
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-1 fa-envelope"></i>
                                            info@careerera.com
                                        </span>
                                    </a>
                                    : ''}

                                {contextcur.currency === 'Asia/Dubai' ?
                                    <a href="mailto:info@careerera.com"
                                        target='_blank'
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-1 fa-envelope"></i>
                                            info@careerera.com
                                        </span>
                                    </a>
                                    : ''}

                                {contextcur.currency === 'Asia/Dhaka' ?
                                    <a href="mailto:support@careerera.com"
                                        target='_blank'
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-1 fa-envelope"></i>
                                            support@careerera.com
                                        </span>
                                    </a>
                                    : ''}
                            </div>




                        </div>



                        <div className="ml-auto col-xxl-4 col-xl-5 col-12 align-self-center help-page">

                            <Form className="form-annum talwin-formstyle">

                                <div className="waveontopform-above full-w">
                                    {cntryLoad ?
                                        <>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Control className='block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
 h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base' type="text" placeholder="Nombre *" required />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword">
                                                <Form.Control className='block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
 h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base'
                                                    type="email"
                                                    placeholder="Correo electrónico *" required />
                                            </Form.Group>

                                            <Form.Select onChange={setvalPhone} value={selectphoneval} className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
 h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base mb-3">
                                                <option selected>Please select your country</option>
                                                {cntry.map((item, i) =>
                                                    <option value={[item.phonecode, item.country_title]}>{item.country_title}</option>
                                                )}
                                            </Form.Select>

                                            <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm'>
                                                    + {selectphoneval == '' ? cntry[0].phonecode :
                                                        selectphoneval.toString().split(',')[0]
                                                    }
                                                </InputGroup.Text>
                                                <FormControl
                                                    className='block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                                h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base'
                                                    placeholder="Teléfono *"
                                                    type="number"
                                                    value={phoneSetvalue}
                                                    required
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
                                        controlId="formBasicEmail">
                                        <Form.Control className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
 h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base'
                                            as="textarea" rows={4}
                                            placeholder="Descripción" />
                                    </Form.Group>

                                    <InputGroup className="mb-4">
                                        <InputGroup.Text className="py-1 fw-medium shadow-sm">
                                            7 + 2 =
                                        </InputGroup.Text>
                                        <FormControl
                                            className='block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                        h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base'
                                            aria-label="First name"
                                            placeholder="?"
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
                </div>
            </div>
        </div>
    )
}
