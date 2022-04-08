import React from 'react'
import lead_company from "../Images/lead_company.png";
import interview_Preparation from "../Images/interview_Preparation.png";
import career_guidance from "../Images/career_guidance.png";

export default function CareerAssistance(props) {
  return (
    <div className='career-assistanceglobal full-w bg-gray-50 scroll-spbx' id='tieupsguarantee'>
      <div className='container py-16'>
        <div className="sec_title">
          <h2 className="text-2xl md:text-3xl font-bold">
            {props.title} <span className="orange-clrsite">{props.titlesub}</span>
          </h2>
          <p className="text-gray-500 text-base lg:text-lg fw-medium">
            {props.titleheading}
          </p>
          <hr className="w-20 hr mb-0 bg-blue-400 sepfoll-hr" />
        </div>


        {/* application_process_sec */}
        <div className='application_process_sec full-w start-yourcareer pt-6 '>
          <div className="row capstone-skills">
            {/* first */}
            <div className="col-lg-4 col-md-6 col-12 text-center py-4 rounded-lg">
              <div className='d-flex align-items-center'>
                <div className='left'>
                  <div className='tt-iconbox-customimg mb-0'>
                    <div className='rounded-circle d-block bg-yellow-500 h-100 w-100'>
                      <img className="img-round" src={lead_company} alt={'lead_company'} width="45" />
                    </div>
                  </div>
                </div>
                <div className="full-w lg:text-lg text-left pl-4">
                  <p className='mb-0'>{props.box1}</p>
                </div>
              </div>
            </div>

            {/* second */}
            <div className="col-lg-4 col-md-6 col-12 text-center py-4 rounded-lg">
              <div className='d-flex align-items-center'>
                <div className='left'>
                  <div className='tt-iconbox-customimg mb-0'>
                    <div className='rounded-circle d-block bg-green-500 h-100 w-100'>
                      <img className="img-round" src={interview_Preparation} alt={'interview_Preparation'} width="45" />
                    </div>
                  </div>
                </div>
                <div className="full-w lg:text-lg text-left pl-4">
                  <p className='mb-0'>{props.box2}</p>
                </div>
              </div>
            </div>
            {/* third */}
            <div className="col-lg-4 col-md-6 col-12 text-center py-4 rounded-lg">
              <div className='d-flex align-items-center'>
                <div className='left'>
                  <div className='tt-iconbox-customimg mb-0'>
                    <div className='rounded-circle d-block bg-blue-500 h-100 w-100'>
                      <img className="img-round" src={career_guidance} alt={'career_guidance'} width="45" />
                    </div>
                  </div>
                </div>
                <div className="full-w lg:text-lg text-left pl-4">
                  <p className='mb-0'>{props.box3}</p>
                </div>
              </div>
            </div>

          </div>
        </div>



      </div>
    </div>
  )
}


 