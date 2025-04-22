import { useEffect, useRef } from "react";

export default function useScrollAnimation(animationClass = "fade-in") {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(animationClass); // Agrega la clase de animación
        } else {
          el.classList.remove(animationClass); // Elimina la clase si sale del viewport
        }
      },
      {
        threshold: 0.2, // Inicia cuando 20% del elemento es visible
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [animationClass]);

  return ref;
}
