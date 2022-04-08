import React from "react";
import i1 from "../Images/banner.svg";
import i2 from "../Images/onlin.svg";
import i3 from "../Images/edu.svg";


const SideIcon = () => {
    return (
        <>
            <div className='full-w mt-3 elearn-web'>
                <div className="row m-0 align-items-center h-auto sideicon-web">
                    {/* <div className="col-xxl-4 col-md-4 col-6">
                        <div className="boxrounded d-flex flex-column justify-content-center   text-white text-center z-50 first">
                           <img src={i1}/>
                            <p className="text-xs text-center font-semibold mb-0">Aprendizaje electrónico</p>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-md-4 col-6">
                        <div className="boxrounded d-flex flex-column justify-content-center   text-white text-center z-50 second">
                        <img src={i3}/>
                            <p className="text-xs text-center font-semibold mb-0">WEBINAR</p>
                        </div>
                    </div> */}


                    <div className="col-xxl-4 col-md-4 col-6">
                        <div className="boxrounded d-flex flex-column justify-content-center  text-white z-50 text-center third">
                        <img src={i1}/>
                            {/* <p className="text-xs text-center font-semibold mb-0">RESEARCH</p> */}
                        </div>
                    </div>

                </div>


                {/* <div className="row m-0 align-items-center h-auto sideicon-web">
                <div className="col-xxl-4 col-md-4 col-6">
                        <div className="boxrounded d-flex flex-column justify-content-center bg-purple-400 text-white z-50  text-center fourth">
                        <img src={i3}/>
                            <p className="text-xs text-center font-semibold mb-0">ONLINE UNIVERSITY</p>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-md-4 col-6">
                        <div className="boxrounded d-flex flex-column justify-content-center bg-yellow-400 text-white z-50 text-center fifth">
                        <img src={i3}/>
                            <p className="text-xs text-center font-semibold mb-0">VIDEO LESSONS</p>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-md-4 col-6">
                        <div className="boxrounded d-flex flex-column justify-content-center bg-gray-400 text-white z-50 text-center sixth">
                        <img src={i2}/>
                            <p className="text-xs text-center font-semibold mb-0">EDUCATION APPS</p>
                        </div>
                    </div>
                </div> */}
                

            </div>

        </>
    )
}
export default SideIcon;