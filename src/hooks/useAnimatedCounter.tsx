import { useState, useEffect, useRef } from 'react';

interface UseAnimatedCounterProps {
  end: number;
  duration?: number;
  start?: number;
  isInView?: boolean;
}

export const useAnimatedCounter = ({
  end,
  duration = 2000,
  start = 0,
  isInView = true,
}: UseAnimatedCounterProps) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;
    const startTime = Date.now();
    const endTime = startTime + duration;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);
      
      // Easing function - easeOutExpo
      const easeProgress = 1 - Math.pow(2, -10 * progress);
      
      const currentCount = Math.floor(start + (end - start) * easeProgress);
      countRef.current = currentCount;
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(tick);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(tick);
  }, [end, duration, start, isInView]);

  return count;
};

export default useAnimatedCounter;
