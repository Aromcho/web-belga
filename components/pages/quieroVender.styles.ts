import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  width: 100%;
  margin: 30px auto 100px;
  display: block;
`;

export const BackWrapper = styled.div`
  display: table;
  margin-bottom: 40px;
  .back--link {
    align-items: center;
    display: flex;
    color: ${(props: any) => props.theme.black};
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

export const QuieroVenderContainer = styled.div`
  width: 100%;
  padding-top: 150px;
`;
