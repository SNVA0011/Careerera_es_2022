import React, { useContext, useEffect } from "react";
import { Context } from "../../Api";
import { useParams } from "react-router";
import datascince from "../../Images/Datascience.png";
import edx from "../../Images/edx_logo.svg";
import harvard from "../../Images/harvard_logo.png";
import "../../style.css";
import { Route, useLocation, Link } from "react-router-dom";


const Hero = (props) => {
    const pagelocation = useLocation();

    return (
        <div className={"certification-courseslight full-w master "
            + (pagelocation.pathname === "/data-science/post-graduate-program-in-data-science" ? 'datascience' : '')
            + (pagelocation.pathname === "/software-development/post-graduate-program-in-ui-and-ux-design" ? 'uiux' : '')
            + (pagelocation.pathname === "/internet-marketing/post-graduate-program-in-digital-marketing" ? 'digitalmrk' : '')
            + (pagelocation.pathname === "/artificial-intelligence-and-machine-learning/post-graduate-program-in-artificial-intelligence-machine-learning" || pagelocation.pathname === "/artificial-intelligence-and-machine-learning/programa-de-postgrado-en-inteligencia-artificial-y-aprendizaje-automatico" ? 'aimachine' : '')
        }>


            <div className="container py-16 xl:py-20">
                <div className="row">
                    <div className="col-xl-7 col-lg-8 col-12">
                        {/* <span className="text-lg sm:text-xl lg:text-2xl text-white font-semibold mb-3 leading-15-loose">Build a career in <b className="text-yellow-400 font-semibold d-inline-block lowercase-firstl">{props.categoryUrl}</b> */}
                        {/* </span> */}
                        <span className="heading-border-line d-block left-0"></span>
                        <h1 className="text-2xl md:text-3xl text-white font-bold mt-1 mb-4 uppercase maintitle" dangerouslySetInnerHTML={{ __html: props.title }} />
                        <div className="row mt-1 mb-4 text-gray-300">
                            <div className="col-xxl-6 col-12">
                                <ul className="px-0 mb-0">
                                    <li className="sm:text-lg mb-2 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1"></i>
                                        </div> {props.duration}</li>
                                    <li className="sm:text-lg mb-2 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1"></i>
                                        </div> {props.point2}</li>
                                    <li className="sm:text-lg mb-2 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1"></i>
                                        </div> {props.point3}</li>
                                    <li className="sm:text-lg mb-2 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1"></i>
                                        </div> {props.point4}</li>
                                </ul>
                            </div>
                            <div className="col-xxl-6 col-12">
                                <ul className="px-0">
                                    <li className="sm:text-lg mb-2 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1"></i>
                                        </div> En vivo en línea</li>
                                    <li className="sm:text-lg mb-2 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1"></i>
                                        </div> {props.point6} </li>
                                    <li className="sm:text-lg mb-2 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1"></i>
                                        </div> {props.point1}</li>
                                    <li className="sm:text-lg mb-2 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1"></i>
                                        </div> {props.point5}</li>
                                </ul>
                            </div>
                        </div>

                        <a href="#query" className="btn-site invert md:h-12 mr-4 no-underline d-inline-block">
                            <span><i className="bi bi-envelope pr-1 text-lg"></i> 
                                {props.ConsultaAhora ?
                                    <>{' ' + props.ConsultaAhora}</>
                                    :
                                    ' Pregunte ahora'
                                }
                            </span>
                        </a>
                        <Link to={'' + 'batch'} className="btn-site gray md:h-12 no-underline d-inline-block">
                            <span><i className="bi bi-file-text-fill pr-1 text-lg"></i> Próximos lotes</span>
                        </Link>
                    </div>
                    {/* <div className="col-xl-6 col-12">
                        <img src={datascince} className="rounded-lg" />
                    </div> */}
                </div>
            </div>


        </div>
    )
}
export default Hero;

