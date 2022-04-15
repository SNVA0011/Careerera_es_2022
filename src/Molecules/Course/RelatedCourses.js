import React, { useContext } from "react";
import { Context } from "../../Api";
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import { CurrencyContxt } from "../../Atoms/Contextcurrency";
import ScrollAnimation from 'react-animate-on-scroll';



const RelatedCourses=(props)=>{
    const [contextcur, setContextCur] = useContext(CurrencyContxt);

    return(
        <div>
<div className="full-w start-yourcareer relatedcr">

<nav className='container mb-2'>
    <ol className="breadcrumb wizard">
        <li className="breadcrumb-item font-semibold"><Link to="/" className='no-underline'>Casa</Link></li>
        <li className="breadcrumb-item font-semibold"><a href="#all-categories" className='no-underline'>Trayectoria profesional</a></li>
        <li className="breadcrumb-item font-semibold active" aria-current="page">
            <a className='no-underline'>Ruta de aprendizaje</a>
        </li>
    </ol>
</nav>

<div className="container py-16">

    <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">RUTA DE APRENDIZAJE</h1>
    <div className="border-t-2 border-gray-500 w-10 my-3"></div>

    <div className="row">
        <div className="col-12">
            <div className="row pt-4">
                {
                    props.data[0] ?
                        props.data[0].courseList.map((dates, ei) => (
                            <ScrollAnimation animateIn='fadeInUpscrl' animateOut='fadeInUpscrlout' delay={6*ei} animateOnce={true}  className="col-xl-6 col-12 mb-4">

                                <div className="cards bg-white">
                                    <div className="p-4 d-flex flex-column">
                                        <div className="flex-grow-1">
                                            <span className="badge bg-secondary mb-2">
                                            Curso {ei + 1}
                                            </span>
                                            <h5 className="text-lg md:text-xl font-semibold text-gray-600 mb-4 text-black">
                                                {dates.CourseTitel}
                                            </h5>

                                            <Accordion className="mb-2">

                                                {dates.CourseBatchList ?
                                                    dates.CourseBatchList.Elearning.length > 0 || dates.CourseBatchList.LVC.length ?
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Próximos lotes</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="free-batches full-w">
                                                                    <div className="container p-0">

                                                                        {dates.CourseBatchList.Elearning ?
                                                                            dates.CourseBatchList.Elearning.length > 0 ?
                                                                                <div className="full-w">
                                                                                    <h3 className="text-lg md:text-xl font-bold mb-2">Aprendizaje electrónico</h3>
                                                                                    <div className="row">
                                                                                        {
                                                                                            dates.CourseBatchList.Elearning.map((item, ind) => (

                                                                                                <div className='col-12 mb-4' key={ind}>
                                                                                                    <div className="d-flex border-2 shadow px-3 py-3 h-100 flex-column flex-sm-row">
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

                                                                                                                {contextcur.currency === 'Asia/Kolkata' ?
                                                                                                                    <p className="font-semibold mb-1">
                                                                                                                         <i class="bi bi-cash text-gray-500 mr-2"></i>
                                                                                                                        {' '}
                                                                                                                        <span className="line-through text-gray-500 font-semibold mr-1">
                                                                                                                            ₹{item.INR_Old_price}
                                                                                                                        </span>{' '}
                                                                                                                        ₹{item.INR_New_price}
                                                                                                                    </p>
                                                                                                                    :
                                                                                                                    <p className="font-semibold mb-1">
                                                                                                                        <i class="bi bi-cash text-gray-500 mr-2"></i>
                                                                                                                        {' '}
                                                                                                                        <span className="line-through text-gray-500 font-semibold mr-1">
                                                                                                                            ${item.Old_price}
                                                                                                                        </span>{' '}
                                                                                                                        ${item.New_price}
                                                                                                                    </p>
                                                                                                                }

                                                                                                                <p className="font-semibold mb-1">
                                                                                                                         <i class="bi bi-building text-gray-500 mr-2"></i>
                                                                                                                    Careerera ({item.workshop_id})
                                                                                                                </p>

                                                                                                                <p className="font-semibold mb-1">
                                                                                                                         <i class="bi bi-clock-history text-gray-500 mr-2"></i>
                                                                                                                    {item.batch_duration}
                                                                                                                </p>
                                                                                                                <p className="font-semibold">
                                                                                                                       <i class="bi bi-camera-video-fill text-gray-500 mr-2"></i>
                                                                                                                    {item.batch_category}
                                                                                                                </p>
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
                                                                                                </div>


                                                                                            ))
                                                                                        }

                                                                                    </div>

                                                                                    {dates.CourseBatchList.Elearning.length > 0 && dates.CourseBatchList.LVC.length > 0 ?
                                                                                        <hr className="mt-0 mb-5"></hr>
                                                                                        : ''}

                                                                                </div>
                                                                                : '' : ''}
                                                                    </div>

                                                                    <div className="all-allfreecour full-w">
                                                                        <div className="container p-0">

                                                                            {dates.CourseBatchList.LVC ?
                                                                                dates.CourseBatchList.LVC.length > 0 ?
                                                                                    <div className="full-w">
                                                                                        <h3 className="text-lg md:text-xl font-bold mb-2">Vive en línea</h3>
                                                                                        <div className="row">
                                                                                            {
                                                                                                dates.CourseBatchList.LVC.map((dats, index) => (

                                                                                                    <div className='col-12 mb-4' key={index}>
                                                                                                        <div className="d-flex border-2 shadow px-3 py-3 h-100 flex-column flex-sm-row">
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
                                                                                                                    {contextcur.currency === 'Asia/Kolkata' ?
                                                                                                                        <p className="font-semibold mb-1">
                                                                                                                             <i class="bi bi-cash text-gray-500 mr-2"></i>
                                                                                                                            {' '}
                                                                                                                            <span className="line-through text-gray-500 font-semibold mr-1">
                                                                                                                                ₹{dats.INR_Old_price}
                                                                                                                            </span>{' '}
                                                                                                                            ₹{dats.INR_New_price}
                                                                                                                        </p>
                                                                                                                        :
                                                                                                                        <p className="font-semibold mb-1">
                                                                                                                            <i class="bi bi-cash text-gray-500 mr-2"></i>
                                                                                                                            {' '}
                                                                                                                            <span className="line-through text-gray-500 font-semibold mr-1">
                                                                                                                                ${dats.Old_price}
                                                                                                                            </span>{' '}
                                                                                                                            ${dats.New_price}
                                                                                                                        </p>
                                                                                                                    }


                                                                                                                    <p className="font-semibold mb-1">
                                                                                                                             <i class="bi bi-building text-gray-500 mr-2"></i>
                                                                                                                        Careerera ({dats.workshop_id})
                                                                                                                    </p>
                                                                                                                    <p className="font-semibold mb-1">
                                                                                                                             <i class="bi bi-clock-history text-gray-500 mr-2"></i>
                                                                                                                        {dats.batch_duration}
                                                                                                                    </p>
                                                                                                                    <p className="font-semibold">
                                                                                                                           <i class="bi bi-camera-video-fill text-gray-500 mr-2"></i>
                                                                                                                        {dats.batch_category}
                                                                                                                    </p>
                                                                                                                </div>

                                                                                                                <p className="mb-0">
                                                                                                                    <Link
                                                                                                                        to={'/' + dats.BatchURL}
                                                                                                                        className="no-underline btn-site invert mr-3">
                                                                                                                        <span>Read More</span>
                                                                                                                    </Link>
                                                                                                                    <a href={'https://my.careerera.com/signup.php?batchid=' + dats.workshop_id}
                                                                                                                       target="_blank"
                                                                                                                       className="no-underline btn-site gray">
                                                                                                                        <span>ENLÍSTATE AHORA</span>
                                                                                                                    </a>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                ))
                                                                                            }

                                                                                        </div>
                                                                                    </div>
                                                                                    : '' : ''}
                                                                        </div>


                                                                    </div>
                                                                </div>

                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        : '' : ''}

                                                {
                                                    dates.Curriculum ?
                                                        dates.Curriculum.length > 0 ?
                                                            <Accordion.Item className="border-top mt-2" eventKey="1">
                                                                <Accordion.Header>Plan de estudios</Accordion.Header>
                                                                <Accordion.Body className="p-3 py-2">


                                                                    <div className="table-responsive">
                                                                        <Table hover className="mb-3">
                                                                            <thead>
                                                                                <tr>
                                                                                <th>Sl. No.</th>
                                                                                <th>Capítulo</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {dates.Curriculum.map((item, ind) => (
                                                                                    <tr>
                                                                                        <td className="font-semibold font-sm text-nowrap" dangerouslySetInnerHTML={{ __html: item.Unit_num }}></td>
                                                                                        <td className="font-semibold font-sm" dangerouslySetInnerHTML={{ __html: item.Unit_Name }}></td>
                                                                                    </tr>
                                                                                ))}
                                                                            </tbody>
                                                                        </Table>
                                                                    </div>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                            : '' : ''}


                                            </Accordion>


                                        </div>

                                        <div className="text-right mt-3">
                                            <Link to={'/' + dates.courseFUllURL} className="no-underline btn-site">
                                                <span>Leer más</span>
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                            </ScrollAnimation>
                        ))
                        : ''
                }

            </div>

        </div>
    </div>


</div>
</div>
        </div>
    )
}

export default RelatedCourses