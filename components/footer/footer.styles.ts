import styled from "@emotion/styled";

export const FooterInfo = styled.div`
  width: 100%;
  max-width: 450px;
  height: auto;
  min-height: 700px;
`;

export const FooterInfoBottom = styled.div`
  width: 100%;
  max-width: 450px;
  height: auto;
  min-height: 200px;
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
    background-color: ${(props: any) => props.theme.black};
  }
`;

export const FooterCenter = styled.div`
  width: 450px;
  flex: 0 0 auto;
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  ${FooterInfo} {
    background-color: ${(props: any) => props.theme.primary};
  }
  ${FooterInfoBottom} {
    background-color: ${(props: any) => props.theme.primary};
    position: relative;
  }
`;

export const FooterLeft = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: ${(props: any) => props.theme.black};
  ${FooterInfo} {
    background-color: ${(props: any) => props.theme.black};
  }
  ${FooterInfoBottom} {
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
`;
