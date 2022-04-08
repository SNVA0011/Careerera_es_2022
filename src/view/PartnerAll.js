import React, { useEffect } from "react";
import Partner from "../Molecules/Index/Parter";
import c1 from "../Images/c1.jpg";
import c2 from "../Images/c2.jpg";
import c3 from "../Images/c3.jpg";
import c5 from "../Images/c5.jpg";
import c6 from "../Images/c6.jpg";
import { Helmet } from 'react-helmet';


const PartnerAll = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="ourpartnet-pr">
                <Helmet>
                    <title>Our Partners</title>
                    <meta name="description" content="This webpage News & Events Details." />
                    <meta name="keywords" content="Careerera News & Events Details" />
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <link rel="canonical" href="https://www.careerera.com/es/our-partners.php" />
                </Helmet>


                <div className="container py-20">
                    <div className="row">

                        <div className="col-lg-10 col-xl-8 mx-auto col-12 text-center">
                            <h1 className="text-center text-gray-700 font-bold text-3xl md:text-4xl uppercase">Nuestro <span className="text-blue-500">Compañera</span></h1>
                            <h3 className='text-gray-500 text-base md:text-lg fw-medium '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                            <hr className="w-20 hr mb-6 bg-blue-400 sepfoll-hr mx-auto" />
                        </div>

                        <div className="col-12 mt-lg-0">
                            <div className="row">
                                <div className="col-xl col-lg-4 col-sm-6 col-12 pb-4">
                                    <div className="border w-100 h-100 d-flex align-items-center justify-content-center bg-white rounded-lg">
                                        <img alt="OUR PARTNER" src={c1} className="card-img-top" />
                                    </div>
                                </div>

                                <div className="col-xl col-lg-4 col-sm-6 col-12 pb-4">
                                    <div className="border w-100 h-100 d-flex align-items-center justify-content-center bg-white rounded-lg">
                                        <img alt="OUR PARTNER" src={c2} className="card-img-top" />
                                    </div>
                                </div>

                                <div className="col-xl col-lg-4 col-sm-6 col-12 pb-4">
                                    <div className="border w-100 h-100 d-flex align-items-center justify-content-center bg-white rounded-lg">
                                        <img alt="OUR PARTNER" src={c3} className="card-img-top" />
                                    </div>
                                </div>

                                <div className="col-xl col-lg-4 col-sm-6 col-12 pb-4">
                                    <div className="border w-100 h-100 d-flex align-items-center justify-content-center bg-white rounded-lg">
                                        <img alt="OUR PARTNER" src={c5} className="card-img-top" />
                                    </div>
                                </div>

                                <div className="col-xl col-lg-4 col-sm-6 col-12 pb-4">
                                    <div className="border w-100 h-100 d-flex align-items-center justify-content-center bg-white rounded-lg">
                                        <img alt="OUR PARTNER" src={c6} className="card-img-top" />
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </>
    )
}

export default PartnerAll;








