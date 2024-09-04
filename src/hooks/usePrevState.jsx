import { useEffect, useRef } from "react";

export default function usePrevState(initialState) {
    const prevState = useRef(initialState);
    useEffect(() => {
        prevState.current = initialState;
    }, [initialState]);
    return [prevState.current];
}
