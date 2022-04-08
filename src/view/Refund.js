import React, { useEffect } from 'react'
import Hero from '../Atoms/Hero'
import disclaimer from '../Images/Datascience4.png'
import { Helmet } from 'react-helmet'


const Refund = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='full-w refund-policy blog-detials-single'>
            <Helmet>
                <title>Politica de reembolso</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="https://www.careerera.com/es/refund-policy" />
            </Helmet>


            <Hero
                title="POLITICA"
                detail=" DE REEMBOLSO"
                batch=" Hogar / Politica de reembolso "
                img={disclaimer}
            />
            <div className="container py-16">
                <h1 className="text-center font-bold">Politica De Reembolso</h1>
                <div className="border-t-2 border-gray-500 w-14 my-3 mx-auto"></div>

                <div className="content normal">
                    <p className="mt-10">
                        Gracias por comprar nuestros cursos. Queremos asegurarnos de que nuestros
                        usuarios tengan una experiencia gratificante mientras descubren información,
                        evalúan y compran nuestros cursos de capacitación, ya sea en línea o
                        presenciales. <br />
                        <br />
                        Al igual que con cualquier experiencia de compra en línea, a continuación se
                        encuentran los términos y condiciones que rigen la Política de reembolso.{" "}
                        Cuando compra un curso de capacitación en el sitio web de 'Careerera',
                        acepta nuestra Política de privacidad, Términos de uso y los puntos a
                        continuación.
                    </p>
                    <div>
                        <h3 className="text-2xl mt-5 mb-0 font-semibold">
                            Prácticas de Información de Carrera
                        </h3>
                        <p className="mt-2">
                            'Careerera'.com ofrece capacitación en línea y presencial para PMP, CAPM,
                            Six Sigma, ITIL, Primavera, MS SharePoint, PMI-ACP, PMI-RMP, Minitab, MS
                            Project utilizando este sitio web. Nuestros cursos están diseñados para
                            ayudar a los gerentes de proyectos en la preparación de exámenes de
                            certificación profesional.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl mt-5 mb-0 font-semibold">
                            Cancelación y reembolsos: Capacitación en el aula/capacitación en línea
                            dirigida por un instructor
                        </h3>
                        <p className="mt-3">
                            Carrera'/ SNVA LLC. , se reserva el derecho de posponer/cancelar un
                            evento, o cambiar la ubicación de un evento debido a inscripciones
                            insuficientes, enfermedad del instructor o eventos de fuerza mayor (como
                            inundaciones, terremotos, inestabilidad política, etc.)
                        </p>
                        <ul>
                            <li className=" mt-3">
                                En el caso 'Carerera'/ SNVA LLC. cancela un evento, se le reembolsará el
                                100% al delegado.{" "}
                            </li>
                            <li className=" mt-2">
                                Si un delegado realiza una cancelación 7 días o más antes del evento, se
                                deducirá el 10% de la tarifa total pagada y el monto restante se
                                reembolsará al delegado.
                            </li>
                            <li className=" mt-2">
                                Si un delegado realiza una cancelación 7 días o menos antes del evento,
                                no se realizarán reembolsos.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl mt-5 mb-0 font-semibold">
                            Cancelación y reembolsos: formación en línea
                        </h3>
                        <ul>
                            <li className=" mt-3">
                                Si la cancelación es realizada por el delegado dentro de las 48 horas
                                posteriores a la suscripción, se deducirá el 5% del total de la tarifa
                                pagada como tarifa de administración.{" "}
                            </li>
                            <li className=" mt-2">
                                Si la cancelación la hace el delegado después de 48 horas de haberse
                                suscrito no se realizará devolución alguna.
                            </li>
                            <li className=" mt-2">
                                En el caso de cursos de terceros (por ejemplo, MS Project y MS Share
                                point), se cobrará el 50% de la tarifa total pagada como cargos de
                                administración y cancelación sobre la tarifa total pagada por el
                                delegado y el monto restante se pagará si la cancelación se realiza
                                dentro de las 48 horas posteriores a la suscripción.
                            </li>
                            <li className=" mt-2">
                                No se realizará ningún reembolso al delegado después de 48 horas de
                                haberse inscrito en el curso.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl mt-5 mb-0 font-semibold">
                            Reembolsos: Pago duplicado
                        </h3>
                        <p className="mt-3">
                            El reembolso del pago duplicado realizado por el delegado se procesará a
                            través de la misma fuente (método de pago original) dentro de los 5 a 7
                            días hábiles posteriores a la notificación del cliente. <br />
                            <br />
                            <b>Nota 1:</b> Todos los reembolsos se procesarán dentro de los 30 días
                            posteriores a la recepción de la solicitud de reembolso.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Refund
