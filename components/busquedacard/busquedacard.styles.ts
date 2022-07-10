import styled from "@emotion/styled";

export const CloseWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 20px;
  right: 30px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  svg {
    width: 30px;
    height: auto;
    color: ${(props: any) => props.theme.secondary};
  }
`;

export const QueryProp = styled.div`
  width: 50%;
  height: 100%;
  align-items: center;
  color: ${(props: any) => props.theme.black};
  display: flex;
  font-size: 14px;
  justify-content: flex-start;
  white-space: nowrap;
  &:first-of-type {
    font-weight: 600;
  }
  @media screen and (max-width: 840px) {
    width: 100%;
    white-space: normal;
    line-height: 20px;
    font-size: 15px;
  }
`;

export const Query = styled.div`
  width: 100%;
  height: 40px;
  align-items: center;
  display: flex;
  @media screen and (max-width: 840px) {
    flex-flow: column;
    height: auto;
    margin-bottom: 15px;
  }
`;

export const QueryColumn = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const QueryList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10%;
  justify-content: space-between;
  @media screen and (max-width: 1100px) {
    width: 60%;
    flex-flow: column;
    gap: 0;
    margin: 0 auto;
  }
  @media screen and (max-width: 840px) {
    width: 100%;
  }
`;

export const BusquedaWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
  position: relative;
  @media screen and (max-width: 840px) {
    padding-bottom: 0;
  }
`;

export const BusquedaContainer = styled.div`
  width: 100%;
  border: 1px solid ${(props: any) => props.theme.black};
  padding: 30px 20px 0;
  margin-bottom: 60px;
  position: relative;
  @media screen and (max-width: 992px) {
    padding-top: 60px;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 840px) {
    padding-top: 30px;
  }

  ${BusquedaWrapper} {
    display: flex;
    flex-flow: row wrap;
    gap: 3%;
    @media screen and (max-width: 992px) {
      max-width: 500px;
    }
    .input--form {
      width: 31%;
      @media screen and (max-width: 992px) {
        width: 100%;
      }
    }
    .textarea--form {
      width: 100%;
    }

    @media screen and (max-width: 992px) {
      display: flex;
      flex-flow: column;
      gap: 0;
    }
  }

  .button--busqueda {
    max-width: 220px;
    text-transform: uppercase;
    margin: 25px auto 0;
    position: relative;
    top: 20px;
  }
`;
