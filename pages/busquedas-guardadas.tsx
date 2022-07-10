import React from "react";
import Link from "next/link";
import { PATHS } from "config";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import { Layout, Container } from "components/layout";
import { ArrowBackIcon } from "components/icons";
import { ContactForm } from "components/forms/contactform";
import {
  BackWrapper,
  BusquedasContainer,
  FormWrapper,
  Title,
} from "components/pages/busquedasGuardadas.styles";

const BusquedasGuardadas = observer(() => {
  const {
    rootStore: { userStore },
  } = useStore();

  return (
    <Layout>
      <BusquedasContainer>
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
          <Title>TUS BÚSQUEDAS GUARDADAS</Title>
          <FormWrapper>
            <ContactForm className="full" />
          </FormWrapper>
        </Container>
      </BusquedasContainer>
    </Layout>
  );
});

export default BusquedasGuardadas;
