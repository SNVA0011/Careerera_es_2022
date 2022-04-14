import React, { useEffect } from 'react'
import Hero from '../Atoms/Hero'
import disclaimer from '../Images/Datascience4.png'
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";


const Rescheduling = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='rescheduling-policy blog-detials-single'>

            <Helmet>
                <title>Política de reprogramación</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="https://www.careerera.com/es/rescheduling-policy" />
            </Helmet>

            <Hero
                title="Política"
                detail=" De Reprogramación" 
                batch={<> <Link to="/" className="no-underline badge bg-info">Hogar</Link>
        <span className="mx-2"> / </span>Política de reprogramación </>} 
                img={disclaimer}
            />

            <div className='container py-20'>
                <div className="text-left">
                    <h3 className="text-center font-bold">Política De Reprogramación</h3>
                    <div className="border-t-2 border-gray-500 w-14 my-3 mx-auto"></div>

                    <div className="content normal">
                        <p className="mt-10">
                            En el caso 'Carerera / SNVA LLC. ' reprograma el evento de capacitación, las
                            opciones disponibles para los delegados son: <br /> <br />
                            reembolso del 100%, si las fechas reprogramadas no se ajustan al horario del
                            delegado. <br /> <br />
                            El delegado tendría el privilegio de reprogramar y asistir a una clase en el
                            futuro a su conveniencia, en cualquier lugar, en cualquier fecha de una
                            capacitación programada. <br /> <br />
                            Los delegados, si así lo desean, pueden enviar un reemplazo. Sin embargo,
                            esto debe ser comunicado a 'Careerera/ SNVA LLC. ' al menos 3 días antes del
                            evento. <br /> <br />
                            Considerando que, si por alguna razón imprevista, un delegado desea
                            reprogramar su registro para una fecha futura, se cobra una tarifa de
                            reprogramación como se menciona a continuación: <br /> <br />
                            Si la solicitud de reprogramación se recibe 7 días antes (o más), el 10% de
                            la tarifa de registro se cobrará.
                            <br /> <br />
                            Tenga en cuenta que la reprogramación estará sujeta a disponibilidad de
                            asientos. <br /> <br />
                            Si la solicitud de reprogramación se recibe dentro de los 7 días o menos, no
                            se permitirá la reprogramación. Sin embargo, el delegado puede enviar un
                            reemplazo en su lugar.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Rescheduling
