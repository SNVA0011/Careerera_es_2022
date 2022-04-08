import React, { useEffect } from "react";
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
import aiMlimg from '../Images/ai-ml-img.jpg'
import Contentvariar from "../Images/data-science-icon/Content-management-system.png"
import Avariar from "../Images/data-science-icon/A-client-services.png"
import Automotivevariar from "../Images/data-science-icon/Automotive-parts.png"
import Foodvariar from "../Images/data-science-icon/Food-delivery-application.png"
import Portalvariar from "../Images/data-science-icon/Portal-of-e-commerce.png"
import Motorvariar from "../Images/data-science-icon/Motor-servicing.png"
import Projectvariar from "../Images/data-science-icon/Project-management.png"
import Newsvariar from "../Images/data-science-icon/News-aggregator.png"
import Boilerplatevariar from "../Images/data-science-icon/Boilerplate-application.png"
import Itemvariar from "../Images/data-science-icon/Item-catalog-application.png"
import IayMl_1 from "../Images/IA-y-ML.png"
import IayMl_2 from "../Images/IA-y-ML_2.png"
import IayMl_3 from "../Images/ai-ml-roles-offer.png"

const PgpAidizaje = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <div className="static-pgpintell">
            <Helmet>
                <title>PG Program in Artificial Intelligence and Machine Learning Certification Online</title>
                <meta name="description" content="Get PG Diploma in Machine Learning and Artificial Intelligence courses at Careerera. PGP in AI and ML give the learners exposure to all the important developments from the industry." />
                <meta name="keywords" content="PG Program in Artificial Intelligence and Machine Learning, pg diploma in machine learning and ai, machine learning courses online, ai and machine learning course, artificial intelligence training, artificial intelligence course online, artificial intelligence certification, post graduate program in machine learning & ai, post graduate, program in machine learning & artificial intelligence, pgp in machine learning & ai, pgp in machine learning & artificial intelligence" />
                <link rel="canonical" href="https://www.careerera.com/es/artificial-intelligence-and-machine-learning/programa-de-postgrado-en-inteligencia-artificial-y-aprendizaje-automatico" />
            </Helmet>

            <PopUp title="PROGRAMA DE POSTGRADO EN INTELIGENCIA ARTIFICIAL Y APRENDIZAJE AUTOMÁTICO" />

            <Hero
                categoryUrl="PROGRAMA DE POSTGRADO EN INTELIGENCIA ARTIFICIAL Y APRENDIZAJE AUTOMÁTICO"
                duration="12 meses"
                point2="Folletos para estudiantes"
                point3="Múltiples exámenes de simulación"
                point4="Entrenadores basados en la industria"
                point1="Base sólida:"
                point5="Certificado de finalización del curso"
                point6="Proyectos industriales"
                title="PROGRAMA DE POSTGRADO EN INTELIGENCIA ARTIFICIAL Y APRENDIZAJE AUTOMÁTICO"
            />

            <NavStatic
                about='Descripción'
                Why='por qué AI y ML'
                Program='Aspectos destacados del programa'
                WhyC='Por qué Careerera'
                Colocacion='colocación' 
                faq='Preguntas más frecuentes'
                Application='aplicación'
                Review="Reseñas"
            />

            <DescriptionStatic
                title="PROGRAMA DE POSTGRADO EN INTELIGENCIA ARTIFICIAL Y APRENDIZAJE AUTOMÁTICO"
                titlecurso="empty"
                heading="Conozca su camino alrededor del PROGRAMA DE POSTGRADO EN INTELIGENCIA ARTIFICIAL Y APRENDIZAJE AUTOMÁTICO."
                data={<>
                    <p>Construya sistemas más inteligentes e inteligentes. </p>
                    <p>Inteligencia Artificial es quizás la palabra más popular en el uso general que tiene sus orígenes en el campo de la informática. Esto se debe a todas las películas de ciencia ficción que contienen robots que pueden hablar y naves espaciales que tienen sistemas automatizados de guía y defensa. Debido a esta apropiación indebida por parte de los medios de comunicación, la palabra ha sido ampliamente malinterpretada. Pero cualquiera que tome un curso de Inteligencia Artificial en línea aprenderá cuál es el verdadero significado de la Inteligencia Artificial. </p>
                    <p>Esta certificación de Inteligencia Artificial enseñará a los estudiantes que la Inteligencia Artificial es un campo de la informática en el que el programador intenta impartir inteligencia similar a la humana a las máquinas. Utilizan técnicas y algoritmos que dan a las máquinas la capacidad de participar en procesos de razonamiento y procesos de lógica bastante similares a lo que seguiría un ser humano racional. El entrenamiento en Inteligencia Artificial permitirá a los programadores dar a las máquinas la capacidad de comprender relaciones complejas, interpretarlas de manera significativa, y adoptar decisiones viables sobre la base de esos cálculos. Dichas máquinas, si se dejan solas en un entorno navegable, podrán interpretar los elementos presentes en el entorno y podrán tomar ciertas rutas de acción en función de sus observaciones. Así que la Inteligencia Artificial permite a los programadores impartir tales poderes de percepción a las máquinas. No solo podrán interpretar el entorno, sino que también podrán detectar sus errores, registrarlos y procesarlos para aprender a desempeñarse mejor la próxima vez que estén en el mismo entorno. </p>
                    <p>El aprendizaje automático es una rama de la Inteligencia Artificial que tiene como objetivo enseñar a las máquinas a aprender de su entorno por sí mismas sin ninguna ayuda o interferencia externa. El método que utilizan es que suministran a las máquinas conjuntos de datos masivos como entradas. Luego programan algoritmos específicos de aprendizaje automático en las máquinas que les dan la capacidad de analizar los conjuntos de datos masivos y aceptarlos como sus propias experiencias pasadas. Por lo tanto, una nueva máquina puede recibir la memoria de una máquina usada. Luego extraen patrones de estos conjuntos de datos y usan estos patrones para formar nuevos conocimientos. Este curso es uno de los cursos de aprendizaje automático en línea que enseñará a un alumno cómo hacerlo. </p>
                </>}

                data2={<>
                    <p>Inicialmente, los programadores tienen que programar algoritmos específicos en las máquinas para enseñarles a aprender, para decirlo simplemente. Pero después de que las máquinas se suministran con conjuntos de datos masivos como entradas, pueden aprovechar estos bancos de experiencia pasada y sacar nuevas conclusiones. Por lo tanto, uno puede tomar este diploma PG en Aprendizaje automático e IA para obtener el conocimiento y las habilidades necesarias para realizar esta hazaña. Nuestro curso de INTELIGENCIA artificial y aprendizaje automático incluye temas como preprocesamiento de datos, disputa de datos, encasillamiento, comparación de horas de trabajo, modelado de series temporales, eliminación de no estacionariedad, minería de texto, lemmatización, representación de árboles de sintaxis, estructuración de oraciones con fragmentación y análisis de fragmentos, gramática sin contexto, etc. </p>
                    <h2 className="text-2xl mt-4 font-semibold">¿Por qué ir con el Programa de Postgrado en Aprendizaje Automático e IA de Careerera? </h2>
                    <p>El Programa de Postgrado de Careerera en Aprendizaje Automático e IA es un curso muy bien diseñado destinado a estudiantes de todas las categorías, desde principiantes completos hasta profesionales con experiencia previa. Le dará a uno una base completa en todos los conceptos centrales y temas relevantes de Inteligencia Artificial y Aprendizaje Automático. El plan de estudios del curso ha sido especialmente diseñado para dar a los estudiantes exposición a todos los desarrollos importantes de la industria. Los instructores de Careerera son todos de calidad de clase mundial. Todos ellos han sido sometidos a un proceso de selección muy riguroso y han sido elegidos por sus habilidades de enseñanza y experiencia en la materia. </p>
                    <p>Todo tipo de materiales de estudio del curso están disponibles en este programa de posgrado en aprendizaje automático e inteligencia artificial para los estudiantes, incluidos videos, conferencias de audio, notas, cuestionarios sorpresa, tareas y proyectos finales. Los instructores también brindan apoyo las 24 días de la semana, los 7 días de la semana, a los estudiantes en forma de sesiones de aclaración de dudas en video, llamada, correo electrónico y chat.</p>
                </>}

            />



            <MwhyStatic
                titlem="inteligencia artificial"
                titlem2="y aprendizaje automático?"
                titlem3='Aprenda a transferir roles humanos a las máquinas.'

                contenttitle1='13.3% CAGR'
                contentpara1='CAGR durante el período de pronóstico de 2018 a 2026'

                contenttitle2='25% Crecimiento'
                contentpara2='de crecimiento del empleo estimado para los roles de desarrollador de software para 2028 '

                contenttitle3='1.7 MILLÓN'
                contentpara3='La estimación global de 2020 requiere 1.7 millones de ofertas de trabajo para roles de desarrollo de software.'

                contenttitle4='4.535,5 millones'
                contentpara4='Se esperan 4.535,5 millones por la gestión global de tareas para el tamaño del mercado de software  '

                contenttitle5='2026'
                contentpara5='India se convertirá en uno de los tres principales mercados para el desarrollo de software'
            />


            <Completition
                compcurso="empty"
                compcurso1='Al completar este programa,'
                compcurso2='usted:'
                capacidadaiml={aiMlimg}

                title1={<>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Desarrollar experiencia en tecnologías populares de IA y ML y metodologías de resolución de problemas</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Desarrollar la capacidad de resolver de forma independiente los problemas empresariales utilizando IA y ML</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Aprenda a usar tecnologías populares de IA y ML como Python, Tensor flow y Keras para desarrollar aplicaciones</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Desarrollar un portafolio verificado con 12 proyectos que mostrarán las nuevas habilidades adquiridas  </p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Desarrolle experiencia en IA y ML, que se están convirtiendo rápidamente en las habilidades más buscadas en todo el mundo</p>
                </>} />




            <Highlight
                titlem="Aspectos destacados"
                titlem2="del programa"
                titlem3='Ver qué beneficios puede obtener de unirse a este programa.'
                titlecurso="empty"
                head1={<>
                    <div className="height_light_box">
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>programa en línea de 12 meses </span> </p>
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Sesiones de laboratorio en línea </span></p>
                    </div>
                </>}
                head2={<>
                    <div className="height_light_box">
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Careerera colabora con muchas universidades y organizaciones eminentes de todo el mundo para intercambiar el conocimiento.</span></p>
                    </div>
                </>}
                head3={<>
                    <div className="height_light_box">
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Guía y tutoría para los profesionales por parte de la facultad y los líderes de la industria de Careerera </span></p>
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Semen sesiones de preparación de reseñas y entrevistas </span></p>
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Acceso a oportunidades con empresas líderes</span></p>
                    </div>
                </>}
                head4={<>
                    <div className="height_light_box">
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Estudios de casos del mundo real para desarrollar habilidades prácticas</span></p>
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Exposición práctica a herramientas de análisis y técnicas como Python, Tableau, SQL </span></p>
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Aprender las perspectivas de la industria a través de múltiples sesiones de conocimiento de la industria</span></p>
                    </div>
                </>} />


            <div id="cariculum" className="scroll-spbx cariculum-overview our_faq_sec blog-detials-single">
                <div className="container py-16 content normal mt-0">
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold bg-white">
                            Plan de estudios  <span className="orange-clrsite">del programa</span>
                        </h2>
                        <p className="text-gray-800 text-base md:text-lg fw-medium bg-white">
                            Los temas del programa progresan gradualmente de simple a avanzado.
                        </p>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>

                    {/*==================== h4 title ================*/}
                    <div className="row">
                        {/*==================== h4 title ================*/}
                        <h4 className="mt-12 font-weight-bold text-lg sm:text-xl mb-3">la fundación
                            <span className="heading-border-line"></span></h4>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Python para IA y ML
'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Conceptos básicos de Python</li>
                                        <li>Funciones y paquetes de Python</li>
                                        <li>Trabajar con estructuras de datos, matrices, vectores y marcos de datos</li>
                                        <li>Jupyter Notebook - Instalación y función</li>
                                        <li>Pandas, NumPy, Matplotlib, Seaborn</li>
                                    </ul>
                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Estadística Aplicada
'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Estadísticas descriptivas</li>
                                        <li>Probabilidad y probabilidad condicional</li>
                                        <li>Prueba de hipótesis</li>
                                        <li>Estadística inferencial</li>
                                        <li>Distribuciones de probabilidad</li>
                                    </ul>
                                </div>} />
                        </div>

                        {/*==================== h4 title ================*/}
                        <h4 className="mt-12 font-weight-bold text-lg sm:text-xl mb-3">Distribuciones de probabilidad
                            <span className="heading-border-line"></span></h4>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Aprendizaje supervisad
'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Regresión lineal</li>
                                        <li>Regresión lineal de variables múltiples</li>
                                        <li>Regresión logística</li>
                                        <li>Clasificadores ingenuos de Baye</li>
                                        <li>Clasificación K-NN</li>
                                        <li>Máquinas de vectores de soporte</li>
                                    </ul>
                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Aprendizaje sin supervisión
'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Agrupación de K-means</li>
                                        <li>Agrupación jerárquica</li>
                                        <li>Reducción de dimensión-PCA</li>
                                    </ul>
                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Técnicas de conjunto
'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Árboles de decisión</li>
                                        <li>Harpillera</li>
                                        <li>Bosques al azar</li>
                                        <li>Impulsar</li>
                                    </ul>
                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Sistemas de recomendación
'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Introducción a los sistemas de recomendación</li>
                                        <li>Modelo basado en la popularidad</li>
                                        <li>Sistema de recomendaciones basado en contenido</li>
                                        <li>Filtrado colaborativo (similitud de usuario y similitud de elemento)</li>
                                        <li>Modelos híbridos</li>
                                    </ul>
                                </div>} />
                        </div>

                        {/*==================== h4 title ================*/}
                        <h4 className="mt-12 font-weight-bold text-lg sm:text-xl mb-3">Inteligencia artificial
                            <span className="heading-border-line"></span></h4>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Introducción a las redes neuronales y el aprendizaje profundo 
'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Introducción a perceptrones y redes neuronales Funciones de activación y pérdida de gradiente Descenso descenso por lotes Normalización tensorial Flujo y Kera para redes neuronales Hiper parámetros Ajuste Modelos secuenciales y PNL</li>
                                    </ul>
                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Introducción a los datos secuenciales 
'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>RNN y sus mecanismos Gradientes de fuga y explosión en RNN LSTM - GRU de memoria a corto plazo a largo plazo - LSTM de unidad recurrente cerrada Aplicaciones Análisis de series de tiempo LSTM con mecanismo de atención Traducción automática neuronal Modelos de lenguaje avanzados: Transformadores, BERT, XLNet Visión por computadora </li>
                                    </ul>
                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Introducción a la convolución, agrupación de redes neuronales convolucionales
'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Acolchado y su mecanismo Propagación hacia adelante y Propagación hacia atrás para CNN</li>
                                        <li>Arquitecturas CNN como AlexNet, VGGNet, InceptionNet y ResNe</li>
                                        <li>Transferir el aprendizaje de los conceptos básicos de PNL (procesamiento del lenguaje natural)</li>
                                        <li>Introducción a la PNL Tokenización de palabras vacías Derivación y lematización Modelo de bolsa de palabras Vectorizador de palabras TF-IDF Etiquetado de puntos de venta Reconocimiento de entidades nombradas</li>
                                        <li>Detección avanzada de objetos de visión por computadora YOLO, R-CNN,</li>
                                        <li>Segmentación semántica SSD Reconocimiento facial U-Net utilizando redes siamesas Segmentación de instancias Introducción a las GAN (redes generativas adversas)</li>
                                    </ul>
                                </div>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Introducción a las GAN - Redes generativas Redes adversas
'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>¿Cómo funcionan las GAN?</li>
                                        <li>DCGAN: GAN de convolución profunda</li>
                                    </ul>
                                </div>} />
                        </div>


                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1='Aplicaciones de las GA '
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Introducción al aprendizaje por refuerzo (RL) Componente del marco de RL del marco de RL Ejemplos de sistemas de RL Tipos de sistemas de RL Q-learning</li>
                                        <li>IDIOMAS Y HERRAMIENTAS: Python, biblioteca Python ML, Scikit-learn, biblioteca NLP, NLTK, Keras, Pandas Numpy, Scipy, Matplotlib, TensorFlow</li>
                                    </ul>
                                </div>} />
                        </div>


                    </div>

                </div>
            </div>

            <Capstone
                capstitlem="Proyectos"
                capstitlem2="Capstone"
                capstitlem3='Pon a prueba sus habilidades y conocimientos en proyectos prácticos.'
                capstitlecurso="empty"
                capsApiimg="empty"

                title1='Reconocimiento de dígitos escritos a mano.'
                data1="Los seres humanos escriben dígitos de diferentes formas y con diferentes caligrafías. Los dígitos escritos a mano pueden variar mucho en formas y tamaños, ya que utilizan muchas curvas y líneas rectas distintas. Entonces, para que las máquinas lean y comprendan los dígitos que los humanos han escrito, será necesario un gran ajuste. La tarea del alumno es desarrollar un algoritmo de reconocimiento de dígitos escritos a mano y crear una aplicación basada en el mismo. Debe poder identificar, comprender y reconocer dígitos escritos a mano y producir un resultado para los mismos. Debe ser rápido y preciso."
                capsApiimg1={Contentvariar}
                title2='Detección de línea de carril'
                data2="En el mundo de hoy, la idea de los coches autónomos ya no es un mero sueño. Los autos autónomos de Google han recorrido miles de millas en las carreteras de América del Norte y han demostrado que los conductores ya no son necesarios para conducir automóviles. La tarea del alumno es desarrollar un algoritmo de detección de línea de carril que pueda identificar, identificar y detectar líneas en el medio de la carretera que demarcan nuevos carriles. Deben ser capaces de detectarlos a una distancia de al menos 100 metros y comprender a partir de las marcas si los carriles son de alta velocidad o lentos."
                capsApiimg2={Avariar}
                title3='Extensión de bloqueador de spoiler'
                data3="Cuando sale una nueva película o programa, las personas traviesas siempre intentan quitarle la emoción y la anticipación publicando información al respecto en línea que revela todos los eventos importantes que tienen lugar en la película o programa. Estos datos se conocen como spoilers. La tarea del alumno es desarrollar una extensión de navegador que acepte información del usuario relacionada con sus nuevas películas o programas favoritos. Luego detectará cualquier mención de ellos con anticipación y ocultará esas menciones superponiendo otro texto o imágenes encima de ellas."
                capsApiimg3={Automotivevariar}
                title4='Extensión de clasificador de spam'
                data4="La mayoría de los usuarios de correo electrónico reciben docenas de correos electrónicos todos los días. Un gran porcentaje de esos correos electrónicos son spam en forma de anuncios, material promocional o bromas simples. Son muy distractores, abarrotan la bandeja de entrada y eliminarlos individualmente lleva demasiado tiempo. La tarea del alumno es crear una extensión del navegador que pueda clasificar el correo electrónico como spam o correo electrónico no spam regular sobre la base del contenido del correo electrónico solamente. Debe usar las listas de spammers conocidos de código abierto para identificar correos electrónicos no deseados sin tener que escanear los correos electrónicos."
                capsApiimg4={Foodvariar}
                title5='Mapa del especificador de ruta óptima'
                data5="Un gran problema comercial hoy en día es descubrir cuál es la ruta más corta y que menos tiempo consume de un lugar a otro. Hay varios productos disponibles en el mercado que intentan resolver este problema con diversos grados de éxito. La tarea del alumno es desarrollar una pieza de software que utiliza inteligencia artificial avanzada y algoritmos de aprendizaje automático para descubrir la ruta óptima entre dos puntos en un mapa. También debe considerar el tráfico, el clima y si el usuario ha viajado a través de esa ruta antes. El alumno tiene que crear una aplicación utilizando esos algoritmos."
                capsApiimg5={Portalvariar}
                title6='Juego de Ajedrez AI'
                data6="El juego de ajedrez es extremadamente popular entre los seres humanos a los que les gustan las tareas mentalmente exigentes. Es un juego muy adecuado para la aplicación de conceptos y técnicas de inteligencia artificial y aprendizaje automático. La tarea del alumno es crear una aplicación de juego de ajedrez que esté completamente equipada con sofisticados oponentes de IA que puedan predecir y contrarrestar los movimientos de ajedrez de los jugadores humanos con anticipación. Debería poder tomar entradas de conjuntos de datos de partidas de ajedrez y simular las partidas mientras muestra lo que sus propios oponentes de IA habrían hecho desde cualquier lado."
                capsApiimg6={Motorvariar}
                title7='Detección y localización de incendios mediante cámaras de vigilancia'
                data7="En la actualidad, una gran amenaza en los hogares de todo el mundo es la amenaza de que se produzcan incendios inesperados. Un incendio en una casa puede causar daños masivos a la propiedad y cobrar la vida de cualquier ocupante dentro de la casa. La tarea del alumno es utilizar las cámaras de vigilancia de la casa para detectar y señalar si se ha producido un incendio y la ubicación. La aplicación de detección de incendios debe utilizar la clasificación de imágenes y los algoritmos de visión por computadora para realizar esta hazaña. Debe tener funciones de informes integradas para alertar a los residentes de la casa sobre el abeto."
                capsApiimg7={Projectvariar}
                title8='Evaluación de sitios web mediante la minería de opiniones'
                data8="Un gran desafío que enfrentan los motores de búsqueda de todo el mundo hoy en día es la presencia de sitios web de bajo esfuerzo con contenido deficiente o sitios web que son fachadas para otros sitios web más grandes y solo existen para alojar backlinks para ellos. Será muy útil tener un sistema de calificación o puntuación para todos los sitios web en Internet. La tarea del alumno es crear una aplicación que los usuarios puedan usar para navegar por Internet y dejar reseñas y calificaciones en los diferentes sitios web que encuentren. También debería haber una opción de 'Categoría de sitio web' para ordenarlos."
                capsApiimg8={Newsvariar}
                title9='Sistema de monitoreo de revisión de productos falsos'
                data9="Una estrategia común que siguen muchas empresas de todo el mundo es publicar reseñas falsas en Internet elogiando sus productos o servicios. Las reseñas de productos falsos sesgan los resultados de búsqueda a favor de la empresa fraudulenta y engañan a los clientes potenciales sobre su calidad y rendimiento. La tarea del alumno es crear un sistema falso de monitoreo de revisión de productos. Debe utilizar algoritmos de Inteligencia Artificial y Aprendizaje Automático para rastrear e identificar direcciones IP fraudulentas que publican múltiples revisiones desde la misma dirección IP. También debe utilizar un sistema de minería de opinión y calificación."
                capsApiimg9={Boilerplatevariar}
                title10='Sistema de asistencia automátic'
                data10="En las escuelas se dedica una gran cantidad de tiempo a tomar la lista y la asistencia de los estudiantes. Los maestros pueden usar el mismo tiempo para revisar conceptos importantes de la materia de estudio con los estudiantes o para verificar sus tareas más minuciosamente. La tarea del alumno es crear un sistema de asistencia automática que automatice el proceso de asistencia. Debe usar algoritmos de IA y ML relacionados con la visión por computadora para reconocer e identificar las caras de los estudiantes entrantes y verificar sus nombres con una base de datos escolar."
                capsApiimg10={Itemvariar}
            />

            <div className="why-pgpedu">
                <Careerera curso="empty" incluyen="empty" cursoval="500" 
                lomejores='Tome ayuda del proveedor líder de cursos educativos en línea de la India.' 
                cursotitle3='EXPERIENCIA EN LA INDUSTRIA' 
                cursotitle4="LA MEJOR FACULTAD DE NUBE DE LA INDIA" 
                incluyen1='USUARIO'
                incluyenpara1='250000+'
                incluyen2='PROGRAMA DE LOS DIEZ MEJORES CLASIFICADOS'
                incluyenpara2='10'
                incluyenpara4='25+'
                />
            </div>


            <Profile profcurso="empty"
             CustomAll="empty"
             title="Perfil de lote de IA y ML"
             CustomAll1={IayMl_1}
             CustomAll2='Nuestros estudiantes incluyen estudiantes recién salidos y profesionales experimentados de todas las industrias, funciones y orígenes.'
             CustomAll3={IayMl_2}
            />

            <CareerAssistance
                title='Asistencia'
                titlesub='de colocación'
                titleheading='Te ayudamos a prepararte para entrevistas con importantes empresas.'
                box1='Acceso a oportunidades con empresas líderes'
                box2='Talleres sobre revisión de currículum y preparación de entrevistas'
                box3='Orientación profesional y tutoría por parte de Careerera y líderes de la industria' />


            <Light
                image={IayMl_3}
                lightprofcurso="empty"
                lightseguridad="empty"
                ltitle='Resaltado'
                ltitlesub='de ubicación' 

                seguridadtitle1='200+'
                seguridadpara1='empresas participantes'

                seguridadtitle2='$122K PA'
                seguridadpara2='PROMEDIO CTC'

                seguridadtitle3='$250K'
                seguridadpara3='CTC más alto'

                seguridadtitle4='87%'
                seguridadpara4='Aumento salarial promedio del'
            />


            <UserformsApplication
                titlenues='Socios'
                subtitlenues='de contratación'
                titlenuesheading='Le aseguramos asistencia laboral al final del programa.'
                customlizeall="empty"
                customliz1='Proceso de'
                customliz2='solicitud'
                customliz3='Inscríbase en el programa con un sencillo formulario en línea.'
                customliz4='Solicite llenando un formulario de solicitud en línea simple'
                customliz5='El comité de admisiones revisará y preseleccionará.'
                customliz6='Los candidatos preseleccionados deben presentarse a una prueba de aptitud en línea.'
                customliz7='Convocatoria de selección con exalumnos / profesores'
            />


            <Sign />
            <Faq
                faqcurso="empty"
                subfaqcurso='Despeja tus consultas y dudas aquí.'
                ques1='P1 : Qué es el curso PGP en Inteligencia Artificial y Machine Learning de Careerera y qué lo hace diferente de los cursos individuales'
                ans1='<div class="accord_body_content">
   <p>R :El programa de posgrado en inteligencia artificial y aprendizaje automático es una ruta de aprendizaje cuidadosamente diseñada que ha sido creada por algunos de los principales expertos de la industria. La estructura del plan de estudios del curso se ha establecido de manera que incluso un principiante completo en Inteligencia Artificial y Aprendizaje Automático podrá seguir la progresión del curso y comprender todos los materiales del curso con claridad. Nuestros instructores de clase mundial se asegurarán de que se convierta en un maestro en Inteligencia Artificial y Aprendizaje Automático cuando complete el curso. </p>
</div>'

                ques2='P2: ¿Puede Careerera proporcionar el curso de PGP en Inteligencia Artificial y Aprendizaje Automático en un lugar cercano a mí?'
                ans2='<div class="accord_body_content">
   <p>R: El contenido de nuestro curso está destinado a llegar a estudiantes de todo el mundo. Ya sea que resida en cualquier país, ya sea India, Canadá, EE. UU., Filipinas, Singapur, Malasia,
      Australia o países europeos como Reino Unido, Alemania, Países Bajos, Alemania o en cualquier otro lugar, podrá acceder a nuestro contenido las 24 horas del día, los 7 días de la semana, en en cualquier momento del día. La razón de esto es que nuestro contenido está disponible 100% online. Puede acceder a todo nuestro contenido desde su casa u oficina.
   </p>
</div>'

                ques3='P3 : ¿Puedo pedir una sesión de apoyo y aclaración de dudas si quiero entender los temas a un nivel más profundo?'
                ans3='<div class="accord_body_content">
   <p>R: Careerera ofrece resolución de consultas 24/7 y puede presentar un ticket con un equipo de soporte dedicado en cualquier momento. Proporcionamos soporte por correo electrónico y video chat para todas las consultas. Si su consulta no se resuelve en un tiempo adecuado a través del correo electrónico, organizaremos sesiones individuales en vivo con nuestros instructores de clase mundial que estarán más que felices de guiarlo a través de sus dudas.</p>
   <p>Es posible que le alegra saber que Careeerera no impide que sus alumnos se comuniquen con los instructores incluso después de que hayan completado el curso. Pueden crear tantos tickets de soporte como deseen; no ponemos ningún límite en el número de entradas que pueden crear.</p>
</div>'

                ques4='P4 : ¿Qué tipo de proyectos se asignan como parte de la capacitación?'
                ans4='<div class="accord_body_content">
   <p>R: Careerera asigna a sus alumnos los proyectos más actualizados, relevantes y prácticos de alto valor. Tienen mucho valor en el mundo real, ya que están diseñados cuidadosamente por nuestros instructores de clase mundial para brindar experiencia práctica y práctica a los alumnos a medida que los completan. Le proporcionamos una ruta segura y confiable a través de la cual puede implementar el aprendizaje y el conocimiento que ha adquirido en un entorno industrial del mundo real. Estos proyectos son parte de todos los cursos en Careerera y pondrán a prueba a fondo su aprendizaje, habilidades y conocimientos prácticos, lo que lo preparará completa e integralmente para los trabajos de la industria.</p>
   <p>Usted tendrá la oportunidad de trabajar en proyectos extremadamente emocionantes y exigentes en los campos de TI de alta tecnología, Marketing, Ventas, Comercio electrónico, Seguros, Banca, Redes, etc. Después de completar los proyectos con éxito, sus habilidades serán equivalentes a 6 meses completos de experiencia en la industria minuciosa y rigurosa.</p>
</div>'

                ques5='P5 : ¿Careerera proporciona algún tipo de asistencia laboral?'
                ans5='<div class="accord_body_content">
   <p>Careerera apoya a sus estudiantes al proporcionar asistencia de colocación a todos los estudiantes que completan con éxito el curso y aprueban todos los exámenes, proyectos y tareas. Tenemos asociaciones con muchas MNCs y otros empleadores de primer nivel en todo el mundo. A través de nuestras redes de contactos, puede conseguir con éxito un trabajo en varias organizaciones destacadas e igualmente grandes empresas. También llevamos a cabo varios seminarios y talleres
      gratuitos sobre cómo crear el currículum y cómo prepararse para las entrevistas de trabajo. También llevaremos a cabo sesiones de asesoramiento que serán para la tutoría de carrera y la participación en ferias de carreras.
   </p>
</div>'

                ques6='P6 : ¿Cuál es la definición de Inteligencia Artificial y Machine Learning? ¿Qué lo hace tan importante?'
                ans6='<div class="accord_body_content">
   <p>R : La Inteligencia Artificial y el Aprendizaje Automático son una parte muy importante de la Informática. Están bastante interrelacionados entre sí y tienen muchos puntos en común. La Inteligencia Artificial es en su nivel más básico una tecnología que permite a las máquinas exhibir simulaciones del comportamiento humano. El objetivo principal de la IA es desarrollar sistemas informáticos inteligentes que puedan resolver problemas complejos del mundo de una manera similar a la humana. El aprendizaje automático y el aprendizaje profundo son dos componentes principales de la IA. La IA es un campo vasto y tiene una gama muy diversa de aplicaciones y alcance. Los sistemas de IA están más preocupados por utilizar la ciencia de la probabilidad y la predicción para maximizar las posibilidades de éxito de un sistema en la resolución de un problema. La inteligencia artificial tiene 3 etapas principales de operación: aprendizaje, razonamiento y autocorrección. A menudo, los humanos tienen que lidiar no solo con datos estructurados, sino también con datos semiestructurados y no estructurados. Por lo tanto, cualquier sistema de IA debe estar completamente equipado para manejar no solo datos estructurados, sino también datos semiestructurados y no estructurados.</p>
   <p>El aprendizaje automático es un subconjunto de la inteligencia artificial. Depende en gran medida de datos pasados. Es una ciencia que permite a las máquinas aprender sobre nuevos patrones y nuevos cursos de acción sobre la base de datos pasados relacionados con el mismo dominio del problema. A los sistemas informáticos se les enseña cómo proceder a lo largo de ciertas líneas de acción y cómo tomar ciertas decisiones cuando se enfrentan a una cierta matriz de elecciones y problemas. Es por eso que este campo se llama "aprendizaje" automático. El aprendizaje automático es mucho más estrecho en alcance que el amplio alcance de la Inteligencia Artificial. Los sistemas informáticos entrenados por el aprendizaje automático solo pueden realizar acciones y tareas para las que se les han enseñado explícitamente las líneas de respuesta apropiadas. No pueden predecir problemas y conjuntos de soluciones de antemano como las máquinas "inteligentes" del alcance más amplio de la Inteligencia Artificial.</p>
</div>'

                ques7='P7 : ¿Es el experto en Inteligencia Artificial y Aprendizaje Automático una buena opción de carrera?'
                ans7='<div class="accord_body_content">
   <p>R: La inteligencia artificial y el aprendizaje automático tienen una gran demanda en muchas industrias, que van desde TI hasta finanzas, comercio electrónico, fabricación, atención médica y venta minorista. Es el trabajo de más rápido crecimiento en Linkedin y se prevé que cree 20 millones de emp
      Inteligencia Artificial y el Aprendizaje Automático sean una opción de carrera muy lucrativa. Además el número de personas que realmente poseen los conjuntos de habilidades necesarias para convertirse en un experto completo en Inteligencia Artificial y Aprendizaje Automático es muy poco. Por lo tanto, existe una alta demanda de expertos en Inteligencia Artificial y Machine Learning pero una baja oferta de personas cualificadas. Así que los expertos en Inteligencia Artificial y Machine Learning pueden exigir un salario tan grande como quieran y las empresas tendrán que cumplir con sus demandas.
   </p>
</div>'

                ques8='Q8 : ¿Cuáles son las habilidades requeridas para comenzar un trabajo en el campo de la Inteligencia Artificial y el Aprendizaje Automático?'
                ans8='<div class="accord_body_content">
   <p>R: Las habilidades que necesitará para conseguir un trabajo en el campo de la Inteligencia Artificial y el Aprendizaje Automático son: Habilidades de prueba e iteración, funciones de Python, paquetes y conocimientos de rutinas, conocimiento matemático, conocimiento de física, conocimiento de mecánica, conocimiento de teoría del aprendizaje cognitivo, conocimiento de procesamiento del lenguaje, habilidades de pensamiento crítico, curiosidad, habilidades de pensamiento listas para usar, habilidades técnicas, conocimiento de técnicas de procesamiento de señales.</p>
</div>'

                ques9='P9 : ¿Quién es elegible para tomar el curso PGP en Inteligencia Artificial y Aprendizaje Automático de Careerera?'
                ans9='<div class="accord_body_content">
   <p>R: Las empresas que buscarán contratar Inteligencia Artificial y Machine Learningers buscarán los siguientes grados: </p>
   <p>12º pase de la corriente de Ciencia o corriente de TI.</p>
   <p>Para recién graduados o estudiantes universitarios - Un título en B.Tech/M.Tech (Cualquier Oficio), TI, BCA, MCA o B.Sc</p>
   <p>Para profesionales que trabajan - Experiencia profesional de 1 año en cualquier lenguaje de programación. Si su experiencia profesional no está relacionada con la Inteligencia Artificial y el Aprendizaje Automático, aún puede cambiar a una carrera en Inteligencia Artificial y Aprendizaje Automático siempre que tenga alguno de los títulos especificados anteriormente.</p>
</div>'

                ques10='P10 : ¿Cuáles son las herramientas y tecnologías utilizadas para impartir este curso de PGP en Inteligencia Artificial y Machine Learning de Careerera?'
                ans10='<div class="accord_body_content">
   <p>R : Pandas, Numpy, Matplotlib, Seaborn, Sci-kit, Anaconda, Jupyter, NLTK, Python, Keras.</p>
</div>'

                ques11='P11 : ¿Cuál es la duración de este curso de PGP en Inteligencia Artificial y Machine Learning de Careerera?'
                ans11='<div class="accord_body_content">
   <p>R: El curso PGP en Inteligencia Artificial y Aprendizaje Automático de Careerera es un programa en línea de 12 meses de duración.</p>
</div>'

                ques12='P12 : ¿Qué temas están cubiertos en el plan de estudios del curso PGP en Inteligencia Artificial y Aprendizaje Automático de Careerera?'
                ans12='<div class="accord_body_content">
   <p>R: Hay varios temas pertinentes al campo de la Inteligencia Artificial y el Aprendizaje Automático que se cubren en este curso de PGP en Inteligencia Artificial y Aprendizaje Automático. Algunos de ellos son los siguientes: PNL, aprendizaje profundo, aprendizaje por refuerzo, modelos gráficos junto con análisis predictivos y estadísticas, conceptos de análisis estadístico, Introducción a la probabilidad y teorema de Bayes, funciones, paquetes y rutinas de Python, regresión lineal (tanto univariada como multivariante), regresión polinómica (tanto univariante como multivariante), clasificación K-NN, máquinas vectoriales de soporte, etc.</p>
</div>'

                ques13='P13 : ¿En qué sectores se basan los proyectos de capitalización?'
                ans13='<div class="accord_body_content">
   <p>R: Venta al por menor, web y redes sociales, cadena de suministro, emprendimiento, comercio electrónico, banca, atención médica, seguros, finanzas y cuentas, etc.</p>
</div>'

                ques14='P14 : ¿Cuál es el público objetivo de este curso?'
                ans14='<div class="accord_body_content">
<p>Perfil de la audiencia :</p>
   <p class="mb-1">Los públicos previstos para el Programa PG en Inteligencia Artificial y Machine Learning son:</p>
   <ul class="list-disc pl-6 text-base"> 
   <li class="mb-2">Profesionales de TI</li>
   <li class="mb-2">Profesionales de datos</li>
   <li class="mb-2">Individuals con habilidades básicas de programación interesados en la IA y ML</li>
   <li class="mb-2">Los científicos de datos que ven para obtener un gran impulso en sus carreras</li>
   <li class="mb-2">Profesionales que buscan un cambio de carrera hacia AI &amp; ML</li>
   </ul>
</div>'

                ques15='P15 : ¿Por qué hay que elegir Careerera?'
                ans15='<div class="accord_body_content">
<ul class="list-disc pl-6 text-base">
   <li class="mb-2">Como proveedor de educación, Careerera tiene como objetivo desarrollar la personalidad general de un individuo para que pueda progresar y convertirse en profesionales de trabajo altamente calificados.</li>
   <li class="mb-2">La facultad de Careerera utiliza tácticas contemporáneas para ofrecer sesiones de capacitación que incluyen la interacción uno a uno entre los participantes y el instructor.</li>
   <li class="mb-2">Los formadores designados para los cursos de Careerera poseen un nivel muy alto de experiencia en sus materias y campos. Por lo tanto, Careerera puede garantizar fácilmente resultados positivos para todos los participantes.</li>
   <li class="mb-2">Se proporciona orientación las 24 horas del sistema de la información las 24 horas del sistema a la vez a quienes la necesitan por llamada, correo electrónico o videollamada.</li>
   <li class="mb-2">Los candidatos pueden optar por clases de demostración para tener una buena idea de las sesiones de entrenamiento reales.</li>
   <li class="mb-2">Careerera proporciona el modelo de formación en aula virtual en vivo en línea con el fin de facilitar a los profesionales que trabajan asistir a las sesiones, por un lado, mientras que equilibran su trabajo por el otro.</li>
   </ul>
</div>'
            />



            <Testimonial title1="STUDENT'S"
                title2="Review" />
            {/* <CountryFooter  pagetitle="UI and UX"/> */}
        </div>
    )
}

export default PgpAidizaje;












