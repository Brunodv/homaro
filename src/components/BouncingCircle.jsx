import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function BouncingCircle({ initialX, initialY }) {
  const controls = useAnimation();

  useEffect(() => {
    const radius = 24;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let pos = { x: initialX, y: initialY };
    let velocity = {
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    };

    let lastTime = performance.now();

    const move = (currentTime) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      pos.x += velocity.x * delta;
      pos.y += velocity.y * delta;

      if (pos.x <= 0 || pos.x >= screenWidth - radius * 2) {
        velocity.x *= -1;
        pos.x = Math.max(0, Math.min(pos.x, screenWidth - radius * 2));
      }

      if (pos.y <= 0 || pos.y >= screenHeight - radius * 2) {
        velocity.y *= -1;
        pos.y = Math.max(0, Math.min(pos.y, screenHeight - radius * 2));
      }

      controls.start({
        x: pos.x,
        y: pos.y,
        transition: { duration: 0.1, ease: "linear" },
      });

      requestAnimationFrame(move);
    };

    requestAnimationFrame(move);
  }, [controls, initialX, initialY]);

  return (
    <motion.div
      className="w-12 h-12 rounded-full fixed shadow-lg"
      style={{ backgroundColor: randomColor() }}
      animate={controls}
    />
  );
}

function randomColor() {
  const colors = ["#f43f5e", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];
  return colors[Math.floor(Math.random() * colors.length)];
}
