import React from "react";
import Link from "next/link";
import { PATHS } from "config";
import { BackToTop } from "components/backtotop";
import { SocialSidebar } from "components/socialsidebar";

import { Layout, Container } from "components/layout";

import {
  TerminosContainer,
  BackWrapper,
  Title,
  TextWrapper,
  Text,
  Subtitle,
} from "components/pages/terminos.styles";

const Terminos = () => {

  return (
    <Layout backToTopFooter>
      <SocialSidebar color="red" />
      <BackToTop color="red" />
      <TerminosContainer>
        <Container>
          <BackWrapper>
            <Link href={PATHS.ROOT}>
              <a className="back--link">
                <BackToTop />
                Volver al inicio
              </a>
            </Link>
          </BackWrapper>
        </Container>

        <Container>
          <Title>TÉRMINOS Y CONDICIONES DE USO</Title>
        </Container>

        <Container>
          <TextWrapper>
            <Text>
              Esta sección establece los términos y condiciones (en adelante,
              las “Condiciones Generales”) para el uso de los contenidos y
              servicios (en adelante, los “Servicios”) del sitio web
              especificado en la cláusula 12 (en adelante, el “Sitio Web”). El
              Sitio Web y los Servicios son prestados por la empresa detallada
              en la cláusula 12 (en adelante, “BELGA INMOBILIARIA”).
            </Text>
            <Text>
              En caso de no estar de acuerdo con las Condiciones Generales, por
              favor, abandone el Sitio Web y absténgase de utilizar los
              Servicios que se ofrecen. La utilización por el usuario del Sitio
              Web se entenderá como aceptación plena y sin reservas de las
              Condiciones Generales aquí establecidas.{" "}
            </Text>
            <Text>
              En adelante, los términos “Usted” y “Usuario” serán utilizados
              para hacer referencia a todas las personas físicas y/o jurídicas
              que por cualquier razón accedan al Sitio Web.
            </Text>
            <Subtitle>1. Acceso al Sitio Web.</Subtitle>
            <Text>
              1.1. El acceso y utilización del Sitio Web no exige la previa
              suscripción o registro del Usuario.
            </Text>

            <Subtitle>1.2. Utilización del Sitio Web.</Subtitle>
            <Text>
              1.2.1. El Usuario se compromete a utilizar el Sitio Web de
              conformidad con estas Condiciones Generales, las leyes aplicables
              conforme la cláusula 12 y con la moral y buenas costumbres.
            </Text>
            <Text>
              1.2.2. El Usuario se obliga a abstenerse de utilizar el Sitio Web
              con fines o efectos ilícitos, contrarios a lo establecido en las
              Condiciones Generales, lesivos de los derechos e intereses de
              terceros, o que de cualquier forma puedan dañar, inutilizar,
              sobrecargar o deteriorar el Sitio Web o impedir la normal
              utilización del Sitio Web por parte de los Usuarios.
            </Text>

            <Subtitle>1.3. Contenido del Sitio Web.</Subtitle>
            <Text>
              1.3.1. Los contenidos de este Sitio Web, tales como texto,
              información, gráficos, imágenes, logos, marcas, programas de
              computación, bases de datos, diseños, arquitectura funcional y
              cualquier otro material (en adelante, el “Contenido”) están
              protegidos por las leyes aplicables en c de utilidad, diseños
              industriales y nombres de dominio.
            </Text>
            <Text>
              1.3.2. Todo el Contenido es propiedad de BELGA INMOBILIARIA y/o de
              cualquier otra sociedad vinculada y/o de sus proveedores de
              contenido. La compilación, interconexión, operatividad y
              disposición de los contenidos del Sitio Web es de propiedad
              exclusiva de BELGA INMOBILIARIA y/o de sus empresas vinculadas. El
              uso, adaptación, reproducción y/o comercialización no autorizada
              del Contenido puede encontrarse penado por la legislación vigente
              en cada jurisdicción.
            </Text>
            <Text>
              1.3.3. Usted no copiará ni adaptará el código de programación
              desarrollado por, o por cuenta de, BELGA INMOBILIARIA para generar
              y operar sus páginas, el cual se encuentra protegido por la
              legislación aplicable y vigente en cada jurisdicción.
            </Text>

            <Subtitle>1.4. Uso Permitido del Sitio.</Subtitle>
            <Text>
              1.4.1. Reglas generales: Los Usuarios tienen prohibido utilizar el
              Sitio Web para transmitir, distribuir, almacenar o destruir
              material (i) violando la normativa vigente, (ii) de forma que se
              infrinjan derechos de terceros o se viole la confidencialidad,
              honor, privacidad, imagen u otros derechos personales de otras
              personas.
            </Text>
            <Text>
              1.4.2. Reglas de Seguridad del Sitio Web: Los Usuarios tienen
              prohibido violar o intentar violar la seguridad del Sitio Web,
              incluyendo pero no limitándose a: (i) el acceso a datos que no
              estén destinados a tal usuario o entrar en un servidor o cuenta
              cuyo acceso no está autorizado al Usuario, (ii) evaluar o probar
              la vulnerabilidad de un sistema o red, o violar las medidas de
              seguridad o identificación sin la adecuada autorización, (iii)
              intentar impedir el Servicio a cualquier Usuario, anfitrión o red,
              incluyendo, pero sin limitación, mediante el envío de virus al
              Sitio Web, o mediante saturación o ataques de denegación de
              Servicio, (iv) enviar correos no pedidos, incluyendo promociones
              y/o publicidad de productos o servicios, o (v) falsificar
              cualquier cabecera de paquete TCP/IP o cualquier parte de la
              información de la cabecera de cualquier correo electrónico o en
              mensajes de foros de debate.
            </Text>
            <Text>
              1.4.3. Las violaciones de la seguridad del sistema o de la red
              constituyen delitos penales y pueden derivar en responsabilidades
              civiles. BELGA INMOBILIARIA investigará los casos de violaciones a
              la seguridad del sistema, pudiendo dirigirse a la autoridad
              judicial o administrativa competente a los efectos de perseguir a
              los Usuarios involucrados en tales violaciones.
            </Text>

            <Subtitle>1.5. Usos Prohibidos.</Subtitle>
            <Text>
              1.5.1. El Sitio Web sólo podrá ser utilizado con fines lícitos,
              para acceder a información referida a los Servicios disponibles a
              través del mismo. BELGA INMOBILIARIA prohíbe específicamente
              cualquier utilización del Sitio Web para:
            </Text>
            <Text>
              a) Usar cualquier mecanismo para impedir o intentar impedir el
              adecuado funcionamiento de este Sitio Web o cualquier actividad
              que se esté realizando en este Sitio Web.
            </Text>
            <Text>
              b) El uso o intento de uso de cualquier máquina, software,
              herramienta, agente u otro mecanismo para navegar o buscar en este
              Sitio Web que sean distintos a las herramientas de búsqueda
              provistos por BELGA INMOBILIARIA en este Sitio Web.
            </Text>
            <Text>
              c) Intentar descifrar, descompilar u obtener el código fuente de
              cualquier programa de software de este Sitio Web.
            </Text>

            <Subtitle>
              1.6. Canales de Comunicación disponibles para los Usuarios.
            </Subtitle>
            <Text>
              1.6.1. El Usuario deberá utilizar los canales de comunicación
              disponibles —como chatbots y chats de WhatstApp, entre otros— (en
              adelante, los “Canales”) de forma responsable, correcta y dando
              fiel cumplimiento a la normativa vigente.
            </Text>
            <Text>
              1.6.2. El contenido de cada mensaje enviado por el Usuario a
              través de los Canales es de única y exclusiva responsabilidad del
              Usuario. El Usuario acepta voluntariamente que el acceso a y/o el
              uso de los Canales tiene lugar, en todo caso, bajo su exclusiva y
              única responsabilidad.
            </Text>
            <Text>
              1.6.3. El Usuario reconoce y acepta que las siguientes conductas
              se encuentran terminantemente prohibidas:
            </Text>
            <Text>
              a) utilizar lenguaje vulgar /obsceno, discriminatorio y/u
              ofensivo;
            </Text>
            <Text>
              b) todo tipo de ataque personal contra Usuarios y/o terceros,
              incluyendo clientes y personal de BELGA INMOBILIARIA, mediante
              acoso, amenazas, insultos;
            </Text>
            <Text>
              c) todo acto contrario a las leyes, la moral y las buenas
              costumbres;
            </Text>
            <Text>
              d) el uso o envío de virus informáticos, malware, spyware,
              ransomware y/o la realización de todo acto que cause o pudiera
              causar daños o perjuicios al normal funcionamiento de los
              Servicios y/o los Canales, o de los equipos informáticos o
              software de BELGA INMOBILIARIA y/o de cualquier tercero;
            </Text>
            <Text>
              e) todo acto dirigido a enmascarar y/o falsificar o disimular
              direcciones IP, correos electrónicos y/o cualquier otro medio
              técnico de identificación de los Usuarios o sus equipos
              informáticos;
            </Text>
            <Text>
              f) todo acto que viole la privacidad de otros Usuarios, o que
              viole cualquiera de sus derechos bajo la Ley N° 25.326;
            </Text>
            <Text>
              g) el envío de datos personales sin el consentimiento expreso del
              titular de los mismos;
            </Text>
            <Text>
              1.6.4. BELGA INMOBILIARIA no garantiza la disponibilidad y
              continuidad del funcionamiento de los Canales.
            </Text>
            <Text>
              1.6.5. Cada Usuario es único y exclusivo responsable de sus
              manifestaciones, dichos, opiniones y todo acto que realice a
              través de los Canales.
            </Text>

            <Subtitle>2. Datos Personales del Usuario.</Subtitle>
            <Text>
              2.1. Los Usuarios que utilicen los Servicios de BELGA INMOBILIARIA
              garantizan la veracidad, exactitud, vigencia y autenticidad de la
              información facilitada mediante los Canales, y se comprometen a
              mantenerlos debidamente actualizados, informando a BELGA
              INMOBILIARIA sobre cualquier modificación a través de la sección
              “Contacto” disponible en la página principal del Sitio Web.
            </Text>

            <Subtitle>3. Menores de Edad.</Subtitle>
            <Text>
              3.1. Queda prohibida la utilización del Sitio Web y/o de los
              Servicios ofrecidos a través del mismo por personas que carezcan
              de capacidad legal para contratar o menores de edad según la
              legislación aplicable conforme la cláusula 12. En caso que ello
              ocurra, los menores de edad o incapaces deben obtener previamente
              permiso de sus padres, tutores o representantes legales, quienes
              serán considerados responsables de todos los actos realizados por
              las personas a su cargo.
            </Text>
            <Text>
              3.2. Al acceder al Sitio Web y utilizar los Servicios el Usuario
              confirma que es mayor de edad.
            </Text>

            <Subtitle>4. Responsabilidad del Usuario.</Subtitle>
            <Text>
              4.1 El Usuario declara y acepta que el uso del Sitio Web, sus
              Servicios y los contenidos se efectúan bajo su única y exclusiva
              responsabilidad.
            </Text>

            <Subtitle>5. Exclusión de Garantías y de Responsabilidad.</Subtitle>
            <Text>
              5.1. BELGA INMOBILIARIA no garantiza la disponibilidad y
              continuidad del funcionamiento del Sitio Web y de los Servicios
              ofrecidos.
            </Text>
            <Text>
              5.2. BELGA INMOBILIARIA no garantiza que el Sitio Web funcione
              libre de errores o que el Sitio Web y su servidor estén libres de
              virus informáticos u otros mecanismos lesivos.
            </Text>
            <Text>
              5.3. El Sitio Web y los Servicios se suministran tal como están,
              sin garantías de ninguna clase.
            </Text>
            <Text>
              5.4. BELGA INMOBILIARIA no garantiza la exactitud, la veracidad,
              la exhaustividad o la actualización de los contenidos, los
              Servicios, el software, los textos, los gráficos y los vínculos.
            </Text>

            <Subtitle>6. Vínculos a Otros Sitios.</Subtitle>
            <Text>
              6.1 El Sitio Web contiene vínculos a otros sitios de Internet,
              tales como redes sociales asociadas a BELGA INMOBILIARIA.
            </Text>

            <Subtitle>7. Cesión o Uso Comercial No Autorizado.</Subtitle>
            <Text>
              7.1. Usted acepta no ceder, bajo ningún título, sus derechos u
              obligaciones bajo estas Condiciones Generales. Usted también
              acepta no realizar ningún uso comercial no autorizado del Sitio
              Web.
            </Text>
            <Text>
              7.2. Asimismo, el Usuario se compromete a utilizar el Sitio Web y
              los Servicios diligentemente y de conformidad con la ley aplicable
              y vigente y con estas Condiciones Generales.
            </Text>

            <Subtitle>8. Indemnización.</Subtitle>
            <Text>
              Usted acepta mantener indemne a BELGA INMOBILIARIA de y contra
              cualquier cargo, acción o demanda, incluyendo, pero no limitándose
              a, los gastos legales razonables, que resulten del uso que Usted
              haga del Sitio Web, de los Contenidos y de los Servicios.
            </Text>

            <Subtitle>10. General.</Subtitle>
            <Text>
              10.1. BELGA INMOBILIARIA se reserva el derecho a modificar total o
              parcialmente estas Condiciones Generales en cualquier momento. Si
              el Usuario persiste en la utilización de los Servicios y/o el
              Sitio Web, se considerará que ha aceptado implícitamente las
              nuevas Condiciones Generales.
            </Text>
            <Text>
              10.2. En caso de declararse la nulidad de alguna de las cláusulas
              de estas Condiciones Generales, tal nulidad no afectará a la
              validez de las restantes, las cuales mantendrán su plena vigencia
              y efecto.
            </Text>
            <Text>
              10.3. Estas Condiciones Generales constituyen la totalidad del
              acuerdo entre Usted y BELGA INMOBILIARIA respecto del uso del
              Sitio Web.
            </Text>

            <Subtitle>11. Duración y Terminación.</Subtitle>
            <Text>
              11.1 La prestación del Servicio del Sitio Web tiene una duración
              indeterminada. Sin perjuicio de lo anterior, BELGA INMOBILIARIA
              está autorizada para dar por terminada o suspender la prestación
              del Servicio del Sitio Web y/o de cualquiera de los Contenidos en
              cualquier momento.
            </Text>

            <Subtitle>12. LOCALIZACIÓN</Subtitle>
            <Text>12.1. ARGENTINA.</Text>
            <Text>
              12.1.1. BELGA INMOBILIARIA significa Martin Gonzalo Gallegos.,
              CUIT 20-29193213-5, con domicilio en Av. Juramento 2102, Planta
              Baja, Ciudad Autónoma de Buenos Aires.
            </Text>
            <Text>12.1.2. El Sitio Web es www.belga.com.ar.</Text>
            <Text>
              12.1.3. Estas Condiciones Generales se rigen por la las leyes de
              la República Argentina. El Usuario se somete a la jurisdicción de
              los Tribunales Ordinarios de la Ciudad de Buenos Aires, con
              renuncia expresa a cualquier otro fuero y/o jurisdicción.
            </Text>
          </TextWrapper>
        </Container>
      </TerminosContainer>
    </Layout>
  );
};

export default Terminos;
