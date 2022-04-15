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
import rolesoffer from "../Images/roles_offer.png";
import ProgramCarriculum from "../Atoms/ProgramCarriculum";
import CareerAssistance from '../Atoms/CareerAssistance';
import { Helmet } from "react-helmet";
import PopUp from "../Atoms/PopUp";
import { Link } from 'react-router-dom'
import aiMlimg from '../Images/data_science.png'


const PgpCienciadatos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <div className="static-pgpintell">
            <Helmet>
                <title>Curso de Certificacion en Ciencia de Datos | PGP en ciencia de datos - Careerera</title>
                <meta name="description" content="Si desea comenzar su carrera en el campo de la ciencia de datos, inscríbase en un programa de posgrado en ciencia de datos en Careerera y mejore sus habilidades." />
                <meta name="keywords" content="Curso de certificación de ciencia de datos, PGP en ciencia de datos, programa de posgrado en ciencia de datos, curso de ciencia de datos, capacitación en certificación de ciencia de datos" />
                <link rel="canonical" href="https://www.careerera.com/es/data-science/programa-de-postgrado-en-ciencia-de-datos" />
            </Helmet>

            <PopUp title="PROGRAMA DE POSTGRADO EN CIENCIA DE DATOS" />

            <Hero
                categoryUrl="PROGRAMA DE POSTGRADO EN CIENCIA DE DATOS"
                duration="12 meses"
                point2="100% Job Guaranteed* "
                point3="Asistencia profesional "
                point4="Proyectos Capstone"
                point1="Entrenadores de renombre mundial"
                point5="Múltiples proyectos en vivo"
                point6="Pasantía de la industria"
                title="PROGRAMA DE POSTGRADO EN CIENCIA DE DATOS"
                ConsultaAhora='Consulta ahora'
            />


            <NavStatic
                about="Descripción"
                Why='Por qué la ciencia de datos'
                WhyC="Por qué careerera"
                Colocacion="Colocación"
                Placement="Placement"
                Application="Solicitud"
                faq="Preguntas más frecuentes"
                Review="Reseñas"
                blogs="Blogs"
            />

            <DescriptionStatic
                title="PROGRAMA DE POSTGRADO EN CIENCIA DE DATOS"
                titlecurso="empty"
                heading="Conozca su camino alrededor del PROGRAMA DE POSTGRADO EN CIENCIA DE DATOS."
                data={<>
                    <p>Acelere su carrera en ciencia de datos con el exclusivo programa de análisis de ciencia de datos. Experimente la capacitación en ciencia de datos de clase mundial impartida por un líder de la industria sobre las habilidades de ciencia de datos más demandadas. Obtenga una exposición práctica a tecnologías clave como Python, Machine Learning, Visualización de datos, SQL e Inteligencia Artificial. Conviértase en un experto profesional de la ciencia de datos hoy mismo.</p>
                    <p>El PGP-DS (Post Graduate Program in Data Science) le brinda una amplia cobertura de las principales ideas y técnicas, desde Python, análisis exploratorio de datos hasta aprendizaje automático, aprendizaje profundo y más. Los laboratorios prácticos y el trabajo de asignación dan vida a estas ideas con nuestros instructores y asistentes para supervisarlo con el camino.</p>
                    <p>Equipe su carrera con este elogiado Programa PG en Ciencia de Datos con Careerera y el equipo.</p>
                </>}

                data2={<>
                    <p>La Ciencia de Datos y la Inteligencia Artificial han transformado el mundo por completo. Organizaciones de todo el mundo están aprovechando la inteligencia artificial para evitar tareas repetitivas y mejorar la experiencia del cliente. Los robots están tomando el mundo por asalto y están continuamente construyendo inteligencia comparable a los cerebros humanos. La Inteligencia Artificial y el Aprendizaje Automático son los trabajos mejor pagados del mundo. Según una estimación reciente, más del 90% de las empresas utilizarán la inteligencia artificial de una manera u otra para construir o mejorar sus productos y servicios. Estas empresas buscan personas expertas en ciencia de datos e IA. Desafortunadamente, la industria se enfrenta a una aguda escasez de personas altamente calificadas para llenar el vacío. Afortunadamente, Careerera decidió ser parte de la solución y ha lanzado su programa PGP en ciencia de datos para que las personas puedan aprovechar nuestros servicios y haga uso de nuestro certificado de posgrado en ciencias de datos en línea.</p>

                    <p>El exclusivo Programa de Postgrado en Ciencia de Datos de Careerera sin duda le dará nuevas alas a su carrera. Este curso de certificación en línea está especialmente diseñado para jóvenes profesionales y recién iniciados que están interesados en explorar y asegurar carreras de baja inversión y alta recompensa en ciencia de datos. Será muy beneficioso para los estudiantes de licenciatura, maestría y posgrado. Aquellos que provienen de las industrias de tecnología de la información, consultoría, fabricación, farmacéutica y atención médica, y BFSI son especialmente bienvenidos a unirse a nuestra certificación de ciencia de datos y capacitación y mejorar sus habilidades. Nuestro singular programa de capacitación en el aula en línea ofrece conferencias inmersivas que se imparten en un paquete tecnológico avanzado por nuestra facultad experta en línea a través de clases de video.</p>

                    <p>Se le asignará un administrador de programa dedicado para resolver todas sus preguntas, dudas y consultas que son externas al plan de estudios del curso y relacionadas más con los aspectos de gestión del curso PGP en Ciencia de Datos. Para todas sus dudas relacionadas con el material de estudio, nuestros instructores dedicados realizarán sesiones especiales de despeje de dudas uno a uno con correo electrónico, llamada de voz y soporte de videollamada proporcionado y podrá navegar a través de nuestro curso de certificación de ciencia de datos sin problemas. También se le asignarán muchas tareas y proyectos como parte del curso PGP en Ciencia de Datos y eso le ayudará mucho a poner a prueba sus habilidades y conocimientos recién adquiridos de una manera práctica y constructiva. Los instructores también proporcionarán comentarios precisos y precisos sobre todas las tareas y proyectos de los estudiantes, ayudando con la depuración y fomentando la participación activa.</p>

                    <p>En Careerera proporcionamos asistencia de colocación dedicada al proporcionar unidades exclusivas de contratación de aprendiz para aquellas personas que se han inscrito en el curso PGP en Ciencia de Datos y han completado con éxito el curso y han logrado puntajes por encima de un cierto porcentaje en todos los cuestionarios, exámenes, proyectos finales y asignaciones. También fomentamos la creación de redes de aprendizaje entre sí y con nuestros mentores y profesionales de la industria, proporcionándoles una plataforma común en la que pueden comunicarse entre sí y enriquecer aún más este curso de certificación de ciencia de datos en línea.</p>

                    <p>Nuestro plan de estudios para el curso PGP en Ciencia de Datos está diseñado con meticuloso cuidado para proporcionar a los estudiantes un camino de curso directo de progresión natural en el que se les introducen gradualmente nuevos temas y conceptos y en el que se exponen a facetas interconectadas de ciencia de datos como Python, SQL, Tableau, técnicas de aprendizaje automático,  Aprendizaje profundo y redes neuronales, análisis exploratorio de datos, visualización de datos, inteligencia artificial, etc.</p>
                </>}

            />

            <MwhyStatic
                titlem="?"
                titlem2="ciencia de datos?"
                titlem3='Los datos son la clave para tomar buenas decisiones de negocio.'

                contenttitle1='El 40%'
                contentpara1='Analytics profesionales en la India tienen una experiencia laboral de menos de 3 años.'

                contenttitle2='61%'
                contentpara2='Los trabajos del 61%están abiertos para los candidatos con 0-5 años de experiencia.'

                contenttitle3='2.7 MILLÓN'
                contentpara3='La estimación global para 2021 prevé 2,7 millones de puestos de trabajo para puestos de análisis y ciencia de datos.'

                contenttitle4='El 33.5%'
                contentpara4=' de la industria india de ciencia de datos está creciendo a un ritmo saludable del 33,5% de cagr.'

                contenttitle5='2021'
                contentpara5='India se convertirá en uno de los cinco principales mercados de Big Data en 2021.'
            />


            <Completition
                compcurso1='Al finalizar este programa,'
                compcurso2='usted:'
                capacidadaiml={aiMlimg}

                title1={<>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Esté bien versado en herramientas y tecnologías de análisis como  <strong>Python, Tableau, SQL </strong></p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Aplicar técnicas de aprendizaje automático relevantes para la industria, como <strong>regresión, modelado predictivo, clustering, pronóstico de series temporales, clasificación, etc.</strong></p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Estructurar un problema empresarial en un marco de análisis mediante <strong>estadísticas y modelado de datos  </strong> </p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Performar operaciones de limpieza y <strong>transformación de datos utilizando </strong>varias herramientas y técnicas</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Estar bien versado en <strong>aprendizaje profundo, procesamiento del lenguaje natural (PNL). </strong></p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i>Presentarse como un candidato ideal para los <strong>roles de analista, ingeniero de datos</strong> y científico de datos dentro de las principales empresas de análisis</p>
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
                        <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Facultades con alta experiencia
                        </span></p>
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
                            Una descripción general de lo que aprenderá de este programa.
                        </p>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>

                    {/*==================== h4 title ================*/}
                    <div className="row">
                        <h4 className="font-weight-bold text-lg sm:text-xl mb-3">Cimientos <span className="heading-border-line"></span></h4>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Introducción a la programación con Python"
                                detail1={<ul className='unorder_list'>
                                    <li>Hola Mundo</li>
                                    <li>Variables</li>
                                    <li>Operadores aritméticos y lógicos básicos (int, float)</li>
                                    <li>Tipos de datos: números, booleanos y cadenas</li>
                                    <li>Concat, subconjunto, posición, longitud, etc.</li>
                                    <li>If-else, bucles</li>
                                    <li>Diagramas de flujo lógicos (comprensión intuitiva del flujo de código)</li>
                                    <li>Pseudocódigo</li>
                                    <li>Sintaxis de programación básica</li>
                                    <li>Lista, tuplas, conjuntos y diccionarios</li>
                                    <li>Funciones predeterminadas</li>
                                    <li>Métodos predeterminados</li>
                                    <li>Introducción a las sentencias condicionales (if-else, elif), condicional anidada en Python </li>
                                    <li>Introducción a Basic para, While Loops, Break in Python </li>
                                    <li>Convertir pseudo códigos del día 1 en programas que utilicen Loops e if-else. </li>
                                    <li>Comprensión de listas </li>
                                    <li>Casos de uso frente a bucles </li>
                                    <li>Escribir programas, incluidos los bucles y las </li>
                                    <li>Lista de prácticas de If-Else Comprehensiones </li>
                                    <li>Ejercicios de laboratorio.</li>
                                    <li>Exploración de funciones integradas de uso común (mínimo, máximo, clasificación, etc.)</li>
                                    <li>Programación de funciones definidas por el usuario</li>
                                    <li>Trabajar con funciones con y sin argumentos</li>
                                    <li>Funciones con artículos devueltos</li>
                                    <li>Comprender las funciones de Lambda</li>
                                    <li>Resumen de las funciones de mapa, reducción y filtrado</li>
                                </ul>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Introducción a la programación con R"
                                detail1={<ul className='unorder_list'>
                                    <li>Introducción al lenguaje R</li>
                                    <li>Cómo instalar R</li>
                                    <li>Documentación en R</li>
                                    <li>Hola Mundo</li>
                                    <li>Paquete en R</li>
                                    <li>Tipos de datos en R</li>
                                    <li>Estructuras de datos</li>
                                    <li>Declaración condicional en R</li>
                                    <li>Bucles en R</li>
                                    <li>Subconjunto</li>
                                    <li>Lectura de datos de archivos CSV, Excel</li>
                                    <li>Creación de una operación vectorial y vectorial</li>
                                    <li>Inicializando el marco de datos</li>
                                    <li>Estructura de control</li>
                                    <li>Visualización de datos en R</li>
                                    <li>Crear gráfico de barras</li>
                                    <li>Creación de histograma y diagrama de caja</li>
                                    <li>Trazado con gráficos base</li>
                                    <li>Trazar y colorear en R</li>
                                    <li>Algoritmos de aprendizaje automático con R</li>
                                </ul>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="sistema de administración de base de datos"
                                detail1={<ul className='unorder_list'>
                                    <li>Introducción a DBMS</li>
                                    <li>Introducción a la base de datos relacional</li>
                                    <li>Conceptos y acceso a SQL</li>
                                    <li>Conceptos de servidores de datos MYSQL / RDBMS</li>
                                    <li>Procesos de extracción, transformación y carga ("ETL")</li>
                                    <li>Recupere datos de tablas individuales (uso de la declaración SELECT) y el poder de WHERE y ORDER by Clause. Recupere y transforme datos de múltiples tablas usando JOINS y Unions</li>
                                    <li>Introducción a las vistas Trabajar con funciones agregadas, agrupar y resumir registros Escribir subconsultas</li>
                                </ul>} />
                        </div>




                        {/*==================== h4 title ================*/}
                        <h4 className="mt-12 font-weight-bold text-lg sm:text-xl mb-3 ">Análisis de los datos  <span className="heading-border-line"></span></h4>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Estadísticas para ciencia de datos"
                                detail1={<>
                                    <li>Muestreo</li>
                                    <li>Distribución de probabilidad</li>
                                    <li>Distribución normal</li>
                                    <li>Distribución de Poisson</li>
                                    <li>Teorema de Bayes</li>
                                    <li>Teorema del límite central</li>
                                    <li>Errores tipo 1 y tipo 2</li>
                                    <li>Prueba de hipótesis</li>
                                    <li>Tipos de pruebas de hipótesis</li>
                                    <li>Intervalos de confianza</li>
                                    <li>Prueba T de una muestra</li>
                                    <li>ANOVA y Chi-cuadrado</li>
                                </>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Explorando el análisis de datos"
                                detail1={<>
                                    <li>Leer los datos</li>
                                    <li>Limpiar los datos</li>
                                    <li>Visualización de datos en Python</li>
                                    <li>Estadísticas de resumen (media, mediana, moda, varianza, desviación estándar)</li>
                                    <li>Seaborn</li>
                                    <li>Matplotlib</li>
                                    <li>Población VS muestra</li>
                                    <li>Estadísticas univariadas y multivariadas</li>
                                    <li>Tipos de variables: categóricas y continuas</li>
                                    <li>Coeficiente de correlaciones, asimetría y curtosis</li>
                                </>} />
                        </div>


                        {/*==================== h4 title ================*/}
                        <h4 className="mt-12 font-weight-bold text-lg sm:text-xl mb-3 ">Técnicas de aprendizaje automático <span className="heading-border-line"></span></h4>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Aprendizaje supervisado: regresión"
                                detail1={<>

                                    <li>Introducción al aprendizaje automático</li>
                                    <li>Introducción a la regresión</li>
                                    <li>Regresión lineal: una breve introducción</li>
                                    <li>Métricas de rendimiento del modelo</li>
                                    <li>¿Cómo dividir los datos para entrenamiento y pruebas?</li>
                                    <li>Entrenamiento y prueba del modelo</li>
                                    <li>Uso de R ^ 2 para verificar la precisión del modelo</li>
                                    <li>Usar el R ^ 2 ajustado para comparar el modelo con diferentes números de variables independientes</li>
                                    <li>Selección de características</li>
                                    <li>Selección hacia adelante y hacia atrás</li>
                                    <li>Ajuste de parámetros y evaluación del modelo</li>
                                    <li>Transformaciones y normalización de datos</li>
                                    <li>Transformación logarítmica de variables dependientes e independientes</li>
                                    <li>Tratar con variables independientes categóricas</li>
                                    <li>Una codificación en caliente frente a una variable ficticia</li>
                                    <li>Introducción a la regresión logística</li>
                                    <li>La función sigmoidea y la razón de posibilidades</li>
                                    <li>El concepto de logit</li>
                                    <li>El fracaso de MCO en la estimación de parámetros para una regresión logística</li>
                                    <li>Introducción al concepto de estimación de máxima verosimilitud</li>
                                    <li>Ventajas del enfoque de máxima verosimilitud</li>
                                    <li>Estudio de caso sobre regresión lineal y logística</li>

                                </>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Técnicas de conjunto"
                                detail1={<>

                                    <li>Bagging</li>
                                    <li>Boosting</li>
                                    <li>Bagging & Boosting Examples</li>

                                </>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="implementación del modelo"
                                detail1={<>

                                    <li>Introducción a la implementación de modelos</li>
                                    <li>Introducción a Flask en Python</li>
                                    <li>¿Cómo implementar aplicaciones en Flask?</li>
                                    <li>Tipos de implementación de modelos</li>


                                </>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Aprendizaje sin supervisión"
                                detail1={<>

                                    <li>¿Qué es el aprendizaje no supervisado?</li>
                                    <li>Los dos principales problemas de aprendizaje no supervisado: reducción de la dimensionalidad y agrupación.</li>
                                    <li>Algoritmos de agrupamiento</li>
                                    <li>Los diferentes enfoques para la agrupación en clústeres: jerárquico y K significa agrupación.</li>
                                    <li>Agrupación jerárquica: el concepto de agrupación aglomerativa y divisiva.</li>
                                    <li>Clustering aglomerativo - Trabajo de los algoritmos básicos.</li>
                                    <li>Matriz de distancias: interpretación de dendrogramas.</li>
                                    <li>Elegir el umbral para determinar el número óptimo de clústeres.</li>
                                    <li>Estudio de caso sobre agrupación aglomerativa</li>
                                    <li>El algoritmo de K-medias.</li>
                                    <li>Medidas de distancia: distancia euclidiana, Manhattan y Minkowski.</li>
                                    <li>El concepto de sumas de cuadrados dentro de un grupo.</li>
                                    <li>Usando el diagrama de codo para seleccionar un número óptimo de grupos.</li>
                                    <li>Estudio de caso sobre agrupación de k-medias.</li>
                                    <li>Comparación de k medias y enfoques aglomerativos de agrupamiento.</li>
                                    <li>Ruido en los datos y reducción dimensional.</li>
                                    <li>Capturar la varianza: el concepto de componentes principales.</li>
                                    <li>Supuestos en el uso de PCA.</li>
                                    <li>El funcionamiento del algoritmo PCA.</li>
                                    <li>Autovectores y ortogonalidad de componentes principales.</li>
                                    <li>¿Qué es la curva de complejidad?</li>
                                    <li>Ventajas de utilizar PCA.</li>
                                    <li>Construya un modelo usando componentes principales y comparándolo con el modelo normal. ¿Cuál es la diferencia?</li>
                                    <li>Poniendolo todo junto.</li>
                                    <li>La relación entre el aprendizaje supervisado y no supervisado.</li>
                                    <li>Estudio de caso sobre reducción de dimensionalidad seguido de un modelo de aprendizaje supervisado.</li>
                                    <li>Estudio de caso sobre Clustering seguido de modelo de clasificación.</li>

                                </>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Aprendizaje supervisado - Clasificación"
                                detail1={<>

                                    <li>Introducción a la clasificación</li>
                                    <li>Tipos de clasificación</li>
                                    <li>Clasificación binaria vs clasificación de clases múltiples.</li>
                                    <li>Introducción a los árboles de decisión -</li>
                                    <li>Árboles de decisión: nodos y divisiones.</li>
                                    <li>Trabajo del algoritmo del árbol de decisión.</li>
                                    <li>Importancia de la entropía y el índice de Gini.</li>
                                    <li>Calcular manualmente la entropía utilizando la fórmula de Gini y averiguar cómo dividir los nodos de decisión</li>
                                    <li>Cómo evaluar modelos de árboles de decisión.</li>
                                    <li>Métricas de precisión: matriz de precisión, recuperación y confusión</li>
                                    <li>Interpretación para métrica de precisión.</li>
                                    <li>Construyendo un modelo robusto de árbol de decisiones.</li>
                                    <li>Validación cruzada de k-fold.</li>
                                    <li>CART: extensión de árboles de decisión para problemas en regresión.</li>
                                    <li>Ventajas de usar CART.</li>
                                    <li>El teorema de Bayes.</li>
                                    <li>Probabilidad previa.</li>
                                    <li>El clasificador gaussiano NAÏVE'S BAYES.</li>
                                    <li>¿Cuáles son los supuestos del clasificador Naive Bayes?</li>
                                    <li>Evaluación del modelo: precisión, recuperación, métricas de exactitud y validación cruzada de k veces</li>
                                    <li>Curva ROC y AUC</li>
                                    <li>Ampliación de la clasificación bayesiana</li>

                                </>} />
                        </div>


                        {/*==================== h4 title ================*/}
                        <h4 className="mt-12 font-weight-bold text-lg sm:text-xl mb-3 ">Visualización de datos <span className="heading-border-line"></span></h4>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Visualización de datos con Tableau"
                                detail1={<>

                                    <li> Introducción a la visualización, reglas de visualización</li>
                                    <li>Tipos de datos, fuentes, conexiones, carga, remodelación</li>
                                    <li>Agregación de datos</li>
                                    <li>Trabajar con datos continuos y discretos</li>
                                    <li>Usar filtros</li>
                                    <li>Usar campos y parámetros calculados</li>
                                    <li>Crear tablas y gráficos</li>
                                    <li>Creación de tableros de control y guiones gráficos</li>
                                    <li> Compartiendo su trabajo y publicación para una audiencia más amplia</li>

                                </>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Visualización de datos con Google Data Studio"
                                detail1={<>

                                    <li>Introducción a la visualización</li>
                                    <li>Introducción a Google Data Studio</li>
                                    <li>¿Cómo funciona Data Studio?</li>
                                    <li>Tipos de datos, fuentes, conexiones, carga, remodelación</li>
                                    <li>Agregación de datos</li>
                                    <li>Trabajar con datos continuos y discretos</li>
                                    <li>Modo de edición de informes en Data Studio.</li>
                                    <li>Usar filtros en Data Studio</li>
                                    <li>Usar campos y parámetros calculados</li>
                                    <li>Crear tablas y gráficos</li>
                                    <li>Creación de tableros de control y guiones gráficos</li>
                                    <li>Creación de tableros de control y storyboards en Data Studio</li>

                                </>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Visualización de datos con Power Bi"
                                detail1={<>

                                    <li>Introducción a Microsoft Power BI</li>
                                    <li>Las características clave del flujo de trabajo de Power BI</li>
                                    <li>Aplicación de escritorio</li>
                                    <li>Servicio de BI⦁ Fuentes de datos de archivo</li>
                                    <li>Fuentes de datos de archivo</li>
                                    <li>Abastecimiento de datos de la web (OData y Azure)</li>
                                    <li>Construyendo un tablero</li>
                                    <li>Visualización de datos</li>
                                    <li>Publicar en la nube</li>
                                    <li>Cálculo de datos DAX</li>
                                    <li>Contexto de fila</li>
                                    <li>Contexto de filtro</li>
                                    <li>Panel de análisis</li>
                                    <li>Crear columnas y medidas</li>
                                    <li>Desglose y desglose de datos</li>
                                    <li>Creando tablas</li>
                                    <li>Mesas agrupadas</li>
                                    <li>Modelado de datos y relaciones</li>
                                    <li>Componentes de Power BI como Power View, Map, Query y Pivot</li>

                                </>} />
                        </div>


                        {/*==================== h4 title ================*/}
                        <h4 className="mt-12 font-weight-bold text-lg sm:text-xl mb-3 ">Introducción a la inteligencia artificial <span className="heading-border-line"></span></h4>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Pronóstico de series de tiempo"
                                detail1={<>

                                    <li>¿Qué es la serie temporal?</li>
                                    <li>Regresión frente a series de tiempo</li>
                                    <li>Ejemplos de datos de series temporales</li>
                                    <li>Tendencia, estacionalidad, ruido y estacionariedad</li>
                                    <li>Operaciones de series temporales</li>
                                    <li>Detendencia</li>
                                    <li>Diferencias sucesivas</li>
                                    <li>Media móvil y suavizado</li>
                                    <li>El modelo de pronóstico ponderado exponencialmente</li>
                                    <li>Rezagado</li>
                                    <li>Correlación y autocorrelación</li>
                                    <li>Métodos de Holt-Winters</li>
                                    <li>Suavizado exponencial simple</li>
                                    <li>Método de tendencia lineal de Holt</li>
                                    <li>Método de temporada de invierno de Holt</li>
                                    <li>ARIMA y SARIMA</li>

                                </>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Minería de textos y análisis sentimental"
                                detail1={<>

                                    <li>Limpieza de texto, expresiones regulares, derivación, lematización</li>
                                    <li>Nube de palabras, análisis de componentes principales, bigramas y trigramas</li>
                                    <li>Desguace web, resumen de texto, algoritmo Lex Rank</li>
                                    <li>Técnica de asignación de Dirichlet latente (LDA)</li>
                                    <li>Arquitectura de Word2vec (omitir gramos frente a CBOW)</li>
                                    <li>Clasificación de texto, vectores de documento, clasificación de texto con Doc2vec</li>

                                </>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Introducción al procesamiento del lenguaje natural"
                                detail1={<>

                                    <li>Lección de ingeniería de funciones en datos de texto</li>
                                    <li>Técnicas de comprensión del lenguaje natural</li>
                                    <li>Generación de lenguaje natural</li>
                                    <li>Bibliotecas de procesamiento de lenguaje natural</li>
                                    <li>Procesamiento de lenguaje natural con aprendizaje automático</li>

                                </>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Aprendizaje reforzado"
                                detail1={<>

                                    <li>Introducción al aprendizaje por refuerzo</li>
                                    <li>Marco y elementos de aprendizaje reforzado</li>
                                    <li>Bandido de varios brazos</li>
                                    <li>Proceso de decisión de Markov</li>
                                    <li>Algoritmos basados en valor Q y ventajas</li>

                                </>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="Visión por computador "
                                detail1={<>

                                    <li>Introducción a las redes neuronales convolucionales</li>
                                    <li>Convolución, Pooling, Padding y sus mecanismos</li>
                                    <li>Propagación hacia adelante y propagación hacia atrás para CNNs</li>
                                    <li>Arquitecturas de CNN como AlexNet,</li>
                                    <li>VGGNet, InceptionNet y ResNet</li>
                                    <li>Transferir aprendizaje</li>
                                    <li>Visión por computadora avanzada</li>
                                    <li>Detección de objetos</li>
                                    <li>YOLO, R-CNN, SSD</li>
                                    <li>Segmentación semántica</li>
                                    <li>U-Net</li>
                                    <li>Reconocimiento facial usando siamés</li>
                                    <li>Redes</li>
                                    <li>Segmentación de instancias</li>

                                </>} />
                        </div>

                        <div className="col-lg-6 col-12">
                            <ProgramCarriculum
                                topic1="introducción al aprendizaje profundo "
                                detail1={<>

                                    <li>Introducción al aprendizaje profundo</li>
                                    <li>Conceptos básicos de redes neuronales</li>
                                    <li>Redes neuronales superficiales</li>
                                    <li>Redes neuronales profundas</li>
                                    <li>Propagación hacia adelante y propagación hacia atrás.</li>
                                    <li>Cómo construir y entrenar redes neuronales profundas y aplicarlo a la visión por computadora.
                                    </li>
                                    <li>Introducción al perceptrón y las redes neuronales</li>
                                    <li>Funciones de activación y pérdida</li>
                                    <li>Descenso de gradiente</li>
                                    <li>Ajuste de hiperparámetros</li>
                                    <li>Tensor Flow y Keras para Neural</li>
                                    <li>Redes</li>
                                    <li>Introducción a los datos secuenciales</li>
                                    <li>RNN y sus mecanismos</li>
                                    <li>Gradientes de desaparición y explosión</li>
                                    <li>en enfermeras registradas</li>
                                    <li>LSTM: memoria larga a corto plazo</li>
                                    <li>GRU: unidad recurrente cerrada</li>
                                    <li>Aplicaciones de LSTM</li>
                                    <li>Análisis de series temporales</li>
                                    <li>LSTM con mecanismo de atención</li>
                                    <li>Traducción automática neuronal</li>
                                    <li>Modelos de idiomas avanzados</li>
                                    <li>Transformadores, BERT, XLNet</li>

                                </>} />
                        </div>
                    </div>

                </div>
            </div>

            <Capstone
                capstitlem="Proyectos"
                capstitlem2="Capstone"
                capstitlem3='Pon a prueba tus habilidades y temple con un proyecto final.'
                capstitlecurso="empty"

                title1="Venta minorista"
                data1="Tecniques utilizados: Análisis de la cesta de la compra, Análisis RFM (Actualidad-Frecuencia Monetaria), Pronóstico de series temporales"
                title2="Comercio electrónico"
                data2="Tecniques utilizados: Minería de texto, Kmeans Clustering, Árboles de regresión, XGBoost, Red neuronal"
                title3="Web y redes sociales"
                data3="Tecniques utilizados: Modelado de temas utilizando 9 Asignación latente de Dirichlet. K-Medias & Clustering Jerárquico"
                title4="Banca"
                data4="Tecnologías utilizadas: Análisis discriminante lineal, Regresión logística, Red neuronal, Impulso, Bosque aleatorio, CART"
                title5="Cadena de suministro "
                data5="Tecniques utilizadas: Minería de texto, Agrupamiento de Kmeans, Árboles de regresión, XGBoost, Red neuronal"
                title6="Asistencia sanitaria "
                data6="Tecniques utilizados: Regresión logística, Árbol aleatorio, ADA Boost, Bosque aleatorio, KSVM"
                title7="Venta minorista"
                data7="Tecniques utilizados: Análisis de la cesta de la compra, Análisis de lealtad a la marca"
                title8="Seguros "
                data8="Tecnísticas utilizadas: PNL (Procesamiento del Lenguaje Natural), Modelo de Espacio Vectorial, Análisis Semántico Latente"
                title9="Emprendimiento /Start Ups "
                data9="Tecniques utilizadas: Análisis Univariado y Bivariado, Regresión Logística Multinomial, Bosque Aleatorio"
                title10="Finanzas y Cuentas "
                data10="Tecniques utilizados: Árbol de inferencia condicional, Regresión logística, CART y Bosque aleatorio"
            />

            <div className="why-pgpedu">
                <Careerera curso="empty" cursoval="500"
                    incluyen="empty"
                    incluyen1='USUARIAS'
                    incluyenpara1='250000+'
                    incluyen2='PROGRAMAS MEJOR CLASIFICADOS'
                    incluyenpara2='10'
                    cursotitle3='EXPERTAS EN LA INDUSTRIA'
                    cursotitle4="LAS MEJORES FACULTADES DE LA INDIA"
                    incluyenpara4='1000+' />
            </div>


            <Profile profcurso="empty" title="Perfil de lote de ciencia de datos"
            />

            <CareerAssistance
                title='Placement'
                titlesub='Assistance*'
                titleheading='Aproveche las asociaciones de Careerera con las principales empresas de TI de la India.'
                box1='Acceso a oportunidades con empresas líderes'
                box2='Talleres sobre revisión de currículum vitae y preparación de entrevistas'
                box3='Orientación profesional y tutoría de Careerera y líderes de la industria' />

 
            <Light image={rolesoffer}
                lightprofcurso="empty"
                lightseguridad="empty"
                ltitle='Resaltado'
                ltitlesub='de ubicación'

                seguridadtitle1='200+'
                seguridadpara1='Empresas participantes'

                seguridadtitle2='6.9 LPA'
                seguridadpara2='CTC promedio'

                seguridadtitle3='25 LPA'
                seguridadpara3='CTC más alto'

                seguridadtitle4='87%'
                seguridadpara4='Aumento del salario promedio'
            />


            <UserformsApplication
                titlenues='Socios'
                subtitlenues='de contratación'
                titlenuesheading='Le aseguramos asistencia laboral al final del programa'
                customlizeall="empty"
                customliz1='Proceso'
                customliz2='de solicitud'
                customliz3='Inscríbase en el programa con un sencillo formulario en línea.'
                customliz4='Solicite llenando un formulario de solicitud en línea simple'
                customliz5='El comité de admisiones revisará y preseleccionará.'
                customliz6='Los candidatos preseleccionados deben presentarse a una prueba de aptitud en línea.'
                customliz7='Convocatoria de selección con exalumnos / profesores'
            />


            <Sign />

            <Faq
                faqcurso="empty"
                subfaqcurso='Encuentra respuestas a todas sus consultas y dudas aquí.'

                ques1="P1 : ¿Qué es el curso PGP en Ciencia de Datos de Careerera y qué lo hace diferente de los cursos individuales?"
                ans1='<div className="accord_body_content">
   <p>R: El programa de posgrado en ciencia de datos es una ruta de aprendizaje cuidadosamente diseñada que ha sido creada por algunos de los principales expertos de la industria. La estructura del plan de estudios del curso se ha establecido de manera que incluso un principiante completo en la ciencia de datos podrá seguir la progresión del curso y comprender todos los materiales del curso con claridad. Nuestros instructores de clase mundial se asegurarán de que se convierta en un maestro de la ciencia de datos cuando complete el curso.</p>
</div>'
                ques2="P2 : ¿Puede Careerera proporcionar el curso PGP en ciencia de datos en una ubicación cercana a mí?"
                ans2='<div className="accord_body_content">
   <p>R: El contenido de nuestro curso está destinado a llegar a los estudiantes de todo el mundo. Ya sea que resida en cualquier país, ya sea India, Canadá, Estados Unidos, Filipinas, Singapur, Malasia, Australia o países europeos como Reino Unido, Alemania, Países Bajos, Alemania o en otro lugar, podrá acceder a nuestro contenido las 24 días de la semana, los 7 días de la semana, en cualquier momento del día. La razón de esto es que nuestro contenido está disponible 100% en línea. Puede acceder a todo nuestro contenido sentado en su hogar u oficina.
   </p>
</div>'
                ques3="P3 : ¿Puedo solicitar una sesión de apoyo y aclaración de dudas si quiero comprender los temas a un nivel más prof"
                ans3='<div className="accord_body_content">
   <p>R: Careerera ofrece resolución de consultas 24/7 y puede presentar un ticket con un equipo de soporte dedicado en cualquier momento. Proporcionamos soporte de correo electrónico y video chat para todas las consultas. Si su consulta no se resuelve en una cantidad adecuada de tiempo a través del correo electrónico, organizaremos sesiones individuales en vivo con nuestros instructores de clase mundial que estarán más que encantados de guiarlo a través de sus dudas. Es posible que le engase saber que Careerera no impide que sus alumnos se pongan en contacto con los instructores incluso después de que hayan completado el curso. Pueden crear tantos tickets de soporte técnico como deseen; no ponemos ningún límite en el número de entradas que pueden crear.</p>
</div>'
                ques4="P4 : ¿Qué tipo de proyectos se asignan como parte de la capacitación?"
                ans4='<div className="accord_body_content">
   <p>R: Careerera asigna los proyectos de alto valor más actualizados, relevantes y prácticos a sus
      alumnos. Tienen mucho valor en el mundo real, ya que están diseñados cuidadosamente por
      nuestros instructores de clase mundial para proporcionar experiencia práctica y práctica a los
      estudiantes a medida que los completan. Le proporcionamos una ruta segura y confiable a través
      de la cual puede implementar el aprendizaje y el conocimiento que ha adquirido en un entorno
      industrial del mundo real. Estos proyectos son parte de cada curso en Careerera y pondrán a prueba
      a fondo su aprendizaje, habilidades y conocimientos prácticos, preparándolo completa y
      exhaustivamente para los trabajos de la industria.
   </p>
   <p>Tendrá la oportunidad de trabajar en proyectos extremadamente emocionantes y exigentes en los campos de TI de alta tecnología, marketing, ventas, comercio electrónico, seguros, banca, redes, etc. Después de completar los proyectos con éxito, sus habilidades serán equivalentes a 6 meses completos de experiencia minuciosa y rigurosa en la industria.
   </p>
</div>'
                ques5="P5 : .¿Careerera proporciona algún tipo de asistencia laboral?"
                ans5='<div className="accord_body_content">
   <p>R: Careerera apoya a sus estudiantes proporcionando asistencia de colocación a todos los estudiantes que completan con éxito el curso y aprueban todos los exámenes, proyectos y tareas. Tenemos asociaciones con muchas empresas de servicios de la tercera empresa y otros empleadores importantes de todo el mundo. A través de nuestras redes de contactos, puede conseguir con éxito un trabajo en varias organizaciones destacadas e igualmente grandes empresas. También llevamos a cabo varios seminarios y talleres gratuitos sobre cómo crear el currículum y cómo prepararse para las entrevistas de trabajo. También llevaremos a cabo sesiones de asesoramiento que serán para tutoría de carrera y participación en ferias de carreras.</p>
</div>'
                ques6="P6 : ¿Cuál es la definición de Ciencia de Datos? ¿Qué lo hace tan importante?"
                ans6='<div className="accord_body_content">
   <p>R: La ciencia de datos es un campo para unificar el análisis de datos, la estadística y sus métodos relacionados con el fin de comprender y analizar fenómenos reales con datos. Utiliza técnicas y teorías extraídas de muchos campos en el contexto de la estadística, la informática, las matemáticas, el conocimiento de dominio y la ciencia de la información. El campo implica extraer, visualizar, analizar, almacenar y administrar datos para crear información. Estos conocimientos ayudan a las empresas a tomar decisiones efectivas basadas en datos. Toda organización necesita evaluar y analizar datos para comprender el desempeño de las ventas, el enfoque de marketing, el comportamiento del cliente, el desempeño operativo, etc. En el caso de las empresas de servicios financieros, los bancos, las empresas de comercio electrónico, las unidades de fabricación y las empresas de salud, los líderes buscan obtener conocimientos útiles e incisivos de todos los datos que han recopilado a lo largo de los años. Todas estas empresas están formando equipos de ciencia de datos o contratando consultores de ciencia de datos para resolver sus problemas comerciales o identificar nuevas oportunidades que pueden aprovechar. Los datos se vuelven cada vez más importantes, al igual que los roles de Científico de Datos o Analista de Datos.</p>
</div>'
                ques7="P7 : ¿Es el científico de datos una buena opción de carrera?"
                ans7='<div className="accord_body_content">
   <p>R: La ciencia de datos tiene una gran demanda en muchas industrias, que van desde TI hasta finanzas, comercio electrónico, fabricación, atención médica y venta minorista. Es el trabajo de más rápido crecimiento en LinkedIn y se prevé que cree 11,5 millones de puestos de trabajo para 2026. Esto hace que la ciencia de datos sea una opción de carrera muy lucrativa. Además, el número de personas que realmente poseen los conjuntos de habilidades necesarias para convertirse en un científico de datos completo es muy pequeño. Por lo tanto, hay una alta demanda de científicos de datos, pero una baja oferta de personas calificadas. Así que los científicos de datos pueden exigir un salario tan grande como quieran y las empresas tendrán que cumplir con sus demandas.</p>
</div>'
                ques8="P8 : ¿Cuáles son las habilidades requeridas para comenzar un trabajo en el campo de la Ciencia de Datos?"
                ans8='<div className="accord_body_content">
   R: Las habilidades que necesitará para conseguir un trabajo en el campo de la ciencia de datos son: codificación Python, conocimiento de la plataforma Hadoop, codificación / base de datos SQL, conocimiento específico del dominio de trabajo de aprendizaje automático e inteligencia artificial, habilidades de visualización de datos, estadísticas, cálculo multivariable y álgebra lineal.              
</div>'
                ques9="P9 : ¿Quién es elegible para tomar el curso PGP en ciencia de datos de Careerera?"
                ans9='<div className="accord_body_content">
   R: Las empresas que buscarán contratar Científicos de Datos buscarán los siguientes grados -
   Para recién graduados o estudiantes universitarios - Un título en B.Tech/M.Tech (Cualquier Oficio), BCA, MCA o B.Sc (Estadística o Matemáticas), BA (Matemáticas o Economía o Estadísticas), B.Com.
   Para profesionales que trabajan - Experiencia profesional de 1 año en Python, R, SAS, Business intelligence, Data warehousing, SQL. Si su experiencia profesional no está relacionada con el análisis de datos, aún puede cambiar a una carrera en Ciencia de datos siempre que tenga alguno de los títulos especificados anteriormente.
   Sin embargo, para inscribirse en el curso PGP en Ciencia de Datos no necesita ninguna experiencia técnica o de programación. Enseñamos todos los módulos desde cero.              
</div>'
                ques10="P10 : ¿Cuáles son las herramientas y tecnologías utilizadas para impartir este curso de PGP en Ciencia de Datos de Careerera?"
                ans10='<div className="accord_body_content">
   R: Python, Tableau, SQL.              
</div>'
                ques11="P11 : ¿Cuál es la duración de este curso PGP en Ciencia de Datos de Careerera?"
                ans11='<div className="accord_body_content">
   R: El curso PGP en Ciencia de Datos de Careerera es un programa en línea de 12 meses de duración.              
</div>'
                ques12="P12 : ¿Qué temas se tratan en el plan de estudios del curso PGP en Ciencia de Datos de Careerera?"
                ans12='<div className="accord_body_content">
   R: Hay varios temas pertinentes al campo de la Ciencia de Datos que se tratan en este curso de PGP en Ciencia de Datos. Algunos de ellos son los siguientes: regresión, modelado predictivo, clustering, pronóstico de series temporales, clasificación, etc. Hay ejercicios que requieren que uno estructure un problema de negocio en un marco de análisis utilizando estadísticas y modelado de datos. También hay temas de limpieza de datos, transformación de datos, aprendizaje profundo y procesamiento del lenguaje natural (PNL).              
</div>'
                ques13="P13 : ¿En qué sectores se basan los proyectos de capitalización?"
                ans13='<div className="accord_body_content">
   R: Venta al por menor, web y redes sociales, cadena de suministro, emprendimiento, comercio electrónico, banca, atención médica, seguros, finanzas y cuentas, etc.              
</div>'
                ques14="P14 : ¿Hay alguna garantía de colocación después de la finalización del curso PGP en Ciencia de Datos?"
                ans14='<div className="accord_body_content">
   R: Proporcionamos asistencia de colocación dedicada después de la finalización del programa. damos la dirección en la escritura del curriculum vitae, talleres de la conducta en la preparación de la entrevista.              
</div>'
                ques15="P15 : ¿Por qué hay que elegir Careerera?"
                ans15='<div className="accord_body_content">
   R: Como proveedor de educación, Careerera tiene como objetivo desarrollar la personalidad general de un individuo para que pueda progresar hasta convertirse en profesionales de trabajo altamente calificados.
   Los profesores de Careerera utilizan tácticas contemporáneas para ofrecer sesiones de capacitación que incluyen interacción uno a uno entre los participantes y el instructor.
   Los formadores designados para los cursos de Careerera poseen un nivel muy alto de experiencia en sus materias y campos. Por lo tanto, Careerera puede garantizar fácilmente resultados positivos para todos los participantes.
   Se proporciona orientación las 24 horas del sistema de la información las 24 horas del sistema a la vez a quienes la necesitan por llamada, correo electrónico o videollamada.
   Candidatos pueden optar por clases de demostración con el fin de tener una buena idea de las sesiones de formación reales.
   Careerera proporciona el modelo de formación en aula virtual en directo en línea con el fin de facilitar a los profesionales que trabajan asistir a las sesiones, por un lado, mientras que el equilibrio de su trabajo por el otro.              
</div>'
            />

            <div className='newsev-mocktest full-w'>

                <Blog
                    heading="BLOGS"
                    heading2="Y ARTÍCULOS"
                    dataascustom='true'
                    targetblankbx='true'

                    date1={'14-Apr'}
                    title1={<>Algoritmos de ciencia de datos: los aspirantes deben saber <span class="cost">Leer más</span></>}
                    url1={"https://my.careerera.com/eventimages/Newsid_255_images0.jpg"}
                    redirect1={"https://www.careerera.com/blog/data-science-algorithms"}

                    date2={'02-Apr'}
                    title2={<>Depth Insights - Ciencia de datos vs. Análisis de datos vs. Aprendizaje automático <span class="cost">Leer más</span></>}
                    url2={"https://my.careerera.com/eventimages/Newsid_251_images0.jpg"}
                    redirect2={"https://www.careerera.com/blog/data-science-vs-data-analytics-vs-machine-learning"}

                    date3={'27-Estropear'}
                    title3={<>¿Por qué el lenguaje Python es la mejor opción para los científicos de datos? <span class="cost">Leer más</span></>}
                    url3={"https://my.careerera.com/eventimages/Newsid_249_images0.jpg"}
                    redirect3={"https://www.careerera.com/blog/why-python-language-is-the-best-choice-for-data-scientists"}
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

export default PgpCienciadatos;




