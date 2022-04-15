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
import { useParams } from 'react-router';
import CityFooterCourse from '../Atoms/CityFooterCourse';


export default function DataScienceState() {
  const statecourse = useParams()

  const [conthide, setconthide] = useState(false);
  function showMorecont() {
    setconthide((conthide) => (!conthide))
  }
  const [data, setData] = useState([])
  const [load, setLoad] = useState(false)
  async function CallData() {

    const state = statecourse.countrycourse.replace("-", "%20")
    const county = statecourse.statecourse.replace("-", "%20")

    await fetch('http://65.0.26.142:9000/apiurl/', {
      method: 'POST',
      body: JSON.stringify({ "apiurl": "https://my.careerera.com/admin/admins/api/countyDetail.php?service=data-science&state=" + state + "&county=" + county }),
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
  }, [statecourse.statecourse]);

  return (
    <>
      {load ? <div>
        <Helmet>
          <title>{data[0].meta_title}</title>
          <meta name="description" content={data[0].meta_desc} />
          <meta name="keyword" content={data[0].keywords} />
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="canonical" href={"https://www.careerera.com/data-science/certification-course/" + statecourse.countrycourse + "/" + statecourse.statecourse} />

        </Helmet>

        {/* certification-courses */}
        <div className='certification-courses full-w staticsyber'>
          <div className="container">
            <div className="row py-16 align-items-center">
              <div className="col-xxl-8 col-xl-7 col-lg-6 col-12 pb-3 pb-xl-0">
                <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white uppercase">
                  Data Science <span className="orange-lgclr d-inline-block"> CERTIFICATION COURSE IN {statecourse.statecourse}</span>
                </h1>
                <hr className="w-20 hr hrcer-cr" />

                <p className="text-base sm:text-lg text-white my-8 font-semibold">
                  Go beyond the basics and leverage your decision-making abilities while you navigate through the vast metrics and visualizations with Careerera's Data Science certification
                  course in {statecourse.statecourse}. Get into immersive training by industry experts with course programs curated conscientiously giving students exposure to
                  hands-on practical projects and key technologies. Unriddle the data ecosystem and foster actionable recommendations by creating a data-driven framework for your
                  organization and yourself. Reading code to comprehend syntax is made easy and quick with the Data Science course at Careerera. Learn, grow and inspire to act based n
                  facts with this world-class Data Science course in {statecourse.statecourse}, and propel your Data science career to the next level.

                </p>


              </div>

              {/* form */}
              <EnquireNowForm />
            </div>
          </div>
        </div>

        {/* navbar-highcr background1 */}
        <div className="full-w navbar-highcr background1 z-0 sticky top-28 z-10 des-explornav drk">
          <div className="container">
            <Navbar variant="dark" className="shadow-0">
              <Nav className="me-auto">
                <Nav.Link href="#Description">Description</Nav.Link>
                <Nav.Link href="#explore">Explore Courses</Nav.Link>
                <Nav.Link href="#why">Why Data Science</Nav.Link>
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
                <h2 className='text-2xl md:text-3xl font-bold'>Data Science <span className='orange-clrsite'>Online Course</span></h2>
                <p className='text-gray-500 text-base md:text-lg fw-medium'>Accelerate your career in Data Science</p>
                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
              </div>

              {data[0] ?
                <div className="blog-detials-single">
                  <div className="content st data-scinece-othercer" dangerouslySetInnerHTML={{ __html: data[0].county_desc }}>
                  </div>
                </div>
                : ''}

              {/*<div className="des_content">
                <p  />

                <div className={"desc_list_show_more " + (conthide ? 'd-none' : 'd-block')}>
                <a href={void (0)}
                  onClick={() => { showMorecont() }}
                  className="desc_show_more btn-site no-underline cursor-pointer invert"><span>Mostrar Más</span></a>
              </div>

              <div className={"desc_after_click " + (conthide ? 'd-block' : 'd-none')}>
               

                <div className="desc_list_show_less mt-4">
                  <a href={void (0)} onClick={() => { showMorecont() }} className="desc_show_less btn-site no-underline cursor-pointer">
                    <span>Show Less</span>
                  </a>
                </div>
              </div>
              </div> */}


            </div>
          </div>


          <div className='explore_Data_science scroll-spbx' id='explore'>
            <div className='container py-16'>
              <div className="sec_title">
                <h2 className='text-2xl md:text-3xl font-bold'>Explore our Data   <span className='orange-clrsite'>Science Courses</span></h2>
                <p className='text-gray-500 text-base md:text-lg fw-medium'>See which benefits you can derive from joining this program.</p>
                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
              </div>

              <div className="row megamenu-wrapper">
                <div className="col-12">
                  <div className="row pt-1">

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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Post Graduate Program in Data Science
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Gain expertise in the field of data science by learning practical
                              skills and techniques blended with thorough theoretical concepts and
                              core fundamentals.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'post-graduate-program-in-data-science/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'post-graduate-program-in-data-science'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Data Science Professional Certification
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Get ahead on data-driven techniques with a Data Science Professional
                              Certification and master the art of executing various tools,
                              languages, and libraries that professional data scientists use.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'data-science-professional-certification/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'data-science-professional-certification'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Post Graduate Program In Business Analytics
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Tailor your learning process to your data science career with a PGP
                              in Business Analytics. Attain analytics proficiency and the edge to
                              become a top influence in key business decisions.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'post-graduate-program-in-business-analytics/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'post-graduate-program-in-business-analytics'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              DSAP (Data Science Analytics Professionals)
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Jumpstart your Data science Career with a solid foundational
                              program. DSAP is your threshold to becoming a leading Business
                              Analytics professional.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'dsap-data-science-analytics-professionals/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'dsap-data-science-analytics-professionals'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Data Science with Python
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Get into the data science world with the most popular tool Python.
                              Learn how to utilize computation to achieve a variety of goals
                              through Data Science with Python Program.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'data-science-with-python/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'data-science-with-python'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Machine Learning With Python
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Get started with Supervised as well as Unsupervised learning with a
                              course in Machine Learning with Python. This course is your one-stop
                              track to learning the tools to head on with ML and Python.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'machine-learning-with-python/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'machine-learning-with-python'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Deep Learning Certification Training
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Get into the world of building, training, and deploying variants of
                              Deep Architecture from convolutional networks to Autoencoders to
                              Recurrent Networks with Deep Learning Certification training.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'deep-learning-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'deep-learning-certification-training'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Time Series Forecasting
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Build a robust foundational knowledge with this Time Series
                              Forecasting course and be empowered with the in-demand skills.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'time-series-forecasting/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'time-series-forecasting'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Natural Language Processing
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Dive into the world of building scalable algorithms powered by AI
                              and ML. The NLP (Natural Language Processing) course will power you
                              with experiential learning.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'natural-language-processing/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'natural-language-processing'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Database Management System
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Become a Pro at DBMS by mastering the basics of programming
                              languages, delving into the database literature, and learning how to
                              construct, manipulate, and generate reports from database tables
                              using SQL.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'data-base-management-system/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'data-base-management-system'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Introduction of Python for IEM-UTeMSS
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Navigate your way around Python and Machine Learning as we introduce
                              you to the essential ideas of Machine Learning (ML) as well as
                              developing ML bots using the Python Programming Language.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'introduction-of-python-for-iem-utemss/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'introduction-of-python-for-iem-utemss'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Data Visualization in Python
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              This course on Data Visualization will help you transform from a
                              beginner to a pro. Get to learn how to generate intriguing visuals
                              and charts using Python.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'data-visualization-in-python/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'data-visualization-in-python'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Masters in Data Science Engineering
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Delve into the world of predictive modeling and engineering systems
                              with data-driven designs and gain a thorough understanding of
                              scientific and practical data science and analytics expertise.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'masters-in-data-science-engineering/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'masters-in-data-science-engineering'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Masters in Data Science and Analytics
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Be a Business top-runner through this Data science and analytics
                              Masters's Program. Get immersed into this rigorous training that
                              offers hands-on experience.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'masters-in-data-science-and-analytics/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'masters-in-data-science-and-analytics'} className='btn-site no-underline text-sm w-100'>
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
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              DSF (Data Science Fundamental)
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              This crisp and solid foundational course is an ideal start for data
                              science enthusiasts that equips prospective data science
                              practitioners with key data science concepts, practices, techniques,
                              and concepts.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/'+'dsf-data-science-fundamental/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/'+'dsf-data-science-fundamental'} className='btn-site no-underline text-sm w-100'>
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
                <h2 className='text-2xl md:text-3xl font-bold'>Data Science  <span className='orange-clrsite'>Training Course</span></h2>
                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
              </div>
              <div className="course_content_area pt-2">
                <p>Data Science training course from Careerera, one of the top online education providers, can help you steady and advance your profession. Make Careerera your professional anchor to achieving your goal of becoming a competent data scientist. The course programs make extensive inclusion of theory and concepts combined with case studies and capstone projects for thorough and detailed learning. Careerera devised the course curriculum, which is widely regarded as the best in the industry. With worldwide accreditation, you'll be seen by recruiters all over the world.</p>
                <h2 className='font-semibold text-xl sm:text-2xl'>Online Data Science Training with the Best in Industry </h2>
                <p>Get into the most comprehensive Data Science training with the virtual campus that Careerera excellently offers across the globe. The online data science training programs consist of a well-crafted syllabus that covers the entire Data Science lifecycle concepts.</p>
                <br />
                <h4 className="font-bold text-lg">Get your minds running with the following core integrals of data science:</h4>
                <ul className='list-disc pl-6 text-base'>
                  <li>Data Collection and Extraction,</li>
                  <li>Data Exploration, Cleansing, and Transformation,</li>
                  <li>Feature Engineering,</li>
                  <li>Data Mining and Integration,</li>
                  <li>Building Prediction models,</li>
                  <li>Data Visualization,</li>
                  <li>Deploying the solution to customers.</li>
                </ul>

                <br />

                <h4 className="font-bold text-lg">Get access to massive learning of handling and applying the below tools:</h4>
                <ul className='list-disc pl-6 text-base'>
                  <li>Statistical Analysis</li>
                  <li>Text Mining</li>
                  <li>Regression Modelling</li>
                  <li>Hypothesis Testing</li>
                  <li>Predictive Analytics</li>
                  <li>Machine Learning</li>
                  <li>Deep Learning</li>
                  <li>Neural Networks</li>
                  <li>Natural Language Processing</li>
                  <li>Predictive Modelling</li>
                  <li>R Studio</li>
                  <li>Tableau</li>
                  <li>Spark</li>
                  <li>Hadoop</li>
                  <li>Programming languages like R programming and Python.</li>
                </ul>
              </div>

            </div>
          </div>



          {/* discription_sec */}
          <div className='discription_sec'>
            <div className='container pb-16'>
              <div className="sec_title">
                <h2 className='text-2xl md:text-3xl font-bold'>Why Choose Careerera for Your  <span className='orange-clrsite'>Data Science Training?</span></h2>
                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
              </div>

              <div className="course_content_area pt-2">
                <p>The promising prospects that the Careerera data science training course offers should be appealing enough for prospective candidates to come on board. Known for its excellence in providing online education across the globe in diverse fields, Careerera is regarded as a premier Data science training institute. The package that Careerera offers ranges from rigorous training to job placement assistance.</p>
                <p>If you're serious about pursuing a career in data science and developing a strong career path, you have made the right choice with Careerera. With profound success and positive outcomes of professionals overseas and locally, you are in for an unrivaled learning experience. We provide the required support until you are placed. Our skilled instructors will assist you with mastering ideas, completing assignments, and working on live projects.</p>
                <h2 className='font-semibold text-xl sm:text-2xl mt-4'>Why Take up Data Science Course?</h2>
                <p>Is it worthwhile to pursue a Data Science certification as a career? A plethora of factors and reasons validate the worth and value of pursuing a data science career. Digitalization is generating massive amounts of data, and the demand for Data Science specialists who can assess and extract relevant insights is growing, resulting in millions of new employment in the field. The significant demand and supply gap has promoted generating a large number of job openings and incomes. Data Scientists have recently come to enjoy great value in the job market. Data Scientist careers are long-lasting and fulfilling since the data generation is growing by leaps and bounds, and the demand for Data Scientists will continue to grow indefinitely.</p>


                <h2 className='font-semibold text-xl sm:text-2xl mt-4'>Who Should Enroll in a Data Science Program? </h2>
                <h4 className="font-bold text-lg">Professionals who should consider taking a Data Science course to advance their careers include:</h4>
                <ul className='list-disc pl-6 text-base'>
                  <li>Professionals with elaborate knowledge of Analytics, Logic, and Mathematics</li>
                  <li>Business intelligence experts, data warehousing and reporting practitioners</li>
                  <li>Mathematicians, Economists, and Statisticians</li>
                  <li>Software Programmers Analysts in business</li>
                  <li>Consultants that specialize in Six Sigma</li>
                  <li>Beginners from any discipline with strong analytical and logical abilities</li>
                </ul>
                <br />
                <p>If you have the zeal and the desirable skills in you and you find the data science field your calling, you sure must have a well-planned career path that begins with top-quality online data science training like Careerera.</p>
              </div>

            </div>
          </div>



          {/* discription_sec */}
          <div className='discription_sec'>
            <div className='container pb-16'>
              <div className="sec_title">
                <h2 className='text-2xl md:text-3xl font-bold'>Our Course Content Spread Across
                  <span className='orange-clrsite'>Various Programs Provides Learners with</span></h2>
                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
              </div>

              <div className="course_content_area pt-2">
                <p><strong>A Practical Format:</strong>  Careerera offers Data Science certification courses tailored to
                  the demands of data science professionals, with flexible and inexpensive options that
                  allow busy professionals to complete their desired curriculum while continuing to
                  work full-time.</p>
                <p><strong>Globally Recognized Community:</strong> Careerera is known for its reputation of its
                  graduates joining the world's largest and most prestigious professional networks.
                  Alumni of the institute have access to exclusive resources and can connect with
                  students, instructors, and other alumni.</p>
                <p>Get access to top-class teaching pedagogy that focuses on practical and progressive
                  learning. Improve your data science skills and get on to addressing business
                  problems. The comprehensive curriculum will help you develop into a highly-skilled
                  Data Science specialist, allowing you to work for some of the world's most
                  prestigious companies.</p>
                <p>Learn to manoeuver massive amounts of data and gain knowledge of handling tools
                  industry needs. Our state-of-the-art and state of the practice methodologies and tools
                  to design, build, analyze, deploy and maintain data networks and systems are best
                  suited for prospective professionals willing to traverse the path of Data science
                  vocation.</p>
                <p>With the in-depth training, learners will have positive learning outcomes by acquiring
                  critical skills in current and developing data science tools and techniques while at the
                  same time honing one's ability to manage data networks more effectively.</p>
                <p>Envisioning a world thriving on data-driven intelligence, for an optimum growth
                  emphasis in business, Careerera provides the apt courses. The Data science
                  certification online is open to everyone. Meant especially for those who want to learn
                  data science in a sophisticated and rigorous manner without having to leave their day
                  jobs, yet without sacrificing quality.</p>
                <p>For successful achievement of this learning goal, having a college-level degree in
                  mathematics, statistics, or being comfortable with Mathematical reasoning and
                  Python programming will give learners the extra advantage.</p>
              </div>

            </div>
          </div>



          {/* why-datasciencesuf */}
          <div className='why-datasciencesuf scroll-spbx bg-blue-50' id='why'>
            <div className='container py-16'>
              <div className="sec_title">
                <h2 className='text-2xl md:text-3xl font-bold'>Why  <span className='orange-clrsite'>Data Science?</span></h2>
                <p className='text-gray-500 text-base md:text-lg fw-medium'>Data is the key to making good business decisions.</p>
                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
              </div>

              <div className="time_mid_sec mt-10">
                <ul className='row p-0'>
                  <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                    <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                      <div className="border_deash">
                        <span className="border_1"></span> <span className="border_2"></span> </div>
                      <div className="time_ico">
                        <img alt="Data Science Icon" src={whysci_icon_1} />
                      </div>
                      <div className="time_content">
                        <h5 className='text-2xl md:text-3xl font-bold my-3'>650%</h5>
                        <p className='mb-0 text-sm sm:text-base'>Data Science sector has witnessed a massive hike of 650%, far outpacing other sectors.</p>
                      </div>
                    </div>
                  </li>
                  <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                    <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                      <div className="border_deash">
                        <span className="border_1"></span> <span className="border_2"></span> </div>
                      <div className="time_ico">
                        <img alt="Data Science Icon" src={whysci_icon_2} />
                      </div>
                      <div className="time_content">
                        <h5 className='text-2xl md:text-3xl font-bold my-3'>61%</h5>
                        <p className='mb-0 text-sm sm:text-base'>Jobs are open for candidates with 0-5 years experience.</p>
                      </div>
                    </div>
                  </li>
                  <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                    <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                      <div className="border_deash">
                        <span className="border_1"></span> <span className="border_2"></span> </div>
                      <div className="time_ico">
                        <img alt="Data Science Icon" src={whysci_icon_3} />
                      </div>
                      <div className="time_content">
                        <h5 className='text-2xl md:text-3xl font-bold my-3'>2.7 MILLION</h5>
                        <p className='mb-0 text-sm sm:text-base'>The 2021 global estimate calls for 2.7 million job postings for analytics and data science roles.</p>
                      </div>
                    </div>
                  </li>
                  <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                    <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                      <div className="border_deash">
                        <span className="border_1"></span> <span className="border_2"></span> </div>
                      <div className="time_ico">
                        <img alt="Data Science Icon" src={whysci_icon_4} />
                      </div>
                      <div className="time_content">
                        <h5 className='text-2xl md:text-3xl font-bold my-3'>39%</h5>
                        <p className='mb-0 text-sm sm:text-base'>The Global Data Science market is projected to advance at a CAGR of 39% to reach $195 Billion.</p>
                      </div>
                    </div>
                  </li>
                  <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                    <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                      <div className="border_deash">
                        <span className="border_1"></span> <span className="border_2"></span> </div>
                      <div className="time_ico">
                        <img alt="Data Science Icon" src={whysci_icon_5} />
                      </div>
                      <div className="time_content">
                        <h5 className='text-2xl md:text-3xl font-bold my-3'>2021-22</h5>
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
                <h2 className='text-2xl md:text-3xl font-bold'>Make Careerera your  <span className='orange-clrsite'>Guiding Force</span></h2>
                <p className='text-gray-500 text-base md:text-lg fw-medium'>Learn from the Best</p>
                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
              </div>

              <div className="make_careerera_area pt-1">
                <ul className='list-disc pl-6 text-base'>
                  <li>From a carefully designed and formulated repository of study resources to
                    globally renowned faculty, Careerera is the transition point of your career.</li>
                  <li>To meet the ever-growing demand of the industry, our curriculum is designed in a
                    manner that will help students develop potentials parallel to the high demand.</li>
                </ul>
                <h5 className="font-bold text-base sm:text-lg mt-4 reward-leftborder">Mentorship and Support on a One-to-One Basis</h5>
                <ul className='list-disc pl-6 text-base'>
                  <li>Frequent live counseling and guidance from expert practitioners to give students
                    extra-edge of learning</li>
                  <li>Small customized and collaborative group sessions and tutorial groups</li>
                </ul>
                <h5 className="font-bold text-base sm:text-lg mt-4 reward-leftborder">Create a portfolio of data science and machine learning projects.</h5>
                <ul className='list-disc pl-6 text-base'>
                  <li>Build a portfolio of multiple industry-relevant hands-on projects and case studies
                    to demonstrate Data Science leadership.</li>
                  <li>Learn how data science and machine learning topics are applied in the real
                    world through practical applications.</li>
                </ul>
              </div>
            </div>
          </div>




          {/* discription_sec */}
          <div className='discription_sec bg-gray-100'>
            <div className='container py-16'>
              <div className="sec_title">
                <h2 className='text-2xl md:text-3xl font-bold'>The Courses  <span className='orange-clrsite'>are Ideal for</span></h2>
                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
              </div>

              <div className="ideal_careerera_area pt-1">
                <p><strong>Professionals</strong> that want to turn enormous amounts of data into usable insights, such
                  as data scientists and analysts.</p>
                <h5 className="font-bold text-base sm:text-lg mt-4 reward-leftborder">Professional in the middle of their career</h5>
                <p>Technical managers, Business intelligence analysts, IT practitioners, Management
                  consultants, and Business managers are among the early career professionals and
                  senior managers.</p>
                <h5 className="font-bold text-base sm:text-lg mt-4 reward-leftborder">Graduates in computer science</h5>
                <p>Those with a background in applied mathematics or statistics, either academically or
                  professionally. Along with support from the institute, prospective students are in for
                  advanced and progressive learning.</p>
                <p>The various courses and programs are designed for freshers as well as people with
                  busy schedules, allowing them to get a data science certification while working full-
                  time and obtain data science certification.</p>
                <p>Project your career to the next level with our best Data science certification that
                  classifies you as the best professional in the industry. Our top certifications in data
                  science are your trump card to achieving your dream job. Become one of the expert
                  practitioners with our most updated teaching techniques as we include the most
                  important business technologies such as Machine learning, Deep learning, Natural
                  Language Processing, Recommendation Systems, and more.</p>
                <p>The immersive learning experience will prepare you for the field and be rewarded
                  with a Data science certification denoting that you have mastered the art of handling
                  data and is an expert in the field.</p>
                <p>A Data scientist Professional certificate will classify you from the rest of the crowd,
                  launch you to a higher position and give you the upper hand in the competition.</p>
              </div>
            </div>
          </div>


          {/* discription_sec */}
          <div className='our_faq_sec scroll-spbx' id='FAQ'>
            <div className='container py-16'>
              <div className="sec_title">
                <h2 className='text-2xl md:text-3xl font-bold'>FAQ</h2>
                <p className='text-gray-500 text-base md:text-lg fw-medium'>About Data Science Certification Course</p>
                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
              </div>

              <div className="pt-1">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>What Exactly is Data Science?</Accordion.Header>
                    <Accordion.Body>
                      <div className="accord_body_content">
                        <p>Data science is an all-encompassing term that extends to the varied techniques of
                          dealing with massive amounts of data by employing modern techniques and tools to
                          detect patterns, extract valuable insights, and make business decisions. The
                          technique of digging insights from the colossal amount of data entails bringing into
                          play the complex algorithms of machine learning to develop predictive models and
                          ranges of domains including statistical methodology, application domains, and
                          computational science.
                        </p>
                        <p>The field of Data Science treads on a lifecycle that consists of five stages, each with
                          distinct tasks as discussed below:
                        </p>
                        <p><strong>Data Capture:</strong> This stage entails gathering data in its raw form by going through the
                          process of acquiring, data entry, and extraction.
                          Data Maintenance: This stage involves taking the raw data and converting it into a
                          usable format which entails warehousing, cleansing, staging, processing, and
                          architecture of data effectively.
                        </p>
                        <p><strong>Processing:</strong> The third stage implies assessing data for patterns, ranges, and biases
                          to check for usability in terms of predictive analysis. This action calls for data mining,
                          clustering, modeling, and summarizing data.
                        </p>
                        <p><strong>Analysis:</strong> The aggregated data is executed for analytics by employing exploratory,
                          predictive and Qualitative analysis, regression, and Text mining.&nbsp;
                          Communication: The whole process only becomes meaningful only when the
                          collected results are meaningfully communicated through the use of graphs, charts,
                          and reports. It involves data reporting, visualization, business intelligence, and the
                          decision-making process.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Who is a Data Scientist?</Accordion.Header>
                    <Accordion.Body>
                      <div className="accord_body_content">
                        <p>A Data Scientist is an expert in the field of data science. Jeff Hammerbacher and DJ
                          Patil invented the phrase "Data Scientist." Data scientists are experts in specialized
                          scientific fields who apply their knowledge to complex data problems. They deal with
                          a wide range of subjects, including arithmetic, statistics, and computer science. They
                          are experts who make extensive use of cutting-edge technologies to bring about
                          valuable insights digging data and uncovering patterns from it. They perform the role
                          of providing data in a much more useful and readable format by working through the
                          raw data whether in structured or unstructured forms.
                        </p>
                        <p>To put it precisely, data scientists are professionals who are adept at handling and
                          managing data and equipped with the following skill sets:
                        </p>
                        <ul className="list-disc pl-6 text-base">
                          <li>Statistical analysis and computing</li>
                          <li>Machine Learning</li>
                          <li>Deep Learning</li>
                          <li>Processing large data sets</li>
                          <li>Data Visualization</li>
                          <li>Data Wrangling</li>
                          <li>Mathematics</li>
                          <li>Programming</li>
                          <li>Statistics</li>
                          <li>Big Data</li>
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>How I Can Become a Data Scientist?</Accordion.Header>
                    <Accordion.Body>
                      <div className="accord_body_content">
                        <p>To become a data scientist, follow these five main steps: strengthen your
                          mathematical and programmatic foundations; master SQL; pursue machine learning;
                          gain some data analyst experience; and, lastly, polish your abilities and knowledge
                          with an online school or Bootcamp. While most data scientists have a background in
                          mathematics, statistics, and computer science, it is still feasible to work as a data
                          scientist without such degrees.
                        </p>
                        <h5 className='text-base'>Let us get a broader picture of the few steps:</h5>
                        <p><strong>Reinforce your programming and mathematical underpinnings:</strong> It's critical to
                          understand how math-intensive the data scientist career path is. Data science
                          necessitates a thorough understanding of mathematics as well as a working
                          knowledge of common programming languages.
                        </p>
                        <p><strong>Master SQL:</strong> The SQL language is a domain-specific language for extracting data
                          from databases. SQL is not as complicated as other programming languages, but it is
                          a must-know for anyone who works with massive databases and analysis on a
                          regular basis. <strong>Adept at machine learning:</strong> Data scientists must demonstrate and
                          reinforce their knowledge of machine learning algorithms, AI systems, and statistics
                          because data science is the foundation of machine learning.
                        </p>
                        <p><strong>Join Online Courses:</strong> Completing an online course is a great way to get started.
                          Today's data scientists who want to strengthen their mathematical and programmatic
                          underpinnings frequently enroll in online data science boot camps.
                        </p>
                        <p><strong>Join entry-level Jobs like Data Analyst:</strong> To become a great data scientist, you
                          must first learn the fundamentals of recognizing trends in data. It might interest you to
                          know that many data scientists begin their careers as data analysts and then go on to
                          further their programming knowledge.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="3">
                    <Accordion.Header>How Will Data Science Course Help Me?</Accordion.Header>
                    <Accordion.Body>
                      <div className="accord_body_content">
                        <p>There is no denying that the demand for data scientists, along with it comes high
                          competition. Owing to the fact that Data science may be a profitable vocation to
                          pursue, more people are doing everything they can to get trained in the subject and
                          stand out above other applicants. To put it another way, getting the correct training is
                          crucial if you're serious about pursuing a career in data science.
                        </p>
                        <p>Enrolling in a recognized data science course that can teach you all you need to
                          know to succeed in the profession – from the fundamentals to advanced abilities – is
                          the first step toward becoming certified as a data scientist. While there are some free
                          online resources that can help you study data science, there is nothing better than
                          enrolling in a structured, accredited program that delivers teaching from industry
                          specialists and can award you a professional certification when you complete the
                          course.
                        </p>
                        <p>One of the best aspects of earning a data science certification is a quick escalation of
                          your career. These days, the vast majority of data science courses are delivered via
                          the internet. This makes learning a new skill and earning a certification easier than
                          ever. Online classes provide a level of freedom that no other learning approach can
                          match. You have the freedom to work at your own speed, study whenever you want,
                          and choose a course schedule that best fits your other obligations. You can also
                          finish your coursework from anywhere in the world using any approved device with a
                          stable internet connection.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Why Careerera</Accordion.Header>
                    <Accordion.Body>
                      <div className="accord_body_content">
                        <p>Careerera, since its inception, has been a global pioneer in providing online
                          education and world-class training, with students enrolled from over 60 countries.
                          Take your Data Science career to the next level with the best data science
                          certification with Careerera.
                        </p>
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
                  <Accordion.Header>Check Out Data Science Course and Batches in Other Locations <div className="btn-site invert ml-3"><span>View</span></div></Accordion.Header>
                  <Accordion.Body>
                    <ul className='list-disc text-base row'>
                      <li className='col-xxl-3 col-lg-6 col-12'><Link to={"/" + "data-science/certification-course/india"}>India</Link></li>
                      <li className='col-xxl-3 col-lg-6 col-12'><Link to={"/" + "data-science/certification-course/united-kingdom"}>United Kingdom</Link></li>
                      <li className='col-xxl-3 col-lg-6 col-12'><Link to={"/" + "data-science/certification-course/united-states"}>United States</Link></li>
                      <li className='col-xxl-3 col-lg-6 col-12'><Link to={"/" + "data-science/certification-course/australia"}>Australia</Link></li>
                      <li className='col-xxl-3 col-lg-6 col-12'><Link to={"/" + "data-science/certification-course/singapore"}>Singapore</Link></li>
                      <li className='col-xxl-3 col-lg-6 col-12'><Link to={"/" + "data-science/certification-course/malaysia"}>Malaysia</Link></li>
                      <li className='col-xxl-3 col-lg-6 col-12'><Link to={"/" + "data-science/certification-course/bangladesh"}>Bangladesh</Link></li>
                      <li className='col-xxl-3 col-lg-6 col-12'><Link to={"/" + "data-science/certification-course/saudi-arabia"}>Saudi Arabia</Link></li>
                      <li className='col-xxl-3 col-lg-6 col-12'><Link to={"/" + "data-science/certification-course/uae"}>UAE</Link></li>
                      <li className='col-xxl-3 col-lg-6 col-12'><Link to={"/" + "data-science/certification-course/qatar"}>Qatar</Link></li>
                      <li className='col-xxl-3 col-lg-6 col-12'><Link to={"/" + "data-science/certification-course/oman"}>Oman</Link></li>
                      <li className='col-xxl-3 col-lg-6 col-12'><Link to={"/" + "data-science/certification-course/bahrain"}>Bahrain</Link></li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </div>
          </div>
        </div> */}

          <CityFooterCourse id={statecourse.statecourse} id2={statecourse.countrycourse} title="data-science" />
        </div>
      </div> : <div>

      </div>}

    </>
  )
}















