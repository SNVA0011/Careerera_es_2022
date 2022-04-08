import React, { useContext } from "react";
import Accordion from 'react-bootstrap/Accordion';
import "../../style.css";
import { Context } from "../../Api";
const Courses = () => {
  const { value5, value6 } = useContext(Context);
  const [Catfinal, Catsetfinal] = value5;
  const [Catsts, Catloadsts] = value6;
  return (
    <>
      {Catsts ?
        <div id="FAQ">
          <div className="lg:pl-40 lg:pr-40 pl-8 pr-8 pt-8  pb-8">
            <h1 className="font-bold text-4xl">Curso de Ciencia de Datos   <span className="text-blue-500 sitblu-clrsite"> Certificación </span></h1>
            <p className="text-gray-700 font-semibold mt-2">Acerca del curso de certificación de ciencia de datos</p>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Accordion defaultActiveKey="null">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>P1: ¿Qué es el curso PGP en ciencia de datos de Careerera y qué lo diferencia de los cursos individuales?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span>R: El programa de posgrado en ciencia de datos es una ruta de aprendizaje cuidadosamente diseñada que ha sido creada por algunos de los principales expertos de la industria. La estructura del plan de estudios del curso se ha configurado de manera que incluso un principiante completo en Data Science podrá seguir la progresión del curso y comprender claramente todos los materiales del curso. Nuestros instructores de clase mundial se asegurarán de que se convierta en un maestro de la ciencia de datos cuando complete el curso.</span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>P2: ¿Puede Careerera proporcionar el curso PGP en ciencia de datos en un lugar cercano a mí?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span>R: El contenido de nuestro curso está destinado a llegar a los estudiantes de todo el mundo. Ya sea que resida en cualquier país, ya sea India, Canadá, EE. UU., Filipinas, Singapur, Malasia, Australia o países europeos como Reino Unido, Alemania, Países Bajos, Alemania u otro lugar, podrá acceder a nuestro contenido 24/7, en cualquier momento del día. La razón de esto es que nuestro contenido está disponible 100% en línea. Puede acceder a todo nuestro contenido desde su casa u oficina.</span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="2">
                    <Accordion.Header>P3: ¿Puedo solicitar una sesión de apoyo y aclaración de dudas si quiero comprender los temas a un nivel más profundo?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span>R: Careerera ofrece resolución de consultas las 24 horas del día, los 7 días de la semana y puede presentar un ticket con un equipo de soporte dedicado en cualquier momento. Brindamos soporte por correo electrónico y chat de video para todas las consultas. Si su consulta no se resuelve en un período de tiempo adecuado a través del correo electrónico, organizaremos sesiones individuales en vivo con nuestros instructores de clase mundial que estarán encantados de guiarlo a través de sus dudas.
                           Le alegrará saber que Careerera no impide que sus alumnos se comuniquen con los instructores incluso después de haber completado el curso. Pueden crear tantos tickets de soporte como deseen; no ponemos ningún límite en el número de entradas que pueden crear. </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="3">
                    <Accordion.Header>P4: ¿Qué tipo de proyectos se asignan como parte de la capacitación?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span>R: Careerera asigna los proyectos de alto valor más actualizados, relevantes y prácticos a sus alumnos. Tienen mucho valor en el mundo real, ya que están diseñados cuidadosamente por nuestros instructores de clase mundial para brindar experiencia práctica a los alumnos a medida que los completan. Le brindamos una ruta segura y confiable a través de la cual puede implementar el aprendizaje y el conocimiento que ha adquirido en un entorno industrial del mundo real. Estos proyectos son parte de cada curso en Careerera y pondrán a prueba a fondo su aprendizaje, habilidades y conocimientos prácticos, lo que lo preparará total y completamente para los trabajos de la industria.
                          Tendrá la oportunidad de trabajar en proyectos extremadamente emocionantes y exigentes en los campos de TI de alta tecnología, marketing, ventas, comercio electrónico, seguros, banca, redes, etc. Después de completar los proyectos con éxito, sus habilidades serán equivalentes a 6 meses completos de minuciosa y rigurosa experiencia en la industria.
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>P5: ¿Carerera brinda algún tipo de asistencia laboral?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span>Carerera apoya a sus estudiantes proporcionando asistencia de colocación a todos los estudiantes que completen con éxito el curso y aprueben todos los exámenes, proyectos y tareas. Tenemos asociaciones con muchas empresas multinacionales y otros empleadores importantes de todo el mundo. A través de nuestras redes de contactos, puede conseguir con éxito un trabajo en varias organizaciones destacadas y empresas igualmente grandes. También llevamos a cabo varios seminarios y talleres gratuitos sobre cómo crear un currículum y cómo prepararse para las entrevistas de trabajo. También llevaremos a cabo sesiones de asesoramiento que serán para orientación profesional y participación en ferias profesionales.
                         </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="5">
                    <Accordion.Header>P6: ¿Cuál es la definición de ciencia de datos? ¿Por qué es tan importante?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span> R: La ciencia de datos es un campo para unificar el análisis de datos, las estadísticas y sus métodos relacionados para comprender y analizar fenómenos reales con datos. Utiliza técnicas y teorías extraídas de muchos campos dentro del contexto de la estadística, la informática, las matemáticas, el dominio del conocimiento y la ciencia de la información. El campo implica extraer, visualizar, analizar, almacenar y administrar datos para crear conocimientos. Estos conocimientos ayudan a las empresas a tomar decisiones eficaces basadas en datos.
                          Toda organización necesita evaluar y analizar datos para comprender el rendimiento de las ventas, el enfoque de marketing, el comportamiento del cliente, el rendimiento operativo, etc. En el caso de las empresas de servicios financieros, bancos, empresas de comercio electrónico, unidades de fabricación y empresas de atención médica, los líderes buscan obtener información útil e incisiva de todos los datos que han recopilado a lo largo de los años. Todas estas empresas están reuniendo equipos de ciencia de datos o contratando consultores de ciencia de datos para resolver sus problemas comerciales o identificar nuevas oportunidades que puedan explotar. Los datos son cada vez más importantes cada día, al igual que los roles de Data Scientist o Data Analyst.
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="6">
                    <Accordion.Header>P7: ¿Es el científico de datos una buena elección de carrera?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span>R: La ciencia de datos tiene una gran demanda en muchas industrias, desde TI hasta finanzas, comercio electrónico, fabricación, atención médica y venta minorista. Es el trabajo de más rápido crecimiento en Linkedin y se prevé que cree 11,5 millones de puestos de trabajo para 2026. Esto hace que Data Science sea una opción de carrera muy lucrativa. Además, la cantidad de personas que realmente poseen las habilidades necesarias para convertirse en un científico de datos completo es muy pequeña. Por lo tanto, existe una gran demanda de científicos de datos pero una baja oferta de personas calificadas. Entonces, los científicos de datos pueden exigir un salario tan alto como quieran y las empresas tendrán que cumplir con sus demandas.
                         </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="7">
                    <Accordion.Header>P8: ¿Cuáles son las habilidades requeridas para comenzar un trabajo en el campo de la ciencia de datos?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span>R: Las habilidades que necesitará para conseguir un trabajo en el campo de la ciencia de datos son: codificación de Python, conocimiento de la plataforma Hadoop, base de datos/codificación SQL, conocimiento específico del dominio de trabajo de aprendizaje automático e IA, habilidades de visualización de datos, estadísticas , Cálculo Multivariable y Álgebra Lineal.
                         </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="8">
                    <Accordion.Header>P9: ¿Quién es elegible para tomar el curso PGP en ciencia de datos de Careerera?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span>R: Las empresas que buscarán contratar científicos de datos buscarán los siguientes títulos:
                           Para recién graduados o estudiantes universitarios: un título en B.Tech/M.Tech (Cualquier oficio), BCA, MCA o B.Sc (Estadística o Matemáticas), BA (Matemáticas o Economía o Estadísticas), B.Com.
                           Para profesionales que trabajan: experiencia profesional de más de 1 año en Python, R, SAS, inteligencia empresarial, almacenamiento de datos, SQL. Si su experiencia profesional no está relacionada con el análisis de datos, aún puede cambiar a una carrera en Data Science siempre que tenga alguno de los títulos especificados anteriormente.
                           Sin embargo, para inscribirse en el curso PGP en ciencia de datos, no necesita ninguna experiencia técnica o de programación. Enseñamos todos los módulos desde cero.
                         </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="9">
                    <Accordion.Header>P10: ¿Cuáles son las herramientas y tecnologías utilizadas para impartir este curso de PGP en ciencia de datos de Careerera?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span>R: Python, Tableau, SQL.
                         </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="10">
                    <Accordion.Header>P11: ¿Cuál es la duración de este curso de PGP en ciencia de datos de Careerera?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span>R: El curso PGP en Data Science de Careerera es un programa en línea de 12 meses de duración.
                         </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="11">
                    <Accordion.Header>P12: ¿Qué temas se tratan en el plan de estudios del curso PGP en Data Science de Careerera?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span>R: Hay varios temas pertinentes al campo de la ciencia de datos que se tratan en este curso de PGP en ciencia de datos. Algunos de ellos son los siguientes: regresión, modelado predictivo, agrupamiento, pronóstico de series temporales, clasificación, etc. Hay ejercicios que requieren estructurar un problema comercial en un marco de análisis utilizando estadísticas y modelado de datos. También hay temas de limpieza de datos, transformación de datos, aprendizaje profundo y procesamiento de lenguaje natural (NLP).
                         </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="12">
                    <Accordion.Header>P13: ¿En qué sectores se basan los proyectos finales?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span>A : Venta minorista, web y redes sociales, cadena de suministro, emprendimiento, comercio electrónico, banca, atención médica, seguros, finanzas y cuentas, etc.
                         </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="13">
                    <Accordion.Header>P14: ¿Hay alguna garantía de colocación después de completar el curso PGP en Data Science?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                      <span>R: Proporcionamos asistencia de colocación dedicada después de la finalización del programa. brindamos orientación sobre la redacción de currículums, realizamos talleres sobre preparación de entrevistas.
                         </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="14">
                    <Accordion.Header>P15: ¿Por qué debería uno elegir Careerera?</Accordion.Header>                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>
                          <li>Como proveedor de educación, Careerera tiene como objetivo desarrollar la personalidad general de un individuo para que pueda progresar y convertirse en profesionales altamente calificados.</li>
                          <li>El cuerpo docente de Carerera utiliza tácticas contemporáneas para ofrecer sesiones de capacitación que incluyen interacción uno a uno entre los participantes y el instructor.</li>
                          <li>Los formadores designados para los cursos de Careerera poseen un alto nivel de experiencia en sus materias y campos. Por lo tanto, Careerera puede garantizar fácilmente resultados positivos para todos los participantes.</li>
                          <li>Se brinda orientación las 24 horas del día, los 7 días de la semana a aquellos que la necesitan a través de llamadas, correos electrónicos o videollamadas.</li>
                          <li>Los candidatos pueden optar por clases de demostración para tener una buena idea de las sesiones de capacitación reales.</li>
                          <li>Careerera proporciona el modelo de capacitación en línea en vivo en el aula virtual para que sea más fácil para los profesionales que trabajan asistir a las sesiones por un lado mientras equilibran su trabajo por el otro.</li>
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>



                </Accordion>
              </div>
            </div>
          </div>
        </div>
        : <div className="text-center align-self-center">
          <div className="p-5">
            <button className="btn btn-dark pt-2 shadow-lg" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ width: '2rem', height: '2rem' }}></span>
              <span className="sr-only">Cargando...</span>
            </button>
          </div>
        </div>}

    </>
  )
}
export default Courses;


 