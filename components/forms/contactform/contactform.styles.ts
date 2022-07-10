import styled from "@emotion/styled";

export const ContactFormWrapper = styled.div`
  width: 100%;
  max-width: 330px;
  margin: 70px auto 0;
  position: relative;
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
