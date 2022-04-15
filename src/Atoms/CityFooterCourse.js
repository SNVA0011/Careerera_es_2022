import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion'
import { Link } from "react-router-dom";
import { useParams } from 'react-router'

const CityFooterCourse = (props) => {
  const [data, setdata] = useState([])
  const [load, setload] = useState([])



  async function CallApi() {


    const dat = await fetch('http://65.0.26.142:9000/apiurl/', {
      method: 'POST',
      body: JSON.stringify({ "apiurl": "https://my.careerera.com/admin/admins/api/city1.php?service="+props.title.replace(/\s/g, '-')+"&state="+props.id2+"&county="+props.id }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }, [])
      .then((response) => response.json())
      .then((json) => setdata(json.cityList));
    setload(true)
  }


  useEffect(() => {
    CallApi()
    window.scrollTo(0, 0);
  }, [])


  return (
    <>
      {load?<div className='our_faq_sec custom_locationall scroll-spbx'>
        <div className='container py-16'>

          <div className="pt-1">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                <span className="capitalize" dangerouslySetInnerHTML={{__html: props.title}}></span>, este curso y el lote también están disponibles en otras ubicaciones <div className="btn-site invert ml-3"><span>Vista</span></div></Accordion.Header>
                <Accordion.Body>
                  <ul className='list-disc text-base row'>
                    {data.map((items, i) => (
                      <>
                        <li className='col-xxl-3 col-lg-6 col-12'><Link to={items.url}>{items.city}</Link></li>
                      </>
                    ))}

                  </ul>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </div>
        </div>
      </div>:"Loading"}
    </>
  )
}

export default CityFooterCourse;