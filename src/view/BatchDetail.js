import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { CurrencyContxt } from "../Atoms/Contextcurrency";
import Accordion from 'react-bootstrap/Accordion'
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { Helmet } from 'react-helmet'
import Hero from "./../Atoms/Hero";
import fun from '../Images/fun4.gif'

const BatchDetail = (props) => {
  const data = useParams()
  const date = useParams()
  const workid = useParams()

  const [Detail, setDetail] = useState([])
  const [Load, setLoad] = useState(false)
  const [List, setList] = useState([])
  const [Loadlist, setLoadlist] = useState(false)

  // currency inr/usd
  const [contextcur, setContextCur] = useContext(CurrencyContxt);

  async function CallApi() {
    await fetch('http://65.0.26.142:9000/apiurl/', {
      method: 'POST',
      body: JSON.stringify({ "apiurl": "https://my.careerera.com/API/course/BatchDetails.php?BId=" + workid.workid + "&timeZone=" + contextcur.currency }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }, [])
      .then((response) => response.json())
      .then((json) => setDetail(json.records));
    setLoad(true);
  }


  async function ListCall() {
    await fetch('http://65.0.26.142:9000/apiurl/', {
      method: 'POST',
      body: JSON.stringify({ "apiurl": "https://my.careerera.com/API/common/batch_location.php" }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }, [])
      .then((response) => response.json())
      .then((json) => setList(json.records));
    setLoadlist(true);
  }


  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthno = monthNames.indexOf("December")
 
  const Da = new Date()
  const Dat = Da.getDate()
  const mo = Da.getMonth()
  const Month = monthNames[Da.getMonth()]
  const Year = Da.getFullYear()
  const ExactDate = Dat + "-" + Month + "-" + Year


  useEffect(() => {
    CallApi()
    ListCall()
    window.scrollTo(0, 0);
  }, [contextcur.currency])

  console.log("date====>", date)
  console.log("workid.workid  ====>", workid.workid )
  console.log(Load ? ('Detail==>',Detail) : 'Api Load...');

  return (
    <>


      {Load ?
        <div>


          <Helmet>
            <title>{Detail[0].Batch[0].CourseTitel + " in " + Detail[0].Batch[0].date}|{Detail[0].Batch[0].workshop_id}</title>
            <meta name="description" content={"Search here list of " + Detail[0].Batch[0].CourseTitel + " started for/in " + Detail[0].Batch[0].date + " with online " + Detail[0].Batch[0].batch_category + " training mode with Careerera expert training programs."} />
            <meta name="keywords" content={"" + Detail[0].Batch[0].CourseTitel + " " + Detail[0].Batch[0].date + ", " + Detail[0].Batch[0].CourseTitel + " in " + Detail[0].Batch[0].date + "," + Detail[0].Batch[0].CourseTitel + " for " + Detail[0].Batch[0].date + ", " + Detail[0].Batch[0].CourseTitel + " live for " + Detail[0].Batch[0].date + ", " + Detail[0].Batch[0].CourseTitel + " " + Detail[0].Batch[0].batch_category + " Classroom Training " + Detail[0].Batch[0].BatchDate + ""} />
            <link rel="canonical" href={"https://www.careerera.com/" + date.data + "/" + "liveoline" + "/" + data.date + "/" + date.workid} />
            {Detail[0].batchDetails[0].Date.split('-')[2] < Year ? <meta name="robots" content="noindex,nofollow" /> : <div>{mo + 1 > (monthNames.indexOf(Detail[0].batchDetails[0].Date.split('-')[1]) + 1) ? <p className="text-3xl font-bold text-red-600 shadow-2xl ml-1 shadow-black"> <meta name="robots" content="noindex,nofollow" /></p> : <p></p>}</div>}

          </Helmet>


          <Hero title="Batch Details" detail="" batch={<><Link to="/" className="no-underline badge bg-info">Home</Link><span className="mx-2"> / </span> <Link to="/all-batches" className="no-underline badge bg-info">All Batches</Link> <span className="mx-2"> / </span> Batch Details</>} />


          <div className="container py-16">
            <div className="full-w">

              <div className='flex-grow-1 pb-2'>
                <p>{Detail[0].batchDetails[0].Date.split('-')[2] < Year ? <div><p className="text-3xl font-bold text-red-600 shadow-2xl ml-1 shadow-black"> Lo sentimos, este lote ha caducado</p></div> : <div>{mo + 1 > (monthNames.indexOf(Detail[0].batchDetails[0].Date.split('-')[1]) + 1) ? <p className="text-3xl font-bold text-red-600 shadow-2xl ml-1 shadow-black"> Lo sentimos, este lote ha caducado</p> : <p></p>}</div>} </p>
                <div className="d-flex flex-column flex-sm-row">

                  <div className="">

                    <div className="bg-red-600 p-3 text-center text-xs text-white date_freec courbtfullw">

                      <span className="text-4xl font-bold">{Detail[0].batchDetails[0].Date.split('-')[0]}</span>
                      <br /> {Detail[0].batchDetails[0].Date.split('-')[1]}
                    </div>
                  </div>

                  <div className="flex-grow-1 pl-sm-4 courbt d-flex flex-column  mt-3 mt-sm-0">
                    <h2 className="text-xl sm:text-2xl font-bold">
                      <span dangerouslySetInnerHTML={{ __html: Detail[0].Batch[0].CourseTitel }}></span>  <span dangerouslySetInnerHTML={{ __html: props.title }}></span></h2>

                    {contextcur.currency === 'Asia/Kolkata' ?
                      <p className="font-semibold mt-2 mb-3">
                        {' '}
                        <span className="line-through text-gray-500 font-semibold mr-1">
                          ₹{Detail[0].Batch[0].INR_Old_price}
                        </span>{' '}
                        ₹{Detail[0].Batch[0].INR_New_price}
                      </p>
                      :
                      <p className="font-semibold mt-2 mb-3">
                        {' '}
                        <span className="line-through text-gray-500 font-semibold mr-1">
                          ${Detail[0].Batch[0].Old_price}
                        </span>{' '}
                        ${Detail[0].Batch[0].New_price}
                      </p>
                    }


                    <div className="text-gray-500 font-medium mb-3">
                      <span className="">
                        <i className="orange-lgclr text-gray-400 bi bi-bank2 mr-1" />
                        Careerera{' '} ({Detail[0].Batch[0].workshop_id})
                      </span>

                      <i className="text-xs bi bi-chevron-compact-right divblog-sep mx-2" />
                      <span className="">
                        <i className="orange-lgclr bi bi-clock mr-1" /> {Detail[0].Batch[0].batch_duration}
                      </span>

                      <div className="mt-2 d-lg-none" />
                      <i className="text-xs bi bi-chevron-compact-right divblog-sep mx-2  d-none d-lg-inline-block" />
                      <span className="">
                        <i className="orange-lgclr bi bi-clock mr-1" /> {Detail[0].Batch[0].Totalhour} Horas
                      </span>

                      <i className="text-xs bi bi-chevron-compact-right divblog-sep mx-2" />
                      <span className="">
                        <i className="orange-lgclr bi bi-camera-video mr-1" />
                        {Detail[0].Batch[0].batch_category}
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <hr></hr>
            <div className="full-w blog-detials-single">
              <div className="content normal mt-5">
                {props.data ? "" : <h3 className="text-xl font-semibold">Agenda de la Capacitación:</h3>}
                {props.data ? "" : <p className="text-gray-500 text-base mb-0 leading-relaxed" dangerouslySetInnerHTML={{ __html: Detail[0].Batch[0].TrainingAagenda }} />}

                {props.data ? "" : <h3 className="text-xl mt-4 pt-2 font-semibold">Resultado de la formación:</h3>}
                {props.data ? "" : <p className="text-gray-500 text-base mb-0 leading-relaxed" dangerouslySetInnerHTML={{ __html: Detail[0].Batch[0].TrainingOutcome }} />}
       

                <p className="text-lg mb-3 mt-12"><i className="bi bi-calendar4-event mr-1  sitblu-clrsite text-xl"></i> <span className="font-semibold sitblu-clrsite text-xl mr-2">Fecha de orientación:-</span>
                <span className="d-block mb-1"></span>
                 {Detail[0].batchDetails[0].Date} ({contextcur.currency})</p>
                 <hr className="w-25"></hr>
                 <p className="text-lg mb-1"><i className="bi bi-clock-history mr-1  sitblu-clrsite text-xl"></i> <span className="font-semibold sitblu-clrsite text-xl mr-2">Hora de clase:-</span>
                <span className="d-block mb-1"></span>
                 {Detail[0].batchDetails[0].Time.slice(0, 17)}({contextcur.currency}) </p>
                <p className="text-red-500 font-semibold text-sm sm:text-base mt-3">Nota: la fecha y la hora de la clase pueden cambiar debido a circunstancias inevitables</p>
              </div>

              {contextcur.currency === 'Asia/Kolkata' ? <a href={"https://my.careerera.com/signup.php?batchid=" + workid.workid + "&currency=Rs"} target="_blank" className='mt-2 no-underline btn-site gray md:h-12 d-inline-flex justify-content-center align-items-center'>
                <span> Enlístate ahora</span>
              </a> : <a href={"https://my.careerera.com/signup.php?batchid=" + workid.workid} target="_blank" className='mt-2 no-underline btn-site gray md:h-12 d-inline-flex justify-content-center align-items-center'>
                <span> Enlístate ahora</span>
              </a>}

            </div>
          </div>


          {Loadlist ? <div>
            {/* list of cities_url */}
            <div className='our_faq_sec custom_locationall scroll-spbx'>
              <div className='container py-16 '>
                <div className="pt-1">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className='mr-3 mr-1 d-inline leading-normal'>
                          <span className="normal-case" dangerouslySetInnerHTML={{ __html: Detail[0].Batch[0].CourseTitel }}></span>, este curso y el lote también están disponibles en otras ubicaciones
                        </div>
                        <div className="btn-site invert ml-3"><span>Vista</span></div></Accordion.Header>
                      <Accordion.Body>
                        <ul className='list-disc text-base row'>
                          {List.map((item, i) => {
                            return (
                              <li className='col-xxl-3 col-lg-6 col-12'><Link to={"/" + data.data + "/" + item.url + "/liveonline/" + date.date + "/" + workid.workid}>{item.name}</Link></li>
                            )
                          })}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </div>
              </div>
            </div>

          </div> : "loading"}


        </div> : <img src={fun} className="w-screen" alt="careerera-loader-image" />}
    </>
  )
}
export default BatchDetail;