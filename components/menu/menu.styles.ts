import styled from "@emotion/styled";

export const MenuBrand = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  transition: all 0.3s ease-in-out;
`;

export const MenuBrandWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  height: 100%;
  align-items: center;
  background-color: ${(props: any) => props.theme.primary};
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
    ${MenuBrand} {
      opacity: 0.75;
    }
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: transparent;
  align-items: center;
  display: flex;
  .menu--container {
    max-width: 96%;
    @media screen and (max-width: 1100px) {
      max-width: 1000px;
    }
  }
`;
