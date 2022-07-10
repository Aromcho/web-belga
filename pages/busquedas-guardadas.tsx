import React from "react";
import Link from "next/link";
import { PATHS } from "config";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";

import { Layout, Container } from "components/layout";
import { ArrowBackIcon } from "components/icons";
import { ContactForm } from "components/forms/contactform";
import { Status } from "components/status";

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

  const [status, setStatus] = React.useState<string>("finish");

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

          {status === "loading" && <Status text="cargando..." />}
          {status === "empty" && (
            <Status
              text="No posees busquedas guardadas"
              textButton="Ver propiedades"
              buttonStyle="secondary"
              linkButton={PATHS.VENTA}
            />
          )}
          {status === "finish" && <div>algo</div>}

          <FormWrapper>
            <ContactForm className="full" />
          </FormWrapper>
        </Container>
      </BusquedasContainer>
    </Layout>
  );
});

export default BusquedasGuardadas;
