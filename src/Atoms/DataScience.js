import React, { useContext, useState } from "react";
import { Context } from "../Api";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

const DataScience = (props) => {
        const final = props.data;


        return (
                <>
                        {final ?
                                <div className="full-w data-scinece-othercer scroll-spbx" id="description">
                                        <div className="container py-16"> 
                                                <div className="full-w"> 
                                                        <div className="sec_title">
                                                                <h2 className="text-2xl md:text-3xl font-bold mt-0" dangerouslySetInnerHTML={{ __html: props.title }} />
                                                                <p className="text-gray-500 text-base md:text-lg fw-medium" dangerouslySetInnerHTML={{ __html: 'Conozca su camino alrededor del ' + props.title }} />
                                                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                                                        </div>

                                                        <div className="blog-detials-single">
                                                                <div className="content st" dangerouslySetInnerHTML={{ __html: final }} />
                                                        </div>

                                                        {/* <Collapse in={open}>
                                                <div id="example-collapse-text" className="text-gray-600 text-sm font-semibold">
                                                Data Science and Artificial intelligence have transformed the world completely. Organizations around the world are leveraging artificial intelligence to avoid repetitive tasks and improve customer experience. Robots are taking on the world by storm and are continuously building intelligence comparable to human brains. Artificial Intelligence and Machine Learning are the highest-paying jobs in the world. As per a recent estimate, more than 90% of the companies will use artificial intelligence in one way or the other to build or enhance their products and services. These companies are looking for people who are skilled in data science and AI. Unfortunately, the industry is facing an acute shortage of highly skilled people to fill the void. Fortunately, Careerera decided to be a part of the solution and has launched its PGP program in data science so that people can take advantage of our services and avail our data science graduate certificate online.
                                        <br/><br/>
                                        Careerera’s unique Post Graduate Program in Data Science will most certainly give new wings to your career. This online certification course is specially designed for young professionals and freshers who are keen on exploring and securing low-investment and high- reward careers in Data Science. It will be very beneficial to Bachelor's, Master's, and Post-Graduate students. Those coming from the industries of Information Technology, Consulting, Manufacturing, Pharma and Healthcare, and BFSI are specially welcome to join our data science certification and training and upskill themselves. Our singular online classroom training program provides immersive lectures which are delivered in an advanced technological package by our expert faculty online through video classes.
                                        <br/><br/>
                                        You will be assigned a dedicated program manager to resolve all your questions, doubts, and queries that are external to the course curriculum and related more to the managerial aspects of the PGP in Data Science course. For all your study Material-related doubts, our dedicated instructors will conduct special one on one doubt clearing sessions with email, voice call, and video call support provided and you will be able to sail through our Data Science certification course smoothly. You will also be assigned many assignments and projects as part of the PGP in Data Science course and that will go a long way towards helping you test your skills and newly acquired knowledge in a practically and constructively way. The instructors will also provide pointed and accurate feedback on all the learners’ assignments and projects, helping with debugging and encouraging active participation.
                                        <br/><br/>
                                        We at Careerera encourage learner networking with each other and with our mentors and industry professionals by providing them a common platform in which they can communicate with each other and enrich this online Data Science certification course even further.
                                        <br/><br/>
                                        Our course curriculum for the PGP in Data Science course is designed with meticulous care to provide the learners with a straightforward course path of natural progression in which new topics and concepts are gradually introduced to them and in which they are exposed to interconnected Data Science facets such as Python, SQL, Tableau, Machine Learning techniques, Deep learning and neural networks, Exploratory Data Analysis, Data Visualization, Artificial Intelligence, etc.
                                        <br/><br/>
                                                </div>
                                        </Collapse> */}

                                                        {/* <Button
                                        onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                        className="btn btn-primary w-1/2 sm:w-1/3 md:w-1/6 ">
                                        {open?"Read Less":"Read More"}
                                </Button> */}

                                                </div>
                                        </div>
                                </div>
                                : " "}
                </>
        )
}
export default DataScience;

