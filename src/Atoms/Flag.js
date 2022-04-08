import React, { useContext, useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Context } from '../Api'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom'
import india from '../Images/india.gif'
import singapor from '../Images/singapore.gif'
import us from '../Images/usa.gif'
import serbia from '../Images/serbia.png'
import Uk from '../Images/uk.png'
import ae from '../Images/ae.png'
import bd from '../Images/bd.png'
import { CurrencyContxt } from '../Atoms/Contextcurrency'

const Flag = (props) => {
    const { value1, value2 } = useContext(Context)
    const [exactData, setData] = value1
    const [status, loadStatus] = value2

    // countryflag-menu
    const [ctrylang, setctrylang] = useState('inr')
    const [ctryflag, setctryflag] = useState(india)
    const [ctryflagtitle, setctryflagtitle] = useState('+91-92-5000-4000')

    // loadspin
    const [spindrop, setSpindrop] = useState(false);
    // currency inr/usd
    const [contextcur, setContextCur] = useContext(CurrencyContxt)

    function countryChange(src, title, currency) {
        setctryflag(src)
        setctryflagtitle(title)
        setctrylang(currency)
        setContextCur({ currency, title })
        setSpindrop(true)
        setTimeout(function () {
            setSpindrop(false)
        }, 300); 
    }



    return (
        <>
            {/* {status ? (
                <div className="float-right ">
                    <DropdownButton
                        className="mt-4"
                        variant="danger"
                        id="dropdown-basic-button"
                        size="sm"
                        title="Explore Courses">
                        {exactData.map((val, e) => (
                            <Dropdown.Item>
                                <Link
                                    className="no-underline text-black "
                                    to={val.category_url}
                                >
                                    {val.category_title}
                                </Link>
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
            ) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )} */}

            <DropdownButton
                className="countryflag-menu"
                variant="primary"
                id="dropdown-basic-button"
                size="sm"
                title={
                    <div className="w-100">
                        {spindrop ?
                        <div className='empty-searchload mt-1'>
                           <div className="spinner-border text-secondary search-sprou text-gray-500" role="status">
                         </div>
                         <small className='ml-1 text-gray-500'>Cargando...</small>
                         </div>
                            :
                        <>
                        {contextcur.currency === 'Asia/Kolkata' ?
                            <img src={india} alt="Asia/Kolkata" className="inline" />
                            : ''}

                        {contextcur.currency === 'Asia/Singapore' ?
                            <img src={singapor} alt="Asia/Singapore" className="inline" />
                            : ''}

                        {contextcur.currency === 'America/New_York' ?
                            <img src={us} alt="America/New_York" className="inline" />
                            : ''}

                        {contextcur.currency === 'SGT' ?
                            <img src={serbia} alt="SGT" className="inline" />
                            : ''}

                        {contextcur.currency === 'Europe/London' ?
                            <img src={Uk} alt="Europe/London" className="inline" />
                            : ''}

                        {contextcur.currency === 'Asia/Dubai' ?
                            <img src={ae} alt="Asia/Dubai" className="inline" />
                            : ''}

                        {contextcur.currency === 'Asia/Dhaka' ?
                            <img src={bd} alt="Asia/Dhaka" className="inline" />
                            : ''}
                          
                            {contextcur.title}
                        </>

                        }
                    </div>
                }
            >
                <Dropdown.Item
                    onClick={() =>
                        countryChange(india, '+91-92-5000-4000', 'Asia/Kolkata')
                    }
                    href={void 0}
                >
                    <img src={india} alt="Asia/Kolkata" className="inline" /> &nbsp;
                    <i className="fas fa-phone-alt mr-2"></i>
                    <span className="text-sm font-semibold">
                        +91-92-5000-4000
                    </span>
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() =>
                        countryChange(
                            singapor,
                            '+65-31-591-123',
                            'Asia/Singapore'
                        )
                    }
                    href={void 0}
                >
                    <img src={singapor} alt="Asia/Singapore" className="inline" /> &nbsp;
                    <i className="fas fa-phone-alt mr-2"></i>
                    <span className="text-sm font-semibold">
                        +65-31-591-123
                    </span>
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() =>
                        countryChange(
                            us,
                            '+1-844-889-4054',
                            'America/New_York'
                        )
                    }
                    href={void 0}
                >
                    <img src={us} alt="America/New_York" className="inline" /> &nbsp;
                    <i className="fas fa-phone-alt mr-2"></i>
                    <span className="text-sm font-semibold">
                        +1-844-889-4054
                    </span>
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() =>
                        countryChange(serbia, '+381-65-454-7847', 'SGT')
                    }
                    href={void 0}
                >
                    <img src={serbia} alt="SGT" className="inline" /> &nbsp;
                    <i className="fas fa-phone-alt mr-2"></i>
                    <span className="text-sm font-semibold">
                        +381-65-454-7847
                    </span>
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() =>
                        countryChange(
                            Uk,
                            '+44-203-769-0986',
                            'Europe/London'
                        )
                    }
                    href={void 0}
                >
                    <img src={Uk} alt="Europe/London" className="inline" /> &nbsp;
                    <i className="fas fa-phone-alt mr-2"></i>
                    <span className="text-sm font-semibold">
                        +44-203-769-0986
                    </span>
                </Dropdown.Item>
                {/* <Dropdown.Item
                    onClick={() =>
                        countryChange(ae, '+971-56-583-7368', 'Asia/Dubai')
                    }
                    href={void 0}
                >
                    <img src={ae} alt="Asia/Dubai" className="inline" /> &nbsp;
                    <i className="fas fa-phone-alt mr-2"></i>
                    <span className="text-sm font-semibold">
                        +971-56-583-7368
                    </span>
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() =>
                        countryChange(bd, '+91-9643-034-607', 'Asia/Dhaka')
                    }
                    href={void 0}
                >
                    <img src={bd} alt="Asia/Dhaka" className="inline" /> &nbsp;
                    <i className="fas fa-phone-alt mr-2"></i>
                    <span className="text-sm font-semibold">
                        +91-9643-034-607
                    </span>
                </Dropdown.Item> */}
            </DropdownButton>

        </>
    )
}

export default Flag
