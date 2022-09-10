import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { PATHS } from "config";

import { Container, Layout } from "components/layout";

const Button = dynamic<any>(() => import("components/button").then((mod) => mod.Button))
const ArrowBackIcon = dynamic<any>(() => import("components/icons").then((mod) => mod.ArrowBackIcon))

import {
  ErrorContainer,
  RowContent,
  WrapperContent,
  SquaresWrapper,
  Square,
  ButtonWrapper,
  TopText,
  TextWrapper,
  Text,
  WrappperImage,
  Image,
} from "components/pages/error404.styles";

const Error404 = () => {
  return (
    <Layout menuTheme="light">
      <ErrorContainer>
        <Container>
          <RowContent className="bold">
            <Link href={PATHS.ROOT} passHref>
              <a>
                <ArrowBackIcon className="left" /> VOLVER AL INICIO
              </a>
            </Link>
          </RowContent>
        </Container>

        <Container>
          <WrapperContent>
            <WrappperImage>
              <Image src="/images/404_image.svg" />
            </WrappperImage>
            <SquaresWrapper>
              <Square className="red" />
              <Square className="black" />

              <TextWrapper>
                <TopText>Ups, no encontramos esta propiedad pero...</TopText>
                <Text>Lo que buscás está a la vuelta de la esquina.</Text>
              </TextWrapper>

              <ButtonWrapper>
                <Button
                  className="button--square"
                  text="Encontralo Acá"
                  type="secondary shine"
                  link={PATHS.VENTA}
                />
              </ButtonWrapper>
            </SquaresWrapper>
          </WrapperContent>
        </Container>
      </ErrorContainer>
    </Layout>
  );
};

export default Error404;
