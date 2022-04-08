import React, { useContext } from "react";
import { Context } from "../../Api";
import certi from "../../Images/certi.jpg";
import Accordion from 'react-bootstrap/Accordion';
import "../../style.css";
const Faq = (props) => {

  const final = props.data;

  return (
    <>
      {final && final.length > 0 ?
        <div className="scroll-spbx our_faq_sec bg-blue-50 scroll-spbx" id="FAQ">

          <div className="container py-16">

            <div className="text-left">
              <div className="sec_title">
                <h2 className="text-2xl md:text-3xl font-bold">
                Preguntas Más Frecuentes:
                </h2> 
                <p className="text-gray-800 text-base md:text-lg fw-medium">
                Obtenga las respuestas a sus preguntas aquí.
                </p>
                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
              </div>

              <div className="row pt-3 alsobenefitthose">
                <div className="col-lg-12 col-12">
                  {
                    final && final.length > 0 ?
                      <Accordion defaultActiveKey="0">
                        {
                          final.map((values, item) =>
                            <Accordion.Item eventKey={item}>
                              <Accordion.Header className="">
                                <div className="d-flex"> 
                                  <div className="atful-ans">
                                    Q{item + 1} :
                                  </div>

                                  <div className="flex-grow-1 mr-1">
                                    {values.Question}
                                  </div>
                                </div>
                              </Accordion.Header>
                              <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: values.Answer }}></Accordion.Body>
                            </Accordion.Item>
                          )
                        }
                      </Accordion>
                      : ''
                  }

                </div>

              </div>

            </div>


          </div>

        </div>
        : ''
      }
    </>

  )
}
export default Faq;

