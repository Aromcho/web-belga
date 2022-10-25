import styled from "@emotion/styled";

export const BusquedasList = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.black};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  margin: 0 auto 80px;
  @media screen and (max-width: 992px) {
    margin: 0 auto 20px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  margin: 80px auto;
  display: block;
`;

export const BackWrapper = styled.div`
  display: table;
  margin-bottom: 40px;
  .back--link {
    align-items: center;
    display: flex;
    color: ${(props: any) => props.theme.black};
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    svg {
      width: 24px;
      height: auto;
      display: block;
      transition: all 0.3s ease-in-out;
      margin-right: 5px;
    }
    &:hover {
      svg {
        transform: translateX(-5px);
      }
    }
  }
`;

export const BusquedasContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  height: auto;
  padding-top: 150px;
  @media screen and (max-width: 840px) {
    padding-top: 100px;
  }
`;

export const Subtitle = styled.h4`
  width: 100%;
  color: ${(props: any) => props.theme.black};
  font-size: 48px;
  font-weight: 100;
  line-height: 54px;
  text-align: center;
  margin: 100px auto 80px;
  @media screen and (max-width: 992px) {
    margin: 50px auto;
  }
`;
