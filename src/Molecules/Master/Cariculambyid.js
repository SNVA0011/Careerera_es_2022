import React from 'react'

export default function Cariculambyid(props) {
    const final = props.data;

    return (
        <>
            <div className="curriculum-assimilate certification-courseslight full-w scroll-spbx" id="carriculum">
                <div className="container pt-16 pb-4">
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Programa <span className="orange-clrsite">Plan de estudios</span>
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg fw-medium">
                            Mira qué temas tendrás que asimilar.
                        </p>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>


                    {final ?
                        <div className="curriculum-masterid full-w">

                            {/* final[0].curriculum_id == '259' */}
                            {final[0].curriculum_id == '259' ?
                                <div> {final[0].curriculum_id + ', ' + final[0].filename}</div>
                                : ''}
                            {/* End - final[0].curriculum_id == '259' */}


                            {/* final[0].curriculum_id == '166' */}
                            {final[0].curriculum_id == '166' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Aprendizaje Estadístico</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Conceptos de análisis estadístico</li>
                                                                                <li>Estadísticas descriptivas</li>
                                                                                <li>Introducción a la probabilidad y el teorema de Bayes</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Descenso de gradiente</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Distribuciones de probabilidad</li>
                                                                                <li>Pruebas de hipótesis y puntajes</li>
                                                                                <li>proyecto de aprendizaje experiencial</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Python para IA y aprendizaje automático</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Descripción general de Python</li>
                                                                                <li>Conceptos básicos de Python</li>
                                                                                <li>Funciones, paquetes y rutinas de Python</li>
                                                                                <li>Introducción a Pandas, NumPy, Matplotlib</li>
                                                                                <li>Pandas para preprocesamiento y análisis de datos
                                                                                    exploratorios</li>
                                                                                <li>Numpy para análisis estadístico</li>
                                                                                <li>Seaborn para visualización de datos</li>
                                                                                <li>Biblioteca de kits de ciencia</li>
                                                                                <li>Estudios de casos y carreras</li>
                                                                                <li>Proyecto de aprendizaje experiencial</li>
                                                                                <li>Introducción a Anaconda/Jupyter para
                                                                                    codificación/visualización de datos</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Ciencia de los datos</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introducción a la ciencia de datos, ML, IA</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Aprendizaje automático</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    <b>


                                                                                        Aprendizaje supervisado


                                                                                    </b>
                                                                                    <ul>
                                                                                        <li>


                                                                                            Introducción al aprendizaje automático


                                                                                        </li>
                                                                                        <li>


                                                                                            Conceptos de aprendizaje supervisado


                                                                                        </li>
                                                                                        <li>
                                                                                            {" "}


                                                                                            Regresión lineal (tanto univariante como
                                                                                            multivariante)


                                                                                        </li>
                                                                                        <li>
                                                                                            {" "}


                                                                                            Regresión polinomial (tanto univariante como
                                                                                            multivariante)


                                                                                        </li>
                                                                                        <li>


                                                                                            Regresión logística (clase binaria)


                                                                                        </li>
                                                                                        <li>


                                                                                            Regresión logística (clase múltiple)


                                                                                        </li>
                                                                                        <li>


                                                                                            Clasificación K-NN


                                                                                        </li>
                                                                                        <li>


                                                                                            Clasificadores bayesianos ingenuos


                                                                                        </li>
                                                                                        <li>


                                                                                            SVM - Máquinas de vectores de soporte


                                                                                        </li>
                                                                                        <li>


                                                                                            Proyecto de aprendizaje experiencial


                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    <b>


                                                                                        Aprendizaje sin supervisión


                                                                                    </b>
                                                                                    <ul>
                                                                                        <li>


                                                                                            Conceptos de aprendizaje no supervisado


                                                                                        </li>
                                                                                        <li>


                                                                                            Enfoques de agrupamiento


                                                                                        </li>
                                                                                        <li>


                                                                                            K significa agrupamiento


                                                                                        </li>
                                                                                        <li>


                                                                                            Agrupación jerárquica


                                                                                        </li>
                                                                                        <li>


                                                                                            Agrupamiento de alta dimensión


                                                                                        </li>
                                                                                        <li>


                                                                                            Maximización de expectativas


                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Conjunto técnico</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Árboles de decisión</li>
                                                                                <li>Introducción al aprendizaje por conjuntos</li>
                                                                                <li>Diferentes técnicas de aprendizaje en conjunto</li>
                                                                                <li>Harpillera</li>
                                                                                <li>impulsar</li>
                                                                                <li>Bosques aleatorios</li>
                                                                                <li>Apilado</li>
                                                                                <li>Proyecto de aprendizaje experiencial</li>
                                                                                <li>PCA (Análisis de componentes principales) y sus
                                                                                    aplicaciones</li>
                                                                                <li>Matriz de confusión</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Aprendizaje reforzado</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Métodos basados ​​en valores Q-learning</li>
                                                                                <li>Métodos basados ​​en políticas</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Sistemas de recomendación</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Sistemas de recomendación basados ​​en usuarios y
                                                                                    artículos</li>
                                                                                <li>Filtración colaborativa</li>
                                                                                <li>Filtrado basado en contenido</li>
                                                                                <li>Sistemas de recomendación híbridos</li>
                                                                                <li>Medición del desempeño</li>
                                                                                <li>Proyecto de aprendizaje experiencial</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Caracterización, selección de modelo y ajuste</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Análisis de texto</li>
                                                                                <li>Extracción de características</li>
                                                                                <li>Defectos del modelo y métricas de evaluación</li>
                                                                                <li>Selección y ajuste del modelo.</li>
                                                                                <li>Comparación de modelos de Machine Learning</li>
                                                                                <li>Proyecto de aprendizaje experiencial</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Herramientas y técnicas</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Pitón (Pandas, Numpy, Scipy,</li>
                                                                                <li>Matplotlib, Seaborn y Scikit-Learn)</li>
                                                                                <li>Mini Proyectos</li>
                                                                                <li>Sesión de laboratorio de aprendizaje automático</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Inteligencia artificial</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    <b>


                                                                                        Aprendizaje profundo


                                                                                    </b>
                                                                                    <ul>
                                                                                        <li>


                                                                                            Conceptos básicos de redes neuronales


                                                                                        </li>
                                                                                        <li>


                                                                                            Red neuronal artificial (ANN)


                                                                                        </li>
                                                                                        <li>


                                                                                            Propagación hacia adelante


                                                                                        </li>
                                                                                        <li>


                                                                                            Propagación hacia atrás


                                                                                        </li>
                                                                                        <li>


                                                                                            Redes neuronales profundas


                                                                                        </li>
                                                                                        <li>


                                                                                            Redes neuronales recurrentes (RNN)


                                                                                        </li>
                                                                                        <li>


                                                                                            Deep Learning aplicado a imágenes usando CNN


                                                                                        </li>
                                                                                        <li>


                                                                                            Tensor Flow para redes neuronales y aprendizaje
                                                                                            profundo

                                                                                            {" "}
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Visión por computador</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Redes neuronales convolucionales</li>
                                                                                <li>Biblioteca Keras para aprendizaje profundo en Python</li>
                                                                                <li>Datos de imagen de preprocesamiento</li>
                                                                                <li>Reconocimiento de objetos y rostros</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Visualización</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Visualización de funciones y núcleos</li>
                                                                                <li>TensorBoard: visualización del aprendizaje,
                                                                                    visualización de gráficos</li>
                                                                                <li>Síntesis y transferencia de estilo.</li>
                                                                                <li>Estudio de caso: visualización de una red neuronal
                                                                                    complicada</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Procesamiento natural del lenguaje</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Biblioteca de PNL NLTK</li>
                                                                                <li>PNL estadístico y similitud de texto</li>
                                                                                <li>Sintaxis y técnicas de análisis</li>
                                                                                <li>Técnicas de resumen de texto.</li>
                                                                                <li>Semántica y Generación</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Agentes inteligentes</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Técnicas de búsqueda no informadas y basadas en
                                                                                    heurísticas</li>
                                                                                <li>Búsqueda adversaria y sus usos</li>
                                                                                <li>Técnicas de planificación y satisfacción de
                                                                                    restricciones.</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Idioma y herramientas</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Pitón</li>
                                                                                <li>Bibliotecas de datos como Pandas, Numpy, Scipy</li>
                                                                                <li>Biblioteca Python ML scikit-learn</li>
                                                                                <li>Biblioteca de visualización de Python Matplotlib</li>
                                                                                <li>Biblioteca de PNL NLTK</li>
                                                                                <li>Flujo de tensor</li>
                                                                                <li>Duro</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">proyecto final</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Presentación de grupo</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                                : ''}
                            {/* End - final[0].curriculum_id == '166' */}


                            {/* final[0].curriculum_id == '167' */}
                            {final[0].curriculum_id == '167' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introducción a la ciencia de datos
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Conceptos básicos de matemáticas/programación
                                                                                    informática
                                                                                </li>
                                                                                <li>Estadísticas</li>
                                                                                <li>Introducción a R</li>
                                                                                <li>
                                                                                    Introducción a Python (Python básico, bibliotecas
                                                                                    relacionadas con la ciencia de datos, como NumPy,
                                                                                    Scikit, etc.
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Conceptos básicos de la gestión de datos
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Introducción a SQL/DataBase (RDBMS, Oracle, MySQL, etc.)
                                                                                </li>
                                                                                <li>
                                                                                    Introducción a Big Data (Introducción a
                                                                                    NoSQL/Spark/Hadoop/exadata, etc.)
                                                                                </li>
                                                                                <li>Procesamiento de datos</li>
                                                                                <li>Visualización (tabla, powerBI, etc.)</li>
                                                                                <li>Estadísticas avanzadas</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Aprendizaje automático
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Descripción general del algoritmo de aprendizaje
                                                                                    automático
                                                                                </li>
                                                                                <li>Algoritmos de aprendizaje supervisado</li>
                                                                                <li>Regresión: Polinomio</li>
                                                                                <li>Clasificación: Binario</li>
                                                                                <li>Clasificación: KNN</li>
                                                                                <li>Clasificación: Multiclase</li>
                                                                                <li>Clasificación: SVM</li>
                                                                                <li>Clasificación: árboles de decisión</li>
                                                                                <li>Clasificación: Bosque aleatorio</li>
                                                                                <li>
                                                                                    Conceptos: descenso de gradiente, Train_Test_Split, K
                                                                                    Fold Cross Validation, selección de características,
                                                                                    escalado de características, etc.
                                                                                </li>
                                                                                <li>
                                                                                    Conceptos: Sobreajuste, Matriz de Confusión, Curva ROC,
                                                                                    etc.
                                                                                </li>
                                                                                <li>Clasificación: Redes Neuronales</li>
                                                                                <li>Aprendizaje sin supervisión</li>
                                                                                <li>KMA/agrupación</li>
                                                                                <li>
                                                                                    Motor de recomendaciones/clasificaciones de películas,
                                                                                    etc.
                                                                                </li>
                                                                                <li>Aprendizaje reforzado</li>
                                                                                <li>Proyecto final</li>
                                                                                <li>Hackatón de ML</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Aprendizaje profundo
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Bloques de construcción</li>
                                                                                <li>Bibliotecas avanzadas de Python (Tensorflow)</li>
                                                                                <li>
                                                                                    Ciencia de datos en la nube (Google Colab, Microsoft
                                                                                    Azure ML Studio)
                                                                                </li>
                                                                                <li>PNL</li>
                                                                                <li>
                                                                                    Conceptos básicos de PNL, algoritmo de coseno, etc.
                                                                                </li>
                                                                                <li>bot conversacional</li>
                                                                                <li>Procesamiento de imagen/video</li>
                                                                                <li>CNN, RCNN, Faster-RCNN, Yolo</li>
                                                                                <li>Reconocimiento facial</li>
                                                                                <li>Reconocimiento de objetos</li>
                                                                                <li>Hackatón</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Estudios de casos específicos de la industria
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Pronóstico de series de tiempo</li>
                                                                                <li>
                                                                                    Análisis web y de redes sociales (estudio de caso de la
                                                                                    industria)
                                                                                </li>
                                                                                <li>
                                                                                    Finanzas y análisis de riesgos (estudio de caso de la
                                                                                    industria)
                                                                                </li>
                                                                                <li>
                                                                                    Market &amp; Retail Analytics (estudio de caso de la
                                                                                    industria)
                                                                                </li>
                                                                                <li>
                                                                                    Análisis de logística y cadena de suministro (estudio de
                                                                                    caso de la industria)
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                proyecto final
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Presentación de grupo</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Metodología de Enseñanza y Evaluación
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    50:50 en Teoría/Laboratorio. Como por cada bloque de 4
                                                                                    horas, 2 horas serían teoría + 2 horas de
                                                                                    laboratorio/práctica
                                                                                </li>
                                                                                <li>Tareas de inicio</li>
                                                                                <li>Cuestionarios MCQ como parte de la parte teórica</li>
                                                                                <li>Dos hackatones de 8 horas cada uno</li>
                                                                                <li>
                                                                                    Para cada Algoritmo, el flujo de entrenamiento sería el
                                                                                    siguiente:
                                                                                </li>
                                                                                <ul>
                                                                                    <li>1. Matemáticas relacionadas</li>
                                                                                    <li>2. Concepto/Algoritmo</li>
                                                                                    <li>
                                                                                        3. Introducción a la biblioteca Python o R e
                                                                                        implementación real
                                                                                    </li>
                                                                                </ul>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                                : ''}
                            {/* End - final[0].curriculum_id == '167' */}


                            {/* final[0].curriculum_id == '114' */}
                            {final[0].curriculum_id == '114' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child">
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3">
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Cimientos en la nube</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    ¿Qué es la computación en la nube?
                                                                                </li>
                                                                                <li>
                                                                                    Modelos de implementación
                                                                                </li>
                                                                                <li>
                                                                                    Modelos de servicio
                                                                                </li>
                                                                                <li>
                                                                                    Ventajas de la computación en la nube
                                                                                </li>
                                                                                <li>
                                                                                    Desventajas de la computación en la nube
                                                                                </li>
                                                                                <li>
                                                                                    Características de la computación en la nube
                                                                                </li>
                                                                                <li>
                                                                                    Introducción a la Virtualización (VM's y
                                                                                    Contenedores)
                                                                                </li>
                                                                                <li>
                                                                                    Modelos de implementación y entrega de servicios
                                                                                </li>
                                                                                <li>
                                                                                    Taxonomía de servicios y atributos de la nube
                                                                                </li>
                                                                                <li>
                                                                                    Introducción a la automatización de la
                                                                                    infraestructura
                                                                                </li>
                                                                                <li>
                                                                                    Aspectos clave de IaaS, PaaS y SaaS
                                                                                </li>
                                                                                <li>
                                                                                    Prueba
                                                                                </li>
                                                                                <li>
                                                                                    Laboratorio
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Contenedores y Microservicios</a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Estibador
                                                                                </li>
                                                                                <li>
                                                                                    microservicios
                                                                                </li>
                                                                                <li>
                                                                                    Patrones de arquitectura y diseño
                                                                                </li>
                                                                                <li>
                                                                                    Arquitectura y diseño de microservicios
                                                                                </li>
                                                                                <li>
                                                                                    Anti patrones
                                                                                </li>
                                                                                <li>
                                                                                    Arquitectura impulsada por eventos y marco CQRS
                                                                                </li>
                                                                                <li>
                                                                                    Migración de un monolito
                                                                                </li>
                                                                                <li>
                                                                                    Prueba
                                                                                </li>
                                                                                <li>
                                                                                    Laboratorio
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Gestión y análisis de grandes datos</a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Bases de datos SQL frente a NoSQL
                                                                                </li>
                                                                                <li>
                                                                                    Bases de datos NoSQL - Cassandra y DynamoDB
                                                                                </li>
                                                                                <li>
                                                                                    Particionador, Replicación, Snitch
                                                                                </li>
                                                                                <li>
                                                                                    Diseño basado en consultas y desarrollo distribuido
                                                                                </li>
                                                                                <li>
                                                                                    Hadoop, Amazon EMR, Colmena
                                                                                </li>
                                                                                <li>
                                                                                    Prueba
                                                                                </li>
                                                                                <li>
                                                                                    Laboratorio
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Adopción y migración de la nube</a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Índice de madurez de la migración y migración
                                                                                    empresarial
                                                                                </li>
                                                                                <li>
                                                                                    Integración basada en API
                                                                                </li>
                                                                                <li>
                                                                                    Estrategias de adopción de la nube
                                                                                </li>
                                                                                <li>
                                                                                    Caracterización y evaluación de aplicaciones
                                                                                </li>
                                                                                <li>
                                                                                    Análisis de carga de trabajo
                                                                                </li>
                                                                                <li>
                                                                                    Servicios de migración típicos
                                                                                </li>
                                                                                <li>
                                                                                    Prueba
                                                                                </li>
                                                                                <li>
                                                                                    Laboratorio
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Nube privada</a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Fundamentos de OpenStack
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Computación en la nube en AWS</a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Organización e identidad de AWS
                                                                                </li>
                                                                                <li>
                                                                                    Informática, almacenamiento y redes
                                                                                </li>
                                                                                <li>
                                                                                    Escalado automático, balanceo de carga y tolerancia
                                                                                    a fallas
                                                                                </li>
                                                                                <li>
                                                                                    Prueba
                                                                                </li>
                                                                                <li>
                                                                                    Laboratorio
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Servicios administrados en AWS</a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Servicios de base de datos (RDS, DynamoDB)
                                                                                </li>
                                                                                <li>
                                                                                    AWS CloudWatch, Kinesis, Athena y QuickSight
                                                                                </li>
                                                                                <li>
                                                                                    AWS SNS, SQS y asesor de confianza
                                                                                </li>
                                                                                <li>
                                                                                    Mensajería y eventos S3
                                                                                </li>
                                                                                <li>
                                                                                    ElastiCache y CloudFront
                                                                                </li>
                                                                                <li>
                                                                                    Prueba
                                                                                </li>
                                                                                <li>
                                                                                    Laboratorio
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">DevOps en AWS</a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Orquestación de contenedores (por ejemplo, ECS,
                                                                                    Kubernetes Engine)
                                                                                </li>
                                                                                <li>
                                                                                    Integración continua y despliegue continuo
                                                                                </li>
                                                                                <li>
                                                                                    Canalización de implementación (por ejemplo, AWS
                                                                                    CodePipeline, CodeCommit, CodeBuild,
                                                                                </li>
                                                                                <li>
                                                                                    CodeDeploy)
                                                                                </li>
                                                                                <li>
                                                                                    Planifique, construya, implemente y monitoree
                                                                                </li>
                                                                                <li>
                                                                                    Infraestructura como código (Terraform)
                                                                                </li>
                                                                                <li>
                                                                                    Prueba
                                                                                </li>
                                                                                <li>
                                                                                    Laboratorio
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Desarrollo en la nube</a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Arquitectura de referencia de la nube NIST
                                                                                </li>
                                                                                <li>
                                                                                    Arquitecturas de referencia de AWS
                                                                                </li>
                                                                                <li>
                                                                                    Diseño sin estado y Singleton
                                                                                </li>
                                                                                <li>
                                                                                    Adaptadores de pensamiento
                                                                                </li>
                                                                                <li>
                                                                                    Desarrollo sin servidor - AWS Lambda
                                                                                </li>
                                                                                <li>
                                                                                    PaaS - Beanstalk elástico
                                                                                </li>
                                                                                <li>
                                                                                    Servicios de contenedores elásticos – ECS
                                                                                </li>
                                                                                <li>
                                                                                    Prueba
                                                                                </li>
                                                                                <li>
                                                                                    Laboratorio
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Arquitecto de soluciones: ruta de aprendizaje oficial
                                                                                de AWS Educate</a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Redes
                                                                                </li>
                                                                                <li>
                                                                                    Descripción general de los servicios gestionados
                                                                                </li>
                                                                                <li>
                                                                                    Seguridad en la nube
                                                                                </li>
                                                                                <li>
                                                                                    Prueba
                                                                                </li>
                                                                                <li>
                                                                                    Laboratorio
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Programador de aplicaciones: ruta de aprendizaje
                                                                                oficial de AWS Educate</a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Arquitectura y DevOps
                                                                                </li>
                                                                                <li>
                                                                                    Plataformas
                                                                                </li>
                                                                                <li>
                                                                                    Datos y bases de datos
                                                                                </li>
                                                                                <li>
                                                                                    Móvil y juegos
                                                                                </li>
                                                                                <li>
                                                                                    Prueba
                                                                                </li>
                                                                                <li>
                                                                                    Laboratorio
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">microsoft azure</a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Soluciones de identidad
                                                                                </li>
                                                                                <li>
                                                                                    Implementación de datos de Azure
                                                                                </li>
                                                                                <li>
                                                                                    Servicios gestionados
                                                                                </li>
                                                                                <li>
                                                                                    Infraestructura informática de Azure
                                                                                </li>
                                                                                <li>
                                                                                    Red, seguridad y operaciones
                                                                                </li>
                                                                                <li>
                                                                                    Prueba
                                                                                </li>
                                                                                <li>
                                                                                    Laboratorio
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">Nube de Google</a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Organización e IAM
                                                                                </li>
                                                                                <li>
                                                                                    Calcular
                                                                                </li>
                                                                                <li>
                                                                                    Almacenamiento
                                                                                </li>
                                                                                <li>
                                                                                    Redes
                                                                                </li>
                                                                                <li>
                                                                                    Operaciones
                                                                                </li>
                                                                                <li>
                                                                                    Mesa grande
                                                                                </li>
                                                                                <li>
                                                                                    Prueba
                                                                                </li>
                                                                                <li>
                                                                                    Laboratorio
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button">proyecto final</a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Presentación de grupo
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            {/* End - final[0].curriculum_id == '114' */}


                            {/* final[0].curriculum_id == '118' */}
                            {final[0].curriculum_id == '118' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <h4>Módulo 1:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Acerca del esquema de marketing digital
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>¿A qué te refieres con marketing digital?</li>
                                                                                <li>
                                                                                    ¿Por qué el marketing digital es el más preferido en la
                                                                                    industria?
                                                                                </li>
                                                                                <li>Entendiendo el proceso de Marketing Digital.</li>
                                                                                <li>Visibilidad de marca esclarecedora</li>
                                                                                <li>Conceptos de tráfico dirigido a nichos</li>
                                                                                <li>
                                                                                    Implementación de estrategias para la generación de
                                                                                    leads
                                                                                </li>
                                                                                <li>
                                                                                    formas de convertir el tráfico en clientes potenciales y
                                                                                    ventas
                                                                                </li>
                                                                                <li>Formas de participación de los visitantes</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Módulo 2:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Creación de sitios web
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Planificación del sitio web</li>
                                                                                <li>Registro de dominio y alojamiento web</li>
                                                                                <li>Asignación de nombre de dominio a servidor web</li>
                                                                                <li>Importancia de la respuesta</li>
                                                                                <li>Creación de Blueprint para el sitio web</li>
                                                                                <li>Creación de páginas web y contenido (WordPress)</li>
                                                                                <li>Integración de temas y complementos</li>
                                                                                <li>Opciones de participación</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Módulo 3:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Optimización de motores de búsqueda:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Registros de dominio
                                                                                    <ul>
                                                                                        <li>Dominio para estándares SEO</li>
                                                                                        <li>Los mejores servidores para Hosting Space</li>
                                                                                        <li>Mapeo de sus dominios</li>
                                                                                        <li>
                                                                                            Herramientas para encontrar Dominios caducados
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Introducción para SEO
                                                                                    <ul>
                                                                                        <li>Introducción a SERP</li>
                                                                                        <li>Tipos de buscadores</li>
                                                                                        <li>Cómo funcionan los motores de búsqueda</li>
                                                                                        <li>Importancia SEO</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Algoritmo de Google y últimas actualizaciones
                                                                                    <ul>
                                                                                        <li>Cómo funciona el algoritmo de Google</li>
                                                                                        <li>
                                                                                            Últimas actualizaciones de Panda, Pingüino y Colibrí
                                                                                        </li>
                                                                                        <li>
                                                                                            Cómo funciona el panda, el pingüino y el colibrí
                                                                                        </li>
                                                                                        <li>Arreglando Panda, Pingüino y Colibrí</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Optimización en la página
                                                                                    <ul>
                                                                                        <li>Planificación de palabras clave</li>
                                                                                        <li>palabras clave y su importancia para el SEO</li>
                                                                                        <li>
                                                                                            Investigación de palabras clave específicas de nicho
                                                                                        </li>
                                                                                        <li>
                                                                                            Herramientas para la investigación de palabras clave
                                                                                        </li>
                                                                                        <li>
                                                                                            Herramientas para el análisis de la competencia
                                                                                        </li>
                                                                                        <li>
                                                                                            Pasos para corregir las palabras clave correctas
                                                                                            Importancia de la etiqueta de título
                                                                                        </li>
                                                                                        <li>Importancia de Meta Keyword y descripción</li>
                                                                                        <li>Estructura del sitio web</li>
                                                                                        <li>Optimización web estática y dinámica</li>
                                                                                        <li>Comprender las estructuras de URL</li>
                                                                                        <li>Importancia del contenido</li>
                                                                                        <li>Optimización de páginas web</li>
                                                                                        <li>Importancia de los blogs</li>
                                                                                        <li>Creación e Integración de Sitemaps</li>
                                                                                        <li>Integración de Google Analytics y webmaster</li>
                                                                                        <li>
                                                                                            Lista de verificación de análisis de sitios web
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Optimización fuera de página
                                                                                    <ul>
                                                                                        <li>
                                                                                            Introducción a la optimización fuera de página
                                                                                        </li>
                                                                                        <li>
                                                                                            Importancia del dominio y la autoridad de la página
                                                                                        </li>
                                                                                        <li>Importancia del flujo de confianza y la cita</li>
                                                                                        <li>¿Cómo aumentar la autoridad del dominio?</li>
                                                                                        <li>Tipos de vínculos de retroceso</li>
                                                                                        <li>Importancia de la construcción de enlaces</li>
                                                                                        <li>Tipos de construcción de enlaces</li>
                                                                                        <li>
                                                                                            Qué hacer y qué no hacer en la construcción de
                                                                                            enlaces
                                                                                        </li>
                                                                                        <li>
                                                                                            Estrategias y técnicas para la construcción de
                                                                                            enlaces (el rango de página ya no existe)
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    SEO locales:
                                                                                    <ul>
                                                                                        <li>Listado de empresas locales</li>
                                                                                        <li>Optimización de lugares de Google</li>
                                                                                        <li>Mejorando las clasificaciones</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Informes SEO
                                                                                    <ul>
                                                                                        <li>Lista de herramientas SEO</li>
                                                                                        <li>
                                                                                            Informe de auditoría de SEO en la página y fuera de
                                                                                            la página
                                                                                        </li>
                                                                                        <li>Seguimiento del proceso de SEO</li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Módulo 4:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Marketing de motores de búsqueda:
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Introducción - Éxito con las campañas de AdWords
                                                                                    <ul>
                                                                                        <li>Introducción al pago por clic</li>
                                                                                        <li>Ventajas de PPC</li>
                                                                                        <li>Entidades involucradas en la publicidad PPC</li>
                                                                                        <li>Modelo de un anuncio de PPC</li>
                                                                                        <li>Propiedades de un anuncio PPC convincente</li>
                                                                                        <li>Fórmula general para calcular PPC</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Páginas de destino
                                                                                    <ul>
                                                                                        <li>Introducción a las páginas de aterrizaje</li>
                                                                                        <li>Tipos de páginas de aterrizaje</li>
                                                                                        <li>
                                                                                            Creación de páginas de aterrizaje dirigidas a nichos
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    El nivel de calidad define su éxito
                                                                                    <ul>
                                                                                        <li>
                                                                                            ¿Qué es el Quality Score y cuál es su importancia?
                                                                                        </li>
                                                                                        <li>
                                                                                            ¿Qué tan alto debe ser su clasificación de
                                                                                            puntuación de calidad?
                                                                                        </li>
                                                                                        <li>
                                                                                            Google permite que los usuarios clasifiquen sus
                                                                                            anuncios por CTR
                                                                                        </li>
                                                                                        <li>
                                                                                            Las tres primeras posiciones amarillas/rosadas en
                                                                                            Google Ad Words
                                                                                        </li>
                                                                                        <li>
                                                                                            Cómo puede obtener el nivel de calidad de sus
                                                                                            palabras clave
                                                                                        </li>
                                                                                        <li>
                                                                                            Cómo puede salvaguardar un puntaje de alta calidad
                                                                                        </li>
                                                                                        <li>
                                                                                            Pautas de puntuación de calidad de la página de
                                                                                            destino
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Estructura de campaña y cuenta de facturación de AdWords
                                                                                    <ul>
                                                                                        <li>Crear la cuenta</li>
                                                                                        <li>Presupuesto prepago</li>
                                                                                        <li>Presupuesto pospago</li>
                                                                                        <li>Método de facturación</li>
                                                                                        <li>Facturación Mensual</li>
                                                                                        <li>Agrupación de palabras clave</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Herramientas de AdWords
                                                                                    <ul>
                                                                                        <li>Herramientas de palabras clave</li>
                                                                                        <li>Exclusión de IP</li>
                                                                                        <li>Estimador de tráfico</li>
                                                                                        <li>Estadísticas para la búsqueda</li>
                                                                                        <li>Herramienta de diagnóstico de anuncios</li>
                                                                                        <li>El universo de Google Ad Words</li>
                                                                                        <li>Socios de búsqueda de Google</li>
                                                                                        <li>Red de Display de Google</li>
                                                                                        <li>Red de vídeo de Google</li>
                                                                                        <li>Red de aplicaciones de Google</li>
                                                                                        <li>Producto de Google</li>
                                                                                        <li>Red de publicidad móvil</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Configuración en Google Search AdWords
                                                                                    <ul>
                                                                                        <li>Ubicaciones e Idiomas</li>
                                                                                        <li>Redes y Dispositivos</li>
                                                                                        <li>Licitación y Presupuesto</li>
                                                                                        <li>Método de entrega (avanzado)</li>
                                                                                        <li>Extensiones de anuncios</li>
                                                                                        <li>Ejemplo de extensión de ubicación</li>
                                                                                        <li>Ejemplo de extensión de llamada</li>
                                                                                        <li>Ajustes avanzados</li>
                                                                                        <li>
                                                                                            Publicación de anuncios: rotación de anuncios,
                                                                                            limitación de frecuencia
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Configuración de la campaña de búsqueda de Google Ad
                                                                                    Words
                                                                                    <ul>
                                                                                        <li>Idioma</li>
                                                                                        <li>Redes</li>
                                                                                        <li>Licitación y Presupuesto</li>
                                                                                        <li>Extensiones de anuncios</li>
                                                                                        <li>Ajustes avanzados</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Palabras clave
                                                                                    <ul>
                                                                                        <li>Palabras clave de concordancia amplia</li>
                                                                                        <li>Modificador de concordancia amplia</li>
                                                                                        <li>Concordancia de frase</li>
                                                                                        <li>Coincidencia exacta</li>
                                                                                        <li>Investigación de palabras clave</li>
                                                                                        <li>Deje que Google trabaje para usted</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Palabras clave negativas
                                                                                    <ul>
                                                                                        <li>¿Cómo funcionan las palabras clave negativas?</li>
                                                                                        <li>
                                                                                            Esculpir campañas con palabras clave negativas
                                                                                        </li>
                                                                                        <li>
                                                                                            Crear una gran lista de palabras clave negativas
                                                                                        </li>
                                                                                        <li>¿Cómo se agregan palabras clave negativas?</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Seguimiento de campañas de Google Ad Words
                                                                                    <ul>
                                                                                        <li>
                                                                                            Seguimiento de conversiones de Google Ad Words
                                                                                        </li>
                                                                                        <li>Vinculación con Google Analytics</li>
                                                                                        <li>Importación de objetivos de Google Analytics</li>
                                                                                        <li>Embudo de búsqueda de palabras publicitarias</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Gestión de ofertas y su presupuesto diario
                                                                                    <ul>
                                                                                        <li>
                                                                                            ¿Cómo establecer la oferta correcta la primera vez?
                                                                                        </li>
                                                                                        <li>La subasta de palabras publicitarias</li>
                                                                                        <li>Dar forma a su presupuesto diario</li>
                                                                                        <li>Pequeño Truco para Campañas</li>
                                                                                        <li>
                                                                                            Gestión de ofertas a nivel de grupo de anuncios
                                                                                            frente a nivel de palabra clave
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Landing Pages: la extensión de Google Ad Words
                                                                                    <ul>
                                                                                        <li>Pruebe sus páginas de destino actuales</li>
                                                                                        <li>Imita anuncios exitosos y su redacción</li>
                                                                                        <li>Consejos generales sobre la página de destino</li>
                                                                                        <li>Recuerde su nivel de calidad</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Optimización de sus campañas de palabras publicitarias
                                                                                    <ul>
                                                                                        <li>Todo es una gran prueba A/B</li>
                                                                                        <li>¿Cuanto tiempo necesitas?</li>
                                                                                        <li>Optimización de anuncios</li>
                                                                                        <li>Gestión de ofertas</li>
                                                                                        <li>Escalar su lista de palabras clave</li>
                                                                                        <li>Palabras clave negativas</li>
                                                                                        <li>Incluir ofertas actuales y</li>
                                                                                        <li>Optimización del nivel de calidad</li>
                                                                                        <li>Importancia del seguimiento de conversiones</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    La interfaz de palabras publicitarias
                                                                                    <ul>
                                                                                        <li>Redes</li>
                                                                                        <li>Extensiones de anuncios</li>
                                                                                        <li>Dimensiones</li>
                                                                                        <li>
                                                                                            ¿Cuáles son las métricas que necesitará en su
                                                                                            interfaz de Ad Words?
                                                                                        </li>
                                                                                        <li>
                                                                                            Funciones de la interfaz de palabras publicitarias
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Editor de AdWords
                                                                                    <ul>
                                                                                        <li>
                                                                                            Introducción e importancia del editor de AdWords
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Cuenta de Mi centro de clientes (MCC) en Google Ad Words
                                                                                    <ul>
                                                                                        <li>¿Cómo se obtiene una cuenta de MCC?</li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Módulo 5:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Marketing de medios sociales:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Descripción general del marketing en redes sociales
                                                                                    <ul>
                                                                                        <li>Introducción</li>
                                                                                        <li>Tipos de promoción</li>
                                                                                        <li>Importancia de la página de destino</li>
                                                                                        <li>
                                                                                            Herramientas que debes usar en Social Media
                                                                                            Marketing
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Facebook Marketing (Promociones B2B y B2C)
                                                                                    <ul>
                                                                                        <li>
                                                                                            Introducción a la publicidad en Facebook en 2016
                                                                                        </li>
                                                                                        <li>
                                                                                            Evaluación de sus anuncios competitivos de Facebook
                                                                                        </li>
                                                                                        <li>Trabajando en la herramienta Power Editor</li>
                                                                                        <li>Creación de anuncios de Facebook</li>
                                                                                        <li>Creación de informes de anuncios de Facebook</li>
                                                                                        <li>
                                                                                            Crear anuncios de Instagram usando anuncios de
                                                                                            Facebook
                                                                                        </li>
                                                                                        <li>
                                                                                            Estudiando y mejorando los anuncios de Instagram
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    LinkedIn Marketing (Promociones B2B)
                                                                                    <ul>
                                                                                        <li>Introducción a los anuncios de LinkedIn</li>
                                                                                        <li>Análisis competitivo en LinkedIn Ads</li>
                                                                                        <li>Creación de anuncios de LinkedIn</li>
                                                                                        <li>Elaboración de informes de análisis</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    mercadeo en twitter
                                                                                    <ul>
                                                                                        <li>Campaña de anuncios de Twitter para empresas</li>
                                                                                        <li>Reporte de análisis</li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Módulo 6:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Marketing de visualización en línea:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Descripción general de los anuncios gráficos</li>
                                                                                <li>Importancia de los anuncios gráficos</li>
                                                                                <li>Tipos de anuncios gráficos</li>
                                                                                <li>Mostrar VS Anuncios Contextuales</li>
                                                                                <li>Trabajar con redes publicitarias de display</li>
                                                                                <li>Seguimiento y medición del ROI</li>
                                                                                <li>Generación de informes</li>
                                                                                <li>
                                                                                    Múltiples formatos de anuncios, criterios de orientación
                                                                                    y remarketing
                                                                                </li>
                                                                                <li>
                                                                                    Aprenda a publicar videos en YouTube usando AdWords
                                                                                </li>
                                                                                <li>
                                                                                    Adverso en la red de display usando la plataforma móvil
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Módulo 7:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Correo de propaganda:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Por qué usar el marketing por correo electrónico en
                                                                                    absoluto
                                                                                    <ul>
                                                                                        <li>
                                                                                            ¿Cuál es el objetivo de usar un servicio profesional
                                                                                            de marketing por correo electrónico?
                                                                                        </li>
                                                                                        <li>
                                                                                            Proyecto original de marketing por correo
                                                                                            electrónico
                                                                                        </li>
                                                                                        <li>
                                                                                            Razones para elegir el marketing por correo
                                                                                            electrónico
                                                                                        </li>
                                                                                        <li>Importancia de la industria publicitaria</li>
                                                                                        <li>
                                                                                            ¿Diferencia entre Email Marketing y Publicidad?
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Tipos de marketing por correo electrónico
                                                                                    <ul>
                                                                                        <li>correo electrónico de suscripción</li>
                                                                                        <li>Suscripción doble</li>
                                                                                        <li>Correo electrónico de difusión</li>
                                                                                        <li>Correo electrónico de respuesta automática</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Configuración de campañas de correo electrónico
                                                                                    <ul>
                                                                                        <li>Creación de páginas de aterrizaje</li>
                                                                                        <li>Diseño y construcción</li>
                                                                                        <li>Terminación, prueba y envío</li>
                                                                                        <li>
                                                                                            Creación de campaña de correo electrónico masivo
                                                                                        </li>
                                                                                        <li>Segmentos de seguimiento avanzados</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Consejos para la campaña de correo electrónico
                                                                                    <ul>
                                                                                        <li>Violaciones de spam</li>
                                                                                        <li>Directrices para el cumplimiento de CAN-SPAM</li>
                                                                                        <li>
                                                                                            Consejos para enviar correos electrónicos
                                                                                            directamente a la bandeja de entrada en lugar de a
                                                                                            la carpeta de correo no deseado
                                                                                        </li>
                                                                                        <li>
                                                                                            Lista de los mejores software de marketing por
                                                                                            correo electrónico
                                                                                        </li>
                                                                                        <li>
                                                                                            Implementación de pruebas A/B para aumentar el ROI
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Módulo 8:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Gestión de la reputación en línea:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Descripción general de ORM</li>
                                                                                <li>Importancia de ORM</li>
                                                                                <li>Comprensión de los conceptos de ORM</li>
                                                                                <li>¿Cómo puedes lidiar con las críticas en línea?</li>
                                                                                <li>Los 10 principales mandamientos de ORM</li>
                                                                                <li>Crear una imagen de marca positiva en línea</li>
                                                                                <li>Herramientas de monitoreo para ORM</li>
                                                                                <li>Los mejores ejemplos de ORM</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Módulo 9:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Google analitico:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Resumen de análisis de Google</li>
                                                                                <li>¿Cuál es el mecanismo de Google Analytics?</li>
                                                                                <li>Resumen de la estructura de análisis de Google</li>
                                                                                <li>Importancia de los conocimientos analíticos</li>
                                                                                <li>La importancia del seguimiento de cookies</li>
                                                                                <li>Uso de cookies de Google Analytics en sitios web</li>
                                                                                <li>Configuración de la cuenta de análisis de Google</li>
                                                                                <li>Adición de código analítico en un sitio web</li>
                                                                                <li>Estado de objetivos y conversiones</li>
                                                                                <li>
                                                                                    ¿Cómo se pueden configurar las conversiones de
                                                                                    objetivos?
                                                                                </li>
                                                                                <li>
                                                                                    Importancia de la tasa de rebote y la tasa de salida
                                                                                </li>
                                                                                <li>¿Cómo son vitales los embudos?</li>
                                                                                <li>Configurar embudos en los objetivos</li>
                                                                                <li>Integración de AdWords y cuenta de análisis</li>
                                                                                <li>
                                                                                    Estrategias de marketing a través de Google Analytics
                                                                                </li>
                                                                                <li>Resumen del Administrador de etiquetas</li>
                                                                                <li>Cómo configurar el etiquetado de enlaces</li>
                                                                                <li>Importancia de los filtros y segmentos</li>
                                                                                <li>Monitoreo de fuentes de tráfico y comportamiento</li>
                                                                                <li>Informes de análisis web</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Módulo 10:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                El marketing móvil:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Fundamentos de la aplicación móvil
                                                                                    <ul>
                                                                                        <li>
                                                                                            Introducción a las aplicaciones móviles para
                                                                                            empresas
                                                                                        </li>
                                                                                        <li>Plataformas Desarrollo de aplicaciones</li>
                                                                                        <li>Tipos de tiendas de aplicaciones</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Lanzamiento de la aplicación como Pro
                                                                                    <ul>
                                                                                        <li>Formas de iniciar la aplicación</li>
                                                                                        <li>Pros y contras de la aplicación</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Ganar dinero desde la aplicación
                                                                                    <ul>
                                                                                        <li>Instalaciones gratuitas VS de pago</li>
                                                                                        <li>Ganar dinero con la aplicación</li>
                                                                                        <li>
                                                                                            Estrategias para ganar dinero con la aplicación
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Optimización de la tienda de aplicaciones
                                                                                    <ul>
                                                                                        <li>Introducción</li>
                                                                                        <li>Investigación de palabras clave</li>
                                                                                        <li>Análisis competitivo</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Formas de promocionar y comercializar su aplicación
                                                                                    <ul>
                                                                                        <li>
                                                                                            Aumento de las señales positivas de la aplicación
                                                                                        </li>
                                                                                        <li>
                                                                                            Estrategias para las revisiones para obtener una
                                                                                            clasificación más alta
                                                                                        </li>
                                                                                        <li>
                                                                                            Mejorar la descarga de aplicaciones regularmente
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Herramientas de aplicaciones
                                                                                    <ul>
                                                                                        <li>Herramientas de análisis de aplicaciones</li>
                                                                                        <li>
                                                                                            Herramientas de investigación de palabras clave de
                                                                                            la aplicación
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Módulo 11:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                La comercialización del afiliado:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Acerca del marketing de afiliados</li>
                                                                                <li>Modelos de Marketing de Afiliados</li>
                                                                                <li>¿Cómo producir y convertir leads?</li>
                                                                                <li>Secretos y estrategias de marketing de afiliación</li>
                                                                                <li>inaugurar como afiliado</li>
                                                                                <li>
                                                                                    ¿Cómo se puede ganar dinero con el marketing de
                                                                                    afiliación?
                                                                                </li>
                                                                                <li>Principales redes afiliadas</li>
                                                                                <li>
                                                                                    Cómo ser aceptado como afiliado por las principales
                                                                                    redes de afiliados
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                proyecto final
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Presentación de grupo</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            {/* End - final[0].curriculum_id == '118' */}


                            {/* final[0].curriculum_id == '168' */}
                            {final[0].curriculum_id == '168' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child">
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3">
                                                                <h2 className="font-semibold mt-3 mb-3 text-xl md:text-2xl">
                                                                    PGP- Seguridad Cibernética </h2>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Informática y Ciberseguridad
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    leyes cibernéticas
                                                                                </li>
                                                                                <li>
                                                                                    Introducción a los computadores
                                                                                </li>
                                                                                <li>
                                                                                    Historia de la computadora
                                                                                </li>
                                                                                <li>
                                                                                    software y hardware
                                                                                </li>
                                                                                <li>
                                                                                    Clasificación de la computadora
                                                                                </li>
                                                                                <li>
                                                                                    Dispositivos de entrada y salida
                                                                                </li>
                                                                                <li>
                                                                                    ventanas
                                                                                </li>
                                                                                <li>
                                                                                    Comandos de solicitud de DOS.{" "}
                                                                                    Terminal y comandos de Linux/Mac
                                                                                </li>
                                                                                <li>
                                                                                    Terminología informática básica
                                                                                </li>
                                                                                <li>
                                                                                    Modelos de seguridad informática
                                                                                </li>
                                                                                <li>
                                                                                    Términos y ética de la seguridad informática
                                                                                </li>
                                                                                <li>
                                                                                    Ética Empresarial y Profesional
                                                                                </li>
                                                                                <li>
                                                                                    Necesidad de seguridad cibernética
                                                                                </li>
                                                                                <li>
                                                                                    Fraudes y delitos cibernéticos
                                                                                </li>
                                                                                <li>
                                                                                    Pagos digitales digitales
                                                                                </li>
                                                                                <li>
                                                                                    Varios motores de búsqueda
                                                                                </li>
                                                                                <li>
                                                                                    Introducción a la Auditoría
                                                                                </li>
                                                                                <li>
                                                                                    Red profunda
                                                                                </li>
                                                                                <li>    VAPT</li>
                                                                                <li>
                                                                                    Sistemas operativos de teléfonos inteligentes
                                                                                </li>
                                                                                <li>
                                                                                    Introducción a las conformidades
                                                                                </li>
                                                                                <li>
                                                                                    Globalización y mundo sin fronteras
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> leyes cibernéticas
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <ul>
                                                                                    <li>
                                                                                        Necesidad de Regulaciones Cibernéticas;


                                                                                    </li>
                                                                                    <li>
                                                                                        Alcance y significado de las leyes cibernéticas:
                                                                                        Ley de tecnología de la información de 2000;


                                                                                    </li>
                                                                                    <li>
                                                                                        Redes y Seguridad de Redes,


                                                                                    </li>
                                                                                    <li>
                                                                                        Acceso y Acceso No Autorizado,


                                                                                    </li>
                                                                                    <li>
                                                                                        Seguridad de datos,


                                                                                    </li>
                                                                                    <li>
                                                                                        Contratos E y Formularios E


                                                                                    </li>
                                                                                    <li>
                                                                                        Disposiciones Penales por Phishing,


                                                                                    </li>
                                                                                    <li>
                                                                                        Correo no deseado,


                                                                                    </li>
                                                                                    <li>
                                                                                        Virus,


                                                                                    </li>
                                                                                    <li>
                                                                                        gusanos,


                                                                                    </li>
                                                                                    <li>
                                                                                        programa malicioso,


                                                                                    </li>
                                                                                    <li>
                                                                                        Hackear,


                                                                                    </li>
                                                                                    <li>
                                                                                        allanamiento y acecho;


                                                                                    </li>
                                                                                    <li>
                                                                                        Derechos humanos en el ciberespacio,


                                                                                    </li>
                                                                                    <li>
                                                                                        Internacional C Cooperación internacional en la
                                                                                        investigación


                                                                                    </li>
                                                                                    <li>
                                                                                        Crímenes cibernéticos


                                                                                    </li>
                                                                                </ul>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Introducción a la seguridad de la red
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    tipos de redes,
                                                                                </li>
                                                                                <li>
                                                                                    Dirección IP,
                                                                                </li>
                                                                                <li>    NAT,</li>
                                                                                <li>
                                                                                    subredes IP,
                                                                                </li>
                                                                                <li>
                                                                                    Servidor DHCP,
                                                                                </li>
                                                                                <li>
                                                                                    puertos,
                                                                                </li>
                                                                                <li>    DNS,</li>
                                                                                <li>
                                                                                    servidores proxy,
                                                                                </li>
                                                                                <li>
                                                                                    redes privadas virtuales,
                                                                                </li>
                                                                                <li>
                                                                                    Servidor DNS,
                                                                                </li>
                                                                                <li>
                                                                                    Modelo IP OSI y TCP,
                                                                                </li>
                                                                                <li>
                                                                                    enrutadores,
                                                                                </li>
                                                                                <li>
                                                                                    interruptores,
                                                                                </li>
                                                                                <li>
                                                                                    punto final
                                                                                </li>
                                                                                <li>
                                                                                    Soluciones,
                                                                                </li>
                                                                                <li>
                                                                                    directorio de acceso,
                                                                                </li>
                                                                                <li>
                                                                                    Red TOR.
                                                                                </li>
                                                                                <li>
                                                                                    Dispositivos de red (capa 1, 2, 3) -Diferentes tipos
                                                                                </li>
                                                                                <li>
                                                                                    de ataques a la capa de red – Firewall (ACL, Packet
                                                                                </li>
                                                                                <li>
                                                                                    filtrado, DMZ, alertas y registros de auditoría) –
                                                                                    IDS,
                                                                                </li>
                                                                                <li>
                                                                                    IPS y sus tipos (basado en firma,
                                                                                </li>
                                                                                <li>
                                                                                    basado en anomalías,
                                                                                </li>
                                                                                <li>
                                                                                    Basado en políticas, basado en Honeypot)
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Redes Privadas Virtuales
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    VPN y sus tipos – Protocolos de tunelización – Túnel
                                                                                    y modo de transporte – Carga útil de seguridad de
                                                                                    encapsulación de encabezado de autenticación (ESP) –
                                                                                    Conjunto de protocolos IPSEC – IKE FASE 1, II –
                                                                                    Encapsulación de enrutamiento genérico (GRE).
                                                                                </li>
                                                                                <li>
                                                                                    Implementación de VPN
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Parte de ataques de red
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Rastreo de red
                                                                                </li>
                                                                                <li>
                                                                                    Tiburón alambre
                                                                                </li>
                                                                                <li>
                                                                                    Análisis de paquetes
                                                                                </li>
                                                                                <li>
                                                                                    Mostrar y capturar filtros
                                                                                </li>
                                                                                <li>
                                                                                    Ettercap
                                                                                </li>
                                                                                <li>    DNS</li>
                                                                                <li>
                                                                                    Envenenamiento
                                                                                </li>
                                                                                <li>
                                                                                    Envenenamiento por ARP
                                                                                </li>
                                                                                <li>
                                                                                    denegación de servicios
                                                                                </li>
                                                                                <li>
                                                                                    Escaneo de vulnerabilidades
                                                                                </li>
                                                                                <li>
                                                                                    nessus
                                                                                </li>
                                                                                <li>
                                                                                    La red
                                                                                </li>
                                                                                <li>
                                                                                    Políticas
                                                                                </li>
                                                                                <li>
                                                                                    EVA abierto
                                                                                </li>
                                                                                <li>
                                                                                    Esparta
                                                                                </li>
                                                                                <li>
                                                                                    Generación de informes de escaneo de red
                                                                                </li>
                                                                                <li>
                                                                                    Endurecimiento del sistema.
                                                                                </li>
                                                                                <li>
                                                                                    Configuraciones seguras del sistema.
                                                                                </li>
                                                                                <li>
                                                                                    Franja SSL.
                                                                                </li>
                                                                                <li>
                                                                                    Configurar red IDS/IPS.
                                                                                </li>
                                                                                <li>
                                                                                    Ataques de enrutadores.
                                                                                </li>
                                                                                <li>
                                                                                    Pentesting VPN.
                                                                                </li>
                                                                                <li>
                                                                                    Pentesting VOIP
                                                                                </li>
                                                                                <li>
                                                                                    Detección de sistema operativo de explotación de red
                                                                                    en la red,
                                                                                </li>
                                                                                <li>
                                                                                    Nmap, puertos abiertos,
                                                                                </li>
                                                                                <li>
                                                                                    puertos filtrados,
                                                                                </li>
                                                                                <li>
                                                                                    Redes Privadas Virtuales
                                                                                </li>
                                                                                <li>
                                                                                    Ataques de red Parte 1
                                                                                </li>
                                                                                <li>
                                                                                    Detección de servicios,
                                                                                </li>
                                                                                <li>
                                                                                    Marco Metasploit,
                                                                                </li>
                                                                                <li>
                                                                                    Interfaz del framework metasploit,
                                                                                </li>
                                                                                <li>
                                                                                    Vulnerabilidad de la red
                                                                                </li>
                                                                                <li>
                                                                                    Evaluación,
                                                                                </li>
                                                                                <li>
                                                                                    Evadir antivirus y cortafuegos,
                                                                                </li>
                                                                                <li>
                                                                                    Secuencias de comandos de Metasploit en secuencias
                                                                                    de comandos de Metasploit,
                                                                                </li>
                                                                                <li>
                                                                                    hazañas,
                                                                                </li>
                                                                                <li>
                                                                                    vulnerabilidades,
                                                                                </li>
                                                                                <li>
                                                                                    cargas útiles,
                                                                                </li>
                                                                                <li>
                                                                                    cargas útiles personalizadas,
                                                                                </li>
                                                                                <li>
                                                                                    configuración de Nmap,
                                                                                </li>
                                                                                <li>
                                                                                    kit de herramientas de ingeniería social,
                                                                                </li>
                                                                                <li>
                                                                                    Explotación de Xero
                                                                                </li>
                                                                                <li>
                                                                                    Estructura,
                                                                                </li>
                                                                                <li>
                                                                                    Entrega de exploits.
                                                                                </li>
                                                                                <li>
                                                                                    Puesto final de Seguridad
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Ataques inalámbricos
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    protocolos,
                                                                                </li>
                                                                                <li>
                                                                                    Filtrado MAC,
                                                                                </li>
                                                                                <li>
                                                                                    cifrado de paquetes,
                                                                                </li>
                                                                                <li>
                                                                                    rastreo de paquetes,
                                                                                </li>
                                                                                <li>
                                                                                    Tipos de autenticación,
                                                                                </li>
                                                                                <li>    ARP</li>
                                                                                <li>
                                                                                    ataque de repetición,
                                                                                </li>
                                                                                <li>
                                                                                    Ataque de autenticación falsa,
                                                                                </li>
                                                                                <li>
                                                                                    de autenticación,
                                                                                </li>
                                                                                <li>
                                                                                    Ataques a WEP,
                                                                                </li>
                                                                                <li>
                                                                                    Cifrado WPA y WPA-2,
                                                                                </li>
                                                                                <li>
                                                                                    puntos de acceso falsos,
                                                                                </li>
                                                                                <li>
                                                                                    Ataque gemelo malvado,
                                                                                </li>
                                                                                <li>
                                                                                    marco de flujo
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Codificación
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Codificación: conjunto de caracteres
                                                                                </li>
                                                                                <li>
                                                                                    ASCII
                                                                                </li>
                                                                                <li>
                                                                                    UNICODIGO
                                                                                </li>
                                                                                <li>
                                                                                    Codificación de URL
                                                                                </li>
                                                                                <li>
                                                                                    Base64
                                                                                </li>
                                                                                <li>
                                                                                    Ilustración: ISBN/Código QR/Código de barras
                                                                                </li>
                                                                                <li>
                                                                                    Códigos hamming binarios y Códigos binarios hamming
                                                                                    y Códigos binarios Reedmuller
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Arquitectura de aplicaciones web
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    conceptos básicos de html,
                                                                                </li>
                                                                                <li>
                                                                                    Configuración del servidor XAMPP,
                                                                                </li>
                                                                                <li>
                                                                                    alojamiento web linux,
                                                                                </li>
                                                                                <li>
                                                                                    Apache,
                                                                                </li>
                                                                                <li>
                                                                                    virtualización,
                                                                                </li>
                                                                                <li>
                                                                                    Servidor
                                                                                </li>
                                                                                <li>
                                                                                    Configuraciones,
                                                                                </li>
                                                                                <li>
                                                                                    Cortafuegos de aplicaciones web
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Ciberseguridad y piratería ética
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Conceptos básicos de redes
                                                                                </li>
                                                                                <li>
                                                                                    Introducción a la Ciberseguridad.
                                                                                </li>
                                                                                <li>
                                                                                    Recopilación de información.
                                                                                </li>
                                                                                <li>
                                                                                    Seguridad física
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Ataques de aplicaciones
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Análisis y piratería de Windows-10
                                                                                </li>
                                                                                <li>
                                                                                    Hackeo de Google
                                                                                </li>
                                                                                <li>
                                                                                    Hackeo de contraseñas de aplicaciones
                                                                                </li>
                                                                                <li>
                                                                                    Ingeniería inversa y técnicas de craqueo de software
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Ataques de red
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Hackeo y seguimiento de correo electrónico.
                                                                                </li>
                                                                                <li>
                                                                                    Análisis de ataques de malware, puertas traseras y
                                                                                    dispositivos portátiles.
                                                                                </li>
                                                                                <li>
                                                                                    Codificación
                                                                                </li>
                                                                                <li>
                                                                                    Arquitectura de aplicaciones web
                                                                                </li>
                                                                                <li>
                                                                                    Ciberseguridad y piratería ética
                                                                                </li>
                                                                                <li>
                                                                                    Ataques de aplicaciones
                                                                                </li>
                                                                                <li>
                                                                                    Ataques de red
                                                                                </li>
                                                                                <li>
                                                                                    Ataques DoS, DDoS y desbordamiento de búfer
                                                                                </li>
                                                                                <li>
                                                                                    Análisis y rastreo de paquetes de red
                                                                                </li>
                                                                                <li>    Spam</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Análisis de seguridad cibernética y contramedidas
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Tecnologías de cortafuegos.
                                                                                </li>
                                                                                <li>
                                                                                    Análisis IDS, IPS y Honeypots.
                                                                                </li>
                                                                                <li>
                                                                                    Hackear Routers, Cable Modems y Firewall.
                                                                                </li>
                                                                                <li>
                                                                                    Criptografía con diferentes Aplicaciones.
                                                                                </li>
                                                                                <li>
                                                                                    Código de autenticación de mensajes y funciones hash
                                                                                </li>
                                                                                <li>
                                                                                    Criptografía de clave pública y Bitcoin
                                                                                </li>
                                                                                <li>
                                                                                    Criptografía de clave secreta
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Análisis de seguridad avanzado
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Técnicas de filtrado de contenido de Internet
                                                                                </li>
                                                                                <li>
                                                                                    Dispositivos de seguridad
                                                                                </li>
                                                                                <li>
                                                                                    Introducción a ISO 27001 y políticas de seguridad
                                                                                </li>
                                                                                <li>
                                                                                    Recuperación ante desastres y planificación
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Ley de tecnología de la información de la India
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Ley de enmiendas a la tecnología de la información
                                                                                    de 2008
                                                                                </li>
                                                                                <li>
                                                                                    Estudios de casos y noticias de piratería
                                                                                </li>
                                                                                <li>
                                                                                    Auditoría de PC y análisis de virus
                                                                                </li>
                                                                                <li>
                                                                                    Espionaje Corporativo y Económico
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Vulnerabilidades y Ataques
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Vulnerabilidades de aplicaciones web
                                                                                </li>
                                                                                <li>
                                                                                    Secuestro de sesión e inyección de SQL
                                                                                </li>
                                                                                <li>
                                                                                    Phishing y Fraudes Financieros
                                                                                </li>
                                                                                <li>
                                                                                    Protocolos de seguridad
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Pruebas Penetrantes
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    piratería de linux
                                                                                </li>
                                                                                <li>
                                                                                    Hackear redes inalámbricas
                                                                                </li>
                                                                                <li>
                                                                                    Análisis de explotación
                                                                                </li>
                                                                                <li>
                                                                                    Auditorías de red y web
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Adquisición de datos y análisis forense
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Adquisición de datos y recuperación de datos
                                                                                    forenses
                                                                                </li>
                                                                                <li>
                                                                                    Análisis forense del sistema operativo
                                                                                </li>
                                                                                <li>
                                                                                    Análisis forense en la nube
                                                                                </li>
                                                                                <li>
                                                                                    Hackear teléfonos móviles, PDA y sus contramedidas
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> Adquisición de datos y análisis forense
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Investigación de delitos cibernéticos
                                                                                </li>
                                                                                <li>
                                                                                    Guerra cibernética, terrorismo y redes sociales
                                                                                </li>
                                                                                <li>
                                                                                    Análisis forense cibernético y manejo de incidentes
                                                                                </li>
                                                                                <li>
                                                                                    Caso de estudio
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading">
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"> proyecto final
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true">
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Presentación de grupo
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                                : ''}
                            {/* End - final[0].curriculum_id == '168' */}


                            {/* final[0].curriculum_id == '169' */}
                            {final[0].curriculum_id == '169' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introducción a la analítica
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introducción a la analítica empresarial</li>
                                                                                <li>R para ciencia de datos</li>
                                                                                <li>Introducción a R y R-Studio</li>
                                                                                <li>Manejo de datos usando R</li>
                                                                                <li>Visualización usando R</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Método estadístico para la toma de decisiones: -
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Estadísticas descriptivas</li>
                                                                                <li>Introducción a la probabilidad</li>
                                                                                <li>Distribuciones de probabilidad</li>
                                                                                <li>Prueba de hipótesis y estimación</li>
                                                                                <li>Bondad de ajuste</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Financiación de las empresas:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Fundamentos de Finanzas</li>
                                                                                <li>Trabajando en la gestión de capitales</li>
                                                                                <li>Presupuesto de capital</li>
                                                                                <li>Estructura capital</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Marketing y CRM:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Conceptos básicos de marketing</li>
                                                                                <li>Valor del tiempo de vida del cliente</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3>Técnicas de análisis</h3>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introducción a la analítica:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Análisis de variación</li>
                                                                                <li>Análisis de regresión</li>
                                                                                <li>Técnicas de reducción de dimensiones</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Procesamiento de datos:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Introducción al aprendizaje supervisado y no supervisado
                                                                                </li>
                                                                                <li>Agrupación</li>
                                                                                <li>Árboles de decisión</li>
                                                                                <li>Bosque aleatorio</li>
                                                                                <li>Redes neuronales</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Modelado predictivo:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Regresión lineal múltiple</li>
                                                                                <li>Regresión logística</li>
                                                                                <li>Análisis Discriminante Lineal</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Pronóstico de series de tiempo: -
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introducción a las Series Temporales</li>
                                                                                <li>Correlación</li>
                                                                                <li>Pronóstico</li>
                                                                                <li>Modelos autorregresivos</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Aprendizaje automático:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Manejo de datos no estructurados</li>
                                                                                <li>Algoritmos de aprendizaje automático</li>
                                                                                <li>Compensación de varianza de sesgo</li>
                                                                                <li>Manejo de datos no balanceados</li>
                                                                                <li>impulsar</li>
                                                                                <li>Modelo de validación</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Técnicas de optimización:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Programación lineal</li>
                                                                                <li>Programación de objetivos</li>
                                                                                <li>Programación entera</li>
                                                                                <li>Programación entera mixta</li>
                                                                                <li>Modelos de distribución y red</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3>exposición del dominio</h3>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Marketing y análisis minorista: -
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Terminologías de marketing y venta minorista</li>
                                                                                <li>Análisis de clientes</li>
                                                                                <li>cuchillo</li>
                                                                                <li>Tablero minorista</li>
                                                                                <li>Churn de clientes</li>
                                                                                <li>Minería de reglas de asociación</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Análisis web y de redes sociales: -
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Web Analytics: comprender las métricas</li>
                                                                                <li>Métricas web básicas y avanzadas</li>
                                                                                <li>Google Analytics: demostración y práctica</li>
                                                                                <li>Análisis de campaña</li>
                                                                                <li>Extracción de textos</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Análisis de finanzas y riesgos: -
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Por qué el riesgo crediticio: uso de un estudio de caso
                                                                                    de mercado
                                                                                </li>
                                                                                <li>Comparación de Modelos de Riesgo de Crédito</li>
                                                                                <li>
                                                                                    Descripción general del modelo de probabilidad de
                                                                                    incumplimiento (PD)
                                                                                </li>
                                                                                <li>
                                                                                    Modelos PD, tipos de modelos, Pasos para hacer un buen
                                                                                    modelo
                                                                                </li>
                                                                                <li>Riesgo de mercado</li>
                                                                                <li>
                                                                                    Valor en riesgo: uso del estudio de caso de acciones
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Análisis de la cadena de suministro y la logística: -
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introducción a la cadena de suministro</li>
                                                                                <li>Lidiando con la incertidumbre de la demanda</li>
                                                                                <li>
                                                                                    Diseño de una estrategia óptima utilizando un estudio de
                                                                                    caso
                                                                                </li>
                                                                                <li>Gestión y control de inventario</li>
                                                                                <li>Clasificación de inventario</li>
                                                                                <li>Modelado de inventario</li>
                                                                                <li>Costos Involucrados en el Inventario</li>
                                                                                <li>Cantidad de orden económico</li>
                                                                                <li>Pronóstico</li>
                                                                                <li>Métodos de pronóstico avanzados</li>
                                                                                <li>Ejemplos y estudios de casos</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3>Visualización e información</h3>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Visualización de datos usando Tableau:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introducción a la visualización de datos</li>
                                                                                <li>Introducción a Tableau</li>
                                                                                <li>Gráficos básicos y tablero</li>
                                                                                <li>Estadísticas Descriptivas, Dimensiones y Medidas</li>
                                                                                <li>
                                                                                    Analítica visual: narración de historias a través de
                                                                                    datos
                                                                                </li>
                                                                                <li>Diseño y principios del tablero</li>
                                                                                <li>
                                                                                    Componentes/principios de diseño avanzado: Mejorando el
                                                                                    poder de los tableros
                                                                                </li>
                                                                                <li>Tipos de gráficos especiales</li>
                                                                                <li>Estudio de caso: uso práctico de Tableau</li>
                                                                                <li>Integre Tableau con Hojas de cálculo de Google</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Idiomas y herramientas
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>R y Python</li>
                                                                                <li>Imagen</li>
                                                                                <li>SAS (Módulo en línea)</li>
                                                                                <li>hackatones</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                proyecto final
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Presentación de grupo</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            {/* End - final[0].curriculum_id == '169' */}


                            {/* final[0].curriculum_id == '170' */}
                            {final[0].curriculum_id == '170' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                1er semestre
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    {" "}
                                                                                    Principios de Gestión y Comportamiento Organizacional
                                                                                </li>
                                                                                <li>Economía de la Empresa</li>
                                                                                <li>Contabilidad y Finanzas para Directivos</li>
                                                                                <li>Gestión de marketing</li>
                                                                                <li>Gestión de recursos humanos</li>
                                                                                <li>Métodos de investigación para la gestión</li>
                                                                                <li>Distribución y Gestión de la Cadena de Suministro</li>
                                                                                <li>Gestión de ventas y venta al por menor</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                2do semestre
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Dirección de Producción y Operaciones</li>
                                                                                <li>Comunicación Ejecutiva</li>
                                                                                <li>Ambiente de Negocios y Ética</li>
                                                                                <li>Elementos esenciales del sistema</li>
                                                                                <li>Gestión estratégica</li>
                                                                                <li>Negocios Internacionales</li>
                                                                                <li>Almacenamiento de datos y minería de datos</li>
                                                                                <li>Disertación</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                proyecto final
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Presentación de grupo</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            {/* End - final[0].curriculum_id == '170' */}


                            {/* final[0].curriculum_id == '171' Or final[0].curriculum_id == '223' */}
                            {final[0].curriculum_id == '171' || final[0].curriculum_id == '223' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion content-spritbx">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                CURSO – Fundación
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul className="roman ul-list-bul">
                                                                                <li>Estructura del programa y principios básicos</li>
                                                                                <li>
                                                                                    Construcciones de programación: bucles, funciones,
                                                                                    matrices, etc.{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Una introducción al control de versiones, Git,
                                                                                    secuencias de comandos de línea de comandos{" "}
                                                                                </li>
                                                                                <li>Basic HTML, CSS</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                CURSO - DESARROLLO DE SOFTWARE BACK-END
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>
                                                                                <b>PROGRAMACIÓN ORIENTADA A OBJETOS</b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Paradigmas orientados a objetos de la programación Java
                                                                                    (clases, objetos, etc.){" "}
                                                                                </li>
                                                                                <li>Diseño orientado a objetos</li>
                                                                                <li>
                                                                                    Manejo de excepciones, colecciones, concurrencia, etc.
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>ESTRUCTURAS DE DATOS</b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Estructuras de datos lineales (matrices, cadenas, pilas,
                                                                                    colas, listas enlazadas, etc.){" "}
                                                                                </li>
                                                                                <li>
                                                                                    Árboles binarios y árboles de búsqueda binarios,
                                                                                    recorridos de árboles
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>ALGORITMOS</b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Algoritmos básicos: recursión, algoritmos de búsqueda y
                                                                                    clasificación, algoritmos codiciosos{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Análisis de Algoritmos y Evaluación del algoritmo
                                                                                    correcto para un problema{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Algoritmos avanzados: gráficos, programación dinámica,
                                                                                    algoritmos hash
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>DISEÑO DE BASES DE DATOS Y SISTEMAS</b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Procesamiento, almacenamiento y organización de datos:
                                                                                    modelos de datos,{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Tablas, vistas, consultas SQL: simples y complejas{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Esquemas de base de datos, normalización, claves,
                                                                                    índices
                                                                                </li>
                                                                                <li>JDBC</li>
                                                                                <li>Introducción a las bases de datos NoSQL</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>DESARROLLO DEL LADO DEL SERVIDOR Y MARCOS</b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>Arquitectura Spring MVC</li>
                                                                                <li>
                                                                                    Desarrollo back-end utilizando Springboot Framework
                                                                                </li>
                                                                                <li>ORM e hibernación</li>
                                                                                <li>API REST</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                CURSO - DESARROLLO DE SOFTWARE FRONT END
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>
                                                                                <b>DESARROLLO FRONTAL – HTML Y CSS</b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Interacción HTML y CSS, CSS: estilo, selectores, modelo
                                                                                    de cuadro, borde, margen, relleno, etc.{" "}
                                                                                </li>
                                                                                <li>Arranque 3</li>
                                                                                <li>CSS avanzado y Bootstrap 4</li>
                                                                                <li>Migración a Bootstrap 5</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>DESARROLLO FRONTAL – JAVASCRIPT</b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Fundamentos de JavaScript, Hoisting, Callbacks,
                                                                                    Promises, Asynchronous JavaScript, DOM Manipulation,
                                                                                    JSON, AJAX Calls, Communication with Server, Event
                                                                                    Listeners, Local and Session Storage, etc.{" "}
                                                                                </li>
                                                                                <li>
                                                                                    JavaScript avanzado: ES6, Let &amp; Const, funciones de
                                                                                    flecha, desestructuración de matrices, Async/Await,
                                                                                    Babel, Webpack, etc.{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>MARCOS JAVASCRIPT – Angular</b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>Visión de conjunto</li>
                                                                                <li>
                                                                                    Servicios angulares, enrutamiento y aplicaciones de una
                                                                                    sola página
                                                                                </li>
                                                                                <li>Formas Angulares, Angular y JavaScript Reactivo</li>
                                                                                <li>Comunicación cliente-servidor</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>MARCOS JAVASCRIPT – REACCIONAR</b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    React Introducción, React Router, Componentes y
                                                                                    Aplicaciones de una sola página{" "}
                                                                                </li>
                                                                                <li>Formas de reacción, arquitectura de flujo</li>
                                                                                <li>Redux y comunicación cliente-servidor, etc.</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                CURSO -Desarrollo de Aplicaciones Móviles
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>INTRODUCCIÓN</h5>
                                                                            <ul>
                                                                                <li>Introducción a las aplicaciones móviles.</li>
                                                                                <li>Sistemas embebidos</li>
                                                                                <li>
                                                                                    Impulsores comerciales y de mercado para aplicaciones
                                                                                    móviles{" "}
                                                                                </li>
                                                                                <li>Publicación y entrega de aplicaciones móviles.</li>
                                                                                <li>
                                                                                    Levantamiento y validación de requisitos para
                                                                                    aplicaciones móviles.
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>DISEÑO BÁSICO</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Introducción Conceptos básicos del diseño de sistemas
                                                                                    integrados
                                                                                </li>
                                                                                <li>SO integrado</li>
                                                                                <li>
                                                                                    Restricciones de diseño para aplicaciones móviles, tanto
                                                                                    relacionadas con el hardware como con el software.{" "}
                                                                                </li>
                                                                                <li>Arquitectura de aplicaciones móviles</li>
                                                                                <li>Interfaces de usuario para aplicaciones móviles</li>
                                                                                <li>toque eventos y gestos</li>
                                                                                <li>
                                                                                    Lograr restricciones de calidad: rendimiento,
                                                                                    usabilidad, seguridad, disponibilidad y modificabilidad.
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>DISEÑO AVANZADO</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Diseño de aplicaciones con capacidades multimedia y de
                                                                                    acceso web.{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Integración con GPS y aplicaciones de redes sociales{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Acceso a aplicaciones alojadas en un entorno de
                                                                                    computación en la nube{" "}
                                                                                </li>
                                                                                <li>Patrones de diseño para aplicaciones móviles.</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>ANDROIDE</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Introducción Establecimiento del entorno de desarrollo{" "}
                                                                                </li>
                                                                                <li>arquitectura androide</li>
                                                                                <li>Actividades y vistas</li>
                                                                                <li>Interactuando con la interfaz de usuario</li>
                                                                                <li>Persistencia de datos usando SQLite</li>
                                                                                <li>Empaquetado y despliegue</li>
                                                                                <li>
                                                                                    Interacción con aplicaciones del lado del servidor
                                                                                </li>
                                                                                <li>
                                                                                    Uso de Google Maps, GPS y WIFI – Integración con
                                                                                    aplicaciones de redes sociales.
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>iOS</h5>
                                                                            <ul>
                                                                                <li>Introducción al Objetivo C</li>
                                                                                <li>características de iOS</li>
                                                                                <li>implementación de la interfaz de usuario</li>
                                                                                <li>Marcos táctiles</li>
                                                                                <li>Persistencia de datos usando Core Data y SQLite</li>
                                                                                <li>
                                                                                    Aplicaciones con reconocimiento de ubicación que
                                                                                    utilizan Core Location y Map Kit{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Integración del calendario y la libreta de direcciones
                                                                                    con la aplicación de redes sociales{" "}
                                                                                </li>
                                                                                <li>Usando Wi-Fi</li>
                                                                                <li>Mercado de iPhone.</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                CURSO -COMPUTACIÓN EN LA NUBE
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>VIRTUALIZACIÓN</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Conceptos básicos de las máquinas virtuales - Procesar
                                                                                    máquinas virtuales{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Sistema de Máquinas Virtuales –Emulación –
                                                                                    Interpretación{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Traducción Binaria - Taxonomía de Máquinas Virtuales.{" "}
                                                                                    Virtualización – Virtualización de Gestión{" "}
                                                                                </li>
                                                                                <li>Maximización de hardware: arquitecturas</li>
                                                                                <li>
                                                                                    Gestión de virtualización – Virtualización de
                                                                                    almacenamiento – Virtualización de red.
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>INFRAESTRUCTURA DE VIRTUALIZACIÓN</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Conjunto de recursos de análisis integral: entorno de
                                                                                    prueba{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Virtualización de servidores – Cargas de trabajo
                                                                                    virtuales – Aprovisionamiento de máquinas virtuales{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Virtualización de escritorio – Virtualización de
                                                                                    aplicaciones{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Niveles de implementación de virtualización – estructura
                                                                                    de virtualización{" "}
                                                                                </li>
                                                                                <li>
                                                                                    virtualización de CPU, memoria y dispositivos de E/S
                                                                                </li>
                                                                                <li>
                                                                                    Clústeres virtuales y gestión de recursos:
                                                                                    virtualización para la automatización del centro de
                                                                                    datos.{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>ARQUITECTURA DE PLATAFORMA EN LA NUBE</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Modelos de implementación en la nube: pública, privada,
                                                                                    híbrida, comunitaria{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Categorías de computación en la nube: Todo como
                                                                                    servicio: Infraestructura, plataforma, software
                                                                                </li>
                                                                                <li>Un diseño genérico de arquitectura en la nube</li>
                                                                                <li>Desarrollo arquitectónico de nube en capas</li>
                                                                                <li>
                                                                                    Soporte de virtualización y recuperación ante desastres
                                                                                </li>
                                                                                <li>
                                                                                    Desafíos de diseño arquitectónico - Plataformas de nube
                                                                                    pública: GAE, AWS{" "}
                                                                                </li>
                                                                                <li>Tentativa de gestión de recursos entre nubes</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>MODELO DE PROGRAMACIÓN</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Introducción a Hadoop Framework: MapReduce, división de
                                                                                    entrada, asignación y reducción de funciones,
                                                                                    especificación de parámetros de entrada y salida,
                                                                                    configuración y ejecución de un trabajo{" "}
                                                                                </li>
                                                                                <li>Desarrollo de aplicaciones Map Reduce –</li>
                                                                                <li>
                                                                                    Diseño del sistema de archivos Hadoop: configuración de
                                                                                    Hadoop Cluster{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Entornos de software en la nube: Eucalyptus, Open
                                                                                    Nebula, Open Stack, Nimbus{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>SEGURIDAD EN LA NUBE</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Seguridad de la infraestructura en la nube: nivel de
                                                                                    red, host y aplicación{" "}
                                                                                </li>
                                                                                <li>
                                                                                    aspectos de la seguridad de los datos, los datos del
                                                                                    proveedor y su seguridad,{" "}
                                                                                </li>
                                                                                <li>Arquitectura de gestión de acceso e identidad,</li>
                                                                                <li>
                                                                                    Prácticas IAM en la nube, SaaS, PaaS, IaaS
                                                                                    disponibilidad en la nube{" "}
                                                                                </li>
                                                                                <li>Cuestiones clave de privacidad en la nube</li>
                                                                                <li>Gestión de confianza y seguridad en la nube</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>NUBE Y DEVOPS</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    DevOps: Motivación-Cloud como plataforma-Operaciones-
                                                                                </li>
                                                                                <li>
                                                                                    Pipeline de implementación: Construcción y prueba de
                                                                                    arquitectura general-Implementación- Estudio de caso:
                                                                                    Migración a microservicios
                                                                                </li>
                                                                                <li>
                                                                                    Origen de DevOps: el dilema de los desarrolladores
                                                                                    frente a las operaciones{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Características clave de una cultura DevOps:
                                                                                    implementación de una aplicación web: creación y
                                                                                    configuración de una cuenta{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Creación de un servidor web - Gestión de la
                                                                                    infraestructura con Cloud Formation{" "}
                                                                                </li>
                                                                                <li>Adición de un sistema de gestión de configuración</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                CURSO -Seguridad Full Stack
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>GESTIÓN DE LA SEGURIDAD DE LA INFORMACIÓN</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Alcance de la Gestión de la Seguridad de la Información
                                                                                </li>
                                                                                <li>Dominios de la Seguridad de la Información</li>
                                                                                <li>
                                                                                    Amenaza - Ataques comunes - Impacto de las infracciones
                                                                                    de seguridad
                                                                                </li>
                                                                                <li>Protección de sistemas de misión crítica</li>
                                                                                <li>Seguridad de la información desde cero</li>
                                                                                <li>Seguridad física</li>
                                                                                <li>Seguridad de datos</li>
                                                                                <li>Seguridad de redes y sistemas</li>
                                                                                <li>
                                                                                    Seguridad inalámbrica; Vigilancia y eficacia de la
                                                                                    seguridad{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>METODOLOGIA DE HACKEO</h5>
                                                                            <ul>
                                                                                <li>Historia de la piratería</li>
                                                                                <li>Reconocer la seguridad de las aplicaciones web</li>
                                                                                <li>
                                                                                    Amenazas: prevención de robos pensando como un hacker.{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Cómo evitar convertirse en un molinillo de código:
                                                                                    pensar de forma creativa al programar{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Creación de aplicaciones web funcionales y seguras
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>AUDITORÍA DE CÓDIGO E INGENIERÍA INVERSA</h5>
                                                                            <ul>
                                                                                <li>Introducción</li>
                                                                                <li>
                                                                                    Cómo rastrear efectivamente a través de un programa
                                                                                </li>
                                                                                <li>
                                                                                    Auditoría y revisión de lenguajes de programación
                                                                                    seleccionados{" "}
                                                                                </li>
                                                                                <li>Buscando vulnerabilidades</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>ASEGURAR EL CÓDIGO JAVA</h5>
                                                                            <h6>
                                                                                <b>Introducción</b>
                                                                            </h6>
                                                                            <ul>
                                                                                <li>
                                                                                    Descripción general de la arquitectura de seguridad de
                                                                                    Java
                                                                                </li>
                                                                                <li>Cómo maneja Java la seguridad</li>
                                                                                <li>Debilidad potencial de seguridad en Java</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                DESARROLLO DE APLICACIONES HABILITADAS PARA LA SEGURIDAD
                                                                            </h5>
                                                                            <ul>
                                                                                <li>Introducción</li>
                                                                                <li>
                                                                                    Los beneficios de usar aplicaciones con seguridad
                                                                                    habilitada{" "}
                                                                                </li>
                                                                                <li>Tipos de seguridad utilizados en las aplicaciones</li>
                                                                                <li>Conceptos básicos de PKI</li>
                                                                                <li>Uso de PKI para proteger las aplicaciones web</li>
                                                                                <li>Prueba de su implementación de seguridad</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                CURSO -Ágil
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>INTRODUCCIÓN</h5>
                                                                            <ul>
                                                                                <li>El software es el desarrollo de nuevos productos.</li>
                                                                                <li>Desarrollo iterativo</li>
                                                                                <li>
                                                                                    Planificación iterativa impulsada por el riesgo y por el
                                                                                    cliente{" "}
                                                                                </li>
                                                                                <li>Desarrollo iterativo en caja de tiempo</li>
                                                                                <li>
                                                                                    Durante la iteración, no hay cambios de partes
                                                                                    interesadas externas: desarrollo evolutivo y adaptativo
                                                                                    (análisis de requisitos evolutivos{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Primeros "Top Ten" alto (requisitos de nivel y análisis
                                                                                    hábil Planificación evolutiva y adaptativa{" "}
                                                                                </li>
                                                                                <li>Entrega incremental</li>
                                                                                <li>Entrega evolutiva</li>
                                                                                <li>El error más común</li>
                                                                                <li>Métodos específicos iterativos y evolutivos.</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>ÁGIL Y SU SIGNIFICADO</h5>
                                                                            <ul>
                                                                                <li>Desarrollo ágil</li>
                                                                                <li>Clasificación de métodos</li>
                                                                                <li>El manifiesto ágil y los Principios</li>
                                                                                <li>Gestión de proyectos ágiles</li>
                                                                                <li>Adopte la comunicación y la retroalimentación</li>
                                                                                <li>Prácticas sencillas y herramientas de proyecto</li>
                                                                                <li>Proceso empírico vs definido y prescriptivo</li>
                                                                                <li>
                                                                                    Principio (basado versus Regla (Basado – Disciplina
                                                                                    sostenible: El toque humano){" "}
                                                                                </li>
                                                                                <li>El equipo como un sistema adaptativo complejo</li>
                                                                                <li>
                                                                                    Exageración ágil: métodos ágiles específicos. Los hechos
                                                                                    del cambio en los proyectos de software
                                                                                </li>
                                                                                <li>Motivaciones clave para el desarrollo iterativo</li>
                                                                                <li>
                                                                                    Cumplir con el desafío de los requisitos de forma
                                                                                    iterativa
                                                                                </li>
                                                                                <li>
                                                                                    Problemas con la cascada. Evidencia de investigación
                                                                                </li>
                                                                                <li>Evidencia histórica temprana del proyecto</li>
                                                                                <li>Estándares (Evidencia del cuerpo</li>
                                                                                <li>Evidencia de expertos y líderes de opinión</li>
                                                                                <li>Un caso de negocio para el desarrollo iterativo</li>
                                                                                <li>El accidente histórico de la vigencia en cascada.</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>METODOLOGÍA ÁGIL</h5>
                                                                            <ul>
                                                                                <li>Descripción general del método</li>
                                                                                <li>
                                                                                    Ciclo de vida: productos de trabajo, valores de roles y
                                                                                    prácticas{" "}
                                                                                </li>
                                                                                <li>Errores comunes y malentendidos</li>
                                                                                <li>Proyectos de muestra</li>
                                                                                <li>mezclas de proceso</li>
                                                                                <li>Estrategias de adopción: realidad versus fantasía</li>
                                                                                <li>Fortalezas versus “Otro” historial.</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>MELÉ</h5>
                                                                            <ul>
                                                                                <li>Conceptos – entregables y métodos. EXP:</li>
                                                                                <li>
                                                                                    Conceptos – entregables y métodos Proceso unificado:{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Conceptos-entregables-métodos. EVE: Conceptos- Métodos-
                                                                                    Entregable.{" "}
                                                                                </li>
                                                                                <li>
                                                                                    EVO: descripción general del método, ciclo de vida,
                                                                                    productos de trabajo, roles y prácticas, errores comunes
                                                                                    y malentendidos, proyectos de muestra.{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>PRÁCTICA Y PRUEBAS ÁGILES</h5>
                                                                            <ul>
                                                                                <li>Gestión de proyectos</li>
                                                                                <li>Ambiente</li>
                                                                                <li>Requisitos</li>
                                                                                <li>Prueba</li>
                                                                                <li>Las alianzas ágiles</li>
                                                                                <li>el manifiesto</li>
                                                                                <li>apoyando los valores</li>
                                                                                <li>Pruebas ágiles</li>
                                                                                <li>
                                                                                    Nueve principios y seis prácticas concretas para
                                                                                    realizar pruebas en equipos ágiles
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                CURSO - Design Thinking para la Innovación
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>INTRODUCCIÓN</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    ¿Por qué Diseño? - Cuatro preguntas, diez herramientas
                                                                                </li>
                                                                                <li>Principios del pensamiento de diseño</li>
                                                                                <li>El proceso del Design Thinking</li>
                                                                                <li>Cómo planificar un proyecto de Design Thinking.</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>COMPRENDER, OBSERVAR Y DEFINIR EL PROBLEMA</h5>
                                                                            <ul>
                                                                                <li>Determinación del campo de búsqueda</li>
                                                                                <li>Aclaración del problema</li>
                                                                                <li>Entendimiento del problema</li>
                                                                                <li>Análisis del problema</li>
                                                                                <li>Reformulación del problema</li>
                                                                                <li>Fase de Observación</li>
                                                                                <li>Diseño empático</li>
                                                                                <li>Consejos para observar</li>
                                                                                <li>Métodos para el Diseño Empático</li>
                                                                                <li>Fase de punto de vista</li>
                                                                                <li>Caracterización del grupo objetivo</li>
                                                                                <li>Descripción de las necesidades del cliente.</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>IDEO Y PROTOTIPO</h5>
                                                                            <ul>
                                                                                <li>Fase Concebida</li>
                                                                                <li>El proceso creativo y los principios creativos.</li>
                                                                                <li>Técnicas de creatividad</li>
                                                                                <li>Evaluación de ideas</li>
                                                                                <li>Fase de prototipo</li>
                                                                                <li>
                                                                                    Método Lean Startup para el desarrollo de prototipos
                                                                                </li>
                                                                                <li>Técnicas de visualización y presentación.</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>PRUEBAS E IMPLEMENTACIÓN</h5>
                                                                            <ul>
                                                                                <li>Fase de prueba</li>
                                                                                <li>Consejos para entrevistas</li>
                                                                                <li>Consejos para encuestas</li>
                                                                                <li>Modelo Kano</li>
                                                                                <li>Pruebas de deseabilidad: cómo realizar talleres</li>
                                                                                <li>Requisitos del espacio</li>
                                                                                <li>Requerimientos materiales</li>
                                                                                <li>Agilidad para Design Thinking.</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>FUTURO</h5>
                                                                            <ul>
                                                                                <li>Design Thinking se encuentra con la corporación</li>
                                                                                <li>El nuevo contrato social</li>
                                                                                <li>Activismo de diseño</li>
                                                                                <li>Diseñando el Mañana.</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                CURSO -Gestión de Proyectos
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h6>PMP &gt; 5 años Exp.</h6>
                                                                            <h5>Crear un equipo de alto rendimiento</h5>
                                                                            <ul>
                                                                                <li>construir un equipo</li>
                                                                                <li>Definir las reglas básicas del equipo</li>
                                                                                <li>Negociar acuerdos de proyectos</li>
                                                                                <li>
                                                                                    Empoderar a los miembros del equipo y a las partes
                                                                                    interesadas
                                                                                </li>
                                                                                <li>
                                                                                    Formar a los miembros del equipo y a las partes
                                                                                    interesadas
                                                                                </li>
                                                                                <li>Involucrar y apoyar equipos virtuales</li>
                                                                                <li>
                                                                                    Construir entendimiento compartido sobre un proyecto
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>Comenzando el proyecto</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Determinar la metodología/métodos y prácticas apropiados
                                                                                    para el proyecto
                                                                                </li>
                                                                                <li>Planificar y administrar el alcance</li>
                                                                                <li>
                                                                                    Planificar y administrar el presupuesto y los recursos
                                                                                </li>
                                                                                <li>Planifique y administre el horario</li>
                                                                                <li>
                                                                                    Planifique y administre la calidad de los productos y
                                                                                    entregables
                                                                                </li>
                                                                                <li>
                                                                                    Integrar actividades de planificación de proyectos
                                                                                </li>
                                                                                <li>Planificar y gestionar las adquisiciones</li>
                                                                                <li>Establecer la estructura de gobierno del proyecto</li>
                                                                                <li>
                                                                                    Planificar y gestionar el cierre de proyectos/fases
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>haciendo el trabajo</h5>
                                                                            <ul>
                                                                                <li>Evaluar y gestionar riesgos</li>
                                                                                <li>Ejecutar proyecto para generar valor comercial</li>
                                                                                <li>Administrar comunicaciones</li>
                                                                                <li>Involucrar a las partes interesadas</li>
                                                                                <li>Crear artefactos de proyecto</li>
                                                                                <li>Administrar los cambios del proyecto</li>
                                                                                <li>Administrar problemas del proyecto</li>
                                                                                <li>
                                                                                    Garantizar la transferencia de conocimientos para la
                                                                                    continuidad del proyecto
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>Mantener al equipo en el buen camino</h5>
                                                                            <ul>
                                                                                <li>Dirigir un equipo</li>
                                                                                <li>Rendimiento del equipo de apoyo</li>
                                                                                <li>
                                                                                    Abordar y eliminar impedimentos, obstáculos y
                                                                                    bloqueadores
                                                                                </li>
                                                                                <li>Administrar Conflicto</li>
                                                                                <li>Colaborar con las partes interesadas</li>
                                                                                <li>Asesorar a las partes interesadas relevantes</li>
                                                                                <li>
                                                                                    Aplicar la inteligencia emocional para promover el
                                                                                    rendimiento del equipo
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>Tener el negocio en mente</h5>
                                                                            <ul>
                                                                                <li>Administrar requisitos de cumplimiento</li>
                                                                                <li>
                                                                                    Evaluar y entregar beneficios y valor del proyecto
                                                                                </li>
                                                                                <li>Evaluar y abordar internos y externos</li>
                                                                                <li>Cambios en el entorno empresarial</li>
                                                                                <li>Apoyar el cambio organizacional</li>
                                                                                <li>Emplee la mejora continua de procesos</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_princecr"
                                                                                aria-expanded="false"
                                                                                href="#collapse_princecr"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                O - CURSO - PRINCE 2 FOUNDATION PRACTITIONER TRAINING
                                                                                &gt;5 años. Exp
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_princecr"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>Fundación</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Introducción a PRINCE2 <sup>®</sup> y Gestión de
                                                                                    Proyectos
                                                                                </li>
                                                                                <li>
                                                                                    Los 7 Principios de PRINCE2 <sup>®</sup>
                                                                                </li>
                                                                                <li>
                                                                                    Los 7 Temas de PRINCE2 <sup>®</sup>
                                                                                </li>
                                                                                <li>
                                                                                    Los 7 Procesos de PRINCE2 <sup>®</sup>
                                                                                </li>
                                                                                <li>
                                                                                    La Sastrería de PRINCE2 <sup>®</sup>
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>FACULTATIVO</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Puesta en Marcha de un Proyecto (SU) y sus productos
                                                                                </li>
                                                                                <li>Inicio de un Proyecto (IP) y sus productos</li>
                                                                                <li>
                                                                                    Gestión de los límites del escenario (SB) y sus
                                                                                    productos
                                                                                </li>
                                                                                <li>Cierre de un Proyecto (CP) y sus productos</li>
                                                                                <li>
                                                                                    La Sastrería de PRINCE2 <sup>®</sup>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            {/* End - final[0].curriculum_id == '171' */}


                            {/* final[0].curriculum_id == '267' */}
                            {final[0].curriculum_id == '267' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introducción
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>PHP [Preprocesador de hipertexto]</h5>
                                                                            <p>
                                                                                PHP es el lenguaje de secuencias de comandos del lado del
                                                                                servidor más popular utilizado para desarrollar
                                                                                aplicaciones web dinámicas. Es un código abierto. En PHP
                                                                                hay muchos marcos que siguen el patrón de diseño MVC como
                                                                                Larvel, Code Igniter, Zend, etc. y CMS también como Word
                                                                                Press, Drupal, Magneto, etc.]
                                                                            </p>
                                                                            <br />
                                                                            <h5 className="mt-5">
                                                                                Lenguaje de marcado de hipertexto (HTML 5)
                                                                            </h5>
                                                                            <ul>
                                                                                <li>Introducción a HTML</li>
                                                                                <li>Estructura de HTML</li>
                                                                                <li>Atributos y Valores</li>
                                                                                <li>Etiquetas Etiqueta de imagen</li>
                                                                                <li>
                                                                                    Etiquetas de enlace (texto e imagen) Etiqueta de
                                                                                    marquesina
                                                                                </li>
                                                                                <li>
                                                                                    Etiqueta de lista (ordenada y desordenada) Etiqueta de
                                                                                    tabla
                                                                                </li>
                                                                                <li>Etiquetas de formulario</li>
                                                                                <li>Audio , Video</li>
                                                                                <li>BlockLevel y elementos en línea</li>
                                                                                <li>día DIV</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">HTML5 Nuevas etiquetas</h5>
                                                                            <ul>
                                                                                <li>Encabezado, pie de página, navegación</li>
                                                                                <li>Sección , Artículo , Aparte</li>
                                                                                <li>Elementos de formulario</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">Hoja de estilo (CSS 3)</h5>
                                                                            <ul>
                                                                                <li>Tipos de hoja de estilo</li>
                                                                                <li>Acerca de los selectores de CSS</li>
                                                                                <li>Acerca de las propiedades de CSS</li>
                                                                                <li>Propiedades de fondo</li>
                                                                                <li>Propiedades de la caja</li>
                                                                                <li>Propiedades de borde</li>
                                                                                <li>Propiedades de posicionamiento</li>
                                                                                <li>Diseño de menú CSS</li>
                                                                                <li>Animación CSS</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">Bootstrap 4 (Diseño Responsivo)</h5>
                                                                            <ul>
                                                                                <li>Introducción al Diseño Responsivo</li>
                                                                                <li>Introducción a Bootstrap</li>
                                                                                <li>Sistema de cuadrícula Bootstrap</li>
                                                                                <li>Clases de cuadrícula</li>
                                                                                <li>Columnas iguales , Columnas desiguales</li>
                                                                                <li>Creación de diseño</li>
                                                                                <li>Colores , Tablas , Imágenes</li>
                                                                                <li>Grupos de listas y barras de navegación</li>
                                                                                <li>Paginación, Desplegable, Carrusel</li>
                                                                                <li>Entradas de formulario y botones</li>
                                                                                <li>Modal, Tostadas, Alerta</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">
                                                                                Bloques de construcción del lenguaje PHP
                                                                            </h5>
                                                                            <ul>
                                                                                <li>Instalación de PHP</li>
                                                                                <li>delimitadores PHP</li>
                                                                                <li>Inicialización de variables con PHP</li>
                                                                                <li>Tipos de datos PHP</li>
                                                                                <li>Constantes PHP</li>
                                                                                <li>Operadores PHP</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">Declaraciones condicionales</h5>
                                                                            <ul>
                                                                                <li>si mas</li>
                                                                                <li>si más si más</li>
                                                                                <li>Si anidado</li>
                                                                                <li>Caso del interruptor</li>
                                                                                <li>Instrucciones de salto (Break, Continue, Exit)</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">Bucle (iteración)</h5>
                                                                            <ul>
                                                                                <li>En bucle</li>
                                                                                <li>Mientras bucle</li>
                                                                                <li>hacer mientras bucle</li>
                                                                                <li>Bucle anidado</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">INTRODUCCIÓN DE ARRAY</h5>
                                                                            <ul>
                                                                                <li>Matrices basadas en índices</li>
                                                                                <li>matriz asociativa</li>
                                                                                <li>matriz multidimensional</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">ENTRADA DE USUARIO DE MANIPULACIÓN</h5>
                                                                            <ul>
                                                                                <li>Presentar al usuario una entrada</li>
                                                                                <li>
                                                                                    Recuperando datos de formulario con $_POST,$_GET y
                                                                                    $_REQUEST
                                                                                </li>
                                                                                <li>Conservación de datos en entradas de formulario</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">FUNCIÓN</h5>
                                                                            <ul>
                                                                                <li>Introducción a las funciones</li>
                                                                                <li>Deﬁnir funciones</li>
                                                                                <li>Uso de parámetros</li>
                                                                                <li>Valores devueltos</li>
                                                                                <li>Llamar por valor y llamar por referencia</li>
                                                                                <li>Reutilización de códigos</li>
                                                                                <li>Funciones de matriz, cadena, matemática, fecha</li>
                                                                                <li>Variables de matriz superglobal</li>
                                                                                <li>Eliminación de cookies</li>
                                                                                <li>Implementando cadena de consulta</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">
                                                                                INTRODUCCIÓN AL SISTEMA DE ARCHIVO (ARCHIVO Y MANEJO)
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Guardar datos para usar más tarde el sistema de
                                                                                    archivos.
                                                                                </li>
                                                                                <li>Abriendo un archivo</li>
                                                                                <li>Crear y escribir en un archivo</li>
                                                                                <li>Crear y escribir en un archivo</li>
                                                                                <li>Uso de otras funciones de archivo útiles</li>
                                                                                <li>crear un directorio</li>
                                                                                <li>Quitar un directorio</li>
                                                                                <li>Carga y descarga de archivos</li>
                                                                                <li>Conceptos de carga de archivos</li>
                                                                                <li>Carga de archivos múltiples</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">ADMINISTRACIÓN DEL ESTADO</h5>
                                                                            <ul>
                                                                                <li>Sesión, Cookie, Cadena de Consulta, Campo Oculto</li>
                                                                                <li>¿Qué es Sesión?</li>
                                                                                <li>Iniciar una sesión</li>
                                                                                <li>
                                                                                    Registro de variables de sesión Uso de variables de
                                                                                    sesión
                                                                                </li>
                                                                                <li>Destruyendo las variables y la sesión</li>
                                                                                <li>¿Qué es una galleta?</li>
                                                                                <li>
                                                                                    Configuración de cookies con PHP Uso de cookies con
                                                                                    sesiones
                                                                                </li>
                                                                                <li>Eliminación de cookies</li>
                                                                                <li>Implementando cadena de consulta</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">BASE DE DATOS MYSQL</h5>
                                                                            <ul>
                                                                                <li>Base de datos relacional Concepto y tecnología</li>
                                                                                <li>Diseño de base de datos web</li>
                                                                                <li>Arquitectura de base de datos web</li>
                                                                                <li>Crear una base de datos MySQL</li>
                                                                                <li>Crear base de datos</li>
                                                                                <li>Columna de tablas</li>
                                                                                <li>Tipos de datos</li>
                                                                                <li>
                                                                                    Implementando Insertar/Eliminar/Actualizar y seleccionar
                                                                                </li>
                                                                                <li>Agregado de consultas</li>
                                                                                <li>Funciones</li>
                                                                                <li>Tabla de unión de tener y agrupar por cláusula</li>
                                                                                <li>
                                                                                    Implementación de clave principal, clave única, clave
                                                                                    compuesta, clave externa, restricción predeterminada,
                                                                                    etc.
                                                                                </li>
                                                                                <li>Unirse a la mesa</li>
                                                                                <li>Eliminación de tablas y bases de datos</li>
                                                                                <li>Introducción a Phpmyadmin</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">CONEXIÓN A LA BASE DE DATOS</h5>
                                                                            <ul>
                                                                                <li>Mi conectividad SQL</li>
                                                                                <li>Conectividad procesal</li>
                                                                                <li>Conectividad orientada a objetos</li>
                                                                                <li>Conectividad PDO</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">JQUERY CON AJAX</h5>
                                                                            <ul>
                                                                                <li>Introducción jQuery</li>
                                                                                <li>Selectores de jQuery, eventos, DOM, animaciones</li>
                                                                                <li>jQuery acordeones, carrusel, pestaña</li>
                                                                                <li>Implementación Ajax</li>
                                                                                <li>Operación CRUD con AJAX</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">PHP ORIENTADO A OBJETOS</h5>
                                                                            <ul>
                                                                                <li>conceptos orientados a objetos</li>
                                                                                <li>Clases, objetos y operaciones.</li>
                                                                                <li>Atributos de clase</li>
                                                                                <li>Modificador de acceso Constructor y Destructor</li>
                                                                                <li>Herencia Método estático Tipo</li>
                                                                                <li>Objeto de sugerencia</li>
                                                                                <li>Clase abstracta de clonación</li>
                                                                                <li>Herencia de palabra clave final</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">TÉCNICAS PHP AVANZADAS</h5>
                                                                            <ul>
                                                                                <li>Implementación de Captcha, Generación de PDF</li>
                                                                                <li>
                                                                                    Correo electrónico de generación de Excel o CSV con PHP
                                                                                </li>
                                                                                <li>Implementación de paginación</li>
                                                                                <li>Inyección SQL</li>
                                                                                <li>Servicios web con JSON</li>
                                                                                <li>Pasarela de pago</li>
                                                                                <li>
                                                                                    Seguimiento y depuración de errores de integración
                                                                                </li>
                                                                                <li>Manejo de excepciones</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">
                                                                                DESARROLLO DE UNA APLICACIÓN WEB DINÁMICA
                                                                            </h5>
                                                                            <h5>CODEIGNITER (Frameworks)&nbsp;</h5>
                                                                            <h5 className="mt-3">Introducción</h5>
                                                                            <ul>
                                                                                <li>Introducción del controlador</li>
                                                                                <li>
                                                                                    Controlador CI_, Parámetros de solicitud, Controlador de
                                                                                    acciones
                                                                                </li>
                                                                                <li>Métodos y atributos</li>
                                                                                <li>Creando</li>
                                                                                <li>Clase de controlador central</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">PUNTOS DE VISTA</h5>
                                                                            <ul>
                                                                                <li>Creación de vistas</li>
                                                                                <li>Diseños (Usar Imagen, CSS, Bootstrap, JS)</li>
                                                                                <li>Llamando al controlador</li>
                                                                                <li>Asistentes (FormHelper, HTML Helpers) en vistas</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">MODELOS</h5>
                                                                            <ul>
                                                                                <li>Creando modelo</li>
                                                                                <li>Cómo cargar en controlador</li>
                                                                                <li>Llamando en el controlador</li>
                                                                                <li>Aplicar la lógica de negocios</li>
                                                                                <li>Creación de clase de modelo central</li>
                                                                            </ul>
                                                                            <h5 className="mt-5">AYUDANTES</h5>
                                                                            <ul>
                                                                                <li>Introducción</li>
                                                                                <li>Cómo cargar el ayudante</li>
                                                                                <li>Aplicar a controlador y vistas</li>
                                                                                <li>Creando su propio ayudante</li>
                                                                                <li>Cómo anular a otro ayudante</li>
                                                                                <li>Formas de Siembra y Validación</li>
                                                                                <li>Configurando el formulario laravel</li>
                                                                                <li>Validación de un formulario</li>
                                                                                <li>Creación de pos. de administrador</li>
                                                                                <li>Crear una interfaz</li>
                                                                                <li>Configurando el blog</li>
                                                                                <li>Proteger el panel de administración</li>
                                                                                <li>Manejo de enrutamiento</li>
                                                                                <li>Establecer una vista HTML</li>
                                                                                <li>Creación de tablas con Schema Builder</li>
                                                                                <li>
                                                                                    Habilitación del control de versiones con migraciones
                                                                                </li>
                                                                                <li>Consultando con elocuencia</li>
                                                                                <li>Visualización de ORM</li>
                                                                                <li>Código Laravel</li>
                                                                                <li>Trabajando con Blade</li>
                                                                                <li>Definición de plantillas</li>
                                                                                <li>
                                                                                    Condiciones Integración de elementos de formulario
                                                                                </li>
                                                                                <li>Configuración de la autenticación</li>
                                                                                <li>Creación de un formulario de registro</li>
                                                                                <li>Asegurar el contenido</li>
                                                                                <li>Autenticando usuarios en la aplicación Laravel</li>
                                                                                <li>Creación de API Restful</li>
                                                                                <li> Lumen: Micro-framework (API's y Micro Servicios)</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            {/* End - final[0].curriculum_id == '267' */}


                            {/* final[0].curriculum_id == '1' */}
                            {final[0].curriculum_id == '1' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Plan de estudios del curso PMP:
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>
                                                                                Lección 01 - Creación de un equipo de alto rendimiento
                                                                            </h5>
                                                                            <ul>
                                                                                <li>construir un equipo</li>
                                                                                <li>Definir las reglas básicas del equipo</li>
                                                                                <li>Negociar acuerdos de proyectos</li>
                                                                                <li>
                                                                                    Empoderar a los miembros del equipo y a las partes
                                                                                    interesadas
                                                                                </li>
                                                                                <li>
                                                                                    Formar a los miembros del equipo y a las partes
                                                                                    interesadas
                                                                                </li>
                                                                                <li>Involucrar y apoyar equipos virtuales</li>
                                                                                <li>
                                                                                    Construir entendimiento compartido sobre un proyecto
                                                                                </li>
                                                                            </ul>
                                                                            <h5 className="mt-5">
                                                                                Lección 02 - Comenzando el proyecto
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    {" "}
                                                                                    Determinar la metodología/métodos y prácticas apropiados
                                                                                    para el proyecto{" "}
                                                                                </li>
                                                                                <li>Planificar y administrar el alcance</li>
                                                                                <li>
                                                                                    Planificar y administrar el presupuesto y los recursos
                                                                                </li>
                                                                                <li>Planifique y administre el horario</li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Planifique y administre la calidad de los productos y
                                                                                    entregables{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Integrar actividades de planificación de proyectos
                                                                                </li>
                                                                                <li>Planificar y gestionar las adquisiciones</li>
                                                                                <li>Establecer la estructura de gobierno del proyecto</li>
                                                                                <li>
                                                                                    Planificar y gestionar el cierre de proyectos/fases
                                                                                </li>
                                                                            </ul>
                                                                            <h5 className="mt-5">Lección 03 - Haciendo el trabajo</h5>
                                                                            <ul>
                                                                                <li>Evaluar y gestionar riesgos</li>
                                                                                <li>Ejecutar proyecto para generar valor comercial</li>
                                                                                <li>Administrar comunicaciones</li>
                                                                                <li>Involucrar a las partes interesadas</li>
                                                                                <li>Crear artefactos de proyecto</li>
                                                                                <li>Administrar los cambios del proyecto</li>
                                                                                <li>Administrar problemas del proyecto</li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Garantizar la transferencia de conocimientos para la
                                                                                    continuidad del proyecto{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <h5 className="mt-5">
                                                                                Lección 04 - Mantener al equipo encaminado
                                                                            </h5>
                                                                            <ul>
                                                                                <li>Dirigir un equipo</li>
                                                                                <li>Rendimiento del equipo de apoyo</li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Abordar y eliminar impedimentos, obstáculos y
                                                                                    bloqueadores{" "}
                                                                                </li>
                                                                                <li>Administrar Conflicto</li>
                                                                                <li>Colaborar con las partes interesadas</li>
                                                                                <li>Asesorar a las partes interesadas relevantes</li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Aplicar la inteligencia emocional para promover el
                                                                                    rendimiento del equipo{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <h5 className="mt-5">
                                                                                Lección 05 - Teniendo el negocio en mente
                                                                            </h5>
                                                                            <ul>
                                                                                <li>Administrar requisitos de cumplimiento</li>
                                                                                <li>
                                                                                    Evaluar y entregar los beneficios y el valor del
                                                                                    proyecto
                                                                                </li>
                                                                                <li>Evaluar y abordar internos y externos</li>
                                                                                <li>Cambios en el entorno empresarial</li>
                                                                                <li>Apoyar el cambio organizacional</li>
                                                                                <li>Emplee la mejora continua de procesos</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                                : ''}
                            {/* End - final[0].curriculum_id == '1' */}


                            {/* final[0].curriculum_id == '182' */}
                            {final[0].curriculum_id == '182' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                El camino hacia el viaje digital
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>¿Qué es Marketing y Gestión de Marketing?</li>
                                                                                <li>
                                                                                    ¿Cómo ha cambiado el Marketing a lo largo de los años?
                                                                                </li>
                                                                                <li>
                                                                                    {" "}
                                                                                    ¿En qué se diferencia el marketing digital del
                                                                                    marketing? (Entregabilidad, Mensurabilidad, etc.)
                                                                                </li>
                                                                                <li>Entendiendo al Consumidor Digital</li>
                                                                                <li>Canales de marketing digital</li>
                                                                                <li>Métricas de marketing digital</li>
                                                                                <li>Actualización de marketing</li>
                                                                                <li>Descripción general del marketing digital</li>
                                                                                <li>Conceptos básicos del sitio web</li>
                                                                                <li>Diseño de sitios web y redacción</li>
                                                                                <li>Fundamentos de Wordpress</li>
                                                                                <li>Prueba</li>
                                                                                <li>Laboratorio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Presencia digital de marca y optimización
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Identificar y configurar la presencia digital de las
                                                                                    marcas
                                                                                </li>
                                                                                <li>Ejecutar UI y UX del sitio web</li>
                                                                                <li>Conceptos básicos de análisis web</li>
                                                                                <li>Prueba</li>
                                                                                <li>Laboratorio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Marketing Estratégico en Redes Sociales
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Edificación Inmobiliaria Social</li>
                                                                                <li>
                                                                                    Uso de canales: Facebook, Twitter, crowdsourcing, etc.
                                                                                </li>
                                                                                <li>
                                                                                    Uso de estrategias para conectarse con la audiencia
                                                                                </li>
                                                                                <li>
                                                                                    Medición del rendimiento: compromiso social y tráfico
                                                                                    volver al sitio
                                                                                </li>
                                                                                <li>Gestión de la reputación en línea</li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Analítica, Estrategia y Operaciones en Marketing Digital
                                                                                </li>
                                                                                <li>Configuración de la analítica web</li>
                                                                                <li>Trabajando con Google Analytics</li>
                                                                                <li>Estrategia de Mercadeo Digital</li>
                                                                                <li>Operación de Mercadeo Digital</li>
                                                                                <li>Introducción a la gestión de redes sociales</li>
                                                                                <li>mercadeo en facebook</li>
                                                                                <li>Marketing de LinkedIn</li>
                                                                                <li>mercadeo en twitter</li>
                                                                                <li>Otros canales de redes sociales</li>
                                                                                <li>Gestión de canales de redes sociales</li>
                                                                                <li>Prueba</li>
                                                                                <li>Laboratorio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Optimización de motores de búsqueda
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Conceptos básicos de SEO y lista de verificación 101
                                                                                </li>
                                                                                <li>Identificación de temas de palabras clave</li>
                                                                                <li>Medición del impacto SEO</li>
                                                                                <li>Mercadeo de Contenidos</li>
                                                                                <li>Mercadotecnia interna</li>
                                                                                <li>Conceptos básicos de los motores de búsqueda</li>
                                                                                <li>Optimización de contenido en el sitio</li>
                                                                                <li>Optimización técnica in situ</li>
                                                                                <li>Optimización fuera de página</li>
                                                                                <li>Gestión SEO</li>
                                                                                <li>Prueba</li>
                                                                                <li>Laboratorio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Marketing de motores de búsqueda
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Tendencias en SEM</li>
                                                                                <li>Conceptos básicos de búsqueda de Google</li>
                                                                                <li>Optimizaciones de búsqueda de Google</li>
                                                                                <li>Campañas de Google Shopping</li>
                                                                                <li>Promociones patrocinadas de Gmail (GSP)</li>
                                                                                <li>Anuncios de Google 101</li>
                                                                                <li>Búsqueda de publicidad en Google</li>
                                                                                <li>Publicidad gráfica en Google</li>
                                                                                <li>Publicidad en vídeo en Google</li>
                                                                                <li>Publicidad móvil en Google</li>
                                                                                <li>Publicidad de compras en Google</li>
                                                                                <li>Administrar anuncios de Google</li>
                                                                                <li>Prueba</li>
                                                                                <li>Laboratorio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                comercialización de la pantalla
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Conceptos básicos de la publicidad gráfica</li>
                                                                                <li>Red de Display de Google</li>
                                                                                <li>Prueba</li>
                                                                                <li>Laboratorio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Retargeting / Remarketing
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Comprender el remarketing</li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Tipos y Estrategias de Remarketing y Comunicación
                                                                                </li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Análisis del rendimiento y las optimizaciones de la
                                                                                    lista de remarketing
                                                                                </li>
                                                                                <li>Prueba</li>
                                                                                <li>Laboratorio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Mercadeo de Contenidos
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Crear calendario editorial</li>
                                                                                <li>Estrategias de distribución de contenido</li>
                                                                                <li>Marketing de Contenidos Analizar y Actuar</li>
                                                                                <li>Mercadeo de Contenidos</li>
                                                                                <li>Mercadotecnia interna</li>
                                                                                <li>Prueba</li>
                                                                                <li>Laboratorio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Marketing por correo electrónico efectivo
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    ¿Qué es un correo electrónico desde el punto de vista
                                                                                    del marketing?
                                                                                </li>
                                                                                <li>Creación de una lista de correo electrónico</li>
                                                                                <li>Administrar una lista de correo electrónico</li>
                                                                                <li>Automatización de correo electrónico</li>
                                                                                <li>Medición del impacto y optimización</li>
                                                                                <li>Prueba</li>
                                                                                <li>Laboratorio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Ecosistema AdTech y MarTech
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Rol de AdTech y MarTech</li>
                                                                                <li>Plataformas de tecnología publicitaria</li>
                                                                                <li>Plataformas MarTech</li>
                                                                                <li>Modelo de facturación</li>
                                                                                <li>Público objetivo</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Comercialización de aplicaciones móviles
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Conceptos básicos de marketing de aplicaciones móviles
                                                                                </li>
                                                                                <li>Estrategias de tráfico para aplicaciones móviles</li>
                                                                                <li>La publicidad móvil</li>
                                                                                <li>Análisis del rendimiento de la aplicación móvil</li>
                                                                                <li>Prueba</li>
                                                                                <li>Laboratorio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Métricas y análisis digitales
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Análisis de GA: identifique KPI relevantes</li>
                                                                                <li>Identificar fuentes de tráfico</li>
                                                                                <li>
                                                                                    Seguimiento del tráfico asignado al embudo del
                                                                                    consumidor
                                                                                </li>
                                                                                <li>Configuración de la analítica web</li>
                                                                                <li>Trabajando con Google Analytics</li>
                                                                                <li>Estrategia de Mercadeo Digital</li>
                                                                                <li>Operación de Mercadeo Digital</li>
                                                                                <li>Prueba</li>
                                                                                <li>Laboratorio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Planificación y estrategia digital
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Modelo de madurez de marketing digital</li>
                                                                                <li>Evaluar las finalizaciones de objetivos de canal</li>
                                                                                <li>Crear paneles de marketing</li>
                                                                                <li>Optimizar canales</li>
                                                                                <li>Creación de planes de marketing</li>
                                                                                <li>Prueba</li>
                                                                                <li>Laboratorio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                                : ''}
                            {/* End - final[0].curriculum_id == '182' */}


                            {/* final[0].curriculum_id == '111' */}
                            {final[0].curriculum_id == '111' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Python para IA y ML
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Funciones y paquetes de Python</li>
                                                                                <li>Trabajar con estructuras de datos,</li>
                                                                                <li>Matrices, vectores y marcos de datos</li>
                                                                                <li>Funciones y métodos</li>
                                                                                <li>Pandas, NumPy, Matplotlib, Seaborn</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Estadísticas aplicadas
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Estadísticas descriptivas</li>
                                                                                <li>La probabilidad condicional</li>
                                                                                <li>curva de campana</li>
                                                                                <li>Distribución gaussiana</li>
                                                                                <li>Distribución normal</li>
                                                                                <li>correlación de Pearson</li>
                                                                                <li>Prueba de hipótesis</li>
                                                                                <li>Estadística inferencial</li>
                                                                                <li>Distribuciones de probabilidad</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Aprendizaje automático: aprendizaje supervisado
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Regresión lineal</li>
                                                                                <li>Regresión lineal de múltiples variables</li>
                                                                                <li>Regresión logística</li>
                                                                                <li>Algoritmo de árbol de decisión</li>
                                                                                <li>Clasificadores Naive Bayes</li>
                                                                                <li>Clasificación K-NN</li>
                                                                                <li>Máquinas de vectores de soporte</li>
                                                                                <li>Ajuste de hiperparámetro del modelo</li>
                                                                                <li>Caso de estudio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Aprendizaje sin supervisión
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Clúster de K-medias</li>
                                                                                <li>Agrupación jerárquica</li>
                                                                                <li>DBSCAN</li>
                                                                                <li>
                                                                                    Reducción de dimensiones: análisis de componentes
                                                                                    principales (PCA)
                                                                                </li>
                                                                                <li>Caso de estudio</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Sistemas de recomendación
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introducción a los Sistemas de Recomendación</li>
                                                                                <li>Modelo basado en la popularidad</li>
                                                                                <li>Basado en contenido</li>
                                                                                <li>Sistema de recomendación</li>
                                                                                <li>
                                                                                    Filtrado colaborativo (similitud de usuarios y similitud
                                                                                    de elementos)
                                                                                </li>
                                                                                <li>Modelos híbridos</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Paquete Técnico
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Harpillera</li>
                                                                                <li>impulsar</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introducción a las redes neuronales y el aprendizaje
                                                                                profundo
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introducción a Perceptron y redes neuronales</li>
                                                                                <li>Funciones de activación y pérdida</li>
                                                                                <li>Descenso de gradiente</li>
                                                                                <li>Ajuste de hiperparámetros</li>
                                                                                <li>Tensor Flow y Keras para redes neuronales</li>
                                                                                <li>Introducción al aprendizaje profundo</li>
                                                                                <li>
                                                                                    Redes neuronales superficiales Redes neuronales
                                                                                    profundas
                                                                                </li>
                                                                                <li>Introducción a RNN</li>
                                                                                <li>Introducción a CNN</li>
                                                                                <li>Introducción a la RNA</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Conceptos básicos de PNL (procesamiento del lenguaje
                                                                                natural)
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introducción a la PNL</li>
                                                                                <li>Para las palabras</li>
                                                                                <li>Tokenización</li>
                                                                                <li>Stemming y lematización</li>
                                                                                <li>Modelo Bolsa de Palabras</li>
                                                                                <li>Vectorizador de palabras</li>
                                                                                <li>TF-FDI</li>
                                                                                <li>Etiquetado POS</li>
                                                                                <li>Reconocimiento de entidad nombrada</li>
                                                                                <li>Modelos Secuenciales y PNL</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introducción a los datos secuenciales
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>RNN y sus mecanismos</li>
                                                                                <li>Gradientes que desaparecen y explotan en RNN</li>
                                                                                <li>LSTM - Memoria a corto plazo</li>
                                                                                <li>GRU: unidad recurrente cerrada</li>
                                                                                <li>Aplicaciones de LSTM</li>
                                                                                <li>Análisis de series temporales</li>
                                                                                <li>LSTMs con mecanismo de atención</li>
                                                                                <li>Traducción automática neuronal</li>
                                                                                <li>Modelos de lenguaje avanzado:</li>
                                                                                <li>Transformadores, BERT, XLNet</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Visión por computador
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Introducción a las redes neuronales convolucionales
                                                                                </li>
                                                                                <li>Convolución, agrupación, relleno y sus mecanismos</li>
                                                                                <li>Propagación hacia adelante</li>
                                                                                <li>Retropropagación para CNN</li>
                                                                                <li>
                                                                                    Arquitecturas CNN como AlexNet, VGGNet, InceptionNet y
                                                                                    ResNet
                                                                                </li>
                                                                                <li>Transferencia de aprendizaje</li>
                                                                                <li>
                                                                                    Cómo construir y entrenar redes neuronales profundas y
                                                                                    aplicarlo a la visión artificial.
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introducción a las GAN (redes antagónicas generativas)
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introducción a las GAN</li>
                                                                                <li>Redes Generativas</li>
                                                                                <li>Redes adversarias</li>
                                                                                <li>¿Cómo funcionan las GAN?</li>
                                                                                <li>DCGAN - GAN de convolución profunda</li>
                                                                                <li>Aplicaciones de las GAN</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introducción al Aprendizaje por Refuerzo (RL)
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Marco RL</li>
                                                                                <li>Componente del Marco RL</li>
                                                                                <li>Ejemplos de Sistemas RL</li>
                                                                                <li>Tipos de sistemas RL</li>
                                                                                <li>Q-aprendizaje</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            {/* End - final[0].curriculum_id == '111' */}



                        </div>
                        : ''}

                </div>
            </div>

        </>
    )
}
