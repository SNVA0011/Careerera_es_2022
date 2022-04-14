import React, { useEffect } from 'react'
import Hero from '../Atoms/Hero'
import login from '../Images/blogs.png'
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";


const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='full-w login-page'>
            <Helmet>
                <title>Login</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Helmet>


            <Hero title="Login " detail=""
                batch={<> <Link to="/" className="no-underline badge bg-info">Hogar</Link>
                    <span className="mx-2"> / </span>Login </>}
                img={login} />
            {/* <div className="text-center font-bold text-5xl text-blue-500 py-4">
                <span className="text-gray-700"> Login</span> with your account
            </div> */}

            <div className="container py-16">
                <div className="row align-items-center">
                    <div className="text-center col-lg-6 col-12 xl:border-r-2 xl:border-gray-200">
                        <div className='row'>
                            <div className='col-xl-8 col-12 mx-auto'>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-700">Old User</h1>
                                <div className="border-t-2 border-gray-300 w-14 mt-2 mb-2 mx-auto"></div>
                                <div className="pt-4">
                                    <div className="row py-2">
                                        <div className="text-left col-12 mb-1">
                                            <span className="text-gray-700 font-bold text-base">
                                                User Name{' '}
                                            </span>
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                placeholder="Enter Your Name"
                                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                        h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base"
                                            />
                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="text-left col-12 mb-1">
                                            <span className="text-gray-700 font-bold text-base">
                                                Password{' '}
                                            </span>
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="password"
                                                placeholder="Enter Your Password"
                                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                                        h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base"
                                            />
                                        </div>
                                    </div>

                                    <div className="row py-2">
                                        <div className="text-left col-sm-6 col-12">

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12 mt-3 text-left mt-sm-0 text-sm-right">
                                            <span className="text-blue-500 font-semibold">
                                                Lost Your Password ?
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-lg-12 col-12">
                                            <button className="h-12 btn-site w-100 mt-4 invert">
                                                <span>Login</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center col-lg-6 col-12 pb-5 pb-lg-0">
                        <hr className='mb-20 d-block d-lg-none'></hr>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-700">New User</h1>
                        <div className="border-t-2 border-gray-300 w-14 mt-2 mb-2 mx-auto"></div>
                        <br />
                        <div className="mt-2">
                            <p className="font-semibold text-black-500">
                                Login After 1st Jan 2021
                            </p>

                            <button className="h-12 btn-site mt-1">
                                <span>New Panel</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
