import { useInView } from "react-intersection-observer";

export default function SlidingContent({
  children,
  above = false,
  left = false,
  right = false,
  bottom = false,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  let animationSlideDirection;
  if (above) {
    animationSlideDirection = "animate-slide-from-above";
  } else if (left) {
    animationSlideDirection = "animate-slide-from-left";
  } else if (right) {
    animationSlideDirection = "animate-slide-from-right";
  } else if (bottom) {
    animationSlideDirection = "animate-slide-from-bottom";
  }

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        inView ? animationSlideDirection : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
