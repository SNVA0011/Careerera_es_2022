import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Moment from 'react-moment'
import fun from '../Images/fun4.gif'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const FullTestimonial = () => {
    const [data, setdata] = useState([])
    const [load, setload] = useState(false)
    async function CallApi() {
        const testimonials = await fetch(
            'https://my.careerera.com/API/course/HomepageComment.php'
        )
        const review = await testimonials.json()
        setdata(review.records[0].Comments)
        setload(true)
    }


    useEffect(() => {
        CallApi()
        window.scrollTo(0, 0)
    }, []);


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
        <>
            {load ? <div>

                <Helmet>
                    <title>LO QUE DICE LA GENTE</title>
                    <meta name="description" content="This webpage Testinomials." />
                    <meta name="keywords" content="Careerera Testinomials" />
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <link rel="canonical" href="https://www.careerera.com/es/review" />
                </Helmet>



                <div className="">

                    <div className="querysign-full scroll-spbx">
                        <div className="container pt-20 pb-8">
                            <div className="row">
                                <div className="col-lg-10 col-xl-8 mx-auto col-12 text-center">
                                    <h1 className="text-center text-gray-700 font-bold text-3xl md:text-4xl uppercase">LO QUE DICE  <span className="text-blue-500 sitblu-clrsite">LA GENTE</span></h1>
                                    <hr className="w-20 hr mb-6 bg-blue-400 sepfoll-hr mx-auto" />
                                </div>
                            </div>

                            {/* row */}
                            <div className="d-none d-xl-block">
                                <div className="row">
                                    <div className='col-lg-4 col-12 pb-6'>
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="rounded-lg" width="100%" height="315" src="https://www.youtube.com/embed/reVJIWHa4l4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>

                                    <div className='col-lg-4 col-12 pb-6'>
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="rounded-lg" width="100%" height="315" src="https://www.youtube.com/embed/Z5O_me_6jvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>


                                    <div className='col-lg-4 col-12 pb-6'>
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="rounded-lg" width="100%" height="315" src="https://www.youtube.com/embed/mtyB6j8AgFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* blgvisibleowlcarousel */}
                            <div className="d-xl-none">
                                <div className='blgvisibleowlcarousel full-w media-prtslider'>
                                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="rounded-lg" width="100%" height="315" src="https://www.youtube.com/embed/reVJIWHa4l4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>

                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="rounded-lg" width="100%" height="315" src="https://www.youtube.com/embed/Z5O_me_6jvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>

                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="rounded-lg" width="100%" height="315" src="https://www.youtube.com/embed/mtyB6j8AgFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='overflow-hidden ppt-clistaff top-2-relativeplus'>
                        <div className="shape-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                <path className="shape-fill" fill="#d5e8ff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="testimonials-areamock whatstu">
                        <div className="container py-16">

                            <div className="row">
                                <div className="col-lg-10 col-xl-8 mx-auto col-12 text-center">
                                    <h3 className="text-center text-gray-700 font-bold text-3xl md:text-4xl uppercase">Comenta<span className="text-blue-500 sitblu-clrsite">rios</span></h3>
                                    <p className="text-gray-500 text-base md:text-lg fw-medium">Lo que dicen nuestras estudiantes</p>
                                    <hr className="w-20 hr mb-6 bg-blue-400 sepfoll-hr mx-auto" />
                                </div>
                            </div>

                            <div className="row">

                                {data.map((item, i) => (
                                    <div className="col-xxl-4 col-lg-6 col-12 pb-4">
                                        <div className='mb-2 shadow-md bg-white p-6 text-left w-full border-2 
                                        border-white rounded-3xl slidebg-h h-100 d-flex flex-column comment-fulllike'>
                                            <div className="flex-grow-1">

                                                <div className="d-flex justify-content-between">
                                                    <i className="bi bi-person-circle text-blue-200 text-3xl usercomment-sh"></i>
                                                    <div className="flex-grow-1 pl-3">
                                                        <div className="d-flex justify-content-between">
                                                            <h2 className="font-semibold capitalize text-xl sm:text-2xl text-gray-700 pr-3">
                                                                {item.title}
                                                            </h2>
                                                            <i className="text-gray-200 text-xl d-inline-block fas fa-quote-right"></i>
                                                        </div>

                                                        <div className="post-total-rating text-sm">
                                                            {new Array(parseInt(item.rate)).fill().map((_, i) =>
                                                                <i className="bi bi-star-fill text-yellow-400 mr-1" key={i}></i>
                                                            )}
                                                            {item.rate < 5 ?
                                                                new Array(5 - parseInt(item.rate)).fill().map((_, n) =>
                                                                    <i className="bi bi-star mr-1"></i>
                                                                )
                                                                : ''}

                                                            <span className="ml-2 text-black">{item.rate}</span>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="text-gray-700 sm:text-lg mt-4 mb-1">
                                                    <p className="d-inline">{item.comment}</p>
                                                </div>
                                            </div>

                                            <div className="position-relative mt-2 border-top pt-4 d-flex flex-xl-row align-items-center justify-content-between">
                                                <div className='font-semibold text-gray-400 text-sm mt-1'>
                                                    <i className='bi bi-calendar2 mr-2'></i>
                                                    <Moment format="D-MMM-YYYY">{item.date}</Moment>
                                                </div>

                                                {item.linkedin.includes('linkedin') ?
                                                    <div className="rounded-social-buttons m-0"> <a
                                                        className="social-button linkedin m-0"
                                                        href={item.linkedin}
                                                        target="_blank">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                    </div>
                                                    : ''}
                                            </div>



                                        </div>


                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>


                </div>
            </div> : <img src={fun} className="w-screen" alt="careerera-loader-image" />}

        </>
    )
}
export default FullTestimonial;






