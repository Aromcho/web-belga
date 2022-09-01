import React from "react";
import Link from "next/link";
import { PATHS } from "config";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";

import { Layout, Container } from "components/layout";
import { ArrowBackIcon } from "components/icons";
import { ContactForm } from "components/forms/contactform";
import { Status } from "components/status";
import { BusquedaCard } from "components/busquedacard";

import {
  BackWrapper,
  BusquedasContainer,
  FormWrapper,
  Title,
  BusquedasList,
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
          {userStore.searchs.length === 0 && (
            <Status
              img="/images/empty_img_plus.gif"
              text="Tené a mano tus búsquedas."
              textButton="AGREGÁ TUS BÚSQUEDAS"
              buttonStyle="secondary shine"
              linkButton={PATHS.VENTA}
            />
          )}

          {userStore.searchs.length > 0 && (
            <>
              <Container>
                <Title>TUS BÚSQUEDAS GUARDADAS</Title>
              </Container>

              <BusquedasList>
                {userStore.searchs?.map((item) => (
                  <BusquedaCard
                    search={item}
                    onRemove={() => userStore.removeSearch(item)}
                  />
                ))}
              </BusquedasList>

              <FormWrapper>
                <ContactForm full />
              </FormWrapper>
            </>
          )}
        </Container>
      </BusquedasContainer>
    </Layout>
  );
});

export default BusquedasGuardadas;
