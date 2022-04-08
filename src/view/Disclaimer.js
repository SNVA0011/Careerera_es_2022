import React,{useEffect} from 'react'
import Hero from '../Atoms/Hero'
import disclaimer from '../Images/Datascience4.png'
import { Helmet } from 'react-helmet'

const Disclaimer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='disclaimer-pageview blog-detials-single'>
            <Helmet>
                <title>Descargo de responsabilidad</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="https://www.careerera.com/es/disclaimer"/>
            </Helmet>


            <Hero
                title="Descargo de responsabilidad "
                detail=""
                batch=" Hogar / Descargo de responsabilidad"
                img={disclaimer} />
            <div className="container py-16">
                <h1 className="text-center font-bold">Descargo de responsabilidad</h1>
                <div className="border-t-2 border-gray-500 w-14 my-3 mx-auto"></div>

                <div className='content normal'>
                    <p className="mt-10">
                        "PMI®", "PMBOK®", "PMP®" y "PMI-ACP®" son marcas registradas
                        del Project Management Institute, Inc.
                        <br /> <br />
                        El logotipo SwirlTM es una marca comercial de AXELOS Limited.
                        <br /> <br />
                        ITIL® es una marca registrada de AXELOS Limited.
                        <br /> <br />
                        PRINCE2® es una marca comercial registrada de AXELOS Limited.
                        <br /> <br />
                        MSP® es una marca registrada de AXELOS Limited
                        <br /> <br />
                        ScrumMaster® certificado (CSM) y Scrum Trainer® certificado
                        (CST) son marcas registradas de SCRUM ALLIANCE®
                        <br /> <br />
                        COBIT® es una marca comercial de ISACA® registrada en los Estados Unidos
                        Estados y otros países.
                        <br /> <br />
                        CISA® es una Marca Registrada de los Sistemas de Información
                        Asociación de Auditoría y Control (ISACA) y Gobierno de TI
                        Instituto
                        <br /> <br />
                        CISSP es una marca registrada de The International
                        Consorcio de Certificación de Seguridad de Sistemas de Información
                        ((CSI)2)
                        <br /> <br />
                        FRM®, GARPTM y Asociación Global de Profesionales de RiesgoTM,
                        son marcas registradas propiedad de la Asociación Global de Riesgo
                        Profesionales, Inc.
                        <br /> <br />
                        Global Association of Risk Professionals, Inc. (GARPTM) no
                        no respalda, promueve, revisa ni garantiza la exactitud de los
                        productos o servicios ofrecidos por 'Careerera'/SNVA LLC.. para
                        información relacionada con FRM®, ni respalda ninguna tasa de aprobación
                        reclamado por el proveedor. Además, GARP no es responsable
                        por cualquier tarifa o costo pagado por el usuario a 'Careerera'/SNVA
                        LLC.. ni GARP es responsable de ninguna tarifa o costo de cualquier
                        persona o entidad que presta servicios a 'Careerera'/SNVA
                        LLC.. Programa de estudios. CFA Institute no respalda,
                        promover o garantizar la exactitud o calidad de los productos
                        o servicios ofrecidos por 'Careerera'/SNVA LLC.. CFA Institute,
                        CFA® y Chartered Financial Analyst® son marcas comerciales propiedad
                        por el Instituto CFA.
                        <br /> <br />
                        SAP® es la marca comercial o marca comercial registrada de SAP AG.
                        'Careerera'/ SNVA LLC.. no está afiliada ni respaldada
                        por SAP AG. Todo el material de capacitación es contenido propietario de
                        'Careerera'/ SNVA LLC.. y sus Socios.
                        <br /> <br />
                        CNA® y CCNP® son marcas comerciales de Cisco y registradas
                        marcas registradas en los Estados Unidos y algunos otros países.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Disclaimer
