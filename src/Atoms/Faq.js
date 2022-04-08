import React, { useContext } from "react";
import { Context } from "../Api";
import certi from "../Images/certi.jpg";
import Accordion from 'react-bootstrap/Accordion';
import "../style.css";
const Faq = (props) => {

  const final = props.data;



  return (
    <div className="scroll-spbx our_faq_sec bg-blue-50 scroll-spbx" id="FAQ">

      <div className="container py-16">

        <div className="text-left">

          <div className="sec_title">
            <h2 className="text-2xl md:text-3xl font-bold">
              Preguntas más frecuentes
            </h2>

            {props.faqcurso ?
              (
                <p className="text-gray-800 text-base md:text-lg fw-medium" dangerouslySetInnerHTML={{ __html: props.subfaqcurso }}></p>
              )
              :
              (
                <p className="text-gray-800 text-base md:text-lg fw-medium">
                  Encuentra respuestas a todas tus consultas y dudas aquí.
                </p>
              )
            }

            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
          </div>


          <div className="row pt-3">
            <div className="col-lg-12 col-12">

              <Accordion defaultActiveKey="1">
                {props.ques1 || props.ans1 ?
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="">{props.ques1} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans1 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques2 || props.ans2 ?
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="">{props.ques2} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans2 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques3 || props.ans3 ?
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="">{props.ques3} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans3 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques4 || props.ans4 ?
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className="">{props.ques4} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans4 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques5 || props.ans5 ?
                  <Accordion.Item eventKey="5">
                    <Accordion.Header className="">{props.ques5} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans5 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques6 || props.ans6 ?
                  <Accordion.Item eventKey="6">
                    <Accordion.Header className="">{props.ques6} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans6 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques7 || props.ans7 ?
                  <Accordion.Item eventKey="7">
                    <Accordion.Header className="">{props.ques7} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans7 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques8 || props.ans8 ?
                  <Accordion.Item eventKey="8">
                    <Accordion.Header className="">{props.ques8} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans8 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques9 || props.ans9 ?
                  <Accordion.Item eventKey="9">
                    <Accordion.Header className="">{props.ques9} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans9 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques10 || props.ans10 ?
                  <Accordion.Item eventKey="10">
                    <Accordion.Header className="">{props.ques10} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans10 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques12 || props.ans12 ?
                  <Accordion.Item eventKey="12">
                    <Accordion.Header className="">{props.ques12} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans12 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques13 || props.ans13 ?
                  <Accordion.Item eventKey="13">
                    <Accordion.Header className="">{props.ques13} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans13 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques14 || props.ans14 ?
                  <Accordion.Item eventKey="14">
                    <Accordion.Header className="">{props.ques14} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans14 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques15 || props.ans15 ?
                  <Accordion.Item eventKey="15">
                    <Accordion.Header className="">{props.ques15} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans15 }}>
                    </Accordion.Body>
                  </Accordion.Item>
                  : ''}

              </Accordion>


            </div>
            {/* <div className="col-lg-5 col-12">
                  <img src={certi} className="ml-auto"/>
                </div> */}
          </div>
        </div>

      </div>

    </div>
  )
}
export default Faq;

