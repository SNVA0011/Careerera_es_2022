import React,{useEffect} from 'react'
import Footer from '../Molecules/Index/Footer'
import Hero from '../Molecules/Instructor/Hero'
import How from '../Molecules/Instructor/How'
import Reason from '../Molecules/Instructor/Reason'
import { Helmet } from 'react-helmet'

const Instructor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
    return (
        <>
          <Helmet>
            <title>Become An Instructor</title>
            
          </Helmet>

            <Hero />
            <Reason />
            <How />
        </>
    )
}
export default Instructor
