import { useRef, useState, useEffect } from "react";

type ScrollRef = React.RefObject<any> | ((node?: Element | null) => void)

export default function useScrollPercentage() {
  const scrollRef:any = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(NaN);

  const reportScroll = (e: { target: any; }) => {
    setScrollPercentage(getScrollPercentage(e.target));
  };

  useEffect(
    () => {
      const node:any = scrollRef.current;

      if (node !== null) {
        node.addEventListener("scroll", reportScroll, { passive: true });
        if (Number.isNaN(scrollPercentage)) {
          setScrollPercentage(getScrollPercentage(node));
        }
      }
      return () => {
        if (node !== null) {
          node.removeEventListener("scroll", reportScroll);
        }
      };
    },
    [scrollPercentage]
  );

  return [scrollRef, Number.isNaN(scrollPercentage) ? 0 : scrollPercentage];
}

function getScrollPercentage(element: any) {
  if (element === null) {
    return NaN;
  }
  const height = element.scrollHeight - element.scrollHeight;
  return Math.round((element.scrollTop / height) * 100);
}
