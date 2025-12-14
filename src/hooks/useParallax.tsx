import { useEffect, useState } from "react";

interface ParallaxResult {
  scrollY: number;
  parallaxOffset: (speed?: number) => number;
}

const useParallax = (): ParallaxResult => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = (speed: number = 0.5) => {
    return scrollY * speed;
  };

  return { scrollY, parallaxOffset };
};

export default useParallax;
