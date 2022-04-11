import React, { useContext, useState, useEffect } from "react";
import Hero from '../Atoms/Hero'
import blogs from '../Images/blogs.png'
import { useParams } from 'react-router'
import news1 from '../Images/news1.jpg'
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { Helmet } from 'react-helmet'

const NewsDetail = () => {
  const [Eventdetails, setEventdetails] = useState([])
  const [Eventdetailssts, setEventdetailssts] = useState(false)

  let { news } = useParams()
  console.log('NewsDetail.js-news detail js=>', news)

  // List of Eventdetail
  async function Eventsdetail() {
    const allEventsdetails = await fetch(
      'https://my.careerera.com/API/common/EventsDetails.php?Url=' + news
    )
    const allEventsdetailsapi = await allEventsdetails.json()
    setEventdetails(allEventsdetailsapi.records)
    setEventdetailssts(true)
  }

  console.log('Eventdetails=>', Eventdetails);
  console.log('Eventdetailssts=>', Eventdetailssts);

  useEffect(() => {
    Eventsdetail()
    window.scrollTo(0, 0);
  }, [news])
 

  return (
    <div className="full-w news-detailspage">
      {Eventdetailssts ? (
        <>
          <Helmet>
            <title>{Eventdetails[0].meta_title}</title>
            <meta name="description" content={Eventdetails[0].meta_description} />
            <meta name="keywords" content={Eventdetails[0].meta_keywords} />
            <link rel="canonical" href={"https://www.careerera.com/news-events/"+ news.news}></link>
          </Helmet>

          <Hero title="News Detail" detail=""  batch={<>
            <Link to="/" className="no-underline badge bg-info">Home</Link>
            <span className="mx-2"> / </span>
            <Link to="/news-events" className="no-underline badge bg-info">News & Event</Link>
            <span className="mx-2"> / </span>
            {Eventdetails[0].h1}</>} img={blogs} />


          <div className="blog-detials-single container py-16">
            <div className="row">
              <div className="col-xxl-8 col-lg-7 col-12">
              <h3 className="font-bold text-gray-800 text-2xl sm:text-3xl xl:text-4xl mb-3">
                  {Eventdetails[0].h1}
                </h3>

                <div className="d-flex  align-items-center mb-4">
                <p className="font-semibold text-gray-500 mb-0">
                  <i className="orange-lgclr bi bi-calendar2-event mr-2"></i>
                    <Moment format="D-MMM-YYYY">{Eventdetails[0].Date}</Moment>
                  </p>

                </div>


                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: Eventdetails[0].Discription,
                  }} />

                <hr></hr>

                {Eventdetails[0].Tags.map((item, i) => (
                  <button className="px-3 leading-none py-1 text-white bg-blue-600 rounded-3xl mr-2 mb-2 uppercase">
                    <span className="text-xs">
                      {item}
                    </span>
                  </button>
                ))}
              </div>

              <div className="col-xxl-4 col-lg-5 col-12 right-sidebar mt-5 mt-lg-0">
                <div className="sidebar-bx sticky top-32">
                  <h5 className="text-xl p-3 font-bold border-bottom bg-orange-100">
                    <span>Publicación reciente</span>
                  </h5>
                  <div className="py-0 scroll">
                    {Eventdetails[0].RecentBlogList.map((item, i) => (
                      <Link to={'/news-events/' + item.url} className="d-flex px-3 py-3" key={item.id}>
                        <div className="flex-shrink-0 font-light">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                          </svg>
                        </div>

                        <div className="flex-grow-1 ms-2 w-100">
                          <p className="mb-1 text-base font-semibold">
                            {item.title}
                          </p>
                          <button className="btn btn-primary btn-sm d-flex align-items-center">
                            Leer más{" "}
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 d-inline-block" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                              <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                          </button>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
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
    </div>
  )
}

export default NewsDetail
