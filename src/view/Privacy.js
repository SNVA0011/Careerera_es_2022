import React, { useEffect } from 'react'
import Hero from '../Atoms/Hero'
import disclaimer from '../Images/Datascience4.png'
import { Helmet } from 'react-helmet'


const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="full-w privacy-policy blog-detials-single">
            <Helmet>
                <title>Política de privacidad</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="https://www.careerera.com/es/privacy-policy" />
            </Helmet>

            <Hero
                title="Política"
                detail=" De Privacidad"
                batch=" Hogar / Política de privacidad "
                img={disclaimer}
            />
            <div className="container py-16">
                <h1 className="text-center font-bold">Política De Privacidad</h1>
                <div className="border-t-2 border-gray-500 w-14 my-3 mx-auto"></div>

                <div className="content normal">
                    <p className="text-2xl mt-2 mb-0 font-semibold mb-1">1. Introducción</p>
                    <p>
                        Careerera (junto con sus subsidiarias y afiliadas internacionales, en
                        adelante "Careerera", "nosotros", "nuestro" o "la Compañía") está
                        comprometida con la seguridad y la gestión de datos personales, para
                        funcionar de manera efectiva y exitosa para en beneficio de nuestros grupos
                        de interés, clientes y para la comunidad. Al hacerlo, es esencial que la
                        privacidad de las personas esté protegida a través de los medios legales y
                        apropiados para el manejo de los datos personales. Por lo tanto, hemos
                        implementado esta política de privacidad (en lo sucesivo, "política").
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">2. Objetivo</p>
                    <p>
                        Esta política tiene como objetivo proteger los datos personales de los
                        distintos grupos de interés vinculados a nuestra organización. Esta política
                        tiene como objetivo informar a las personas sobre los principios básicos por
                        los cuales la empresa procesa los datos personales de las personas ("Datos
                        personales") que visitan, usan, tratan y/o realizan transacciones a través
                        del sitio web e incluye un usuario invitado y un navegador ( en adelante
                        'usted', 'usuario').
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        3. Propósito y alcance
                    </p>
                    <p>
                        El propósito de esta política es describir cómo Careerera recopila, usa y
                        comparte información sobre usted a través de nuestras interfaces en línea
                        (por ejemplo, sitios web y aplicaciones móviles) de nuestra propiedad y
                        controladas por nosotros, incluido, entre otros, https://www.Careerera. com/
                        (en adelante, el "sitio web"). Esta política también está diseñada para
                        proporcionar información sobre cómo Careerera garantiza la seguridad de los
                        datos, realiza las transferencias de datos y procesa las solicitudes de los
                        interesados.
                    </p>
                    <p>
                        Esta política de control se aplica a todos los sistemas, personas y procesos
                        que constituyen los sistemas de información de la organización, incluidos
                        los miembros de la junta, directores, empleados y otros terceros que tienen
                        acceso a los Datos personales disponibles dentro de Careerera.
                    </p>
                    <p>
                        La empresa también se compromete a garantizar que sus empleados se comporten
                        de acuerdo con esta y otras políticas relacionadas. Cuando terceros procesan
                        datos en nombre de Careerera, la Compañía se esfuerza por obtener garantías
                        de dichos terceros de que sus Datos personales se protegerán de manera
                        constante.
                    </p>
                    <p>
                        Careerera ofrece educación superior seleccionada y especialmente diseñada y
                        programas de certificación relevantes para la industria en línea ("en lo
                        sucesivo, individual o colectivamente, Programa"). Esta Política de
                        privacidad se aplica a todos nuestros servicios a menos que se especifique
                        lo contrario.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        4. Tipos de Datos Personales recopilados
                    </p>
                    <p>
                        Los Datos personales que recopilamos sobre usted dependen del contexto de
                        sus interacciones con nosotros, los productos, servicios y funciones que
                        utiliza, su ubicación y las leyes aplicables.
                    </p>
                    <p>
                        Los datos personales se almacenan en archivos personales o dentro de los
                        registros electrónicos (en servidores en India u otros países) de Careerera.{" "}
                        Los siguientes tipos de Datos Personales pueden ser retenidos por la
                        Compañía, según corresponda, sobre personas relevantes:
                    </p>
                    <p className="mb-btnnospc mt-4 mb-0">A. Datos de Identificación Personal</p>
                    <ul className="unorder_list">
                        <li>Nombre Apellido</li>
                        <li>Título del trabajo y empresa</li>
                        <li>Firma</li>
                        <li>Fotografías</li>
                    </ul>
                    <p className="mb-btnnospc mt-4 mb-0">B. Datos de identificación</p>
                    <ul className="unorder_list">
                        <li>Números de identificación fiscal o de seguridad social</li>
                        <li>Número Aadhar y PAN</li>
                    </ul>
                    <p className="mb-btnnospc mt-4 mb-0">C. Datos financieros</p>
                    <ul className="unorder_list">
                        <li>Información de cuenta bancaria</li>
                        <li>Información salarial</li>
                        <li>Detalles de la cuenta de la pasarela de pago</li>
                        <li>Detalles de la cuenta de la billetera electrónica</li>
                    </ul>
                    <p className="mb-btnnospc mt-4 mb-0">D. Características personales</p>
                    <ul className="unorder_list">
                        <li>Años</li>
                        <li>Género</li>
                        <li>Fecha de nacimiento</li>
                        <li>Estado civil</li>
                        <li>Nacionalidad</li>
                    </ul>
                    <p className="mb-btnnospc mt-4 mb-0">E. Datos de contacto</p>
                    <ul className="unorder_list">
                        <li>direccion postal</li>
                        <li>Dirección de correo electrónico</li>
                        <li>Número de teléfono</li>
                    </ul>
                    <p className="mb-btnnospc mt-4 mb-0">F. Datos de Educación y Reclutamiento</p>
                    <ul className="unorder_list">
                        <li>Preparación académica)</li>
                        <li>objetivos de trabajo</li>
                        <li>Experiencia posterior a la calificación</li>
                    </ul>
                    <p className="mb-btnnospc mt-4 mb-0">
                        G. Datos de Identificación Electrónica
                    </p>
                    <ul className="unorder_list">
                        <li>Credenciales de inicio de sesión (si es un usuario registrado)</li>
                        <li>Datos IP de los visitantes</li>
                        <li>Fecha y hora de la visita al sitio web</li>
                        <li>Páginas visitadas y navegación en el sitio web</li>
                        <li>Navegador en uso</li>
                        <li>Condado de acceso al sitio web</li>
                        <li>Idioma del navegador que se utiliza</li>
                        <li>palabras buscadas</li>
                        <li>Etiquetas de píxeles</li>
                    </ul>
                    <p className="mb-btnnospc mt-4 mb-0">H. Consultas</p>
                    <ul className="unorder_list">
                        <li>
                            Datos personales indicados en el formulario, por ejemplo: nombre,
                            dirección, número de teléfono, país
                        </li>
                        <li>Objeto de consulta</li>
                        <li>Datos personales (Nombre en la tarjeta, dirección de facturación)</li>
                        <li>Detalles de pago (números de tarjeta, tipo de tarjeta)</li>
                        <li>
                            Grabaciones de llamadas con estudiantes y usuarios mostrando interés en
                            nuestro Programa.
                        </li>
                        <li>
                            Información sobre sus interacciones con el servicio de atención al cliente
                            y las interacciones de mantenimiento con nosotros.
                        </li>
                    </ul>
                    <p className="mb-btnnospc mt-4 mb-0">I. Datos generados por el usuario</p>
                    <ul className="unorder_list">
                        <li>Proyectos y asignaciones enviadas</li>
                        <li>Comentarios y calificaciones de los compañeros</li>
                        <li>Datos de rendimiento del programa</li>
                        <li>
                            Respuesta a cuestionarios, cuestionarios independientes, exámenes y
                            encuestas
                        </li>
                        <li>
                            Grabaciones de cámara web (durante evaluaciones relacionadas con cursos en
                            línea)
                        </li>
                        <li>
                            Publicaciones realizadas en foros públicos a través de nuestra plataforma
                        </li>
                        <li>
                            Cualquier otra información necesaria para garantizar la conformidad con
                            las normas de ensayo/evaluación, área de interés
                        </li>
                    </ul>
                    <p className="mb-btnnospc mt-4 mb-0">J. Datos de mercadeo</p>
                    <ul className="unorder_list">
                        <li>
                            Sus preferencias para recibir información de marketing de nuestra parte
                        </li>
                        <li>Sus preferencias de comunicación</li>
                    </ul>
                    <p> </p>
                    <p className="mb-btnnospc mt-4 mb-0">K. Datos de comportamiento</p>
                    <ul className="unorder_list">
                        <li>
                            Datos inferidos o información supuesta relacionada con su comportamiento e
                            intereses en función de su actividad en línea en nuestros sitios
                        </li>
                    </ul>
                    <p>
                        No recopilamos ninguna información de pago procesada por proveedores de
                        pasarela de pago de terceros.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        5. Categorías especiales de datos personales
                    </p>
                    <p>
                        La categoría especial de datos personales incluye detalles sobre su raza o
                        etnia, creencias religiosas o filosóficas, vida sexual, orientación sexual,
                        opiniones políticas, afiliaciones sindicales, información sobre su salud y
                        datos genéticos y biométricos.
                    </p>
                    <p>No recopilamos ni procesamos ningún dato personal especial o sensible.</p>
                    <p>
                        Si necesitáramos específicamente Datos personales "especiales" o "sensibles"
                        en relación con uno o más de los usos que se describen a continuación,
                        solicitaremos su consentimiento explícito para utilizar los datos de acuerdo
                        con esta política y/o de las formas descritas en el punto donde se le pidió
                        que revelara los datos.
                    </p>
                    <p>
                        Otra base legal para nuestro procesamiento de datos de categoría especial
                        puede incluir, según lo permita la ley aplicable, para la investigación
                        científica, para el empleo, la seguridad social o la ley de protección
                        social, por razones de interés público sustancial, o según sea necesario
                        para el establecimiento, ejercicio o defensa. de pretensiones legales. Si
                        voluntariamente comparte con nosotros o publica/carga cualquier dato
                        personal "especial" o "sensible" en este sitio web por cualquier otro
                        motivo, acepta que podemos utilizar dichos datos de acuerdo con la ley
                        aplicable y esta política. Puede ponerse en contacto con nuestro DPO para
                        obtener más información sobre nuestro procesamiento de sus Datos personales.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        6. Fuentes de recopilación de datos
                    </p>
                    <p>
                        Los datos recopilados por la empresa se derivan directamente de los datos
                        proporcionados por el usuario o por el uso de nuestros sitios.
                    </p>
                    <p className="mb-btnnospc mt-4 mb-0">Datos recopilados cuando usted:</p>
                    <ul className="unorder_list">
                        <li>
                            Regístrese para varios seminarios, webinars o cualquier otra iniciativa de
                            divulgación puesta a disposición por nosotros o las actividades fuera de
                            línea de Educational Partner
                        </li>
                        <li>
                            Solicite una cotización de los diversos productos y servicios que
                            ofrecemos
                        </li>
                        <li>
                            Haga comentarios, complete las encuestas de clientes que circulan o
                            interactúe con nuestro servicio de atención al cliente en línea
                        </li>
                        <li>
                            Ver nuestros servicios o visitar las páginas de nuestro sitio web en
                            Internet
                        </li>
                        <li>Navega por nuestro sitio web</li>
                        <li>
                            Cuando aparece para tareas, exámenes o cualquier otra evaluación en
                            relación con un curso en línea
                        </li>
                        <li>Cuando aprovecha becas, reembolsos y referencias</li>
                    </ul>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Datos recopilados de terceros
                    </p>
                    <p>
                        Recibimos Datos personales, como detalles de acceso o inicio de sesión,
                        imagen de perfil o cualquier otro texto/imagen en relación con sus Datos
                        personales que pueden estar disponibles con dichos terceros.
                    </p>
                    <p>
                        También recibimos información sobre sus visitas a esta plataforma y a otros
                        sitios web mediante etiquetas de píxeles.
                    </p>
                    <p>
                        Los terceros de quienes recibimos sus Datos personales incluyen, nuestros
                        proveedores de servicios, otras redes conectadas a nuestro servicio,
                        nuestros socios publicitarios, nuestros afiliados de marketing y publicidad,
                        nuestros socios educativos, proveedores de becas, proveedores de análisis,
                        reclutadores y otras fuentes de terceros. .
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">7. Galletas</p>
                    <p>
                        Las cookies son archivos de texto que se colocan en su computadora para
                        recopilar información estándar de registro de Internet e información sobre
                        el comportamiento de los visitantes. Cuando visita nuestros sitios web,
                        podemos recopilar información sobre usted automáticamente a través de
                        cookies o tecnología similar.
                    </p>
                    <p>
                        Además, podemos permitir que empresas de publicidad de terceros (como
                        Facebook, Google, Twitter, Quora y Bing) coloquen cookies en nuestro sitio
                        web. Estas cookies permiten a dichas empresas realizar un seguimiento de su
                        actividad en varios sitios donde muestran anuncios y registran sus
                        actividades, para que puedan mostrar anuncios que consideren relevantes para
                        usted mientras navega por Internet. Estas cookies almacenan información
                        sobre el contenido que está navegando, junto con un identificador asociado a
                        su dispositivo o dirección IP.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Cómo usamos las cookies?
                    </p>
                    <p>
                        Careerera utiliza cookies de varias maneras para mejorar su experiencia en
                        nuestro sitio web, que incluyen:
                    </p>
                    <ul className="unorder_list">
                        <li>
                            Para reconocer al usuario de nuestro sitio web y mejorar la experiencia
                            del usuario al interactuar con nuestro sitio web
                        </li>
                        <li>
                            Además, utilizamos cookies para ayudarnos a analizar el uso y el
                            rendimiento de nuestro sitio web y servicios.
                        </li>
                        <li>
                            También usamos cookies para mejorar la entrega y el valor de varios
                            servicios y productos que ofrecemos.{" "}
                        </li>
                    </ul>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        ¿Qué tipos de cookies utilizamos?
                    </p>
                    <p>
                        Hay algunos tipos diferentes de cookies, sin embargo, nuestro sitio web
                        utiliza:
                    </p>
                    <ul className="unorder_list">
                        <li>
                            Cookies persistentes. Usamos Cookies persistentes para mejorar su
                            experiencia de uso de los Sitios. Esto incluye registrar su aceptación de
                            nuestra Política de cookies para eliminar el mensaje de cookies que
                            aparece por primera vez cuando utiliza los Sitios.
                        </li>
                        <li>
                            Cookies de sesión. Las cookies de sesión son temporales y se eliminan de
                            su máquina cuando se cierra el navegador web. Usamos cookies de sesión
                            para ayudarnos a rastrear el uso de Internet como se describe
                            anteriormente.
                        </li>
                        <li>
                            Cookies analíticas/de rendimiento. Las cookies analíticas nos permiten
                            reconocer y contar el número de visitantes y ver cuántos visitantes se
                            mueven por nuestro sitio web mientras lo usan. Esto nos ayuda a mejorar la
                            forma en que funciona nuestro sitio web, por ejemplo, al garantizar que
                            los usuarios encuentren lo que buscan.
                        </li>
                        <li>
                            Cookies de funcionalidad. Las cookies de funcionalidad reconocen cuando
                            regresa al sitio web. Esto le permite a la compañía crear mayor contenido
                            para usted y recordar sus gustos y aversiones y otras preferencias.
                        </li>
                        <li>
                            Cookies de orientación. Las cookies de orientación registran la visita a
                            nuestro sitio web, las páginas visitadas y los enlaces en los que se hizo
                            clic. Ayuda a formular información relevante para el área de interés del
                            usuario.
                        </li>
                    </ul>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        ¿Cómo gestionar las cookies?
                    </p>
                    <p>
                        La mayoría de los navegadores le permiten negarse a aceptar cookies y
                        eliminarlas. Los métodos para hacerlo varían de un navegador a otro y de una
                        versión a otra. La desactivación de algunas cookies del sitio web puede
                        tener un impacto negativo y puede provocar que algunas funciones no estén
                        disponibles.
                    </p>
                    <p>
                        Si desea eliminar las Cookies almacenadas anteriormente, puede eliminar
                        manualmente las Cookies en cualquier momento. Sin embargo, esto no evitará
                        que los Sitios coloquen más Cookies en su dispositivo a menos que ajuste la
                        configuración de su navegador de Internet como se describe anteriormente.
                    </p>
                    <p>
                        No obstante, puede obtener información actualizada sobre el bloqueo y
                        eliminación de cookies a través de estos enlaces:
                    </p>
                    <ul className="unorder_list">
                        <li>https://support.google.com/chrome/answer/95647 (cromo)</li>
                        <li>
                            https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
                            (Firefox)
                        </li>
                        <li>https://www.opera.com/help/tutorials/security/cookies/ (Ópera)</li>
                        <li>
                            https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
                            (Internet Explorer)
                        </li>
                        <li>https://support.apple.com/kb/PH21411 (Safari)</li>
                    </ul>
                    <p>
                        Estos mecanismos de exclusión se basan en cookies para recordar sus
                        elecciones. Si elimina sus cookies, utiliza otra computadora o dispositivo,
                        o cambia de navegador, deberá repetir este proceso. Además, la exclusión
                        voluntaria de los anuncios basados ​​en intereses no lo excluirá de todos
                        los anuncios, sino solo de aquellos que están personalizados según sus
                        intereses.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        8. Análisis de datos
                    </p>
                    <p>
                        Utilizamos herramientas de análisis y proveedores de información de búsqueda
                        para medir cómo los visitantes interactúan con el contenido de nuestro sitio
                        web. También utilizamos audiencias personalizadas de Facebook para pedirle a
                        Facebook que le muestre anuncios personalizados en función de su interacción
                        con nuestros sitios web o nuestras aplicaciones de Facebook y para medir
                        cómo interactúa con esos anuncios. Puede encontrar información adicional
                        sobre cómo estos servicios utilizan dichas tecnologías en el sitio web de
                        Google, el sitio web de Adobe y el sitio web de Facebook.
                    </p>
                    <p>
                        Si no desea que los datos relacionados con sus visitas a nuestros sitios web
                        se recopilen a través de Google Analytics, puede optar por no participar
                        instalando el{" "}
                        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">
                            complemento del navegador de exclusión voluntaria de Google Analytics.{" "}
                        </a>
                        Puede optar por no participar en las audiencias personalizadas de Facebook
                        visitando la página de exclusión de Facebook.{" "}
                        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">
                            <font style={{ verticalAlign: "inherit" }} />
                        </a>{" "}
                        <font style={{ verticalAlign: "inherit" }} />
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        9. Datos agregados
                    </p>
                    <p>
                        “Datos agregados” significa registros a los que se les ha quitado los Datos
                        personales y se los ha manipulado o combinado para proporcionar información
                        generalizada y anónima. Su identidad e información personal no están
                        disponibles en Datos agregados. Combinamos sus Datos personales de forma
                        anónima con otra información para generar Datos agregados para uso interno y
                        comercial y para compartir con afiliados, subsidiarias y socios comerciales
                        con fines de planificación y marketing.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        10. Principios de protección de datos
                    </p>
                    <p>
                        Cuando terceros procesen datos en nombre de Careerera, nos esforzamos por
                        obtener garantías de dichos terceros de que sus Datos personales se
                        protegerán de manera constante. Entendemos que será responsable del
                        procesamiento, la gestión y la regulación, el almacenamiento y la retención
                        de todos los Datos personales que se mantengan en forma de registros
                        manuales y en computadoras.
                    </p>
                    <p>Todos los Datos Personales obtenidos y conservados por la Compañía:</p>
                    <ul className="unorder_list">
                        <li>ser procesados ​​de manera leal, legal y transparente</li>
                        <li>recopilarse para fines específicos, explícitos y legítimos</li>
                        <li>
                            ser adecuados, pertinentes y limitados a lo necesario para los fines del
                            procesamiento
                        </li>
                        <li>
                            mantenerse precisa y actualizada. Se harán todos los esfuerzos razonables
                            para garantizar que los datos inexactos se rectifiquen o eliminen sin
                            demora.
                        </li>
                        <li>
                            no conservarse durante más tiempo del necesario para el fin previsto
                        </li>
                        <li>
                            ser procesados ​​de una manera que garantice la seguridad adecuada de los
                            Datos personales, incluida la protección contra el procesamiento no
                            autorizado o ilegal, la pérdida accidental, la destrucción o el daño
                            mediante el uso de medidas técnicas u organizativas apropiadas
                        </li>
                        <li>
                            Cumplir con las leyes y procedimientos pertinentes para la transferencia
                            internacional de datos personales aplicables a nosotros.
                        </li>
                    </ul>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        11. Base legal para procesar sus Datos personales
                    </p>
                    <p>
                        Ciertas jurisdicciones requieren que tengamos una base legal para justificar
                        nuestro procesamiento de sus Datos personales.
                    </p>
                    <p>
                        Cuando corresponda, la base legal en la que se basa Careerera para
                        justificar una actividad de procesamiento en particular puede diferir de la
                        base legal utilizada para justificar una actividad de procesamiento
                        diferente.
                    </p>
                    <p>
                        Careerera se basa en la siguiente base legal para procesar los Datos
                        personales, según lo permitido por la ley aplicable:
                    </p>
                    <ul className="unorder_list">
                        <li>
                            Tratamiento necesario para la negociación, ejecución o ejecución de
                            contratos
                        </li>
                        <li>
                            Procesamiento para cumplir con las obligaciones legales y reglamentarias
                        </li>
                        <li>
                            Procesamiento para promover nuestros intereses legítimos, incluidos
                            nuestros intereses para realizar actividades comerciales legítimas (como
                            mejorar nuestros productos y servicios, comunicarnos con usted, proteger
                            nuestros sistemas, entre otros intereses legítimos)
                        </li>
                        <li>
                            Tratamiento necesario para proteger intereses vitales de un usuario o
                            cualquier otra persona física
                        </li>
                        <li>Tratamiento necesario por interés público</li>
                        <li>Procesamiento basado en su consentimiento</li>
                    </ul>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        12. Consentimiento
                    </p>
                    <p>
                        Podemos obtener su consentimiento para recopilar y utilizar ciertos tipos de
                        Datos personales cuando la ley así lo exija.
                    </p>
                    <p>
                        Una vez que se obtiene el consentimiento de la persona para usar su
                        información para esos fines, Careerera tiene el consentimiento implícito de
                        la persona para recopilar o recibir cualquier información complementaria que
                        sea necesaria para cumplir con los mismos fines. También se obtendrá el
                        consentimiento expreso si, o cuando, se identifique un nuevo uso.
                    </p>
                    <p>
                        El consentimiento también puede estar implícito cuando se notifica a un
                        usuario y se le da una oportunidad razonable de optar por que su información
                        personal no se use para envíos por correo, la comercialización de nuevos
                        servicios o productos, y el cliente, cliente, miembro no opta -fuera.
                    </p>
                    <p>
                        Sujeto a ciertas excepciones (por ejemplo, la información personal es
                        necesaria para brindar el servicio o producto, o el retiro del
                        consentimiento frustraría el cumplimiento de una obligación legal), las
                        personas pueden retener o retirar su consentimiento para que Careerera use
                        su información personal en ciertos formas.
                    </p>
                    <p>
                        Además, al utilizar este sitio web/reconocer esta política de
                        privacidad/proporcionarnos voluntariamente sus Datos personales, acepta la
                        recopilación, el almacenamiento y el procesamiento de sus Datos personales
                        de acuerdo con esta política de privacidad y nuestros Términos de servicio.
                    </p>
                    <p>
                        Si rechaza o retira su consentimiento, o si elige no proporcionarnos los
                        Datos personales requeridos, es posible que no podamos brindarle los
                        servicios que se pueden ofrecer en nuestra Plataforma.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        13. Finalidad de la recogida de Datos Personales
                    </p>
                    <p>Recopilamos sus datos personales para los siguientes propósitos</p>
                    <ul className="unorder_list">
                        <li>
                            Para cumplir o satisfacer el motivo por el que proporcionó la información;
                        </li>
                        <li>
                            Usamos su información para fines de gestión y procesamiento, incluidos,
                            entre otros, el seguimiento de la asistencia, el progreso y la
                            finalización de un Programa. Como parte de nuestra gestión y procesamiento
                            del Programa, utilizaremos ciertos Datos personales para administrar
                            exámenes, proyectos y otras evaluaciones para el Programa. Por ejemplo,
                            como parte de un examen, Careerera puede usar cierta información
                            recopilada de usted para verificar su identidad o monitorear su desempeño
                            durante el examen para confirmar que cumple con las reglas o requisitos de
                            prueba aplicables;
                        </li>
                        <li>
                            Para enviarle actualizaciones sobre los Programas, otros eventos de
                            Careerera, mantenimiento de la plataforma o nuevos servicios que brinda
                            Careerera, entre otros, por sí o por medio de terceros, a través de
                            WhatsApp, correo electrónico, SMS, llamada telefónica o cualquier otro
                            medio;
                        </li>
                        <li>Proporcionar servicios de sala de chat;</li>
                        <li>
                            Para mejorar la calidad de nuestro contenido y ofertas de productos;
                        </li>
                        <li>
                            Cumplimiento de las políticas de seguridad y otras políticas obligatorias
                            y acceso al edificio;
                        </li>
                        <li>
                            Proporcionar información a las autoridades externas pertinentes con fines
                            fiscales, de seguridad social y otros, según lo exija la ley;
                        </li>
                        <li>
                            Realizar encuestas para evaluar su satisfacción, incluidos, entre otros,
                            sus procesos o políticas;
                        </li>
                        <li>
                            Establecer y mantener cuentas y suscripciones con terceros que presten
                            servicios de información e investigación o servicios de comunicación;
                        </li>
                        <li>Tomar decisiones sobre su compromiso, empleo o membresía continuos;</li>
                        <li>
                            Lidiar con disputas legales o reglamentarias o investigaciones que lo
                            involucren a usted, nuestro trabajo u otros socios, empleados,
                            trabajadores y contratistas, incluidos accidentes en el trabajo, reclamos
                            por negligencia potencial y real y asuntos de disciplina profesional;
                        </li>
                        <li>
                            Supervisar el uso de nuestros sistemas de información y comunicación para
                            garantizar el cumplimiento de nuestras políticas de gestión de documentos
                            y TI;
                        </li>
                        <li>
                            Para garantizar la seguridad de la red y la información, incluida la
                            prevención del acceso no autorizado a nuestros sistemas informáticos y de
                            comunicaciones electrónicas y la prevención de la distribución de software
                            malicioso;
                        </li>
                        <li>
                            Gestión y planificación comercial, incluida la contabilidad, la auditoría
                            y los seguros;
                        </li>
                        <li>
                            Planificación o revisión de opciones en relación con la operación o
                            gestión;
                        </li>
                        <li>Llevar los registros exigidos por ley o reglamento;</li>
                        <li>Comunicarnos con usted, por ejemplo, para responder a consultas;</li>
                        <li>
                            Mejorar la seguridad de los servicios y prevenir el fraude, o proteger
                            nuestros derechos o propiedad o los de nuestros clientes, o los suyos;
                        </li>
                        <li>
                            Hacer cumplir los términos y condiciones aplicables y otras políticas
                            aplicables;
                        </li>
                    </ul>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        14. Publicidad y Mercadeo
                    </p>
                    <p>
                        Nos esforzamos por brindarle opciones con respecto a ciertos usos de los
                        Datos personales, particularmente en relación con el marketing y la
                        publicidad. Recibirá nuestras comunicaciones de marketing si nos ha
                        solicitado información o si nos proporcionó sus datos y consintió
                        expresamente en recibir ese marketing.
                    </p>
                    <p>
                        Podemos utilizar su identificación personal, identidad, contacto, datos
                        electrónicos y generados por el usuario para formar una opinión sobre lo que
                        creemos que puede desear o necesitar, o lo que puede ser de su interés. Así
                        es como decidimos qué servicios y ofertas pueden ser relevantes para usted.
                    </p>
                    <p>
                        También celebramos acuerdos con terceros para publicar anuncios en nuestro
                        nombre en Internet, sitios de redes sociales y blogs. Estos terceros pueden
                        recopilar Datos personales sobre sus visitas a nuestra plataforma y sus
                        interacciones con nuestros productos y usar esta información para orientar
                        anuncios de bienes y servicios.
                    </p>
                    <p>
                        Cuando se envían comunicaciones electrónicas de marketing directo, tiene la
                        opción de optar por no participar en cada comunicación enviada, y esta
                        elección será reconocida y respetada por nosotros.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        15. Divulgación de datos personales
                    </p>
                    <p>
                        Careerera es una empresa global y puede compartir la información personal
                        recopilada o proporcionar dicho acceso a otras empresas dentro del grupo
                        Careerera.
                    </p>
                    <p>
                        Los ejemplos de terceros con los que Careerera puede compartir datos
                        personales incluyen:
                    </p>
                    <p>
                        Con organismos gubernamentales, incluidas las autoridades fiscales y de
                        seguridad social, para cumplir con las leyes aplicables (incluidas las leyes
                        laborales y fiscales), para obtener licencias o aprobaciones, y previa
                        solicitud durante una auditoría o evaluación;
                    </p>
                    <ul className="unorder_list">
                        <li>
                            Con proveedores, subcontratistas y proveedores de servicios, para mantener
                            un negocio eficiente y comercialmente viable, incluidos los proveedores de
                            tecnología, telecomunicaciones e Internet;
                        </li>
                        <li>
                            Con asesores profesionales, consultores y agencias de empleo y
                            contratación, para realizar verificaciones de antecedentes y
                            verificaciones de referencias, administrar beneficios y nómina, tratar
                            problemas disciplinarios y de quejas y mantener detalles de contacto de
                            emergencia;
                        </li>
                        <li>
                            Con nuestros asesores legales y auditores externos para asesoría legal y
                            para realizar auditorías empresariales;
                        </li>
                        <li>
                            Con proveedores de servicios para la gestión de la continuidad del negocio
                            y la planificación de contingencias en caso de interrupciones del negocio.
                        </li>
                        <li>
                            Con ciertas empresas para establecer una membresía para participar en
                            billeteras digitales, servicios de pago o programa de recompensas
                        </li>
                    </ul>
                    <p>
                        Exigimos a todos los terceros que respeten la seguridad de sus Datos
                        personales y que los traten de conformidad con la ley. No permitimos que
                        nuestros proveedores de servicios externos utilicen sus Datos personales
                        para sus propios fines y solo les permitimos procesar sus Datos personales
                        para fines específicos y de acuerdo con nuestras instrucciones.
                    </p>
                    <p>
                        Además de los ejemplos citados anteriormente, Careerera también comparte sus
                        Datos personales con:
                    </p>
                    <div className="full-w border">
                        <div className="table-responsive">
                            <table className="table min-widen-400 table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th className="align-top text-black text-base" width={250}>
                                            Destinatarios
                                        </th>
                                        <th className="align-top text-black text-base" width={300}>
                                            Categoría(s) de datos personales que compartimos
                                        </th>
                                        <th className="align-top text-black text-base">
                                            Por qué lo compartimos
                                        </th>
                                        <th className="align-top text-black text-base" width={150}>
                                            Ubicaciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-top font-medium  text-black text-base">
                                            <strong>Socios educativos</strong>
                                            <ul className="unorder_list">
                                                <li>Universidad o empresa que ofrece el curso</li>
                                                <li>Calificadores externos</li>
                                                <li>Mentores</li>
                                            </ul>
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            <ul className="unorder_list">
                                                <li>Datos de Identificación Personal</li>
                                                <li>Datos de Características Personales</li>
                                                <li>Dato de contacto</li>
                                                <li>Datos generados por el usuario</li>
                                            </ul>
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            <ul className="unorder_list">
                                                <li>
                                                    Evaluar y evaluar su progreso y desempeño en el Programa
                                                </li>
                                                <li>informar sobre su progreso en el Programa</li>
                                                <li>
                                                    permitirles emitirle un certificado al finalizar el Programa
                                                </li>
                                            </ul>
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">Global</td>
                                    </tr>
                                    <tr>
                                        <th className="align-top text-black text-base">
                                            empleadores; Patrocinadores y proveedores de becas
                                        </th>
                                        <td className="align-top font-medium  text-black text-base">
                                            <ul className="unorder_list">
                                                <li>Datos de Identificación Personal</li>
                                                <li>Datos de Características Personales</li>
                                                <li>Dato de contacto</li>
                                                <li>Datos generados por el usuario</li>
                                            </ul>
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Si está tomando un Programa patrocinado o pagado por su empleador
                                            o un patrocinador, o si ha aprovechado una beca de un proveedor de
                                            becas externo, podemos compartir sus Datos personales y
                                            calificaciones, evaluaciones o progreso.
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">Global</td>
                                    </tr>
                                    <tr>
                                        <th />
                                        <td />
                                        <td className="align-top font-medium  text-black text-base">
                                            en el Programa con su empleador/patrocinador/proveedor de becas.{" "}
                                            Esta información se puede compartir en cualquier momento durante
                                            el Programa o después.
                                        </td>
                                        <td />
                                    </tr>
                                    <tr>
                                        <th className="align-top text-black text-base">
                                            Proveedores de servicio
                                        </th>
                                        <td className="align-top font-medium  text-black text-base">
                                            <ul className="unorder_list">
                                                <li>Datos de Identificación Personal</li>
                                                <li>Datos de Características Personales</li>
                                                <li>Dato de contacto</li>
                                                <li>Datos generados por el usuario</li>
                                                <li>Datos financieros</li>
                                                <li>Datos de Identificación Electrónica</li>
                                                <li>Datos generados a partir de consultas</li>
                                                <li>Datos de mercadeo</li>
                                            </ul>
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Brindamos acceso o compartimos su información con contratistas de
                                            operaciones y mantenimiento y otros terceros que realizan
                                            servicios en nuestro nombre estrictamente en términos
                                            confidenciales. Nos brindan una variedad de servicios, que
                                            incluyen facturación, ventas, marketing, supervisión de pruebas,
                                            mensajeros, tutoría, consultoría de reclutamiento, contenido y
                                            características del producto, publicidad, análisis, investigación,
                                            servicio al cliente, almacenamiento de datos, seguridad,
                                            prevención de fraude, facilidades de crédito. , procesamiento de
                                            pagos y servicios legales
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">Global</td>
                                    </tr>
                                    <tr>
                                        <th className="align-top text-black text-base">Terceros</th>
                                        <td className="align-top font-medium  text-black text-base">
                                            <ul className="unorder_list">
                                                <li>Datos de Identificación Personal</li>
                                                <li>Datos de Características Personales</li>
                                                <li>Dato de contacto</li>
                                                <li>Datos generados por el usuario</li>
                                                <li>Datos financieros</li>
                                                <li>Electrónico</li>
                                            </ul>
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            <ul className="unorder_list">
                                                <li>
                                                    compartimos ciertos Datos personales y materiales con
                                                    terceros, incluidos, entre otros, proveedores de servicios{" "}
                                                </li>
                                            </ul>
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">Global</td>
                                    </tr>
                                    <tr>
                                        <th />
                                        <td className="align-top font-medium  text-black text-base">
                                            <p>Datos de identificación</p>
                                            <ul className="unorder_list">
                                                <li>Datos generados a partir de consultas</li>
                                                <li>Datos de mercadeo</li>
                                                <li>Datos de educación y contratación</li>
                                                <li>Datos de comportamiento</li>
                                            </ul>
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            <p>
                                                como Facebook o WhatsApp para brindarle los servicios que ha
                                                solicitado o los servicios que Careerera brinda junto con los
                                                Programas
                                            </p>
                                            <ul className="unorder_list">
                                                <li>
                                                    para organizar y proporcionar actividades de networking a
                                                    estudiantes anteriores, actuales o potenciales de Careerera
                                                </li>
                                                <li>
                                                    puede compartir información que puede usarse para contactarlo
                                                    directamente con socios comerciales externos, como compañías
                                                    que pueden estar ofreciendo productos o servicios u otras
                                                    oportunidades que pueden ser de su interés.
                                                </li>
                                            </ul>
                                        </td>
                                        <td />
                                    </tr>
                                    <tr>
                                        <th />
                                        <td />
                                        <td className="align-top font-medium  text-black text-base">
                                            <ul className="unorder_list">
                                                <li>A terceros socios comerciales</li>
                                            </ul>
                                        </td>
                                        <td />
                                    </tr>
                                    <tr>
                                        <td className="align-top font-medium  text-black text-base">
                                            <strong>
                                                Proveedores de servicios de reclutamiento
                                                <strong>
                                                    <ul className="unorder_list">
                                                        <li>agencia de reclutamiento</li>
                                                        <li>empleadores potenciales</li>
                                                    </ul>
                                                </strong>
                                            </strong>
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            <ul className="unorder_list">
                                                <li>Datos de Identificación Personal</li>
                                                <li>Datos de Características Personales</li>
                                                <li>Dato de contacto</li>
                                                <li>Datos generados por el usuario</li>
                                                <li>Datos de educación y contratación</li>
                                            </ul>
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Si opta por cualquiera de nuestros servicios de reclutamiento o si
                                            participa en alguna de nuestras actividades de reclutamiento,
                                            compartiremos su información con reclutadores y posibles
                                            empleadores.
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">Global</td>
                                    </tr>
                                    <tr>
                                        <th className="align-top text-black text-base">
                                            Transferencias de Asociados y Negocios
                                        </th>
                                        <td className="align-top font-medium  text-black text-base">
                                            <ul className="unorder_list">
                                                <li>Datos de Identificación Personal</li>
                                                <li>Datos de Características Personales</li>
                                                <li>Dato de contacto</li>
                                                <li>Datos generados por el usuario</li>
                                            </ul>
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            <p>
                                                Compartimos sus Datos personales con nuestros asociados con
                                                fines comerciales.
                                            </p>
                                            <p>
                                                Careerera puede divulgar y/o transferir sus Datos personales a
                                                un adquirente, cesionario u otra entidad sucesora en relación
                                                con una venta, fusión o reorganización de la totalidad o una
                                                parte sustancial del patrimonio, el negocio o los activos de
                                                Careerera a los que pertenecen sus Datos personales.{" "}
                                            </p>
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">Global</td>
                                    </tr>
                                    <tr>
                                        <th />
                                        <td />
                                        <td className="align-top font-medium  text-black text-base">
                                            Los datos se relacionan
                                        </td>
                                        <td />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        16. Derechos de los interesados
                    </p>
                    <p>
                        Algunas jurisdicciones han otorgado a las personas ciertos derechos en
                        relación con el procesamiento de sus Datos personales. Este es el caso en el
                        que usted o cualquiera de nuestras subsidiarias o afiliadas con las que
                        interactúa se encuentra en la Unión Europea, aunque estos derechos también
                        pueden estar disponibles en otras jurisdicciones. Estos derechos no están
                        disponibles para todos y no se aplican necesariamente en todos los
                        contextos. Dependiendo de la ley aplicable, usted puede tener derecho a:
                    </p>
                    <ul className="unorder_list">
                        <li>Solicitar acceso a sus Datos Personales.</li>
                        <li>
                            Solicitar la corrección de sus Datos personales (en caso de que sus Datos
                            personales sean inexactos, incompletos u obsoletos).
                        </li>
                        <li>Solicitar la eliminación de sus Datos Personales</li>
                        <li>
                            Retirar su consentimiento para el procesamiento (cuando procesamos Datos
                            personales sobre la base de su consentimiento). Tenga en cuenta que
                            retirar su consentimiento solo se aplica a futuras actividades de
                            procesamiento.
                        </li>
                        <li>Oponerse al tratamiento de sus Datos Personales.</li>
                        <li>Solicitar restricciones al tratamiento de sus Datos Personales.</li>
                        <li>
                            Solicitar la transferencia de sus Datos Personales a usted o a un tercero.
                        </li>
                        <li>Optar por no recibir ciertas transferencias a terceros.</li>
                    </ul>
                    <p>
                        Para ejercer un derecho que cree que puede tener en virtud de la ley
                        aplicable, escríbanos a dpo@Careerera.com.
                    </p>
                    <p>
                        Es posible que necesitemos verificar su identidad antes de cumplir con su
                        solicitud.
                    </p>
                    <p>
                        Tenga en cuenta que ciertas condiciones en relación con el procesamiento de
                        sus derechos variarán, ya que muchos países tienen diferentes derechos de
                        privacidad de datos. Nuestra respuesta y el procesamiento posterior de la
                        solicitud para ejercer estos derechos dependerán de la ley aplicable en
                        relación con los derechos ejercidos por usted. Podemos rechazar solicitudes
                        que sean injustificadamente repetitivas, requieran un esfuerzo técnico
                        desproporcionado, pongan en riesgo la privacidad de otros, puedan
                        comprometer una investigación en curso o no sean prácticas. Nuestra política
                        es nunca discriminarlo por ejercer cualquiera de estos derechos.
                    </p>
                    <p>
                        Puede tener derecho a quejarse ante una autoridad de protección de datos
                        sobre nuestro procesamiento de sus Datos personales. Para obtener más
                        información, comuníquese con su autoridad local de protección de datos.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        17. Nuestra política sobre datos de niños
                    </p>
                    <p>
                        La privacidad de los datos de los niños es importante para nosotros.{" "}
                        Nuestros Sitios no están destinados a niños. La edad para constituir un
                        usuario como niño es diferente para las distintas jurisdicciones. La edad
                        (para el consentimiento válido) de los niños varía según las jurisdicciones.{" "}
                        Por ejemplo, según el RGPD, un niño es una persona de 16 años o menos, y en
                        el Reino Unido, un niño es una persona de 13 años; en el caso de Singapur y
                        Qatar, la edad válida para dar su consentimiento es de 18 años.
                    </p>
                    <p>
                        Como política general, nuestra empresa no participa en la recopilación, el
                        procesamiento, el almacenamiento, el uso, la difusión y la transferencia de
                        Datos personales de niños.
                    </p>
                    <p>
                        En caso de que dicha recopilación sea necesaria para el cumplimiento de
                        nuestras obligaciones contractuales, o cuando lo exija la ley en cuestión,
                        se lo notificaremos en un plazo determinado y de manera apropiada,
                        informando los propósitos y motivos de dicha recopilación y solicitaremos su
                        consentimiento explícito. y en su caso, autorización paterna, previa al
                        tratamiento de dichos datos.
                    </p>
                    <p>
                        Tomaremos las medidas apropiadas para eliminar los Datos personales de los
                        niños que se hayan recopilado en nuestro sitio web sin el consentimiento
                        paterno verificado al enterarnos de la existencia de dichos Datos
                        personales, sujeto a las condiciones estipuladas en las leyes de la
                        jurisdicción aplicable.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        18. Seguridad de datos
                    </p>
                    <p>
                        Careerera se asegurará de que se implementen las medidas técnicas y
                        organizativas apropiadas, respaldadas por evaluaciones de riesgo e impacto
                        en la privacidad, para garantizar un alto nivel de seguridad para los Datos
                        personales y un entorno seguro para la información mantenida tanto manual
                        como electrónicamente.
                    </p>
                    <p>
                        Careerera implementa medidas de seguridad apropiadas diseñadas para evitar
                        el procesamiento ilegal o no autorizado de información personal y la pérdida
                        o daño accidental de información personal. Careerera mantiene políticas y
                        procedimientos de administración de seguridad por escrito diseñados para
                        prevenir, detectar, contener y corregir violaciones de las medidas tomadas
                        para proteger la confidencialidad, integridad, disponibilidad o seguridad de
                        su información personal. Estas políticas y procedimientos asignan
                        responsabilidades y responsabilidades específicas de seguridad de datos a
                        personas específicas, incluyen un programa de gestión de riesgos que incluye
                        una evaluación periódica de riesgos y proporcionan un marco adecuado de
                        controles que salvaguardan su información personal.
                    </p>
                    <p>
                        Además, como parte de sus medidas de seguridad organizacional, los empleados
                        de Careerera deben:
                    </p>
                    <ul className="unorder_list">
                        <li>
                            garantizar que todos los archivos o la información escrita de carácter
                            confidencial se almacenen de manera segura y solo puedan acceder a ellos
                            las personas que tengan la necesidad y el derecho de acceder a ellos
                        </li>
                        <li>
                            asegurarse de que todos los archivos o información escrita de carácter
                            confidencial no se dejen donde puedan ser leídos por personas no
                            autorizadas
                        </li>
                        <li>
                            verificar regularmente la precisión de los datos que se ingresan en las
                            computadoras
                        </li>
                        <li>
                            use siempre las contraseñas proporcionadas para acceder al sistema
                            informático con cautela y dicho acceso no debe circular, a menos que sea
                            absolutamente necesario
                        </li>
                        <li>
                            use la pantalla en blanco de la computadora para asegurarse de que los
                            datos personales no queden en la pantalla cuando no estén en uso.
                        </li>
                    </ul>
                    <p>
                        Los datos personales no deben almacenarse ni transportarse en computadoras
                        portátiles, memorias USB o dispositivos similares, a menos que [insertar
                        detalles] lo autorice. Cuando los datos personales se registren en cualquier
                        dispositivo de este tipo, deben estar protegidos por:
                    </p>
                    <ul className="unorder_list">
                        <li>
                            garantizar que los datos se registren en dichos dispositivos solo cuando
                            sea absolutamente necesario
                        </li>
                        <li>
                            usando un sistema encriptado: se debe crear una carpeta para almacenar los
                            archivos que necesitan protección adicional y todos los archivos creados o
                            movidos a esta carpeta se deben encriptar automáticamente
                        </li>
                        <li>
                            asegurarse de que las computadoras portátiles o las unidades USB no se
                            dejen tiradas donde puedan ser robadas.
                        </li>
                    </ul>
                    <p>
                        El incumplimiento de las reglas de la Compañía sobre seguridad de datos
                        puede tratarse a través del procedimiento disciplinario de la Compañía. Las
                        sanciones apropiadas incluyen el despido con o sin previo aviso dependiendo
                        de la gravedad del incumplimiento.
                    </p>
                    <p>
                        También tomamos medidas para garantizar que nuestros proveedores de
                        servicios, contratistas y otros terceros mantengan un nivel similar de
                        medidas de protección de datos al procesar sus Datos personales. Si bien nos
                        esforzamos por proteger sus Datos personales, tenga en cuenta que no se
                        puede garantizar el 100 % de la seguridad de los Datos personales y que
                        Careerera no será responsable de ningún uso indebido o pérdida de Datos
                        personales llevado a cabo por un proveedor de servicios en la nube externo.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        19. Transferencias internacionales de datos
                    </p>
                    <p>
                        Nuestro sitio web se opera y administra principalmente en servidores
                        ubicados y operados dentro de la India. Sin embargo, debido a la naturaleza
                        global de Careerera, sus Datos personales también pueden almacenarse en
                        servidores de datos de terceros ubicados en otros países donde Careerera
                        brinda sus productos y servicios.
                    </p>
                    <p>
                        Careerera contrata a subcontratistas, proveedores de servicios y otros
                        terceros para facilitar nuestros productos, ofertas de servicios y para
                        ofrecerle servicios de soporte, y sus Datos personales pueden transferirse a
                        servidores de dichos subcontratistas, proveedores de servicios y otros
                        terceros. Dependiendo de la ubicación de nuestros proveedores de servicios,
                        su información, incluidos los Datos personales, puede transferirse y
                        mantenerse en computadoras ubicadas fuera de su estado, provincia, país u
                        otra jurisdicción gubernamental donde las leyes de protección de datos
                        pueden diferir de las de su jurisdicción.
                    </p>
                    <p>
                        Además, sus Datos personales pueden transferirse, compartirse, divulgarse y
                        transferirse entre varias empresas del grupo Careerera cuando dichas
                        transferencias sean necesarias por motivos comerciales legítimos.
                    </p>
                    <p>
                        Cuando así lo exija la legislación aplicable, solicitaremos su
                        consentimiento expreso para dichas transferencias. En todos los demás casos,
                        al aceptar esta política, también otorga su consentimiento a Careerera para
                        transferir sus Datos personales a empresas afiliadas a Careerera,
                        proveedores de servicios o cualquier entidad de terceros en lugares de todo
                        el mundo. Tomamos medidas para garantizar que se proporcione un grado de
                        protección de datos similar al de esta política a los Datos personales
                        transferidos.
                    </p>
                    <p>
                        Cuando Careerera transfiera su información personal a nivel internacional,
                        cumpliremos con los requisitos legales aplicables y, cuando sea necesario,
                        celebraremos un acuerdo de transferencia de datos con el destinatario de la
                        información personal, que en el caso de los Datos personales europeos puede
                        incluir las Cláusulas contractuales estándar. En otros casos, y cuando
                        corresponda, celebraremos Acuerdos de procesamiento de datos por separado
                        con terceros/proveedores de servicios/contratistas y otros destinatarios de
                        Datos personales. Además, la Compañía toma medidas para garantizar que las
                        transferencias de Datos personales a cualquier autoridad pública no puedan
                        ser masivas, desproporcionadas e indiscriminadas de una manera que iría más
                        allá de lo necesario en una sociedad democrática. En caso de conflicto entre
                        estos y los requisitos de las autoridades públicas,
                    </p>
                    <p>
                        Nos comprometemos a tomar todas las medidas razonablemente necesarias para
                        garantizar que sus datos se traten de forma segura y de acuerdo con nuestros
                        estándares de seguridad y privacidad de datos.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        20. Gestión de registros
                    </p>
                    <p>
                        La gestión de registros se refiere a un conjunto de actividades requeridas
                        para controlar sistemáticamente la creación, distribución, uso,
                        mantenimiento y disposición de la información registrada que se mantiene
                        como evidencia de las actividades y transacciones comerciales. Es imposible
                        cumplir con la ley de información sin políticas y prácticas sólidas de
                        gestión de registros. Las buenas prácticas de gestión de registros
                        garantizan no solo la calidad de los registros, sino que los Datos
                        personales solo se conservan durante el tiempo que sea necesario para su
                        propósito original y ayudan a respaldar la minimización de datos.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        21. Organización y Responsabilidades
                    </p>
                    <p>
                        Careerera mantendrá registros del procesamiento de datos según lo exijan las
                        leyes.
                    </p>
                    <p>
                        El 'Oficial de Protección de Datos' (DPO) tiene la responsabilidad
                        específica de supervisar la protección de datos y garantizar que cumplimos
                        con los principios de protección de datos y la legislación pertinente. El
                        RPD se asegurará de que el Registro de Tratamiento de Datos se mantenga
                        actualizado y demuestre cómo nuestras actividades cumplen los principios de
                        protección de datos. Los miembros individuales del personal tienen el deber
                        de contribuir para garantizar que las medidas descritas en el Registro se
                        reflejen con precisión en nuestra práctica.
                    </p>
                    <p>
                        Nuestro cumplimiento de las políticas y los requisitos reglamentarios
                        pertinentes con respecto a la protección de datos como parte de nuestra
                        estrategia de gestión de datos será supervisado internamente periódicamente
                        por un grupo de gobierno designado. Todos los empleados, voluntarios,
                        consultores, socios u otras partes que manejarán Datos personales en nombre
                        de Careerera serán debidamente capacitados y supervisados ​​cuando sea
                        necesario.
                    </p>
                    <p>
                        La recopilación, el almacenamiento, el uso y el intercambio de Datos
                        personales serán revisados ​​regularmente por el Oficial de protección de
                        datos, el Grupo de gobierno y cualquier área comercial relevante.{" "}
                        Cumpliremos con los códigos de conducta relevantes cuando hayan sido
                        identificados y discutidos según corresponda.
                    </p>
                    <p>
                        Cuando sea probable que exista un alto riesgo para los derechos y libertades
                        de las personas debido a una actividad de procesamiento, primero
                        realizaremos una Evaluación de impacto de protección de datos (DPIA) y
                        consultaremos con la autoridad de control pertinente antes del
                        procesamiento, si es necesario.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        22. Conflictos de leyes
                    </p>
                    <p>
                        Esta Política tiene por objeto cumplir con las leyes y reglamentos del lugar
                        de establecimiento y de los países en los que opera la empresa. En caso de
                        conflicto entre esta Política y las leyes y reglamentos aplicables,
                        prevalecerán estos últimos.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        23. Conservación de datos personales
                    </p>
                    <p>
                        Retenemos sus Datos personales, no más de lo necesario para los fines para
                        los que fueron recopilados. El período de tiempo para conservar los Datos
                        personales depende de los fines para los que los recopilamos y usamos y/o
                        según sea necesario para cumplir con las leyes aplicables, para establecer,
                        ejercer o defender nuestros derechos legales.
                    </p>
                    <p>
                        Los usuarios pueden ejercer los derechos aquí enumerados. Asimismo, en caso
                        de ser necesario ampliar el plazo de conservación de dichos datos,
                        obtendremos su consentimiento para ello. Además, también podemos disponer de
                        los datos antes de que finalice el período de retención, si se agota el
                        propósito para el que fueron recopilados.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        24. Procedimientos
                    </p>
                    <p>
                        La Compañía ha tomado las siguientes medidas para proteger los Datos
                        personales de las partes interesadas relevantes, que posee o a los que tiene
                        acceso:
                    </p>
                    <p>Nombra o emplea empleados con responsabilidades específicas para:</p>
                    <ul className="unorder_list">
                        <li>el tratamiento y control de datos</li>
                        <li>
                            la revisión y auditoría integral de sus sistemas y procedimientos de
                            protección de datos
                        </li>
                        <li>
                            revisar la efectividad e integridad de todos los datos que deben ser
                            protegidos.
                        </li>
                        Hay líneas claras de responsabilidad y rendición de cuentas para estos
                        diferentes roles.
                        <li>
                            proporciona a sus empleados información y formación para concienciarlos
                            sobre la importancia de proteger los Datos Personales, enseñarles cómo
                            hacerlo y entender cómo tratar la información de forma confidencial
                        </li>
                        <li>
                            puede dar cuenta de todos los datos personales que posee, de dónde
                            provienen, con quién se comparte y también con quién se podría compartir
                        </li>
                        <li>
                            lleva a cabo evaluaciones de riesgo como parte de sus actividades de
                            revisión para identificar cualquier vulnerabilidad en el manejo y
                            procesamiento de sus Datos personales, y para tomar medidas para reducir
                            los riesgos de mal manejo y posibles violaciones de la seguridad de los
                            datos. El procedimiento incluye una evaluación del impacto tanto del uso
                            como del posible uso indebido de los Datos personales en y por parte de la
                            Empresa.
                        </li>
                        <li>
                            reconoce la importancia de buscar el consentimiento de las personas para
                            obtener, registrar, usar, compartir, almacenar y conservar sus Datos
                            personales, y revisa regularmente sus procedimientos para hacerlo,
                            incluidas las pistas de auditoría que se necesitan y se siguen para todas
                            las decisiones de consentimiento. La Empresa entiende que el
                            consentimiento debe darse de manera libre, específica, informada e
                            inequívoca. La Compañía buscará el consentimiento de forma específica e
                            individual cuando corresponda. Se dará información completa sobre las
                            actividades sobre las que se solicita el consentimiento. Las personas
                            pertinentes tienen el derecho absoluto y sin obstáculos de retirar ese
                            consentimiento en cualquier momento.
                        </li>
                        <li>
                            cuenta con los mecanismos apropiados para detectar, informar e investigar
                            violaciones de datos personales presuntas o reales, incluidas las
                            violaciones de seguridad. Es consciente de su deber de comunicar a la
                            autoridad de control competente los incumplimientos significativos que
                            causen un daño sensible a las personas afectadas, y conoce las posibles
                            consecuencias
                        </li>
                        <li>
                            es consciente de las implicaciones de la transferencia internacional de
                            Datos Personales a nivel internacional.
                        </li>
                    </ul>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        25. Notificación de incumplimiento
                    </p>
                    <p>
                        Cuando sea probable que una violación de datos resulte en un riesgo para los
                        derechos y libertades de las personas, se informará a la autoridad de
                        control correspondiente dentro de las 72 horas posteriores a que la Compañía
                        tenga conocimiento de ello y podrá ser informado en más de una cuota. Se
                        informará directamente a las personas en caso de que la infracción pueda
                        resultar en un alto riesgo para los derechos y libertades de esa persona. Si
                        el incumplimiento es suficiente para justificar la notificación al público,
                        la Compañía lo hará sin demora indebida.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        26. Enlaces externos en nuestro sitio web
                    </p>
                    <p>
                        Para su comodidad, podemos proporcionar enlaces a sitios operados por
                        organizaciones distintas de Careerera ("Sitios de terceros") que creemos que
                        pueden ser de su interés. No divulgamos sus Datos personales a estos Sitios
                        de terceros a menos que tengamos una base legal para hacerlo. No respaldamos
                        ni somos responsables de las prácticas de privacidad de estos sitios de
                        terceros. Si elige hacer clic en un enlace a uno de estos sitios de
                        terceros, debe revisar la política de privacidad publicada en los otros
                        sitios web para comprender cómo ese sitio web de terceros recopila y utiliza
                        sus datos personales.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        27. Información para residentes de California
                    </p>
                    <p>
                        En particular, según su relación con Careerera, es posible que hayamos
                        recopilado las siguientes categorías de Datos personales en los últimos doce
                        (12) meses:
                    </p>
                    <div className="full-w border mb-3">
                        <div className="table-responsive">
                            <table className="table min-widen-200 table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th className="align-top text-black text-base">Identificadores.</th>
                                        <th className="align-top text-black text-base">
                                            Un nombre real, alias, dirección postal, identificador personal
                                            único, identificador en línea, dirección de Protocolo de Internet,
                                            dirección de correo electrónico, nombre de cuenta, número de
                                            Seguro Social, número de licencia de conducir, número de pasaporte
                                            u otros identificadores similares.
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-top font-medium  text-black text-base">
                                            Categorías de información personal enumeradas en el estatuto de
                                            registros de clientes de California (Cal. Civ. Code § 1798.80(e)).
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Un nombre, firma, número de Seguro Social, características físicas
                                            o descripción, dirección, número de teléfono, número de pasaporte,
                                            número de licencia de conducir o tarjeta de identificación
                                            estatal, número de póliza de seguro, educación, empleo, historial
                                            laboral, número de cuenta bancaria, número de tarjeta de crédito,
                                            tarjeta de débito número de tarjeta, o cualquier otra información
                                            financiera, información médica o información de seguro médico.{" "}
                                            Parte de la información personal incluida en esta categoría puede
                                            superponerse con otras categorías.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-top font-medium  text-black text-base">
                                            Características de clasificación protegidas bajo la ley federal o
                                            de California.
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Edad, raza, color, ascendencia, origen nacional, ciudadanía,
                                            religión o credo, estado civil, condición médica, discapacidad
                                            física o mental, sexo (incluyendo género, identidad de género,
                                            expresión de género, embarazo o parto y condiciones médicas
                                            relacionadas), orientación sexual , condición de veterano o
                                            militar, información genética (incluida la información genética
                                            familiar).
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-top font-medium  text-black text-base">
                                            Información comercial.
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Registros de propiedad personal, productos o servicios comprados,
                                            obtenidos o considerados, u otros antecedentes o tendencias de
                                            compra o consumo.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-top font-medium  text-black text-base">
                                            Información biométrica.
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Características genéticas, fisiológicas, de comportamiento y
                                            biológicas, o patrones de actividad utilizados para extraer una
                                            plantilla u otro identificador o información de identificación,
                                            como huellas dactilares, huellas faciales y huellas de voz,
                                            escaneos de iris o retina, pulsaciones de teclas, modo de andar u
                                            otros patrones físicos, y datos de sueño, salud o ejercicio.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-top font-medium  text-black text-base">
                                            Internet u otra actividad de red similar.
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Historial de navegación, historial de búsqueda, información sobre
                                            la interacción de un consumidor con un sitio web, una aplicación o
                                            un anuncio.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-top font-medium  text-black text-base">
                                            Datos de geolocalización.
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Ubicación física o movimientos.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-top font-medium  text-black text-base">
                                            Datos sensoriales.
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Información de audio, electrónica, visual, térmica, olfativa o
                                            similar
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-top font-medium  text-black text-base">
                                            Información profesional o laboral.
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Historial de trabajo actual o pasado o evaluaciones de desempeño.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-top font-medium  text-black text-base">
                                            Información educativa no pública (según la Ley de Privacidad y
                                            Derechos Educativos de la Familia (20 USC Sección 1232g, 34 CFR
                                            Parte 99)).
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Registros educativos directamente relacionados con un estudiante
                                            mantenidos por una institución educativa o una parte que actúe en
                                            su nombre, como calificaciones, expedientes académicos, listas de
                                            clases, horarios de estudiantes, códigos de identificación de
                                            estudiantes, información financiera de estudiantes o registros
                                            disciplinarios de estudiantes.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-top font-medium  text-black text-base">
                                            Inferencias extraídas de otra información personal.
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Perfil que refleja las preferencias, características, tendencias
                                            psicológicas, predisposiciones, comportamiento, actitudes,
                                            inteligencia, habilidades y aptitudes de una persona.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-top font-medium  text-black text-base">
                                            Información personal sensible
                                        </td>
                                        <td className="align-top font-medium  text-black text-base">
                                            Seguro Social del Consumidor, licencia de conducir, tarjeta de
                                            identificación, número de pasaporte, inicio de sesión de la cuenta
                                            del consumidor, cuenta financiera, tarjeta de débito o número de
                                            tarjeta de crédito en combinación con cualquier código de acceso o
                                            seguridad requerido, contraseña o credenciales que permitan el
                                            acceso a una cuenta, datos genéticos, contenidos del correo,
                                            correo electrónico o mensajes de texto del consumidor, origen
                                            racial o étnico de los consumidores, creencias religiosas o
                                            filosóficas, o afiliación sindical y sus datos genéticos
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p>
                        <span>
                            <span>
                                <span>
                                    <span>
                                        <span>
                                            Para obtener más información sobre los tipos de datos personales
                                            que recopilamos, incluidas las fuentes de las que recibimos
                                            información, consulte la sección&nbsp;{" "}
                                        </span>
                                    </span>
                                </span>
                                <strong>
                                    <span>
                                        <span>
                                            <span style={{ color: "rgb(54, 54, 54)" }}>
                                                Tipos de datos personales recopilados
                                            </span>
                                        </span>
                                    </span>
                                </strong>
                                <span>
                                    <span>
                                        <span>
                                            . Recopilamos y usamos estas categorías de información personal
                                            para los fines comerciales descritos en la sección&nbsp;{" "}
                                        </span>
                                    </span>
                                </span>
                                <strong>
                                    <span>
                                        <span>
                                            <span style={{ color: "rgb(54, 54, 54)" }}>
                                                Propósito de la recopilación de datos,&nbsp;
                                            </span>
                                        </span>
                                    </span>
                                </strong>
                                <span>
                                    <span>
                                        <span>
                                            {" "}
                                            incluso para proporcionar y administrar nuestras plataformas.
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p>
                        <span>
                            <span>
                                <span>
                                    <span>
                                        <span>
                                            Careerera no se dedica a la venta de datos personales (como se
                                            define en CCPA). En caso de que se utilicen actividades de
                                            tecnología publicitaria, como las divulgadas en la&nbsp; sección{" "}
                                        </span>
                                    </span>
                                </span>
                                <strong>
                                    <span>
                                        <span>
                                            <span style={{ color: "rgb(54, 54, 54)" }}>
                                                Publicidad y marketing&nbsp;
                                            </span>
                                        </span>
                                    </span>
                                </strong>
                                <span>
                                    <span>
                                        <span>y&nbsp;</span>
                                    </span>
                                </span>
                                <strong>
                                    <span>
                                        <span>
                                            <span style={{ color: "rgb(54, 54, 54)" }}>
                                                análisis de datos
                                            </span>
                                        </span>
                                    </span>
                                </strong>
                                <span>
                                    <span>
                                        <span>
                                            {" "}
                                            , cumpliremos con la ley aplicable en cuanto a dicha actividad. Si
                                            es un consumidor de California y desea excluirse de la venta de
                                            sus datos personales, consulte la página "No vender mi información
                                            personal" en la página de inicio de nuestro sitio para ejercer su
                                            derecho y obtener más información sobre cómo cancelar la
                                            suscripción. venta de Información Personal.
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p>
                        <span>
                            <span>
                                <span>
                                    <span>
                                        <span>
                                            También puede enviarnos una solicitud a dpo@Careerera.com.
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p>
                        <span>
                            <span>
                                <span>
                                    <span>
                                        <span>
                                            Usamos y nos asociamos con diferentes tipos de entidades para
                                            ayudar con nuestras operaciones diarias y administrar nuestras
                                            plataformas. Revise la sección&nbsp;{" "}
                                        </span>
                                    </span>
                                </span>
                                <strong>
                                    <span>
                                        <span>
                                            <span style={{ color: "rgb(54, 54, 54)" }}>
                                                Divulgación de sus datos personales&nbsp;
                                            </span>
                                        </span>
                                    </span>
                                </strong>
                                <span>
                                    <span>
                                        <span>
                                            {" "}
                                            para obtener más detalles sobre las partes con las que hemos
                                            compartido sus datos personales.
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p>
                        <span>
                            <span>
                                <span>
                                    <span>
                                        <span>
                                            No lo discriminaremos por ejercer cualquiera de sus derechos bajo
                                            la CCPA. Podemos elegir en el futuro ofrecerle ciertos incentivos
                                            financieros permitidos por la CCPA que pueden resultar en
                                            diferentes precios, tarifas o niveles de calidad. Cualquier
                                            incentivo financiero permitido por la CCPA que ofrezcamos se
                                            relacionará razonablemente con el valor de sus Datos personales y
                                            contendrá términos escritos que describan los aspectos materiales
                                            del Programa.
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        28. Uso de este sitio web y nuestros Términos de servicio
                    </p>
                    <p>
                        Este sitio web es propiedad de la Carrera. Nuestros Términos de uso y esta
                        Política de privacidad rigen colectivamente el uso de la Plataforma y los
                        Programas ofrecidos por Careerera. Esta Política de privacidad formará parte
                        de los Términos a modo de referencia. Al usar este sitio web y la
                        información que aquí se ofrece, usted indica que acepta estos Términos de
                        uso.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        29. Actualizaciones a esta política
                    </p>
                    <p>
                        Es posible que actualicemos nuestra Política de privacidad de vez en cuando.{" "}
                        Tomaremos las medidas razonables para informar a todas las entidades de
                        Careerera, Clientes, Socios comerciales y otros sujetos de datos afectados
                        por las revisiones mediante la publicación de la nueva Política de
                        privacidad en esta página y/o por correo electrónico.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        30. Controlador de datos/ Detalles de la empresa
                    </p>
                    <p>
                        El "Controlador de datos" (es decir, Careerera) se refiere a la entidad que
                        tomará las decisiones sobre cómo se utilizan sus datos y que es responsable
                        de decidir cómo conserva su información personal.
                    </p>
                    <p>
                        Dado que Careerera se compone de diferentes entidades legales, la entidad
                        que será el controlador de sus datos depende de la situación en la que se
                        recopilen sus Datos personales.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        31. Delegado de Protección de Datos
                    </p>
                    <p>
                        La empresa, de conformidad con las leyes aplicables, y todas las normas
                        aplicables dictadas en virtud de las mismas, ha designado un Delegado de
                        Protección de Datos; a quien se puede contactar en los detalles a
                        continuación:
                    </p>
                    <p>Nombre: Sr.</p>
                    <p>Dirección de correo electrónico: dpo@Careerera.com</p>
                </div>


            </div>
        </div>
    )
}
export default Privacy
