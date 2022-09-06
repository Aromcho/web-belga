import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { classes, getWindowDimensions } from "helpers";
import { PATHS, SOCIAL } from "config";

import { MapProps } from "components/map/map";
const DynamicMap = dynamic<MapProps>(
  () => import("components/map").then((mod) => mod.Map),
  { ssr: false }
);

import { TitleWithIcon } from "components/titlewithicon";
import { ContactForm } from "components/forms/contactform";
import { BackToTop } from "components/backtotop";
import {
  FacebookCircleIcon,
  InstaCircleIcon,
  LinkedinCircleIcon,
  LocationIcon,
  MailIcon,
  MessengerCircleIcon,
  TelIcon,
  WhatsappIcon,
  YoutubeCircleIcon,
} from "components/icons";

import {
  FooterContainer,
  BackContainer,
  FooterWrapper,
  FooterLeft,
  FooterCenter,
  FooterRight,
  FooterInfo,
  FooterInfoBottom,
  BrandMobileWrapper,
  SocialList,
  RightInfo,
  RightInfoMobile,
  SocialListMobileWrapper,
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
  Loc,
} from "./footer.styles";

export interface FooterProps {
  small?: boolean;
  id?: string;
  backToTopFooter?: boolean;
}

export const Footer = ({ small = true, id, backToTopFooter }: FooterProps) => {
  const router = useRouter();

  const legalInfo = {
    text: "*Para los casos de alquiler de vivienda, el monto máximo de comisión que se le puede requerir a los propietarios será el equivalente al cuatro con quince centésimos por ciento (4,15%) del valor total del respectivo contrato. Se encuentra prohibido cobrar comisiones inmobiliarias y gastos de gestoría de informes a los inquilinos que sean personas físicas.",
    linkText: "Términos y Condiciones",
    link: `${PATHS.TERMINOS}`,
    mp: "CUCICBA Mat. 5111 CMCPSI Mat. 6528",
  };

  const socialInfo = [
    {
      link: `${SOCIAL.INSTA}`,
      icon: <InstaCircleIcon />,
    },
    {
      link: `${SOCIAL.FACEBOOK}`,
      icon: <FacebookCircleIcon />,
    },
    {
      link: `${SOCIAL.YOUTUBE}`,
      icon: <YoutubeCircleIcon />,
    },
    {
      link: `${SOCIAL.LINKEDIN}`,
      icon: <LinkedinCircleIcon />,
    },
    {
      link: `${SOCIAL.MESSENGER}`,
      icon: <MessengerCircleIcon />,
    },
  ];

  const [high, setHighB] = React.useState(0);
  const [center, setCenter] = React.useState({
    lat: -34.5608544,
    lon: -58.4557807,
    zoom: 13,
  });

  const setHigh = (n: number) => {
    setHighB(n);
    const item = data.find((item) => item.id === n);
    // if(item) setCenter(item?.loc as any || { lat: -34.5608544, lon: -58.4557807, zoom: 13})
    if (item) setCenter(item?.loc as any);
  };

  const data = [
    {
      id: 1,
      name: "Casa Central LA IMPRENTA",
      direction: "Gorostiaga 1601",
      direction_b: "(Esquina Migueletes)",
      loc: { lon: -58.4364415, lat: -34.5652519, zoom: 15.5 },
    },
    {
      id: 2,
      name: "Sucursal BELGRANO C",
      direction: "Juramento 2102",
      direction_b: "(Esquina Arcos)",
      loc: { lat: -34.56051641836724, lon: -58.45384234503877, zoom: 15.5 },
    },
    {
      id: 3,
      name: "Sucursal BELGRANO R",
      direction: "Superí 1485",
      direction_b: "(Esquina Av. de los Incas)",
      loc: { lat: -34.5735786974359, lon: -58.46109912564103, zoom: 15.5 },
    },
  ];

  /* Handle resize screen */
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );
  React.useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Handle height back to top container */
  const [BackContainerHeight, setBackContainerHeight] = useState();
  const footerWrapper = useRef<any>();

  React.useEffect(() => {
    setBackContainerHeight(footerWrapper?.current?.offsetHeight);
  }, [windowDimensions]);

  return (
    <FooterContainer className={classes({ small })} id={id}>
      {backToTopFooter && (
        <BackContainer style={{ height: BackContainerHeight }}>
          <BackToTop color="yellow" />
        </BackContainer>
      )}
      <FooterWrapper ref={footerWrapper}>
        <FooterLeft>
          <FooterInfo>
            <LeftInfo>
              <TitleWithIcon text="¿Querés contactarnos?" />

              <LeftContact>
                <ContactItem>
                  <Link href="tel:+541152633393">
                    <a className="info--link">
                      <TelIcon /> +54 11 5263 3393
                    </a>
                  </Link>
                </ContactItem>
                <ContactItem>
                  <Link href="https://api.whatsapp.com/send?phone=5491152633393&text=Hola%20Belga!%20%F0%9F%91%8B%20Quisiera%20hacerles%20una%20consulta.">
                    <a className="info--link" target="_blank">
                      <WhatsappIcon /> +54 11 5263 3393
                    </a>
                  </Link>
                </ContactItem>
                <ContactItem>
                  <Link href="mailto:info@belga.com.ar">
                    <a target="_blank" className="info--link mail">
                      <MailIcon />
                      info@belga.com.ar
                    </a>
                  </Link>
                </ContactItem>
              </LeftContact>

              <LeftLocation>
                {data.map(item => (
                  <LocationItem
                    key={item.id}
                    onMouseEnter={() => setHigh(item.id)}
                    onMouseLeave={() => setHigh(0)}
                  >
                    <HeadLocation>
                      <LocationIcon />
                      {item.name}
                    </HeadLocation>
                    <BodyLocation>
                      <Loc>{item.direction}</Loc>
                      <Loc>{item.direction_b}</Loc>
                    </BodyLocation>
                  </LocationItem>
                ))}
              </LeftLocation>
            </LeftInfo>
          </FooterInfo>
          <FooterInfoBottom>
            <SocialList>
              {socialInfo.map((i: any, k: number) => (
                <Link href={`${i?.link.toString()}`} key={k}>
                  <a className="social--link" target="_blank">
                    {i.icon}
                  </a>
                </Link>
              ))}
            </SocialList>
          </FooterInfoBottom>
        </FooterLeft>

        <FooterCenter>
          <FooterInfo>
            <MapFooter>
              <DynamicMap
                center={center}
                markers={data.map((item) => ({
                  ...item.loc,
                  id: item.id.toString(),
                  high: high === item.id,
                }))}
                zoom={center.zoom}
              />
            </MapFooter>
          </FooterInfo>
          <FooterInfoBottom>
            <BrandFooter
              src="/images/brand_red.svg"
              alt="Belga inmobiliaria"
              title="Belga inmobiliaria"
              loading="lazy"
            />
            <SocialList className="social--list-mobile">
              {socialInfo.map((i: any, k: number) => {
                return (
                  <Link href={`${i?.link.toString()}`} key={k}>
                    <a className="social--link" target="_blank">
                      {i.icon}
                    </a>
                  </Link>
                );
              })}
            </SocialList>
          </FooterInfoBottom>
        </FooterCenter>

        <FooterRight>
          <FooterInfo>
            <RightInfo>
              <ContactForm className="contact--form-footer" />
            </RightInfo>
          </FooterInfo>
          <FooterInfoBottom>
            <RightInfo>
              <LegalText>{legalInfo.text}</LegalText>
              <LegalLink>
                <Link href={legalInfo.link}>
                  <a>{legalInfo.linkText}</a>
                </Link>
              </LegalLink>
              <Mp>{legalInfo.mp}</Mp>
            </RightInfo>
          </FooterInfoBottom>
        </FooterRight>

        <RightInfoMobile>
          <LegalText>{legalInfo.text}</LegalText>
          <LegalLink>
            <Link href={legalInfo.link}>
              <a>{legalInfo.linkText}</a>
            </Link>
          </LegalLink>
          <Mp>{legalInfo.mp}</Mp>
        </RightInfoMobile>

        <FooterInfoBottom className="brand--mobile">
          <SocialListMobileWrapper>
            <SocialList>
              {socialInfo.map((i: any, k: number) => {
                return (
                  <Link href={`${i?.link.toString()}`} key={k}>
                    <a className="social--link" target="_blank">
                      {i.icon}
                    </a>
                  </Link>
                );
              })}
            </SocialList>
          </SocialListMobileWrapper>
          <BrandMobileWrapper>
            <BrandFooter
              src="/images/brand_red.svg"
              alt="Belga inmobiliaria"
              title="Belga inmobiliaria"
              loading="lazy"
            />
          </BrandMobileWrapper>
        </FooterInfoBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};
