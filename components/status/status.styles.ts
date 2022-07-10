import styled from "@emotion/styled";

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
