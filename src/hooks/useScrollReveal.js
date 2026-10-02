import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — lightweight Intersection Observer hook.
 * Returns [ref, isVisible]. Once visible, stays visible.
 *
 * @param {Object} options
 * @param {number}  options.threshold  - 0–1, how much of element must be visible (default 0.12)
 * @param {string}  options.rootMargin - margin around root (default '0px 0px -60px 0px')
 * @param {boolean} options.once       - if true (default), stays visible after first trigger
 */
export function useScrollReveal({
  threshold = 0.12,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion — show immediately
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}
