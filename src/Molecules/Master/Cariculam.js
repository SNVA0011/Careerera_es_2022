import React, { useContext } from "react";
import { Context } from "../../Api";
import Accordion from 'react-bootstrap/Accordion';
import "../../style.css";

const Cariculam = (props) => {

  const final = props.data;

  return (
    <>
      {final ?
      final.length > 0 ?
        <div className="curriculum-assimilate certification-courseslight full-w scroll-spbx" id="carriculum">
          <div className="container py-16">
            <div className="sec_title">
              <h2 className="text-2xl md:text-3xl font-bold">
              Plan de estudios del <span className="orange-clrsite">Programa</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg fw-medium">
              Mira qué temas tendrás que asimilar.


              </p>
              <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
            </div>
 

            <div className="row pt-2">
              {final.map((items, i) => (
                <div className="col-xxl-6 col-12">
                  <div className="list-group mb-2 mb-xxl-3 shadow-sm">
                    <div className="d-flex list-group-item py-3 flex-column flex-md-row">
                      <div className="text-nowrap pr-3 text-gray-500 chapterleft-bx">
                        <i className="bi bi-file-earmark-text-fill mr-2 text-blue-400"></i>
                        {items.Unit_num}
                      </div>
                      <div className="flex-grow-1 font-semibold mt-2 mt-md-0">
                        {items.Unit_Name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>


          </div>
        </div>
        : '': ''}
    </>
  )
}
export default Cariculam;

