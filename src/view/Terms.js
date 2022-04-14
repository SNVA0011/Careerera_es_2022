import React, { useEffect } from 'react'
import Hero from '../Atoms/Hero'
import disclaimer from '../Images/Datascience4.png'
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";



const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='terms-of-use blog-detials-single'>
            <Helmet>
                <title>Condiciones De Uso</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="https://www.careerera.com/es/terms-of-use" />
            </Helmet>

            <Hero
                title="Condiciones "
                detail="De Uso" 
                batch={<> <Link to="/" className="no-underline badge bg-info">Hogar</Link>
        <span className="mx-2"> / </span>Condiciones De Uso </>} 
                img={disclaimer}
            />
            <div className="container py-16">
                <h1 className="text-center font-bold">Condiciones De Uso</h1>
                <div className="border-t-2 border-gray-500 w-14 my-3 mx-auto"></div>

                <div className="content normal">
                    <p className="text-2xl mt-2 mb-0 font-semibold mb-1">Introducción</p>
                    <p>
                        Este es un acuerdo legal y vinculante entre usted, el usuario (referido como
                        "usuario" o "usted") de los Programas, como se define a continuación, y
                        Careerera (junto con sus subsidiarias y afiliadas internacionales, en
                        adelante "Careerera", " nosotros", "nosotros" o "nuestro" o "la Compañía")
                        indicando los términos que rigen su uso de la Plataforma, como se define a
                        continuación. El sitio web www.Careerera.com y las aplicaciones móviles
                        (denominadas colectivamente como la "Plataforma") y la información, los
                        servicios y otros materiales contenidos en ellos son proporcionados y
                        operados por Careerera. Careerera ofrece educación superior en línea
                        seleccionada y especialmente diseñada y programas de certificación
                        relevantes para la industria y servicios de asistencia profesional
                        ("Programas").
                    </p>
                    <p>
                        Revise nuestros Términos de uso, Política de privacidad y otras políticas
                        disponibles en la Plataforma (denominados colectivamente como los
                        "Términos") que rigen el uso de la Plataforma y los Programas. Al aceptar
                        estos Términos de cualquier manera o al acceder al sitio web, usted da su
                        consentimiento, acepta y se compromete a cumplir, estar obligado y adherirse
                        a los Términos y, si no está de acuerdo con estos Términos, no tiene derecho
                        a aprovechar/utilizar el Los programas y cualquier uso posterior no estarán
                        autorizados.
                    </p>
                    <p>
                        Cada Programa puede tener un conjunto separado de términos relacionados con
                        reembolsos, aplazamientos, pagos, etc. que rijan dichos Programas, y
                        nuestros clientes corporativos pueden haber firmado acuerdos separados por
                        escrito con nosotros, que, en caso de conflicto, reemplazarán estos Términos
                        para el alcance de las disposiciones en conflicto.
                    </p>
                    <p>
                        Estos Términos se aplicarán a las aplicaciones móviles alojadas de
                        Careerera, grupos de WhatsApp, grupos de Facebook, páginas de Instagram,
                        páginas de Facebook, comunicaciones por correo electrónico/SMS/teléfono y
                        otros foros de redes sociales alojados por Careerera, que se considerarán
                        parte de la 'Plataforma' por referencia. Usted reconoce que ciertas partes
                        de la Plataforma, como se mencionó anteriormente, son proporcionadas por
                        proveedores de servicios externos y acepta cumplir con sus términos y
                        condiciones. Careerera no será responsable de ninguna interrupción de los
                        servicios causada por dichos proveedores de servicios externos.
                    </p>
                    <p>
                        Aunque puede "marcar" una parte particular de la Plataforma y, por lo tanto,
                        omitir estos Términos, su uso de la Plataforma aún lo vincula a estos
                        Términos.
                    </p>
                    <p>
                        Podemos cambiar estos Términos de vez en cuando sin previo aviso. Debe
                        revisar esta página periódicamente. Su uso continuado de la Plataforma y los
                        Programas después de que se hayan realizado los cambios se interpretará como
                        una indicación de que ha leído y aceptado dichos cambios. No debe usar la
                        Plataforma o los Programas si no está satisfecho con los cambios en estos
                        Términos.
                    </p>
                    <p>
                        Careerera no garantiza que la Plataforma opere (o tenga permiso legal para
                        operar) en todas las áreas geográficas, o que la Plataforma, o la
                        información, los servicios o los productos ofrecidos a través de la
                        Plataforma sean apropiados o estén disponibles para su uso en otras
                        ubicaciones. Está expresamente prohibido acceder a la Plataforma desde
                        territorios donde la Plataforma, o cualquier contenido o funcionalidad de la
                        Plataforma o sus partes es ilegal. Si elige acceder a la Plataforma, acepta
                        y reconoce que lo hace por su propia iniciativa y bajo su propio riesgo y
                        que es el único responsable del cumplimiento de todas las leyes aplicables.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Política de conducta del usuario
                    </p>
                    <p>
                        Ya sea que se haya inscrito en un Programa o simplemente esté navegando por
                        la Plataforma, una vez que haya accedido a la Plataforma o los Programas, se
                        le considerará un "usuario" a los efectos de estos Términos. Usted es
                        responsable de todas sus actividades en relación con el uso de la Plataforma
                        y los Programas. Por la presente, acepta cumplir plenamente con todas las
                        leyes, tratados y reglamentos locales, provinciales, estatales, nacionales y
                        extranjeros aplicables en relación con dicho uso. No deberá recurrir a
                        ninguna práctica poco ética mientras utiliza la Plataforma.
                    </p>
                    <p>
                        Sin limitación, no publicará ni transmitirá, ni hará que se publique o
                        transmita, ninguna comunicación o solicitud u otro mensaje de "phishing",
                        "pharming" o "whaling" diseñado o destinado a obtener contraseña, cuenta,
                        información personal, información confidencial o información privada de
                        cualquier usuario de la Plataforma o cualquier otro tercero. Sin embargo, si
                        ocurre tal evento, Careerera no será responsable de ninguna pérdida de datos
                        o si el dispositivo del usuario, el sistema informático o cualquier otra
                        propiedad se ve comprometida de alguna manera.
                    </p>
                    <p>
                        Usted reconoce y acepta que Careerera tiene derecho a informar cualquier
                        actividad sospechosa o ilegal a las autoridades legales o policiales
                        correspondientes sin previo aviso.
                    </p>
                    <p>Durante su uso de la Plataforma y los Programas, usted:</p>
                    <ul className="unorder_list">
                        <li>
                            no acosar a otros usuarios, estudiantes, asistentes, agentes de apoyo o
                            visitantes;
                        </li>
                        <li>
                            no crear una atmósfera de desarmonía, hostilidad dentro de los grupos
                            estudiantiles;
                        </li>
                        <li>no hacer trampa en ninguna tarea o examen del Programa;</li>
                        <li>no publicar en línea ningún material de prueba seguro;</li>
                        <li>no compartir soluciones a tareas o exámenes; y</li>
                        <li>
                            notifique a los instructores de inmediato si se da cuenta de que cualquier
                            otro usuario está haciendo trampa o incumpliendo estos Términos y cumple
                            con los requisitos del código de conducta aplicable específico, si
                            corresponde, relacionado directamente con un Programa en el que dicho
                            usuario está inscrito.
                        </li>
                    </ul>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Cuentas de Usuario, Registro de Usuario y Prestación de Servicios
                    </p>
                    <p>
                        Para participar en la mayoría de las actividades de la Plataforma y
                        solicitar un Programa, deberá registrarse para obtener una cuenta personal
                        ("Cuenta de usuario") mediante un proceso de verificación de dos pasos para
                        verificar sus credenciales de inicio de sesión, como su número de teléfono,
                        por forma de una contraseña de un solo uso que se enviará a su número de
                        teléfono simultáneamente y/o proporcionando una dirección de correo
                        electrónico y una contraseña única.
                    </p>
                    <p>
                        Tras el pago de las tarifas del Programa, en parte o en su totalidad, según
                        el Programa, Careerera entregará los términos de uso del Programa y le
                        otorgará acceso al Programa. La factura se le puede proporcionar junto con
                        la confirmación por correo electrónico o dentro de los dos (2) meses
                        posteriores. Esta será una prueba de entrega contra el pago exitoso de las
                        tasas.
                    </p>
                    <p>
                        Debido a determinadas circunstancias excepcionales, si Careerera le ha
                        otorgado acceso a un Programa pendiente de pago, y Careerera no recibe los
                        pagos dentro de los plazos estipulados, Careerera podrá, a su entera
                        discreción, retirar su acceso al Programa sin previo aviso.
                    </p>
                    <p>
                        Usted acepta que nunca divulgará ni compartirá el acceso a su Cuenta de
                        usuario con terceros por ningún motivo. También acepta que creará, usará y/o
                        accederá solo a una Cuenta de usuario, y que no usará ninguna Cuenta de
                        usuario que no sea la suya.
                    </p>
                    <p>
                        Al configurar su cuenta de usuario, es posible que se le solicite o solicite
                        que ingrese información adicional, incluidos, entre otros, su nombre y
                        dirección de correo electrónico. Es posible que se requiera información
                        adicional para confirmar su identidad. Usted comprende y acepta que toda la
                        información proporcionada por usted es precisa, actual y completa y que
                        mantendrá y actualizará su información para mantenerla precisa, actual y
                        completa. Usted reconoce que si cualquier información proporcionada por
                        usted es falsa, inexacta, desactualizada o incompleta, nos reservamos el
                        derecho de cancelar su uso de la Plataforma y su inscripción en un Programa,
                        en la medida aplicable.
                    </p>
                    <p>
                        Además del proceso de registro, como parte de su uso de la Plataforma o
                        participación en los Programas, podemos obtener cierta información sobre
                        usted y su desempeño en los Programas. Parte de esta información puede ser
                        información de identificación personal. Podemos usar, mantener y almacenar
                        esta información para brindarle ciertos servicios ahora y en el futuro, y
                        podemos compartir dicha información con nuestros socios educativos o
                        terceros junto con dichos servicios o con fines de marketing. Por ejemplo,
                        como se detalla en nuestra Política de privacidad, podemos compartir ciertos
                        materiales o información sobre usted con terceros, incluidas sus
                        calificaciones/puntajes en nuestras clases. Independientemente del hecho de
                        que también se haya registrado en el servicio DND o DNC o NCPR,
                    </p>
                    <p>
                        El acceso a los Programas está restringido a los asistentes o estudiantes a
                        los que Careerera les ha otorgado acceso específicamente.
                    </p>
                    <p>Al registrar su Cuenta de Usuario, usted acepta que:</p>
                    <ul className="unorder_list">
                        <li>
                            está registrado para el Programa solo una vez y no configurará múltiples
                            Cuentas de usuario; y
                        </li>
                        <li>
                            usted cumplirá con estos Términos y cualquier término específico del
                            Programa.
                        </li>
                    </ul>
                    <p>
                        Se aplican requisitos adicionales a los estudiantes. Como estudiante, además
                        de los puntos anteriores, acepta que se está registrando con la intención de
                        completar las tareas, si corresponde, que sean relevantes y aplicables a la
                        plataforma o los programas en los que se ha inscrito.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Condiciones de pago y política de reembolso
                    </p>
                    <p>
                        A menos que Careerera acuerde expresamente lo contrario por escrito, se
                        requiere el pago total por la participación en un Programa en el momento de
                        la inscripción. En el caso de los Programas que incluyen una ventana de
                        prueba, dicha ventana de prueba estará disponible solo después del pago
                        completo. Durante la ventana de prueba, a solicitud del estudiante, y a
                        satisfacción de Careerera, Careerera puede, de acuerdo con la política de
                        reembolso aplicable para el Programa en particular, optar por reembolsar las
                        Tarifas del Programa pagadas, sujeto a la deducción de dichos cargos
                        aplicables por incluidos, entre otros, los gastos administrativos y de
                        marketing, según lo decida Careerera de vez en cuando. Una vez que se cierre
                        la ventana de prueba, no se permitirá ningún reembolso por ningún motivo.{" "}
                        Para todo el programa, donde no hay ventana de juicio o sesión preparatoria,
                    </p>
                    <p>
                        Es responsabilidad exclusiva del usuario que se inscribe en un Programa
                        verificar la precisión y evaluar la idoneidad y relevancia del Programa
                        elegido. La inscripción en un Programa es intransferible.
                    </p>
                    <p>
                        Para realizar el pago de cualquier Programa o comprar cualquier servicio o
                        producto ofrecido por Careerera a través de la Plataforma, debe tener acceso
                        a Internet y un método de pago actual válido y aceptado como se indica
                        durante el registro ("Método de pago"). Careerera no almacena ninguna
                        información de su tarjeta de crédito ni otra información restringida por el
                        Banco de la Reserva de la India (RBI) para procesar el pago y se ha asociado
                        con pasarelas de pago para el pago de los servicios. Al utilizar un
                        proveedor de pago de terceros, usted acepta cumplir con los términos de
                        dicho proveedor de pago. Usted acepta que en caso de que el proveedor de
                        pago externo de Careerera almacene dicha información, Careerera no será
                        responsable de dicho almacenamiento, y será únicamente a su discreción
                        permitir que el tercero almacene dicha información. Cualquier pérdida de
                        dicha información o cualquier pérdida en la que usted incurra debido al uso
                        de dicha información será únicamente una pérdida en la que incurra usted, y
                        Careerera no es responsable de ninguna manera por tales pérdidas y tampoco
                        es responsable de reembolsar / reparar tales pérdidas en cualquier manera
                        que sea. También acepta pagar las tarifas aplicables por los pagos
                        realizados a través de la Plataforma.
                    </p>
                    <p>
                        La falta de pago de la tarifa del Programa aplicable puede resultar en el
                        retiro de su acceso a un Programa. Dependiendo de dónde realice
                        transacciones con nosotros, el tipo de método de pago utilizado y dónde se
                        emitió su pago, su transacción con nosotros puede estar sujeta a tarifas de
                        cambio o tipos de cambio. Careerera no admite todos los métodos de pago,
                        monedas o ubicaciones de pago. Todos los impuestos aplicables se calculan en
                        función de la información de facturación que nos proporciona en el momento
                        de la inscripción/compra.
                    </p>
                    <p>
                        Puede cancelar su inscripción en cualquier momento. Cada Programa tiene
                        términos de reembolso específicos que serán aplicables en caso de reembolso
                        a causa de dichas solicitudes de cancelación.
                    </p>
                    <p>
                        Si se suscribió para una prueba gratuita, el período de prueba gratuito
                        durará el período de tiempo especificado durante su registro. Las pruebas
                        gratuitas no se pueden combinar con otras ofertas. Si se suscribió a un
                        servicio o producto pago en particular en los últimos seis (6) meses, o si
                        su Método de pago, dirección física, número de contacto o dirección de
                        correo electrónico se asociaron con una cuenta para ese servicio pago, no es
                        elegible para recibir una prueba gratuita de ese servicio o producto. Si
                        comienza su suscripción con una prueba gratuita, es posible que no sea
                        elegible para ciertas características de un producto o servicio durante su
                        período de prueba gratuito.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">Uso de Programas</p>
                    <p>
                        Careerera se reserva el derecho de cancelar o reprogramar cualquier Programa
                        o conferencias en vivo/seminarios web, o de alterar, modificar o reorganizar
                        el cronograma de temas, así como el valor en puntos o el peso de las tareas,
                        pruebas, cuestionarios, exámenes, proyectos y otras evaluaciones similares.
                        de progreso También comprende que Careerera, a su exclusivo criterio, puede
                        limitar, suspender o finalizar su uso de la Plataforma o los Programas y/o
                        todos los servicios proporcionados por Careerera relacionados con los
                        Programas, como el acceso a entrenadores de Careerera o servicios de apoyo,
                        servicios de evaluación o certificaciones. También comprende que Careerera
                        puede modificar o descontinuar todos los servicios relacionados con sus
                        Programas a su entera discreción. Usted acepta que Careerera no será
                        responsable ante usted ni ante ningún tercero por dicha modificación,
                        suspensión o interrupción.
                    </p>
                    <p>
                        Usted acepta que Careerera no será responsable ante usted en caso de no
                        disponibilidad de la Plataforma o cualquier parte de la misma ocasionada por
                        un acto de Dios, guerra, enfermedad, revolución, epidemia, disturbios,
                        conmoción civil, huelga, cierre patronal, inundación , incendio, falla del
                        satélite, falla de cualquier servicio público, desastre provocado por el
                        hombre o cualquier otra causa fuera del control de Careerera.
                    </p>
                    <p>
                        Sujeto a la política de reembolso aplicable, si ya no desea utilizar ningún
                        programa, puede cancelar su participación mediante notificación previa a
                        Careerera. Los participantes de las conferencias y seminarios web en vivo de
                        Careerera en línea tendrán acceso a dichas clases por correo electrónico.{" "}
                        Usted acepta no compartir dicho acceso con terceros. Si no puede asistir a
                        una conferencia/seminario web en vivo en línea, proporcione a Careerera un
                        aviso previo al respecto.
                    </p>
                    <p>
                        Usted será el único responsable de obtener y mantener cualquier equipo o
                        servicio auxiliar necesario para conectarse, acceder, recibir o utilizar la
                        Plataforma, incluidos, entre otros, dispositivos de hardware, software y
                        otros servicios de Internet, inalámbricos, de banda ancha, telefónicos y/u
                        otros. servicios de conexión de dispositivos de comunicación móvil. Usted
                        será el único responsable de garantizar que dicho equipo o servicios
                        auxiliares sean compatibles con la Plataforma, y ​​será responsable de todos
                        los cargos incurridos en relación con el uso de la Plataforma y el Programa
                        en relación con dicho equipo y servicios auxiliares.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Socios Educativos y Acreditación
                    </p>
                    <p>
                        Careerera NO es una universidad, sino un proveedor de servicios educativos,
                        que ofrece Programas en consulta con universidades indias e internacionales,
                        instituciones educativas, autoridades gubernamentales, ONG, corporaciones,
                        etc. (cada uno un "Socio Educativo").
                    </p>
                    <p>
                        La admisión a los programas de grado/diploma de un socio educativo es
                        independiente de ser aceptado y/o cursar uno o más programas. Usted acepta y
                        reconoce que nada en estos Términos o de otra manera con respecto al uso de
                        la Plataforma o cualquier Programa (a) lo inscribe o registra en un Socio
                        Educativo, o cualquier otra escuela, división, instituto o programa de o
                        asociado con un Socio Educativo. Socio, y (b) le permite acceder o utilizar
                        los recursos o recibir beneficios o privilegios de cualquier Socio
                        Educativo, más allá de los Programas.
                    </p>
                    <p>
                        Careerera podrá ofrecer una credencial u otro reconocimiento a los
                        participantes que hayan demostrado satisfactoriamente el dominio del
                        material del Programa. La decisión de otorgar dicho reconocimiento de
                        credencial a un participante determinado quedará únicamente a discreción de
                        Careerera. Careerera puede optar por no ofrecer ninguna credencial u otro
                        reconocimiento para algunos Programas. Careerera puede decidir a su
                        exclusivo criterio si proporciona un registro sobre el desempeño de un
                        participante en un Programa. El formato de cualquier credencial u otro
                        reconocimiento, y de cualquier desempeño, proporcionado por Careerera en
                        relación con los Programas será determinado por Careerera a su exclusivo
                        criterio y puede variar de un Programa a otro.
                    </p>
                    <p>
                        Se le otorgará un certificado de finalización exitosa de un programa
                        ("Certificado de programa") solo después de cumplir con los criterios y
                        requisitos de Careerera y sus socios educativos. Usted reconoce que dicho
                        Certificado de programa otorgado no puede estar afiliado a ningún Socio
                        educativo y no puede reemplazar un curso tomado con un Socio educativo ni
                        transmitir crédito académico o certificación para ningún Socio educativo.
                    </p>
                    <p>
                        No recibirá crédito académico de Careerera ni de ningún otro socio educativo
                        por tomar un programa. Si está tomando un Programa para obtener crédito
                        académico o certificación como estudiante de un Socio Educativo, o de otro
                        modo a través de un Socio Educativo, tal crédito o certificación solo puede
                        ser otorgado directamente por el Socio Educativo en base a sus propias
                        políticas y procedimientos, y usted puede ser requerido por ese Socio
                        educativo para estar registrado o inscrito con el Socio educativo para
                        recibir crédito o certificación; y, en cualquier caso, Careerera no tendrá
                        ninguna autoridad o responsabilidad con respecto a cualquier concesión de
                        crédito académico o certificación proporcionada por un Socio Educativo para
                        un Programa.
                    </p>
                    <p>
                        Usted reconoce y acepta que cualquier Programa afiliado con un Socio
                        Educativo puede estar sujeto a los términos, políticas y procedimientos del
                        Socio Educativo aplicable además de los Términos de Careerera. Sin limitar
                        lo anterior, si usted es un estudiante registrado o inscrito en un Socio
                        Educativo, o está asistiendo a un Socio Educativo y está tomando un Programa
                        para crédito o certificación a través de ese Socio Educativo, usted reconoce
                        y acepta que (a) el Socio Educativo puede tener sus propios términos,
                        políticas o procedimientos con respecto a su elegibilidad para participar en
                        el Programa, su participación en el Programa, los requisitos o
                        prerrequisitos para recibir crédito o certificación para el Programa, y/o
                        sus registros educativos o de estudiante que puedan estar relacionados con
                        su participación y desempeño en el Programa,
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Derechos de propiedad intelectual de Careerera
                    </p>
                    <p>
                        “Contenido” significa toda la información y los datos, que pueden incluir,
                        entre otros, texto, software, scripts, gráficos, mapas, fotos, sonidos,
                        música, videos, logotipos, ofertas, anuncios, características interactivas y
                        otros materiales.
                    </p>
                    <p>
                        La Plataforma, los Programas y los servicios relacionados son propiedad y
                        están operados por Careerera y sus licenciantes. Todo el Contenido u otro
                        material disponible en la Plataforma o a través de los Programas, incluidos,
                        entre otros, conferencias en línea/en vivo, discursos, lecciones en video,
                        cuestionarios, materiales de presentación, tareas, asignaciones de
                        programación, programas, código y otras imágenes, texto, diseños, arreglos,
                        visualizaciones, ilustraciones, documentos, materiales, clips de audio y
                        video, HTML y archivos (colectivamente, "Contenido de Careerera"), son
                        propiedad de Careerera y/o sus afiliados o licenciantes, y están protegidos
                        por derechos de autor, patente y/o u otros derechos de propiedad intelectual
                        de propiedad bajo las leyes indias y extranjeras. Todo el software utilizado
                        en la Plataforma es propiedad de Careerera y está protegido por las leyes de
                        derechos de autor indias e internacionales.
                    </p>
                    <p>
                        Los logotipos, marcas comerciales y marcas de servicio de Careerera que
                        pueden aparecer en la Plataforma y en el Programa ("Marcas de Careerera")
                        son propiedad de Careerera y están protegidos por las leyes indias y
                        extranjeras. Todas las demás marcas comerciales, marcas de servicio y
                        logotipos utilizados en las Plataformas, los Cursos en línea o los
                        Programas, con o sin atribución, son marcas comerciales, marcas de servicio
                        o logotipos de sus respectivos propietarios. Además, los elementos de las
                        Plataformas están protegidos por la imagen comercial y otras leyes indias e
                        internacionales de propiedad intelectual y no pueden copiarse, reproducirse,
                        descargarse o distribuirse de ninguna manera, en su totalidad o en parte,
                        sin el consentimiento expreso por escrito de Careerera.
                    </p>
                    <p>
                        Como condición para acceder a las Plataformas y/o usar los Programas, usted
                        acepta no (a) reproducir, duplicar, copiar, vender, revender o explotar para
                        ningún propósito comercial cualquier Contenido de Careerera o cualquier
                        parte del mismo, excepto como se indica expresamente permitido bajo estos
                        Términos; y (b) usar las Marcas de Careerera o el nombre, las marcas
                        registradas, las marcas de servicio u otros materiales de cualquier Socio
                        educativo en relación con, o para transmitir, cualquier comunicación o
                        correo electrónico no solicitado o para cualquier otro propósito no
                        autorizado.
                    </p>
                    <p>
                        Verifique todo el contenido antes de usarlo. En caso de que encuentre algún
                        Contenido que sea incorrecto, infractor, ofensivo, indecente o censurable,
                        notifíquenos de inmediato a la dirección mencionada en la parte inferior de
                        esta página.
                    </p>
                    <p>
                        Además, de vez en cuando, Careerera (o sus proveedores de servicios
                        externos, en nombre de Careerera) pueden solicitar a los usuarios que
                        revisen el Contenido de Careerera o realicen una prueba beta de la
                        Plataforma. Las obras derivadas de dicha actividad seguirán siendo propiedad
                        única y exclusiva de Careerera o de sus terceros proveedores de servicios,
                        según corresponda.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Propiedad intelectual de terceros
                    </p>
                    <p>
                        Careerera respeta los derechos de propiedad intelectual de terceros y apoya
                        activamente la protección de toda la propiedad intelectual de terceros,
                        incluidos los derechos de autor y las marcas registradas ("IP"). Es nuestra
                        política responder rápidamente a los avisos claros de supuesta infracción de
                        propiedad intelectual. Si recibimos una notificación adecuada de infracción
                        de propiedad intelectual, nuestra respuesta a dichos avisos incluirá la
                        eliminación o la desactivación del acceso al material que se afirma que es
                        objeto de la actividad infractora.
                    </p>
                    <p>
                        Careerera no será responsable por el uso no autorizado de cualquier IP de
                        terceros, y el usuario que lleve a cabo dicho uso no autorizado o infrinja
                        cualquier IP disponible en la Plataforma deberá indemnizar y mantener
                        indemne a Careerera frente a todas y cada una de las reclamaciones que
                        puedan surgir como resultado de tal uso.
                    </p>
                    <p>
                        Si cree que su producto u otro trabajo ha sido tergiversado o utilizado de
                        una manera que constituye una infracción de derechos de autor, o sus
                        derechos de propiedad intelectual han sido violados de otra manera,
                        proporciónenos la siguiente información:
                    </p>
                    <ul className="unorder_list">
                        <li>
                            una firma electrónica o física de la persona autorizada para actuar en
                            nombre del propietario del producto, derechos de autor u otro interés de
                            propiedad intelectual;
                        </li>
                        <li>
                            una descripción del producto, trabajo u otra propiedad intelectual que
                            afirma que ha sido tergiversada o infringida;
                        </li>
                        <li>
                            una descripción de dónde se encuentra en la Plataforma/Programa el
                            material que afirma que tergiversa o infringe su producto, trabajo u otra
                            propiedad intelectual;
                        </li>
                        <li>su dirección, número de teléfono y dirección de correo electrónico;</li>
                        <li>
                            una declaración suya de que cree de buena fe que el uso en disputa no está
                            autorizado por el propietario del producto, el trabajo, los derechos de
                            autor o la propiedad intelectual, o su agente, o la ley aplicable; y
                        </li>
                        <li>
                            una declaración suya, hecha bajo pena de perjurio, de que la información
                            antes mencionada en su notificación es precisa y que usted es el
                            propietario del producto, el trabajo, los derechos de autor o la propiedad
                            intelectual o está autorizado para actuar en nombre de dicho propietario.
                        </li>
                    </ul>
                    <p>
                        Para notificaciones de disputas o reclamos de derechos de autor u otras
                        infracciones de propiedad intelectual, comuníquese con nosotros en la
                        dirección que se proporciona al final de esta página.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Licencia limitada
                    </p>
                    <p>
                        Los servicios en la Plataforma se otorgan bajo licencia, no se venden. En
                        contraprestación por su aceptación de estos Términos, Careerera le otorga
                        una licencia personal, no exclusiva, intransferible y revocable para acceder
                        y utilizar la Plataforma y los Programas, únicamente de acuerdo con los
                        Términos. Puede descargar o copiar las partes del Contenido de Careerera
                        disponibles en la Plataforma solo para su uso personal y no comercial,
                        siempre que mantenga todos los derechos de autor y otros avisos incluidos en
                        dicho Contenido de Careerera. No puede copiar, vender, revender, reproducir,
                        publicar, modificar, transferir, retransmitir, distribuir, explotar
                        comercialmente ni crear trabajos derivados de Plataformas, Programas o
                        cualquier Contenido de Careerera. No obstante lo anterior, ciertos
                        documentos de referencia, libros de texto digitales y artículos pueden
                        ponerse a su disposición con el permiso de terceros,
                    </p>
                    <p>
                        No puede realizar ingeniería inversa, descompilar, desensamblar o acceder de
                        otra manera al código fuente de cualquier software que pueda usarse para
                        operar la Plataforma o los Programas. De vez en cuando, Careerera puede
                        incluir software, código, instrucciones u otra información similar en el
                        Contenido de Careerera para los Programas; cualquier información de este
                        tipo se proporciona "tal cual" solo con fines instructivos y está sujeta a
                        las secciones "Descargo de responsabilidad" y "Limitación de
                        responsabilidad" a continuación y otros términos del presente. Cualquier uso
                        de dicha información con fines comerciales está estrictamente prohibido.{" "}
                        Careerera y/o sus afiliados y otorgantes de licencias se reservan todos los
                        derechos no otorgados expresamente en el presente sobre las Plataformas, el
                        Contenido de Careerera y las Marcas de Careerera.
                    </p>
                    <p>
                        Sin limitar la generalidad de los términos anteriores, los siguientes son
                        tipos de usos que Careerera define expresamente como fuera de la definición
                        de "uso personal y no comercial":
                    </p>
                    <ul className="unorder_list">
                        <li>
                            la venta o alquiler de (i) cualquier parte del Contenido de Careerera,
                            (ii) cualquier trabajo derivado basado al menos en parte en el Contenido
                            de Careerera, o (iii) cualquier trabajo colectivo que incluya cualquier
                            parte del Contenido de Careerera;
                        </li>
                        <li>
                            la venta de acceso o un enlace a cualquier parte del Contenido de
                            Careerera;
                        </li>
                        <li>
                            proporcionar capacitación, soporte o servicios editoriales que usen o
                            hagan referencia al Contenido de Careerera a cambio de una tarifa;
                        </li>
                        <li>
                            el uso del Contenido de Careerera por parte de un colegio, universidad,
                            escuela u otra institución educativa para la instrucción donde se cobra
                            una matrícula;
                        </li>
                        <li>
                            el uso del Contenido de Careerera por parte de una corporación con fines
                            de lucro o una entidad sin fines de lucro para el desarrollo o la
                            capacitación profesional interna; y
                        </li>
                        <li>
                            el uso del Contenido de Careerera para mostrar/cargar/poner a disposición
                            en un lugar que sea accesible al público en general de cualquier manera,
                            incluidos, entre otros, sitios de redes sociales, sitios de descarga de
                            videos y torrents.
                        </li>
                    </ul>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Contenido de usuario
                    </p>
                    <p>
                        La Plataforma puede permitirle cargar publicaciones en foros, chatear con
                        otros usuarios y consejeros de Careerera, discusiones de usuarios, páginas
                        de perfil y otro contenido y medios para la interacción social, o cierta
                        información y materiales para usar con los Programas, por ejemplo,
                        preguntas, hipótesis, ejemplos, asignaciones, proyectos de la industria,
                        etc. (colectivamente, "Contenido de usuario"). Careerera no reclama la
                        propiedad de ningún Contenido de usuario que pueda enviar o poner a
                        disposición para su inclusión en la Plataforma o los Programas. En
                        consecuencia, sujeto a la licencia otorgada a Careerera anteriormente, el
                        usuario será el propietario único y exclusivo de todos y cada uno de los
                        derechos, títulos e intereses sobre el Contenido del usuario.
                    </p>
                    <p>
                        Con respecto a cualquier Contenido de usuario que envíe a través de la
                        Plataforma o los Programas o que se ponga a disposición de Careerera, por la
                        presente otorga a Careerera una licencia irrevocable, mundial, perpetua,
                        libre de regalías y no exclusiva para usar, distribuir, reproducir,
                        modificar, adaptar, realizar públicamente y exhibir públicamente dicho
                        Contenido de usuario en las Plataformas o en los Programas o explotar de
                        otro modo el Contenido de usuario, con el derecho de sublicenciar dichos
                        derechos (a múltiples niveles), para cualquier propósito (incluido cualquier
                        propósito comercial). Careerera se reserva el derecho de eliminar cualquier
                        Contenido de usuario en cualquier momento y por cualquier motivo.
                    </p>
                    <p>
                        En la medida en que proporcione cualquier Contenido de usuario, declara y
                        garantiza que (a) tiene todos los derechos, licencias y/o autorizaciones
                        necesarios para proporcionar dicho Contenido de usuario y permitir que
                        Careerera use dicho Contenido de usuario como se indica anteriormente, (b)
                        tal El Contenido de usuario es preciso y razonablemente completo, (c) entre
                        usted y Careerera, usted será responsable del pago de cualquier tarifa de
                        terceros relacionada con la provisión y el uso de dicho Contenido de
                        usuario, y (d) dicho Contenido de usuario no y no infringirá ni se apropiará
                        indebidamente de los derechos de terceros ni constituirá una declaración
                        fraudulenta o tergiversación o prácticas comerciales desleales.
                    </p>
                    <p>
                        Careerera no controla el Contenido de usuario publicado a través de la
                        Plataforma, incluidos los mensajes, reseñas o comentarios, y no garantiza la
                        precisión, integridad o calidad de dicho Contenido de usuario. Bajo ninguna
                        circunstancia, Careerera será responsable de ningún Contenido de usuario,
                        incluidos los errores u omisiones, o cualquier pérdida, daño o difamación de
                        cualquier tipo incurrido como resultado de su publicación o uso de cualquier
                        Contenido de usuario. Usted es responsable de cumplir con todas las leyes
                        aplicables al Contenido del Usuario.
                    </p>
                    <p>Tiene prohibido publicar el siguiente Contenido en la Plataforma:</p>
                    <ul className="unorder_list">
                        <li>
                            Contenido que sea fraudulento, indecente o calumnioso, o que difame,
                            acose, discrimine, dañe o amenace a otros;
                        </li>
                        <li>
                            Contenido que discuta actividades ilegales, con la intención de
                            cometerlas;
                        </li>
                        <li>
                            Contenido que infrinja o se apropie indebidamente de patentes, marcas
                            registradas, secretos comerciales, derecho de publicidad u otros derechos
                            de propiedad intelectual de terceros;
                        </li>
                        <li>Contenido que no tiene derecho a divulgar;</li>
                        <li>Contenido profano, pornográfico, obsceno, indecente o ilegal;</li>
                        <li>Publicidad o cualquier forma de solicitud comercial;</li>
                        <li>Contenido relacionado con actividades políticas partidistas;</li>
                        <li>
                            Contenido que contiene información intencionalmente inexacta o que se
                            publica con la intención de engañar a otros;
                        </li>
                        <li>
                            Virus, caballos de Troya, gusanos, bombas de tiempo, cancelbots u otros
                            dispositivos de desactivación u otros componentes dañinos destinados o que
                            puedan dañar, interferir perjudicialmente, interceptar subrepticiamente o
                            expropiar cualquier sistema, datos o información personal;
                        </li>
                        <li>
                            Contenido que consiste en cualquier medio de gran volumen, automatizado o
                            electrónico para acceder a la Plataforma (incluidos, entre otros, robots,
                            arañas o scripts);
                        </li>
                        <li>
                            Contenido que viole los derechos de otros usuarios de la Plataforma; o
                        </li>
                        <li>
                            Contenido que viole cualquier ley local, estatal, nacional o internacional
                            aplicable o que de otro modo promueva o fomente cualquier actividad
                            ilegal.
                        </li>
                    </ul>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Seguridad de la plataforma
                    </p>
                    <p>
                        Tiene prohibido violar o intentar violar la seguridad de la Plataforma o
                        cualquier otra Plataforma asociada de Careerera, lo que incluye, entre
                        otros, (a) acceder a datos que no están destinados a dicho usuario o iniciar
                        sesión en un servidor o una cuenta que el usuario no es autorizado para
                        acceder; (b) intentar sondear, escanear o probar la vulnerabilidad de un
                        sistema o red o violar las medidas de seguridad o autenticación sin la
                        debida autorización; (c) intentar interferir con el servicio a cualquier
                        usuario, host o red, incluidos, entre otros, mediante el envío de un virus a
                        la Plataforma, la sobrecarga, la "inundación", el "spam", el "bombardeo de
                        correo" o el "bloqueo"; (d) enviar correos electrónicos no solicitados,
                        incluidas promociones y/o publicidad de productos o servicios; o (e)
                        falsificar cualquier encabezado de paquete TCP/IP o cualquier parte de la
                        información del encabezado en cualquier publicación de correo electrónico o
                        grupo de noticias. Las violaciones de la seguridad del sistema o de la red
                        pueden dar lugar a responsabilidad civil o penal. Careerera investigará los
                        sucesos que puedan implicar tales infracciones y puede involucrar a las
                        autoridades encargadas de hacer cumplir la ley y cooperar con ellas para
                        enjuiciar a los usuarios que estén involucrados en dichas infracciones.{" "}
                        Usted acepta no utilizar ningún dispositivo, software o rutina para
                        interferir o intentar interferir con el funcionamiento adecuado de esta
                        Plataforma o cualquier actividad que se realice en la Plataforma. Usted
                        acepta, además, no usar ni intentar usar ningún motor, software,
                        herramienta, agente u otro dispositivo o mecanismo (incluidos, entre otros,
                        navegadores, arañas, robots,
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Descargo de responsabilidad
                    </p>
                    <p>
                        La Plataforma y/o los Programas pueden contener errores tipográficos o
                        inexactitudes y pueden no estar completos o actualizados. Careerera, por lo
                        tanto, se reserva el derecho de corregir cualquier error, inexactitud u
                        omisión (incluso después de que se haya enviado un pedido) y de cambiar o
                        actualizar la información en cualquier momento sin previo aviso.
                    </p>
                    <p>
                        La Plataforma, los Programas y cualquier información o Contenido de
                        Careerera se proporcionan "tal cual" y "según disponibilidad" con todas las
                        fallas.
                    </p>
                    <p>
                        Careerera no hace representaciones ni garantías de ningún tipo, ya sea
                        expresa o implícita, con respecto al Contenido de Careerera o los servicios
                        disponibles en o a través de esta Plataforma y Programas, incluidas, entre
                        otras, las garantías implícitas de comerciabilidad, idoneidad para un
                        propósito particular, y no infracción. Careerera no garantiza que los
                        servicios cumplan con los requisitos del usuario o que los servicios sean
                        ininterrumpidos, oportunos, seguros o libres de errores; Careerera tampoco
                        ofrece ninguna garantía en cuanto a los resultados que se puedan obtener del
                        uso de los servicios, o en cuanto a la precisión o confiabilidad de
                        cualquier información obtenida a través de los servicios, o que se
                        corregirán los defectos en el software.
                    </p>
                    <p>
                        El usuario entiende y acepta que el Contenido de Careerera y toda otra
                        información, datos u otro material descargado u obtenido de otro modo a
                        través de la Plataforma o los Programas se obtiene a discreción y riesgo del
                        usuario, y que el usuario será el único responsable de cualquier daños al
                        usuario, al sistema informático del usuario, dispositivo electrónico o
                        cualquier pérdida de datos que resulte de la descarga de dicho material o
                        datos.
                    </p>
                    <p>
                        Ningún consejo o información, ya sea oral o escrita, obtenida por el usuario
                        de Careerera oa través de los servicios, creará ninguna garantía por parte
                        de Careerera.
                    </p>
                    <p>
                        En caso de que encuentre alguna información proporcionada en la Plataforma o
                        los Programas incorrecta u obscena, o si usted es el propietario de
                        cualquier información o contenido y desea que dicha información o contenido
                        no se muestre en la Plataforma o los Programas, notifíquenos amablemente a
                        la dirección proporcionada en la parte inferior de la página.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Limitación de responsabilidad
                    </p>
                    <p>
                        Ni Careerera ni ninguno de sus Socios Educativos, afiliados, empleados,
                        directores, oficiales, agentes, vendedores o proveedores serán responsables
                        ante usted o cualquier otra persona, ya sea por Agravio, Contrato,
                        Responsabilidad Estricta o de otro modo, por cualquier daño indirecto,
                        especial o incidental. o pérdidas o daños consecuentes de cualquier
                        naturaleza que surjan de o en relación con el uso o la incapacidad de usar
                        esta Plataforma o Programas, incluidos, entre otros, daños por lucro
                        cesante, pérdida de buena voluntad, pérdida de datos, interrupción del
                        trabajo, precisión de la búsqueda resultados, o falla, virus o mal
                        funcionamiento de la computadora/dispositivo electrónico. En ningún caso,
                        Careerera será responsable de los daños que superen los ₹ 1000 o, en el caso
                        de los estudiantes inscritos, las tarifas pagadas por usted en relación con
                        su inscripción en un Programa.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">Enlace del sitio</p>
                    <p>
                        La Plataforma puede contener enlaces a páginas en otros sitios web ("Sitios
                        Enlazados"), y esos Sitios Enlazados pueden contener Contenido u ofrecer
                        productos y/o servicios para la venta. Careerera no crea, edita, controla ni
                        supervisa estos Sitios vinculados. Usted reconoce y acepta que (a) no
                        tenemos ninguna responsabilidad por la precisión o disponibilidad de la
                        información proporcionada por los Sitios vinculados; (b) no controlamos ni
                        respaldamos a los patrocinadores de dichos Sitios vinculados o el contenido,
                        los productos, la publicidad u otros materiales presentados en dichos Sitios
                        vinculados; y (c) acepta los términos y condiciones de los Sitios
                        vinculados. Podemos eliminar cualquier Sitio vinculado de la Plataforma en
                        cualquier momento con o sin motivo.
                    </p>
                    <p>
                        CAREERERA NO SERÁ RESPONSABLE DE NINGUNA TRANSACCIÓN REALIZADA POR USTED CON
                        TERCEROS A TRAVÉS DE LOS SITIOS ENLAZADOS NI DE CUALQUIER RESPONSABILIDAD
                        DERIVADA DE LAS DECLARACIONES O INFORMACIÓN PROPORCIONADA EN DICHOS SITIOS
                        ENLAZADOS.
                    </p>
                    <p>
                        Agradecemos que los Sitios vinculados puedan contener material sobre el cual
                        el operador de los Sitios vinculados tiene derechos de propiedad
                        intelectual. Respetamos esos derechos y proporcionamos los enlaces solo con
                        fines informativos. El hecho de que hayamos proporcionado enlaces a
                        cualquier Sitio vinculado no crea ni implica ninguna relación o asociación
                        con el operador de dicho Sitio vinculado.
                    </p>
                    <p>
                        No puede establecer un enlace a esta Plataforma desde ningún otro sitio web,
                        aplicación, intranet o extranet sin nuestro consentimiento previo por
                        escrito. Si desea crear enlaces, puede ponerse en contacto con nosotros
                        antes de hacerlo. Al establecer enlaces, no debe representar de ninguna
                        manera, expresa o implícitamente, que ha recibido el respaldo, patrocinio o
                        apoyo de Careerera, incluidos sus socios educativos, sus respectivos
                        empleados, agentes, directores, funcionarios o accionistas.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">Indemnidad</p>
                    <p>
                        Usted acepta indemnizar y eximir de responsabilidad a Careerera y sus Socios
                        Educativos de cualquier reclamo, responsabilidad, daño, pérdida y gasto,
                        incluidos los honorarios y costos razonables de abogados, relacionados con o
                        que surjan de (a) su uso o intento de uso del Plataformas o Programas en
                        violación de los Términos; (b) su violación de cualquier ley o derecho de
                        cualquier tercero; o (c) información o Contenido que usted u otros publiquen
                        o pongan a disposición en la Plataforma o a través de cualquier Programa, lo
                        que incluye, entre otros, cualquier reclamo de infracción o apropiación
                        indebida de propiedad intelectual u otros derechos de propiedad.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Terminación de derechos
                    </p>
                    <p>
                        Usted acepta que Careerera, a su exclusivo criterio, puede desactivar su
                        cuenta o rescindir su uso de la Plataforma o su inscripción en un Programa
                        con o sin motivo, incluido, entre otros, si Careerera cree que ha (a)
                        incumplido los Términos; (b) infringió los derechos de propiedad intelectual
                        de un tercero; (c) publicó, cargó o transmitió Contenido no autorizado en la
                        Plataforma; o (d) violó o actuó de manera inconsistente con la letra o el
                        espíritu de estos Términos o cualquier otro código de conducta aplicable.{" "}
                        Usted acepta que cualquier desactivación o terminación de su acceso a las
                        Plataformas o Programas puede verse afectada sin previo aviso y que
                        Careerera no será responsable ante usted ni ante terceros por la terminación
                        de su cuenta o inscripción en un Programa.
                    </p>
                    <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                        Otras disposiciones
                    </p>
                    <p>
                        Al aceptar los Términos a través de su uso de la Plataforma, usted certifica
                        que tiene 18 años de edad o más. Si es menor de 18 años o menor de edad en
                        su jurisdicción para celebrar un contrato vinculante, puede usar la
                        Plataforma solo bajo la supervisión de un padre o tutor legal que acepte
                        estar sujeto a los Términos. Si usted es un padre o tutor legal que acepta
                        los Términos en beneficio de un niño menor de 18 años, tenga en cuenta que
                        usted es totalmente responsable del uso que haga de la Plataforma, incluidos
                        todos los cargos financieros y la responsabilidad legal en que pueda
                        incurrir. . Al usar la Plataforma, usted declara y garantiza que tiene el
                        derecho, la autoridad y la capacidad para aceptar los Términos y cumplir con
                        todos los términos y condiciones establecidos en este documento. Los
                        Programas no son para el uso de personas menores de 18 años.
                    </p>
                    <p>
                        Careerera puede transferir o ceder libremente cualquier parte de sus
                        derechos o delegar sus obligaciones en virtud de estos Términos o cualquier
                        término específico del Programa. No transferirá ni asignará, por ministerio
                        de la ley o de otro modo, ninguna parte de sus derechos ni delegará sus
                        obligaciones en virtud de estos Términos o cualquier término específico del
                        Programa sin el consentimiento previo por escrito de Careerera.
                    </p>
                    <p>
                        Estos Términos o cualquier término específico del Programa compartido con
                        usted se regirá, interpretará y aplicará de conformidad con las leyes de la
                        India, ya que se aplican a los acuerdos celebrados y ejecutados en su
                        totalidad dentro de la India y sin dar efecto a ningún principio de
                        conflicto de leyes. Usted acepta que cualquier demanda legal u otra acción
                        iniciada por Careerera, usted o cualquier tercero para hacer cumplir estos
                        Términos o cualquier término específico del Programa compartido con usted, o
                        en relación con cualquier asunto relacionado con la Plataforma o los
                        Programas, estará sujeto únicamente a la jurisdicción de los tribunales de
                        Mumbai. Cuando surja una disputa, las partes involucradas harán todos los
                        esfuerzos razonables para resolver la disputa a través de negociaciones de
                        buena fe. Si los esfuerzos para resolver amigablemente cualquier disputa o
                        reclamo entre las partes no tienen éxito, entonces dicha disputa o reclamo
                        que surja de o en relación con los Términos o cualquier término específico
                        del Programa compartido con usted, incluida cualquier pregunta sobre su
                        existencia, validez o terminación, se remitirá a arbitraje en virtud de la
                        Ley de Arbitraje y Conciliación de 1956, como modificada (“Ley”) ante un
                        árbitro único que será designado por Careerera. Los procedimientos se
                        llevarán a cabo en inglés y la sede del arbitraje será Mumbai.
                    </p>
                    <p>
                        Si se determina que alguna disposición de los Términos o cualquier término
                        específico del Programa compartido con usted es ilegal, nulo o por algún
                        motivo no aplicable, entonces esa disposición se considerará separable de
                        las demás disposiciones del presente y no afectará la validez y
                        aplicabilidad. de las disposiciones restantes. Careerera no tendrá ninguna
                        responsabilidad bajo estos Términos o cualquier término específico del
                        Programa compartido con usted, en la medida que surja de cualquier falla de
                        Careerera para cumplir con cualquiera de sus obligaciones bajo estos
                        Términos o cualquier término específico del Programa compartido con usted,
                        debido a cualquier incendio. , inundaciones, terremotos, otros actos de
                        Dios, guerras, disturbios civiles, terrorismo, fallas en Internet, actos
                        gubernamentales u órdenes judiciales, emergencias nacionales, huelgas o
                        disputas laborales o cualquier otro evento que no esté dentro del control
                        razonable de Careerera.
                    </p>
                    <p>
                        El hecho de que Careerera no ejerza o haga cumplir cualquier derecho o
                        disposición de los Términos o cualquier término específico del Programa
                        compartido con usted no constituirá una renuncia a tal derecho o
                        disposición. Si un tribunal de jurisdicción competente determina que alguna
                        disposición de los Términos o cualquier término específico del Programa
                        compartido con usted no es válido, las partes acuerdan que el tribunal debe
                        esforzarse por hacer efectivas las intenciones de las partes tal como se
                        refleja en la disposición. en la medida en que se pueda hacer legalmente, y
                        las demás disposiciones de estos Términos o cualquier término específico del
                        Programa compartido con usted, permanecerán en pleno vigor y efecto.
                    </p>
                    <p>
                        Estos Términos o cualquier término específico del Programa compartido con
                        usted constituye el acuerdo completo entre usted y Careerera en relación con
                        los asuntos establecidos en este documento, y no se modificará excepto por
                        escrito, según lo publicado en las Plataformas por Careerera o mediante un
                        escrito específico entre usted. y Carrera.
                    </p>
                    <p>
                        Careerera puede transferir o asignar libremente cualquier parte de sus
                        derechos o delegar sus obligaciones en virtud de los Términos o cualquier
                        término específico del Programa compartido con usted. No puede transferir ni
                        ceder, por ministerio de la ley o de otro modo, ninguna parte de sus
                        derechos o delegar sus obligaciones en virtud de los Términos o cualquier
                        término específico del Programa compartido con usted, sin el consentimiento
                        previo por escrito de Careerera, y cualquier intento de transferencia o la
                        cesión será nula y sin efecto.
                    </p>
                    <p>
                        En caso de que sienta que su inquietud no se resolvió a su satisfacción,
                        puede comunicarse con nuestro oficial de quejas, quien se esforzará por
                        solucionar la inquietud dentro de los 30 días hábiles a partir de la fecha
                        de la escalada. Se le recomienda escalar al oficial de quejas solo cuando ya
                        haya presentado su queja que no se haya resuelto a su satisfacción, o su
                        inquietud no se haya resuelto dentro de los 30 días hábiles a partir de la
                        fecha de generación del ticket.
                    </p>
                    <p>
                        De conformidad con la Ley de Tecnología de la Información de 2000 y las
                        normas establecidas en virtud de la misma y también en cumplimiento de las
                        Normas de Protección al Consumidor (Comercio Electrónico) de 2020, el nombre
                        y los datos de contacto del Funcionario de Quejas se encuentran a
                        continuación:
                    </p>
                    <p>(Nombre, correo electrónico y dirección)</p>
                </div>

            </div>
        </div>
    )
}
export default Terms
