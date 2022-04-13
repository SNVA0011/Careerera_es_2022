import React, { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import whysci_icon_1 from '../../src/Images/46.png'
import whysci_icon_2 from '../../src/Images/61.png'
import whysci_icon_3 from '../../src/Images/2.7-MILLION.png'
import whysci_icon_4 from '../../src/Images/33.5.png'
import whysci_icon_5 from '../../src/Images/2020.png'

const Why = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <>
        {/* why-datasciencesuf */}
        <div className='why-datasciencesuf scroll-spbx bg-blue-50' id='why'>
          <div className='container py-16'>
            <div className="sec_title">
              <h2 className='text-2xl md:text-3xl font-bold'>Por qué  <span className='orange-clrsite'>{props.data}?</span></h2>
              <p className='text-gray-500 text-base md:text-lg fw-medium'>{props.data} es la clave para tomar buenas decisiones de negocios.</p>
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
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>650%</h5>
                      <p className='mb-0 text-sm sm:text-base'>{props.data}   ha sido testigo de un aumento masivo del 650%, superando con creces a otros sectores.</p>
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
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>61%</h5>
                      <p className='mb-0 text-sm sm:text-base'>Los trabajos están abiertos para candidatos con 0-5 años de experiencia.</p>
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
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>2.7 MILLION</h5>
                      <p className='mb-0 text-sm sm:text-base'>
                      La estimación global para 2022 exige 2,7 millones de ofertas de trabajo para funciones de análisis y {props.data}.</p>
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
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>39%</h5>
                      <p className='mb-0 text-sm sm:text-base'>el mercado {props.data} mundial se proyecta que avance a una CAGR del 39% para llegar a $ 195 mil millones.</p>
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
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>2021-22</h5>
                      <p className='mb-0 text-sm sm:text-base'>A nivel mundial para convertirse en una de las cinco principales habilidades para puestos de trabajo en 2022.</p>
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
export default Why;
