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
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans1 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques2 || props.ans2 ?
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="">{props.ques2} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans2 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques3 || props.ans3 ?
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="">{props.ques3} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans3 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques4 || props.ans4 ?
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className="">{props.ques4} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans4 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques5 || props.ans5 ?
                  <Accordion.Item eventKey="5">
                    <Accordion.Header className="">{props.ques5} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans5 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques6 || props.ans6 ?
                  <Accordion.Item eventKey="6">
                    <Accordion.Header className="">{props.ques6} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans6 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques7 || props.ans7 ?
                  <Accordion.Item eventKey="7">
                    <Accordion.Header className="">{props.ques7} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans7 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques8 || props.ans8 ?
                  <Accordion.Item eventKey="8">
                    <Accordion.Header className="">{props.ques8} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans8 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques9 || props.ans9 ?
                  <Accordion.Item eventKey="9">
                    <Accordion.Header className="">{props.ques9} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans9 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques10 || props.ans10 ?
                  <Accordion.Item eventKey="10">
                    <Accordion.Header className="">{props.ques10} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans10 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques12 || props.ans12 ?
                  <Accordion.Item eventKey="12">
                    <Accordion.Header className="">{props.ques12} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans12 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques13 || props.ans13 ?
                  <Accordion.Item eventKey="13">
                    <Accordion.Header className="">{props.ques13} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans13 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques14 || props.ans14 ?
                  <Accordion.Item eventKey="14">
                    <Accordion.Header className="">{props.ques14} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans14 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques15 || props.ans15 ?
                  <Accordion.Item eventKey="15">
                    <Accordion.Header className="">{props.ques15} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans15 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques16 || props.ans16 ?
                  <Accordion.Item eventKey="16">
                    <Accordion.Header className="">{props.ques16} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans16 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques17 || props.ans17 ?
                  <Accordion.Item eventKey="17">
                    <Accordion.Header className="">{props.ques17} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans17 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques18 || props.ans18 ?
                  <Accordion.Item eventKey="18">
                    <Accordion.Header className="">{props.ques18} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans18 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques19 || props.ans19 ?
                  <Accordion.Item eventKey="19">
                    <Accordion.Header className="">{props.ques19} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans19 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques20 || props.ans20 ?
                  <Accordion.Item eventKey="20">
                    <Accordion.Header className="">{props.ques20} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans20 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques21 || props.ans21 ?
                  <Accordion.Item eventKey="21">
                    <Accordion.Header className="">{props.ques21} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans21 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques22 || props.ans22 ?
                  <Accordion.Item eventKey="22">
                    <Accordion.Header className="">{props.ques22} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans22 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques23 || props.ans23 ?
                  <Accordion.Item eventKey="23">
                    <Accordion.Header className="">{props.ques23} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans23 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques24 || props.ans24 ?
                  <Accordion.Item eventKey="24">
                    <Accordion.Header className="">{props.ques24} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans24 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques25 || props.ans25 ?
                  <Accordion.Item eventKey="25">
                    <Accordion.Header className="">{props.ques25} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans25 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques26 || props.ans26 ?
                  <Accordion.Item eventKey="26">
                    <Accordion.Header className="">{props.ques26} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans26 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques27 || props.ans27 ?
                  <Accordion.Item eventKey="27">
                    <Accordion.Header className="">{props.ques27} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans27 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques28 || props.ans28 ?
                  <Accordion.Item eventKey="28">
                    <Accordion.Header className="">{props.ques28} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans28 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}

                {props.ques29 || props.ans29 ?
                  <Accordion.Item eventKey="29">
                    <Accordion.Header className="">{props.ques29} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans29 }}></Accordion.Body>
                  </Accordion.Item>
                  : ''}


                {props.ques30 || props.ans30 ?
                  <Accordion.Item eventKey="30">
                    <Accordion.Header className="">{props.ques30} </Accordion.Header>
                    <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: props.ans30 }}></Accordion.Body>
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

