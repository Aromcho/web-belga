import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { classes, getWindowDimensions } from "helpers";

import { MapProps } from "components/map/map";
const DynamicMap = dynamic<MapProps>(
  () => import("components/map").then((mod) => mod.Map),
  { ssr: false }
);

import { TitleWithIcon } from "components/titlewithicon";
import { ContactForm } from "components/forms/contactform";
import { BackToTop } from "components/backtotop";

import {
  FooterContainer,
  BackContainer,
  FooterWrapper,
  FooterLeft,
  FooterCenter,
  FooterRight,
  FooterInfo,
  FooterInfoBottom,
  SocialList,
  RightInfo,
  RightInfoMobile,
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
  YoutubeCircleIcon,
} from "components/icons";

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
    link: "#",
    mp: "CUCICBA MN 5111 CMCPSI MAT. 6528",
  };

  const socialInfo = [
    {
      link: "https://www.instagram.com/belgainmobiliaria/",
      icon: <InstaCircleIcon />,
    },
    {
      link: "https://www.facebook.com/inmobiliariabelga/",
      icon: <FacebookCircleIcon />,
    },
    {
      link: "https://www.youtube.com/channel/UCZ2ZZIQeRORMAUTS0mLDEfg/featured",
      icon: <YoutubeCircleIcon />,
    },
    {
      link: "https://ar.linkedin.com/company/belga-inmobiliaria",
      icon: <LinkedinCircleIcon />,
    },
    {
      link: "https://m.me/inmobiliariabelga",
      icon: <MessengerCircleIcon />,
    },
  ];

  const [high, setHigh] = React.useState(0);

  const data = [
    {
      id: 1,
      name: "Casa Central LA IMPRENTA",
      direction: "Gorostiaga 1601",
      direction_b: "(Esquina Migueletes)",
      loc: { lon: -58.4364606, lat: -34.5651921 },
    },
    {
      id: 2,
      name: "Sucursal BELGRANO C",
      direction: "Juramento 2102",
      direction_b: "(Esquina Arcos)",
      loc: { lat: -34.5608544, lon: -58.4557807 },
    },
    {
      id: 3,
      name: "Sucursal BELGRANO R",
      direction: "Superí 1485",
      direction_b: "(Esquina Av. de los Incas)",
      loc: { lat: -34.5735002, lon: -58.4634575 },
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
                  <Link href="https://api.whatsapp.com/send?phone=5491169462894&text=Hola%20Belga!%20%F0%9F%91%8B%20Quisiera%20hacerles%20una%20consulta.">
                    <a className="info--link" target="_blank">
                      <WhatsappIcon /> +54 11 6946 2894
                    </a>
                  </Link>
                </ContactItem>
                <ContactItem>
                  <Link href="mailto:info@belga.com.ar">
                    <a target="_blank" className="info--link">
                      <MailIcon />
                      info@belga.com.ar
                    </a>
                  </Link>
                </ContactItem>
              </LeftContact>

              <LeftLocation>
                {data.map((item) => (
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
                center={{ lat: -34.5608544, lon: -58.4557807 }}
                markers={data.map((item) => ({
                  ...item.loc,
                  id: item.id.toString(),
                  high: high === item.id,
                }))}
                zoom={13}
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
      </FooterWrapper>
    </FooterContainer>
  );
};
