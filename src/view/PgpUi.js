import React from "react";
import Blog from "../Atoms/Blog";
import DescriptionStatic from "../Atoms/DescriptionStatic";
import Faq from "../Atoms/Faq";
import Highlight from "../Atoms/Highlight";
import NavStatic from "../Atoms/NavStatic";
import Testimonial from "../Atoms/Testimonial";
import Sign from "../Molecules/Course/Sign";
import UserformsApplication from "../Molecules/Course/UserformsApplication";
import Application from "../Molecules/Master/Application";
import Capstone from "../Molecules/Master/Capstone";
import Careerera from "../Molecules/Master/Careerera";
import Completition from "../Molecules/Master/Completition";
import Hero from "../Molecules/Master/Hero";
import Light from "../Molecules/Master/Light";
import MWhy from "../Molecules/Master/MWhy";
import Navs from "../Molecules/Master/Nav";
import Profile from "../Molecules/Master/Profile";
import csr from "../Images/CyberSecurityRole.png";
import ProgramCarriculum from "../Atoms/ProgramCarriculum";
import CountryFooter from "../Atoms/CountryFooter";
import CareerAssistance from '../Atoms/CareerAssistance';
import { Helmet } from "react-helmet";
import PopUp from "../Atoms/PopUp";

const PgpUi = () => {
    return (
        <div className="static-pgpintell">
            <Helmet>
                <title>Post Graduate Program(PGP) & Certification in UI & UX Design</title>
                <meta name="description" content="Enroll in Post Graduate Certification in UI & UX Design course gives you wide coverage to main ideas and techniques. Careerera helps to equip your career PGP in UI & UX Design." />
                <meta name="keywords" content="PGP In UI Design, Post Graduate Program In UI Design, Post Graduate Program In UX Design, Post Graduate Certification In UI Design, Post Graduate Certification In UX Design" />
            </Helmet>
<PopUp title="Post Graduate Program in UI and UX "/>
            <Hero
                categoryUrl="UI & UX DESIGN"
                duration="12-Months Online Program"
                point2="Student Handouts"
                point3="Job Assistance "
                point4="Industrial Projects"
                point1="Course Completion Certificate"
                point5="Multiple Live Projects"
                point6="Industry Based Trainers "
                title="POST GRADUATE PROGRAM IN UI & UX DESIGN"
            />
            <NavStatic
                about="UI & UX DESIGN"
                Why='Why UI & UX DESIGN'
                Program="Program Highlight"
                Carriculum="Curriculum"
                Project="Capstone Project"
                WhyC="Why Careerera"
                Placement="Placement"
                Application="Application"
                faq="FAQ"
                Review="Reviews"
                hiring="Hiring Partner"
            // blogs="Blogs"
            />
            <DescriptionStatic
                title="UI & UX DESIGN Online Course"
                heading="Accelerate your career in UI & UX DESIGN"
                data={<>        <p>The world of software applications has undergone a massive revolution in the past two
                    decades. The number of software applications have exploded in number, especially with the
                    rise of the mobile platform. This has brought new standards of quality and operation which
                    any new aspiring software developer has to follow and respect. This is especially true for the
                    UI and UX sphere of software development. All designers are expected to meet the new and
                    rising standards of interface and experience design. Applications nowadays are smooth,
                    sleek, and sport seamless interfaces. All their various screens, features, and options function
                    flawlessly with no jarring changes in the design guidelines. </p>
                    <h4>Why take a UI/UX design certification course?</h4>
                    <p>There was always some room for variation and change on the desktop computer platform
                        though that has decreased and become fairly standard in recent years. But in the case of the
                        mobile platform the software applications are expected to follow some very rigid norms and
                        design principles. Thus modern UI/UX designers have a sore need of a UI/UX design
                        certification course which will teach them the modern design guidelines and design principles.
                        This will enable them to create user interfaces and user experiences according to the latest
                        industry standards which are ubiquitous across all software applications nowadays.</p></>}

                data2={<>     <h4>Why choose Careerera’s PGP in UI/UX design course?</h4>
                    <p>Careerera’s PGP in UI/UX design course is available to fulfill that need. It is a course which
                        has been created with a core objective in mind. That is to equip UI/UX designers with the
                        knowledge, skills, and experience to be able to design smooth, consistent, and harmonious
                        user design interfaces and user experiences. They will be taught the basic UI/UX processes
                        such as Wireframing, UI prototyping, UX writing, Visual communication, Interaction design,
                        coding etc.</p>
                    <p>The instructors of the course have been handpicked after a rigorous screening process. They
                        have been selected from around the world after being evaluated for their teaching expertise
                        and subject matter knowledge. They are all very experienced faculty who teach according to
                        the most current teaching methodologies. They are all familiar with the latest industry trends
                        and techniques as they all have decades of experience from working in the UI/UX design
                        industry.</p>
                    <p>The course curriculum has been designed with the greatest care and very meticulously. It
                        contains within it all the concepts and topics which are relevant and important in the UI/UX
                        design field of software development. It includes Applications of UX design, Contextual
                        Inquiry, Personas empathy map, Stakeholder map, Journey map, Information architecture,
                        Content strategy planning phases, Voice and tone assessment, SEO and accessibility,
                        Audience engagement, Card sorting, Taxonomies, Tree tests, Mental models, Wayfinding and
                        Navigation, Site maps, User-flow design, Functionality workflows, UX Copywriting,
                        Wireframing, Design hypothesis, Discovery concept strategy etc.</p>
                    <p>The instructors will also provide all the necessary course study materials such as videos,
                        lectures, notes, assignments, surprise quizzes, and capstone projects. The capstone projects
                        in particular will be especially helpful to the learners in putting into practice all the knowledge
                        and skills they will have gained throughout the course’s progress. There will be projects on
                        Informative website design, Redesign of social media, design of forms for the retail and
                        banking sector, lead generation landing page design etc. These diverse variety of capstone
                        projects will provide the opportunity for gaining hands-on experience to the learners.</p></>}

            />
            <MWhy title="UI & UX DESIGN" />
            <Completition
                title1={<> <p><i className="fa fa-check-circle" aria-hidden="true"></i> Be well versed in UI & UX Design tools such as <strong>AdobeXd, Sketch,
                    Photoshop, Axure, Figma</strong></p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Apply industry relevant UI & UX Designing skills such as <strong>UX Research, Collaboration, Wireframing and UI prototyping, UX writing
                        Visual communication, Interaction design, Coding, etc.</strong></p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Get in-depth understanding of Design thinking process and
                        become a pro UI UX Designer.</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Develop the required Software using several tools and techniques</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Present yourself as an ideal candidate for <strong>UI & UX Designing roles
                        within leading Software companies</strong></p></>}
            />
            <Highlight
                head1={<> <p><i className="fa fa-check-circle" aria-hidden="true"></i>
                    <span>12-month online program </span>
                </p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Online Lab Sessions</span></p> </>}
                head2={<>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Careerera has collaboration with many eminent
                        Universities and Organisations across the Globe to
                        exchange the knowledge.</span></p> </>}
                head3={<><p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Career guidance and mentorship by Careerera's faculty
                    and industry leaders</span></p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Resume review and interview preparation sessions</span></p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Access to opportunities with leading companies</span></p> </>}
                head4={<> <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Real-world case studies to build practical skills</span></p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Hands-on exposure to UI & UX tools & techniques such as AdobeXd, Sketch, Figma, Photoshop</span></p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Learn industry insights through multiple industry knowledge sessions
                        knowledge sessions</span></p> </>}

            />


            <div id="cariculum" className="scroll-spbx cariculum-overview our_faq_sec">
                <div className="container py-16">
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Program <span className="orange-clrsite">Curriculum</span>
                        </h2>
                        <p className="text-gray-800 text-base md:text-lg fw-medium">
                            An overview of what you will learn from this program.
                        </p>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>

                    <h4 className="font-bold text-lg sm:text-xl">Module 1 <span className="heading-border-line"></span></h4>
                    <ProgramCarriculum
                        topic1="Understanding UX Design concept"
                        detail1={<>
                            <li>Introduction to UX Design</li>
                            <li>Principles of UXD</li>
                            <li>Applications of UXD</li>
                        </>}

                    />


                    <h4 className="mt-12 font-bold text-lg sm:text-xl ">Module 2  <span className="heading-border-line"></span></h4>
                    < ProgramCarriculum
                        topic1="What is Interactive Design | Principles of Interaction Design (PID)"
                        detail1={<> <li>Information Architecture Modeling</li>
                            <li>Site Maps | User-flow design</li>
                            <li>Functionality Workflows</li>
                            <li>UX Copywriting</li>
                            <li>What is wireframing? Why? Low-fid, Mid-fid and High-fid
                                wireframing</li>
                            <li>Click-through Wireframe Prototyping</li></>}

                    />

                    <h4 className="mt-12 font-bold text-lg sm:text-xl ">Module 3  <span className="heading-border-line"></span></h4>
                    < ProgramCarriculum
                        topic1="Fundamentals of UX Design"
                        detail1={<>   <li>User Guide</li>
                            <li>Increase adoption, Reduce Drop-offs</li>
                            <li>Evoke a positive feeling about using the product</li>
                            <li>Repeat usage & New user acquisition</li>
                            <li>Edge over competition & Higher revenue, margin</li>
                        </>}

                    />


                    <h4 className="mt-12 font-bold text-lg sm:text-xl ">Module 4  <span className="heading-border-line"></span></h4>
                    < ProgramCarriculum
                        topic1="Creating Design Hypothesis"
                        detail1={<> <li>Creation of Design Hypothesis with a Sample Case study</li></>}

                    />



                    <h4 className="mt-12 font-bold text-lg sm:text-xl ">Module 5  <span className="heading-border-line"></span></h4>
                    < ProgramCarriculum
                        topic1="Research & Analysis"
                        detail1={<> <li>The need for R&A</li>
                            <li>Contextual-inquiry (CI) | Personas Empathy map | Stakeholder map</li>
                            <li>User Experience | Journey map</li></>}

                    />



                    <h4 className="mt-12 font-bold text-lg sm:text-xl ">Module 6  <span className="heading-border-line"></span></h4>
                    < ProgramCarriculum
                        topic1="User Testing & Validation"
                        detail1={<>  <li>Discovery-Concept-Strategy & Design Stage</li></>}

                    />


                    <h4 className="mt-12 font-bold text-lg sm:text-xl ">Module 7  <span className="heading-border-line"></span></h4>
                    < ProgramCarriculum
                        topic1="Information Architecture & Content Strategy"
                        detail1={<>   <li>Introduction to Information Architecture</li>
                            <li>Content strategy planning phases</li>
                            <li>Content audits | Voice and tone assessment</li>
                            <li>SEO and accessibility</li>
                            <li>Audience engagement | Personas</li>
                            <li>Card sorting | Taxonomies</li>
                            <li>Tree tests</li>
                            <li>Mental models and use cases</li>
                            <li>Wayfinding | Navigation</li></>}

                    />



                    <h4 className="mt-12 font-bold text-lg sm:text-xl ">Module 8  <span className="heading-border-line"></span></h4>
                    < ProgramCarriculum
                        topic1="Special Topics"
                        detail1={<> <li>Product Types: Best practices and solutions</li>
                            <li>The Psychology of Design</li>
                            <li>The Business of UX</li></>}

                    />


                </div>
            </div>

            <Capstone
                title1="Informative Website"
                data1="The learner’s task is to design a comprehensive and informative website that presents the facts, figures, and editor opinions about a particular topic fairly and in an unbiased way. You will have to design a blog post section where the writers can post their thoughts and a comment section where the readers can weigh in."
                title2="Redesign In Social Media"
                data2="Social media websites are extremely complicated pieces of software engineering and computer science. If we take Facebook for instance, it is a very large scale software development project with billions of users. One small mistake on the website will be magnified billions of times over. The learner’s task is to develop a Facebook redesign concept carefully and painstakingly. "
                title3="Sign UP Form Design For Retail and Bank"
                data3="The learner’s task is to design a paper form which will be used for customer signup purposes in the retail sector and in the banking sector. The form should have correctly placed blank spaces for all the customer details and the customer signature. Its sections should be spaced apart evenly and the formatting should be very logical and function-based."
                title4="lead Generation Landing Page"
                data4="Every commercial company needs a lead generation landing page so that the potential customers can input their information and thus become leads. Later, the sales team of the company can follow up on the leads and offer their products and services to the customers, thus converting them into paying customers. "
                title5="Blog or Digital Publication "
                data5="The learner’s task is to design an attractive and unique blog with all the regular features of a blog page. This includes a comment section, a keywords or tags section, an entire gamut of theme choices, a site-wide new activity section, a latest posts section, and a dates section. The blog should feature beautiful and engaging content which will drive the users to come back again and again to it and eventually become leads."
                title6="Ecommerce Website"
                data6="The learner’s task is to create sketches, wireframes, and visual mockups for an ecommerce website similar to Amazon’s. The website should have a product search page which can perform fast, efficient, and accurate product searches and help the potential customers to find the items they desire. There should also be a product detail page that displays all the relevant information about a product which the customers may wish to view."
                title7="Mobile App Design"
                data7="Mobile apps are a favourite of UI/UX designers because they are compact, have straightforward design requirements and principles, and don’t require a lot of effort to go from the visual mockups to a fully functioning prototype. The learner’s task is to choose any popular mobile app and redesign its user interface and user experience to be more fluid, efficient, and beautiful."
                title8="Email Drip Campaign"
                data8="Emails are an important part of an organization’s marketing strategy since social networks have not yet succeeded in diminishing the frequency of email communication. For this project the learner has to choose a business client and design a series of 4 emails for them. He has to analyze the client’s business needs and demands and craft the emails accordingly so that through them they are converted into paying customers. "
                title9="Marketing Website"
                data9="Marketing websites are very popular in the modern internet spectrum because they are user-facing websites that perform the most essential function – converting visitors into trialers and later into paying customers. The learner’s task for this project is to design a website mockup that displays all the relevant and appealing information about a certain product and facilitates the movement of visitors from the discovery phase (search engine, social media marketing) to the conversion phase. "
                title10="Web App Design"
                data10="A web app is a digital product that users can connect to with their computer, like Facebook, Gmail, Amazon, Google drive or any of the other myriad applications. The learner’s task for this project is to identify a problem domain which can be solved by a simple or complex web app and design the materials for it accordingly. Your final submission prototype should contain wireframes, sketches, dashboard for the app, in-app screens, and the signup flow in the form of a comprehensive caste study."

            />

            <div className="why-pgpedu">
                <Careerera />
            </div>


            <Profile title="UI & UX DESIGN"
            />
            <CareerAssistance
                title='Placement'
                titlesub='Guarantee'
                titleheading='Leverage Careerera’s tieups with India’s top IT companies.'
                box1='Access to Opportunities with Leading Companies'
                box2='Workshops on Resume Review &amp; Interview Preparation'
                box3='Career Guidance and Mentorship by Careerera and Industry Leaders' />


            {/* <Light image={csr} /> */}
            <UserformsApplication />
            <Sign />
            <Faq

                ques1="Q1 : What is the PGP in UI/UX design course from Careerera and what makes it different from individual courses?"
                ans1="A : Post Graduate Program in UI/UX is a carefully designed learning path that has been created by some of the leading industry experts. The structure of the course curriculum has been set up in a way that even a complete beginner to UI/UX design will be able to follow the course progression and understand all the course materials clearly. Our world-class instructors will ensure that you become a master of UI/UX design by the time you complete the course."
                ques2="Q2 : Can Careerera provide the PGP in UI/UX design course at a location near me?"
                ans2="A : Our course content is intended to reach learners globally. Whether you reside in any country be it India, Canada, USA, Philippines, Singapore, Malaysia, Australia, or European countries like UK, Germany, Netherlands, Germany or somewhere else, you will be able to access our content 24/7, at any time of the day. The reason for this is that our content is available 100% online. You can access all of our content sitting at your home or office. "
                ques3="Q3 : Can I ask for a support and doubt clearing session if I want to understand the topics at a deeper level?"
                ans3="


                A : Careerera offers 24/7 query resolution and you can file a ticket with a dedicated support team at any time. We provide both email and video chat support for all the queries. If your query does not get resolved in a suitable amount of time through email, we will arrange live one on one sessions with our world-class instructors who would be more than happy to guide you through your doubts.

                You may be happy to learn that Careeerera does not stop its learners from contacting the instructors even after they have completed the course. They can create as many support tickets as they want; we do not place any limit on the number of tickets they can create.
                
                "
                ques4="Q4 : Which kind of projects are assigned as part of the training?"
                ans4="

               

A : Careerera assigns the most up to date, relevant, and practical high-value projects to its learners. They carry a lot of real world value as they are designed carefully by our world-class instructors to provide practical and hands-on experience to the learners as they complete them. We provide you with a safe and trusted route through which you can implement the learning and knowledge you have acquired in a real-world industrial environment. These projects are a part of every course at Careerera and they will thoroughly test your learning, skills, and practical knowledge, making you fully and comprehensively ready for the industry jobs.

You will have the opportunity to work on extremely exciting and demanding projects in the fields of hi-tech IT, Marketing, Sales, Ecommerce, Insurance, Banking, Networking etc. After completing the projects successfully your skills will be equivalent to 6 full months of painstaking and rigorous industry experience.
"
                ques5="Q5 : Does Careerera provide any kind of job assistance?"
                ans5="
                Careerera supports its learners by providing placement assistance to all learners who successfully complete the course and pass all the exams, projects, and assignments. We have partnerships with lots of MNCs and other top employers around the world. Through our networks of contacts, you can successfully land a job in several outstanding organizations and equally great enterprises. We also conduct several free seminars and workshops on how to create one’s resume and how to prepare for job interviews. We will also conduct counselling sessions which will be for Career mentoring and participating in Career fairs.
                "
                ques6="Q6 : What is the definition of UI/UX design? What makes it so important?"
                ans6="
    

A : The function of a UI/UX designer is to create and design optimal user interfaces and user experiences. They are responsible for ensuring that the user has a smooth interaction with the software and can navigate around the software easily and without any hassles. In today’s modern and rapidly developing world, people expect a responsive and consistent user interface and user experience across all platforms and devices. UI/UX designers have the responsibility of providing them that consistent user interface and user experience. Moreover, humans are building deeper and deeper working relationships with technology and devices. In order for these relationships to function properly, humans require bette modes of reciprocation with the machines and for this purpose they require good, skilled, able, and competent UI/UX designers.

Designers have to -

    Conduct user research – UI/UX designers have to research and study the behaviour of users and their goals, motivations, and needs. Designers have to utilize various methods to collect this data, such as scheduling interviews with users and stakeholders, focus groups, online surveys, and competitive analysis. The designers convert this data into qualitative and quantitative information and use it to guide their decision making.
    Create user personas – UI/UX designers have to create representative personas of key user groups by identifying them and then developing them into real life like personas. These developed personas can be used to simulate various real life scenarios and their choices, reactions, and behaviours can be tracked and studied.
    Design user flows and wireframes – Designers have to create representations of designs with low fidelity. The representations of user’s journeys during the time that they interact with a website or an app as well as with UI elements such as buttons or images are called wireframes. Designers have to create both wireframes and user flows.

"
                ques7="Q7 : Is UI/UX designer a good Career choice?"
                ans7="A : UI/UX design is in huge demand in many industries, ranging from IT to Finance to Ecommerce to Manufacturing to Healthcare to Retail. It is the fastest growing job on Linkedin and is predicted to create 11.5 million jobs by 2026. This makes UI/UX design a very lucrative career choice. Also, the number of people who actually possess the requisite skillsets to become a complete UI/UX designer is very little. Thus, there is a high demand of Full Stack Developers but a low supply of qualified people. So Full Stack Developers can demand as big a salary as they want and the companies will have to comply with their demands."
                ques8="Q8 : What are the skills required to start a job in the field of UI/UX design?"
                ans8="A : The skills you will require to land a job in the field of UI/UX design are – HTML, CSS, Javascript, knowledge of various front-end platforms, customer and competitor analysis skills, user research skills, prototyping and wireframing skills, testing and iterating skills, coordination skills."
                ques9="Q9 : Who is eligible for taking the PGP in UI/UX design course from Careerera?"
                ans9="


                A : Companies who will seek to hire UI/UX designers will look for the following degrees -

                12 th pass from the Science stream or IT stream.
                
                For fresh graduates or college students - A degree in B.Tech/M.Tech (Any Trade), IT, BCA, MCA or B.Sc
                
                For working professionals - Professional experience of 1+ years in any programming language. If your professional experience is not related to UI/UX design, you can still make a switch to a career in UI/UX design provided that you hold any of the degrees specified above. To enroll in the PGP in UI/UX design course however you don’t need any technical or programming experience. We teach all the modules from scratch.
                
            
             "
                ques10="Q10 : What are the tools and technologies used to teach this PGP in UI/UX design course from Careerera? "
                ans10="A : HTML, CSS, Javascript, Adobe XD, Axure, Balsamiq, Figma, Adobe Photoshop, Sketch."

                ques12="Q11 : What is the duration of this PGP in UI/UX design course from Careerera?"
                ans12="A : The PGP in UI/UX design course from Careerera is a 12 month long online program."
                ques13="Q12 : Which topics are covered in the course curriculum of the PGP in UI/UX design course from Careerera?"
                ans13="A : There are several topics pertinent to the field of UI/UX design which are covered in this PGP in UI/UX design course. Some of them are as follows – User interaction, Cognitive model, Mental model, Elements of UX design, Persona in UX design, UX process, Flow chat, User map, User needs and its goals, Visual design principles, Wireframing and storyboarding, Information design and data visualization, Elements and widgets, Various prototyping tools, Applying the usability test feedback."
                ques14="Q13 : Which sectors are the capstone projects based on?"
                ans14="A : Retail, Web and Social Media, Supply Chain, Entrepreneurship, E-commerce, Banking, Healthcare, Insurance, Finance and Accounts etc."
                ques15="Q14 : Is there any guarantee of placement after the completion of the PGP in UI & UX DESIGN course?"
                ans15="A : Yes, there is a 100% guarantee of placement after the completion of the course."
                ques16="Q16 : Why should one choose Careerera?"
                ans16="
                A : It is not likely to happen given our past success rate with the placements of our learners. However, if it so happens that one of our learners does not get placed, we will provide a full refund of the course fees directly into the learner’s bank account with no questions asked. 
                     "
                ques17=""
                ans17=""

            />
            {/* <Blog
                heading="Blogs"
                heading2="And Article"

                title1="Is UI & UX DESIGN Hard?   "
                url1="https://my.careerera.com/eventimages/Newsid_373_images0.jpg"
                redirect1="/blog/is-full-stack-development-hard"

                title2="Is it worth becoming a full-stack developer?    "
                url2="https://my.careerera.com/eventimages/Newsid_335_images0.jpg"
                redirect2="/blog/is-it-worth-becoming-a-full-stack-developer"

                title3="Do full-stack developers get paid more?  "
                url3="https://my.careerera.com/eventimages/Newsid_332_images0.jpg"
                redirect3="/blog/do-full-stack-developers-get-paid-more"
            /> */}
            <Testimonial title1="STUDENT'S"
                title2="Review" />
              <CountryFooter  pagetitle="UI and UX"/>
        </div>
    )
}

export default PgpUi;




