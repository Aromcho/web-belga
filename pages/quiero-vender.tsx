import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { PATHS } from "config";

import { Layout, Container } from "components/layout";
import { ArrowBackIcon } from "components/icons";
const VenderForm = dynamic<any>(() => import("components/forms/venderform").then((mod) => mod.VenderForm))

import {
  QuieroVenderContainer,
  BackWrapper,
  FormWrapper,
} from "components/pages/quieroVender.styles";
import { getWindowDimensions } from "helpers";

const QuieroVender = () => {

  /* Handle resize screen */
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );
  React.useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isMobile = windowDimensions && windowDimensions <= 1100;

  return (
    <Layout>
      <QuieroVenderContainer>
        <Container>
          <BackWrapper>
            <Link href={PATHS.ROOT}>
              <a className="back--link">
                <ArrowBackIcon />
                Volver al inicio
              </a>
            </Link>
          </BackWrapper>
        </Container>
        <Container>
          <FormWrapper>
            <VenderForm className={isMobile ? "" : "full"} />
          </FormWrapper>
        </Container>
      </QuieroVenderContainer>
    </Layout>
  );
};

export default QuieroVender;
