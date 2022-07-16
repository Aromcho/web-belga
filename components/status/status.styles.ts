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
  color: ${(props: any) => props.theme.black};
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatusWrapper = styled.div`
  width: 100%;
  margin: 80px auto;
  .button--status {
    margin: 25px auto 0;
  }
`;
