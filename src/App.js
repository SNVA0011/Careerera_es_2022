import React, { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './view/Index'
import Master from './view/Master'
import Course from './view/Course'
import Free from './view/Free'
import Paid from './view/Paid'
import { Provider } from './Api'
import Header from './Molecules/Index/Header'
import Footer from './Molecules/Index/Footer'
import Navbars from './Molecules/Index/Navbar'
import Icon from './Atoms/Icon'
import Partner from './view/Partner'
import Instructor from './view/Instructor'
import { CurrencyContxt } from './Atoms/Contextcurrency'
import { menuCloseMob } from './Atoms/Contextcurrency'
import Blog from './view/Blog'
import News from './view/News'
import BlogDetail from './view/BlogDetail'
import NewsDetail from './view/NewsDetail'
import Login from './view/Login'
import Help from './view/Help'
import Payment from './view/Payment'
import Disclaimer from './view/Disclaimer'
import Terms from './view/Terms'
import Privacy from './view/Privacy'
import Refund from './view/Refund'
import TermsandCondition from './view/TermsandCondition'
import Rescheduling from './view/Rescheduling'
import Contact from './view/Contact'
import About from './view/About'
import DataScienceStatic from './view/DataScienceStatic'
import CyberSecurityStatic from './view/CyberSecurityStatic'
import NotFound from './view/NotFound'
import CategoryUpcomingBatch from './view/CategoryUpcomingBatch'
import PostGraduation from './view/PostGraduation'
import Certificate from './view/Certificate'
import Language from './view/Language'
import StaffingSolution from './view/StaffingSolution'
import TrainingRoom from './view/TrainingRoom'
import Mocktest from './view/Mocktest'
import Media from './view/Media'
import PartnerAll from './view/PartnerAll'
import FullTestimonial from './view/FullTestimonial'
import PgpDataScience from './view/PgpDataScience'
import PgpArtificalIntelligence from './view/PgpArificialIntelligence'
import PgpCyberSecurity from './view/PgpCyberSecurity'
import PgpDigitalMarketing from './view/PgpDigitalMarketing'
import PgpFullStack from './view/PgpFullStack'
import PgpUi from './view/PgpUi'
import MocktestRegisterForm from './view/MocktestRegisterForm'
import MasterCountry from './view/MasterCountry'
import Job from './view/Job'
import InnerJob from './view/InnerJob'
import StateCountry from './view/MasterState'
import MasterState from './view/MasterState'
import MasterCity from './view/MasterCity'
import DataScienceCountry from './view/DataScienceCountry'
import DataScienceState from './view/DataScienceState'
import DataScienceCity from './view/DataScienceCity'
import CyberSecurityContry from './view/CyberSecurityCountry'
import CyberSecurityState from './view/CyberSecurityState'
import CyberSecurityCity from './view/CyberSecurityCity'
import CyberSecurityZip from './view/CyberSecurityzip'
import BatchDetail from './view/BatchDetail'
import DetailBatch from './view/DetailBatch'
import BlogArabic from './view/BlogArabic'
import BlogDetailArabic from './view/BlogDetailArabic'
import CoursesLists from './view/CoursesLists'
import PgpCienciadatos from './view/PgpCienciadatos'
import PgpGradociber from './view/PgpGradociber'
import PgpAidizaje from './view/PgpAidizaje'

const App = () => {
    const [mobmenuclose, setMobmenuclose] = useState();

    const [contextcur, setContextCur] = useState({
        currency: 'America/New_York',
        title: '+1-844-889-4054',
    })

    return (
        <div className='d-flex flex-column minh-100'>
            <CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                <Icon />
            </CurrencyContxt.Provider>

            <div className='header-top fixed-top bg-white'>
                <Header />
                <CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                    <menuCloseMob.Provider value={[mobmenuclose, setMobmenuclose]}>
                        <Navbars />
                    </menuCloseMob.Provider>
                </CurrencyContxt.Provider>
            </div>
            <div className='header-top-empty'></div>

            <div className='min-bxscreen w-100 flex-grow-1'>
                <Routes>
                    <Route path="/:id/:dats" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Master />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />

                    <Route exact path="/free-courses" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Free />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />

                    <Route exact path="/all-batches" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Paid />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />



                    <Route exact path="/partner-marketing-affiliates" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Partner />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />



                    <Route exact path="/become-an-instructor" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Instructor />
                        </CurrencyContxt.Provider>
                    } />


                    {/* /blog english */}
                    <Route exact path="/blog" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Blog />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />

                    <Route exact path="/blog/page=:id" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Blog />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />
                    {/* end /blog english */}



                    {/* /blog arabic */}
                    <Route exact path="/ar/blog" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <BlogArabic />
                        </Provider>
                    </CurrencyContxt.Provider>} />

                    <Route exact path="/ar/blog/page=:id" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <BlogArabic />
                        </Provider>
                    </CurrencyContxt.Provider>} />
                    {/* end /blog arabic */}

                    <Route exact path="/blog/:url" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <BlogDetail />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />

                    <Route exact path="/ar/blog/:urlar" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <BlogDetailArabic />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    {/* <Route exact path="/news-events" element={
                    <CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <News />
                        </Provider>
                    </CurrencyContxt.Provider>
                } /> */}

                    <Route exact path="/news-events/:news" element={<NewsDetail />} />

                    <Route exact path="/review" element={<FullTestimonial />} />
                    <Route exact path="/our-partners.php" element={<PartnerAll />} />

                    <Route exact path="/in-media" element={<Media />} />
                    <Route exact path="/courses-list" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}><Provider>
                            <CoursesLists />
                        </Provider>
                    </CurrencyContxt.Provider>} />

                    <Route exact path="/post-graduate-program" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}><Provider><PostGraduation /></Provider></CurrencyContxt.Provider>} />

                    <Route exact path="/certification-program" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}><Provider><Certificate /></Provider></CurrencyContxt.Provider>} />


                    <Route exact path="/language-program" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}><Provider><Language /></Provider></CurrencyContxt.Provider>} />


                    <Route exact path="/help" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Help />{' '}
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />

                    <Route exact path="/payment-page" element={<Payment />} />

                    <Route exact path="/disclaimer" element={<Disclaimer />} />

                    <Route exact path="/terms-of-use" element={<Terms />} />

                    <Route exact path="/privacy-policy" element={<Privacy />} />

                    <Route exact path="/refund-policy" element={<Refund />} />

                    <Route exact path="/contact" element={<CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                        <Provider>
                            <Contact />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/about" element={<About />} />

                    <Route exact path="/terms-and-conditions" element={<TermsandCondition />} />

                    <Route exact path="/rescheduling-policy" element={<Rescheduling />} />


                    {/* MASTERS COURSE STATIC */}
                    {/* <Route exact path="/data-science/post-graduate-program-in-data-science" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpDataScience />
                        </Provider>
                    </CurrencyContxt.Provider>} /> */}

                    {/* <Route exact path="/artificial-intelligence-and-machine-learning/post-graduate-program-in-artificial-intelligence-machine-learning" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpArtificalIntelligence />
                        </Provider>
                    </CurrencyContxt.Provider>} /> */}


                    {/* <Route exact path="/cyber-security/post-graduate-program-in-cyber-security" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpCyberSecurity />
                        </Provider>
                    </CurrencyContxt.Provider>} /> */}


                    {/* <Route exact path="/internet-marketing/post-graduate-program-in-digital-marketing" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpDigitalMarketing />
                        </Provider>
                    </CurrencyContxt.Provider>} /> */}


                    {/* <Route exact path="/software-development/pgp-in-full-stack-development" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpFullStack />
                        </Provider>
                    </CurrencyContxt.Provider>} /> */}


                    {/* <Route exact path="/software-development/post-graduate-program-in-ui-and-ux-design" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpUi />
                        </Provider>
                    </CurrencyContxt.Provider>} /> */}


                    {/* Spanish - MASTERS COURSE STATIC */}
                    <Route exact path="/data-science/programa-de-postgrado-en-ciencia-de-datos" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpCienciadatos />
                        </Provider>
                    </CurrencyContxt.Provider>} />

                    <Route exact path="/cyber-security/programa-de-postgrado-en-seguridad-cibernetica" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpGradociber />
                        </Provider>
                    </CurrencyContxt.Provider>} />

                    <Route exact path="/artificial-intelligence-and-machine-learning/programa-de-postgrado-en-inteligencia-artificial-y-aprendizaje-automatico" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpAidizaje />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    {/* End MASTERS COURSE STATIC */}

                    {/* <Route exact path="/:id/:dats/:country" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <MasterCountry />
                        </Provider>
                    </CurrencyContxt.Provider>} />

                    <Route exact path="/:id/:dats/:country/:state" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <MasterState />
                        </Provider>
                    </CurrencyContxt.Provider>} />

                    <Route exact path="/:id/:dats/:country/:state/:city" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <MasterCity />
                        </Provider>
                    </CurrencyContxt.Provider>} /> */}



                    {/* view */}
                    {/* <Route exact path="/:id/certification-course/:countrycourse" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <DataScienceCountry />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/:id/certification-course/:countrycourse/:statecourse" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <DataScienceState />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/:id/certification-course/:countrycourse/:statecourse/:citycourse" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <DataScienceCity />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="cyber-security/certification-course/:cyberCoutry" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <CyberSecurityContry />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="cyber-security/certification-course/:cyberCoutry/:cyberstate" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <CyberSecurityState />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="cyber-security/certification-course/:cyberCoutry/:cyberstate/:cybercity" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <CyberSecurityCity />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact strict path="cyber-security/certification-course/:cyberCoutry/:cyberstate/:cybercity/:cyberzip" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <CyberSecurityZip />
                        </Provider>
                    </CurrencyContxt.Provider>} /> */}


                    <Route exact path="/:data/liveonline/:date/:workid" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <BatchDetail />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/:data/:citys/liveonline/:date/:workid" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <DetailBatch />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    {/* CATOGORY COURSE */}

                    {/* <Route exact path="/data-science" element={<CurrencyContxt.Provider
                    value={[contextcur, setContextCur]}>
                    <Provider>
                        <DataScienceStatic />
                    </Provider>
                </CurrencyContxt.Provider>} />

                <Route exact path="/cyber-security" element={<CurrencyContxt.Provider
                    value={[contextcur, setContextCur]}>
                    <Provider>
                        <CyberSecurityStatic />
                    </Provider>
                </CurrencyContxt.Provider>} />

                <Route path=":id" element={
                    <CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <Course />
                        </Provider>
                    </CurrencyContxt.Provider>
                } /> */}

                    {/* REST */}
                    <Route exact path="/:idbatchmain/:idbatch/batch" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <CategoryUpcomingBatch />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/staffing-solution" element={<StaffingSolution />} />

                    <Route exact path="/training-room" element={<TrainingRoom />} />

                    <Route exact path="/mocktest" element={<CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                        <Provider>
                            <Mocktest />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/mocktest-register.php" element={<CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                        <Provider>
                            <MocktestRegisterForm />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/jobs" element={
                        <CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                            <Provider>
                                <Job />
                            </Provider>
                        </CurrencyContxt.Provider>} />


                    <Route exact path="/jobs/:jobs/:di" element={
                        <CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                            <Provider>
                                <InnerJob />
                            </Provider>
                        </CurrencyContxt.Provider>} />


                    {/* Index & Not found page */}
                    <Route path="/data-science/post-graduate-program-in-data-science " element={<NotFound />} />
                    <Route path="/cyber-security/post-graduate-program-in-cyber-security" element={<NotFound />} />
                    <Route path="/software-development/pgp-in-full-stack-development " element={<NotFound />} />
                    <Route path="/software-development/post-graduate-program-in-ui-and-ux-design" element={<NotFound />} />
                    <Route path="/internet-marketing/post-graduate-program-in-digital-marketing" element={<NotFound />} />
                    <Route path="/artificial-intelligence-and-machine-learning/post-graduate-program-in-artificial-intelligence-machine-learning" element={<NotFound />} />

                    <Route path="*" element={<NotFound />} />

                    <Route exact path="/" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Index />
                        </CurrencyContxt.Provider>
                    } />

                </Routes>
            </div>

            <CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                <Provider>
                    <Footer />
                </Provider>
            </CurrencyContxt.Provider>


        </div>
    )
}
export default App
