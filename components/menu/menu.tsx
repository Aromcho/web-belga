import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";


import { Container } from "components/layout";

import { MenuContainer, MenuBrandWrapper, MenuBrand } from "./menu.styles";

export const Menu = observer(() => {
  const {
    rootStore: { userStore },
  } = useStore();

  return (
    <MenuContainer>
      <Container className="align--center menu--container">
        <MenuBrandWrapper>
          <MenuBrand src="./images/brand_red.svg" alt="Belga inmobiliaria" title="Belga inmobiliaria" />
        </MenuBrandWrapper>
      </Container>
    </MenuContainer>
  );
});
