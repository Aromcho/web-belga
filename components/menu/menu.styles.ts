import styled from "@emotion/styled";

export const BurguerButton = styled.ul`
  width: 65px;
  height: 65px;
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin-left: 40px;
  transition: all 0.3s ease-in-out;
  svg {
    width: 30px;
    height: auto;
    color: ${(props: any) => props.theme.white};
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props: any) => props.theme.white};
    svg {
      color: ${(props: any) => props.theme.black};
    }
  }
`;

export const MenuItem = styled.li`
  width: 100%;
  max-width: 180px;
  align-items: center;
  display: flex;
  margin-right: 30px;
  
  .menu--link {
    width: 100%;
    min-width: 180px;
    height: 100%;
    border-bottom: 2px solid transparent;
    color: ${(props: any) => props.theme.white};
    padding: 10px 0;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    white-space: nowrap;
    &:hover {
      cursor: pointer;
      border-bottom-color: ${(props: any) => props.theme.white};
    }
  }
`;

export const MenuList = styled.ul`
  width: auto;
  align-items: center;
  display: flex;
  margin-left: auto;
`;

export const MenuBrand = styled.img`
  width: 100%;
  max-width: 140px;
  height: auto;
  transition: all 0.3s ease-in-out;
`;

export const MenuBrandWrapper = styled.div`
  width: 280px;
  height: 65px;
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

export const MenuInfoItem = styled.ul`
  width: 100%;
  max-width: 200px;
  height: 100%;
  align-items: center;
  color: ${(props: any) => props.theme.white};
  display: flex;
  font-size: 11px;
  font-weight: 500;
  justify-content: center;
  text-transform: uppercase;
  svg {
    width: 20px;
    height: auto;
    margin-right: 8px;
  }
  .info--link {
    width: 100%;
    height: 100%;
    align-items: center;
    color: ${(props: any) => props.theme.white};
    display: flex;
    font-size: 11px;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    &:hover {
      color: ${(props: any) => props.theme.primary};
    }
  }
`;

export const MenuInfoList = styled.ul`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`;

export const MenuInfo = styled.div`
  width: 100%;
  height: 32px;
  align-items: center;
  background-color: ${(props: any) => props.theme.black};
  display: flex;
  justify-content: flex-end;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: transparent;
  align-items: center;
  display: flex;
  .menu--container {
    max-width: 96%;
    justify-content: space-between;
    @media screen and (max-width: 1100px) {
      max-width: 1000px;
    }
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: transparent;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
`;
