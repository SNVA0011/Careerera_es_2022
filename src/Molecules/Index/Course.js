import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../Api";
import "../../style.css";
import certificate from "../../Images/Certificate.svg";
import post from "../../Images/Post.svg";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import AnimatedNumbers from "react-animated-numbers";
const Course = () => {
  const { value1, value2 } = useContext(Context)
  const [exactData] = value1
  const [status] = value2
  const [value, setValue] = useState()
  const [statu, updatestatus] = useState(false)
  const [hoveactive, sethoveactive] = useState('')
  const [defaultActive, setdefaultActive] = useState(true)

  // totaltitle
  const [totaltitle, settotaltitle] = useState([]);
  const [totalcour, settotalcour] = useState('');

  // totalcourslice
  const [totalcourslice, settotalcourslice] = useState();
  const [showallcour, setShowallcour] = useState(6);

  // loadmoreFun
  function loadmoreFun(title, len) {
    settotalcourslice(title)
    setShowallcour(len)
  }
  function loadlessFun(title, len) {
    settotalcourslice(title)
    setShowallcour(len)
  }


  function add(e, url, len) {
    setValue(e)
    updatestatus(true)
    sethoveactive(e)
    setdefaultActive(false)
    settotaltitle([e, url])
    settotalcour(len)
  }



  // check Desktop screen
  const [widthsc, setWidthwidthsc] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidthwidthsc(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);


  console.log('exactData-====>', exactData)


  return (
    <>
      {status ? (
        <>
          <div className="full-w start-yourcareer ipsumsl">
            <div className="container py-16 megamenu-wrapper">
              <h3 className="text-center text-gray-700 font-bold mb-3 text-base sm:text-lg md:text-xl">
                Comience Su Carrera Con <span className="orange-lgclr">{totaltitle.length == 0 ? exactData[0].category_title : totaltitle[0]}</span>
              </h3>
              <p className="text-center text-gray-700 font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                <span className="d-inline-block procur"><AnimatedNumbers animateToNumber={totalcour === '' ? exactData[0].Course.length : totalcour}></AnimatedNumbers></span>
                + {' '} <span className="text-blue-500 sitblu-clrsite"> Profesional</span> Cursos
              </p>

              {widthsc < 992 ? '' :
                <div className="row">

                  {/* Course list */}
                  <div className="col-xxl-3 col-lg-4 col-12 pt-4 sticky top-24 leftonhover-cr">

                    {exactData.map((item, i) => (
                      <div className="font-left mb-1 rounded">
                        <Link to={item.category_url}
                          className={
                            'd-flex justify-content-between course w-full rounded-sm md:text-base xl:text-lg' + (hoveactive === item.category_title ? ' active' : ' ') + (defaultActive && i === 0 ? ' active' : ' ')}
                          name={item.category_title}
                          data-catogory={
                            item.category_title
                          }
                          onMouseEnter={(e) =>
                            add(item.category_title, item.category_url, item.Course.length)
                          }>

                          {item.category_title}
                          <i className="fas fa-arrow-circle-right float-right ml-2"></i>
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Course detail data */}
                  <div className="col-xxl-9 col-lg-8 col-12">
                    {exactData.filter( statu ? (item) => item.category_title === value : (item) => item.category_title === 'Data Science' ).map((item, e) => (
                        <div className="row pt-4">
                          {item.Course.slice(0, totalcourslice === item.category_title ? showallcour : 6).map(
                            (dat, ei) => (
                              <>

                                <div className="no-underline col-xxl-4 col-md-6 col-12 mb-4">
                                  <div className="cards h-100 d-flex flex-column">


                                    <Link to={dat.courseFUllURL} className="no-underline mb-1">
                                      <div
                                        className="pt-2 pl-4 rounded-lg">

                                        <div className={"eiml-shadow " + (dat.courseType === 'Long' ? 'blue' : 'red')}></div>
                                        <div className="course-type topfix">
                                          <div className="course-typeinn">
                                            <i className="bi bi-clock text-base"></i>
                                            <span className="font-bold ml-2">
                                              {
                                                dat.courseType
                                              }
                                            </span>
                                          </div>
                                        </div>

                                        <img
                                          src={
                                            dat.courseType === 'Short'
                                              ? certificate
                                              : post
                                          }
                                          className="w-1/3 relative top-4 border rounded-full"
                                          alt={dat.courseType === 'Short' ? 'certificate-program' : 'post-graduate-program'}
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
                                          <p className="font-bold text-gray-600 course-title">
                                            {
                                              dat.CourseTitel
                                            }
                                          </p>
                                        </div>

                                      </div>
                                    </Link>


                                    <Link to={totaltitle.length == 0 ? exactData[0].category_url : totaltitle[1]} className="durationcou course-type mt-auto mb-0 py-0 no-underline text-gray-900 font-semibold">
                                      <div className="course-typeinn py-3 d-flex justify-content-between flex-column flex-sm-row">
                                        <div className="pr-smtime-2">
                                          {totaltitle.length == 0 ? exactData[0].category_title : totaltitle[0]}
                                        </div>

                                        <div className="text-gray-600 text-nowrap">
                                          {dat.duration ?
                                            <>
                                              <i className="bi bi-calendar4 mr-2"></i>
                                              {dat.duration.toString().replace("Online", "").replace("Program", "").replace("Online Program", "")}
                                            </>
                                            : ''}
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </>
                            )
                          )}


                          {item.Course.length > 6 ?
                            <div className="col-12 mt-2 text-center">
                              {totalcourslice === item.category_title ?
                                showallcour > 6 ?
                                  <button className="btn-site" onClick={(e) => loadlessFun(item.category_title, 6)}>
                                    <span>Mostrar menos</span>
                                  </button>
                                  :
                                  <button className="btn-site invert" onClick={(e) => loadmoreFun(item.category_title, item.Course.length)}>
                                    <span>Mostrar más</span>
                                  </button>
                                : <button className="btn-site invert" onClick={(e) => loadmoreFun(item.category_title, item.Course.length)}>
                                  <span>Mostrar más</span>
                                </button>
                              }
                            </div>
                            : ''}
                        </div>
                      ))}

                  </div>
                </div>
              }


              {widthsc < 992 ?
                <div className="our_faq_sec profcourmore">
                  <Accordion className="megamenu-wrapper" defaultActiveKey="0">
                    {exactData.map((item, i) => (
                      <>
                        <Accordion.Item eventKey={i} className={"evertkey-" + i}>
                          <Accordion.Header name={item.category_title}
                            onClick={(e) => add(item.category_title, item.category_url, item.Course.length)}
                            onMouseEnter={() => add(item.category_title, item.category_url, item.Course.length)}>
                            {item.category_title}
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="full-w">
                              <div className="d-block d-lg-none">


                                <p className='titlewithbottomline mt-4'>CURSOS POPULARES</p>
                              </div>

                              <div className="full-w">
                                <Carousel interval={null}>
                                  {item.Course.map((dat, ei) => (
                                    <Carousel.Item>

                                      <>
                                        <div className="no-underline w-100 mb-4" key={'type-' + ei}>
                                          <div className="cards h-100 d-flex flex-column">


                                            <Link to={dat.courseFUllURL} className="no-underline mb-1">
                                              <div
                                                className="pt-2 pl-4 rounded-lg">

                                                <div className={"eiml-shadow " + (dat.courseType === 'Long' ? 'blue' : 'red')}></div>
                                                <div className="course-type topfix">
                                                  <div className="course-typeinn">
                                                    <i className="bi bi-clock text-base"></i>
                                                    <span className="font-bold ml-2">
                                                      {
                                                        dat.courseType
                                                      }
                                                    </span>
                                                  </div>
                                                </div>

                                                <img
                                                  src={
                                                    dat.courseType === 'Short'
                                                      ? certificate
                                                      : post
                                                  }
                                                  className="w-1/3 relative top-4 border rounded-full" alt={dat.courseType === 'Short' ? 'certificate-program' : 'post-graduate-program'}
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
                                                  <p className="font-bold text-gray-600 course-title">
                                                    {
                                                      dat.CourseTitel
                                                    }
                                                  </p>
                                                </div>

                                              </div>
                                            </Link>

                                            <Link to={totaltitle.length == 0 ? exactData[0].category_url : totaltitle[1]} className="durationcou course-type mt-auto mb-0 py-0 no-underline text-gray-900 font-semibold">
                                              <div className="course-typeinn py-3 d-flex justify-content-between flex-column flex-sm-row">
                                                <div className="pr-smtime-2">
                                                  {totaltitle.length == 0 ? exactData[0].category_title : totaltitle[0]}
                                                </div>

                                                <div className="text-gray-600 text-nowrap">
                                                  {dat.duration ?
                                                    <>
                                                      <i className="bi bi-calendar4 mr-2"></i>
                                                      {dat.duration.toString().replace("Online", "").replace("Program", "").replace("Online Program", "")}
                                                    </>
                                                    : ''}
                                                </div>
                                              </div>
                                            </Link>
                                          </div>
                                        </div>
                                      </>

                                    </Carousel.Item>
                                  ))}
                                </Carousel>



                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </>
                    ))}
                  </Accordion>
                </div>
                : ''}

            </div>
          </div>


          {/* Counter */}
          <div className="regiavail full-w">
            <div className="container pt-12 sm:pt-20">
              <div className="row">
                <div className="text-center text-white pb-5 col-xl-3 col-sm-6 col-12 ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-full mb-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="font-bold text-4xl md:text-5xl mb-1">

                    <div className='animated_numberscenter w-100'>
                      <AnimatedNumbers animateToNumber={104473}></AnimatedNumbers>
                    </div>
                  </p>
                  <p className=" text-lg md:text-lg">Usuarios Registrados</p>
                </div>


                <div className="text-center text-white pb-5 col-xl-3 col-sm-6 col-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-full mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  <p className="font-bold text-4xl md:text-5xl mb-1">

                    <div className='animated_numberscenter w-100'>
                      <AnimatedNumbers animateToNumber={146}></AnimatedNumbers>
                    </div>
                  </p>
                  <p className="text-lg md:text-lg">Cursos Disponibles</p>
                </div>

                <div className="text-center text-white pb-5 col-xl-3 col-sm-6 col-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-full mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <p className="font-bold text-4xl md:text-5xl mb-1">

                    <div className='animated_numberscenter w-100'>
                      <AnimatedNumbers animateToNumber={1054}></AnimatedNumbers>
                    </div>
                  </p>
                  <p className="text-lg md:text-lg">Próximas Clases</p>
                </div>

                <div className="text-center text-white pb-5 col-xl-3 col-sm-6 col-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-full mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                  <p className="font-bold text-4xl md:text-5xl mb-1">

                    <div className='animated_numberscenter w-100'>
                      <AnimatedNumbers animateToNumber={47}></AnimatedNumbers>
                    </div>
                  </p>
                  <p className="text-lg md:text-lg">Aprendizajes Electrónicos</p>
                </div>

              </div>
            </div>
          </div>
          <div className="shape-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path className="shape-fill" fill="#084f99" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
            </svg>
          </div>

        </>
      ) : (
        <div className="overflow-hidden text-center py-1">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};
export default Course;
