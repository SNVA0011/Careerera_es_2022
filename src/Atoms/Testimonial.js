import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Api'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import '../style.css'
import { Link } from 'react-router-dom'
import toplayer from '../Images/mocktest/top-layer.png'


//Owl Carousel Settings
const options = {
    items: 3,
    loop: false,
    rewind: true,
    video:true,
    autoplay: true,
    autoPlaySpeed: 10000,
    autoPlayTimeout: 10000,
    autoplayHoverPause: true,
    center: true,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
            margin: 30,
            startPosition: 0
        },
        992: {
            items: 2,
            margin: 30,
            startPosition: 1
        },
        1200: {
            items: 3,
            margin: 30,
            startPosition: 1
        },
    },
}
const Testimonial = (props) => {

    const [data, setdata] = useState([])
    const [load, setload] = useState(false)
    const [You, setYou]= useState([])
    const [loadYou, setloadYou]= useState(false)

    async function CallApi() {
        const testimonials = await fetch(
            'https://my.careerera.com/API/course/HomepageComment.php'
        )
        const review = await testimonials.json()
        setdata(review.records[0].Comments)
        setload(true)
    }

    async function CallYoutube(){
        const youtube = await fetch(
            'https://my.careerera.com/API/common/reviewlinks.php'
        )
        const youData = await youtube.json()
        setYou(youData.records)
        setloadYou(true)
    }

    useEffect(() => {
        CallApi()
        CallYoutube()
    }, [])



    return (
<div>

       
        <div className='scroll-spbx reviewqueries' id="review">
            {load ?
                <div className='indexhome'>
                    <div className='testimonials-areamock'>
                        <div className='partner-spkrat text-center bg-white'>
                            <div className="container py-20 media-prtslider ">


                                {/* <p className="text-center text-6xl font-bold text-gray-600 mb-6">In The Media</p> */}
                                <p className="text-3xl md:text-4xl  lg:text-5xl  font-bold text-gray-700 mb-3  softwarelike">
                                Nuestra {props.title1} <span className="text-blue-500"> {props.title2}</span>
                                </p>
                                <div className='clearfix w-100'></div>


                                {/* Reviews by Comments */}
                                {/* <div className='full-w position-relative'>
                            <OwlCarousel className="slider-items owl-carousel" {...options}>
                                {data.map((item, i) => (
                                    <div className="itemss">
                                        <div className='mt-4 mb-2 shadow-md bg-white p-6 text-left w-full border-2 border-white rounded-3xl slidebg-h'>
                                            <h2 className="font-semibold capitalize text-2xl text-gray-700">
                                                {item.title}
                                            </h2>
                                            <div className="post-total-rating text-sm">
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <span className="ml-2 text-black">5.0</span>
                                            </div>


                                            <div className="text-gray-700 text-lg mt-4 mb-1">
                                                <i className="orange-lgclr text-lg d-inline-block fas fa-quote-left mr-3"></i>
                                                {item.comment}
                                                <i className="orange-lgclr text-lg d-inline-block fas fa-quote-right ml-3"></i>
                                            </div>


                                            <div className="mt-4 d-flex flex-xl-row align-items-center justify-content-between">
                                                <a href={item.linkedin} target="_blank">
                                                    <i className="fab fa-linkedin fa-2x"></i>
                                                </a>

                                                <div className='font-semibold text-gray-400 text-base mt-1'>
                                                    <i className='bi bi-clock mr-2'></i>
                                                    {item.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </OwlCarousel>


                        </div> */}


                                {/* Reviews by video */} 
                                <div className='full-w media-prtslider pt-2'>
                                    <div className="w-full explore_Data_science ourclient-staffing">
                                        <OwlCarousel className="slider-items owl-carousel" {...options}>
                                        {You.map((items,i)=>{
                                                return(
                                                    <>
                                                    <div className="item">
                                                <div className="embed-responsive embed-responsive-16by9 rounded-lg overflow-hidden">
                                                    <iframe className="embed-responsive-item" src={items.video_url}></iframe>
                                                </div>
                                            </div>
                                                    </>
                                                )
                                            })} 
                                        </OwlCarousel>

                                    </div>
                                </div>

                                <div className='mt-6'>
                                    <Link to="/review" className='btn-site invert capitalize no-underline py-3'>
                                        <span>Ver todo</span>
                                    </Link>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                : <div className="testimonials-areamock overflow-hidden text-center py-5 my-20">
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>}
        </div>
        </div>
    )
}
export default Testimonial
