import React from "react";
import Link from "next/link";
import { PATHS, SOCIAL } from "config";
import dynamic from "next/dynamic";

import { Container, Layout } from "components/layout";
const Button = dynamic<any>(() => import("components/button").then((mod) => mod.Button))
const ArrowBackIcon = dynamic<any>(() => import("components/icons").then((mod) => mod.ArrowBackIcon))

import {
  ErrorContainer,
  RowContent,
  WrapperContent,
  LeftContent,
  Img,
  RightContent,
  RightContentWrapper,
  TopText,
  Text,
  Separator,
} from "components/pages/error500.styles";

const Error500 = () => {
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
            <LeftContent>
              <Img src="/images/500_image.svg" />
            </LeftContent>
            <RightContent>
              <RightContentWrapper>
                <TopText>
                  Estamos trabajando para que puedas continuar con tu búsqueda.
                </TopText>
                <Separator className="black" />
                <Text>Mientras tanto...</Text>
                <Separator className="red" />
                <Button
                  className="button--square"
                  text="Ver instagram"
                  type="secondary shine"
                  link={SOCIAL.INSTA}
                />
              </RightContentWrapper>
            </RightContent>
          </WrapperContent>
        </Container>
      </ErrorContainer>

    </Layout>
  );
};

export default Error500;
