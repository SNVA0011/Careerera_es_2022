import React, { useContext } from "react";
import { Context } from "../../Api";
import batch from "../../Images/batch_profile_2.png";
import education from "../../Images/education_bg_2.png";

const Profile = (props) => {
    return (
        <div className="certification-courseslight full-w" id="profile">
            <div className="container py-16">
                <div className="row align-item-center">
                    <div className="col-lg-6 col-12 mb-5 mb-lg-4">
                        <div className="sec_title">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                {props.title}
                                {props.profcurso ?
                                    '' :
                                    <span className="orange-clrsite"> Perfil de lote</span>
                                }
                            </h2>
                            <hr className="w-20 hr mb-5 bg-blue-400 sepfoll-hr" />
                        </div>


                        {props.CustomAll ?
                            <img src={props.CustomAll1} alt={'batch'} className='' />
                            :
                            <img src={batch} alt={'batch'} className='' />
                        }
                    </div>
                    <div className="col-lg-6 col-12 mb-4">
                        {props.CustomAll ?
                            <p className='font-semibold text-gray-700 text-lg text-center mb-4'>{props.CustomAll2}</p>
                            :
                            <p className='font-semibold text-gray-700 text-lg text-center mb-4'>Nuestros estudiantes incluyen nuevos y experimentados profesionales de todas las industrias, funciones y antecedentes.</p>
                        }
                        {props.CustomAll ?
                            <img src={props.CustomAll3} alt={'education'} className='mx-auto d-block' />
                            :
                            <img src={education} alt={'education'} className='mx-auto d-block' />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;

