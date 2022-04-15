import React, { useContext } from "react";
import { Context } from "../../Api";
import image1 from "../../Images/image1.jpg";
import image2 from "../../Images/image2.jpg";
import image3 from "../../Images/image3.jpg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'


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



const Blog = (props) => {
    const final = props.data;

    return (
        <div className="blogs-articlepub faq-sectionquery scroll-spbx blogbased" id="blog">

            <div className="container py-16">
                <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold mb-4 uppercase">Blogs y <span className="orange-clrsite">Artículos</span></p>
                </div>

                <div className="d-none d-xl-block">
                    <div className='row'>



                        {final ?
                            final[0] ?
                                <div className="col-xl-4 col-md-6 col-12 mb-4 mb-xl-0">
                                    <div className="full-w shadow-customblg rounded-xl overflow-hidden position-relative">
                                        <img src={`https://my.careerera.com/` + final[0].image} className="w-full" alt={final[0].title}
                                        />
                                        <div className="p-4 border-top bg-white">
                                            <Link to={'/blog/' + final[0].url} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                                {final[0].title}
                                            </Link>
                                            <div className="mt-3 d-flex flex-column flex-xl-row align-items-xl-center justify-content-between">
                                                <span className="text-gray-500 font-semibold"><i className="bi bi-calendar-fill mr-1"></i> <Moment format="D-MMM-YYYY">{final[0].Date}</Moment></span>
                                                <br></br>

                                                <Link to={'/blog/' + final[0].url} className="btn-site invert no-underline">
                                                    <span>Leer más</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : '' : ''}

                        {final[0] ?
                            final[1] ?
                                <div className="col-xl-4 col-md-6 col-12 mb-4 mb-xl-0">
                                    <div className="full-w shadow-customblg rounded-xl overflow-hidden position-relative">
                                        <img src={`https://my.careerera.com/` + final[1].image} className="w-full" alt={final[1].title}
                                        />
                                        <div className="p-4 border-top bg-white">
                                            <Link to={'/blog/' + final[1].url} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                                {final[1].title}
                                            </Link>
                                            <div className="mt-3 d-flex flex-column flex-xl-row align-items-xl-center justify-content-between">
                                                <span className="text-gray-500 font-semibold"><i className="bi bi-calendar-fill mr-1"></i> <Moment format="D-MMM-YYYY">{final[1].Date}</Moment></span>
                                                <br></br>

                                                <Link to={'/blog/' + final[1].url} className="btn-site invert no-underline">
                                                    <span>Leer más</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : '' : ''}


                        {final[0] ?
                            final[2] ?
                                <div className="col-xl-4 col-md-6 col-12 mb-4 mb-xl-0">
                                    <div className="full-w shadow-customblg rounded-xl overflow-hidden position-relative">
                                        <img src={`https://my.careerera.com/` + final[2].image} className="w-full" alt={final[2].title}
                                        />
                                        <div className="p-4 border-top bg-white">
                                            <Link to={'/blog/' + final[2].url} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                                {final[2].title}
                                            </Link>
                                            <div className="mt-3 d-flex flex-column flex-xl-row align-items-xl-center justify-content-between">
                                                <span className="text-gray-500 font-semibold"><i className="bi bi-calendar-fill mr-1"></i> <Moment format="D-MMM-YYYY">{final[2].Date}</Moment></span>
                                                <br></br>

                                                <Link to={'/blog/' + final[2].url} className="btn-site invert no-underline">
                                                    <span>Leer más</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : '' : ''}

                    </div>

                </div>

                <div className='blgvisibleowlcarousel full-w media-prtslider d-xl-none'>
                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                        {final[0] ?
                            final[0] ?
                                <div className="mb-4 mb-xl-0 shadow-customblg border">
                                    <div className="full-w  rounded-xl overflow-hidden position-relative">
                                        <img src={`https://my.careerera.com/` + final[0].image} className="w-full" alt={final[0].title}
                                        />
                                        <div className="p-4 border-top bg-white">
                                            <Link to={'/blog/' + final[0].url} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                                {final[0].title}
                                            </Link>
                                            <div className="mt-3 d-flex flex-column flex-xl-row align-items-xl-center justify-content-between">
                                                <span className="text-gray-500 font-semibold"><i className="bi bi-calendar-fill mr-1"></i> <Moment format="D-MMM-YYYY">{final[0].Date}</Moment></span>
                                                <br></br>

                                                <Link to={'/blog/' + final[0].url} className="btn-site invert no-underline">
                                                    <span>Leer más</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : '' : ''}

                        {final[0] ?
                            final[1] ?
                                <div className="mb-4 mb-xl-0 shadow-customblg border">
                                    <div className="full-w  rounded-xl overflow-hidden position-relative">
                                        <img src={`https://my.careerera.com/` + final[1].image} className="w-full" alt={final[1].title}
                                        />
                                        <div className="p-4 border-top bg-white">
                                            <Link to={'/blog/' + final[1].url} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                                {final[1].title}
                                            </Link>
                                            <div className="mt-3 d-flex flex-column flex-xl-row align-items-xl-center justify-content-between">
                                                <span className="text-gray-500 font-semibold"><i className="bi bi-calendar-fill mr-1"></i> <Moment format="D-MMM-YYYY">{final[1].Date}</Moment></span>
                                                <br></br>

                                                <Link to={'/blog/' + final[1].url} className="btn-site invert no-underline">
                                                    <span>Leer más</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : '' : ''}

                        {final[0] ?
                            final[2] ?
                                <div className="mb-4 mb-xl-0 shadow-customblg border">
                                    <div className="full-w  rounded-xl overflow-hidden position-relative">
                                        <img src={`https://my.careerera.com/` + final[2].image} className="w-full" alt={final[2].title}
                                        />
                                        <div className="p-4 border-top bg-white">
                                            <Link to={'/blog/' + final[2].url} className="text-lg py-1 flex-grow-1 font-bold no-underline mb-1 text-black  d-block stretched-link">
                                                {final[2].title}
                                            </Link>
                                            <div className="mt-3 d-flex flex-column flex-xl-row align-items-xl-center justify-content-between">
                                                <span className="text-gray-500 font-semibold"><i className="bi bi-calendar-fill mr-1"></i> <Moment format="D-MMM-YYYY">{final[2].Date}</Moment></span>
                                                <br></br>

                                                <Link to={'/blog/' + final[2].url} className="btn-site invert no-underline">
                                                    <span>Leer más</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : '' : ''}

                    </OwlCarousel>
                </div>
            </div>


        </div>
    )
}
export default Blog;

