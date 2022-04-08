import React, { useContext ,useEffect} from 'react'
import Footer from '../Molecules/Index/Footer'
import Header from '../Molecules/Index/Header'
import PHero from '../Molecules/Paid/PHero'
import Navbars from '../Molecules/Index/Navbar'
import PaidCourse from '../Molecules/Paid/PaidCourse'
import Icon from '../Atoms/Icon'
import { Context, Provider } from '../Api'
import SideIcon from '../Atoms/sideIcon'
import fun from '../Images/fun4.gif'
import { Helmet } from 'react-helmet'


const Paid = () => {
    // All courses Api
    const { value15, value16 } = useContext(Context)
    const [allbatches, setallbatches] = value15
    const [allbatchesLoad, allBatchesLoad] = value16


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            {allbatchesLoad ? (
                <>
                   <Helmet>
                   <title>List of Courses and Programs offered by Careerera</title>
                    <meta name="description" content="This webpage content list of all professional courses and programs which are offered by Careerera Company."/>
                    <meta name="keywords" content="Careerera Courses List, Careerera Programs List"/>
                    <link rel="canonical" href="https://www.careerera.com/es/all-batches"/>
                    
                    </Helmet>

                    <Provider>
                        <PHero />
                        <PaidCourse />
                    </Provider>
                </>
            ) : (
                <img src={fun} className="w-screen" alt="careerera-loader-image"/>
            )}
        </>
    )
}
export default Paid
