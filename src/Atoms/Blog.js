import React, { useContext } from "react";
import { Context } from "../Api";
import certi from "../Images/certi.jpg";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import "../style.css";
const Blog = (props) => {

    const options = {
        margin: 20,
        responsiveClass: true,
        autoplay: true,
        loop: false,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        },
    };
    return (
        <div className="faq-sectionquery scroll-spbx blogbased" id="blog">

            <div className="container py-16">
                <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold mb-4 uppercase">{props.heading} <span className="orange-clrsite">{props.heading2}</span></p>
                </div>

                <div className="d-none d-xl-block">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-12 mb-4 mb-xl-0">
                            <div className="full-w shadow-customblg rounded-xl overflow-hidden bg-white position-relative">
                                <img src={props.url1} className="w-full" alt={props.title1} />
                                <div className="p-4 border-top">
                                    {props.targetblankbx ?
                                        <a target={'_blank'} href={props.redirect1} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                            {props.title1}
                                        </a>
                                        :
                                        <Link to={props.redirect1} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                            {props.title1}
                                        </Link>
                                    }
                                    <div className="mt-3 d-flex flex-column flex-xl-row align-items-xl-center justify-content-between">
                                        <span className="text-gray-500 font-semibold"><i className="bi bi-calendar-fill mr-1"></i>
                                            {props.dataascustom ?
                                                props.date1
                                                :
                                                <Moment format="D-MMM-YYYY">{props.date1}</Moment>
                                            }
                                        </span>
                                        <br></br>

                                        {props.targetblankbx ?
                                            <a target={'_blank'} href={props.redirect1} className="btn-site invert no-underline">
                                                <span>Leer más</span></a>
                                            :
                                            <Link to={props.redirect1} className="btn-site invert no-underline">
                                                <span>Leer más</span></Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* second */}
                        <div className="col-xl-4 col-md-6 col-12 mb-4 mb-xl-0">
                            <div className="full-w shadow-customblg rounded-xl overflow-hidden bg-white position-relative">
                                <img src={props.url2} className="w-full" alt={props.title2} />
                                <div className="p-4 border-top">
                                    {props.targetblankbx ?
                                        <a target={'_blank'} href={props.redirect2} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                            {props.title2}
                                        </a>
                                        :
                                        <Link to={props.redirect2} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                            {props.title2}
                                        </Link>
                                    }
                                    <div className="mt-3 d-flex flex-column flex-xl-row align-items-xl-center justify-content-between">
                                        <span className="text-gray-500 font-semibold"><i className="bi bi-calendar-fill mr-1"></i>
                                            {props.dataascustom ?
                                                props.date2
                                                :
                                                <Moment format="D-MMM-YYYY">{props.date2}</Moment>
                                            }
                                        </span>
                                        <br></br>

                                        {props.targetblankbx ?
                                            <a target={'_blank'} href={props.redirect2} className="btn-site invert no-underline">
                                                <span>Leer más</span></a>
                                            :
                                            <Link to={props.redirect2} className="btn-site invert no-underline">
                                                <span>Leer más</span></Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* third */}
                        <div className="col-xl-4 col-md-6 col-12 mb-4 mb-xl-0">
                            <div className="full-w shadow-customblg rounded-xl overflow-hidden bg-white position-relative">
                                <img src={props.url3} className="w-full" alt={props.title3} />
                                <div className="p-4 border-top">
                                    {props.targetblankbx ?
                                        <a target={'_blank'} href={props.redirect3} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                            {props.title3}
                                        </a>
                                        :
                                        <Link to={props.redirect3} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                            {props.title3}
                                        </Link>
                                    }
                                    <div className="mt-3 d-flex flex-column flex-xl-row align-items-xl-center justify-content-between">
                                        <span className="text-gray-500 font-semibold"><i className="bi bi-calendar-fill mr-1"></i>
                                            {props.dataascustom ?
                                                props.date3
                                                :
                                                <Moment format="D-MMM-YYYY">{props.date3}</Moment>
                                            }
                                        </span>
                                        <br></br>

                                        {props.targetblankbx ?
                                            <a target={'_blank'} href={props.redirect3} className="btn-site invert no-underline">
                                                <span>Leer más</span></a>
                                            :
                                            <Link to={props.redirect3} className="btn-site invert no-underline">
                                                <span>Leer más</span></Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <div className='blgvisibleowlcarousel full-w media-prtslider d-xl-none'>
                    <OwlCarousel className="slider-items owl-carousel" {...options}>

                        <div className="mb-4 mb-xl-0 shadow-customblg border position-relative">
                            <img src={props.url1} className="w-full" alt={props.title1} />
                            <div className="p-4 border-top bg-gray-50 bg-white">
                                {props.targetblankbx ?
                                    <a target={'_blank'} href={props.redirect1} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                        {props.title1}
                                    </a>
                                    :
                                    <Link to={props.redirect1} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                        {props.title1}
                                    </Link>
                                }
                                <div className="mt-3 d-flex flex-column flex-xl-row align-items-xl-center justify-content-between">
                                    <span className="text-gray-500 font-semibold"><i className="bi bi-calendar-fill mr-1"></i>
                                        {props.dataascustom ?
                                            props.date1
                                            :
                                            <Moment format="D-MMM-YYYY">{props.date1}</Moment>
                                        }
                                    </span>
                                    <br></br>

                                    {props.targetblankbx ?
                                        <a target={'_blank'} href={props.redirect1} className="btn-site invert no-underline">
                                            <span>Leer más</span></a>
                                        :
                                        <Link to={props.redirect1} className="btn-site invert no-underline">
                                            <span>Leer más</span></Link>
                                    }
                                </div>
                            </div>
                        </div>



                        <div className="mb-4 mb-xl-0 shadow-customblg border position-relative">
                            <img src={props.url2} className="w-full" alt={props.title2} />
                            <div className="p-4 border-top bg-gray-50 bg-white">
                                {props.targetblankbx ?
                                    <a target={'_blank'} href={props.redirect2} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                        {props.title2}
                                    </a>
                                    :
                                    <Link to={props.redirect2} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                        {props.title2}
                                    </Link>
                                }
                                <div className="mt-3 d-flex flex-column flex-xl-row align-items-xl-center justify-content-between">
                                    <span className="text-gray-500 font-semibold"><i className="bi bi-calendar-fill mr-1"></i>
                                        {props.dataascustom ?
                                            props.date2
                                            :
                                            <Moment format="D-MMM-YYYY">{props.date2}</Moment>
                                        }
                                    </span>
                                    <br></br>

                                    {props.targetblankbx ?
                                        <a target={'_blank'} href={props.redirect2} className="btn-site invert no-underline">
                                            <span>Leer más</span></a>
                                        :
                                        <Link to={props.redirect2} className="btn-site invert no-underline">
                                            <span>Leer más</span></Link>
                                    }
                                </div>
                            </div>
                        </div>



                        <div className="mb-4 mb-xl-0 shadow-customblg border position-relative">
                            <img src={props.url3} className="w-full" alt={props.title3} />
                            <div className="p-4 border-top bg-gray-50 bg-white">
                                {props.targetblankbx ?
                                    <a target={'_blank'} href={props.redirect3} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                        {props.title3}
                                    </a>
                                    :
                                    <Link to={props.redirect3} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                        {props.title3}
                                    </Link>
                                }
                                <div className="mt-3 d-flex flex-column flex-xl-row align-items-xl-center justify-content-between">
                                    <span className="text-gray-500 font-semibold"><i className="bi bi-calendar-fill mr-1"></i>
                                        {props.dataascustom ?
                                            props.date3
                                            :
                                            <Moment format="D-MMM-YYYY">{props.date3}</Moment>
                                        }
                                    </span>
                                    <br></br>

                                    {props.targetblankbx ?
                                        <a target={'_blank'} href={props.redirect3} className="btn-site invert no-underline">
                                            <span>Leer más</span></a>
                                        :
                                        <Link to={props.redirect3} className="btn-site invert no-underline">
                                            <span>Leer más</span></Link>
                                    }
                                </div>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>



            </div>
        </div>
    )
}
export default Blog;

