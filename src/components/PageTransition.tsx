import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);
  const previousPathRef = useRef(location.pathname);

  useEffect(() => {
    // Only trigger animation if path actually changed
    if (previousPathRef.current !== location.pathname) {
      previousPathRef.current = location.pathname;
      
      // Fade out
      setIsVisible(false);
      
      // Wait for fade out, then update content and fade in
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        // Small delay before fade in for smooth transition
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }, 200);

      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [location.pathname, children]);

  return (
    <div
      className={`transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-2 scale-[0.995]"
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
