import styled from "@emotion/styled";

export const Img = styled.img`
  width: 133px;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ImgWrapper = styled.div`
  width: 33px;
  height: auto;
  margin: 0 auto;
  padding-bottom: 150px;
  position: relative;
`;

export const Text = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.black};
  font-size: 45px;
  font-weight: 100;
  line-height: 50px;
  margin: auto;
  text-align: center;
  margin: 20px auto 80px;

  @media screen and (max-width: 1200px) {
    max-width: 450px;
    font-size: 38px;
    line-height: 45px;
  }
  @media screen and (max-width: 840px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const StatusWrapper = styled.div`
  width: 100%;
  margin: 80px auto;
  .button--status {
    margin: 25px auto 0;
  }
  @media screen and (max-width: 840px) {
    font-size: 32px;
    line-height: 40px;
  }
`;
