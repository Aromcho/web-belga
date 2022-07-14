import styled from "@emotion/styled";

export const PropertyListWrapper = styled.div`
  padding: 150px 0 50px;
`;

export const FiltersContainer = styled.div`
  width: 90%;
  max-width: 1920px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto 40px;
  .input--general {
    width: 16%;
    border: 1px solid #000000;
    margin: 0;
    &.full {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .form--button {
    width: 18%;
  }
  .dropdown--input {
    width: 100px;
    margin: 0;
    input {
      -webkit-appearance: none;
      -moz-appearance: textfield;
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
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
