import styled from "@emotion/styled";

export const ContactFormWrapper = styled.div`
  width: 100%;
  max-width: 330px;
  margin: 70px auto 0;
  position: relative;
`;

export const WrapperInputs = styled.div`
  width: 100%;
`;

export const ContactFormContainer = styled.div`
  width: 100%;
  border: none;
  .button--send {
    max-width: 220px;
    margin: 25px auto 0;
    position: relative;
    top: 20px;
  }
  &.full {
    border: 1px solid ${(props: any) => props.theme.secondary};
    padding: 80px 20px 0;
    margin-bottom: 60px;
    @media screen and (max-width: 992px) {
      padding-top: 60px;
      margin-bottom: 100px;
    }
    ${ContactFormWrapper} {
      max-width: 900px;
      @media screen and (max-width: 992px) {
        max-width: 500px;
      }
      ${WrapperInputs} {
        width: 100%;
        align-items: center;
        display: flex;
        gap: 15px;
        justify-content: space-between;
        margin-bottom: 15px;
        @media screen and (max-width: 992px) {
          flex-flow: column;
        }
        .input--form {
          width: 100%;
          margin: 0;
          @media screen and (max-width: 992px) {
            width: 100%;
            margin-bottom: 15px;
          }
        }
      }
      .textarea--form {
        width: 100%;
      }
      .button--send {
        max-width: 220px;
        margin: 40px auto 0;
        position: relative;
        top: 20px;
      }

      @media screen and (max-width: 992px) {
        display: flex;
        flex-flow: column;
        gap: 0;
      }
    }
  }
`;
