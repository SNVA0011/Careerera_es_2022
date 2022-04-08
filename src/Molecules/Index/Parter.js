import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import c1 from "../../Images/c1.jpg";
import c2 from "../../Images/c2.jpg";
import c3 from "../../Images/c3.jpg";
import c5 from "../../Images/c5.jpg";
import c6 from "../../Images/c6.jpg";
import "../../style.css";
import { Link } from "react-router-dom";


//Owl Carousel Settings
const options = {
    margin: 30,
    responsiveClass: true,
    autoplay: true,
    loop: true,
    autoplayTimeout: 1200,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,


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
class Partner extends React.Component {
    render() {

        return (
            <>

                <div className="ourpartnet-pr full-w">

                    <div className="container py-16">
                        <div className="row">

                            <div className="col-lg-6 col-12">
                                <p className="text-left text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-2">Nuestra <span className="text-blue-500 sitblu-clrsite">Compañera</span></p>
                                <p className='text-base md:text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
 

                            <div className="col-lg-6 col-12 mt-2 mt-lg-0">
                                <div className="row">
                                    <div className="col-xl-4 col-sm-6 col-12 pb-4">
                                        <div className="border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center">
                                            <img src={c1} alt="AXIOS" className="card-img-top" />
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-sm-6 col-12 pb-4">
                                        <div className="border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center">
                                            <img src={c2} alt="ISACA" className="card-img-top" />
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-sm-6 col-12 pb-4">
                                        <div className="border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center">
                                            <img src={c3} alt="AXELOS" className="card-img-top" />
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-sm-6 col-12 pb-4">
                                        <div className="border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center">
                                            <img src={c5} alt="Project Management Institute." className="card-img-top" />
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-sm-6 col-12 pb-4">
                                        <div className="border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center">
                                            <img src={c6} alt="CompTIA" className="card-img-top" />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6 col-12 pb-4  ">
                                        <div className=" w-100 h-100 d-flex  align-items-center justify-content-center">
                                            <Link to="our-partners" className="btn-site invert no-underline">
                                                <span>
                                                Ver todo
                                                </span>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </>
        )
    };
}
export default Partner;