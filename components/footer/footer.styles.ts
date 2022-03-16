import styled from "@emotion/styled";

export const FooterTitleText = styled.div`
  width: 100%;
  max-width: 280px;
  height: 42px;
  align-items: center;
  border: 2px solid ${(props: any) => props.theme.white};
  border-radius: 0 5px 5px 5px;
  color: ${(props: any) => props.theme.white};
  display: flex;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  white-space: nowrap;
`;

export const FooterTitle = styled.div`
  display: flex;
  justify-content: center;
  svg {
    width: 30px;
    height: auto;
    color: ${(props: any) => props.theme.white};
    display: block;
    margin-right: 10px;
    position: relative;
    top: -5px;
  }
  &.black {
    svg {
      color: ${(props: any) => props.theme.black};
    }
    ${FooterTitleText} {
      border-color: ${(props: any) => props.theme.black};
      color: ${(props: any) => props.theme.black};
    }
  }
`;

export const FooterInfo = styled.div`
  width: 100%;
  max-width: 450px;
  height: auto;
  min-height: 700px;
  padding-top: 80px;
  @media screen and (max-width: 1600px) {
    max-width: 100%;
  }
`;

export const FooterInfoBottom = styled.div`
  width: 100%;
  max-width: 450px;
  height: auto;
  min-height: 200px;
  @media screen and (max-width: 1600px) {
    max-width: 100%;
  }
`;

export const LegalLink = styled.div`
  margin-bottom: 20px;
  a {
    color: ${(props: any) => props.theme.white};
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${(props: any) => props.theme.primary};
    }
  }
`;

export const Mp = styled.div`
  font-size: 12px;
  color: ${(props: any) => props.theme.white};
  text-transform: uppercase;
`;

export const LegalText = styled.div`
  font-size: 10px;
  color: ${(props: any) => props.theme.white};
  line-height: 16px;
  margin-bottom: 20px;
  text-align: left;
`;

export const FormContact = styled.div`
  width: 100%;
  max-width: 330px;
  margin: 70px auto 0;
  .button--send {
    max-width: 220px;
    margin: 30px auto 0;
  }
`;

export const RightInfo = styled.div`
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
`;

export const FooterRight = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  background-color: ${(props: any) => props.theme.white};
  flex-flow: column;
  justify-content: flex-start;
  ${FooterInfo} {
    background-color: ${(props: any) => props.theme.white};
  }
  ${FooterInfoBottom} {
    max-width: 100%;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    background-color: ${(props: any) => props.theme.black};
  }
`;

export const MapFooter = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  * {
    width: 100%;
    height: 100%;
  }
`;

export const BrandFooter = styled.img`
  width: 100%;
  max-width: 230px;
  height: auto;
  display: block;
`;

export const FooterCenter = styled.div`
  width: 450px;
  flex: 0 0 auto;
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  @media screen and (max-width: 1600px) {
    width: 100%;
    flex: initial;
  }
  ${FooterInfo} {
    height: 100%;
    display: flex;
    background-color: ${(props: any) => props.theme.primary};
    padding-top: 0;
  }
  ${FooterInfoBottom} {
    align-items: center;
    background-color: ${(props: any) => props.theme.primary};
    display: flex;
    justify-content: center;
    position: relative;
  }
`;

export const SocialList = styled.div`
  width: 90%;
  max-width: 320px;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  .social--link {
    transition: all 0.3s ease-in-out;
    color: ${(props: any) => props.theme.white};
    svg {
      width: 30px;
      height: auto;
    }
    &:hover {
      color: ${(props: any) => props.theme.primary};
    }
  }
`;

export const ContactItem = styled.li`
  width: 100%;
  align-items: center;
  display: flex;
  margin-bottom: 15px;
  svg {
    width: 24px;
    height: auto;
    color: ${(props: any) => props.theme.white};
    transition: all 0.3s ease-in-out;
    margin-right: 8px;
    position: relative;
    top: 7px;
  }
  .info--link {
    width: auto;
    color: ${(props: any) => props.theme.white};
    display: table;
    font-size: 15px;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${(props: any) => props.theme.primary};
      svg {
        color: ${(props: any) => props.theme.primary};
      }
    }
  }
`;

export const LeftContact = styled.ul`
  width: 100%;
  margin: 70px 0 60px;
`;

export const Loc = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

export const BodyLocation = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.white};
  font-size: 12px;
  padding-left: 39px;
`;

export const HeadLocation = styled.div`
  width: 100%;
  align-items: center;
  color: ${(props: any) => props.theme.white};
  display: flex;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  svg {
    width: 30px;
    height: auto;
    display: block;
    margin-right: 10px;
    position: relative;
    top: 1px;
  }
`;

export const LocationItem = styled.li`
  width: 100%;
  margin-bottom: 25px;
`;

export const LeftLocation = styled.ul`
  width: 100%;
`;

export const LeftInfo = styled.div`
  width: 100%;
  max-width: 330px;
  margin: 0 auto;
`;

export const FooterLeft = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: ${(props: any) => props.theme.black};
  ${FooterInfo} {
    display: flex;
    justify-content: flex-end;
    background-color: ${(props: any) => props.theme.black};
  }
  ${FooterInfoBottom} {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props: any) => props.theme.black};
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  justify-content: center;
  position: absolute;
  clip: rect(0, auto, auto, 0);
`;

export const FooterContainer = styled.footer`
  width: 100%;
  position: relative;
  z-index: 999996;
`;
