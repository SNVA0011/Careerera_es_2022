import React, { useContext, useState } from 'react'
import { Context, Provider } from '../../Api'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom'
import fun from '../../Images/fun4.gif'
import { CurrencyContxt } from "../../Atoms/Contextcurrency";
import ScrollAnimation from 'react-animate-on-scroll';


const FreeCourse = () => {
    // E-Learning Api
    const { value7, value8 } = useContext(Context)
    const [freeCour, setFreeCour] = value7
    const [freeCourLoad, setFreeCourLoad] = value8

    // Live Online Api
    const { value9, value10 } = useContext(Context)
    const [allfreeCour, setallFreeCour] = value9
    const [allfreeCourLoad, setallFreeCourLoad] = value10

    // groupdata (Live Online Api)
    const [setallbatch, allbatch] = useState([])
    const freeAllbatch = []
    if (allfreeCourLoad) {
        const groups = allfreeCour[0].LVC.reduce((groups, game) => {
            const date = game.date.split('-')[1] + '-' + game.date.split('-')[2]
            if (!groups[date]) {
                groups[date] = []
            }
            groups[date].push(game)
            return groups
        }, {})
        const groupArrays = Object.keys(groups).map((date) => {
            return {
                date,
                groupdata: groups[date],
            }
        })
        freeAllbatch.push(groupArrays)

    }


    // currency inr/usd
    const [contextcur, setContextCur] = useContext(CurrencyContxt);

    return (
        <div className='free-batches full-w'>
            {/* E-Learning */}
            {freeCourLoad ? (

                <div className="container py-16">

                    {freeCour[0].length > 0 && freeCour[0] ?
                        <>
                            <h3 className="font-semibold text-3xl mb-3">
                                {freeCour[0].Elearning[0].batch_category}
                            </h3>

                            <div className="row">
                                {freeCour[0].Elearning.map((item, i) => (
                                    <ScrollAnimation animateIn='fadeInUpscrl' animateOut='fadeInUpscrlout' delay={6 * i} animateOnce={true} className='col-lg-6 col-12 mb-4' key={i}>
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
                                                    <h2 className="text-xl sm:text-2xl font-bold" dangerouslySetInnerHTML={{ __html: item.CourseTitel }} />

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
                                                    <p className="font-semibold">
                                                          <i class="bi bi-camera-video-fill text-gray-500 mr-2"></i>
                                                        {item.batch_category}
                                                    </p>
                                                </div>


                                                <div className='text-left'>


                                                    {contextcur.currency === 'Asia/Kolkata' ? <a href={
                                                        'https://my.careerera.com/signup.php?batchid=' +
                                                        item.workshop_id + "&currency=Rs"
                                                    }
                                                        className="no-underline btn-site gray">
                                                        <span>ENLÍSTATE AHORA</span>
                                                    </a> : <a href={
                                                        'https://my.careerera.com/signup.php?batchid=' +
                                                        item.workshop_id
                                                    }
                                                        className="no-underline btn-site gray">
                                                        <span>ENLÍSTATE AHORA</span>
                                                    </a>}

                                                </div>
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </>
                        : ''}


                </div>
            ) : (
                ''
            )}

            {/* Live Online */}

            {allfreeCourLoad ? (
                <div className='all-allfreecour full-w'>
                    <div className="container mb-16">
                        {allfreeCour[0] ?
                            <h3 className="font-semibold text-3xl mb-1">
                                {allfreeCour[0].LVC[0].batch_category}
                            </h3>
                            : ''}

                        {freeAllbatch[0] && freeAllbatch[0].length > 0 ? <>
                            <div className="mb-4 mt-2">
                                <div className="shadow-md bg-light px-4 py-3 text-2xl border font-semibold mb-4 text-white disclaimer-bx rounded-md ">
                                    {freeAllbatch[0][0].date}
                                </div>
                            </div>


                            <div className="row">
                                {freeAllbatch[0].map((items, i) => (
                                    <>
                                        {items.groupdata
                                            .filter((dats) => dats.New_price === '0.00')
                                            .map((dats, da) => (
                                                <ScrollAnimation animateIn='fadeInUpscrl' animateOut='fadeInUpscrlout' delay={6 * da} animateOnce={true} className='col-lg-6 col-12 mb-4' key={da}>
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
                                                                <h2 className="text-xl sm:text-2xl font-bold" dangerouslySetInnerHTML={{ __html: dats.CourseTitel }} />

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
                                                                    Careerera{' '}
                                                                    {dats.workshop_id}{' '}
                                                                </p>
                                                                <p className="font-semibold mb-1">
                                                                      <i class="bi bi-calendar4-event text-gray-500 mr-2"></i>
                                                                    {dats.date}
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
                                                                    to={"/" + dats.BatchURL}
                                                                    className="no-underline btn-site invert mr-3">
                                                                    <span>Leer más</span>
                                                                </Link>
                                                                <a
                                                                    href={
                                                                        'https://my.careerera.com/signup.php?batchid=' +
                                                                        dats.workshop_id
                                                                    }
                                                                    target="_blank"
                                                                    className="no-underline btn-site gray">
                                                                    <span>ENLÍSTATE AHORA</span>
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </ScrollAnimation>
                                            ))}
                                    </>
                                ))}
                            </div>
                        </> : ''}

                    </div>
                </div>
            ) : (
                <img src={fun} className="w-screen" alt="careerera-loader-image" />
            )}
        </div>
    )
}
export default FreeCourse
