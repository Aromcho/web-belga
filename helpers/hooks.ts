import { useState, useRef } from "react";

export function useMergeState<T>(
  initialState: T
): [T, (newState: Partial<T>) => void, any] {
  const [state, setState] = useState(initialState);
  const dataRef: any = useRef(initialState);
  const setMergedState = (newState: Partial<T>) => {
    setState((prevState) => {
      const mergeState = Object.assign({}, prevState, newState);
      dataRef.current = mergeState;
      return mergeState;
    });
  };
  return [state, setMergedState, dataRef];
}
