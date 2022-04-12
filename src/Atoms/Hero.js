import React from 'react'
import pic1 from '../Images/Datascience4.png'
const Hero = (props) => {
   
    return (
        <div className="full-w banner-pagetitle py-16">
            <div className="container">
                <div className="row text-gray-700 align-items-center text-center">
                    <div className="col-12">
                        <h1 className={"text-3xl sm:text-4xl font-bold text-white linktitle-batchtitle tracking-wide text-uppercase " + (props.detail ? '' : ' mb-0 mb-sm-2')}>
                            {props.title}{' '}
                            {props.detail ? <span className="text-blue-500">{props.detail}</span> : ''}
                        </h1>
                        <p className="font-semibold text-white text-sm sm:text-base mb-0 linktitle-batch">
                            {props.batch ? <span className='text-yellow-400 align-middle d-inline-block mt-3'>{props.batch} </span>  : ''}
                            {props.detail ? <span className="text-yellow-400 align-middle d-inline-block mt-3">{}</span> : ''}
                        </p>
                    </div>
                    {/* <div className="col-md-6 col-12">
                        <img src={props.img} className="w-full " />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default Hero
