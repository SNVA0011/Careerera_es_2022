import React, { useEffect, useContext, useState } from 'react'
import Footer from '../Molecules/Index/Footer'
import Header from '../Molecules/Index/Header'
import Media from '../Molecules/Index/Media'
import Navbars from '../Molecules/Index/Navbar'
import Partner from '../Molecules/Index/Parter'
import Disclaimer from '../Molecules/Index/Disclaimer'
import Hero from '../Molecules/Index/Hero'
import Courses from '../Molecules/Index/Courses'
import 'tailwindcss/tailwind.css'
import { Provider } from '../Api'
import Icon from '../Atoms/Icon'
import SideIcon from '../Atoms/sideIcon'
import Careerera from '../Molecules/Master/Careerera'
import Testimonial from '../Atoms/Testimonial'
import { Helmet } from 'react-helmet'
import { CurrencyContxt } from '../Atoms/Contextcurrency'
import { useParams } from 'react-router'
import TawkTo from 'tawkto-react'

const Index = () => {

    const url = useParams()
    const [tawk, settawk] = useState()

    // currency inr/usd
    const [contextcur, setContextCur] = useContext(CurrencyContxt)
    useEffect(() => {
        window.scrollTo(0, 0);
        if (contextcur.currency === 'SGT') {
            var propertyId = "5f6880254704467e89f0dadd"
        }
        else if (contextcur.currency === 'Asia/Singapore') {
            var propertyId = "5f687a27f0e7167d00124851"
        }
        else {
            var propertyId = "5e579a7f298c395d1cea1549"
        }
        var tawkId = "default"
        var tawk = new TawkTo(propertyId, tawkId)
        tawk.onStatusChange((status) => { })
    }, [contextcur]);



    return (
        <div className='indexhome front-page'>
            <Helmet>
                <title>Leading Online Certification Training Course Provider | Careerera</title>
                <meta name="description" content="Careerera is a well-known & legit online certification courses and classroom training provider. It offers industry’s best online education. Enroll to upgrade your skills." />
                <meta name="keywords" content="online certification training, certification training online, online certification classes, certification training classes online, online training and certification" />
                <link rel="canonical" href="https://www.careerera.com/es/" />

                <script async type="application/ld+json">
                    {
                        `{"@context" : "http://schema.org",
                        "@type" : "Organization",
                        "name" : "Careerera",
                        "url" : "https://www.careerera.com/",
                        "sameAs" : ["https://www.facebook.com/careerera","https://twitter.com/CareereraOnline","https://www.linkedin.com/company/careerera","https://www.instagram.com/careereraonline/"],
                        "logo": "https://www.careerera.com/images/logo.svg",
                        "legalName" : "Careerera",
                        
                        "address": [
                        { "@type": "PostalAddress", "addressCountry": "United States", "addressLocality": "Waldorf", "addressRegion": "Maryland", "postalCode": "20602", "streetAddress": "Industrial Park Drive, E -Waldorf" },
                        { "@type": "PostalAddress", "addressCountry": "India", "addressLocality": "Uttar Pradesh", "addressRegion": "Noida", "postalCode": "201301", "streetAddress": "B 44, Sector 59"},
                        { "@type": "PostalAddress", "addressCountry": "India", "addressLocality": "Delhi NCR", "addressRegion": "Gurgaon", "streetAddress": "435 Udyog Vihar,Phase-V"}
                        ],
                        "contactPoint" : [
                        { "@type" : "ContactPoint", "telephone" : "+1-844-889-4054", "contactType" : "Customer Service", "contactOption" : "TollFree", "areaServed" : "US" },
                        { "@type" : "ContactPoint", "telephone" : "+91-92-5000-4000", "contactType" : "Customer Service", "contactOption" : "TollFree", "areaServed" : "IN" },
                        { "@type" : "ContactPoint", "telephone" : "+381-65-454-7847", "contactType" : "Customer Service", "contactOption" : "TollFree", "areaServed" : "SRB" },
                        { "@type" : "ContactPoint", "telephone" : "+65-31-591-123", "contactType" : "Customer Service", "contactOption" : "TollFree", "areaServed" : "SG" }
                        ]}`
                    }
                </script>
                <script type="application/ld+json">
                    {
                        `                   {"@context": "http://schema.org",
                   "@type": "WebSite",
                   "url": "https://www.careerera.com/",
                   "potentialAction": {
                     "@type": "SearchAction",
                     "target": "https://www.careerera.com/search?tag={search_term_string}",
                     "query-input": "required name=search_term_string"
                   }}`
                    }
                </script>
                <script type="application/ld+json">
                    {
                        `{"@context": "https://schema.org/",
                "@type": "WebPage",
                "name": "World's Leading Online Training and  Certification Course Provider | Careerera",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "xpath": [
                        "/html/head/title",
                        "/html/head/meta[@name='description']/@content"
                    ]
                },
                "url": "https://www.careerera.com/"}`
                    }
                </script>
                <meta property="og:title" content="Leading Online Certification Training Course Provider | Careerera" />
                <meta property="og:site_name" content="Careerera" />
                <meta property="og:url" content="https://www.careerera.com" />
                <meta property="og:description" content="Careerera is a well-known online certification course and classroom training provider. It offers the industry’s best online education. Enroll to upgrade your skills." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.careerera.com/images/logo.png" />
                {/* Tawlk To */}

            </Helmet>



            <Hero />
            {/* <Partner /> */}
            <Provider>
                <Courses />
                {/* <Testimonial/> */}
            </Provider>

            <Media />

            <Testimonial
                title1="Estudiantes"
                title2="Revisar" />


            <Disclaimer />
        </div>
    )
}
export default Index
