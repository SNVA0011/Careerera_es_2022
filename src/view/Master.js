import React, { useState, useEffect } from 'react'
import { Provider } from '../Api'
import { useParams } from 'react-router'
import Application from '../Molecules/Master/Application'
import Completition from '../Molecules/Master/Completition'
import Highlight from '../Atoms/Highlight'
import Navs from '../Molecules/Master/Nav'
import MWhy from '../Molecules/Master/MWhy'
import Cariculam from '../Molecules/Master/Cariculam'
import Cariculambyid from '../Molecules/Master/Cariculambyid'
import Capstone from '../Molecules/Master/Capstone'
import Careerera from '../Molecules/Master/Careerera'
import Profile from '../Molecules/Master/Profile'
import UserForm from '../Molecules/Master/UserForm'
import Faq from '../Molecules/Master/Faq'
import Blog from '../Molecules/Master/Blog'
import Hero from '../Molecules/Master/Hero'
import { Helmet } from 'react-helmet'
import Light from '../Molecules/Master/Light'
import DataScience from '../Atoms/DataScience'
import Testimonial from '../Atoms/Testimonial'
import { Context } from '../Api'
import fun from '../Images/fun4.gif'
import { BrowserRouter as Router, Routes, Route, withRouter, Outlet } from 'react-router-dom'
import UserformsApplication from '../Molecules/Course/UserformsApplication'
import Sign from '../Molecules/Course/Sign'
import CountryFooter from '../Atoms/CountryFooter'
import PopUp from '../Atoms/PopUp'
import { useLocation } from 'react-router'
import NotFound from './NotFound'
// import {  } from "react-router-dom";


const Master = () => {
    let { dats } = useParams()
    const country = useParams()
    const [final, setfinal] = useState([])
    const [sts, loadsts] = useState(false)

    useEffect(() => {
        getMaster()
        window.scrollTo(0, 0);
    }, [dats])

    async function getMaster() {
        await fetch('http://65.0.26.142:9000/apiurl/', {
            method: 'POST',
            body: JSON.stringify({ "apiurl": 'https://my.careerera.com/API/course/AboutCourse.php?course_url=' + dats }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, [])
            .then((response) => response.json())
            .then((json) => setfinal(json.records));
        loadsts(true)

    }

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.random() * (max - min + 1) + min
    }


    const rndInt = randomIntFromInterval(8, 9)
    const Random = rndInt / 2;
    const realRandom = Random.toFixed(1)
    


    console.log('course_about===>',final);


    function randomIntFromInterva(min, max) { // min and max included 
        return Math.random() * (max - min + 1) + min
    }

    const counter = randomIntFromInterva(1600, 2100)
    const realCounter = counter.toFixed(0)
    

    return (
        <div className='master-progsection'>

            {sts ? <div>
                {final[0] ?
                <>
                <Helmet>
                    <title>{final[0].meta_title}</title>
                    <meta name="description" content={final[0].meta_description} />
                    <meta name="keywords" content={final[0].meta_keywords} />
                    <link rel="canonical" href={"https://www.careerera.com/" + country.id + "/" + country.dats}></link>

                    <script type="application/ld+json">{`
                {"@context":"https://schema.org","@type":"Course",
                "@id":"https://www.careerera.com/${country.id}/${country.dats}",
                "name":"${final[0].category_url}",
                "description":"${final[0].meta_description}",
                "provider":{"@type":"Organization",
                "name":"Careerera"},
                "aggregateRating":{"@type":"AggregateRating",
                "ratingValue":${realRandom},
                "reviewCount":${realCounter}},
                "outcome":"","audience":{"@type":"Audience",
                "audienceType":["${final[0].comments ? final[0].comments[0].comment : ""}"]
                
                }}
                `}</script>


                    <script type="application/ld+json">
                        {`
                "@context": "https://schema.org/",
                "@type": "WebPa{couge",
                "name": "${final[0].meta_title}",
                "speakable": {
                "@type": "SpeakableSpecification",
                "xpath": [
                "/html/head/title",
                "/html/head/meta[@name='description']/@content"
                ]
                },
                "url": "https://www.careerera.com/${country.id}/${country.dats}"`
                        }
                    </script>

                </Helmet>
                <Hero
                    categoryUrl={final[0].category_url}
                    duration={final[0].duration}
                    point2={final[0].Point_2}
                    point3={final[0].Point_3}
                    point4={final[0].Point_4}
                    point1={final[0].Point_1}
                    point5={final[0].Point_5}
                    point6={final[0].Point_6}
                    title={final[0].CourseTitel}
                />

                <Navs />
                
          
                <DataScience data={final[0].course_about} title={final[0].CourseTitel} />
 
 
                <div className={'Cariculam-pageid-' + final[0].course_id}></div>
                {(() => {
                    switch (final[0].course_id) {
                        case '166': return <Cariculambyid EsTranslation="Done" data={[{'filename':'pgp-in-ai-and-machine-learning-Curriculum.php','curriculum_id':166}]}/>;
                        case '167': return <Cariculambyid EsTranslation="Done" data={[{'filename':'masters-in-Data-Science-Curriculum.php','curriculum_id':167}]}/>;
                        case '114': return <Cariculambyid EsTranslation="Done" data={[{'filename':'pgp-in-cloud-computing-Curriculum.php','curriculum_id':114}]}/>;
                        case '118': return <Cariculambyid EsTranslation="Done" data={[{'filename':'pgp-in-digital-marketing-Curriculum.php','curriculum_id':118}]}/>;
                        case '168': return <Cariculambyid EsTranslation="Done" data={[{'filename':'pgp-in-cyber-security-Curriculum.php','curriculum_id':168}]}/>;
                        case '169': return <Cariculambyid EsTranslation="Done" data={[{'filename':'pgp-in-business-analytics-Curriculum.php','curriculum_id':169}]}/>;
                        case '170': return <Cariculambyid data={[{'filename':'executive-mba-Curriculum.php','curriculum_id':170}]}/>;
                        case '171': return <Cariculambyid EsTranslation="Done" data={[{'filename':'masters-in-full-stack-development-curriculum.php','curriculum_id':171}]}/>;
                        case '223': return <Cariculambyid EsTranslation="Done" data={[{'filename':'masters-in-full-stack-development-curriculum.php','curriculum_id':223}]}/>;
                        case '267': return <Cariculambyid EsTranslation="Done" data={[{'filename':'php-Curriculum.php','curriculum_id':267}]}/>;
                        case '1': return <Cariculambyid EsTranslation="Done" data={[{'filename':'pmp-Curriculum.php','curriculum_id':1}]}/>;
                        case '182': return <Cariculambyid EsTranslation="Done" data={[{'filename':'Digital-Marketing-Professional-(DMP-by-DMVersity)-curriculum.php','curriculum_id':182}]}/>;
                        case '111': return <Cariculambyid EsTranslation="Done" data={[{'filename':'Artificial-Intelligence-Curriculum.php','curriculum_id':111}]}/>;
                        default: return <Cariculam data={final[0].Curriculum} />
                    }
                })()}
 

                <div className="why-pgpedu">
                    <Careerera 
                    curso="empty" incluyen="empty" cursoval="200" 
                    lomejores='Tome ayuda del proveedor líder de cursos educativos en línea de la India.' 
                    cursotitle3='Contratación de socios' 
                    cursotitle4="Mejor Facultad" 
                    incluyen1='USUARIAS'
                    incluyenpara1='250000+'
                    incluyen2='Programas mejor clasificados'
                    incluyenpara2='10'
                    incluyenpara4='25+'
                    />
                </div>

                <UserformsApplication title="Socios de" subtitle="Contratación" titleheading="Le aseguramos asistencia laboral al final del programa." />


                <Sign title={final[0].CourseTitel}/>
                <Faq data={final[0].faq_List} />

                {/* <Blog data={final[0].blog_List} /> */}
                
                <Testimonial title1="ESTUDIANTES"
                    title2="Hablar" />

                {/* <CountryFooter pagetitle={final[0].CourseTitel} /> */}
                <PopUp title={final[0].CourseTitel} />
                </>
                 : <NotFound />}

            </div> : <div><img src={fun} /></div>}
        </div>
    )
}
export default Master

