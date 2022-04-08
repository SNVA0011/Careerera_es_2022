import React, { useContext, useEffect, useState } from 'react'
import { Context, Provider } from '../../Api'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom'
import fun from '../../Images/fun4.gif'
import { CurrencyContxt } from "../../Atoms/Contextcurrency";
import ScrollAnimation from 'react-animate-on-scroll';

const PaidCourse = () => {
    // All courses Api
    const { value15, value16 } = useContext(Context)
    const [allbatches, setallbatches] = value15
    const [allbatchesLoad, allBatchesLoad] = value16


    // currency inr/usd
    const [contextcur, setContextCur] = useContext(CurrencyContxt);


    return (
        <div className='all-batches full-w'>
            {allbatchesLoad ? (
                <>
                    <div className="container py-16">
                        {
                            allbatches != undefined ?
                                allbatches.map((items, i) => (
                                    <>
                                        <div className="shadow-md bg-light px-4 py-3 text-2xl border font-semibold mb-4 text-white disclaimer-bx rounded-md">
                                            {allbatches?.length}, API have the data of all batches
                                        </div>
                                    </>
                                ))
                                :
                                <div className="row py-8 alsobenefitthose"></div>
                        }
                    </div>
                </>
            ) : (
                <img src={fun} className="w-screen" alt="careerera-loader-image" />
            )}
        </div>
    )
}
export default PaidCourse
