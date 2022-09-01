import React from "react";
import Link from "next/link";
import { PATHS } from "config";

import { Container } from "components/layout";
import { Button } from "components/button";
import { ArrowBackIcon } from "components/icons";

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
  );
};

export default Error404;
