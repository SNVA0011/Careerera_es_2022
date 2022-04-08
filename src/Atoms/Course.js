import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Api'
import Spinner from 'react-bootstrap/Spinner'
import certificate from './../Images/Certificate.svg'
import post from './../Images/Post.svg'
import edx from './../Images/edx_logo.svg'
import harvard from './../Images/harvard_logo.png'
import Accordion from 'react-bootstrap/Accordion'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { Link } from 'react-router-dom'
import { menuCloseMob } from './Contextcurrency'
import Carousel from 'react-bootstrap/Carousel'

const Course = (props) => {
    const [handler, setHandler] = useState('initial')
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

    function handleChange(e) {
        setHandler(e.target.value);
    }

    function add(e, url, len) {
        setValue(e)
        updatestatus(true)
        sethoveactive(e)
        setdefaultActive(false)
        settotaltitle([e, url])
        settotalcour(len)
    }


    // hideMenucourse
    const [hidemenust, setHidemenust] = useState(true)


    const [mobmenuclose, setMobmenuclose] = useContext(menuCloseMob);

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
    }, [handler]);




    return (
        <>

            {status ? (
                <div className="megamenu-wrapper mega">
                    <div className="dropdown" onMouseEnter={(e) => setHidemenust(false)}
                        onMouseLeave={(e) => setHidemenust(true)}>
                        <button className="dropdown-toggle btn btn-success">
                            <i className="bi bi-grid"></i> Todos los cursos
                        </button>

                        <div className="dropdown-menu" style={{ 'display': hidemenust ? 'none' : 'block' }}>

                            <div className="container scroll-area px-scrollbox-12">
                                {widthsc < 992 ? '' :
                                    <div className="row above">
                                        {/* Course list */}
                                        <div className="col-xxl-3 col-lg-4 col-12 pt-4 sticky top-24 leftonhover-cr">
                                            {/* <h3 className="font-semibold text-lg pl-1 text-blue-500"  >Choose Your Domain</h3> */}
                                            {exactData.map((item, i) => (
                                                <div className="font-left mb-1 rounded">
                                                    {/* <Link to={item.category_url}>Hello</Link> */}
                                                    <Link to={item.category_url}
                                                        onClick={(e) => { setHidemenust(true) }}
                                                        className={
                                                            'd-flex justify-content-between course w-full rounded-sm md:text-base xl:text-lg' +
                                                            (hoveactive ===
                                                                item.category_title
                                                                ? ' active'
                                                                : ' ') +
                                                            (defaultActive &&
                                                                i === 0
                                                                ? ' active'
                                                                : ' ')
                                                        }
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
                                        <div className="col-xxl-9 col-lg-8 col-12 scroll-xxl-9">

                                            {exactData
                                                .filter(
                                                    statu
                                                        ? (item) =>
                                                            item.category_title ===
                                                            value
                                                        : (item) =>
                                                            item.category_title ===
                                                            'Data Science'
                                                )
                                                .map((item, e) => (
                                                    <div className="row pt-4">
                                                        {item.Course.slice(0, totalcourslice === item.category_title ? showallcour : 6).map(
                                                            (dat, ei) => (
                                                                <>

                                                                    <div className="no-underline col-xxl-4 col-md-6 col-12 mb-4" key={ei}>
                                                                        <div className="cards h-100 d-flex flex-column">

                                                                            <Link to={dat.courseFUllURL} className="no-underline mb-1" onClick={(e) => setHidemenust(true)} key={ei}>
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


                                                                            <Link to={totaltitle.length == 0 ? exactData[0].category_url : totaltitle[1]}
                                                                                className="durationcou course-type mt-auto mb-0 py-0 no-underline text-gray-900 font-semibold"
                                                                                onClick={(e) => setHidemenust(true)} key={ei}>
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
                                                                            <span>Muestra menos</span>
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

                                                                                <div onMouseEnter={(e) => setMobmenuclose(false)} onClick={(e) => setMobmenuclose(false)} key={'type-' + ei}>
                                                                                    <div className="no-underline w-100 mb-4">
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
                                                                                </div>

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
                    </div>
                </div>
            ) : (
                <div className="text-center mt-3">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </Spinner>
                </div>
            )}
        </>
    )
}

export default Course
