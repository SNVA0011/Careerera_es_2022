import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../Atoms/Hero";
import { Helmet } from 'react-helmet'
import { CurrencyContxt } from "../Atoms/Contextcurrency";


const Job = () => {


    const [job, setJob] = useState([])
    const [status, loadStatus] = useState([])
    async function getJob() {
        const data = await fetch('http://65.0.26.142:9000/apiurl/', {
            method: 'POST',
            body: JSON.stringify({ "apiurl": "http://jobs.snva.com/api/jobs?api_token=Nxo9A8Koga6hVuTfEWeEBZNbK5OeJYYauuEH6Q9s3Gd9JuMea7XjprMtI4L1" }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, [])
            .then((response) => response.json())
            .then((json) => setJob(json));

        loadStatus(true)
    }



    const monthNames = ["Zero", "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    useEffect(() => {
        getJob()
        window.scrollTo(0, 0);
    }, [])
    // currency inr/usd
    const [contextcur, setContextCur] = useContext(CurrencyContxt)

    return (
        <>

            <Hero
                title="Empleos y vacantes"
                detail=""
                batch={<><Link to="/" className="no-underline badge bg-info">Hogar</Link><span className="mx-2"> / </span>Trabajos</>} />


            <Helmet>
                <title>List of Jobs offered by Careerera</title>
                <meta name="description" content="This webpage content list of all professional courses and programs which are offered by Careerera Company." />
                <meta name="keywords" content="Careerera Courses List, Careerera Programs List" />
                <link rel="canonical" href="https://www.careerera.com/es/jobs" />

            </Helmet>

            {status ?
            <div className="jobs-offered full-w">
                <div className="container py-20">
                    <div className="row">

                        <div className="col-xxl-9 col-lg-8 col-12">
                            {job.map((items, i) => {
                                return (
                                    <div className="d-flex w-100 media flex-column flex-sm-row">

                                        <div className="media-left text-center">
                                            <div className="bg-gray-50 rounded-xl text-sm overflow-hidden shadow-md  font-semibold">
                                                <p className="mb-1 text-gray-500 py-3 sm:py-4 text-3xl">{items.created_at.slice(8, 10)}</p>
                                                <p className="uppercase bg-blue-500 text-white mb-0 py-2">{items.created_at.slice(5, 6) == 0 ? monthNames[items.created_at.slice(6, 7)] : monthNames[items.created_at.slice(5, 7)]}</p>
                                            </div>
                                        </div>

                                        <div className="flex-grow-1 media-body">
                                            <Link to={items.job_url + "/" + items.id} className="no-underline text-gray-700">
                                                <h2 className="text-xl sm:text-2xl font-bold">{items.job_name}</h2>
                                            </Link>
                                            <p className="font-medium mb-3"><i className="bi bi-building"></i> {items.company_name}</p>


                                            <div className="overflow-hidden">
                                                <div className="row">

                                                    <div className="border-r-2 border-gray-300 col-md-4 col-12">
                                                        <p className="text-sm text-gray-500 font-semibold mb-1">locación de trabajo</p>
                                                        <p className="text-base font-bold mb-0">{items.city}, {items.country}</p>
                                                    </div>
                                                    <div className="border-r-2 border-gray-300 col-md-4 col-12">
                                                        <p className="text-sm text-gray-500 font-semibold mb-1">Aperturas</p>
                                                        <p className="text-base font-bold mb-0">{items.openings}</p>
                                                    </div>
                                                    <div className="border-r-2 border-gray-300 col-md-4 col-12">
                                                        <p className="text-sm text-gray-500 font-semibold mb-1">Tipo de trabajo</p>
                                                        <p className="text-base font-bold mb-0">{items.work_type}</p>
                                                    </div>
                                                    <div className="border-r-2 border-gray-300 col-12">
                                                        <p className="text-sm text-gray-500 font-semibold mb-1">Salario</p>
                                                        {items.show_sal == 1 ? <p className="text-base font-bold mb-0">No divulgado</p> :
                                                            <p className="text-base font-bold mb-0">


                                                                {items.currency} {items.min_sal} - {items.currency} {items.max_sal}</p>}
                                                    </div>
                                                </div>
                                            </div>


                                            {/* <p className="mt-2 mb-3 font-medium text-gray-600 leading-loose"><i className="bi bi-file-earmark-text mr-1"></i> Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p> */}

                                            <Link to={items.job_url + "/" + items.id} className="md:h-12 btn-site invert no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">
                                                <span>Leer más</span>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>


                        <div className="col-12 my-4 d-none-lg">
                            <hr></hr>
                        </div>

                        <div className="col-xxl-3 col-lg-4 col-12 blog-detials-single">
                            <div className="sidebar-bx sticky top-32">
                                <h5 className="text-xl p-3 font-bold border-bottom bg-orange-100">
                                    <span>INDUSTRIA</span>
                                </h5>
                                <div className="scroll pt-3">
                                    <a className="px-3 py-1" href="#">
                                        <div className="flex-grow-1 ms-2 w-100">
                                            <p className="mb-1 text-base font-semibold">Software de TI / Servicios de software</p>
                                        </div>
                                    </a>
                                    <a className="px-3 py-1" href="#">
                                        <div className="flex-grow-1 ms-2 w-100">
                                            <p className="mb-1 text-base font-semibold">Bancos y finanzas</p>
                                        </div>
                                    </a>
                                    <a className="px-3 py-1" href="#">
                                        <div className="flex-grow-1 ms-2 w-100">
                                            <p className="mb-1 text-base font-semibold">Servicios bancarios y financieros</p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
            : <img src={fun} className="w-screen" alt="careerera-loader-image" />}
        </>
    )
}

export default Job