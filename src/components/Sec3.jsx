import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Sec3() {
  const circlesRef = useRef([]);

  const circles = useRef(
    Array.from({ length: 6 }).map((_, index) => ({
      id: index,
      title: [" Diseño de Productos", " Ingeniería", "Construcción", "Arquitectura", "Operación", " Manufactura deProductos"][index],
      color: "#e5e7f440",
      border: "2px solid #FFFFFF",
      size: 200 + Math.random() * 40,
      x: Math.random() * (window.innerWidth - 200),
      y: Math.random() * (window.innerHeight - 200),
      dx: Math.random() < 0.5 ? 1 : -1,
      dy: Math.random() < 0.5 ? 1 : -1,
      speed: 0.5 + Math.random() * 0.5,
      controls: useAnimation(),
    }))
  ).current;

  useEffect(() => {
    const move = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];

        // Movimiento básico
        circle.x += circle.dx * circle.speed;
        circle.y += circle.dy * circle.speed;

        // Rebote en bordes
        if (circle.x <= 0 || circle.x >= width - circle.size) circle.dx *= -1;
        if (circle.y <= 0 || circle.y >= height - circle.size) circle.dy *= -1;

        // Colisiones con otras esferas
        for (let j = i + 1; j < circles.length; j++) {
          const other = circles[j];
          const dx = other.x - circle.x;
          const dy = other.y - circle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < (circle.size + other.size) / 2) {
            // Intercambiar direcciones
            [circle.dx, other.dx] = [other.dx, circle.dx];
            [circle.dy, other.dy] = [other.dy, circle.dy];
          }
        }

        // Animar
        circle.controls.start({
          x: circle.x,
          y: circle.y,
          transition: { duration: 0.01, ease: "linear" }
        });
      }

      requestAnimationFrame(move);
    };

    move();
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-t from-[#011345] to-[#023BC6] overflow-hidden z-[-2]">
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          animate={circle.controls}
          className="absolute rounded-full flex items-center justify-center text-white font-bold"
          style={{
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            border: circle.border,
          }}
        >
          <span className="text-center text-2xl p-3">{circle.title}</span>
        </motion.div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full flex items-center justify-center w-[90%] h-[50%] md:w-[70%] md:h-[90%] xl:w-[40%] xl:h-[80%] bg-[url('/images/img4.png')] bg-cover bg-center p-6 z-[-1]">
          <h1 className="text-3xl xl:text-5xl text-white leading-tight text-center">
            Experiencia en todas las industrias que impactan al mundo.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Sec3;
