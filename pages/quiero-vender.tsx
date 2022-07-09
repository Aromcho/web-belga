import React from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import { Layout, Container } from "components/layout";
import { ContactForm } from "components/contactform";
import { ArrowBackIcon } from "components/icons";
import { PATHS } from "config";

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
            <Link href={PATHS.EMPRENDIMIENTOS}>
              <a className="back--link">
                <ArrowBackIcon />
                Volver al inicio
              </a>
            </Link>
          </BackWrapper>
        </Container>
        <Container>
          <FormWrapper>
            <ContactForm className="full" />
          </FormWrapper>
        </Container>
      </QuieroVenderContainer>
    </Layout>
  );
});

export default QuieroVender;
