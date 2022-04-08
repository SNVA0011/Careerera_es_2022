import React, { useContext, useEffect, useState } from 'react'
import Certificate from '../Molecules/Course/Certificate'
import DataScience from '../Atoms/DataScience'
import CWhy from '../Molecules/Course/CWhy'
import Courses from '../Molecules/Course/Course'
import Explore from '../Molecules/Course/Explore'
import Highlight from '../Atoms/Highlight'
import Sign from '../Molecules/Course/Sign'
import RelatedCourses from '../Molecules/Course/RelatedCourses'
import Header from '../Molecules/Index/Header'
import Navbars from '../Molecules/Index/Navbar'
import Footer from '../Molecules/Index/Footer'
import Icon from '../Atoms/Icon'
import SideIcon from '../Atoms/sideIcon'
import { useLocation, useParams } from 'react-router'
import { Context, Provider } from '../Api'
import fun from '../Images/fun4.gif'
import { Helmet } from 'react-helmet'
import NotFound from './NotFound'
import { useNavigate } from 'react-router-dom';



const Course = () => {
    const [Catfinal, Catsetfinal] = useState([])
    const [Catsts, Catloadsts] = useState(false)
    const id = useParams()


    async function getCourse() {
        const data = await fetch('http://65.0.26.142:9000/apiurl/', {
            method: 'POST',
            body: JSON.stringify({ "apiurl": 'https://my.careerera.com/API/course/CategoryPage.php?url=' + id.id + "&timeZone=EST" }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, [])
            .then((response) => response.json())
            .then((json) => Catsetfinal(json.records));
        console.log("P", data)
        Catloadsts(true)
    }

    useEffect(() => {
        getCourse()
        window.scrollTo(0, 0);
    }, [id]);


    return (
        <div>
            {Catsts ? <div>
                {Catfinal && Catfinal[0] ?
                    <>
                        <Helmet>
                            <title>{Catfinal[0].category_title} Certification Course and Online Training - Careerera</title>
                            <meta name="description" content={"Enroll for online " + Catfinal[0].category_title + " certification courses at Careerera. It offers " + Catfinal[0].category_title + " practice tests and classroom training to achieve your goals."} />
                            <meta name="keywords" content={Catfinal[0].category_title + " programs, " + Catfinal[0].category_title + " courses online, " + Catfinal[0].category_title + " certification, " + Catfinal[0].category_title + " training, " + Catfinal[0].category_title + " certification online,  " + Catfinal[0].category_title + " training online, " + Catfinal[0].category_title + " certification training"} />

                            <link rel="canonical" href={"https://www.careerera.com/" + id.id} />

                            <script type="application/ld+json">
                                {`{
            "@context": "https://schema.org/",
            "@type": "WebPage",
            "name": "${Catfinal[0].category_title}",
            "speakable": {
                "@type": "SpeakableSpecification",
                "xpath": [
                    "/html/head/title",
                    "/html/head/meta[@name='description']/@content"
                ]
            },
            "url": "https://www.careerera.com/"+${id.id}}`
                                }
                            </script>

                            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        </Helmet>

                        <Certificate data={Catfinal} />
                        <RelatedCourses data={Catfinal} />
                    </>
                    : <NotFound />}

            </div> : <div><img src={fun} /></div>}
        </div>
    )
}
export default Course
