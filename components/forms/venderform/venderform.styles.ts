import styled from "@emotion/styled";

export const TitleForm = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.black};
  font-size: 20px;
  font-weight: 600;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
`;

export const WrapperInputs = styled.div`
  width: 100%;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 330px;
  margin: 70px auto 0;
  position: relative;
`;

export const FormContainer = styled.div`
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
    ${FormWrapper} {
      max-width: 900px;
      @media screen and (max-width: 992px) {
        max-width: 500px;
      }
      .input--form {
        input {
          height: 43px;
        }
        width: 31%;
        &.half {
          width: 48%;
          @media screen and (max-width: 992px) {
            width: 100%;
          }
        }
        @media screen and (max-width: 992px) {
          width: 100%;
        }

        &.input--select {
          @media screen and (max-width: 992px) {
            margin-bottom: 20px;
          }
          & > div:first-child {
            border: 1px solid ${(props: any) => props.theme.black};
            border-radius: 6px 6px 0 6px;
            min-height: 42px;
            &:hover,
            &:focus,
            &:focus-within {
              background-color: transparent;
              border: 1px solid ${(props: any) => props.theme.black};
              box-shadow: none !important;
            }
            & > div {
              border-radius: 6px 6px 0 6px;
              box-shadow: none !important;
              &:hover,
              &:focus,
              &:focus-within {
                background-color: ${(props: any) => props.theme.white};
                box-shadow: none !important;
              }

              div {
                font-size: 14px;
                font-weight: 500;
                color: ${(props: any) => props.theme.black};
              }
            }
          }

          &:hover {
            background-color: transparent;
            border-color: transparent;
          }
        }
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
