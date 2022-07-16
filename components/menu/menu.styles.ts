import styled from "@emotion/styled";

export const LinkText = styled.span`
  width: auto;
  max-width: 190px;
  height: 30px;
  align-items: center;
  border-bottom: 2px solid transparent;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  transition: all 0.3s ease-in-out;
  position: relative;
  @media screen and (max-width: 840px) {
    font-size: 18px;
    white-space: nowrap;
  }
`;

export const UnderlineLinkBurger = styled.div`
  width: 0;
  height: 2px;
  background-color: ${(props: any) => props.theme.black};
  transition: width 0.3s ease-in-out;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const BurgerMenuItem = styled.div`
  width: 100%;
  max-width: 190px;
  height: 30px;
  margin-bottom: 12px;
  @media screen and (max-width: 840px) {
    max-width: 100%;
    margin-bottom: 30px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  &:hover {
    ${LinkText} {
      ${UnderlineLinkBurger} {
        width: 100%;
      }
    }
  }
  .burger--menu-link {
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    color: ${(props: any) => props.theme.black};
    text-transform: uppercase;
    svg {
      width: 25px;
      height: auto;
      display: block;
      margin-right: 20px;
      @media screen and (max-width: 840px) {
        width: 35px;
      }
      &.heart--icon {
        transition: all 0.3s ease-in-out;
        path {
          transition: all 0.3s ease-in-out;
          fill: transparent;
          stroke: ${(props: any) => props.theme.black};
        }
      }
    }
  }
  &.emprendimientos--link {
    display: none;
    @media screen and (max-width: 840px) {
      display: flex;
    }
  }
`;

export const BurgerMenuList = styled.div`
  width: 100%;
  max-width: 190px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 auto;
  @media screen and (max-width: 840px) {
    max-width: 260px;
    height: auto;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 40px 0 0;
  }
`;

export const Line = styled.div`
  width: 100%;
  max-width: 30px;
  height: 2px;
  background-color: ${(props: any) => props.theme.white};
  border-radius: 100px;
  transition: all 0.3s ease-in-out;
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(0);
  position: absolute;
  top: 50%;
  left: 50%;
  &:first-of-type {
    transform-origin: top left;
    transform: translate(-50%, -60%) rotate(0);
    top: 22px;
  }
  &:nth-of-type(2) {
    transform-origin: center;
    transform: translate(-50%, -50%) rotate(0);
  }
  &:last-of-type {
    top: 45px;
  }
  @media screen and (max-width: 840px) {
    max-width: 40px;
    &:first-of-type {
      top: 15px;
    }
    &:last-of-type {
      top: 42px;
    }
  }
`;

export const BurgerCrossCustom = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  &.burger {
    flex-flow: column;
    &:hover {
      ${Line} {
        background-color: ${(props: any) => props.theme.black};
        @media screen and (max-width: 840px) {
          background-color: ${(props: any) => props.theme.white};
        }
      }
    }
  }
  &.cross {
    background-color: ${(props: any) => props.theme.white};
    ${Line} {
      background-color: ${(props: any) => props.theme.black};
      transform: translate(-50%, -50%) rotate(45deg);
      position: absolute;
      top: 50%;
      left: 50%;
      &:first-of-type {
        transform-origin: top;
      }
      &:nth-of-type(2) {
        transform-origin: center;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &:last-of-type {
        opacity: 0;
        top: 45px;
        transform: translate(-50%, -50%) rotate(0);
      }
    }
  }
`;

export const BurgerMenu = styled.div`
  width: 360px;
  height: 230px;
  align-items: center;
  display: flex;
  background-color: ${(props: any) => props.theme.white};
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  top: 97px;
  right: 0;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
  @media screen and (max-width: 992px) {
    top: 64px;
  }
  @media screen and (max-width: 840px) {
    width: 100%;
    height: calc(100vh - 55px);
    align-items: flex-start;
    background-color: ${(props: any) => props.theme.white};
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    opacity: 1;
    overflow-x: hidden;
    overflow-y: auto;
    transform: translateX(100%);
    transition: all 0.4s cubic-bezier(0.74, 0.04, 0.24, 1.04);
    position: fixed;
    top: 55px;
    right: 0;
    bottom: 0;
    &.active {
      pointer-events: all;
      transform: translateX(0);
    }
  }

  .comprar--button-mobile {
    width: 90%;
    max-width: 300px;
    display: none;
    flex: 0 0 auto;
    margin: 50px auto 30px;
    @media screen and (max-width: 840px) {
      display: flex;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  svg {
    width: 30px;
    height: auto;
    color: ${(props: any) => props.theme.white};
    opacity: 0;
    transition: all 0.3s ease-in-out;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    &.active {
      opacity: 1;
    }
    @media screen and (max-width: 840px) {
      width: 40px;
    }
  }
`;

export const BurgerButton = styled.ul`
  width: 65px;
  height: 65px;
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin-left: 40px;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 840px) {
    width: 95px;
    height: 55px;
    margin-left: 0;
  }
  &:hover,
  &.active {
    cursor: pointer;
    background-color: ${(props: any) => props.theme.white};
    @media screen and (max-width: 992px) {
      background-color: transparent;
    }
    svg {
      color: ${(props: any) => props.theme.black};
      @media screen and (max-width: 992px) {
        color: ${(props: any) => props.theme.white};
      }
    }
  }
`;

export const UnderlineLink = styled.div`
  width: 0;
  height: 2px;
  background-color: ${(props: any) => props.theme.white};
  transition: width 0.3s ease-in-out;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const MenuItem = styled.li`
  width: 100%;
  max-width: 180px;
  align-items: center;
  display: flex;
  margin-right: 40px;
  .menu--link {
    height: 100%;
    color: ${(props: any) => props.theme.white};
    padding: 12px 0;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    white-space: nowrap;
    position: relative;
    &:hover {
      cursor: pointer;
      ${UnderlineLink} {
        width: 100%;
      }
    }
  }
`;

export const MenuList = styled.ul`
  width: 70%;
  align-items: center;
  display: flex;
  margin-left: auto;
  justify-content: space-between;
  padding-left: 10px;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const MenuBrand = styled.img`
  width: 100%;
  max-width: 140px;
  height: auto;
  transition: all 0.4s cubic-bezier(0.74, 0.04, 0.24, 1.04);
  opacity: 1;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  @media screen and (max-width: 840px) {
    max-width: 115px;
  }
`;

export const MenuBrandWrapper = styled.div`
  width: 280px;
  height: 65px;
  align-items: center;
  background-color: ${(props: any) => props.theme.primary};
  display: flex;
  justify-content: center;
  margin-left: 25px;
  transition: all 0.4s cubic-bezier(0.74, 0.04, 0.24, 1.04);
  position: relative;
  @media screen and (max-width: 840px) {
    max-width: 180px;
    height: 55px;
  }
  &:hover {
    cursor: pointer;
    ${MenuBrand} {
      opacity: 0.65;
    }
  }
  .isobrand--img {
    width: 100%;
    max-width: 40px;
    height: auto;
    color: ${(props: any) => props.theme.secondary};
    transition: all 0.4s cubic-bezier(0.74, 0.04, 0.24, 1.04);
    opacity: 0;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
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
      filter: drop-shadow(0 0 3px ${(props: any) => props.theme.white}80);
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
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.25);
`;

export const MenuInfo = styled.div`
  width: 100%;
  height: 32px;
  align-items: center;
  background-color: ${(props: any) => props.theme.black};
  display: flex;
  justify-content: flex-end;
  z-index: 4;
  position: relative;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 65px;
  align-items: center;
  background-color: transparent;
  display: flex;
  transition: all 0.4s cubic-bezier(0.74, 0.04, 0.24, 1.04);
  z-index: 3;
  position: initial;
  @media screen and (max-width: 840px) {
    height: 55px;
  }
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
  transition: all 0.4s cubic-bezier(0.74, 0.04, 0.24, 1.04);
  z-index: 99999999;
  position: fixed;
  top: 0;
  left: 0;
  &.sticky {
    top: -32px;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 992px) {
      top: 0;
    }
    ${MenuWrapper} {
      height: 55px;
      background-color: ${(props: any) => props.theme.white};
      ${BurgerButton} {
        height: 55px;
        ${IconWrapper} {
          ${BurgerCrossCustom} {
            ${Line} {
              background-color: ${(props: any) => props.theme.black};
            }
          }
          svg {
            color: ${(props: any) => props.theme.black};
          }
        }
      }
      ${BurgerMenu} {
        top: 86px;
        @media screen and (max-width: 992px) {
          z-index: 9999991;
          top: 55px;
        }
      }
    }
    ${MenuBrandWrapper} {
      height: 55px;
      @media screen and (max-width: 840px) {
        width: 120px;
      }
      ${MenuBrand} {
        opacity: 0;
      }
      .isobrand--img {
        opacity: 1;
      }
      &:hover {
        .isobrand--img {
          opacity: 0.65;
        }
      }
    }
    ${MenuInfoList} {
      box-shadow: none;
    }
    ${MenuList} {
      ${MenuItem} {
        .menu--link {
          color: ${(props: any) => props.theme.black};
          padding: 5px 0;
          &:hover {
            border-bottom-color: ${(props: any) => props.theme.black};
          }
        }
      }

      .button--menu {
        color: ${(props: any) => props.theme.black};
        border-color: ${(props: any) => props.theme.black};
        &:hover {
          border-color: ${(props: any) => props.theme.secondary};
          color: ${(props: any) => props.theme.white};
        }
      }
    }
  }

  &.light {
    ${MenuWrapper} {
      background-color: ${(props: any) => props.theme.white};
      box-shadow: 0px 7px 29px -1px rgba(0, 0, 0, 0.1);
      ${BurgerButton} {
        ${IconWrapper} {
          svg {
            color: ${(props: any) => props.theme.black};
          }
        }
      }
    }
    ${MenuList} {
      ${MenuItem} {
        .menu--link {
          color: ${(props: any) => props.theme.black};
          &:hover {
            border-bottom-color: ${(props: any) => props.theme.black};
          }
        }
      }

      .button--menu {
        color: ${(props: any) => props.theme.black};
        border-color: ${(props: any) => props.theme.black};
        &:hover {
          border-color: ${(props: any) => props.theme.secondary};
          color: ${(props: any) => props.theme.white};
        }
      }
    }
  }

  &.dark {
    ${MenuWrapper} {
      background-color: ${(props: any) => props.theme.black};
      box-shadow: 0px 7px 29px -1px rgba(0, 0, 0, 0.1);
      ${BurgerButton} {
        ${IconWrapper} {
          ${BurgerCrossCustom} {
            ${Line} {
              background-color: ${(props: any) => props.theme.white};
            }
          }
          svg {
            color: ${(props: any) => props.theme.white};
          }
        }
        &:hover,
        &.active {
          ${IconWrapper} {
            svg {
              color: ${(props: any) => props.theme.black};
            }
          }
        }
      }
    }
    ${MenuList} {
      ${MenuItem} {
        .menu--link {
          color: ${(props: any) => props.theme.white};
          &:hover {
            border-bottom-color: ${(props: any) => props.theme.white};
          }
        }
      }

      .button--menu {
        color: ${(props: any) => props.theme.white};
        border-color: ${(props: any) => props.theme.white};
        &:hover {
          border-color: ${(props: any) => props.theme.secondary};
          color: ${(props: any) => props.theme.white};
        }
      }
    }
    ${MenuInfo} {
      background-color: ${(props: any) => props.theme.white};
      ${MenuInfoItem} {
        color: ${(props: any) => props.theme.black};
        .info--link {
          color: ${(props: any) => props.theme.black};
          &:hover {
            filter: drop-shadow(
              30px 10px 4px ${(props: any) => props.theme.white}
            );
          }
        }
      }
    }
  }
`;
