import React, { useEffect } from 'react'
import Hero from '../Atoms/Hero'
import disclaimer from '../Images/Datascience4.png'
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";


const TermsandCondition = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='terms-and-conditions blog-detials-single'>
            <Helmet>
                <title>Términos y condiciones</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="https://www.careerera.com/es/terms-and-conditions" />
            </Helmet>

            <Hero
                title="Términos "
                detail="y Condiciones" 
                batch={<> <Link to="/" className="no-underline badge bg-info">Hogar</Link>
        <span className="mx-2"> / </span>Términos y Condiciones </>} 
                img={disclaimer}
            />

            <div className="container py-16">
                <div className="text-left">
                    <h2 className="text-center font-bold">Términos y Condiciones</h2>
                    <div className="border-t-2 border-gray-500 w-14 my-3 mx-auto"></div>

                    <div className="content normal">
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                1. Aceptación de este Acuerdo
                            </h3>
                            <p className="mt-3 ">
                                1.1 Al hacer clic en la opción 'REGISTRARSE', el participante ("Usted" o
                                "Su") acepta los términos y condiciones, obligaciones, representaciones,
                                garantías y acuerdos contenidos en este documento (el "Acuerdo"). En caso
                                de que no esté dispuesto a aceptar el Acuerdo, no se le autorizará ni se
                                le permitirá seguir adelante para ver o utilizar de ninguna manera ningún
                                contenido, información, cursos, productos y servicios ("Servicios")
                                publicados, disponibles o proporcionados. en www.careerera.com (el "Sitio
                                web"), que es propiedad, mantenido y supervisado por Careerer / SNVA LLC.{" "}
                                ("Nosotros", "Nosotros" o "Nuestro").
                                <br />
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                2. ID de usuario y contraseña
                            </h3>
                            <p className="mt-3 ">
                                2.1 Al celebrar este Acuerdo, reconoce y acepta que su ID de usuario y
                                contraseña ("Cuenta de participante") son para su uso exclusivo
                                únicamente. El uso o el intercambio de su cuenta de participante con otro
                                usuario no está permitido y es motivo para el bloqueo inmediato de su
                                acceso al sitio web, los servicios y el contenido y material didáctico y
                                la rescisión de este acuerdo.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                2.1 Al celebrar este Acuerdo, reconoce y acepta que su ID de usuario y
                                contraseña ("Cuenta de participante") son para su uso exclusivo
                                únicamente. El uso o el intercambio de su cuenta de participante con otro
                                usuario no está permitido y es motivo para el bloqueo inmediato de su
                                acceso al sitio web, los servicios y el contenido y material didáctico y
                                la rescisión de este acuerdo.
                                <br />
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                3. Contenido y material didáctico
                            </h3>
                            <p className="mt-3 ">
                                3.1 Como parte de nuestros Servicios ofrecidos a través de nuestro sitio
                                web, le otorgaremos acceso a nuestro contenido, cursos, pruebas de
                                práctica y otra información, documentos, datos que pueden estar en
                                audio/video, escritos, gráficos, grabados, fotográficos o cualquier
                                formato legible por máquina en relación con el curso de capacitación de
                                certificación específico en el que se ha registrado ("Contenido y Material
                                didáctico").
                                <br />
                            </p>
                            <p className="mt-3 ">
                                3.2 Nos reservamos el derecho de modificar, revisar o actualizar el
                                Contenido y el Material didáctico que se le ofrece. En el caso de que se
                                produzca dicha modificación, revisión o actualización, es posible que le
                                solicitemos que pague una cantidad adicional de tarifas para acceder a
                                dicho Contenido y Cursos modificados, revisados ​​o actualizados.
                                <br />
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                5. Uso del Sitio Web y los Servicios
                            </h3>
                            <p className="mt-3 ">
                                5.1 Le otorgamos una licencia personal, restringida, intransferible, no
                                exclusiva y revocable para utilizar el Sitio web, los Servicios y el
                                Contenido y los cursos que se ofrecen a través del Sitio web hasta el
                                momento en que complete el curso de capacitación de certificación en el
                                que se ha inscrito. o terminación de este Acuerdo de acuerdo con los
                                términos y condiciones establecidos en este documento, lo que ocurra
                                primero. Los Servicios y el Contenido y el Material didáctico se
                                proporcionan únicamente para su uso personal y no comercial para ayudarlo
                                a completar el curso de capacitación de certificación para el que se ha
                                registrado ("Finalidad restringida").
                                <br />
                            </p>
                            <p className="mt-3 ">
                                5.2 Se le permite el acceso en línea al Sitio web, los Servicios y el
                                Contenido y el Material didáctico y puede descargar, guardar o imprimir el
                                Contenido y el Material didáctico únicamente para el Propósito
                                restringido.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                5.3 No se le permite reproducir, transmitir, distribuir, sublicenciar,
                                transmitir, difundir o preparar trabajos derivados del Contenido y el
                                Material didáctico, o cualquier parte del mismo, de ninguna manera o a
                                través de canales o medios de comunicación, para cualquier propósito que
                                no sea el Propósito Restringido, sin Nuestro consentimiento previo por
                                escrito.
                                <br />
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                6. Derechos de propiedad intelectual
                            </h3>
                            <p className="mt-3 ">
                                6.1 Si bien se le otorga un derecho limitado y no exclusivo para usar el
                                Sitio web, los Servicios y el Contenido y el Material didáctico para el
                                Propósito restringido como se establece en este Acuerdo, Usted reconoce y
                                acepta que Somos el propietario único y exclusivo del Sitio web. , los
                                Servicios y el Contenido y el Material didáctico y, como tales, tienen
                                todos los derechos de propiedad intelectual y otros derechos de propiedad
                                en el Sitio web, los Servicios y el Contenido y el Material didáctico.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                6.2 Usted reconoce y acepta que este Acuerdo, aparte de permitirle usar el
                                Sitio web, los Servicios y el Contenido y el Material didáctico para el
                                Propósito restringido, no le otorga de ninguna manera o forma ningún
                                derecho, título o interés de propiedad o cualquier otro naturaleza en el
                                Sitio Web, los Servicios y el Contenido y el Material didáctico.
                                <br />
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                7. Uso de la información personal de los participantes
                            </h3>
                            <p className="mt-3 ">
                                7.1 Nos reservamos el derecho de mostrar Su imagen en cualquier foto,
                                video u otro material promocional que utilicemos. Además, podemos utilizar
                                su información personal para informarle sobre otros cursos de capacitación
                                de certificación que ofrecemos. Sin embargo, no distribuiremos ni
                                compartiremos Su información personal con ninguna base de datos de
                                marketing de terceros ni divulgaremos Su información personal a ningún
                                tercero, excepto caso por caso después de la verificación adecuada de
                                dicho tercero o si así lo requiere cualquier ley aplicable.
                                <br />
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                8. Limitación de responsabilidad
                            </h3>
                            <p className="mt-3 ">
                                8.1 Usted acepta expresamente que el uso del sitio web, los servicios y el
                                contenido y el material didáctico se realizan bajo su exclusivo riesgo. No
                                garantizamos que el Sitio web o los Servicios o el acceso al Contenido y
                                al Material didáctico serán ininterrumpidos o libres de errores; ni hay
                                ninguna garantía en cuanto a los resultados que se pueden obtener del uso
                                del sitio web, los servicios o el contenido y el material didáctico o en
                                cuanto a la precisión o confiabilidad de cualquier información
                                proporcionada a través del sitio web, los servicios o el contenido y el
                                material didáctico. En ningún caso, Nosotros o cualquier persona o entidad
                                involucrada en la creación, producción o distribución del Sitio web, los
                                Servicios o el Contenido y el Material didáctico serán responsables de
                                ningún daño directo, indirecto, incidental, especial o consecuente que
                                surja del uso o la incapacidad de usar el sitio web, los servicios o el
                                contenido y el material didáctico.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                8.2 La exención de responsabilidad contenida en esta cláusula se aplica a
                                todos y cada uno de los daños o perjuicios causados ​​por cualquier falla
                                en el desempeño, error, omisión, interrupción, eliminación, defecto,
                                demora en la operación o transmisión, virus informático, falla en la línea
                                de comunicación, robo o destrucción. o acceso no autorizado, alteración o
                                uso de registros o cualquier otro material, ya sea por incumplimiento de
                                contrato, negligencia o bajo cualquier otra causa de acción.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                8.3 Por la presente, reconoce específicamente que no somos responsables de
                                ninguna conducta difamatoria, ofensiva, ilícita o ilegal de terceros u
                                otros usuarios del sitio web, los servicios o el contenido y el material
                                didáctico y que el riesgo de daño o perjuicio derivado de lo anterior
                                recae enteramente en cada usuario.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                8.4 Usted acepta que Nuestra responsabilidad o la responsabilidad de
                                Nuestros afiliados, directores, funcionarios, empleados, agentes y
                                otorgantes de licencias, si corresponde, que surja de cualquier tipo de
                                reclamo legal (ya sea por contrato, agravio o de otro tipo) de alguna
                                manera relacionado con los Servicios o el Contenido y el Material
                                didáctico no excederá la tarifa que nos pagó por el curso de capacitación
                                de certificación en particular.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">9. Plazo y rescisión</h3>
                            <p className="mt-3 ">
                                9.1 Este Acuerdo entrará en vigencia una vez que Usted acepte los términos
                                de este Acuerdo al hacer clic en el botón "ACEPTO" y, sujeto a los
                                términos y condiciones de este Acuerdo, permanecerá en vigencia hasta que
                                mantenga una cuenta actual y totalmente pagada. Cuenta de Participante en
                                línea, o hasta que Nosotros la cancelemos, lo que ocurra primero.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                9.2 Nos reservamos el derecho de rescindir este Acuerdo y bloquear Su
                                acceso al Contenido y al Material didáctico con efecto inmediato mediante
                                el envío de una notificación por escrito a través de correo electrónico a
                                este efecto ("Fecha de rescisión inmediata"), si dicha rescisión se
                                produce como resultado de Su tergiversación, incumplimiento, mala conducta
                                o incumplimiento de Sus obligaciones relacionadas con o en virtud de este
                                Acuerdo ("Evento de Incumplimiento"). En caso de que se produzca cualquier
                                Evento de Incumplimiento, estaremos autorizados a ejercer todos los
                                derechos y recursos en virtud de este Acuerdo o la Ley aplicable o
                                disponibles en equidad para buscar una indemnización por cualquier Pérdida
                                o Reclamación que resulte de dicho Evento de Incumplimiento.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                9.3 Las disposiciones de la cláusula 4.3, la cláusula 7.2, la cláusula 8 y
                                la cláusula 11 de este Acuerdo sobrevivirán a la terminación de este
                                Acuerdo.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">10. Indemnización</h3>
                            <p className="mt-3 ">
                                10.1 Usted acepta indemnizarnos y eximirnos a Nosotros, a Nuestros
                                contratistas, otorgantes de licencias, directores, funcionarios, empleados
                                y agentes, de cualquier reclamo, pérdida, daño, responsabilidad y gasto,
                                incluidos los honorarios de abogados, que surjan de Su uso no autorizado
                                de el Sitio Web, los Servicios y el Contenido y el Material didáctico o
                                cualquier violación o incumplimiento de este Acuerdo o cualquiera de sus
                                disposiciones.
                                <br />
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">11. Renuncia</h3>
                            <p className="mt-3 ">
                                11.1 Ni la falta ni la demora por parte de cualquiera de las partes para
                                ejercer cualquier derecho, recurso, poder o privilegio en virtud del
                                presente operará como una renuncia al mismo, o al ejercicio de cualquier
                                otro derecho, recurso, poder o privilegio. Ningún término de este Acuerdo
                                se considerará renunciado, y ningún incumplimiento consentido, a menos que
                                dicha renuncia o consentimiento sea por escrito y firmado por la parte que
                                afirma haber renunciado o consentido. Ninguna renuncia a cualquier derecho
                                o consentimiento a cualquier incumplimiento constituirá una renuncia a
                                cualquier otro derecho o consentimiento a cualquier otro incumplimiento.
                                <br />
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">12. Divisibilidad</h3>
                            <p className="mt-3 ">
                                12.1 En caso de que cualquier disposición de este Acuerdo se considere
                                inválida o inaplicable según las leyes aplicables de la India, las
                                disposiciones restantes continuarán en pleno vigor y efecto, y se
                                considerará que el Acuerdo ha sido reformado reemplazando dicha
                                disposición invalidada o inaplicable con una disposición válida y exigible
                                que da el mayor efecto posible a las intenciones de las partes expresadas
                                por la disposición invalidada o no exigible.
                                <br />
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                13. Ley aplicable y jurisdicción
                            </h3>
                            <p className="mt-3 ">
                                13.1 Para los Participantes que sean residentes de los EE. UU., este
                                Acuerdo se regirá e interpretará de acuerdo con las Leyes de Massachusetts
                                y los tribunales de Massachusetts tendrán la jurisdicción exclusiva sobre
                                cualquier asunto relacionado con, en conexión con o que surja de , este
                                acuerdo.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                13.2 Para los Participantes que no sean residentes de los EE. UU., este
                                Acuerdo se regirá e interpretará de conformidad con las Leyes de India y
                                los tribunales de Noida, India tendrán jurisdicción exclusiva sobre
                                cualquier asunto relacionado con, en conexión con o derivados de este
                                Acuerdo.
                                <br />
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                14. Modificación y Cesión
                            </h3>
                            <p className="mt-3 ">
                                14.1 Nos reservamos el derecho de enmendar o modificar unilateralmente
                                este Acuerdo sin notificarle previamente. Sin embargo, publicaremos el
                                acuerdo revisado en el sitio web para que esté al tanto de las revisiones,
                                modificaciones y enmiendas hechas por nosotros a este Acuerdo. Usted
                                reconoce y acepta que es su responsabilidad revisar el sitio web
                                periódicamente en busca de revisiones, modificaciones y enmiendas. Su uso
                                continuado o acceso al Sitio web, los Servicios y el Contenido y Material
                                didáctico después de la publicación de cualquier cambio a este Acuerdo
                                constituirá la aceptación de dichos cambios.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                14.2 No se le permite ceder este Acuerdo o los derechos y obligaciones
                                mencionados en este Acuerdo a ningún tercero y solo Usted será responsable
                                por cualquier incumplimiento de este Acuerdo o cualquiera de los términos
                                y condiciones del mismo.
                                <br />
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">15. Acuerdo completo</h3>
                            <p className="mt-3 ">
                                15.1 Este Acuerdo, junto con la política de privacidad, la política de
                                reembolso, la política de reprogramación, los términos de uso y cualquier
                                pauta adicional, regla y/o descargo de responsabilidad publicado en el
                                sitio web constituye el acuerdo completo que rige su uso de nuestro sitio
                                web y reemplaza cualquier acuerdo anterior, si cualquiera, en relación con
                                cualquier asunto tratado en este Acuerdo.
                                <br />
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default TermsandCondition
