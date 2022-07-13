import styled from "@emotion/styled";

export const RightValue = styled.div`
  color: ${(props: any) => props.theme.white};
  font-size: 14px;
  margin-top: 15px;
  right: -4px;
`;

export const LeftValue = styled.div`
  color: ${(props: any) => props.theme.white};
  font-size: 14px;
  margin-top: 15px;
  left: 6px;
`;

export const ValuesWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: absolute;
`;

export const SliderRangeHide = styled.div`
  height: 100%;
  background-color: ${(props: any) => props.theme.white};
  z-index: 3;
  position: absolute;
`;

export const SliderRange = styled.div`
  height: 100%;
  background-color: ${(props: any) => props.theme.primary};
  position: absolute;
  z-index: 2;
`;

export const SliderTrack = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props: any) => props.theme.white};
  z-index: 1;
  position: absolute;
`;

export const Slider = styled.div`
  height: 2px;
  position: relative;
`;

export const Container = styled.div`
position: relative;
  /* Removing the default appearance */
  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    outline: none;
  }
  
  .thumb--left {
    z-index: 4;
    left: -3px;
  }
  
  .thumb--right {
    z-index: 5;
  }

  /* For Chrome browsers */
  .thumb::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background-color: ${(props: any) => props.theme.primary};
    border-radius: 100%;
    border: none;
    box-shadow: none;
    cursor: pointer;
    pointer-events: all;
    position: relative;
    top: -1px;
  }

  /* For Firefox browsers */
  .thumb::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background-color: ${(props: any) => props.theme.primary};
    border: none;
    box-shadow: none;
    cursor: pointer;
    pointer-events: all;
    position: relative;
    top: -1px;
  }
`;
