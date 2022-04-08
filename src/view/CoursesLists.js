import React, { useContext, useEffect } from "react";
import "../style.css";
import post from "../Images/Post.svg";
import { Context } from "../Api";
import fun from "../Images/fun4.gif"
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

export default function CoursesLists() {
    const { value13, value14 } = useContext(Context)
    const [exactData] = value13
    const [status] = value14

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
                    <link rel="canonical" href="https://www.careerera.com/es/courses-list" />
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                </Helmet>


                <div className="full-w start-yourcareer">
                    <div className="container py-20 megamenu-wrapper">

                        <div className="row">
                            <div className="col-lg-10 col-xl-8 mx-auto col-12 text-center">
                                <h1 className="text-center text-gray-700 font-bold text-3xl md:text-4xl uppercase">CURSOS <span className="text-blue-500 d-inline-block">POPULARES</span></h1>
                                <hr className="w-20 hr mb-0 bg-blue-400 sepfoll-hr mx-auto" />
                            </div>
                        </div>

                        <div className='mockexam-certi caciones-slider'>
                            <div className="megamenu-wrapper media-prtslider">

                                <div className="row pt-8">
                                    {exactData.map((items, i) => {
                                        return (
                                            <>
                                                <ScrollAnimation animateIn='fadeInUpscrl' animateOut='fadeInUpscrlout' delay={i * 80} animateOnce={true} className="col-lg-4 col-sm-6 col-12 mb-4" key={i}>
                                                    <div className="cards h-100 d-flex flex-column empf">
                                                        <Link to={'/' + items.courseFUllURL} className="no-underline mb-1">
                                                            <div
                                                                className="pt-2 pl-4 rounded-lg">
                                                                <div className={"eiml-shadow " + (items.courseType === 'Long' ? 'blue' : 'red')}></div>
                                                                <div className="course-type topfix">
                                                                    <div className="course-typeinn">
                                                                        <i className="bi bi-clock text-base"></i>
                                                                        <span className="font-bold ml-2">
                                                                            {
                                                                                items.courseType
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <img src={"upcoming_batches_icon/" + (items.categoryURL) + ".png"}
                                                                    className="w-1/3 relative top-4 border rounded-full" 
                                                                    alt={items.textonimage}
                                                                />
                                                            </div>
                                                            <div className="px-3 pb-4 pt-8 d-flex flex-column flex-grow-1 overflow-hidden">
                                                                <div className="flex-grow-1">
                                                                    <div className="post-total-rating text-sm mb-1">
                                                                        <i className="fas fa-star mr-1"></i>
                                                                        <i className="fas fa-star mr-1"></i>
                                                                        <i className="fas fa-star mr-1"></i>
                                                                        <i className="fas fa-star mr-1"></i>
                                                                        <i className="fas fa-star mr-1"></i>
                                                                        <span className="ml-2 text-black">5.0</span>
                                                                    </div>
                                                                    <p className="font-bold text-gray-600 course-title text-xl font-bold m-0">
                                                                        {
                                                                            items.CourseTitel
                                                                        }
                                                                    </p>
                                                                </div>

                                                            </div>
                                                        </Link>


                                                        <Link to={'/' + items.categoryURL} className="durationcou course-type mt-auto mb-0 p-0 no-underline text-gray-900 font-semibold">
                                                            <div className="course-typeinn py-3 d-flex justify-content-between flex-column flex-sm-row">
                                                                <div className="pr-smtime-2">
                                                                    {items.categoryTitle}
                                                                </div>

                                                                <div className="text-gray-600 text-nowrap">
                                                                    {items.Duration ?
                                                                        <>
                                                                            <i className="bi bi-calendar4 mr-2"></i>
                                                                            {items.Duration}
                                                                        </>
                                                                        : ''}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </ScrollAnimation>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> : <img src={fun} className="w-screen" alt="careerera-loader-image" />}

        </>
    )
}
