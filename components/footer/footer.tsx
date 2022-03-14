import React from 'react';
import Link from "next/link";

import {
  FooterContainer,
  FooterWrapper,
  FooterTitleText,
  FooterTitle,
  FooterLeft,
  FooterCenter,
  FooterRight,
  FooterInfo,
  FooterInfoBottom,
  SocialList,
  RightInfo,
  LegalText,
  LegalLink,
  Mp,
  MapFooter,
  BrandFooter,
  LeftInfo,
  LeftContact,
  ContactItem,
  LeftLocation,
  LocationItem,
  HeadLocation,
  BodyLocation,
  Loc
} from './footer.styles';

import {
  BelgaIsoIcon,
  FacebookCircleIcon,
  InstaCircleIcon,
  LinkedinCircleIcon,
  LocationIcon,
  MailIcon,
  MessengerCircleIcon,
  TelIcon,
  WhatsappIcon,
  YoutubeCircleIcon
} from 'components/icons';

export interface FooterProps {

}

export const Footer = ({ }: FooterProps) => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLeft>
          <FooterInfo>
            <LeftInfo>
              <FooterTitle>
                <BelgaIsoIcon /> <FooterTitleText>¿Querés contactarnos?</FooterTitleText>
              </FooterTitle>

              <LeftContact>
                <ContactItem><Link href='tel:+541152633393' ><a className='info--link'><TelIcon /> +54 11 5263 3393</a></Link></ContactItem>
                <ContactItem><Link href='https://api.whatsapp.com/send?phone=5491169462894&text=Hola%20Belga!%20%F0%9F%91%8B%20Quisiera%20hacerles%20una%20consulta.' ><a className='info--link' target='_blank'><WhatsappIcon /> +54 11 6946 2894</a></Link></ContactItem>
                <ContactItem><Link href='mailto:info@belga.com.ar' ><a target='_blank' className='info--link'><MailIcon />info@belga.com.ar</a></Link></ContactItem>
              </LeftContact>

              <LeftLocation>
                <LocationItem>
                  <HeadLocation><LocationIcon />Casa Central LA IMPRENTA</HeadLocation>
                  <BodyLocation>
                    <Loc>Gorostiaga 1601</Loc>
                    <Loc>(Esquina Migueletes)</Loc>
                  </BodyLocation>
                </LocationItem>

                <LocationItem>
                  <HeadLocation><LocationIcon />Sucursal BELGRANO C</HeadLocation>
                  <BodyLocation>
                    <Loc>Juramento 2102</Loc>
                    <Loc>(Esquina Arcos)</Loc>
                  </BodyLocation>
                </LocationItem>

                <LocationItem>
                  <HeadLocation><LocationIcon />Sucursal BELGRANO R </HeadLocation>
                  <BodyLocation>
                    <Loc>Superí 1485</Loc>
                    <Loc>(Esquina Av. de los Incas)</Loc>
                  </BodyLocation>
                </LocationItem>
              </LeftLocation>

            </LeftInfo>
          </FooterInfo>
          <FooterInfoBottom>
            <SocialList>
              <Link href='https://www.instagram.com/belgainmobiliaria/' ><a className='social--link' target='_blank'><InstaCircleIcon /></a></Link>
              <Link href='https://www.facebook.com/inmobiliariabelga/' ><a className='social--link' target='_blank'><FacebookCircleIcon /></a></Link>
              <Link href='https://www.youtube.com/channel/UCZ2ZZIQeRORMAUTS0mLDEfg/featured' ><a className='social--link' target='_blank'><YoutubeCircleIcon /></a></Link>
              <Link href='https://ar.linkedin.com/company/belga-inmobiliaria' ><a className='social--link' target='_blank'><LinkedinCircleIcon /></a></Link>
              <Link href='https://www.facebook.com/messages/t/inmobiliariabelga' ><a className='social--link' target='_blank'><MessengerCircleIcon /></a></Link>
            </SocialList>
          </FooterInfoBottom>
        </FooterLeft>

        <FooterCenter>
          <FooterInfo>
            <MapFooter>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13142.89626707307!2d-58.4538193!3d-34.5605412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7a96ad3b6c0351f2!2sBelga%20Inmobiliaria!5e0!3m2!1ses-419!2sar!4v1647200525779!5m2!1ses-419!2sar" loading="lazy" />
            </MapFooter>
          </FooterInfo>
          <FooterInfoBottom>
            <BrandFooter src="./images/brand_red.svg" alt="Belga inmobiliaria" title="Belga inmobiliaria" />
          </FooterInfoBottom>
        </FooterCenter>

        <FooterRight>
          <FooterInfo>
            <RightInfo>
              <FooterTitle className='black'>
                <BelgaIsoIcon /> <FooterTitleText>¿Cómo te podemos ayudar?</FooterTitleText>
              </FooterTitle>
            </RightInfo>
          </FooterInfo>
          <FooterInfoBottom>
            <RightInfo>
              <LegalText>*Para los casos de alquiler de vivienda, el monto máximo de comisión que se le puede requerir a los propietarios será el equivalente al cuatro con quince centésimos por ciento (4,15%) del valor total del respectivo contrato. Se encuentra prohibido cobrar comisiones inmobiliarias y gastos de gestoría de informes a los inquilinos que sean personas físicas.</LegalText>
              <LegalLink><Link href='#'><a>Términos y Condiciones</a></Link></LegalLink>
              <Mp>CUCICBA MN 5111 CMCPSI Mat. 6528 </Mp>
            </RightInfo>
          </FooterInfoBottom>
        </FooterRight>

      </FooterWrapper>
    </FooterContainer>
  );
};
