import React from "react";
import SideIcon from "../../Atoms/sideIcon";
import "../../style.css";
import homeslideredu from "../../Images/about5.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import c1 from "../../Images/c1.jpg";
import c2 from "../../Images/c2.jpg";
import c3 from "../../Images/c3.jpg";
import c5 from "../../Images/c5.jpg";
import c6 from "../../Images/c6.jpg";
import i1 from "../../Images/banner.svg";

const Hero = () => {


  //Owl Carousel Settings
  const options = {
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 1000,
    loop: true,
    autoplayHoverPause: true,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2,
        margin: 20,
      },
      426: {
        items: 3,
        margin: 20,
      },
      576: {
        items: 3,
        margin: 20,
      },
      12: {
        items: 3,
        margin: 20,
      }
    }
  };

  return (
    <>
      {/* Hero image at top */}
      <div className="home-banner full-w">

        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >

        <div className='box'>
          <div className='wave -one'></div>
          <div className='wave -two'></div>
          <div className='wave -three'></div>
        </div>




        <div className="container py-16">
          <div className="row align-items-center">

            <div className="col-lg-7 col-xxl-8 col-12 mr-auto pl-0 mb-5 mb-lg-0">
              <span className="text-lg light text-white">Listo para aprender <span className="heading-border-line"></span></span>
              <h1 className="text-5xl md:text-6xl xl:text-7xl text-white font-bold mb-4 maintitle">
                <small className="d-block highimp">Aprendizaje de alto impacto para</small>
                <span className="orange-clrsite">Carrera Avanzada</span>
              </h1>
              <div className="border-t-2 border-gray-500 w-5 mb-3"></div>
              <h2 className="text-lg md:text-xl lg:text-xl lg:text-2xl font-semibold mb-0 text-white">APRENDE CURSOS <span className="font-semibold d-block d-sm-inline-block text-yellow-400">EN VIVO Y EN LÍNEA</span></h2>
              {/* <p className="text-lg xl:text-xl">
                Explore the academic degree options available at Careerera.<br></br> A  education is an <b>investment</b> in your future.
              </p> */}

              <div className="col-xl-10 mt-4 media-prtslider p-0">
                <OwlCarousel className="slider-items owl-carousel" {...options}>

                  <div className="item w-full ">
                    <div className='border bg-white  rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                      <img src={c1} alt='partner_logo' className="card-img-top" />
                    </div>
                  </div>

                  <div className="item">
                    <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                      <img src={c2} alt='partner_logo' className="card-img-top" />
                    </div>
                  </div>


                  <div className="item">
                    <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                      <img src={c3} alt='partner_logo' className="card-img-top" />
                    </div>
                  </div>

                  <div className="item">
                    <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                      <img src={c5} alt='partner_logo' className="card-img-top" />
                    </div>
                  </div>

                  <div className="item">
                    <div className='border bg-white rounded-lg w-100 h-100 d-flex align-items-center justify-content-center'>
                      <img src={c6} alt='partner_logo' className="card-img-top" />
                    </div>
                  </div>


                </OwlCarousel>

              </div>

            </div>

            <div className="col-lg-5 col-xxl-4 col-12 mx-auto text-center mt-lg-0">
              <img src={i1} alt='Ready to learn' />
              {/* <SideIcon /> */}
            </div>
          </div>
        </div>

        <div className='overflow-hidden ppt-clistaff mt-shapeneed'>
          <div className="shape-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path className="shape-fill" fill="#fff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
            </svg>
          </div>
        </div>
      </div>



      {/* <div className="pl-8 pt-8 pr-2 lg:pl-0 lg:pr-0 ">
          <div className="grid grid-cols-2 justify-items-center lg:pt-10 md:pt-8">
            <img src={banner1} className="w-2/3  " />
            <img src={banner2} className="w-2/3 " />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-3xl lg:text-2xl xl:text-4xl text-gray-800 font-bold">Prestigious Brand 2020-21 by</p>
            <p className="text-3xl  md:text-2xl xl:text-4xl text-gray-800 font-bold eco">The <span className="text-red-700">Economic</span> Times </p>
           </div>
        </div> */}


      {/* learner */}
      {/* <div className="grid grid-cols-6 gap-4 mb-24 pl-40 pr-40"> */}
      {/* <div className="col-span-4 bg-blue-400 text-white border-white rounded-2xl p-4 flex justify-items-center ">
<p className="text-4xl font-semibold">Learn Courses
Live and Online</p>
  </div> */}
      {/* </div> */}


      <div className="col-12 design">

      </div>


    </>
  )
}
export default Hero;






