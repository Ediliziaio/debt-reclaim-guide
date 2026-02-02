import { useState, useEffect, useRef } from 'react';

interface UseImageLoaderOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useImageLoader = (options: UseImageLoaderOptions = {}) => {
  const { threshold = 0.1, rootMargin = '100px' } = options;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return { imgRef, isLoaded, isInView, handleLoad };
};
