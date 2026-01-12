import { useEffect, useState, useCallback, RefObject } from 'react';

interface ParallaxValues {
  y: number;
  opacity: number;
  scale: number;
}

export const useParallaxEffect = (
  ref: RefObject<HTMLElement>,
  options?: {
    speed?: number;
    minOpacity?: number;
    maxScale?: number;
  }
) => {
  const { speed = 0.3, minOpacity = 0.3, maxScale = 1.05 } = options || {};
  
  const [values, setValues] = useState<ParallaxValues>({
    y: 0,
    opacity: 1,
    scale: 1,
  });

  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    
    // Calculate progress from -1 (top of viewport) to 1 (bottom of viewport)
    const progress = (elementCenter - viewportCenter) / windowHeight;
    
    // Parallax Y offset
    const y = progress * speed * 100;
    
    // Fade based on distance from center
    const distanceFromCenter = Math.abs(progress);
    const opacity = Math.max(minOpacity, 1 - distanceFromCenter * 0.5);
    
    // Scale effect
    const scale = 1 + (1 - distanceFromCenter) * (maxScale - 1);

    setValues({ y, opacity, scale });
  }, [ref, speed, minOpacity, maxScale]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  return values;
};

export default useParallaxEffect;
