import React, { useContext, useEffect } from "react";
import "../style.css";
import post from "../Images/Certificate.svg";
import { Context } from "../Api";
import fun from "../Images/fun4.gif"
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";



const Certificate = () => {
    const { value1, value2 } = useContext(Context)
    const [exactData] = value1;
    const [status] = value2;


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {status ? <div className="certificatepost-grad">

                <Helmet>
                    <title>List of Courses and Programs offered by Careerera</title>
                    <meta name="description" content="This webpage content list of all professional courses and programs which are offered by Careerera Company." />
                    <meta name="keywords" content="Careerera Courses List, Careerera Programs List" />
                    <link rel="canonical" href="https://www.careerera.com/es/certification-program"></link>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                </Helmet>

                <div className="full-w start-yourcareer">
                    <div className="container py-20 megamenu-wrapper">

                        <div className="row">
                            <div className="col-lg-10 col-xl-8 mx-auto col-12 text-center">
                                <h1 className="text-center text-gray-700 font-bold text-3xl md:text-4xl uppercase">Certificado <span className="text-blue-500 d-inline-block">Programa</span></h1>
                                <hr className="w-20 hr mb-6 bg-blue-400 sepfoll-hr mx-auto" />
                            </div>
                        </div>


                        <div className="row">
                            {exactData.map((items, i) => {
                                return (
                                    <>

                                        {items.Course.filter((item) => !item.CourseTitel.includes("Post") || item.CourseTitel.includes("Masters")).map((item, i) => {
                                            return (
                                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" key={i}>
                                                    <div className="cards h-100 d-flex flex-column">
                                                        <Link
                                                            className="no-underline mb-1"
                                                            to={'/' + item.courseFUllURL}>
                                                            <div className="pt-2 pl-4 rounded-lg">
                                                                <div className="eiml-shadow red" />
                                                                <div className="course-type topfix">
                                                                    <div className="course-typeinn">
                                                                        <i className="bi bi-clock text-base" />
                                                                        <span className="font-bold ml-2">Short</span>
                                                                    </div>
                                                                </div>
                                                                <img
                                                                    src={post}
                                                                    alt='CERTIFICATE PROGRAM'
                                                                    className="w-1/3 relative top-4 border rounded-full"
                                                                />
                                                            </div>
                                                            <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                                <div className="flex-grow-1">
                                                                    <div className="post-total-rating text-sm">
                                                                        <i className="fas fa-star mr-1"></i>
                                                                        <i className="fas fa-star mr-1"></i>
                                                                        <i className="fas fa-star mr-1"></i>
                                                                        <i className="fas fa-star mr-1"></i>
                                                                        <i className="fas fa-star mr-1"></i>
                                                                        <span className="ml-2 text-black">5.0</span>
                                                                    </div>
                                                                    <h5 className="font-bold text-gray-600 course-title">
                                                                        {item.CourseTitel}
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="durationcou course-type mt-auto mb-0 py-0 no-underline text-gray-900 font-semibold"
                                                            to={'/' + items.category_url}>
                                                            <div className="course-typeinn py-3">
                                                                <div>{items.category_title}</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </>
                                )
                            })}
                        </div>


                    </div>
                </div>
            </div> : <img src={fun} className="w-screen" alt="careerera-loader-image" />}

        </>
    )

}
export default Certificate;