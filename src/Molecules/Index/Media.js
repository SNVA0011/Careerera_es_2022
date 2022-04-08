import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import m1 from "../../Images/m1.png";
import m2 from "../../Images/m2.png";
import m3 from "../../Images/m3.png";
import m4 from "../../Images/m4.png";
import m5 from "../../Images/m5.png";
import m6 from "../../Images/m6.png";
import m7 from "../../Images/m7.png";
import m8 from "../../Images/m8.png";
import m9 from "../../Images/m9.png";
import m10 from "../../Images/m10.png";
import m11 from "../../Images/m11.png";
import m12 from "../../Images/m12.png";
import m13 from "../../Images/m13.png";
import m14 from "../../Images/m14.png";
import "../../style.css";
import { Link } from "react-router-dom";


//Owl Carousel Settings
const options = {
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 1400,
    loop: true,
    autoplayHoverPause: true,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    dots: true,
    nav: false,
    center: true,
    responsive: {
        0: {
            items: 1,
            margin: 30,
            stagePadding: 20,
        },
        400: {
            items: 1,
            margin: 15,
            stagePadding: 20,
        },
        576: {
            items: 2,
            margin: 15,
        },
        800: {
            items: 3,
            margin: 15,
            startPosition: 1,
        },
        992: {
            items: 4,
            margin: 30,
            startPosition: 1,
        },
        1200: {
            items: 5,
            margin: 30,
            startPosition: 2
        }
    },
};
class Media extends React.Component {
    render() {

        return (
            <>
                <div className="full-w media-prtslider ourmedia-bgblock">
                    <div className="container py-16">

                        <div className="mb-1 text-center ">
                            <h4 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-gray-700 mb-3 softwarelike">Nuestros Medios <span className="text-blue-500 sitblu-clrsite">Compañero</span></h4>
                        </div>
                        <div className='clearfix w-100'></div>

                        <div className='explore_Data_science ourclient-staffing'>

                        <OwlCarousel className="slider-items owl-carousel" {...options}>

                            <div className="item w-full">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m1} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                            <div className="item">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m2} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                            <div className="item">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m3} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                            <div className="item">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m4} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                            <div className="item">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m5} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                            <div className="item">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m6} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                            <div className="item">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m7} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                            <div className="item">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m8} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                            <div className="item">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m9} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                            <div className="item">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m10} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                            <div className="item">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m11} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                            <div className="item">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m12} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                            <div className="item">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m13} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                            <div className="item">
                                <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                                    <img src={m14} alt='partner_logo' className="card-img-top" />
                                </div>
                            </div>

                        </OwlCarousel>
                        </div>
                        <div className='text-center mt-0'>
                            <Link to="/in-media" className="btn-site invert no-underline">
                              <span>Ver todo</span>
                            </Link>
                        </div>


                    </div>
                </div>
                
            </>
        )
    };
}
export default Media;