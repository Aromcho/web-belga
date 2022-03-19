import React, { useCallback, useEffect, useState, useRef } from "react";

import {
  Container,
  Slider,
  SliderTrack,
  SliderRange,
  SliderRangeHide,
  ValuesWrapper,
  RightValue,
  LeftValue
} from './multirange.styles';

export interface MultiRangeProps {
  customWidth?: number;
  min?: number;
  max?: number;
  step?: number;
  withValues?: boolean;
  onChange?: (e: any) => void;
}

export const MultiRange = ({
  customWidth = 300,
  min,
  max,
  withValues,
  onChange,
  step
}: MultiRangeProps) => {

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null);
  const rangeHide = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - (min ?? 0)) / ((max ?? 0) - (min ?? 0))) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const maxPercent = getPercent(maxVal);
    if (range.current) { range.current.style.width = `${maxPercent}%`; }
  }, [maxVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    if (rangeHide.current) { rangeHide.current.style.width = `${minPercent}%`; }
  }, [minVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    if (onChange) onChange({ minVal: minVal, maxVal: maxVal });
  }, [minVal, maxVal]);


  return (
    <Container style={{ width: `${customWidth}px` }}>

      <input
        className="thumb thumb--left"
        style={{ width: `${customWidth}px` }}
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal ?? 0 - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        step={step}
      />
      <input
        className="thumb thumb--right"
        style={{ width: `${customWidth}px` }}
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal ?? 0 + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        step={step}
      />

      <Slider style={{ width: `${customWidth}px` }}>
        <SliderTrack />
        <SliderRange ref={range} />
        <SliderRangeHide ref={rangeHide} />

        {withValues &&
          <ValuesWrapper>
            <LeftValue>{minVal}</LeftValue>
            <RightValue>{maxVal}</RightValue>
          </ValuesWrapper>
        }

      </Slider>

    </Container>
  );
};
