import React from "react";
import data from "../../Images/Data_Science_Image.jpg"
import m1 from "../../Images/m1.png";
import m2 from "../../Images/m2.png";
import m3 from "../../Images/m3.png";
import m4 from "../../Images/m4.png";
import m5 from "../../Images/m5.png";
import m6 from "../../Images/m6.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const options = {
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    },
};


const Explore = () => {
    return (
        <div className="full-w explore-our-data" id="explore">
            <div className="container pt-16 pb-12">
                <h1 className='text-4xl font-bold text-gray-800'>Explore nuestros datos <span className="text-blue-500"> Cursos de ciencia </span></h1>
                <p className='text-lg font-semibold text-gray-600'>Vea qué beneficios puede obtener al unirse a este programa.</p>

                <div className='hidden md:block'>
                    <div className="row">
                        <div className='col-xl-4 col-md-6 col-12 mb-4'>
                            <div className='border-2 rounded-2xl shadow h-auto w-full '>
                                <img src={data} className='w-full rounded-2xl' />
                                <div className=" p-4">
                                    <h1 className="text-gray-800 text-xl xl:text-2xl font-bold">Programa de maestría en ciencia de datos en línea</h1>
                                    <div className=" grid grid-cols-2 gap-4">
                                        <div>
                                            <i className="fas fa-calendar-week"></i><span className=' text-xs xl:text-sm text-gray-700 font-semibold'> 11 Months</span><br />
                                            <i className="fas fa-globe"></i> <span className='text-xs xl:text-sm text-gray-700 font-semibold'> En línea</span><br />
                                        </div>
                                        <div className='text-right'>
                                            <i className="far fa-clock"></i><span className='text-xs xl:text-sm text-gray-700 font-semibold'> Cerrar aplicación </span> <span className='text-red-600 font-bold'> Mañana</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <span className='text-sm text-gray-700 font-semibold'>Según el estudio, Data Scientist es la mejor carrera del siglo XXI</span><br />
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 col-12 mb-4'>
                            <div className='border-2 rounded-2xl shadow h-auto w-full '>
                                <img src={data} className='w-full rounded-2xl' />
                                <div className=" p-4">
                                    <h1 className="text-gray-800 text-xl xl:text-2xl font-bold">Programa de maestría en ciencia de datos en línea</h1>
                                    <div className=" grid grid-cols-2 gap-4">
                                        <div>
                                            <i className="fas fa-calendar-week"></i><span className='text-xs xl:text-sm text-gray-700 font-semibold'> 11 Months</span><br />
                                            <i className="fas fa-globe"></i> <span className='text-xs xl:text-sm text-gray-700 font-semibold'> En línea</span><br />
                                        </div>
                                        <div className='text-right'>
                                            <i className="far fa-clock"></i><span className='text-xs xl:text-sm text-gray-700 font-semibold'> Cerrar aplicación </span> <span className='text-red-600 font-bold'> Mañana</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <span className='text-sm text-gray-700 font-semibold'>Según el estudio, Data Scientist es la mejor carrera del siglo XXI</span><br />
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 col-12 mb-4'>
                            <div className='border-2 rounded-2xl shadow h-auto w-full '>
                                <img src={data} className='w-full rounded-2xl' />
                                <div className=" p-4">
                                    <h1 className="text-gray-800 text-xl xl:text-2xl font-bold">Programa de maestría en ciencia de datos en línea</h1>
                                    <div className=" grid grid-cols-2 gap-4">
                                        <div>
                                            <i className="fas fa-calendar-week"></i><span className='text-xs xl:text-sm text-gray-700 font-semibold'> 11 Months</span><br />
                                            <i className="fas fa-globe"></i> <span className='text-xs xl:text-sm text-gray-700 font-semibold'> En línea</span><br />
                                        </div>
                                        <div className='text-right'>
                                            <i className="far fa-clock"></i><span className='text-xs xl:text-sm text-gray-700 font-semibold'> Cerrar aplicación </span> <span className='text-red-600 font-bold'> Mañana</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <span className='text-sm text-gray-700 font-semibold'>Según el estudio, Data Scientist es la mejor carrera del siglo XXI</span><br />
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className='md:hidden block pl-10'>
                        {/* slider */}
                        <OwlCarousel className="slider-items owl-carousel" {...options}>

                            <div className='border-2 rounded-2xl shadow w-10/12 h-auto'>
                                <img src={data} className='w-full rounded-2xl' />
                                <div className=" p-4">
                                    <h1 className="text-gray-800 text-xl xl:text-2xl font-bold">Programa de maestría en ciencia de datos en línea</h1>
                                    <div className=" grid grid-cols-2 gap-4">
                                        <div>
                                            <i className="fas fa-calendar-week"></i><span className='text-xs xl:text-sm text-gray-700 font-semibold'> 11 Months</span><br />
                                            <i className="fas fa-globe"></i> <span className='text-xs xl:text-sm text-gray-700 font-semibold'> En línea</span><br />
                                        </div>
                                        <div className='text-right'>
                                            <i className="far fa-clock"></i><span className='text-xs xl:text-sm text-gray-700 font-semibold'> Cerrar aplicación </span> <span className='text-red-600 font-bold'> Mañana</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <span className='text-sm text-gray-700 font-semibold'>Según el estudio, Data Scientist es la mejor carrera del siglo XXI</span><br />
                                </div>
                            </div>

                            <div className='border-2 rounded-2xl shadow h-auto w-10/12'>
                                <img src={data} className='w-full rounded-2xl' />
                                <div className=" p-4">
                                    <h1 className="text-gray-800 text-xl xl:text-2xl font-bold">Programa de maestría en ciencia de datos en línea</h1>
                                    <div className=" grid grid-cols-2 gap-4">
                                        <div>
                                            <i className="fas fa-calendar-week"></i><span className='text-xs xl:text-sm text-gray-700 font-semibold'> 11 Months</span><br />
                                            <i className="fas fa-globe"></i> <span className='text-xs xl:text-sm text-gray-700 font-semibold'> En línea</span><br />
                                        </div>
                                        <div className='text-right'>
                                            <i className="far fa-clock"></i><span className='text-xs xl:text-sm text-gray-700 font-semibold'> Cerrar aplicación </span> <span className='text-red-600 font-bold'> Mañana</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <span className='text-sm text-gray-700 font-semibold'>Según el estudio, Data Scientist es la mejor carrera del siglo XXI</span><br />
                                </div>
                            </div>


                            <div className='border-2 rounded-2xl shadow h-auto w-10/12'>
                                <img src={data} className='w-full rounded-2xl' />
                                <div className=" p-4">
                                    <h1 className="text-gray-800 text-xl xl:text-2xl font-bold">Programa de maestría en ciencia de datos en línea</h1>
                                    <div className=" grid grid-cols-2 gap-4">
                                        <div>
                                            <i className="fas fa-calendar-week"></i><span className='text-xs xl:text-sm text-gray-700 font-semibold'> 11 Months</span><br />
                                            <i className="fas fa-globe"></i> <span className='text-xs xl:text-sm text-gray-700 font-semibold'> En línea</span><br />
                                        </div>
                                        <div className='text-right'>
                                            <i className="far fa-clock"></i><span className='text-xs xl:text-sm text-gray-700 font-semibold'> Cerrar aplicación </span> <span className='text-red-600 font-bold'> Mañana</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <span className='text-sm text-gray-700 font-semibold'>Según el estudio, Data Scientist es la mejor carrera del siglo XXI</span><br />
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Explore;