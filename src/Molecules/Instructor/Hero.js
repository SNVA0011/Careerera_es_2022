import React from 'react'
import instructor from '../../Images/instructor_banner.png'

const Hero = () => {
    return (
        <div className='react-worldcour  certification-courseslight full-w'>
            <div className="container py-16">
                <div className="row text-left text-black align-items-center allreact-row">
                    <div className="col-md-6 col-12 pl-6 mb-6 mb-md-0">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-0">
                            Llegue a estudiantes de todo el mundo con sus cursos
                        </h1>
                        <span className="mt-3 block text-base md:text-lg lg:text-xl  text-gray-700">
                            Conviértete en parte de la creciente comunidad de Careera Únete a la era tecnológica de la educación con Careera
                        </span>
                        {/* <a className="btn-site mt-4 invert no-underline" href="#instructor_contact">
                            <span>Get Started</span>
                        </a> */}
                    </div>
                    <div className="col-md-6 col-12 text-left text-black mt-8">
                        <img src={instructor} alt='instructor_banner_img' className="w-11/12 float-right" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
