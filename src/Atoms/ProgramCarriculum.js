import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const ProgramCarriculum = (props) => {
  return (
    <>
      <div className="faq-sectionquery">

        <div className="text-left">

          <Accordion defaultActiveKey="value">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="mr-1">{props.topic1}</div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="text-gray-800">
                  {props.detail1 ? <p className="mb-0">{props.detail1}</p> : ''}
                  {props.detail2 ? <p className="mb-0">{props.detail2}</p> : ''}
                  {props.detail3 ? <p className="mb-0">{props.detail3}</p> : ''}
                  {props.detail4 ? <p className="mb-0">{props.detail4}</p> : ''}
                  {props.detail5 ? <p className="mb-0">{props.detail5}</p> : ''}
                  {props.detail6 ? <p className="mb-0">{props.detail6}</p> : ''}
                  {props.detail7 ? <p className="mb-0">{props.detail7}</p> : ''}
                  {props.detail8 ? <p className="mb-0">{props.detail8}</p> : ''}
                  {props.detail9 ? <p className="mb-0">{props.detail9}</p> : ''}
                  {props.detail10 ? <p className="mb-0">{props.detail10}</p> : ''}
                  {props.detail11 ? <p className="mb-0">{props.detail11}</p> : ''}
                  {props.detail12 ? <p className="mb-0">{props.detail12}</p> : ''}
                  {props.detail13 ? <p className="mb-0">{props.detail13}</p> : ''}
                  {props.detail14 ? <p className="mb-0">{props.detail14}</p> : ''}
                  {props.detail15 ? <p className="mb-0">{props.detail15}</p> : ''}
                  {props.detail16 ? <p className="mb-0">{props.detail16}</p> : ''}
                  {props.detail17 ? <p className="mb-0">{props.detail17}</p> : ''}
                  {props.detail18 ? <p className="mb-0">{props.detail18}</p> : ''}
                  {props.detail19 ? <p className="mb-0">{props.detail19}</p> : ''}
                  {props.detail20 ? <p className="mb-0">{props.detail20}</p> : ''}
                  {props.detail21 ? <p className="mb-0">{props.detail21}</p> : ''}
                  {props.detail22 ? <p className="mb-0">{props.detail22}</p> : ''}
                  {props.detail23 ? <p className="mb-0">{props.detail23}</p> : ''}
                  {props.detail24 ? <p className="mb-0">{props.detail24}</p> : ''}
                  {props.detail25 ? <p className="mb-0">{props.detail25}</p> : ''}
                  {props.detail26 ? <p className="mb-0">{props.detail26}</p> : ''}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>



      </div>

    </>
  )
}

export default ProgramCarriculum;