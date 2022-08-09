import { useState, useEffect } from "react";

export interface IOffsetHeight {
  offsetHeight?: number;
}


export const useOffsetHeight = (debounceTime = 250) => {
  const [offsetHeight, setOffsetHeight] = useState<IOffsetHeight>({
    offsetHeight: 0
  });
  
  const debounce = (fn: Function, ms: number) => {
    let timer: number | null;
    return () => {
      if (timer !== null) clearTimeout(timer);
      timer = window.setTimeout(() => {
        timer = null;
        fn();
      }, ms);
    };
  };


  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setOffsetHeight({
        offsetHeight: window.pageYOffset
      });
    }, debounceTime);

    window.addEventListener("scroll", debouncedHandleResize);

    debouncedHandleResize();

    return () => window.removeEventListener("scroll", debouncedHandleResize);
  });

  return offsetHeight;
};
