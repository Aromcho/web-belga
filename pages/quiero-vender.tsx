import React from "react";
import Link from "next/link";
import { PATHS } from "config";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import { Layout, Container } from "components/layout";
import { VenderForm } from "components/forms/venderform";
import { ArrowBackIcon } from "components/icons";

import {
  QuieroVenderContainer,
  BackWrapper,
  FormWrapper,
} from "components/pages/quieroVender.styles";
import { classes, getWindowDimensions } from "helpers";

const QuieroVender = observer(() => {
  const {
    rootStore: { userStore },
  } = useStore();

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
});

export default QuieroVender;
