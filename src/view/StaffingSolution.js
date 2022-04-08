import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import Hero from "../Atoms/Hero";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import hcl from '../Images/staffing/hcl.png';
import neel from '../Images/staffing/neel.png';
import qualcomm from '../Images/staffing/qualcomm.png';
import idc from '../Images/staffing/idc.png';
import realbox from '../Images/staffing/realbox.png';
import wonder from '../Images/staffing/wonder.png';
import shadow from '../Images/staffing/shadow.png';
import nextec from '../Images/staffing/nextec.png';
import incise from '../Images/staffing/incise.jpg';
import maccadin from '../Images/staffing/maccadin.png';
import ey from '../Images/staffing/ey.png';
import il from '../Images/staffing/il.png';
import deal from '../Images/staffing/deal.png';
import aclogo7 from '../Images/staffing/ac-logo7.png';
import baregrillz from '../Images/staffing/bare-grillz.png';
import saracraft from '../Images/staffing/sara-craft.png';
import tyt from '../Images/staffing/tyt.png';
import illcunsulting from '../Images/staffing/ill-cunsulting.png';
import rfsilicon from '../Images/staffing/rf-silicon.png';
import arnavcandy from '../Images/staffing/arnav-candy.png';


export default function StaffingSolution() {


    //Owl Carousel Settings
    const options = {
        responsiveClass: true,
        autoplay: true,
        loop: false,
        autoplayHoverPause: true,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        dots: false,
        rewind: true,
        nav: true,
        center: true,
        responsive: {
            0: {
                items: 2,
                margin: 5,
                startPosition: 1
            },
            400: {
                items: 2,
                margin: 5,
                startPosition: 1
            },
            576: {
                items: 2,
                margin: 5,
                startPosition: 1
            },
            800: {
                items: 3,
                margin: 15,
                startPosition: 1,
            },
            992: {
                items: 4,
                margin: 20,
                startPosition: 1,
            },
            1200: {
                items: 5,
                margin: 20,
                startPosition: 2
            }
        },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='staffingsol'>
            <Helmet>
                <title>Careerera- SOLUCIONES DE DOTACIÓN DE PERSONAL</title>
                <meta name="description" content="Read here history of Careerera online professional training company. Careerera is USA based Herndon company, offering different certification programs & online classroom training." />
                <meta name="keywords" content="About Careerera, History of Careerera, Careerera About us Page" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <link rel="canonical" href="https://www.careerera.com/es/staffing-solution" />
            </Helmet>

            <Hero title="Soluciones De Dotación De Personal" batch="Hogar / Soluciones De Dotación De Personal" />


            <div className="discription_sec">
                <div className="container pt-24 pb-12">
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold text-center">
                            Soluciones De Dotación <span className="orange-clrsite">De Personal</span>
                        </h2>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                    </div>
                    <div className="des_content text-center md:text-lg font-semibold">
                        <p>Somos una marca reconocida en la industria del reclutamiento además de la educación y la capacitación corporativa. A lo largo de los años de experiencia y conocimientos, hemos atendido a la mayoría de las principales multinacionales y empresas líderes de la India, lo que nos convierte en un consultor de confianza en servicios de contratación.</p>
                        <p>Somos una empresa con sede en Noida con presencia internacional en EE. UU., Reino Unido, Singapur y Malasia. Tenemos experiencia en la contratación principalmente en todas las industrias en la jerarquía de gestión media y superior. Tenemos más de 100 consultores trabajando con nosotros, lo que incluye más de 1500 reclutadores con nosotros. Siempre hemos estado generando ingresos, es decir, el 70 % de nuestros clientes existentes, lo que expresa la satisfacción de nuestros clientes</p>
                    </div>
                </div>

                <div className='overflow-hidden ppt-clistaff'>
                    <div className="shape-bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="shape-fill" fill="#275585" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                        </svg>
                    </div>
                </div>

            </div>


            <div className='training-room'>
                <div className="explore_Data_science ourclient-staffing why-datasciencesuf scroll-spbx bg-blue-50">
                    <div className="container py-16">
                        <div className="sec_title">
                            <h3 className="text-2xl md:text-3xl font-bold text-center text-white">
                            NUESTRAS <span className="text-yellow-400">CLIENTAS</span>
                            </h3>

                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                        </div>

                        <div className="full-w media-prtslider">

                            <OwlCarousel className="slider-items owl-carousel" {...options}>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={hcl} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={neel} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={qualcomm} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={idc} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={realbox} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={wonder} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={shadow} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={nextec} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={incise} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={maccadin} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={ey} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={il} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={deal} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={aclogo7} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={baregrillz} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={saracraft} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={tyt} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={illcunsulting} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={rfsilicon} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                                <div className="item w-full">
                                    <div className='rounded-lg border bg-white w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img src={arnavcandy} alt="clients-brand-image" className="card-img-top" />
                                    </div>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



