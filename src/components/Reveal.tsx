import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale" | "fade";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  /** Re-trigger on every entry (default: only first time) */
  repeat?: boolean;
  /** Visibility threshold 0-1 (default: 0.15) */
  threshold?: number;
}

const directionInitial: Record<Direction, string> = {
  up: "opacity-0 translate-y-8",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
  scale: "opacity-0 scale-95",
  fade: "opacity-0",
};

const directionFinal = "opacity-100 translate-y-0 translate-x-0 scale-100";

const Reveal = ({
  children,
  delay = 0,
  duration = 700,
  direction = "up",
  className = "",
  repeat = false,
  threshold = 0.15,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's reduced-motion preference
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.disconnect();
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat, threshold]);

  return (
    <div
      ref={ref}
      className={`will-change-[transform,opacity] transition-all ease-out ${
        visible ? directionFinal : directionInitial[direction]
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
