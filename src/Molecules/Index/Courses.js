import React, { useEffect, useState, useContext } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import AnimatedNumbers from "react-animated-numbers";
import { Context } from '../../Api';
import certificate from "../../Images/Certificate.svg";
import post from "../../Images/Post.svg";


export default function Courses() {
    const { value13, value14 } = useContext(Context)
    const [exactData] = value13
    const [status] = value14

    // settotalcour
    const [totalcour, settotalcour] = useState([3, "Programas De Postgrado"]);

    //Owl Carousel Settings
    const [KeyOwl, setKeyOwl] = useState();

    const options = {
        responsiveClass: true,
        loop: false,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        dots: false,
        nav: true,
        center: false,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
                stagePadding: 10
            },
            400: {
                items: 1,
                slideBy: 1,
                stagePadding: 10
            },
            768: {
                items: 2,
                slideBy: 2,
                smartSpeed: 100,
            },
            1200: {
                items: 3,
                slideBy: 3,
                smartSpeed: 100,
            }
        },
    };


    // onOpentab
    function onOpentab(k) {
        setKeyOwl(options)
        if (k === "postgrado") {
            settotalcour([exactData.filter((item) => item.new_label === '1').length, "Programas De Postgrado"]);
        }

        if (k === "caciones") {
            settotalcour([exactData.filter((item) => item.new_label === '2').length, "Certificaciones"]);
        }
    }


    return (
        <>
            {/* mockexam-certi */}
            {status ?
                <div className='mockexam-certi caciones-slider'>
                    <div className='container pt-20 pb-28'>
                        <h3 className="text-center text-gray-700 font-bold mb-2 text-base sm:text-lg md:text-xl">
                            Comience Su Carrera Con <span className="orange-lgclr">{totalcour[1]}</span>
                        </h3>
                        <p className="text-center text-gray-700 font-bold text-3xl md:text-4xl lg:text-5xl mb-0">
                            <span className="d-inline-block procur"><AnimatedNumbers animateToNumber={totalcour === '' ? exactData.filter((item) => item.new_label === '1').length : totalcour[0]}></AnimatedNumbers></span>
                            + {' '} <span className="text-blue-500"> Profesional</span> Cursos
                        </p>
                        <div className="pt-4 megamenu-wrapper media-prtslider">
                            <div className='ourclient-staffing'>

                                <Tabs defaultActiveKey="postgrado" transition={true} onSelect={(k) => onOpentab(k)}>

                                    <Tab eventKey="postgrado" title="Programas De Postgrado">
                                        <OwlCarousel className="slider-items owl-carousel" {...options}>
                                            {exactData &&
                                                exactData.filter((item) => item.new_label === '1').map((dat, ind) => {
                                                    return (
                                                        <>
                                                            {/* owlitem */}
                                                            <div className="owlitem" key={dat.course_id}>
                                                                <div className="cards h-100 d-flex flex-column">
                                                                    <Link to={'/' + dat.courseFUllURL} className="no-underline mb-1">
                                                                        <div
                                                                            className="pt-2 pl-4 rounded-lg">
                                                                            <div className={"eiml-shadow " + (dat.courseType === 'Long' ? 'blue' : 'red')}></div>
                                                                            <div className="course-type topfix">
                                                                                <div className="course-typeinn">
                                                                                    <i className="bi bi-clock text-base"></i>
                                                                                    <span className="font-bold ml-2">
                                                                                        {
                                                                                            dat.courseType
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </div>

                                                                            <img src={"upcoming_batches_icon/" + (dat.friendlyName) + ".png"}
                                                                                className="w-1/3 relative top-4 border rounded-full" 
                                                                                alt={dat.textonimage} />
                                                                        </div>
                                                                        <div className="px-3 pb-4 pt-10 d-flex flex-column flex-grow-1 overflow-hidden">
                                                                            <div className="flex-grow-1">
                                                                                <div className="post-total-rating text-sm">
                                                                                    <i className="fas fa-star mr-1"></i>
                                                                                    <i className="fas fa-star mr-1"></i>
                                                                                    <i className="fas fa-star mr-1"></i>
                                                                                    <i className="fas fa-star mr-1"></i>
                                                                                    <i className="fas fa-star mr-1"></i>
                                                                                    <span className="ml-2 text-black">5.0</span>
                                                                                </div>
                                                                                <p className="font-bold text-gray-600 course-title">
                                                                                    {
                                                                                        dat.CourseTitel
                                                                                    }
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </Link>


                                                                    <Link to={'/' + dat.categoryURL} className="durationcou course-type mt-auto mb-0 p-0 no-underline text-gray-900 font-semibold">
                                                                        <div className="course-typeinn py-3 d-flex justify-content-between flex-column flex-sm-row">
                                                                            <div className="pr-smtime-2">
                                                                                {dat.categoryTitle}
                                                                            </div>

                                                                            <div className="text-gray-600 text-nowrap">
                                                                                {dat.Duration ?
                                                                                    <>
                                                                                        <i className="bi bi-calendar4 mr-2"></i>
                                                                                        {dat.Duration}
                                                                                    </>
                                                                                    : ''}
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })}

                                        </OwlCarousel>
                                    </Tab>

                                    <Tab eventKey="caciones" title="Certificaciones">

                                        <OwlCarousel className="slider-items owl-carousel" {...options}>
                                            {exactData &&
                                                exactData.filter((item) => item.new_label === '2').map((dat, ind) => {
                                                    return (
                                                        <>
                                                            {/* owlitem */}
                                                            <div className="owlitem" key={dat.course_id}>
                                                                <div className="cards h-100 d-flex flex-column">
                                                                    <Link to={'/' + dat.courseFUllURL} className="no-underline mb-1">
                                                                        <div
                                                                            className="pt-2 pl-4 rounded-lg">
                                                                            <div className={"eiml-shadow " + (dat.courseType === 'Long' ? 'blue' : 'red')}></div>
                                                                            <div className="course-type topfix">
                                                                                <div className="course-typeinn">
                                                                                    <i className="bi bi-clock text-base"></i>
                                                                                    <span className="font-bold ml-2">
                                                                                        {
                                                                                            dat.courseType
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </div>

                                                                            <img src={"upcoming_batches_icon/" + (dat.friendlyName) + ".png"}
                                                                                className="w-1/3 relative top-4 border rounded-full" 
                                                                                alt={dat.textonimage} />
                                                                        </div>
                                                                        <div className="px-3 pb-4 pt-10 d-flex flex-column flex-grow-1 overflow-hidden">
                                                                            <div className="flex-grow-1">
                                                                                <div className="post-total-rating text-sm">
                                                                                    <i className="fas fa-star mr-1"></i>
                                                                                    <i className="fas fa-star mr-1"></i>
                                                                                    <i className="fas fa-star mr-1"></i>
                                                                                    <i className="fas fa-star mr-1"></i>
                                                                                    <i className="fas fa-star mr-1"></i>
                                                                                    <span className="ml-2 text-black">5.0</span>
                                                                                </div>
                                                                                <p className="font-bold text-gray-600 course-title">
                                                                                    {
                                                                                        dat.CourseTitel
                                                                                    }
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </Link>


                                                                    <Link to={'/' + dat.categoryURL} className="durationcou course-type mt-auto mb-0 p-0 no-underline text-gray-900 font-semibold">
                                                                        <div className="course-typeinn py-3 d-flex justify-content-between flex-column flex-sm-row">
                                                                            <div className="pr-smtime-2">
                                                                                {dat.categoryTitle}
                                                                            </div>

                                                                            <div className="text-gray-600 text-nowrap">
                                                                                {dat.Duration ?
                                                                                    <>
                                                                                        <i className="bi bi-calendar4 mr-2"></i>
                                                                                        {dat.Duration}
                                                                                    </>
                                                                                    : ''}
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })}

                                        </OwlCarousel>
                                    </Tab>

                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                : <div className="overflow-hidden text-center py-6">
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>}



            {/* Counter */}
            <div className="regiavail full-w">
                <div className="container pt-12 sm:pt-20">
                    <div className="row">
                        <div className="text-center text-white pb-5 col-xl-3 col-sm-6 col-12 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-full mb-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="font-bold text-4xl md:text-5xl mb-1">

                                <div className='animated_numberscenter w-100'>
                                    <AnimatedNumbers animateToNumber={104473}></AnimatedNumbers>
                                </div>
                            </p>
                            <p className=" text-lg md:text-lg">Usuarios Registrados</p>
                        </div>


                        <div className="text-center text-white pb-5 col-xl-3 col-sm-6 col-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-full mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                            <p className="font-bold text-4xl md:text-5xl mb-1">

                                <div className='animated_numberscenter w-100'>
                                    <AnimatedNumbers animateToNumber={146}></AnimatedNumbers>
                                </div>
                            </p>
                            <p className="text-lg md:text-lg">Cursos Disponibles</p>
                        </div>

                        <div className="text-center text-white pb-5 col-xl-3 col-sm-6 col-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-full mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                            <p className="font-bold text-4xl md:text-5xl mb-1">

                                <div className='animated_numberscenter w-100'>
                                    <AnimatedNumbers animateToNumber={1054}></AnimatedNumbers>
                                </div>
                            </p>
                            <p className="text-lg md:text-lg">Próximas Clases</p>
                        </div>

                        <div className="text-center text-white pb-5 col-xl-3 col-sm-6 col-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-full mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                            <p className="font-bold text-4xl md:text-5xl mb-1">

                                <div className='animated_numberscenter w-100'>
                                    <AnimatedNumbers animateToNumber={47}></AnimatedNumbers>
                                </div>
                            </p>
                            <p className="text-lg md:text-lg">Aprendizajes Electrónicos</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="shape-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="shape-fill" fill="#084f99" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                </svg>
            </div>
        </>
    )
}
