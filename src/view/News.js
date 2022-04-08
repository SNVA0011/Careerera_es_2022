import news from '../Images/news.png'
import news1 from '../Images/news1.jpg'

import React, { useContext, useState, useEffect } from 'react'
import Hero from '../Atoms/Hero'
import blogs from '../Images/blogs.png'
import { Context, Provider } from '../Api'
import fun from '../Images/fun4.gif'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'
 

const News = () => {
    // const { value15, value16 } = useContext(Context)
    // const [Event, setEvent] = value15
    // const [Eventsts, setEventsts] = value16

    const [Event, setEvent] = useState([])
    const [Eventsts, setEventsts] = useState(false)

    // List of Event
    async function Eventslist() {
        const allEventsList = await fetch(
            'https://my.careerera.com/API/common/EventsList.php'
        )
        const allEventsListapi = await allEventsList.json()
        setEvent(allEventsListapi.records)
        setEventsts(true)
    }

    const freeAllbatch = []
    if (Eventsts == true) {
        const chunkSize = 10
        const arr = Event
        const groups = arr
            .map((e, i) => {
                return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null
            })
            .filter((e) => {
                return e
            })
        freeAllbatch.push(groups)
    }

 

    // // pagination
    const [pagination_st, setPaginationst] = useState(0)
    const [parinum, setParinum] = useState([])

    function setPaginationLeft(e) {
        if (pagination_st == 0) {
        } else {
            setPaginationst(pagination_st - 1)
        }
    }

    function setPaginationRight(e) {
        if (pagination_st == freeAllbatch[0].length - 1) {
        } else {
            setPaginationst(pagination_st + 1)
        }
    }

    useEffect(() => {
        Eventslist()
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='newslist-page full-w'>
            {Eventsts ? (
                <>
                    <Helmet>
                        <title>List of News & Events Details </title>
                        <meta name="description" content="This webpage News & Events Details." />
                        <meta name="keywords" content="Careerera News & Events Details" />
                        <link rel="canonical" href="https://www.careerera.com/es/news-events" />
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    </Helmet>

                    <Hero title="News and Events" detail="" batch="" img={news} />

                    <div className="container py-20">
                        <div className="row">
                            {freeAllbatch[0].length > 0 ? (
                                freeAllbatch[0][pagination_st].map(
                                    (item, index) => (
                                        <ScrollAnimation animateIn='fadeInUpscrl' animateOut='fadeInUpscrlout' delay={6 * index} animateOnce={true} className='col-12 mb-4'>
                                            <div className="border-white px-4 py-4 shadow-lg border-1 rounded-lg blog_bxrow" key={index}>
                                                <div className='row'>
                                                    <div className='col-xl-3 col-md-4 col-12 mb-3 mb-md-0'>
                                                        <img
                                                            src={
                                                                'https://my.careerera.com/' +
                                                                item.image
                                                            }
                                                            className="border"
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <div className="col-xl-9 col-md-8 col-12">
                                                        <h3 className="font-bold mb-3 text-xl md:text-2xl">
                                                            <Link
                                                                to={'/news-events/'+item.url}
                                                                className="decoration-0"
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        </h3>
                                                        <div className="text-gray-500 font-semibold mb-3 text-sm lg:text-base">
                                                            <span className="">
                                                                <i className="orange-lgclr bi bi-clock mr-1"></i>
                                                                <Moment format="D-MMM-YYYY">
                                                                    {item.Date}
                                                                </Moment>
                                                                 
                                                            </span>
                                                            <i className="text-xs bi bi-chevron-compact-right divblog-sep mx-3"></i>
                                                            <span className="">
                                                                <i className="orange-lgclr bi bi-heart mr-1"></i>
                                                                3
                                                            </span>
                                                            <div className='mt-2 d-lg-none'></div>
                                                            <i className="text-xs bi bi-chevron-compact-right divblog-sep mx-3  d-none d-lg-inline-block"></i>
                                                            <span className="">
                                                                <i className="orange-lgclr bi bi-chat mr-1"></i>
                                                                3
                                                            </span>
                                                            <i className="text-xs bi bi-chevron-compact-right divblog-sep mx-3"></i>
                                                            <span className="">
                                                                <i className="orange-lgclr bi bi-tags mr-1"></i>
                                                                {/* <a
                                                            href={
                                                                '/?s=' +
                                                                item.categoryUrl
                                                            }>
                                                            <span className="tag-caturl">                
                                                                  {
                                                                    (typeof item.categoryUrl === 'string' ? 
                                                                    item.categoryUrl.slice(0,1).replace(/-/g, " ").toUpperCase() + item.categoryUrl.slice(1, item.categoryUrl.length).replace(/-/g, " ")
                                                                    : '')
                                                                 }
                                                            </span>
                                                        </a> */}
                                                                Education
                                                            </span>
                                                        </div>
                                                        <p className="text-base">
                                                            {item.Discription}
                                                        </p>

                                                        <hr className="my-4" />
                                                        {new Array(item.Tags.length)
                                                            .fill()
                                                            .map((_, i) => (
                                                                <button
                                                                    className="px-3 leading-none py-1 text-white
                                            bg-blue-600 rounded-3xl mr-2 mb-2 uppercase"
                                                                >
                                                                    <span className="text-sm">
                                                                        {item.Tags[i]}
                                                                    </span>
                                                                </button>
                                                            ))}

                                                        <div className="mt-3 px-2">
                                                            <a
                                                                href={
                                                                    'http://www.linkedin.com/shareArticle?mini=true&amp;url=' +
                                                                    window.location
                                                                        .hostname +
                                                                    '/blog/' +
                                                                    item.url
                                                                }
                                                                target="_blank"
                                                                className="mr-2"
                                                            >
                                                                <i className="fab fa-linkedin-in text-xl text-blue-500 mr-4"></i>
                                                            </a>
                                                            <a
                                                                href={
                                                                    'https://twitter.com/share?url=' +
                                                                    window.location
                                                                        .hostname +
                                                                    '/blog/' +
                                                                    item.url
                                                                }
                                                                target="_blank"
                                                                className="mr-2"
                                                            >
                                                                <i className="fab fa-twitter text-xl text-blue-400 mr-4"></i>
                                                            </a>
                                                            <a
                                                                href={
                                                                    'https://www.facebook.com/sharer/sharer.php?u=' +
                                                                    window.location
                                                                        .hostname +
                                                                    '/blog/' +
                                                                    item.url
                                                                }
                                                                target="_blank"
                                                            >
                                                                <i className="fab fa-facebook-f text-xl text-blue-800 mr-4"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                    )
                                )
                            ) : (
                                <div className="overflow-hidden text-center py-5 my-20">
                                    <div className="lds-ellipsis">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            )}

                            {freeAllbatch[0].length > 0 ? (
                                <div className='col-12 pt-3'>

                                    <nav className="text-center">
                                        <ul className="pagination justify-content-center blog_bxrowpagi flex-wrap mb-0">
                                            <li
                                                className={
                                                    'nv page-item itemnv-1' +
                                                    (pagination_st == 0
                                                        ? ' disabled'
                                                        : '')
                                                    + (freeAllbatch[0].length == 1 ? ' d-none' : '')
                                                }
                                            >
                                                <a
                                                    className="page-link"
                                                    href={void 0}
                                                    onClick={() => {
                                                        setPaginationst(0)
                                                    }}
                                                    aria-label="Previous"
                                                >
                                                    <span aria-hidden="true">
                                                        &laquo;
                                                    </span>
                                                </a>
                                            </li>
                                            <li
                                                className={
                                                    'nv page-item itemnv-2' +
                                                    (pagination_st == 0
                                                        ? ' disabled'
                                                        : '')
                                                    + (freeAllbatch[0].length == 1 ? ' d-none' : '')
                                                }
                                            >
                                                <a
                                                    className="page-link"
                                                    href={void 0}
                                                    onClick={(e) => {
                                                        setPaginationLeft(e)
                                                    }}
                                                    aria-label="Previous"
                                                >
                                                    <span aria-hidden="true">‹</span>
                                                </a>
                                            </li>

                                            {/*------ pagination map ------*/}
                                            {new Array(freeAllbatch[0].length - 1)
                                                .fill()
                                                .map((_, index) => (
                                                    <li
                                                        className={
                                                            'page-item dots' +
                                                            (pagination_st == index
                                                                ? ' active'
                                                                : '') +
                                                            (pagination_st == index
                                                                ? ' activedot'
                                                                : '') +
                                                            (pagination_st - 1 == index
                                                                ? ' activedot'
                                                                : '') +
                                                            (pagination_st + 1 == index
                                                                ? ' activedot'
                                                                : '') +
                                                            (pagination_st - 2 == index
                                                                ? ' activedot'
                                                                : '') +
                                                            (pagination_st + 2 == index
                                                                ? ' activedot'
                                                                : '')
                                                        }>
                                                        <a
                                                            className="page-link"
                                                            href={void 0}
                                                            onClick={() => {
                                                                setPaginationst(index)
                                                            }}
                                                        >
                                                            {index + 1}
                                                        </a>
                                                    </li>
                                                ))}



                                            {/* last item */}
                                            <li
                                                className={
                                                    "page-item dots" +
                                                    (pagination_st == freeAllbatch[0].length - 1 ? " active" : "") +
                                                    (pagination_st == freeAllbatch[0].length - 1 ? " activedot" : "") +
                                                    (pagination_st - 1 == freeAllbatch[0].length - 1 ? " activedot" : "") +
                                                    (pagination_st + 1 == freeAllbatch[0].length - 1 ? " activedot" : "") +
                                                    (pagination_st - 2 == freeAllbatch[0].length - 1 ? " activedot" : "") +
                                                    (pagination_st + 2 == freeAllbatch[0].length - 1 ? " activedot" : "")
                                                }>
                                                <a
                                                    className="page-link"
                                                    href={void 0}
                                                    onClick={() => {
                                                        setPaginationst(freeAllbatch[0].length - 1);
                                                    }}>
                                                    {freeAllbatch[0].length}
                                                </a>
                                            </li>
                                            {/*------ end pagination map ------*/}


                                            <li className='w-100 d-block d-lg-none'></li>
                                            <li
                                                className={
                                                    'nv page-item itemnv-3' +
                                                    (pagination_st ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' disabled'
                                                        : '')
                                                    + (freeAllbatch[0].length == 1 ? ' d-none' : '')
                                                }
                                            >
                                                <a
                                                    className="page-link"
                                                    href={void 0}
                                                    onClick={(e) => {
                                                        setPaginationRight(e)
                                                    }}
                                                    aria-label="Next"
                                                >
                                                    <span aria-hidden="true">›</span>
                                                </a>
                                            </li>
                                            <li
                                                className={
                                                    'nv page-item itemnv-4' +
                                                    (pagination_st ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' disabled'
                                                        : '')
                                                    + (freeAllbatch[0].length == 1 ? ' d-none' : '')
                                                }
                                            >
                                                <a
                                                    className="page-link"
                                                    href={void 0}
                                                    onClick={() => {
                                                        setPaginationst(
                                                            freeAllbatch[0].length - 1
                                                        )
                                                    }}
                                                    aria-label="Next"
                                                >
                                                    <span aria-hidden="true">
                                                        &raquo;
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <img src={fun} className="w-screen" alt="careerera-loader-image" />
            )}
        </div>
    )
}

export default News
