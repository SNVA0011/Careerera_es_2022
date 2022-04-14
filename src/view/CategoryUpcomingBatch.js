import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import Hero from "../Atoms/Hero";
import { useParams } from "react-router";
import fun from '../Images/fun4.gif'
import { Link } from 'react-router-dom'
import { CurrencyContxt } from "../Atoms/Contextcurrency";
import ScrollAnimation from 'react-animate-on-scroll';


export default function CategoryUpcomingBatch() {

    const [Catfinal, Catsetfinal] = useState([]);
    const [Catsts, Catloadsts] = useState(false);

    let { idbatch } = useParams();
    let { idbatchmain } = useParams();

    // List of BlogDetails
    async function getCourse() {
        await fetch('http://65.0.26.142:9000/apiurl/', {
            method: 'POST',
            body: JSON.stringify({ "apiurl": 'https://es.careerera.com/API/course/CategoryPage.php?url=' + idbatchmain + '&timeZone=EST' }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => Catsetfinal(json.records));
        Catloadsts(true)
    }

    // currency inr/usd
    const [contextcur, setContextCur] = useContext(CurrencyContxt);


    useEffect(() => {
        getCourse();
        window.scrollTo(0, 0);
    }, []);

    return (

        <div>
            {idbatchmain === "data-science" ?
                <Helmet>
                    <title>Data Science Certification | Post Graduate Certification in Data Science | Careerera</title>
                    <meta name="description" content="Post Graduate Program in Data Science course gives you wide coverage to main ideas and techniques from Python, Data Analysis to Machine Learning, and more. Careerera helps to equip your career PGP in Data Science." />
                    <meta name="keywords" content="post graduate program in data science, post graduate certification in data science, pgp program in data science, post graduate diploma in data science, pgp in data science," />
                </Helmet>
                : ''}


            {idbatchmain === "cyber-security" ?
                <Helmet>
                    <title>Post Graduate Program in Cyber Security | PGP in Cyber Security</title>
                    <meta name="description" content="Find Post Graduate program in Cyber Security at Careerera. Take your caliber for securing and protecting data to the next level with PGP in Cyber Security certification." />
                    <meta name="keywords" content="PGP in Cyber Security,  Post Graduate in Cyber Security,  pg in cybersecurity,  Post Graduate Program in Cyber Security,  PGP in Cyber Security certification,  PGP in Cyber Security Certification Training,  PGP in Cyber Security program,  PGP in Cyber Security" />
                </Helmet>
                : ''}

            {Catsts ?
                <div>
                    {
                        Catfinal[0].courseList.filter(courseList => courseList.courseFUllURL === idbatchmain + '/' + idbatch).map((listcour, i) =>
                            <>
                                <Hero title="UPCOMING BATCHES"
                                    batch={<> <Link to="/" className="no-underline badge bg-info">Hogar</Link>
                                        <span className="mx-2"> / </span> {listcour.CourseTitel} </>} />

                                <div className={"free-batches bg-gray-50 full-w" + (listcour.CourseBatchList.Elearning.length > 0 || listcour.CourseBatchList.LVC.length > 0 ? ' py-16' : '')}>

                                    {listcour.CourseBatchList.Elearning.length == 0 && listcour.CourseBatchList.LVC.length == 0 ?
                                        <section className="page_404 py-16">
                                            <div className="container text-center my-sm-3">
                                                <div className="contant_box_404">
                                                    <i className="bi bi-exclamation-triangle text-danger text-5xl"></i>
                                                    <h3 className="text-xl md:text-2xl font-semibold text-blue-500 my-3">
                                                        No se han encontrado resultados
                                                    </h3>
                                                    <p className='text-base md:text-lg mb-4 font-semibold'>Haga clic en el botón de abajo para volver a la página de inicio.</p>
                                                    <Link to="/" className="btn-site invert w-auto no-underline md:h-12 d-inline-flex align-items-center">
                                                        <span>De vuelta a casa</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        : ''}


                                    <div className={"container" + (listcour.CourseBatchList.Elearning.length > 0 && listcour.CourseBatchList.LVC.length > 0 ? ' pb-12' : '')}>
                                        {listcour.CourseBatchList.Elearning ?
                                            listcour.CourseBatchList.Elearning.length > 0 ?
                                                <div className="full-w">
                                                    <h3 className="font-semibold text-3xl mb-3">Aprendizaje electrónico</h3>
                                                    <div className="row">
                                                        {
                                                            listcour.CourseBatchList.Elearning.map((item, ind) => (

                                                                <ScrollAnimation animateIn='fadeInUpscrl' animateOut='fadeInUpscrlout' delay={6 * ind} animateOnce={true} className='col-lg-6 col-12 mb-4' key={ind}>
                                                                    <div className="d-flex border-2 shadow px-3 py-3 h-100 flex-column flex-sm-row bg-white">
                                                                        <div className="">
                                                                            <div className="bg-red-600 p-3 text-center text-xs text-white date_freec">
                                                                                <span className="text-4xl font-bold">
                                                                                    {item.date.split('-')[0]}
                                                                                </span>
                                                                                <br /> {item.date.split('-')[1]}
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 pl-sm-4 d-flex flex-column  mt-3 mt-sm-0">
                                                                            <div className='flex-grow-1 pb-2'>
                                                                                <h2 className="text-xl sm:text-2xl font-bold" dangerouslySetInnerHTML={{ __html: item.CourseTitel }} />

                                                                                {contextcur.currency === 'Asia/Kolkata' ?
                                                                                    <p className="font-semibold mb-1">
                                                                                        {' '}
                                                                                        <span className="line-through text-gray-500 font-semibold mr-1">
                                                                                            ₹{item.INR_Old_price}
                                                                                        </span>{' '}
                                                                                        ₹{item.INR_New_price}

                                                                                        <span className='mr-2'></span>
                                                                                        <span className='text-gray-500 text-xs'>(INCLUYENDO TODOS LOS IMPUESTOS)</span>
                                                                                    </p>
                                                                                    :
                                                                                    <p className="font-semibold mb-1">
                                                                                        {' '}
                                                                                        <span className="line-through text-gray-500 font-semibold mr-1">
                                                                                            ${item.Old_price}
                                                                                        </span>{' '}
                                                                                        ${item.New_price}
                                                                                    </p>
                                                                                }

                                                                                <p className="font-semibold mb-1">
                                                                                    Careerera ({item.workshop_id})
                                                                                </p>

                                                                                <p className="font-semibold mb-1">
                                                                                    {item.batch_duration}

                                                                                    {item.Totalhour > 0 ?
                                                                                        (' (' + item.Totalhour + ' Hours)')
                                                                                        : ''}
                                                                                </p>
                                                                                <p className="font-semibold mb-1">
                                                                                    {item.batch_category}
                                                                                </p>

                                                                                {contextcur.currency === 'Asia/Kolkata' ?
                                                                                    <p className="font-semibold orange-clrsite">
                                                                                        <i className="bi bi-mortarboard-fill"></i>
                                                                                        <i className="bi bi-chevron-compact-right mx-1"></i> Becas disponibles
                                                                                    </p>
                                                                                    : ''}
                                                                            </div>


                                                                            <div className='text-left'>
                                                                                <a href={'https://my.careerera.com/signup.php?batchid=' + item.workshop_id}
                                                                                    target="_blank"
                                                                                    className="no-underline btn-site gray">
                                                                                    <span>ENLÍSTATE AHORA</span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </ScrollAnimation>


                                                            ))
                                                        }

                                                    </div>

                                                </div>
                                                : '' : ''}
                                    </div>

                                    <div className="all-allfreecour full-w">
                                        <div className="container">

                                            {listcour.CourseBatchList.LVC ?
                                                listcour.CourseBatchList.LVC.length > 0 ?
                                                    <div className="full-w">
                                                        <h3 className="font-semibold text-3xl mb-3">Vive en línea</h3>
                                                        <div className="row">
                                                            {
                                                                listcour.CourseBatchList.LVC.map((dats, index) => (

                                                                    <ScrollAnimation animateIn='fadeInUpscrl' animateOut='fadeInUpscrlout' delay={6 * index} animateOnce={true} className='col-lg-6 col-12 mb-4' key={index}>
                                                                        <div className="d-flex border-2 shadow px-3 py-3 h-100 flex-column flex-sm-row bg-white">
                                                                            <div className="">
                                                                                <div className="bg-red-600 p-3 text-center text-xs text-white date_freec">
                                                                                    <span className="text-4xl font-bold">
                                                                                        {
                                                                                            dats.date.split(
                                                                                                '-'
                                                                                            )[0]
                                                                                        }
                                                                                    </span>
                                                                                    <br />{' '}
                                                                                    {
                                                                                        dats.date.split(
                                                                                            '-'
                                                                                        )[1]
                                                                                    }
                                                                                </div>
                                                                            </div>

                                                                            <div className="flex-grow-1 pl-sm-4 d-flex flex-column  mt-3 mt-sm-0">
                                                                                <div className='flex-grow-1 pb-2'>
                                                                                    <h2 className="text-xl sm:text-2xl font-bold" dangerouslySetInnerHTML={{ __html: dats.CourseTitel }} />

                                                                                    {contextcur.currency === 'Asia/Kolkata' ?
                                                                                        <p className="font-semibold mb-1">
                                                                                            {' '}
                                                                                            <span className="line-through text-gray-500 font-semibold mr-1">
                                                                                                ₹{dats.INR_Old_price}
                                                                                            </span>{' '}
                                                                                            ₹{dats.INR_New_price}
                                                                                            <span className='mr-2'></span>
                                                                                            <span className='text-gray-500 text-xs'>(INCLUYENDO TODOS LOS IMPUESTOS)</span>
                                                                                        </p>
                                                                                        :
                                                                                        <p className="font-semibold mb-1">
                                                                                            {' '}
                                                                                            <span className="line-through text-gray-500 font-semibold mr-1">
                                                                                                ${dats.Old_price}
                                                                                            </span>{' '}
                                                                                            ${dats.New_price}
                                                                                        </p>
                                                                                    }


                                                                                    <p className="font-semibold mb-1">
                                                                                        Careerera ({dats.workshop_id})
                                                                                    </p>

                                                                                    <p className="font-semibold mb-1">
                                                                                        {dats.date}
                                                                                    </p>

                                                                                    <p className="font-semibold mb-1">
                                                                                        {dats.batch_duration}

                                                                                        {dats.Totalhour > 0 ?
                                                                                            (' (' + dats.Totalhour + ' Hours)')
                                                                                            : ''}
                                                                                    </p>
                                                                                    <p className="font-semibold mb-1">
                                                                                        {dats.batch_category}
                                                                                    </p>

                                                                                    {contextcur.currency === 'Asia/Kolkata' ?
                                                                                        <p className="font-semibold orange-clrsite">
                                                                                            <i className="bi bi-mortarboard-fill"></i>
                                                                                            <i className="bi bi-chevron-compact-right mx-1"></i> Becas disponibles
                                                                                        </p>
                                                                                        : ''}
                                                                                </div>

                                                                                <p className="mb-0">
                                                                                    <Link
                                                                                        to={'/' + dats.BatchURL}
                                                                                        className="no-underline btn-site invert mr-3">
                                                                                        <span>Leer más</span>
                                                                                    </Link>
                                                                                    <a href={'https://my.careerera.com/signup.php?batchid=' + dats.workshop_id}
                                                                                        target="_blank"
                                                                                        className="no-underline btn-site gray">
                                                                                        <span>Enlístate ahora</span>
                                                                                    </a>
                                                                                </p>



                                                                            </div>
                                                                        </div>
                                                                    </ScrollAnimation>
                                                                ))
                                                            }

                                                        </div>
                                                    </div>
                                                    : '' : ''}
                                        </div>


                                    </div>
                                </div>

                            </>
                        )
                    }



                </div>
                : <img src={fun} className="w-screen" alt="careerera-loader-image" />}
        </div>

    );
}
