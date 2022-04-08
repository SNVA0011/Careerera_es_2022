import React, { useContext } from "react";
import { Context } from "../../Api";
import data2 from "../../Images/Datascience1.png";
import "../../style.css"
const Completition = (props) => {

    return (
        <div className='completion-program'>
            <div className="container py-16">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="sec_title">
                            {props.compcurso ?
                                <h2 className="text-2xl md:text-3xl font-bold">{props.compcurso1} <span className="orange-clrsite d-inline-block">{props.compcurso2}</span></h2>
                                :
                                <h2 className="text-2xl md:text-3xl font-bold">Al finalizar este programa,  <span className="orange-clrsite d-inline-block">usted:</span></h2>
                            }

                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                        </div>
                        <ul className='list p-0 mt-10'>
                            {props.title1}
                        </ul>
                    </div>
                    <div className="col-lg-6 col-12">
                        {props.capacidadaiml ?
                            <img src={props.capacidadaiml} alt='data2' />
                            :
                            <img src={data2} alt='data2' />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Completition;

