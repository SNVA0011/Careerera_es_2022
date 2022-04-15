import React, { useContext, useState, useEffect } from "react"
import { Context, Provider } from '../Api'
import { useParams, } from "react-router";
import Hero from "../Molecules/Master/Hero";
import PgpDatascience from "./PgpDataScience";
import { CurrencyContxt } from "../Atoms/Contextcurrency";
import { Link } from "react-router-dom";
import fun from "../Images/fun4.gif"
import CountryFooter from "../Atoms/CountryFooter";
import Contactfooter from "../Atoms/Contactfooter";
import { Helmet } from "react-helmet";
import StateFooter from "../Atoms/StateFooter";
import MasterCountryHero from "../Atoms/MasterCountryHero";
import ScrollAnimation from 'react-animate-on-scroll';


const MasterCity = () => {
    let country = useParams()

    const { value9, value10 } = useContext(Context)
    const [allfreeCour, setallFreeCour] = value9
    const [allfreeCourLoad, setallFreeCourLoad] = value10

    const [contextcur, setContextCur] = useContext(CurrencyContxt);



    const [Catfinal, Catsetfinal] = useState([]);
    const [Catsts, Catloadsts] = useState(false);

    const [countrycaptial, setCountrycaptial] = useState(country.city);
    useEffect(() => {
        setCountrycaptial(countrycaptial.charAt(0).toUpperCase() + countrycaptial.slice(1))
    }, []);

    // country Api
    const [data, setdata] = useState([])
    const [load, setload] = useState(false)



    async function CallApi() {


        const dat = await fetch('http://65.0.26.142:9000/apiurl/', {
            method: 'POST',
            body: JSON.stringify({ "apiurl": "https://my.careerera.com/API/common/world_countries.php" }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, [])
            .then((response) => response.json())
            .then((json) => setdata(json.records));
        setload(true)
    }




    // List of BlogDetails

    async function getCourse() {


        const dat = await fetch('http://65.0.26.142:9000/apiurl/', {
            method: 'POST',
            body: JSON.stringify({ "apiurl": 'https://my.careerera.com/API/course/CategoryPage.php?url=' + country.id + '&timeZone=EST' }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, [])
            .then((response) => response.json())
            .then((json) => Catsetfinal(json.records));
        Catloadsts(true)
    }



    //   async function getCourse() {
    //       const course = await fetch(
    //           'https://my.careerera.com/API/course/CategoryPage.php?url=' + country.id + '&timeZone=EST'
    //       )
    //       const courseapi = await course.json()
    //       Catsetfinal(courseapi.records)
    //       Catloadsts(true)
    //   }

    // currency inr/usd
    //   const [contextcur, setContextCur] = useContext(CurrencyContxt);



    useEffect(() => {
        getCourse()
        CallApi()

        window.scrollTo(0, 0);
    }, []);


    const finalId = data.filter((items) => items.countries_url == country.city)

    // getWords
    function getWords(monthCount) {
        function getPlural(number, word) {
            return number === 1 && word.one || word.other;
        }

        var months = { one: 'month', other: 'months' },
            years = { one: 'year', other: 'years' },
            m = monthCount % 12,
            y = Math.floor(monthCount / 12),
            result = [];

        y && result.push(y + ' ' + getPlural(y, years));
        m && result.push(m + ' ' + getPlural(m, months));
        return result.join(' and ');
    }



    return (<>
        {load ? <div>

            {Catsts ? <>
                {Catfinal[0].courseList.filter((items) => items.courseFUllURL == country.id + "/" + country.dats).map((items, i) => {
                    return (
                        <>
                            <Helmet>
                                <title>{items.CourseTitel} Course in {country.city} - Careerera</title>
                                <meta name="description" content={"Enroll for the " + items.CourseTitel + "course online in " + country.city + ". Get E-learning Live online training session at Careerera. It helps you to achieve your career goals."} />
                                <meta name="keywords" content={"" + items.CourseTitel + " " + country.city + ",  " + country.city + " " + items.CourseTitel + ", " + country.city + " " + items.CourseTitel + " online, online " + country.city + " " + items.CourseTitel + ",  " + items.CourseTitel + " in " + country.city + ""} />
                                <link rel="canonical" href={"https://www.careerera.com/" + country.id + "/" + country.dats + "/" + country.city + "/" + country.state + "/" + country.city} />

                            </Helmet>

                            <MasterCountryHero title={items.CourseTitel + " in " + country.city} durationasitis={items.Duration} />
                        </>
                    )
                })}
            </>
                : ''}

            <div className="free-batches bg-gray-50 country-master full-w">


                {/* free */}
                <div className='all-batches full-w'>
                    <div className="container pt-16 pb-8">

                        <div className="sec_title">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                Courses
                            </h2>
                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                        </div>


                        {Catsts ? <>
                            {Catfinal[0].courseList.filter((items) => items.courseFUllURL == country.id + "/" + country.dats).map((items, i) => {
                                return (
                                    <>
                                        {
                                            items.CourseBatchList.Elearning?.length > 0 ?
                                                <>
                                                    <h3 className='font-semibold text-2xl mb-3'>E-Learning</h3>
                                                    <hr></hr>
                                                </>
                                                : ''}

                                    </>
                                )
                            })}
                        </>
                            : ''
                        }



                        {Catsts ? <>

                            <div className="row">

                                {Catfinal[0].courseList.filter((items) => items.courseFUllURL == country.id + "/" + country.dats).map((items, ix) => {
                                    return (
                                        <>
                                            {
                                                items.CourseBatchList.Elearning?.length > 0 ?
                                                    items.CourseBatchList.Elearning.map((item, i) => {
                                                        return (
                                                            <>
                                                                <ScrollAnimation animateIn='fadeInUpscrl' animateOut='fadeInUpscrlout' delay={6 * i} animateOnce={true} className='col-lg-6 col-12 mb-4' key={i}>
                                                                    <div className="bg-white d-flex border-2 shadow px-3 py-3 h-100 flex-column flex-sm-row">
                                                                        <div className="">
                                                                            <div className="bg-red-600 p-3 text-center text-xs text-white date_freec">
                                                                                <span className="text-4xl font-bold">
                                                                                    {item.date.split('-')[0]}
                                                                                </span>
                                                                                <br /> {item.date.split('-')[1]}
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 pl-sm-4 d-flex flex-column  mt-3 mt-sm-0">
                                                                            <div className='flex-grow-1 pb-2'>
                                                                                <h2 className="text-xl sm:text-2xl font-bold" dangerouslySetInnerHTML={{ __html: item.CourseTitel }} />

                                                                                {contextcur.currency === 'Asia/Kolkata' ?
                                                                                    <p className="font-semibold mb-1">
                                                                                         <i class="bi bi-cash text-gray-500 mr-2"></i>
                                                                                        {' '}
                                                                                        <span className="line-through text-gray-500 font-semibold mr-1">
                                                                                            ₹{item.INR_Old_price}
                                                                                        </span>{' '}
                                                                                        ₹{item.INR_New_price}
                                                                                    </p>
                                                                                    :
                                                                                    <p className="font-semibold mb-1">
                                                                                        <i class="bi bi-cash text-gray-500 mr-2"></i>
                                                                                        {' '}
                                                                                        <span className="line-through text-gray-500 font-semibold mr-1">
                                                                                            ${item.Old_price}
                                                                                        </span>{' '}
                                                                                        ${item.New_price}
                                                                                    </p>
                                                                                }

                                                                                <p className="font-semibold mb-1">
                                                                                         <i class="bi bi-building text-gray-500 mr-2"></i>
                                                                                    Careerera ({item.workshop_id})
                                                                                </p>

                                                                                <p className="font-semibold mb-1">
                                                                                         <i class="bi bi-clock-history text-gray-500 mr-2"></i>
                                                                                    {item.batch_duration}

                                                                                    {item.Totalhour > 0 ?
                                                                                        (' (' + item.Totalhour + ' Hours)')
                                                                                        : ''}
                                                                                </p>
                                                                                <p className="font-semibold">
                                                                                       <i class="bi bi-camera-video-fill text-gray-500 mr-2"></i>
                                                                                    {item.batch_category}
                                                                                </p>


                                                                            </div>


                                                                            <div className='text-left'>
                                                                                <a href={'http://my.careerera.com/signup.php?batchid=' + item.workshop_id + (contextcur.currency === 'Asia/Kolkata' ? '&currency=Rs' : '')}
                                                                                    target="_blank"
                                                                                    className="no-underline btn-site gray">
                                                                                    <span>ENROLL NOW</span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </ScrollAnimation>
                                                            </>
                                                        )
                                                    }) : ''}

                                        </>
                                    )
                                })}


                            </div>
                        </> : <>
                            <div className="overflow-hidden text-center py-5 my-20">
                                <div className="lds-ellipsis">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </>}
                    </div>
                </div>


                {/* COURSE */}
                <div className='all-batches full-w'>
                    <div className="container pb-16">
                        <h3 className='font-semibold text-2xl mb-3'>LIVE ONLINE</h3>
                        <hr></hr>
                        {allfreeCourLoad ? <>

                            <div className="row">


                                {allfreeCour[0].LVC.filter((items) => items.BatchURL.includes(country.dats))?.length > 0 ?
                                    <>
                                        {allfreeCour[0].LVC.filter((items) => items.BatchURL.includes(country.dats)).map((items, index) => {
                                            return (
                                                <>

                                                    <ScrollAnimation animateIn='fadeInUpscrl' animateOut='fadeInUpscrlout' delay={6 * index} animateOnce={true} className='col-lg-6 col-12 mb-4' key={index}>
                                                        <div className="bg-white d-flex border-2 shadow px-3 py-3 h-100 flex-column flex-sm-row">
                                                            <div className="">
                                                                <div className="bg-red-600 p-3 text-center text-xs text-white date_freec">
                                                                    <span className="text-4xl font-bold">
                                                                        {
                                                                            items.date.split(
                                                                                '-'
                                                                            )[0]
                                                                        }
                                                                    </span>
                                                                    <br />{' '}
                                                                    {
                                                                        items.date.split(
                                                                            '-'
                                                                        )[1]
                                                                    }
                                                                </div>
                                                            </div>

                                                            <div className="flex-grow-1 pl-sm-4 d-flex flex-column  mt-3 mt-sm-0">
                                                                <div className='flex-grow-1 pb-2'>
                                                                    <h2 className="text-xl sm:text-2xl font-bold" dangerouslySetInnerHTML={{ __html: items.CourseTitel }} />

                                                                    {contextcur.currency === 'Asia/Kolkata' ?
                                                                        <p className="font-semibold mb-1">
                                                                             <i class="bi bi-cash text-gray-500 mr-2"></i>
                                                                            {' '}
                                                                            <span className="line-through text-gray-500 font-semibold mr-1">
                                                                                ₹{items.INR_Old_price}
                                                                            </span>{' '}
                                                                            ₹{items.INR_New_price}
                                                                        </p>
                                                                        :
                                                                        <p className="font-semibold mb-1">
                                                                            <i class="bi bi-cash text-gray-500 mr-2"></i>
                                                                            {' '}
                                                                            <span className="line-through text-gray-500 font-semibold mr-1">
                                                                                ${items.Old_price}
                                                                            </span>{' '}
                                                                            ${items.New_price}
                                                                        </p>
                                                                    }


                                                                    <p className="font-semibold mb-1">
                                                                             <i class="bi bi-building text-gray-500 mr-2"></i>
                                                                        Careerera ({items.workshop_id})
                                                                    </p>

                                                                    <p className="font-semibold mb-1">
                                                                         <i class="bi bi-calendar4-event text-gray-500 mr-2"></i>
                                                                        {items.date} <span className="text-gray-500">-To-</span> {items.Enddate}
                                                                    </p>

                                                                    <p className="font-semibold mb-1">
                                                                             <i class="bi bi-clock-history text-gray-500 mr-2"></i>
                                                                        {
                                                                            items.batch_duration.includes("Month") ? getWords(parseInt(items.batch_duration)) : items.batch_duration
                                                                        }

                                                                        {items.Totalhour > 0 ?
                                                                            (' (' + items.Totalhour + ' Hours)')
                                                                            : ''}
                                                                    </p>
                                                                    <p className="font-semibold">
                                                                           <i class="bi bi-camera-video-fill text-gray-500 mr-2"></i>
                                                                        {items.batch_category}
                                                                    </p>

                                                                </div>

                                                                <p className="mb-0">
                                                                    <Link
                                                                        to={'/' + items.BatchURL}
                                                                        className="no-underline btn-site invert mr-3">
                                                                        <span>Read More</span>
                                                                    </Link>

                                                                    <a href={'http://my.careerera.com/signup.php?batchid=' + items.workshop_id + (contextcur.currency === 'Asia/Kolkata' ? '&currency=Rs' : '')}
                                                                        target="_blank"
                                                                        className="no-underline btn-site gray">
                                                                        <span>Enroll Now</span>
                                                                    </a>
                                                                </p>

                                                            </div>
                                                        </div>
                                                    </ScrollAnimation>

                                                </>
                                            )
                                        })}
                                    </>
                                    : ''}



                            </div>

                        </> : <>
                            <div className="overflow-hidden text-center py-5 my-20">
                                <div className="lds-ellipsis">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </>}
                    </div>
                </div>

            </div>

            <div className='curriculum-assimilate full-w'>
                <div className="container py-16">
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Curriculum
                        </h2>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>

                    <div className="row pt-2 curriculum-mstercoun">



                        {Catsts ?
                            Catfinal[0].courseList.filter((items) => items.courseFUllURL == country.id + "/" + country.dats).map((items, i) =>
                                items.Curriculum?.length > 0 ?

                                    <>
                                        <div className="col-12 d-none d-md-block">
                                            <div className="list-group mb-2 shadow-md">
                                                <div className="d-flex list-group-item py-3 flex-column flex-md-row text-white font-semibold bg-snocurri text-lg">
                                                    <div className="text-nowrap pr-3 chapterleft-bx">
                                                        Sl. No.
                                                    </div>
                                                    <div className="flex-grow-1 mt-2 mt-md-0">
                                                        Chapter
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {items.Curriculum.map((item, i) =>
                                            <div className="col-12" key={i}>
                                                <div className="list-group mb-2 shadow-sm">
                                                    <div className="d-flex list-group-item py-3 flex-column flex-md-row bggrayunit">
                                                        <div className="text-nowrap pr-3 text-gray-500 chapterleft-bx sno-placeholder">
                                                            <i className="bi bi-file-earmark-text-fill mr-2 text-blue-400" />
                                                            {item.Unit_num}
                                                        </div>
                                                        <div className="flex-grow-1 font-semibold mt-2 mt-md-0 snochap-placeholder">
                                                            {item.Unit_Name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                    : ''

                            )

                            : <div className="overflow-hidden text-center py-5 my-20">
                                <div className="lds-ellipsis">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>}





                    </div>

                </div>
            </div>

            <Contactfooter />



        </div> : <img src={fun} className="w-screen" alt="careerera-loader-image" />}

    </>)
}
export default MasterCity;