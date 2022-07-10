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


const QuieroVender = observer(() => {
  const {
    rootStore: { userStore },
  } = useStore();

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
            <VenderForm className="full" />
          </FormWrapper>
        </Container>
      </QuieroVenderContainer>
    </Layout>
  );
});

export default QuieroVender;
