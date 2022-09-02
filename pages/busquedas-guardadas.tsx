import React, { useEffect, useState } from "react";
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

  const [saveSearch, setSaveSearch] = useState<number>(0);
  useEffect(() => {
    setSaveSearch(userStore?.searchs?.length);
  }, [userStore, saveSearch]);
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
          {saveSearch === 0 && (
            <Status
              img="/images/empty_img_plus.gif"
              text="Tené a mano tus búsquedas."
              textButton="AGREGÁ TUS BÚSQUEDAS"
              buttonStyle="secondary shine"
              linkButton={PATHS.VENTA}
            />
          )}

          {saveSearch > 0 && (
            <>
              <Container>
                <Title>TUS BÚSQUEDAS GUARDADAS</Title>
              </Container>

              <BusquedasList>
                {userStore.searchs?.map((item, key) => (
                  <BusquedaCard
                    key={key}
                    search={item}
                    onRemove={() => {
                      userStore.removeSearch(item),
                        setSaveSearch(saveSearch > 0 ? saveSearch - 1 : 0);
                    }}
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
