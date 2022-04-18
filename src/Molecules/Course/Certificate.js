import React, { useContext, useEffect, useState } from 'react'
import datascince from '../../Images/Datascience.png'
import edx from '../../Images/edx_logo.svg'
import harvard from '../../Images/harvard_logo.png'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useParams } from 'react-router'
import { Context } from '../../Api'
import EnquireNowForm from './../Course/EnquireNowForm';


const Certificate = (props) => {


    const [allcountryList, setallcountryList] = useState([])
    const [countryLoad, setcountryLoad] = useState(false)


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
        <div className='certification-courses full-w'>
         <div className="container">
                    <div className="row py-16 align-items-center">
                        <div className="col-xxl-8 col-xl-7 col-lg-6 col-12 pb-3 pb-xl-0">
                            {props.data[0] ?
                                <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white uppercase">
                                    {props.data[0].category_title} {" "}
                                    <span className="orange-lgclr d-inline-block">
                                    CURSO DE CERTIFICACIÓN
                                    </span>
                                </h2>
                                : ''}
                            <hr className="w-20 hr hrcer-cr" />

                            <p className="text-base sm:text-lg md:text-xl text-white my-8 font-medium  tracking-wide">
                                {props.data[0].courseList[0].CourseDetails}
                            </p>
                            <p className="font-normal text-white text-base md:text-lg md:text-xl duration">
                                <i className="fas fa-calendar-week mr-2"></i> Duración -{' '}
                                <span className="font-bold durationclr">
                                    {props.data[0].courseList[0].Duration}
                                </span>{' '}
                            </p>
                        </div>

                        {/* form */}
                        <EnquireNowForm />
                    </div>
                </div>
        </div>
    )
}
export default Certificate
