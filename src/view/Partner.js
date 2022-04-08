import React, { useContext, useEffect } from 'react'
import Category from '../Molecules/Partner/Category'
import Hero from '../Molecules/Partner/Hero'
import Mode from '../Molecules/Partner/Mode'
import Online from '../Molecules/Partner/Online'
import Partnership from '../Molecules/Partner/Partnership'
import Support from '../Molecules/Partner/Support'
import Why from '../Molecules/Partner/Why'
import Footer from '../Molecules/Index/Footer'
import { Context, Provider } from '../Api'
import { Helmet } from 'react-helmet'
import TawkTo from 'tawkto-react'
import { useParams } from 'react-router'
import Aboutpartner from '../Molecules/Partner/Aboutpartner'


const Partner = () => {
    // Country List Api
    const { value11, value12 } = useContext(Context)
    const [cntry, setcntry] = value11
    const [cntryLoad, setcntryLoad] = value12


    useEffect(() => {
        window.scrollTo(0, 0);
        var propertyId = "5f6b41014704467e89f193f5";
        var tawkId = "default"
        var tawk = new TawkTo(propertyId, tawkId)
        tawk.onStatusChange((status) => {
            // console.log(status)
        })

    }, []);


    return (
        <>

            <Helmet>
                <title>Careerera Marketing Affiliate </title>

                <link rel="canonical" href="https://www.careerera.com/es/partner-marketing-affiliates"></link>


            </Helmet>

            <Provider>
                <Hero />
            </Provider>
            <Aboutpartner />
            <Why />
            <Category />


            <Support />
            <Mode />
            <Online />
            <Partnership />
        </>
    )
}
export default Partner
