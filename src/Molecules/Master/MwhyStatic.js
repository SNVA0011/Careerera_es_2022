import React, { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import whysci_icon_1 from '../../Images/46.png'
import whysci_icon_2 from '../../Images/61.png'
import whysci_icon_3 from '../../Images/2.7-MILLION.png'
import whysci_icon_4 from '../../Images/33.5.png'
import whysci_icon_5 from '../../Images/2020.png'

const MwhyStatic = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <>
        {/* why-datasciencesuf */}
        <div className='why-datasciencesuf scroll-spbx bg-blue-50' id='why'>
          <div className='container py-16'>
            <div className="sec_title">
              <h2 className='text-2xl md:text-3xl font-bold'>¿Por qué {props.titlem} <span className='orange-clrsite'>{props.titlem2}</span></h2>
              <p className='text-gray-500 text-base md:text-lg fw-medium'>{props.titlem3}</p>
              <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
            </div>

            <div className="time_mid_sec mt-10">
              <ul className='row p-0'>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={whysci_icon_1} />
                    </div>
                    <div className="time_content">
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>{props.contenttitle1}</h5>
                      <p className='mb-0 text-sm sm:text-base'>{props.contentpara1}</p>
                    </div>
                  </div>
                </li>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={whysci_icon_2} />
                    </div>
                    <div className="time_content">
                    <h5 className='text-2xl md:text-3xl font-bold my-3'>{props.contenttitle2}</h5>
                      <p className='mb-0 text-sm sm:text-base'>{props.contentpara2}</p>
                    </div>
                  </div>
                </li>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={whysci_icon_3} />
                    </div>
                    <div className="time_content">
                    <h5 className='text-2xl md:text-3xl font-bold my-3'>{props.contenttitle3}</h5>
                      <p className='mb-0 text-sm sm:text-base'>{props.contentpara3}</p>
                    </div>
                  </div>
                </li>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={whysci_icon_4} />
                    </div>
                    <div className="time_content">
                    <h5 className='text-2xl md:text-3xl font-bold my-3'>{props.contenttitle4}</h5>
                      <p className='mb-0 text-sm sm:text-base'>{props.contentpara4}</p>
                    </div>
                  </div>
                </li>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={whysci_icon_5} />
                    </div>
                    <div className="time_content">
                    <h5 className='text-2xl md:text-3xl font-bold my-3'>{props.contenttitle5}</h5>
                      <p className='mb-0 text-sm sm:text-base'>{props.contentpara5}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>


          </div>
        </div>

        </>
    )
}
export default MwhyStatic;
