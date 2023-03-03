import styled from "@emotion/styled";

export const Subtitle = styled.h4`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 25px;
`;

export const Text = styled.p`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 25px;
`;

export const TextWrapper = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.black};
  margin-bottom:80px;
`;

export const Title = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.black};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  margin: 0 auto 60px;
  @media screen and (max-width: 992px) {
    margin: 0 auto 20px;
  }
`;

export const BackWrapper = styled.div`
  display: table;
  margin-bottom: 40px;
  .back--link {
    align-items: center;
    display: inline-flex;
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

export const TerminosContainer = styled.div`
  width: 100%;
  padding-top: 150px;
`;
