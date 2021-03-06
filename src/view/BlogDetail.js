import React, { useContext, useState, useEffect } from "react";
import Hero from "../Atoms/Hero";
import blogs from "../Images/blogs.png";
import { useParams } from "react-router";
import news1 from "../Images/news1.jpg";
import { Context, Provider } from "../Api";
import { Link, NavLink } from "react-router-dom";
import Moment from "react-moment";
import { Helmet } from 'react-helmet'
import fun from '../Images/fun4.gif'

const BlogDetail = () => {
  // const { value19, value20 } = useContext(Context)
  // const [BlogDetail, setBlogDetail] = value19
  // const [blogDetailsts, setblogDetailsts] = value20

  const [BlogDetail, setBlogDetail] = useState([]);
  const [blogDetailsts, setblogDetailsts] = useState(false);

  let { url } = useParams();

  // List of BlogDetails
  async function BlogDetails() {
    await fetch('http://65.0.26.142:9000/apiurl/', {
      method: 'POST',
      body: JSON.stringify({ "apiurl": "https://es.careerera.com/API/common/BlogDetails.php?Url=" + url }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  }, []).then((response) => response.json()).then((json) => setBlogDetail(json.records));
  setblogDetailsts(true);
  }



  useEffect(() => {
    BlogDetails();
    window.scrollTo(0, 0);
  }, [url]);



  return (
    <div className="full-w blog-detailspage">
      {blogDetailsts ? (
        <>
          <Helmet>
            <title>{BlogDetail[0].meta_title}</title>
            <meta name="description" content={BlogDetail[0].meta_description} />
            <meta name="keywords" content={BlogDetail[0].meta_keywords} />
            <link rel="canonical" href={"https://www.careerera.com/es/blog/" + url} />

            <script type="application/ld+json">
              {
                `"@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.careerera.com/es/blog/${url}"
  },
  "headline": "${BlogDetail[0].h1}",
  "description": "${BlogDetail[0].meta_description}",
  "image": "https://es.careerera.com/${BlogDetail[0].image}",  
  "author": {
    "@type": "Organization",
    "name": "Careerera"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "Careerera",
    "logo": {
      "@type": "ImageObject",
      "url": "https://es.careerera.com/${BlogDetail[0].image}"
    }
  },
  "datePublished": "${BlogDetail[0].Date}"`
              }
            </script>


            <meta property="og:locale" content="en-US" />
            <meta property="og:site_name" content="Careerera.com" />
            <meta property="og:url" content={"https://www.careerera.com/es/blog/" + url} />
            <meta property="og:title" content={BlogDetail[0].h1} />
            <meta property="og:description" content={BlogDetail[0].meta_description} />
            <meta name="keywords" content={BlogDetail[0].meta_keywords} />
            <meta property="og:image" content={"https://es.careerera.com/" + BlogDetail[0].image} />
            <meta property="og:type" content="article" /><meta property="article:publisher" content="http://www.facebook.com/careerera" />
            <meta name="twitter:card" content="app" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site:id" content="@Careerera1" />
            <meta name="twitter:creator" content="@Careerera1" />
            <meta property="twitter:app:name:iphone" content="Careerera1" />
            <meta property="twitter:app:name:ipad" content="Careerera1" />
            <meta name="twitter:url" content={"https://www.careerera.com/es/blog/" + url} />
            <meta name="twitter:site" content="@Careerera1" />
            <meta name="twitter:title" content={BlogDetail[0].h1} />
            <meta name="twitter:description" content={BlogDetail[0].meta_description} />
            <meta name="twitter:image" content={"https://es.careerera.com/" + BlogDetail[0].image} />



          </Helmet>

          <Hero title="BLOG DETAILS" detail="" batch={<>
            <Link to="/" className="no-underline badge bg-info">Home</Link>
            <span className="mx-2"> / </span>
            <Link to="/blog" className="no-underline badge bg-info">Blog</Link>
            <span className="mx-2"> / </span>
            {BlogDetail[0].h1}</>} img={blogs} />

          <div className="blog-detials-single container py-16">
            <div className="row">
              <div className="col-xxl-8 col-lg-7 col-12">
                <h1 className="font-bold text-gray-800 text-2xl sm:text-3xl xl:text-4xl mb-3">
                  {BlogDetail[0].h1}
                </h1>

                <div className="d-flex  align-items-center mb-4">
                  <p className="font-semibold text-gray-500 mb-0">
                    <i className="orange-lgclr bi bi-calendar2-event mr-2"></i>
                    <Moment format="D-MMM-YYYY">{BlogDetail[0].Date}</Moment>
                  </p>
                  <span className="text-right ml-auto">
                    <div className="rounded-social-buttons m-0">
                      <a
                        className="mb-0 social-button linkedin"
                        href={
                          "http://www.linkedin.com/shareArticle?mini=true&amp;url=" +
                          window.location.hostname +
                          "/blog/" +
                          BlogDetail[0].url
                        }
                        target="_blank"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>

                      <a
                        className="mb-0 social-button twitter"
                        href={
                          "https://twitter.com/share?url=" +
                          window.location.hostname +
                          "/blog/" +
                          BlogDetail[0].url
                        }
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>

                      <a
                        className="mb-0 social-button facebook"
                        href={
                          "https://www.facebook.com/sharer/sharer.php?u=" +
                          window.location.hostname +
                          "/blog/" +
                          BlogDetail[0].url
                        }
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div>
                  </span>
                </div>


                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: BlogDetail[0].Discription,
                  }} />

                <hr></hr>

                {BlogDetail[0].Tags.map((item, i) => (
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
                    <span>Publicaci??n Reciente</span>
                  </h5>
                  <div className="py-0 scroll">
                    {BlogDetail[0].RecentBlogList.map((item, i) => (
                      <NavLink to={'/blog/' + item.url} className="d-flex px-3 py-3" key={item.id} activeclassname="active">
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
                            Read More{" "}
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 d-inline-block" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                              <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                          </button>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>


            </div>

          </div>
        </>
      ) : (
        <img src={fun} className="w-screen" alt="careerera-loader-image" />
      )}
    </div>
  );
};

export default BlogDetail