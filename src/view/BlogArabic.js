import React, { useContext, useState, useEffect } from 'react'
import Hero from '../Atoms/Hero'
import blogs from '../Images/blogs.png'
import news1 from '../Images/news1.jpg'
import { Context, Provider } from '../Api'
import fun from '../Images/fun4.gif'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'
import { useParams } from 'react-router'
import NotFound from './NotFound'

const BlogArabic = () => {
    // const { value13, value14 } = useContext(Context)
    // const [Blog, setBlog] = value13
    // const [blogsts, setblogsts] = value14
    const pageblgid = useParams();

    const [Blog, setBlog] = useState([])
    const [blogsts, setblogsts] = useState(false)

    // List of Blog
    async function Bloglist() {
        const allBlogList = await fetch(
            'https://my.careerera.com/API/common/ar-blogList.php'
        )
        const allBlogListapi = await allBlogList.json()
        setBlog(allBlogListapi.records)
        setblogsts(true)
    }

    const freeAllbatch = []
    if (blogsts == true) {
        const chunkSize = 10
        const arr = Blog
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
        Bloglist()
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        if(pageblgid.id != undefined || pageblgid.id){
         setPaginationst(pageblgid.id-1)
        }
         window.scrollTo(0, 0);
     }, [pageblgid])

    return (
        <div className='bloglist-page full-w'>
            {blogsts ? (
                <>
                { 
                        freeAllbatch[0]?.length > 0 ?
                        freeAllbatch[0][pagination_st]?.length > 0 ? 
                        
                       <>
  <Helmet>
                        <title>List of Blog</title>
                        <meta name="description" content="This webpage Blog in Arabic." />
                        <meta name="keywords" content="Careerera Blog, Arabic Blog" />

                        {pageblgid.id === undefined ? 
                        <link rel="canonical" href="https://www.careerera.com/es/ar/blog/"></link>
                        :
                        <link rel="canonical" href={"https://www.careerera.com/ar/blog/page="+(pageblgid.id)}></link>
                          }
                    </Helmet>

                    <Hero
                        title="Blogs and Article"
                        detail=""
                        batch={<>
                            <Link to="/" className="no-underline badge bg-info">Home</Link>
                            <span className="mx-2"> / </span>
                            Blog </>}
                        img={blogs}
                    />
                    <div className="container py-20">
                        <div className="row">
                            {freeAllbatch[0].length > 0 ? (
                                freeAllbatch[0][pagination_st].map(
                                    (item, index) => (
                                        <ScrollAnimation animateIn='fadeInUpscrl' animateOut='fadeInUpscrlout' delay={6*index} animateOnce={true}  className='col-12 mb-4'>
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
                                                        <h2 className="font-bold mb-3 text-xl md:text-2xl">
                                                            <Link
                                                                to={'/ar/'+item.url}
                                                                className="decoration-0"
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        </h2>
                                                        <div className="text-gray-500 font-semibold mb-3 text-sm lg:text-base">
                                                            <span className="">
                                                            <i className="orange-lgclr text-gray-400 bi bi-clock mr-1"></i>
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
                                                                <a
                                                                    href={
                                                                        '/?s=' +
                                                                        item.categoryUrl
                                                                    }
                                                                >
                                                                    <span className="tag-caturl">
                                                                        {
                                                                            (typeof item.categoryUrl === 'string' ?
                                                                                item.categoryUrl.slice(0, 1).replace(/-/g, " ").toUpperCase() + item.categoryUrl.slice(1, item.categoryUrl.length).replace(/-/g, " ")
                                                                                : '')
                                                                        }
                                                                    </span>
                                                                </a>
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
                                <div className="overflow-hidden text-center">
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
                                                <Link
                                                    className="page-link"
                                                    to={'/ar/blog/page=1'}
                                                    onClick={() => {
                                                        setPaginationst(0);
                                                    }}
                                                    aria-label="Previous"
                                                >
                                                    <span aria-hidden="true">
                                                        &laquo;
                                                    </span>
                                                </Link>
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
                                                <Link
                                                    className="page-link"
                                                    to={'/ar/blog/page='+(pagination_st)}
                                                    onClick={(e) => {
                                                        setPaginationLeft(e);
                                                    }}
                                                    aria-label="Previous"
                                                >
                                                    <span aria-hidden="true">‹</span>
                                                </Link>
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
                                                        <Link
                                                            className="page-link"
                                                            to={'/ar/blog/page='+(index + 1)}
                                                            onClick={() => {
                                                                setPaginationst(index);
                                                            }}
                                                        >
                                                            {index + 1}
                                                        </Link>
                                                    </li>
                                                ))}




                                            {/* last item */}
                                            <li
                                                className={
                                                    'page-item dots' +
                                                    (pagination_st ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' active'
                                                        : '') +
                                                    (pagination_st ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' activedot'
                                                        : '') +
                                                    (pagination_st - 1 ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' activedot'
                                                        : '') +
                                                    (pagination_st + 1 ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' activedot'
                                                        : '') +
                                                    (pagination_st - 2 ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' activedot'
                                                        : '') +
                                                    (pagination_st + 2 ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' activedot'
                                                        : '')
                                                }
                                            >
                                                <Link
                                                    className="page-link"
                                                    to={'/ar/blog/page='+(freeAllbatch[0].length)}
                                                    onClick={() => {
                                                        setPaginationst(
                                                            freeAllbatch[0].length - 1
                                                        );
                                                    }}
                                                >
                                                    {freeAllbatch[0].length}
                                                </Link>
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
                                                }>
                                                <Link
                                                    className="page-link"
                                                    to={'/ar/blog/page='+(pagination_st+2)}
                                                    onClick={(e) => {
                                                        setPaginationRight(e);
                                                    }}
                                                    aria-label="Next"
                                                >
                                                    <span aria-hidden="true">›</span>
                                                </Link>
                                            </li>
                                            
                                            <li
                                                className={
                                                    'nv page-item itemnv-4' +
                                                    (pagination_st ==
                                                        freeAllbatch[0].length - 1
                                                        ? ' disabled'
                                                        : '')
                                                    + (freeAllbatch[0].length == 1 ? ' d-none' : '')
                                                }>
                                                <Link
                                                    className="page-link"
                                                    to={'/ar/blog/page='+(freeAllbatch[0].length)}
                                                    onClick={() => {
                                                        setPaginationst(
                                                            freeAllbatch[0].length - 1
                                                        );
                                                    }}
                                                    aria-label="Next"
                                                >
                                                    <span aria-hidden="true">
                                                        &raquo;
                                                    </span>
                                                </Link>
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
                        
                        : <NotFound /> : ''
                    }

                  
                </>
            ) : (
                <img src={fun} className="w-screen" alt="careerera-loader-image"/>
            )}
        </div>
    )
}

export default BlogArabic
