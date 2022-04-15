import React, { useState, useEffect } from "react";
import Blog from "../Atoms/Blog";
import DescriptionStatic from "../Atoms/DescriptionStatic";
import Faq from "../Atoms/Faq";
import Highlight from "../Atoms/Highlight";
import NavStatic from "../Atoms/NavStatic";
import Testimonial from "../Atoms/Testimonial";
import Sign from "../Molecules/Course/Sign";
import UserformsApplication from "../Molecules/Course/UserformsApplication";
import Capstone from "../Molecules/Master/Capstone";
import Careerera from "../Molecules/Master/Careerera";
import Completition from "../Molecules/Master/Completition";
import Hero from "../Molecules/Master/Hero";
import Light from "../Molecules/Master/Light";
import MwhyStatic from "../Molecules/Master/MwhyStatic";
import Profile from "../Molecules/Master/Profile";
import rolesoffer from "../Images/oferta_deroles.png";
import ProgramCarriculum from "../Atoms/ProgramCarriculum";
import CareerAssistance from '../Atoms/CareerAssistance';
import { Helmet } from "react-helmet";
import PopUp from "../Atoms/PopUp";
import { Link } from 'react-router-dom'
import aiMlimg from '../Images/data_science.png'


const PgpGradociber = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <div className="static-pgpintell">
            <Helmet>
                <title>PROGRAMA DE POSTGRADO EN SEGURIDAD CIBERNÉTICA</title>
                <meta name="description" content="PROGRAMA DE POSTGRADO EN SEGURIDAD CIBERNÉTICA" />
                <meta name="keywords" content="PROGRAMA DE POSTGRADO EN SEGURIDAD CIBERNÉTICA" />
                <link rel="canonical" href="https://www.careerera.com/es/cyber-security/programa-de-postgrado-en-seguridad-cibernetica" />
            </Helmet>

            <PopUp title="PROGRAMA DE POSTGRADO EN SEGURIDAD CIBERNÉTICA" />

            <Hero
                categoryUrl="PROGRAMA DE POSTGRADO EN SEGURIDAD CIBERNÉTICA"
                duration="12 meses"
                point2="Facultades experimentadas"
                point3="Varios proyectos en vivo"
                point4="Proporción de estudiantes y profesores 15: 1"
                point1="Folletos para estudiantes"
                point5="Certificado de finalización del curso"
                point6="Base sólida"
                title="PROGRAMA DE POSTGRADO EN SEGURIDAD CIBERNÉTICA"
                ConsultaAhora='Consulta ahora'
            />



            <NavStatic
                about='Descripción'
                Program='Destacados'
                Carriculum='Currículo'
                WhyC='Por qué Careerera'
                hiring='Contratación de socios'
                blogs="Blogs"
                faq='Preguntas más frecuentes'
                queryInscribirse='Inscribirse'
                Review="Reseñas"
            />

            <DescriptionStatic
                title="Programa de Postgrado en Seguridad Cibernética"
                titlecurso="empty"
                heading="Consoce su camino alrededor del Programa de Postgrado en Seguridad Cibernética."
                data={<>
                    <p>¿Alguna vez ha pensado en lo que el malware, spyware, ransomware y otros virus y gusanos pueden hacer a su sistema web cibernético y de TI? ¡Es hora de que lo pienses ahora y obtengas el conocimiento suficiente para combatir los ataques cibernéticos con nuestra certificación PGP en Seguridad Cibernética!</p>
                    <p>El programa PGP en seguridad cibernética está diseñado para educar a los nuevos estudiantes sobre enfoques integrales para asegurar y proteger los datos, que pueden dañar y devastar toda la base de una estructura de TI de manera prodigiosa y con un efecto considerable. El tiempo necesario será, solo unos segundos, el daño será irrecuperable y costará millones e incluso miles de millones para las empresas y sus propietarios. Por lo tanto, aquí entendemos cuán seriamente el curso está creciendo en popularidad, haciendo frente a las demandas de los empleados no calificados en el dominio de la seguridad cibernética.</p>
                    <p>La capacitación en seguridad cibernética en línea, en Careerera, se desarrolla para enfatizar las habilidades de construcción y el calibre que se adaptan al cibermundo exterior. Se centra en la protección de los datos, el análisis de riesgos potenciales, la reducción de riesgos, la seguridad basada en la nube y el cumplimiento. El curso ofrece una pendiente creciente de habilidades para sus estudiantes y profesionales. Aquí, comenzamos con lo básico y alcanzamos habilidades avanzadas para una construcción de conocimientos mejor, actualizada, mejorada y superiormente más fina como ninguna otra.</p>
                </>}

                data2={<>
                    <p>En esta certificación de seguridad cibernética, puede aprender con expertos cibernéticos y mentores que tienen un conjunto de conocimientos, experiencia valiosa y agencia práctica. Ellos le guían de la manera correcta - para agrupar toda la información, lo que le permite aprender, y entender los datos cibernéticos que le ayudarán a resolver los problemas más difíciles en el dominio de la seguridad cibernética.</p>
                    <p>¿Estás listo para dar a tu carrera una verdadera elevación en el dominio de la seguridad cibernética? </p>
                    <p>Leer más aquí sobre lo que te ofrecemos en esta formación en ciberseguridad online,  </p>
                    <p>¡Consíctanos y al dedicado equipo de mentores de Careerera, y encuentra el verdadero tú!</p>
                    <h2 className='text-2xl mt-4 font-semibold'>¿Por qué PGP en Seguridad Cibernética?</h2>
                    <p>El Programa de Postgrado (PGP) en el curso de Seguridad Cibernética tiene una gran demanda hoy en día. Esto se debe a que tanto las personas como los profesionales quieren saber cómo ocurren los delitos cibernéticos, se toncó con datos influyentes e importantes, y por lo tanto, ¡son tan capaces de destruir un mundo que está dominado por la web y la tecnología!</p>
                    <p>Los profesionales quieren saber cómo pueden conseguir los trabajos mejor remunerados del sector, mientras se preparan para erradicar la ciberdelincuencia inscribiéndose en el mejor curso de certificación profesional de Ciberseguridad online.</p>
                    <p>Hay tantos cursos disponibles para los aspirantes, actualmente, que tomar una decisión sabia después de desplazarse hacia abajo en la lista de múltiples certificaciones de seguridad cibernética, es realmente difícil!</p>
                    <p>En Careerera, diseñamos un curso que trabaja en todas las habilidades relevantes de la industria, las que están en demanda por las principales empresas empleadoras, y le ayudamos a obtener la visión correcta y el camino correcto en su carrera. Aquí, nos basamos en habilidades como:</p>
                    <ul className='list-disc pl-6 text-base'>
                        <li>Autenticación </li>
                        <li>Identificación </li>
                        <li>Gobernación de Internet - Sus muchos desafíos y restricciones </li>
                        <li>Amenazas graves - Guerra cibernética - Ciberdelincuencia - Ciberterrorismo </li>
                        <li>Des políticas de seguridad</li>
                        <li>¿Qué es el Convenio Internacional sobre el Ciberespacio? </li>
                        <li>Qué es la Autoridad Nodal?</li>
                    </ul>
                    <p>Si un alumno hace un esfuerzo concentrado para entender el material del curso y los módulos de aprendizaje, puede aprobar el curso fácilmente. Además, el curso no es difícil. Es fácil para usted si tiene la dedicación requerida y la mejor certificación de seguridad cibernética para inscribirse. Para tener una comprensión y comprensión adecuadas de la seguridad cibernética, un alumno individual debe encontrar una certificación adecuada que pueda prepararlo profesionalmente despejando todas las dudas y problemas emergentes.
                    </p>
                    <h2 className='text-2xl mt-4 font-semibold'>El objetivo de PGP en la capacitación de certificación de seguridad cibernética</h2>
                    <p>El curso de certificación profesional tiene ciertos objetivos marcados. Trabaja para trabajar en ideas relacionadas con el curso que ayudan a los estudiantes a ser extraordinarios y, por lo tanto, ¡aspiran y pretenden que sean mucho más! El curso PGP en Seguridad Cibernética tiene los siguientes objetivos:</p>
                    <ul className='list-disc pl-6 text-base'>
                        <li>Introducir a estudiantes y educandos en varios tipos de ciberataques. Estos incluyen hacks de kernel de Unix, caballos de Troya y gusanos de Internet en las utilidades de software.</li>
                        <li>Descripción general sobre las contramedidas para ataques cibernéticos : criptografía, esquema canónico, etc.</li>
                        <li>Intromenaza y detección cibernéticas: firewalls y otros sistemas que ayudan a detener las intrusiones exotéricas.</li>
                        <li>Saber cómo proteger la infraestructura - asegurar las empresas y sus infraestructuras orientadas a la web mediante la comprensión teórica y la práctica la obtención de experiencia práctica en el software.</li>
                        <li> Reconocer cómo funciona la seguridad de la información (INFOSEC) y el ataque de denegación de servicio (DOS).</li>
                    </ul>
                    <p>Estos puntos y objetivos principales se enfatizan más a menudo en el curso para que los estudiantes sepan cuáles son sus metas académicas y cómo se pueden lograr en la duración de esta certificación profesional.</p>
                    <h2 className='text-2xl mt-4 font-semibold'>Requisitos de PGP en el Curso de Certificación de Seguridad Cibernética</h2>
                    <p>Estos son los requisitos que deben ser debidamente cumplimentados por los candidatos, que se incorporen al curso profesional en Careerera:</p>
                    <ul className='list-disc pl-6 text-base'>
                        <li>Una licenciatura a tiempo completo de tres años en cualquiera de estos - Tecnología e Ingeniería - B.tech, BS o BE. Aquí, los estudiantes deben haber obtenido una puntuación mínima del 50%.</li>
                        <li>Los aspirantes que han completado su BCA, MCA, B.Sc en Tecnología de la Información (TI) también están calificados para el curso de certificación.</li>
                        <li>No hay límite de edad superior para los estudiantes. Los profesionales pueden inscribirse en la certificación profesional independientemente de su edad.</li>
                    </ul>
                    <h2 className='text-2xl mt-4 font-semibold'>Aspectos destacados del programa</h2>
                    <ul className='list-disc pl-6 text-base'>
                        <li>Sesiones en vivo y capacitación en el aula.</li>
                        <li>Entrega de material académico para estudiantes, notas de aprendizaje y documentos de muestra.</li>
                        <li>Orientación 24/7 para estudiantes. Los estudiantes pueden volver a visitar el portal lms para sesiones grabadas en vivo para despejar las dudas y consultas que surjan en su camino.</li>
                        <li>Asistencia laboral.</li>
                        <li>Fijo del curso. </li>
                        <li>Experiencia en capacitación manual. </li>
                        <li>Varios exámenes de simulación.</li>
                    </ul>
                    <h2 className='text-2xl mt-4 font-semibold'>¿Por qué Careerera?</h2>
                    <p>Puede unirse a muchos cursos de ciberseguridad en línea, cuyo estreno es PGP en Seguridad Cibernética. En Careerera, el curso profesional ofrece mucho más que lo que otras empresas e institutos de tecnología de la educación están haciendo. Ofrece módulos de aprendizaje profundo para cursos avanzados que a su vez coinciden y cumplen con las expectativas de un mundo técnico moderno. Aquí, usted puede encontrar todas las habilidades actualizadas en seguridad cibernética. Los principales de ellos son:

                    </p>
                    <ul className='list-disc pl-6 text-base'>
                        <li>Criptografía </li>
                        <li>Cibersecurity </li>
                        <li>Evaluación de riesgos </li>
                        <li>Ciber Defense </li>
                        <li>Cyber Attacks </li>
                        <li>Information Security (INFOSEC) </li>
                        <li>Denial-Of-Service Attack (DOS) </li>
                        <li>Public-Key Cryptography</li>
                    </ul>
                    <p>Si hablamos de manera más general, entonces los profesionales y los estudiantes nos eligen principalmente porque:</p>
                    <ul className='list-disc pl-6 text-base'>
                        <li>Vemos y entendemos lo que está surgiendo en el mercado, lo que es nuevo </li>
                        <li>Diseñamos un plan de estudios del curso que todos juntos crean un mejor ambiente de aprendizaje y experiencia </li>
                        <li>Formulamos nuestra metodología de aprendizaje después de mirar las necesidades de los estudiantes de nuevo día. Además, lo actualizamos en consecuencia</li>
                        <li>Las sesiones en vivo se graban para su revisitación. Están disponibles en el portal de LMS </li>
                        <li>Si los estudiantes tienen algún problema y consulta relacionada con el curso, pueden visitar el portal de LMS y ver las sesiones grabadas para un curso y la claridad de la lección </li>
                        <li>Nos centramos en los aspectos prácticos y teóricos de la capacitación</li>
                    </ul>
                    <h2 className='text-2xl mt-4 font-semibold'>Entrega del curso</h2>
                    <ul className='list-disc pl-6 text-base'>
                        <li>Las sesiones en vivo son impartadas por mentores y expertos académicos. Como expertos globales, tienen una experiencia docente excepcional en el campo de la Ciencia de Datos </li>
                        <li>La formación en el aula es más práctica que teórica. Se hace hincapié en la capacitación práctica y la teoría práctica</li>
                        <li>Creamos un mejor ambiente de aprendizaje, donde se crean sesiones interactivas saludables </li>
                        <li>Tenemos un plan de estudios estructurado del curso. Los entrenadores lo siguen y entretienen a los participantes. Las sesiones se producen para efectos a largo plazo </li>
                        <li>Hacemos para cimentar los conceptos y teorías base.</li>
                    </ul>
                    <h2 className='text-2xl mt-4 font-semibold'>Beneficios de PGP en capacitación en seguridad cibernética en línea en Careerera</h2>
                    <ul className='list-disc pl-6 text-base'>
                        <li>Mejor alcance de la carrera </li>
                        <li>Seguridad del empleo</li>
                        <li>De alto salario</li>
                        <li>Habilidades de liderazgo </li>
                        <li>Motivación e incentivos financieros </li>
                        <li>Exposición práctica a proyectos prácticos. </li>
                        <li>Solución de problemas complejos de la industria. </li>
                        <li>Trabajo en varios estudios de caso. </li>
                        <li>Mejorar el apoyo profesional y la exposición a la industria.</li>
                    </ul>

                </>}

            />



            <MwhyStatic
                titlem="la"
                titlem2="seguridad cibernética?"
                titlem3='Se requieren 3,5 millones de profesionales de la ciberseguridad para 2021 solo en India'

                contenttitle1='40%'
                contentpara1='$ 248.6 mil millones tamaño esperado del mercado de seguridad global para 2023 a CAGR del 10.2% de 2018 a 23'

                contenttitle2='61%'
                contentpara2='$ 125,000 / - a $ 215,000 / - rango promedio de un salario profesional de seguridad cibernética'

                contenttitle3='2.7 MILLÓN'
                contentpara3='Proyección de un crecimiento del 18% del empleo para 2014-24'

                contenttitle4='33.5%'
                contentpara4='50% más de salario en habilidades de TI que para otros trabajos estadounidenses en el sector privado'

                contenttitle5='2021'
                contentpara5='India to become one of the top five markets for Big Data by 2021'
            />


            <Completition
                compcurso="empty"
                compcurso1='Al completar este programa,'
                compcurso2=' usted:'

                capacidadaiml={aiMlimg}

                title1={<>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i>Capacidad para proteger la seguridad de los datos y la información mediante el uso de estrategias, técnicas y herramientas avanzadas</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Mitigue el riesgo mediante el uso de políticas y procesos de seguridad avanzados</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Amplia cobertura del tema de la seguridad bajo la arquitectura de computación en la nube</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Comprender los requisitos legales, los procesos de auditoría y los problemas de privacidad en el entorno de la nube</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Cumplimiento para TI e integridad de los sistemas empresariales para una mejora general en el marco de TI empresarial para frustrar las amenazas</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Capacidad para dominar muchas herramientas como Nmap Hacking Tool, Burp Suite Hacking Tool, Netsparker, Acunetix, Metasploit y muchas más.</p>
                </>} />




            <Highlight
                titlem="Aspectos destacados"
                titlem2="del programa"
                titlem3='Vea qué beneficios puede obtener al unirse a este programa.'
                titlecurso="empty"
                head1={<>
                    <div className="height_light_box">
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i>
                            <span>Programa en línea de 12 meses </span>
                        </p>
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Sespedes de laboratorio en línea </span></p>
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>saló facultades altamente experimentadas</span></p>
                    </div>
                </>}
                head2={<>
                    <div className="height_light_box">
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Careerera colabora con muchas universidades y organizaciones eminentes de todo el mundo para intercambiar conocimientos.</span></p>
                    </div>
                </>}
                head3={<>
                    <div className="height_light_box">
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Orientación profesional y tutoría por parte de la facultad de Careerera y los líderes de la industria.</span></p>
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Sesiones de revisión de currículum vitae y preparación de entrevistas</span></p>
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Acceso a oportunidades con empresas líderes</span></p>
                    </div>
                </>}
                head4={<>
                    <div className="height_light_box">
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Estudios de casos del mundo real para desarrollar habilidades prácticas</span></p>
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Exposición práctica a herramientas y técnicas analíticas como Netsparker, Acunetix, Metasploit</span></p>
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Conozca los conocimientos de la industria a través de múltiples sesiones de conocimiento de la industria</span></p>
                    </div>
                </>} />


            <div id="cariculum" className="scroll-spbx cariculum-overview our_faq_sec blog-detials-single">
                <div className="container py-16 content normal mt-0">
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold bg-white">
                            Plan de estudios  <span className="orange-clrsite">del programa</span>
                        </h2>
                        <p className="text-gray-800 text-base md:text-lg fw-medium bg-white">
                            Una descripción general de lo que aprenderá de este programa.
                        </p>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>

                    {/*==================== h4 title ================*/}
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Fundamentos de la Ciberseguridad'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Introducción del programa de seguridad cibernética PGP</li>
                                        <li>¿Qué es la ciberseguridad?</li>
                                        <li>La importancia de la ciberseguridad</li>
                                        <li>¿Por qué está aumentando el ciberdelito?</li>
                                        <li>¿Cuál es el impacto del ciberdelito?</li>
                                        <li>¿Cómo proteger a su organización contra el ciberdelito?</li>
                                        <li>Ejemplos de daños a empresas afectadas por ciberataques y violaciones de datos</li>
                                        <li>¿Su empresa corre el riesgo de sufrir una filtración de datos?</li>
                                    </ul>

                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Procesamiento de texto'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Uso de comandos GREP, SED y AWK</li>
                                        <li>Montaje de un archivo en la caja virtual</li>
                                        <li>Montaje de una carpeta</li>
                                        <li>ORDENAR comando y tuberías para combinar varios comandos</li>
                                        <h4 className="text-xl mt-4 font-weight-bold">b Programación de tareas</h4>
                                        <li>Demonios</li>
                                        <li>Programación de tareas en Linux</li>
                                        <li>Programación de un trabajo en Linux</li>
                                        <li>Cron y Crontab</li>
                                        <li>Usando el comando AT</li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Secuencias de comandos de Shell avanzadas</h4>
                                        <li>Por que monitorear</li>
                                        <li>Monitoreo de procesos</li>
                                        <li>Top vs H Top</li>
                                        <li>Que hace PGREP</li>
                                        <li>Supervisión de archivos y carpetas</li>
                                        <li>Herramienta de monitoreo inotifywait</li>
                                        <li>Opciones de inotifywait para la supervisión de carpetas</li>
                                        <li>Eventos de una carpeta en inotify</li>
                                        <li>Comando GRATIS</li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Conectividad de base de datos</h4>
                                        <li>Instalación y configuración de MySQL</li>
                                        <li>Asegurar MySQL</li>
                                        <li>Ejecutando consultas desde la terminal</li>
                                        <li>¿Qué son las redes en Linux?</li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Redes Linux</h4>
                                        <li>¿Qué son las redes en Linux?</li>
                                        <li>¿Por qué necesitamos la creación de redes?</li>
                                        <li>Usar comandos de red</li>
                                        <li>Aprendizaje de herramientas de firewall</li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Información sobre proyectos de código abierto</h4>
                                        <li>lynis (herramienta de auditoría basada en Unix</li>
                                        <li>cazador de kits de raíz.</li>

                                    </ul>

                                </div>} />
                        </div>

                        {/*==================== h4 title ================*/}
                        <h4 className="mt-12 font-weight-bold text-lg sm:text-xl mb-3">Curso Preliminar para iniciar Cyber Security  <span className="heading-border-line"></span></h4>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Introducción a Linux'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>¿Qué es Linux? ¿Por qué Linux?</li>
                                        <li>Historia</li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Diferencia entre Linux y Windows</h4>
                                        <li>Diferencia entre Linux y Unix</li>
                                        <li>ÑU</li>
                                        <li>Uso</li>
                                        <li>Opciones de carrera</li>
                                        <li>Datos interesantes sobre Linux.</li>
                                        <li>3 ¿Por qué Linux es a prueba de virus?</li>
                                        <li>Varias distribuciones de Linux.</li>
                                        <li>Pros y contras</li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Raíz</h4>
                                        <li>Quién / por qué / qué es root</li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Comandos básicos </h4>
                                        <li>mkdir</li>
                                        <li>tocar</li>
                                        <li>ls</li>
                                        <li>pwd</li>
                                        <li>CD</li>
                                        <li>chmod</li>
                                        <li>df</li>
                                        <li>du</li>
                                        <li>dd</li>
                                        <li>agregar usuario</li>
                                        <li>clasificar</li>
                                        <li>passwd</li>
                                        <li>rm / rmdir</li>
                                        <li>fecha</li>
                                        <li>alquitrán</li>
                                        <li>gzip</li>
                                        <li>Cima</li>
                                        <h4 className="text-xl mt-4 font-weight-bold">el editor</h4>
                                        <h4 className="text-xl mt-4 font-weight-bold">a) Vi Editor </h4>
                                        <h4 className="text-xl mt-4 font-weight-bold">GNU/LINUX OS Installation</h4>
                                        <h4 className="text-xl mt-4 font-weight-bold">Basic System configuration and Administration. Instalación de
                                            OS. </h4>
                                        <h4 className="text-xl mt-4 font-weight-bold">Comprender archivos y directorios en Linux</h4>
                                        <li>Estructura y jerarquía de archivos </li>
                                        <li>Permisos de archivos </li>
                                        <li>Descripción general de LVM </li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Programadores </h4>
                                        <li>cron </li>
                                        <li>a</li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Administración de Usuario</h4>
                                        <h4 className="text-xl mt-4 font-weight-bold">Instalación de software en Linux. </h4>
                                        <li>RPM </li>
                                        <li>hacer </li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Proceso de arranque de Linux </h4>
                                        <li>Cargadores de arranque (LILO y GRUB) </li>
                                        <li>Inicialización del sistema </li>
                                        <li>inittab </li>
                                        <li>rc.sysinit </li>
                                        <li>rc</li>
                                        <h4 className="text-xl mt-4 font-weight-bold">LVM (Administrador de volumen lógico) </h4>
                                        <li>Grupos de volumen </li>
                                        <li>Volúmenes físicos y lógicos </li>
                                        <li>Cambiar el tamaño de LV, etc. </li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Cambiar el tamaño de LV, etc. </h4>
                                        <li>ruta </li>
                                        <li>ifconfig </li>
                                        <li>silbido </li>
                                        <li>Netstat </li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Instalación y desinstalación del controlador / módulo.</h4>
                                        <li>modprobe </li>
                                        <li>rmmod </li>
                                        <li>insmod </li>
                                        <li>lsmod</li>
                                        <li>modinfo</li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Monitoreo y rotación de registros </h4>
                                        <h4 className="text-xl mt-4 font-weight-bold">OpenSSH: el Secure Shell de GNU / Linux </h4>
                                        <li>ssh</li>
                                        <li>Sshd</li>
                                        <li>Scp</li>
                                        <h4 className="text-xl mt-4 font-weight-bold">sudo y su - Otorgar privilegios de superusuario a los usuarios </h4>
                                        <h4 className="text-xl mt-4 font-weight-bold">Administración de Linux. </h4>
                                        <li>Modo de usuario único </li>
                                        <li>El modo de rescate </li>
                                        <li>Tablas de IP </li>
                                        <li>Compartir archivos con SAMBA </li>
                                        <li>NFS</li>
                                        <li>Servidor de correo mediante SENDMAIL </li>
                                        <li>Instalación del servidor web (apache) </li>
                                        <li>Instalación del servidor proxy mediante SQUID. </li>
                                        <li>Cortafuegos usando iptables </li>
                                        <li>PAM (módulos de autenticación plug gable) </li>
                                        <li>Monitor de rendimiento de Linux </li>
                                        <li>Utilidad SAR. </li>
                                        <li>Monitorear la cpu usando sar </li>
                                        <li>rastrear la aplicación que causa la pérdida de memoria </li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Endurecimiento de Linux. </h4>
                                        <h4 className="text-xl mt-4 font-weight-bold">Secuencias de comandos de Linux  </h4>
                                        <h5>Introducción a las secuencias de comandos de Shell </h5>
                                        <li>¿Qué es el script de shell? </li>
                                        <li>Tipos de concha </li>
                                        <li>Crear y escribir un script de shell </li>
                                        <li>Cambiar el permiso del script de shell </li>
                                        <li>Ejecutando el guión </li>
                                        <li>Variables de entorno </li>
                                        <li>Definición de una variable local y una global </li>
                                        <li>Entrada del usuario en un script de shell </li>
                                        <h4 className="text-xl mt-4 font-weight-bold">Declaraciones y funciones condicionales y en bucle </h4>
                                        <li>¿Qué son las declaraciones condicionales? </li>
                                        <li>Sentencias IF, IF-ELSE, IF anidadas </li>
                                        <li>¿Qué son las declaraciones de bucle? </li>
                                        <li>Declaraciones WHILE, HASTA y FOR </li>
                                        <li>Usando la sentencia case… esac </li>
                                        <li>Funciones </li>

                                    </ul>

                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Introducción al Hacking Ético'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Amenazas a la seguridad de la información y vectores de ataque </li>
                                        <li>Motivos, metas y objetivos de los ataques a la seguridad de la información</li>
                                        <li>Vectores de ataque de seguridad de la información superior </li>
                                        <li>Categorías de amenazas a la seguridad de la información </li>
                                        <li>Tipo de ataques sof en un sistema </li>
                                        <li>Guerra de información </li>
                                        <li>Conceptos de piratería </li>
                                        <li>¿Qué es hackear? </li>
                                        <li>¿Quién es un hacker? </li>
                                        <li>Clases de hackers </li>
                                        <li>Fases de piratería </li>
                                        <li>Conceptos éticos de piratería </li>
                                        <li>¿Qué es Ethical Hacking? </li>
                                        <li>¿Por qué es necesario el Ethical Hacking? </li>
                                        <li>Alcance y limitación del software Ethical Hacking </li>
                                        <li>Habilidad de un hacker ético </li>
                                        <li>Controles de seguridad de la información </li>
                                        <li>Aseguramiento de la información (IA) </li>
                                        <li>Programa de gestión de seguridad de la información </li>
                                        <li>Arquitectura de seguridad de la información empresarial (EISA) </li>
                                        <li>Zonificación de seguridad de red </li>
                                        <li>Defensa en profundidad </li>
                                        <li>Políticas de seguridad de la información </li>
                                        <li>Seguridad física </li>
                                        <li>¿Qué es el riesgo? </li>
                                        <li>Modelado de amenazas </li>
                                        <li>Administracion de incidentes </li>
                                        <li>Gestión de incidentes y eventos de seguridad (SIEM) </li>
                                        <li>Análisis del comportamiento del usuario (UBA) </li>
                                        <li>Controles de seguridad de la red </li>
                                        <li>Gestión de identidades y accesos (IAM) </li>
                                        <li>Fugas, copias de seguridad y recuperación de datos </li>
                                        <li>El papel de la IA / MLinCyberSecurity </li>
                                        <li>Conceptos de pruebas de penetración </li>
                                        <li>¿Por qué pruebas de penetración? </li>
                                        <li>Auditoría de seguridad </li>
                                        <li>Evaluación de vulnerabilidad </li>
                                        <li>BlueTeaming / RedTeaming </li>
                                        <li>Tipos y fases de las pruebas de penetración </li>
                                        <li>Prueba de seguridad en gmetodología </li>
                                        <li>Leyes y estándares de seguridad de la información </li>
                                        <li>Estándar de seguridad de datos de la industria de tarjetas de pago (PCI-DSS) </li>
                                        <li>ISO / IEC27001: 2013 </li>
                                        <li>Ley de Portabilidad de Cuentas y Portabilidad de Seguros Médicos (HIPAA) </li>
                                        <li>Ley Sarbanes Oxley (SOX) )</li>
                                        <li>La Ley de Derechos de Autor del Milenio Digital (DMCA) </li>
                                        <li>Ley Federal de Gestión de la Seguridad de la Información (FISMA) </li>
                                        <li>Derecho cibernético en diferentes países </li>

                                    </ul>

                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='foot printing y reconocimiento'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Footprinting  a través de motores de búsqueda </li>
                                        <li>Footprinting  utilizando técnicas avanzadas de piratería de Google </li>
                                        <li>Recopilación de información mediante la búsqueda avanzada de Google y la búsqueda de imágenes </li>
                                        <li>Base de datos de piratería de Google </li>
                                        <li>Impresión de VoIP y VPN a través de la base de datos de piratería de Google </li>
                                        <li>Footprint a través de servicios web </li>
                                        <li>Encontrar los dominios de nivel de detención (TLD) y los subdominios de la empresa </li>
                                        <li>Encontrar la ubicación geográfica del objetivo </li>
                                        <li>Búsqueda de personas en sitios de redes sociales y servicios de búsqueda de personas </li>
                                        <li>Recopilación de información de LinkedIn </li>
                                        <li>Recopilar información de los servicios financieros </li>
                                        <li>foot print en los lugares de trabajo </li>
                                        <li>Monitorear en el objetivo usando alertas </li>
                                        <li>Recopilación de información mediante grupos, foros y blogs. </li>
                                        <li>Determinando el SO </li>
                                        <li>Impresión VoI Pand VPN Foot priting a través de SHODAN </li>
                                        <li>foot priting  a través de sitios de redes sociales </li>
                                        <li>Recopilación de información a través del ingeniero social en los sitios de redes sociales de gon </li>
                                        <li>Foot Priting del sitio web </li>
                                        <li>Reflejando todo el sitio web </li>
                                        <li>Extraer información del sitio web </li>
                                        <li>Monitoreo de páginas web para actualizaciones y cambios </li>
                                        <li>Foot priting de correo electrónico </li>
                                        <li>Seguimiento de las comunicaciones por correo electrónico </li>
                                        <li>Recopilar información del encabezado del correo electrónico </li>
                                        <li>Herramientas de seguimiento de correo electrónico </li>
                                        <li>Inteligencia competitiva </li>
                                        <li>¿Quién es foot priting ? </li>
                                        <li>¿Quién es Lookup? </li>
                                        <li>¿Quién es el análisis de resultados de búsqueda? </li>
                                        <li>¿Quién es las herramientas de búsqueda? </li>
                                        <li>Encontrar información de ubicación geográfica de IP </li>
                                        <li>Impresión de pie de DNS </li>
                                        <li>Extrayendo información de DNS </li>
                                        <li>Herramientas de interrogación de DNS </li>
                                        <li>Foot  Priting  de red </li>
                                        <li>Localice el rango de trabajo neto </li>
                                        <li>Traceroute </li>
                                        <li>Análisis y herramientas de traceroute </li>
                                        <li>Foot  Priting  a través de la ingeniería social </li>
                                        <li>Aleros cayendo </li>
                                        <li>Surf de hombro </li>
                                        <li>Dump ster buceo </li>
                                        <li>Herramientas de Foot  Priting </li>
                                        <li>Maltego </li>
                                        <li>Recon-ng </li>
                                        <li>FOCA </li>
                                        <li>Perro de reconocimiento </li>
                                        <li>Marco OSR </li>
                                        <li>Herramientas de foot priting adicionales </li>
                                        <li>Foot  Priting Contramedidas </li>
                                        <li>Prueba de pluma de Foot  Priting </li>

                                    </ul>

                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Enumeración '
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de enumeración </li>
                                        <li>¿Qué es la enumeración? </li>
                                        <li>Técnicas de enumeración </li>
                                        <li>Servicios y número del Estado del puerto </li>
                                        <li>Numeración Net BIOSE </li>
                                        <li>Herramientas de enumeración de Net BIOS </li>
                                        <li>Enumerar cuentas de usuario </li>
                                        <li>Enumeración de recursos compartidos usando Net View </li>
                                        <li>Numeración SNMPE </li>
                                        <li>Enumeración SNMP (Simple Network Management Protocol) </li>
                                        <li>Funcionamiento de SNMP </li>
                                        <li>Base de información de gestión (MIB) </li>
                                        <li>Herramientas de enumeración SNMP </li>
                                        <li>Numeración LDAPE </li>
                                        <li>Herramientas de numeración LDAPE </li>
                                        <li>Numeración NTPE </li>
                                        <li>Herramientas de numeración NTPE </li>
                                        <li>Numeración SMTP y DNSE </li>
                                        <li>Enumeración SMTP </li>
                                        <li>Herramientas de enumeración SMTP </li>
                                        <li>Enumeración DNS mediante transferencia de zona </li>
                                        <li>Otras técnicas de enumeración </li>
                                        <li>Secenumeración de IP </li>
                                        <li>Enumeración de VoIP </li>
                                        <li>Enumeración RPC </li>
                                        <li>Enumeración de usuarios de Unix / Linux </li>
                                        <li>Medidas del contador de enumeración </li>
                                        <li>Prueba de pluma de enumeración </li>
                                    </ul>

                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Escaneo de redes'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Introducción al escaneo en red </li>
                                        <li>Herramientas de escaneo: comandos Nmap, Hping2 / Hping3 y Hping </li>
                                        <li>Técnicas de escaneo </li>
                                        <li>Escaneo ICMP </li>
                                        <li>Barrido de ping </li>
                                        <li>Escaneo de eco ICMP </li>
                                        <li>Conexión TCP / escaneo completamente abierto </li>
                                        <li>Escaneo sigiloso / escaneo semiabierto </li>
                                        <li>Escaneo de bandera TCP inverso </li>
                                        <li>Escaneo de Xms </li>
                                        <li>Escaneo de sonda de bandera ACK </li>
                                        <li>Encabezado IDLE / IPID Ssan </li>
                                        <li>Escaneo UDP </li>
                                        <li>Escaneo SSDP y de listas </li>
                                        <li>Medidas del contador de escaneo de puertos </li>
                                        <li>Escaneo más allá de IDS y firewall </li>
                                        <li>Técnicas de evasión de IDS / cortafuegos </li>
                                        <li>Fragmentación de paquetes </li>
                                        <li>Enrutamiento de origen </li>
                                        <li>Señuelo de dirección IP </li>
                                        <li>Poofing de direcciones IP </li>
                                        <li>Servidores proxy </li>
                                        <li>Anonimizadores </li>
                                        <li>Agarre de pancartas </li>
                                        <li>Cómo identificar el sistema operativo del sistema de destino </li>
                                        <li>Contramedidas para agarrar pancartas </li>
                                        <li>Dibujar diagramas de red </li>
                                        <li>Dibujar diagramas de red </li>
                                        <li>herramientas de mapeo y descubrimiento de redes </li>
                                        <li>herramientas de descubrimiento de redes para móviles </li>
                                        <li>Prueba de lápiz de escaneo </li>
                                    </ul>

                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Análisis de vulnerabilidad'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de evaluación de vulnerabilidades </li>
                                        <li>¿Qué es la evaluación de la vulnerabilidad? </li>
                                        <li>Clasificación e investigación de vulnerabilidades </li>
                                        <li>Ciclo de vida de la gestión de vulnerabilidades </li>
                                        <li>Soluciones de evaluación de vulnerabilidades </li>
                                        <li>Soluciones de escaneo de vulnerabilidades </li>
                                        <li>Tipos de herramientas de evaluación de vulnerabilidades </li>
                                        <li>Elegir una herramienta de evaluación de vulnerabilidades </li>
                                        <li>Sistemas de puntuación de vulnerabilidad </li>
                                        <li>Sistema de puntuación de vulnerabilidad común (CVSS) </li>
                                        <li>Vulnerabilidades y exposiciones comunes (CVE) </li>
                                        <li>Base de datos nacional de vulnerabilidades (NVD) </li>
                                        <li>Recursos para la investigación de vulnerabilidades </li>
                                        <li>Informes de evaluación de vulnerabilidades </li>
                                        <li>Análisis del informe de escaneo de vulnerabilidades </li>
                                    </ul>

                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Piratería del sistema'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de piratería de sistemas </li>
                                        <li>Metodología de piratería CEH (CHM) </li>
                                        <li>Objetivos de piratería del sistema </li>
                                        <li>Cracking de contraseñas </li>
                                        <li>Craqueo de contraseñas </li>
                                        <li>Tipos de ataques a contraseñas </li>
                                        <li>Herramientas de recuperación de contraseña </li>
                                        <li>Salazón de contraseñas </li>
                                        <li>Herramientas para descifrar contraseñas </li>
                                        <li>Privilegios en aumento </li>
                                        <li>Técnicas de escalamiento de privilegios </li>
                                        <li>¿Cómo defenderse de la escalada de privilegios? </li>
                                        <li>Ejecución de aplicaciones </li>
                                        <li>Herramientas para ejecutar aplicaciones </li>
                                        <li>Registrador de claves </li>
                                        <li>Software espía </li>
                                        <li>Ocultar archivos </li>
                                        <li>Kits de raíces </li>
                                        <li>Flujo de datos NTFS </li>
                                        <li>¿Qué es la esteganografía? </li>
                                        <li>Cubriendo pistas </li>
                                        <li>Desactivación de la auditoría: Pol de auditoría </li>
                                        <li>Borrado de registros </li>
                                        <li>Borrar pistas en línea </li>
                                        <li>Cubriendo las pistas de los proyectiles BASH </li>
                                        <li>Cubriendo pistas en la red y el sistema operativo </li>
                                        <li>Herramientas para cubrir pistas </li>
                                    </ul>

                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Amenazas de malware'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de malware </li>
                                        <li>Introducción al malware </li>
                                        <li>Componentes de malware </li>
                                        <li>Conceptos de troyanos </li>
                                        <li>¿Qué es un troyano y sus tipos? </li>
                                        <li>Kit de construcción de caballo de Troya </li>
                                        <li>Envoltorios </li>
                                        <li>Criptas </li>
                                        <li>Evadir técnicas anti-virus </li>
                                        <li>Conceptos de virus y gusanos </li>
                                        <li>Introducción a los virus </li>
                                        <li>Etapas de la vida del virus </li>
                                        <li>Diferentes tipos de virus. </li>
                                        <li>Engaños de virus </li>
                                        <li>Antivirus falsos </li>
                                        <li>Secuestro de datos </li>
                                        <li>Creando virus </li>
                                        <li>Gusanos informáticos </li>
                                        <li>Fabricantes de gusanos </li>
                                        <li>Análisis de malware </li>
                                        <li>Introducción al análisis de malware </li>
                                        <li>¿Qué es Sheep Dip Computer? </li>
                                        <li>Sistemas de sensores antivirus </li>
                                        <li>Procedimiento de análisis de malware </li>
                                        <li>Contramedidas </li>
                                        <li>Contramedidas troyanas </li>
                                        <li>Contramedidas de puerta trasera </li>
                                        <li>Medidas para contrarrestar virus y gusanos </li>
                                        <li>Software anti-malware </li>
                                        <li>Software anti-troyano </li>
                                        <li>Software antivirus </li>
                                        <li>Pruebas de penetración de malware </li>

                                    </ul>

                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Olfateando '
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de olfateo </li>
                                        <li>Detección de redes </li>
                                        <li>Tipos de olfateo </li>
                                        <li>Analizadores de protocolos de hardware </li>
                                        <li>Puerto SPAN </li>
                                        <li>Golpeteo de cables </li>
                                        <li>Interceptación legal </li>
                                        <li>Técnica de olfateo </li>
                                        <li>Ataques MAC </li>
                                        <li>Ataques DHCP </li>
                                        <li>Envenenamiento por ARP </li>
                                        <li>Ataques de suplantación </li>
                                        <li>Envenenamiento por DNS </li>
                                        <li>Herramientas de olfateo </li>
                                        <li>Tiburón de alambre </li>
                                        <li>Filtros de tiburón de alambre </li>
                                        <li>Herramientas de olfateo </li>
                                        <li>Herramientas de detección de paquetes para dispositivos móviles </li>
                                        <li>Contramedidas </li>
                                        <li>Cómo defenderse del olfateo </li>
                                        <li>Técnicas de detección de olfateo </li>
                                        <li>Cómo detectar el olfateo </li>
                                        <li>Herramientas de detección promiscuas </li>
                                        <li>Prueba de penetración por olfateo </li>
                                    </ul>

                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Ingeniería social'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de ingeniería social </li>
                                        <li>¿Qué es la ingeniería social? </li>
                                        <li>Fase de un ataque de ingeniería social </li>
                                        <li>Técnicas de ingeniería social </li>
                                        <li>Tipos de ingeniería social </li>
                                        <li>Ingeniería social basada en humanos </li>
                                        <li>Ingeniería social basada en computadora </li>
                                        <li>Ingeniería social basada en dispositivos móviles </li>
                                        <li>Amenazas internas </li>
                                        <li>Amenaza interna / ataque interno </li>
                                        <li>Tipos de amenazas internas </li>
                                        <li>Ingeniería social a través de la suplantación de identidad en sitios de redes sociales </li>
                                        <li>Amenazas de las redes sociales a las redes corporativas </li>
                                        <li>El robo de identidad </li>
                                        <li>Contramedidas </li>
                                        <li>Contramedidas de ingeniería social </li>
                                        <li>Contramedidas contra amenazas internas </li>
                                        <li>Contramedidas contra el robo de identidad </li>
                                        <li>Detectar correos electrónicos de phishing </li>
                                        <li>Barra de herramientas anti-phishing </li>
                                        <li>Objetivos comunes de ingeniería social y estrategias de defensa </li>
                                        <li>Prueba de pluma de ingeniería social </li>
                                        <li>Herramientas de prueba de pluma de ingeniería social </li>
                                    </ul>

                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Negación de servicio'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos DoS / DDoS </li>
                                        <li>¿Qué es un ataque de denegación de servicio? </li>
                                        <li>¿Qué es un ataque distribuido de denegación de servicio? </li>
                                        <li>Técnicas de ataque DoS / DDoS </li>
                                        <li>Categorías básicas de vectores de ataque DoS / DDoS </li>
                                        <li>Ataque de inundación UDP, ICMP y SYN </li>
                                        <li>Ping de muerte y ataque de pitufo </li>
                                        <li>Ataque de fragmentación </li>
                                        <li>HTTP GET / POST y ataques lentos de loris </li>
                                        <li>Ataque multivectorial </li>
                                        <li>Ataques de igual a igual </li>
                                        <li>Ataque permanente de denegación de servicio </li>
                                        <li>Denegación de servicio de flexión distribuida (DRDoS) </li>
                                        <li>Botnets </li>
                                        <li>Ciberdelito organizado: organigrama </li>
                                        <li>Sistema botneteco </li>
                                        <li>Troyanos de botnet </li>
                                        <li>Estudio de caso de DDoS </li>
                                        <li>Ataque DDoS </li>
                                        <li>Los piratas informáticos anuncian enlaces para descargar Botnet </li>
                                        <li>Uso de dispositivos móviles como botnets para lanzar ataques DDoS </li>
                                        <li>Estudio de caso de DDoS: Dyn DDoS Attack </li>
                                        <li>Herramientas de ataque DoS / DDoS </li>
                                        <li>Herramienta de ataque DoS y DDoS para dispositivos móviles </li>
                                        <li>Contramedidas </li>
                                        <li>Técnicas de detección </li>
                                        <li>Estrategias de contramedida DoS / DDoS </li>
                                        <li>Medidas contra los ataques DDoS </li>
                                        <li>Técnicas para defenderse de las botnets </li>
                                        <li>Protección DoS / DDoS a nivel de ISP </li>
                                        <li>Herramientas de protección DoS / DDoS </li>
                                        <li>Dispositivos avanzados de protección DDoS </li>
                                        <li>Herramientas de protección DoS / DDoS </li>
                                        <li>Pruebas de penetración DoS / DDoS </li>
                                        <li>Prueba de penetración de ataque de denegación de servicio (DoS) </li>
                                    </ul>

                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Secuestro de sesión'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de secuestro de sesiones </li>
                                        <li>¿Qué es el secuestro de sesiones? </li>
                                        <li>Proceso de secuestro de sesión </li>
                                        <li>Tipos de secuestro de sesiones </li>
                                        <li>Análisis de paquetes de un secuestro de sesión local </li>
                                        <li>Sesión hi jacking en modelo OSI </li>
                                        <li>Spoofing vs secuestro </li>
                                        <li>Secuestro de sesión a nivel de aplicación </li>
                                        <li>Comprometer los ID de sesión usando sniffing y prediciendo el token de sesión </li>
                                        <li>Ataque man-in-the-middle </li>
                                        <li>Ataque de hombre en el navegador </li>
                                        <li>Ataques del lado del cliente </li>
                                        <li>Ataques del lado del cliente: </li>
                                        <li>Ataque de secuencia de comandos entre sitios </li>
                                        <li>Comprometer ID de sesión </li>
                                        <li>Fijación de sesión </li>
                                        <li>Secuestro de sesión usando servidores proxy </li>
                                        <li>Ataque del crimen </li>
                                        <li>ataque prohibido </li>
                                        <li>Secuestro de sesión a nivel de red </li>
                                        <li>Secuestro de TCP / IP </li>
                                        <li>Suplantación de IP: paquetes enrutados de origen </li>
                                        <li>Secuestro de RST </li>
                                        <li>Secuestro a ciegas </li>
                                        <li>Secuestro de UDP </li>
                                        <li>Ataque MiTM usando para ged ICMP y ARP spoofing </li>
                                        <li>Herramientas de secuestro de sesiones </li>
                                        <li>Herramientas de secuestro de sesiones </li>
                                        <li>Herramientas de secuestro de sesiones para dispositivos móviles </li>
                                        <li>Contramedidas </li>
                                        <li>Métodos de detección de secuestro de sesiones </li>
                                        <li>Protección contra el secuestro de sesiones </li>
                                        <li>Herramientas de prevención y detección de secuestro de sesiones </li>
                                        <li>IPSec </li>
                                        <li>Pruebas de penetración </li>
                                    </ul>

                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Evadir IDS, firewalls y Honeypots'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de IDS, firewall y Honeypot </li>
                                        <li>Sistema de detección de intrusiones (IDS) </li>
                                        <li>Cortafuegos </li>
                                        <li>Tarro de miel </li>
                                        <li>Soluciones IDS, Firewall y Honeypot </li>
                                        <li>Herramienta de detección de intrusos </li>
                                        <li>Cortafuegos y herramientas honeypot </li>
                                        <li>Evadir IDS </li>
                                        <li>Herramientas y técnicas de evasión de IDS / firewall </li>
                                        <li>Herramientas de generación de fragmentos de paquetes </li>
                                        <li>Detectando Honeypots </li>
                                        <li>Detectando y derrotando honeypots </li>
                                        <li>Herramienta de detección de Honeypot: Send-Safe Honeypot Hunter </li>
                                        <li>Medidas contra la evasión de IDS / Firewall </li>
                                        <li>Cómo defenderse de la evasión de IDS </li>
                                        <li>Cómo defenderse de la evasión del firewall </li>
                                        <li>Prueba de penetración de firewall / IDS </li>
                                    </ul>

                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Hackear servidores web'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de servidor web </li>
                                        <li>Operaciones del servidor web </li>
                                        <li>Arquitectura de servidor web de código abierto </li>
                                        <li>Arquitectura del servidor web IIS </li>
                                        <li>Problema de seguridad del servidor web </li>
                                        <li>Ataques al servidor web </li>
                                        <li>Ataques DoS / DDoS </li>
                                        <li>Secuestro del servidor DNS </li>
                                        <li>Ataque de amplificación de DNS </li>
                                        <li>Ataques transversales de directorio </li>
                                        <li>Ataque de hombre en el medio / olfateo </li>
                                        <li>Ataques de phishing </li>
                                        <li>Desfiguración del sitio web </li>
                                        <li>Error de concepción del servidor web </li>
                                        <li>Ataque de división de respuestas HTTP </li>
                                        <li>Ataque de envenenamiento de caché web </li>
                                        <li>Ataque de fuerza bruta SSH </li>
                                        <li>Descifrado de la contraseña del servidor web </li>
                                        <li>Ataques a aplicaciones web </li>
                                        <li>Metodología de ataque al servidor web </li>
                                        <li>Recopilación de información </li>
                                        <li>Foot Printing de servidor web / agarre de pancartas </li>
                                        <li>Duplicación de sitios web </li>
                                        <li>Escaneo de vulnerabilidad de vulnerabilidad </li>
                                        <li>Secuestro de sesión </li>
                                        <li>Hackeo de contraseñas de servidores web </li>
                                        <li>Usando la aplicación serverasa proxy </li>
                                        <li>Herramientas de ataque al servidor web </li>
                                        <li>Meta sploit </li>
                                        <li>Herramientas de ataque al servidor web </li>
                                        <li>Contramedidas </li>
                                        <li>Servidores web en un segmento de seguridad de servidor seguro separado </li>
                                        <li>Contramedidas </li>
                                        <li>Detectar intentos de piratería del servidor web </li>
                                        <li>Defiéndase de los ataques al servidor web </li>
                                        <li>Respuestas HTTP divididas </li>
                                        <li>Envenenamiento de caché web </li>
                                        <li>Secuestro de DNS </li>
                                        <li>Gestión de parches </li>
                                        <li>¿Qué es la gestión de parches? </li>
                                        <li>Parches y revisiones </li>
                                        <li>Instalación de parche </li>
                                        <li>Herramientas de gestión de parches </li>
                                        <li>Herramientas de seguridad del servidor web </li>
                                        <li>Escáneres de seguridad de aplicaciones web </li>
                                        <li>Escáneres de seguridad de servidor web </li>
                                        <li>Herramientas de seguridad del servidor web </li>
                                        <li>Prueba de la pluma del servidor web </li>
                                        <li>Prueba de penetración del servidor web </li>
                                        <li>Herramientas de pentesting de servidor web </li>
                                    </ul>

                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Hackear servidores web'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de aplicaciones web </li>
                                        <li>Introducción a las aplicaciones web </li>
                                        <li>Arquitectura de aplicaciones web </li>
                                        <li>Aplicaciones web2.0 </li>
                                        <li>Pila de habilidades de vulnerabilidad </li>
                                        <li>Amenazas de aplicaciones web </li>
                                        <li>Los 10 principales riesgos de seguridad de aplicaciones de OWASP </li>
                                        <li>Metodología de pirateo de aplicaciones web </li>
                                        <li>Infraestructura web Foot Print </li>
                                        <li>Atacar servidores web </li>
                                        <li>Analizar aplicaciones web </li>
                                        <li>Omitir los controles del lado del cliente </li>
                                        <li>Mecanismo de autenticación de ataques </li>
                                        <li>Esquemas de autorización de ataques </li>
                                        <li>Controles de acceso de ataque </li>
                                        <li>Mecanismo de gestión de sesiones de ataque </li>
                                        <li>Realizar ataques de validación de inyección / entrada </li>
                                        <li>Atacar fallas en la lógica de la aplicación </li>
                                        <li>Atacar la conectividad de la base de datos </li>
                                        <li>Ataque al cliente de la aplicación web </li>
                                        <li>Atacar servicios web </li>
                                        <li>Herramientas de piratería de aplicaciones web </li>
                                        <li>Contramedidas </li>
                                        <li>Prueba de fuzz de aplicaciones web </li>
                                        <li>Revisión del código fuente </li>
                                        <li>Esquemas de codificación </li>
                                        <li>Defiéndete de los ataques de inyección</li>
                                        <li>Medidas para contrarrestar ataques a aplicaciones web </li>
                                        <li>Defiéndase de las aplicaciones web nattacks </li>
                                        <li>Herramientas de prueba de seguridad de aplicaciones web </li>
                                        <li>Herramientas de prueba de seguridad de aplicaciones web </li>
                                        <li>Firewall de aplicaciones web </li>
                                        <li>Prueba de lápiz de aplicaciones web </li>
                                        <li>Prueba de lápiz de aplicación web </li>
                                        <li>Marco de prueba de lápiz de aplicación web </li>
                                    </ul>

                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Inyección SQL'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de inyección SQL </li>
                                        <li>¿Qué es la inyección SQL? </li>
                                        <li>Inyección SQL y tecnologías del lado del servidor </li>
                                        <li>Solicitud HTTP POST </li>
                                        <li>Consulta SQL normal </li>
                                        <li>Consulta de inyección SQL </li>
                                        <li>Análisis de código </li>
                                        <li>Tipos de inyección SQL </li>
                                        <li>Metodología de inyección SQL </li>
                                        <li>Herramientas de inyección SQL </li>
                                        <li>Inyector de potencia SQL y mapa SQL </li>
                                        <li>La inyección de mole y SQL </li>
                                        <li>Herramientas de inyección SQL para smobile </li>
                                        <li>Técnicas de evasión: </li>
                                        <li>Evadir IDS </li>
                                        <li>Tipos de técnicas de evasión de firmas: </li>
                                        <li>Comentario en línea </li>
                                        <li>Codificación Charen </li>
                                        <li>Concatenación de cadenas </li>
                                        <li>Códigos ofuscados </li>
                                        <li>Manipular espacios en blanco </li>
                                        <li>Codificación hexagonal </li>
                                        <li>Partidos sofisticados </li>
                                        <li>Codificación de URL </li>
                                        <li>Byte nulo </li>
                                        <li>Variación de caso </li>
                                        <li>Declarar variable </li>
                                        <li>Fragmentación de la propiedad intelectual </li>
                                        <li>Contramedidas </li>
                                        <li>Defiéndase de los ataques de inyección SQL </li>
                                        <li>Herramientas de detección de inyección SQL </li>
                                    </ul>

                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Hackear redes inalámbricas'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos inalámbricos </li>
                                        <li>Terminologías, redes y estándares inalámbricos </li>
                                        <li>Identificador de conjunto de servicios (SSID) </li>
                                        <li>Modos de autenticación Wi-Fi </li>
                                        <li>Proceso de autenticación de Wi-Fi mediante un servidor de autenticación centralizado </li>
                                        <li>Tipos de antenas inalámbricas </li>
                                        <li>Encriptación inalámbrica </li>
                                        <li>Tipos de cifrado inalámbrico </li>
                                        <li>WEP frente a WPA frente a WPA2 </li>
                                        <li>Problemas de WEP </li>
                                        <li>Vectores de inicialización débiles (IV) </li>
                                        <li>Amenazas inalámbricas </li>
                                        <li>Ataque de punto de acceso no autorizado </li>
                                        <li>Asociación errónea de clientes </li>
                                        <li>Ataque de punto de acceso calculado erróneamente </li>
                                        <li>Asociación no autorizada </li>
                                        <li>Ataque de conexión ad-hoc </li>
                                        <li>Ataque de punto de acceso de bote de miel </li>
                                        <li>Suplantación de APMAC </li>
                                        <li>Ataque de denegación de servicio </li>
                                        <li>Ataque de reinstalación de llaves (KRACK) </li>
                                        <li>Ataque de señal de interferencia </li>
                                        <li>Metodología de piratería inalámbrica </li>
                                        <li>Descubrimiento Wi-Fi </li>
                                        <li>Mapeo GPS </li>
                                        <li>Análisis de tráfico inalámbrico </li>
                                        <li>Lanzar ataques inalámbricos </li>
                                        <li>Criptografía CrackWi-Fien </li>
                                        <li>Herramientas de piratería inalámbricas </li>
                                        <li>Herramientas de craqueo WEP / WPA </li>
                                        <li>Herramienta de craqueo WEP / WPA para dispositivos móviles </li>
                                        <li>Wi-Fisniffer </li>
                                        <li>Herramientas de analizador de tráfico Wifi </li>
                                        <li>Otras herramientas de piratería inalámbricas </li>
                                        <li>Hackeo de Bluetooth </li>
                                        <li>Pila de Bluetooth </li>
                                        <li>Hackeo de bluetooth </li>
                                        <li>Amenazas de bluetooth </li>
                                        <li>Cómo convertir a Blue Jack en una víctima </li>
                                        <li>Herramientas de pirateo de Bluetooth </li>
                                        <li>Contramedidas </li>
                                        <li>Capas de seguridad inalámbrica </li>
                                        <li>Cómo defenderse del craqueo de WPA / WPA2, ataques KRACK, ataques inalámbricos y piratería de bluetooth </li>
                                        <li>Cómo detectar y bloquear AP maliciosos </li>
                                        <li>Herramientas de seguridad inalámbrica </li>
                                        <li>Sistemas inalámbricos de prevención de intrusiones </li>
                                        <li>Implementación de IPS inalámbrico </li>
                                        <li>Herramientas de auditoría de seguridad Wi-Fi </li>
                                        <li>Herramientas de planificación predictiva de Wi-Fi </li>
                                        <li>Herramientas de escaneo de vulnerabilidad de Wi-Fi </li>
                                        <li>Herramientas de seguridad bluetooth </li>
                                        <li>Herramientas de seguridad Wi-Fi para dispositivos móviles </li>
                                        <li>Prueba de lápiz inalámbrico </li>
                                        <li>Prueba de penetración inalámbrica </li>
                                        <li>Marco de prueba de penetración inalámbrica </li>
                                    </ul>

                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Hackear plataformas móviles'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Vectores de ataque de plataforma móvil </li>
                                        <li>Vulnerabilidades en el entorno empresarial móvil </li>
                                        <li>Los 10 principales riesgos móviles de OWASP </li>
                                        <li>Anatomía de un ataque móvil </li>
                                        <li>Vectores de mobile attack </li>
                                        <li>Vulnerabilidades de la plataforma móvil </li>
                                        <li>Problemas de seguridad que surgen de las tiendas de aplicaciones </li>
                                        <li>Aplicaciones y problemas de boxeo </li>
                                        <li>Spam móvil </li>
                                        <li>Ataque de phishing por SMS (SMiShing) </li>
                                        <li>Hackear el sistema operativo Android </li>
                                        <li>Sistema operativo Android y enraizamiento </li>
                                        <li>Bloquear el acceso a Wi-Fi mediante Net Cut </li>
                                        <li>Hackear con z ANTI </li>
                                        <li>Hackear la red usando Network Spoofer </li>
                                        <li>Lanzamiento del ataque DdoS usando Low Orbit Ion Cannon (LOIC) </li>
                                        <li>Realización de sesión hi jacking usando Droid Sheep </li>
                                        <li>Hackear con Orbot Proxy </li>
                                        <li>Sniffer basado en Android </li>
                                        <li>Troyanos de Android </li>
                                        <li>Asegurar dispositivos Android </li>
                                        <li>Herramientas de seguridad de Android </li>
                                        <li>Herramientas de seguimiento de dispositivos Android </li>
                                        <li>Hackear iOS </li>
                                        <li>IOS de Apple </li>
                                        <li>IOS para romper la cárcel </li>
                                        <li>troyanos de iOS </li>
                                        <li>Directrices para proteger los dispositivos iOS </li>
                                        <li>Herramientas de seguimiento y seguridad de dispositivos iOS </li>
                                        <li>Spyware móvil </li>
                                        <li>mSpy </li>
                                        <li>Gestión de dispositivos móviles </li>
                                        <li>Gestión de dispositivos móviles (MDM) </li>
                                        <li>Soluciones MDM </li>
                                        <li>Traiga su propio dispositivo (BYOD) </li>
                                        <li>Pautas y herramientas de seguridad móvil </li>
                                        <li>Directrices generales para la seguridad de la plataforma móvil </li>
                                        <li>Directrices de seguridad de dispositivos móviles para el administrador </li>
                                        <li>Medidas contra el phishing por SMS </li>
                                        <li>Herramientas de protección móvil </li>
                                        <li>Anti-spyware móvil </li>
                                        <li>Prueba de lápiz móvil </li>
                                        <li>Prueba de lápiz de teléfono Android, </li>
                                        <li>Prueba de lápiz de iPhone, </li>
                                        <li>Kit de herramientas de prueba de lápiz móvil: Hackode </li>
                                    </ul>

                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Hacking de IoT'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de IoT </li>
                                        <li>¿Qué es IoT? </li>
                                        <li>¿Cómo funciona IoT? </li>
                                        <li>Arquitectura de IoT </li>
                                        <li>Las aplicaciones de IoT son como dispositivos </li>
                                        <li>Tecnologías y protocolos de IoT </li>
                                        <li>Modelos de comunicación de IoT </li>
                                        <li>Desafíos de IoT </li>
                                        <li>Amenaza vs oportunidad </li>
                                        <li>Ataques de IoT </li>
                                        <li>Problemas de seguridad de IoT </li>
                                        <li>Las 10 principales vulnerabilidades y obstáculos de IoT de OWASP </li>
                                        <li>Áreas de superficie de ataque de IoT </li>
                                        <li>Amenazas de IoT </li>
                                        <li>Hackear dispositivos de IoT </li>
                                        <li>Ataques de IoT </li>
                                        <li>Estudio de caso: Dyn Attack </li>
                                        <li>Metodología de piratería de IoT </li>
                                        <li>¿Qué es la piratería de dispositivos IoT? </li>
                                        <li>Metodología de piratería de IoT </li>
                                        <li>Herramientas de piratería de IoT </li>
                                        <li>Herramientas de recopilación de información </li>
                                        <li>Herramientas de olfateo </li>
                                        <li>Herramientas de escaneo de vulnerabilidad </li>
                                        <li>Cómo contrarrestar las medidas de piratería </li>
                                        <li>Cómo defenderse de la piratería de IoT </li>
                                        <li>Directrices generales para empresas fabricantes de dispositivos IoT </li>
                                        <li>Las 10 mejores soluciones de vulnerabilidades de IoT de OWASP </li>
                                        <li>Consideraciones de seguridad del marco de IoT </li>
                                        <li>Herramientas de seguridad de IoT </li>
                                        <li>Pruebas de penetración de IoT </li>
                                    </ul>

                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Computación en la nube'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de computación en la nube </li>
                                        <li>Introducción a la computación en la nube </li>
                                        <li>Separación de responsabilidades en la nube </li>
                                        <li>Modelos de implementación en la nube </li>
                                        <li>Arquitectura de referencia de implementación en la nube de NIST </li>
                                        <li>Beneficios de la computación en la nube </li>
                                        <li>Virtualización </li>
                                        <li>Amenazas de la computación en la nube </li>
                                        <li>Ataques de computación en la nube </li>
                                        <li>Servicio hijacking mediante ataques de ingeniería social </li>
                                        <li>Servicio hijacking mediante rastreo de red </li>
                                        <li>Sesión hi jacking usando ataque XSS </li>
                                        <li>Sesión hi jacking usando sesión de equitación </li>
                                        <li>Ataques al sistema de nombres de dominio (DNS) </li>
                                        <li>El canal lateral ataca la brecha de VM entre invitados </li>
                                        <li>Ataques de inyección SQL </li>
                                        <li>Ataques de alisis de criptanos </li>
                                        <li>Ataque envolvente </li>
                                        <li>Ataques DoS y DDoS </li>
                                        <li>Ataque Man-in-the-Cloud </li>
                                        <li>Seguridad en la Nube </li>
                                        <li>Capas de control de seguridad en la nube </li>
                                        <li>Consideraciones de seguridad de la computación en la nube </li>
                                        <li>Colocación de controles de seguridad en la nube </li>
                                        <li>Mejores prácticas para proteger la nube </li>
                                        <li>Recomendaciones de NIST para seguridad en la nube </li>
                                        <li>Lista de verificación de cumplimiento de la seguridad en la nube de la organización / proveedor </li>
                                        <li>Herramientas de seguridad en la nube </li>
                                        <li>Pruebas de penetración en la nube </li>
                                        <li>¿Qué es la prueba de pluma en la nube? </li>
                                        <li>Consideraciones clave para las pruebas de lápiz en la nube </li>
                                        <li>Recomendaciones para las pruebas en la nube </li>
                                    </ul>

                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Criptografía '
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Conceptos de criptografía </li>
                                        <li>Criptografía </li>
                                        <li>Tipos de criptografía </li>
                                        <li>Acceso gubernamental a las llaves (GAK) </li>
                                        <li>Algoritmos de cifrado </li>
                                        <li>Cifrados </li>
                                        <li>Estándar de cifrado de datos (DES) </li>
                                        <li>Estándar de cifrado avanzado (AES) </li>
                                        <li>Algoritmos RC4, RC5 y RC6 </li>
                                        <li>Dos peces </li>
                                        <li>El DSA y los esquemas de firma relacionados </li>
                                        <li>Rivest Shamir Adleman (RSA) </li>
                                        <li>Diffie-Hellman </li>
                                        <li>Funciones de resumen de mensajes (One-WayHash) </li>
                                        <li>Herramientas de criptografía </li>
                                        <li>Herramientas de criptografía </li>
                                        <li>Herramientas de criptografía </li>
                                        <li>Herramientas de criptografía para dispositivos móviles </li>
                                        <li>Infraestructura de clave pública (PKI) </li>
                                        <li>Infraestructura de clave pública (PKI) </li>
                                        <li>Autoridades de certificación </li>
                                        <li>Certificado firmado (CA) frente a certificado autofirmado </li>
                                        <li>Cifrado de correo electrónico </li>
                                        <li>Firma digital </li>
                                        <li>Capa de sockets seguros (SSL) </li>
                                        <li>Seguridad de la capa de transporte (TLS) </li>
                                        <li>Kit de herramientas de criptografía </li>
                                        <li>Privacidad bastante buena (PGP) </li>
                                        <li>Cifrado de disco </li>
                                        <li>Cifrado de disco </li>
                                        <li>Herramientas de cifrado de disco </li>
                                        <li>Criptoanálisis </li>
                                        <li>Métodos de criptoanálisis </li>
                                        <li>Metodologías de ruptura de código </li>
                                        <li>Ataques de criptografía </li>
                                        <li>Herramientas de descifrado MD5 en línea </li>
                                        <li>Contramedidas: cómo defenderse de los ataques criptográficos </li>
                                    </ul>

                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Especialización dual.'
                                detail1={<div className="accord_body_content">
                                    <ul className='list-disc pl-6 text-base'>
                                        <li>Módulo CompTIA Security + 601 </li>
                                        <li>Módulo CISSP </li>
                                        <li>Módulo CISM </li>
                                    </ul>

                                </div>} />
                        </div>

                    </div>

                </div>
            </div>

            <Capstone
                capstitlem="Proyectos"
                capstitlem2="Capstone"
                capstitlem3='Después de completar este curso, podrá evaluar sus conocimientos y habilidades prácticos y teóricos durante el proyecto final.'
                capstitlecurso="empty"
                capscienciaimg="empty"

                title1='Sistema de detección de intrusiones basado en red (NIDS)'
                title2='Sistema de detección de intrusiones basado en host (HIDS)'
                title3='Honey pot'
                title4='Memoria Forense'
                title5='Gestión segura de inventarios'
                title6='Herramienta de prueba del protocolo de comunicación de aplicaciones'
                title7='Control de aplicaciones'
                title8='Control del dispositiv'
            />

            <div className="why-pgpedu">
                <Careerera 
                curso="empty" cursoval="500" lomejores='Inscríbase en el proveedor de cursos educativos en línea número uno de la India.' cursotitle3='EXPERTO EN LA INDUSTRIA' cursotitle4="FACULTADES EXPERTAS" />
            </div>


            {/* <Profile profcurso="empty" title="Perfil de lote de ciencia de datos"
            /> */}

            <CareerAssistance
                title='Asistencia'
                titlesub='Profesional'
                titleheading='Aproveche las asociaciones de Careerera con las principales empresas de TI de la India.'
                box1='Acceso a oportunidades con empresas líderes'
                box2='Talleres sobre revisión de currículum y preparación de entrevistas'
                box3='Orientación profesional y tutoría de Careerera y líderes de la industria' />


            <Light
                image={rolesoffer}
                lightprofcurso="empty"
                lightseguridad="empty"
                ltitle='Tendencias'
                ltitlesub='salariales'

                seguridadtitle1='200+'
                seguridadpara1='Empresas Globales'

                seguridadtitle2='Con 2 años de experiencia -'
                seguridadpara2='Obtienes hasta 15 LPA.'

                seguridadtitle3='Con 2 a 3 años de experiencia -'
                seguridadpara3='Obtienes hasta 20 LPA.'

                seguridadtitle4='Con 5 a 8 años de experiencia -'
                seguridadpara4='Obtienes hasta 35 - 40 LPA.'
            />


            <UserformsApplication
                titlenues='Socios'
                subtitlenues='de contratación'
                titlenuesheading='Le aseguramos asistencia laboral al final del programa.'
                customlizeall="empty"
                customliz1='Proceso de'
                customliz2='solicitud'
                customliz3='Inscríbase en el programa con un simple formulario en línea.'
                customliz4='Solicite completando un simple formulario de solicitud en línea'
                customliz5='El comité de admisiones revisará y preseleccionará'
                customliz6='Los candidatos preseleccionados deben presentarse a una prueba de aptitud en línea'
                customliz7='Convocatoria de proyección con Alumni / Profesorado'
            />


            <Sign />
            <Faq
                faqcurso="empty"
                subfaqcurso='Obtenga las respuestas a sus preguntas aquí.'
                ques1='P1 : ¿Qué es la seguridad cibernética?'
                ans1='<div className="accord_body_content">
   <p>R: La ciberseguridad consiste en tecnologías, procesos y controles que han sido diseñados para proteger a las empresas y sus sistemas, redes, dispositivos y datos de ciberataques. La ciberseguridad tiene como objetivo proteger todos los sistemas informáticos de ser gravemente dañados o dejar a la víctima con acceso no / limitado a sus archivos confidenciales.</p>
</div>'

                ques2='P2 : ¿Qué certificados se necesitan para la ciberseguridad?'
                ans2='<div className="accord_body_content">
   <p>R: Certified Ethical Hacker (CEH) 2. CompTIA Security+ 3. Certified Information System Security Professional (CISSP) 4. Certified Information Security Manager (CISM) 5. Certified Information Systems Auditor (CISA) 6. NIST Cybersecurity Framework (NCSF) 7. Certified Cloud Security Professional (CCSP) 8. Computer Hacking Forensic Investigator (CHFI) 9. Cisco Certified Network Associate (CCNA) Security   </p>
</div>'

                ques3='P3 : ¿Es la ciberseguridad una buena carrera?'
                ans3='<div className="accord_body_content">
   <p>R: Bajo desempleo: uno de los mayores beneficios de ingresar a la ciberseguridad en este momento es que hay una gran demanda. Salario: debido a una demanda tan alta y una oferta relativamente baja de mano de obra calificada, la seguridad cibernética tiene rangos salariales bastante buenos. el mundo en el que a menudo puedes trabajar desde casa. Educación y certificación: afortunadamente, no necesita un título en ciberseguridad para ingresar al campo. Esto puede ser un gran obstáculo para algunas carreras profesionales, como ser abogado o médico, donde necesita invertir una cantidad significativa de años en educación formal para ingresar a la industria. La ciberseguridad, ya que la industria en general tiene una perspectiva profesional muy prometedora. Tiene un bajo nivel de desempleo y, de hecho, muchos países tienen un déficit de empleados. Esto significa que si está calificado, puede esperar no quedarse nunca desempleado durante un período prolongado como profesional de la ciberseguridad. Además, el salario es más alto que el promedio, lo que es una buena ventaja. En general, es una elección de carrera bastante sólida, pero tiene sus inconvenientes como cualquier otra cosa. Aquí discutiré por qué la ciberseguridad puede o no ser una buena opción profesional para usted.</p>
</div>'

                ques4='P4 : ¿Qué tan difícil es la cibersegur'
                ans4='<div className="accord_body_content">
   <p>R: Las habilidades técnicas de ciberseguridad son progresivamente desafiantes. Además de una rápida tasa de cambio, la ciberseguridad es una disciplina que es progresivamente desafiante, lo que significa que las clases se vuelven técnicamente más complejas a medida que avanzas en el programa.</p>
</div>'

                ques5='P5 : ¿Los trabajos de ciberseguridad pagan bien?'
                ans5='<div className="accord_body_content">
   <p>R: El salario promedio de ciberseguridad para este puesto cae entre $ 90,000 y $ 160,000, y valen cada centavo. Estos profesionales de la seguridad ayudan a crear, planificar y llevar a cabo medidas de seguridad para mantener su infraestructura segura.   Después de completar el curso, ¿cuáles son las opciones de carrera disponibles en el mercado?</p>
   <ul className="faq_ul_list">
      <li>Consultores de seguridad cibernética </li>
      <li>Analista de seguridad cibernética </li>
      <li>Profesional de seguridad de sistemas y redes </li>
      <li>Oficial de seguridad de TI </li>
      <li>Analista de infraestructura de TI </li>
      <li>Analista de calidad y seguridad</li>
   </ul>
</div>'

                ques6='P6 : ¿Qué pasa si me pierdo la sesión?'
                ans6='<div className="accord_body_content">
   <p>R: En caso de que el alumno se pierda la sesión en directo, podrá ver la sesión grabada en el portal LMS - Learning System Management.</p>
</div>'

                ques7='P7 : ¿Recibo asistencia 24 * 7 de Careerera?'
                ans7='<div className="accord_body_content">
   <p>R: Sí, puede obtener ayuda. Es la asistencia del portal 24 * 7 que le ayuda a despejar sus dudas y todos los problemas emergentes relacionados con la certificación, las tarifas y otras consultas sobre el curso.</p>
</div>'

                ques8='P8 : ¿Es posible obtener capacitación desde mi ubicación?'
                ans8='<div className="accord_body_content">
   <p>R: Sí, es posible. Este es un curso global y puede ser accedido por cualquier aspirante desde la comodidad de su posición. El curso o la certificación se puede tomar desde cualquier parte del mundo, ya que es un curso en línea. Las clases se llevan a cabo en un aula limitada que proporciona mejores perspectivas para el aprendizaje en línea. Los entrenadores pueden aprender mucho de las conferencias en vivo. También pueden volver a visitar las sesiones grabadas una vez que sean admitidos en el curso</p>
</div>'

                ques9='P9 : ¿Cuál es el futuro de la ciberseguridad?'
                ans9='<div className="accord_body_content">
   <p>La industria de la seguridad cibernética se está desarrollando más allá de su alcance y el avance de la tecnología impulsará el crecimiento en este sector. En estos días, las organizaciones están en extrema necesidad de expertos en seguridad cibernética que les proporcionarán protección contra los ciberdelincuentes, y su demanda definitivamente aumentará en el futuro próximo</p>
</div>'

                ques10='P10 : ¿Quiénes pueden inscribirse en este curso?'
                ans10='<div className="accord_body_content">
   <p>Graduados frescos, profesionales de TI y tecnología, jefes de proyectos y gerentes en empresas de TI / tecnología, ingenieros de soporte técnico y administradores.</p>
</div>'
            />

            <div className='newsev-mocktest full-w'>
                <Blog
                    heading="BLOGS"
                    heading2="Y ARTÍCULOS"
                    dataascustom='true'
                    targetblankbx='true'

                    date1={'26-Agto'}
                    title1={<>CISA vs CISSP: ¿Cuál es el adecuado para usted? <span class="cost">leer más</span></>}
                    url1={"https://my.careerera.com/eventimages/Newsid_347_images0.jpg"}
                    redirect1={"https://www.careerera.com/blog/cisa-vs-cissp-which-one-is-right-for-you"}

                    date2={'11-Agto'}
                    title2={<>¿Vale la pena una certificación de ciberseguridad? <span class="cost">leer más</span></>}
                    url2={"https://my.careerera.com/eventimages/Newsid_343_images0.jpg"}
                    redirect2={"https://www.careerera.com/blog/is-a-cybersecurity-certification-worth-it"}

                    date3={'27-Mar'}
                    title3={<>¿Cómo me convierto en un profesional de la seguridad cibernética en 2021?   <span class="cost">leer más</span></>}
                    url3={"https://my.careerera.com/eventimages/Newsid_339_images0.jpg"}
                    redirect3={"https://www.careerera.com/blog/how-do-i-become-a-cyber-security-professional"}
                />

                <div className='mt-8 text-center'>
                    <Link to="/blog" className='btn-site gray capitalize no-underline'>
                        <span>Ver todo</span>
                    </Link>
                </div>
            </div>

            <Testimonial title1="STUDENT'S"
                title2="Review" />
            {/* <CountryFooter  pagetitle="UI and UX"/> */}
        </div>
    )
}

export default PgpGradociber;









