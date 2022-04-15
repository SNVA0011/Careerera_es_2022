import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import certificate from '../Images/Certificate.svg'
import whysci_icon_1 from '../Images/46.png'
import whysci_icon_2 from '../Images/61.png'
import whysci_icon_3 from '../Images/2.7-MILLION.png'
import whysci_icon_4 from '../Images/33.5.png'
import whysci_icon_5 from '../Images/2020.png'
import Accordion from 'react-bootstrap/Accordion'
import UserformsApplication from '../Molecules/Course/UserformsApplication';
import { Helmet } from 'react-helmet'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import EnquireNowForm from '../Molecules/Course/EnquireNowForm';
import CountryFooterCourse from '../Atoms/CountryFooterCourse';
import { useParams } from 'react-router';
import CityFooterCourse from '../Atoms/CityFooterCourse';

export default function CyberSecurityState() {
    const [conthide, setconthide] = useState(false);
    const cyberstate = useParams()
    console.log("===>", cyberstate)
    function showMorecont() {
        setconthide((conthide) => (!conthide))
    }

    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
    async function CallData() {

        const state = cyberstate.cyberCoutry.replace("-", "%20")
        const county = cyberstate.cyberstate.replace("-", "%20")

        await fetch('http://65.0.26.142:9000/apiurl/', {
            method: 'POST',
            body: JSON.stringify({ "apiurl": "https://my.careerera.com/admin/admins/api/countyDetail.php?service=cyber-security&state=" + state + "&county=" + county }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, [])
            .then((response) => response.json())
            .then((json) => setData(json.countyDetail));
        setLoad(true);
    }




    useEffect(() => {
        CallData()
        window.scrollTo(0, 0);
    }, [cyberstate.cyberstate]);

    return (

        <>

            {load ? <div>

                {data[0] ?
                    <Helmet>
                        <title>{data[0].meta_title ? data[0].meta_title : ""}</title>
                        <meta name="description" content={data[0].meta_desc} />
                        <meta name="keyword" content={data[0].keywords} />
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <link rel="canonical" href={"https://www.careerera.com/cyber-security/certification-course/" + cyberstate.cyberCoutry + "/" + cyberstate.cyberstate} />
                    </Helmet>
                    : ''}

                {/* certification-courses */}
                <div className='certification-courses full-w staticsyber'>
                    <div className="container">
                        <div className="row py-16 align-items-center">
                            <div className="col-xxl-8 col-xl-7 col-lg-6 col-12 pb-3 pb-xl-0">
                                <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white uppercase">
                                    Cyber Security <span className="orange-lgclr d-inline-block"> CERTIFICATION COURSE IN {cyberstate.cyberstate}</span>
                                </h1>
                                <hr className="w-20 hr hrcer-cr" />

                                <p className="text-base sm:text-lg text-white my-8 font-semibold">
                                    Align your skills and interest with an impactful comprehensive Careerera's Cyber security course in {cyberstate.cyberstate}. Careerera presents immersive training by industry professionals available through course packages that are carefully crafted to expose students to hands-on practical and real-world projects. Delve in-depth into investigating the influence of information security on our lives, individual citizens' privacy concerns, business, and government security hazards, and the impact of laws and public policies. Get into a personalized catalog of cyber security certification programs in {cyberstate.cyberstate}, suitable to your aspirations and eligibility. Fast-track your information security career with a holistic pedagogy designed to meet the industry demands, making you job-ready with excellence. Master the art of securing systems and applications and get a thorough grasp of the legal requirements for cyber security. Become a pro in leading, managing, and contributing to the development of robust cyber security solutions upon completion of a Cyber security course in {cyberstate.cyberstate}.
                                </p>

                            </div>

                            {/* form */}
                            <EnquireNowForm />
                        </div>
                    </div>
                </div>

                <div className="full-w navbar-highcr background1 z-0 sticky top-28 z-10 des-explornav drk">
                    <div className="container">
                        <Navbar variant="dark" className="shadow-0">
                            <Nav className="me-auto">
                                <Nav.Link href="#Description">Description</Nav.Link>
                                <Nav.Link href="#explore">Explore Courses</Nav.Link>
                                <Nav.Link href="#why">Why Cyber Security</Nav.Link>
                                <Nav.Link href="#FAQ">FAQ</Nav.Link>
                                <Nav.Link href="#HiringPartner">Users From</Nav.Link>
                                <Nav.Link href="#ApplicationProcess">Application Process</Nav.Link>
                            </Nav>
                        </Navbar>
                    </div>
                </div>


                <div className='dataccience-pagecat'>
                    <div className='discription_sec scroll-spbx' id='Description'>
                        <div className='container py-16'>
                            <div className="sec_title">
                                <h2 className='text-2xl md:text-3xl font-bold'>Cyber Security <span className='orange-clrsite'>Online Course</span></h2>
                                <p className='text-gray-500 text-base md:text-lg fw-medium'>Accelerate your career in Cyber Security</p>
                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
                            </div>

                            {data[0] ?
                                <div className="blog-detials-single">
                                    <div className="content st data-scinece-othercer" dangerouslySetInnerHTML={{ __html: data[0].county_desc }}>
                                    </div>
                                </div> : ''}


                        </div>
                    </div>


                    <div className='explore_Data_science scroll-spbx' id='explore'>
                        <div className='container py-16'>
                            <div className="sec_title">
                                <h2 className='text-2xl md:text-3xl font-bold'>Explore our <span className='orange-clrsite'>Cyber Security Courses</span></h2>
                                <p className='text-gray-500 text-base md:text-lg fw-medium'>See which benefits you can derive from joining this program.</p>
                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
                            </div>


                            <div className="row megamenu-wrapper">
                                <div className="col-12">
                                    <div className="row pt-1">


                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Post Graduate Program in Cyber Security</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Upskill, upgrade, and earn a Post Graduate Certification in Cyber
                                                            security. Keep your organization resilient from cyber attacks. Delve
                                                            into assessing risk and enhancing cyber security measures with
                                                            Careerera.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'post-graduate-program-in-cyber-security/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'post-graduate-program-in-cyber-security'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Cyber Security Professional</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Get into an intensive accumulation of foundational knowledge blended
                                                            with the industry's hottest trends, current practices.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'cyber-security-professional/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'cyber-security-professional'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* col-xl-4 start */}
                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Certified Information Systems Security Professional (CISSP)</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Fast-track your cybersecurity métier with&nbsp;CISSP certification.
                                                            Get unlimited access to specialized training involving curation,
                                                            organization, management.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'certified-information-systems-security-professional-cissp/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'certified-information-systems-security-professional-cissp'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>CISA Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Be a CISA certified professional and stand out amongst the sea of
                                                            professionals with Careerera. Get into comprehensive training and
                                                            prove your mastery over auditing in Information Technology and
                                                            Information security.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'cisa-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'cisa-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>CISM Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Careerera brings you top-class training for professionals vying for
                                                            CISM certification. Become an Enterprise Security Leader with a
                                                            Strategic Approach as Careerera brings you top-class security
                                                            management.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'cism-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'cism-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* col-xl-4 start */}
                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Masters in Cyber Security</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Major the dynamic skill sets of Cyber security Practitioner through
                                                            a Masters in Cyber Security program. The well-formulated hands-on
                                                            course is developed aligning to the industry's latest trends.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'masters-in-cyber-security/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'masters-in-cyber-security'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Checkpoint Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            GLearn Industry's spearheading firewall protection system and obtain
                                                            validation through a Checkpoint Certification training at Careerera.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'checkpoint-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'checkpoint-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Trend Micro Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Become a certified Trained-Micro practitioner. Learn how to deploy
                                                            and take charge of dominant security solutions at Careerera.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'trend-micro-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'trend-micro-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* col-xl-4 start */}
                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Implementing the NIST Standards using COBIT 5</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Learn about the context and nature of cybersecurity risks, and
                                                            manage them by deploying the NIST Cybersecurity Framework and COBIT
                                                            5.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'implementing-the-nist-standards-using-cobit-5/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'implementing-the-nist-standards-using-cobit-5'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>COBIT5 Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Leverage your skills and knowledge of Cybersecurity and safeguard
                                                            your organization from sophisticated attacks with COBIT5
                                                            certification training and validate your technical skills.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'cobit5-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'cobit5-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>COBIT 5 Implementation Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Learn how to apply COBIT 5 to your company's specific business
                                                            challenges, pain spots, cause events, and risk scenarios. Learn how
                                                            to implement COBIT 5 in your company and how to use it effectively
                                                            for customer projects.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'cobit-5-implementation-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'cobit-5-implementation-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* col-xl-4 start */}
                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>COBIT 5 Assessor for Security Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Avail yourself of this comprehensive trading about the use of
                                                            technology in support of managerial goals benefit from the COBIT 5
                                                            Assessor for Security Certification Training.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'cobit-5-assessor-for-security-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'cobit-5-assessor-for-security-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>COBIT 5 Assessor Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            With great benefits for Managers and anyone in charge of making
                                                            decisions about the use of technology in support of business goals.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'cobit-5-assessor-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'cobit-5-assessor-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
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

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>CSF (Cyber Security Fundamental)</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Enhance your skills and get closer to your dream of becoming an
                                                            expert Cybersecurity professional.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/'+'csf-cyber-security-fundamental/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/'+'csf-cyber-security-fundamental'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* discription_sec */}
                    <div className='discription_sec'>
                        <div className='container py-16'>
                            <div className="sec_title">
                                <h2 className='text-2xl md:text-3xl font-bold'>High-quality Cyber Security Training Course For a Smooth  <span className='orange-clrsite'>Career Path</span></h2>
                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
                            </div>

                            <div className="course_content_area pt-2">
                                <p>
                                    Cyber security training has become a necessary step in response to growing
                                    knowledge and concern about the expanding cyber risks that face
                                    corporations, governments, and individuals alike. Many of these programs
                                    although still in their early stages, there are excellent Cyber Security
                                    training courses like Careerera that have been carefully crafted with input
                                    from field practitioners, local and national stakeholders, and industry
                                    thought leaders. The primary goal is to equip cybersecurity professionals
                                    with lifelong learning skills and the ability to defeat adversaries from
                                    both theoretical and tactical perspectives.
                                </p>
                                <h2 className='font-semibold text-xl sm:text-2xl xl:text-3xl mt-4 mb-2'>
                                    Gear up for a High-salary Paying Position with Cyber Security Training
                                    Online
                                </h2>
                                <p>
                                    The job market for cybersecurity professionals is exploding, with high
                                    salaries and high demand. However, in order to secure the top cybersecurity
                                    positions with the finest firms, you must have a Cyber Security training
                                    certification which will only take you to better positions and help you
                                    achieve your goals.
                                </p>
                                <p>
                                    The demand for cybersecurity expertise is growing every day as new threats
                                    and breaches are identified. With online, self-paced courses taught by
                                    world-class professors and faculty, the Cyber security training online will
                                    prepare you to excel in this sector. Why take up a Cyber Security training
                                    course with Careerera?
                                </p>
                                <p>
                                    The Cybersecurity training course will teach you how to secure networks,
                                    create safe infrastructures, secure electronic assets, prevent attacks, and
                                    protect your customers' and your own privacy. The cyber security training
                                    online program consists of self-paced courses that will help you advance
                                    your profession by broadening your cybersecurity expertise.
                                </p>
                                <p>
                                    The courses are tailored to the needs of today's busy cybersecurity
                                    professionals. Join us to learn about the most recent research and best
                                    practices from world-class Careerera faculty and renowned cybersecurity
                                    professionals from organizations including Google, LinkedIn, etc.
                                </p>
                                <p>
                                    Careerera design Cyber security training online courses that are easily
                                    accessible and highly beneficial to every individual suiting their
                                    convenience and requirement. Each course can be completed independently or
                                    as part of a credential program. After enrolling in a course, materials are
                                    available on-demand.
                                </p>
                                <p>
                                    Get 365 days of unfettered access to all 7 courses in the program and work
                                    at your own speed to earn your certificate. You can take courses in any
                                    order, sequentially or concurrently, and you can move freely between them.{" "}
                                </p>
                                <h2 className='font-semibold text-xl sm:text-2xl xl:text-3xl mt-4 mb-2'>Add certification to Your Cyber Security Career Profile</h2>
                                <p>
                                    Complete your cyber security course and obtain your certification that will
                                    take you places in varied high positions. Learn at your own speed and obtain
                                    a cyber security training certification after successfully completing the
                                    cyber security training online.
                                </p>
                                <p>
                                    The next few decades are only going to be marked with companies becoming
                                    increasingly reliant on data and the tools and infrastructures to store,
                                    transfer and analyze them. Cybersecurity will be a vital talent, and the
                                    demand for trained specialists is only expected to grow, making it a solid
                                    long-term career choice.
                                </p>
                                <h2 className='font-semibold text-xl sm:text-2xl xl:text-3xl mt-4 mb-2'>The essential Credential for Cyber Security Certification course</h2>
                                <p>
                                    For signing up for this challenging cyber security training, you should have
                                    the equivalent of a bachelor's degree in computer science or a foundation in
                                    cybersecurity. If you're new to the subject, we recommend starting with the
                                    Foundations of Information Security course. It establishes the foundations
                                    for the program's succeeding courses
                                </p>
                                <p>
                                    Depending on your familiarity with the topic and prior online learning
                                    experience, you could expect to spend 10-12 hours to finish one course.
                                </p>
                                <p>
                                    In order to complete a course in 60 days, we recommend devoting about 2
                                    hours each week to watching video lectures and completing homework.
                                </p>
                                <p>
                                    Because the All-Access Plan gives you access to all courses for a year, you
                                    can choose how quickly you want to go, but courses must be completed within
                                    the stipulated time to obtain credit.
                                </p>
                            </div>


                        </div>
                    </div>



                    {/* discription_sec */}
                    <div className='discription_sec'>
                        <div className='container pb-16'>
                            <div className="sec_title">
                                <h2 className='text-2xl md:text-3xl font-bold'>Who Should Go for  <span className='orange-clrsite'>These Courses?</span></h2>
                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
                            </div>

                            <div className="course_content_area pt-2">
                                <p>
                                    The course programs are designed for multiple backgrounds and are open to
                                    anyone interested in learning the fundamentals of Cyber security.
                                </p>
                                <p>
                                    If you are any one of these, the Careerera Cyber security certification
                                    course is for you :
                                </p>
                                <p>
                                    <strong> An early-career professional:</strong> interested in cybersecurity,
                                    IT professionals, network engineers, system administrators, and even non-IT
                                    professionals interested in specializing in cybersecurity as a way to
                                    advance in a high-growth field with high- demand job opportunities.
                                </p>
                                <p>
                                    <strong>Are you building a Cybersecurity Career?</strong> IT project
                                    managers and engineering managers seek to increase their organizations'
                                    preparedness and reaction to threats while also advancing their careers as
                                    cybersecurity leaders.
                                </p>
                                <p>
                                    <strong>Do you intend to switch your career?&nbsp;</strong>
                                    Professionals in their mid- or late-career who want to refresh their careers
                                    by switching to cybersecurity as a specialty and taking advantage of the
                                    demand for cybersecurity talent in marketing, sales, human resources,
                                    operations, or any other industry.
                                </p>
                                <p>
                                    A Cyber Security Certification Course is ideal for Professionals in various
                                    areas, including:
                                </p>
                                <ul className='list-disc pl-6 text-base'>
                                    <li>Information Security Officers (CISOs)</li>
                                    <li>Professionals in Information Technology</li>
                                    <li>Engineers in Network Security</li>
                                    <li>Developers of software</li>
                                    <li>App Designers</li>
                                    <li>Engineers who work with software</li>
                                    <li>Architects of Systems</li>
                                    <li>Analysts of Information Systems</li>
                                    <li>Champions of Security</li>
                                </ul>
                                A job in cybersecurity necessitates a wide range of hard and soft skills. The
                                curriculum and courses contents of cyber security certification will help you
                                navigate a professional path in technology.
                                <p />
                            </div>


                        </div>
                    </div>





                    {/* why-datasciencesuf */}
                    <div className='why-datasciencesuf scroll-spbx bg-blue-50' id='why'>
                        <div className='container py-16'>
                            <div className="sec_title">
                                <h2 className='text-2xl md:text-3xl font-bold'>Why  <span className='orange-clrsite'>Cyber Security?</span></h2>
                                <p className='text-gray-500 text-base md:text-lg fw-medium'>3.5 million cybersecurity professionals are required by 2021 in India alone</p>
                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
                            </div>

                            <div className="time_mid_sec mt-10">
                                <ul className='row p-0'>
                                    <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                                        <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                                            <div className="border_deash">
                                                <span className="border_1"></span> <span className="border_2"></span> </div>
                                            <div className="time_ico">
                                                <img alt="Cyber Security Icon" src={whysci_icon_1} />
                                            </div>
                                            <div className="time_content">
                                                <h5 className='text-2xl md:text-3xl font-bold my-3'>
                                                    40%
                                                </h5>
                                                <p className='mb-0 text-sm sm:text-base'>$248.6 billion expected size of the Global security market by 2023 at CAGR of 10.2% from 2018 to 23</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                                        <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                                            <div className="border_deash">
                                                <span className="border_1"></span> <span className="border_2"></span> </div>
                                            <div className="time_ico">
                                                <img alt="Cyber Security Icon" src={whysci_icon_2} />
                                            </div>
                                            <div className="time_content">
                                                <h5 className='text-2xl md:text-3xl font-bold my-3'>
                                                    61%
                                                </h5>
                                                <p className='mb-0 text-sm sm:text-base'>
                                                    $125,000/- to $215,000/- average range of a Cyber Security professional salary
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                                        <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                                            <div className="border_deash">
                                                <span className="border_1"></span> <span className="border_2"></span> </div>
                                            <div className="time_ico">
                                                <img alt="Cyber Security Icon" src={whysci_icon_3} />
                                            </div>
                                            <div className="time_content">
                                                <h5 className='text-2xl md:text-3xl font-bold my-3'>
                                                    2.7 MILLION
                                                </h5>
                                                <p className='mb-0 text-sm sm:text-base'>Projection of 18% growth in employment for 2014-24</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                                        <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                                            <div className="border_deash">
                                                <span className="border_1"></span> <span className="border_2"></span> </div>
                                            <div className="time_ico">
                                                <img alt="Cyber Security Icon" src={whysci_icon_4} />
                                            </div>
                                            <div className="time_content">
                                                <h5 className='text-2xl md:text-3xl font-bold my-3'>
                                                    33.5%</h5>
                                                <p className='mb-0 text-sm sm:text-base'>50% more salary in IT skills than for other American jobs in the private sector</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                                        <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                                            <div className="border_deash">
                                                <span className="border_1"></span> <span className="border_2"></span> </div>
                                            <div className="time_ico">
                                                <img alt="Cyber Security Icon" src={whysci_icon_5} />
                                            </div>
                                            <div className="time_content">
                                                <h5 className='text-2xl md:text-3xl font-bold my-3'>
                                                    2021-22
                                                </h5>
                                                <p className='mb-0 text-sm sm:text-base'>Globally to become one of the top five skills for jobs in 2021-22.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>



                    {/* discription_sec */}
                    <div className='discription_sec'>
                        <div className='container py-16'>
                            <div className="sec_title">
                                <h2 className='text-2xl md:text-3xl font-bold'>Get into  <span className='orange-clrsite'>immersive and interactive</span> online learning</h2>
                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
                            </div>
                            <div className="ideal_careerera_area pt-1">
                                <div className="make_careerera_area">
                                    <h5 className="font-bold text-base sm:text-lg mt-4 reward-leftborder">
                                        Featuring live online classes and self-paced learning trajectory Unlimited
                                        access to the course and study materials
                                    </h5>

                                    <h5 className="font-bold text-base sm:text-lg mt-4 reward-leftborder">Personalized Assistance</h5>

                                    <h5 className="font-bold text-base sm:text-lg mt-4 reward-leftborder mb-4">
                                        Personalized coaching, job-search tools, industry connections, and corporate
                                        visits are available as career resources.
                                    </h5>
                                    <p>
                                        Careerera's cyber security online course program gives students all the
                                        necessary exposure from industry current trends and practices to leading
                                        companies and top hiring companies. Become industry and Job-ready and help
                                        the world breach the talent gap as the need for Cyber security specialists
                                        become more urgent and inevitable.
                                    </p>
                                    <p>Gain Cyber security certification for speedy career progression.</p>
                                    <p>
                                        Cyberattacks are growing more common, sophisticated, and targeted, costing
                                        businesses billions of dollars each year. This is why cybersecurity is one
                                        of the fastest-growing industries in the world with more companies and
                                        government agencies looking to hire cybersecurity professionals with the
                                        specialized technical skills required to defend mission-critical computer
                                        systems, networks, cloud applications, and other systems from cyberattacks
                                        every year.
                                    </p>
                                    <p>
                                        Given the enormity of the skill requirement, there are also new approaches
                                        to get the flexible skill set that so many businesses are looking for.
                                        Enroll in the Careerera Professional Certificate in Cybersecurity program
                                        now, which covers extensive key areas of the concerned field, including both
                                        the defensive and offensive elements of the technology. Personal input,
                                        tips, and tricks from program instructors, insights from regular guest
                                        speakers who are industry experts, career coaching, mentorship, and the
                                        opportunity to build a capstone network development project for a job
                                        portfolio are all at your disposal for robust career development in Cyber
                                        security.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* discription_sec */}
                    <div className='our_faq_sec scroll-spbx' id='FAQ'>
                        <div className='container py-16'>
                            <div className="sec_title">
                                <h2 className='text-2xl md:text-3xl font-bold'>FAQ</h2>
                                <p className='text-gray-500 text-base md:text-lg fw-medium'>About Cyber Security Certification Course</p>
                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
                            </div>

                            <div className="pt-1">
                                <Accordion defaultActiveKey="0">

                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What Exactly is Cyber Security?</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accord_body_content">
                                                <p>Cyber Security is a set of approaches, technologies, and processes used to protect computer
                                                    systems, networks, and data from cyber-attacks or illegal access. Cyber security's main purpose
                                                    is to protect all corporate assets against external and internal attacks, as well as natural disaster-
                                                    related outages. Because an organization's assets are made up of a variety of platforms, a good
                                                    cyber security posture necessitates coordinated actions across all of its systems.
                                                    Cybersecurity has expansive usage in a range of sectors hence covering multiple domains, a few
                                                    of the major applications are:</p>

                                                <p><strong> Application Security</strong> refers to the establishment and deployment of multiple defenses and combat
                                                    mechanisms concerning an organization's software and network services in order to safeguard
                                                    businesses and organizations from a wide range of cyber threats.</p>
                                                <p><strong> Network Security:</strong> Addressing vulnerabilities in your operating systems and
                                                    network architecture, such as servers and hosts, firewalls and wireless access points, and network
                                                    protocols is part of network security.&nbsp; Robust network security helps to secure an organization's
                                                    assets from both external and internal threats.</p>
                                                <p><strong> Information Security:</strong> This process involves safeguarding Data integrity and privacy in the
                                                    systems and servers as well as while communicating them through networks.</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What is a Cyber Security Expert?</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accord_body_content">
                                                <p>The role and responsibilities of a Cyber security Experts are very crucial in today's digital world
                                                    in every organization. Cybersecurity professionals defend systems from cybersecurity risks,
                                                    attacks, and vulnerabilities by monitoring, detecting, investigating, analyzing, and responding to
                                                    security events.</p>
                                                <p>Cybersecurity professionals are members of IT teams tasked with ensuring the security of a
                                                    company's network and data. The primary business was traditionally supplemented by network
                                                    operations and IT technologies. However, the success and functionality of a company's network
                                                    are becoming increasingly important. As a result, full-time cybersecurity employees have gone
                                                    from being a luxury to a need.</p>
                                                <p>Security is provided during the development stages of software systems, networks, and data
                                                    centers by a Cyber Security Specialist. Professionals must look for weaknesses and dangers in
                                                    both hardware and software. They are in charge of managing and monitoring any attacks or
                                                    incursions. By cutting off the security vulnerability, the Security Specialist must notice the
                                                    potential threat or attempted intrusion. Firewalls are built into network infrastructures.</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How will a Cyber Security Course Help Me?</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accord_body_content">
                                                <p>There is no better time than now to start a career in cybersecurity. Cybersecurity has risen to the
                                                    forefront as corporations and government agencies rush to secure their data and information as
                                                    more sophisticated attacks become more common and complex. As a result, demand is rising and
                                                    even outpacing supply. Job security in this industry is excellent due to a severe skill shortage.</p>

                                                <p>A Cybersecurity course will help you learn the critical and core concepts and principles relevant
                                                    to the field. Apart from learning administrative and leadership skills, it is one of the key
                                                    advantages of enrolling in a Cybersecurity course. It's possible that you won't pick up business
                                                    skills on the job. However, you'll need the necessary qualities, particularly great business
                                                    acumen, to grow in the sector and achieve a high-ranking leadership job. You will learn about
                                                    the theories and how to put them into practice by enrolling in a Cybersecurity course.</p>
                                                <p>Learners

                                                    will obtain expertise in technology, legislation, policy, compliance, governance, intelligence,
                                                    incident response, and management. Programs provide students with the hands-on experience
                                                    they need to succeed in the area.</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>What does a Cyber Security Expert do?</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accord_body_content">
                                                <p>Cyber Security professionals are responsible for ensuring the highest level of protection for IT
                                                    infrastructure, edge devices, networks, and data. Their roles are extended to a range of areas
                                                    including data preach prevention, monitoring, and countering attacks and threats. Apart from the
                                                    technical skills and knowledge, Cyber security professionals employ their inherent qualities like
                                                    critical thinking, inquisitiveness, and a relentless desire to learn, acquire knowledge. and explore.
                                                    These qualities are critical to the smooth implementation of security in the organization.&nbsp;
                                                    The security risks are emerging at a rapid rate with more sophistication; this has to be kept in
                                                    check by the cyber security professionals which require keeping up with updated strategies.</p>
                                                <p>Below are the primary roles and responsibilities that Cyber security Professionals performs
                                                    within an organization:</p>
                                                <ul className="list-disc pl-6 text-base">
                                                    <li>Identify unusual activity and prevent them by monitoring the performance of the network
                                                        and applications.</li>
                                                    <li>Employ users identity access controls and monitor access management systems</li>
                                                    <li>Execute audits regularly to guarantee security measures and practices are adaptable</li>
                                                    <li>Combat and beat malicious attacks and hacks by deploying endpoint detecting and
                                                        prevention tools</li>
                                                    <li>Consistent automatic updating of applications by setting up patch management systems</li>
                                                    <li>Administer exhaustive vulnerability management systems covering all assets in the cloud
                                                        and on-premises</li>
                                                    <li>Collaborate with IT operations to maintain business continuity plan and develop joined
                                                        disaster recovery measures</li>
                                                    <li>Educate employees of organizations by collaborating with HR or team leaders and
                                                        inculcate knowledge of identifying unusual activities.</li>
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What Industries use Cyber Security most?</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accord_body_content">
                                                <p>Despite the fact that cybercriminals rarely discriminate, some industries are more vulnerable than
                                                    others. Below are the&nbsp;industries and sectors that are most vulnerable to cyber assaults and hence
                                                    employ cyber security the most:</p>
                                                <ul className="list-disc pl-6 text-base">
                                                    <li><h4 className='font-semibold text-lg mb-0 mt-3'>Health and Medical care:</h4>  Healthcare institutions remain the most vulnerable to cyber-attacks.
                                                        In the bygone years, data breaches and ransom ware attacks have cost the industry an estimated
                                                        $4 billion, and the industry was responsible for more than four out of 10 breaches. As experts
                                                        point out, it has less to do with the industry's security and more to do with the value of healthcare
                                                        data. Criminals seek valuable personal data that healthcare providers hold and process, making
                                                        public healthcare facilities particularly vulnerable.</li>
                                                    <li><h4 className='font-semibold text-lg mb-0 mt-3'> Telecommunications and technology:</h4> More gadgets and sensors are projected to be connected
                                                        to supply chains, communities, organizations, and municipalities when 5G is deployed. While
                                                        this will usher in a new era of communication, experts warn that it will also bring new threats to
                                                        consumers and businesses. Due to the move to all-software networks and increased bandwidth,
                                                        high-level hackers will be able to exploit these new vulnerabilities and will have a broader attack
                                                        surface to work with. Meanwhile, the widespread use of sensors and gadgets will necessitate a
                                                        new and more stringent endpoint security architecture across businesses.</li>
                                                    <li><h4 className='font-semibold text-lg mb-0 mt-3'> Financial Sectors and Industries:</h4> It's no surprise that thieves are after financial data from
                                                        banks and other financial institutions. However, even when institutions and organizations
                                                        implement increasingly strict rules and safeguards, some industries remain vulnerable. Attacks
                                                        against retirement accounts, albeit tiny in size, have significant consequences.</li>
                                                    <li><h4 className='font-semibold text-lg mb-0 mt-3'> Energy Industries:</h4> Energy networks, according to security experts, are particularly vulnerable
                                                        to cyber-attacks. Hackers have the ability to inflict extensive power outages, jeopardizing crucial
                                                        security and defense infrastructure and putting millions of people in peril. Hackers can access
                                                        nuclear installations, power grids, and power-producing facilities all around the world because
                                                        they can obtain control from close range or across large distances.</li>
                                                    <li><h4 className='font-semibold text-lg mb-0 mt-3'>Government:</h4>  Because of the types of information, they store, state and federal governments are
                                                        becoming increasingly exposed to cyber attacks. Consider organizations that handle and keep
                                                        sensitive data such as Social Security numbers, financial information, addresses, and biometrics
                                                        such as fingerprint data. All of these data points are not only exposed but they might also be used
                                                        to launch an assault. Bad actors have more opportunities to get access to existing systems or
                                                        change various elements if they have more information.</li>
                                                </ul>

                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>


                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Which Companies Hire Cyber Security Experts?</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accord_body_content">
                                                <p>Cyber Security practitioners are in high demand across the globe owing to the surge in cyber
                                                    threats and the mass application of digital and technological devices over the internet. Below is
                                                    the list of the top hiring companies and leading players that hire Cyber Security Experts:</p>
                                                <ul className="list-disc pl-6 text-base">
                                                    <li>Apple</li>
                                                    <li>Cisco</li>
                                                    <li>Tata Consultancy Services</li>
                                                    <li>Deloitte</li>
                                                    <li>Accenture</li>
                                                    <li>HCL Technologies</li>
                                                    <li>Federal Reserve Bank of New York</li>
                                                    <li>Intel</li>
                                                    <li>EY</li>
                                                    <li>Lockheed Martin</li>
                                                    <li>General Motors</li>
                                                </ul>

                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>Why Careerera</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accord_body_content">
                                                <p>Careerera, since its inception, has been a global pioneer in providing online
                                                    education and world-class training, with students enrolled from over 60 countries.
                                                    Take your Data Science career to the next level with the best data science
                                                    certification with Careerera.</p>

                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>
                        </div>
                    </div>


                    {/* UserformsApplication */}
                    <UserformsApplication />



                    {/* discription_sec */}
                    {/* <div className='our_faq_sec custom_locationall scroll-spbx'>
                    <div className='container py-16'>

                        <div className="pt-1">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Check Out Cyber Security Course and Batches in Other Locations <div className="btn-site invert ml-3"><span>View</span></div></Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-disc text-base row'>
                                            <li className='col-xxl-3 col-lg-6 col-12'>
                                                <Link to={"/" + "cyber-security/certification-course/india"}>
                                                    India
                                                </Link>
                                            </li>
                                            <li className='col-xxl-3 col-lg-6 col-12'>
                                                <Link to={"/" + "cyber-security/certification-course/malaysia"}>
                                                    Malaysia
                                                </Link>
                                            </li>
                                            <li className='col-xxl-3 col-lg-6 col-12'>
                                                <Link to={"/" + "cyber-security/certification-course/singapore"}>
                                                    Singapore
                                                </Link>
                                            </li>
                                            <li className='col-xxl-3 col-lg-6 col-12'>
                                                <Link to={"/" + "cyber-security/certification-course/uae"}>
                                                    UAE
                                                </Link>
                                            </li>
                                            <li className='col-xxl-3 col-lg-6 col-12'>
                                                <Link to={"/" + "cyber-security/certification-course/united-kingdom"}>
                                                    United Kingdom
                                                </Link>
                                            </li>
                                            <li className='col-xxl-3 col-lg-6 col-12'>
                                                <Link to={"/" + "cyber-security/certification-course/canada"}>
                                                    Canada
                                                </Link>
                                            </li>
                                            <li className='col-xxl-3 col-lg-6 col-12'>
                                                <Link to={"/" + "cyber-security/certification-course/new-zealand"}>
                                                    New Zealand
                                                </Link>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </div>
                    </div>
                </div> */}

                    <CityFooterCourse id={cyberstate.cyberstate} id2={cyberstate.cyberCoutry} title="cyber-security" />
                </div>
            </div> : ""}
        </>
    )
}
