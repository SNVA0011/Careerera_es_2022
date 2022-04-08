import React, { useContext, useEffect } from 'react'
import Footer from '../Molecules/Index/Footer'
import Header from '../Molecules/Index/Header'
import FHero from '../Molecules/Free/FHero'
import Navbars from '../Molecules/Index/Navbar'
import FreeCourse from '../Molecules/Free/FreeCourse'
import Icon from '../Atoms/Icon'
import SideIcon from '../Atoms/sideIcon'
import { Context, Provider } from '../Api'
import fun from '../Images/fun4.gif'
import { Helmet } from 'react-helmet'

const Free = () => {
    // E-Learning Api
    const { value7, value8 } = useContext(Context)
    const [freeCour, setFreeCour] = value7
    const [freeCourLoad, setFreeCourLoad] = value8

    // Live Online Api
    const { value9, value10 } = useContext(Context)
    const [allfreeCour, setallFreeCour] = value9
    const [allfreeCourLoad, setallFreeCourLoad] = value10

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {freeCourLoad ? (
                <>
                    <Helmet>
                        <title>List of Courses and Programs offered by Careerera</title>
                        <meta name="description" content="This webpage content list of all professional courses and programs which are offered by Careerera Company." />
                        <meta name="keywords" content="Careerera Courses List, Careerera Programs List" />
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <link rel="canonical" href="https://www.careerera.com/es/free-courses" /> 
                    </Helmet>

                    <Provider>
                        <FHero />
                        <FreeCourse />
                    </Provider>
                </>
            ) : (
                <img src={fun} className="w-screen" alt="careerera-loader-image" />
            )}
        </>
    )
}
export default Free
