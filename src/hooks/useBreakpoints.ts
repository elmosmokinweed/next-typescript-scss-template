import { useEffect, useRef } from 'react';

export enum Breakpoint {
  UNKNOWN = 0,
  XS = 320,
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
  XXL = 1400,
}

export const useBreakpoints = (
  callback: (breakpoint: Breakpoint) => void
): void => {
  const breakpointRef = useRef<Breakpoint>(Breakpoint.UNKNOWN);

  useEffect(() => {
    const breakpointsOrder = [
      Breakpoint.XS,
      Breakpoint.SM,
      Breakpoint.MD,
      Breakpoint.LG,
      Breakpoint.XL,
      Breakpoint.XXL,
    ];

    const listener = () => {
      const windowWidth = window.innerWidth;
      let breakpoint = Breakpoint.UNKNOWN;

      for (let i = 0; i < breakpointsOrder.length; i++) {
        if (windowWidth >= breakpointsOrder[i]) {
          breakpoint = breakpointsOrder[i];
        }
      }

      if (breakpointRef.current !== breakpoint) {
        breakpointRef.current = breakpoint;

        callback(breakpoint);
      }
    };

    listener();

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);
};
