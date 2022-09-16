import styled from "@emotion/styled";

export const PropertyListWrapper = styled.div`
  padding: 150px 0 50px;

  @media screen and (max-width: 992px) {
    padding: 90px 0 50px;
  }
  .filter--button {
    max-width: 320px;
    display: none;
    margin: 0 auto 30px;
    @media screen and (max-width: 1200px) {
      display: flex;
    }
    @media screen and (max-width: 600px) {
      max-width: 87%;
    }
  }
`;
export const IconCloseWrapper = styled.ul`
  width: 80px;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  svg {
    width: 40px;
    height: auto;
    color: ${(props: any) => props.theme.black};
  }
`;

export const FiltersHeader = styled.ul`
  width: 100%;
  height: 60px;
  background-color: ${(props: any) => props.theme.white};
  display: none;
  justify-content: flex-end;
  position: fixed;
  z-index: 99;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
  @media screen and (max-width: 1200px) {
    display: flex;
  }
`;

export const RowInputsMobile = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  gap: 5%;
  justify-content: space-between;
  margin-bottom: 25px;
  .half {
    width: 50%;
  }
`;

export const RowFilterSubtitle = styled.h5`
  width: 100%;
  color: ${(props: any) => props.theme.black};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  padding-left: 20px;
`;

export const FiltersWrapperMobile = styled.div`
  width: 100%;
  align-items: center;
  display: none;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    width: 90%;
    max-width: 500px;
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin: 0 auto 20px;
  }
  @media screen and (max-width: 860px) {
    margin: 250px auto 20px;
  }
  @media screen and (max-width: 740px) {
    margin: 80px auto 20px;
  }
  .input--general {
    @media screen and (max-width: 1200px) {
      width: 100%;
      margin-bottom: 20px;
      &.select {
        margin-bottom: 20px;
      }
      &.dropdown {
        margin-bottom: 20px;
      }
    }
  }
  .save--search-mobile {
    display: none;
    @media screen and (max-width: 1200px) {
      display: flex;
      margin: 10px auto 0;
    }
  }
`;

export const FiltersWrapperDesk = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const FiltersContainer = styled.div`
  width: 98%;
  max-width: 1920px;
  margin: 0 auto 40px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    /* align-items: center; */
    background-color: ${(props: any) => props.theme.white};
    /* display: flex; */
    /* justify-content: center; */
    pointer-events: none;
    opacity: 0;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 99999999;
    position: fixed;
    top: 0;
    left: 0;

    &.visible {
      pointer-events: all;
      opacity: 1;
    }
  }
  .input--general {
    width: 16%;
    border: 1px solid #000000;
    margin: 0;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
    &.full {
      width: 83.2%;
      margin-top: 10px;
      @media screen and (max-width: 1200px) {
        width: 100%;
      }
    }
  }
  .form--button {
    width: 16%;
    margin-top: 10px;
    max-width: none;
  }
  .dropdown--input {
    width: 100px;
    margin: 0;
    @media screen and (max-width: 1200px) {
      width: 50%;
    }
    &.input--price{
      width: 100%;
      &.no-things{
        input {
          -moz-appearance: textfield;
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
      }
    }
    input {
      border-radius: 0;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  gap: 40px;
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    gap: 20px;
  }
  &.investment-list {
    gap: 40px;
    .card--prop-home {
      width: 30%;
      max-width: 30%;
      @media screen and (max-width: 740px) {
        width: 100%;
        max-width: 100%;
      }
    }
  }
  .card--prop-home {
    width: 48%;
    @media screen and (max-width: 740px) {
      width: 100%;
    }
  }
`;

export const TopContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  .save--search-desk {
    display: initial;
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  .order--desk {
    @media screen and (max-width: 1200px) {
      margin-top: auto;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &.content--order {
    @media screen and (max-width: 1200px) {
      margin-top: auto;
    }
  }
`;

export const RowContent = styled.div`
  align-items: center;
  color: #000000;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  & + & {
    margin-top: 20px;
  }
  &.bold {
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
    a {
      font-weight: 600;
    }
  }
  &.count {
    margin-left: 25px;
  }
  &:hover {
    svg {
      &.right {
        transform: scale(1.2);
      }
      &.left {
        transform: translateX(-5px);
      }
    }
  }
  a {
    align-items: center;
    color: #000000;
    display: flex;
  }
  svg {
    height: auto;
    display: block;
    transition: all 0.3s ease-in-out;
    &.right {
      width: 15px;
      margin-left: 5px;
    }
    &.left {
      width: 20px;
      margin-right: 5px;
    }
  }

  &.order {
    margin-left: auto;

    svg {
      width: 20px;
      height: auto;
      margin-left: 5px;
      transition: all 0.3s ease-in-out;
    }
    &.high {
      svg {
        transform: rotate(180deg);
      }
    }
  }
`;

export const PaginationWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const PaginationNumber = styled.a`
  color: black;
  font-size: 14px;
  line-height: 17px;
  &.active {
    font-weight: 600;
  }
  & + & {
    margin-left: 30px;
  }
`;
