import React, { useContext } from "react";
import { Context } from "../../Api";
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

const options = {
    margin: 30,
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
        576: {
            items: 2,
        },
        700: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1200: {
            items: 5,
        }
    },
};


const UserForm = () => {

    return (
        <div className="sers-forour-data media-prtslider full-w">
            <div className="container pb-16">
                <p className='text-4xl font-bold text-gray-800'>Nuestra <span className="text-blue-500 sitblu-clrsite">Alumani</span></p>
                <p className='text-lg font-semibold text-gray-600'>Tenemos estudiantes para nuestro programa de ciencia de datos de las siguientes empresas.</p>

                <div className="pb-2 pt-2 text-center">
                    {/* <p className="text-center text-6xl font-bold text-gray-600 mb-6">In The Media</p> */}
                    <OwlCarousel className="slider-items owl-carousel pt-6 pb-6" {...options}>
                        <div className="item">
                            <div className="border w-100 h-100 d-flex align-items-center justify-content-center">
                            <img src={m1} className="w-auto card-img-top"/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="border w-100 h-100 d-flex align-items-center justify-content-center">
                            <img src={m2} className="w-auto card-img-top"/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="border w-100 h-100 d-flex align-items-center justify-content-center">
                            <img src={m3} className="w-auto card-img-top"/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="border w-100 h-100 d-flex align-items-center justify-content-center">
                            <img src={m4} className="w-auto card-img-top"/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="border w-100 h-100 d-flex align-items-center justify-content-center">
                            <img src={m5} className="w-auto card-img-top"/>
                            </div>
                        </div>

                        <div className="item">
                            <div className="border w-100 h-100 d-flex align-items-center justify-content-center">
                            <img src={m4} className="w-auto card-img-top"/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="border w-100 h-100 d-flex align-items-center justify-content-center">
                            <img src={m5} className="w-auto card-img-top"/>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}
export default UserForm;