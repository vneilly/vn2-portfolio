"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface ViewportDimensions {
  width: number;
  height: number;
}

const ParticleBackground: React.FC = (): React.JSX.Element => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [viewport, setViewport] = useState<ViewportDimensions>({
    width: 1000,
    height: 800,
  });

  const getViewportDimensions = useCallback(() => {
    return {
      width: Math.max(document.documentElement.clientWidth || 0, 1000),
      height: Math.max(document.documentElement.clientHeight || 0, 800),
    };
  }, []);

  const generateParticles = useCallback(
    (dimensions: ViewportDimensions): Particle[] => {
      const colors = ["#00ABC9", "#FAB917"];
      const particleCount = 30;

      return Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    },
    []
  );

  useEffect(() => {
    // Init Setup
    const initialDimensions = getViewportDimensions();
    setViewport(initialDimensions);
    setParticles(generateParticles(initialDimensions));

    // DEBOUNCE RE-SIZE HANDLER
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleViewPortResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newDimensions = getViewportDimensions();
        setViewport(newDimensions);
        setParticles(generateParticles(newDimensions));
      }, 250);
    };

    // RESIZE LISTENER
    const resizeObserver = new ResizeObserver(handleViewPortResize);
    resizeObserver.observe(document.documentElement);

    return () => {
      clearTimeout(resizeTimer);
      resizeObserver.disconnect();
    };
  }, [generateParticles, getViewportDimensions]);

  return (
    <div className="fixed inset-0 -z-10">
      {particles.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full"
          style={{
            left: `${el.x}`,
            top: `${el.y}`,
            width: `${el.size}px`,
            height: `${el.size}px`,
            backgroundColor: el.color,
            opacity: 0.3,
          }}
          animate={{
            x: [
              Math.random() * viewport.width - el.x,
              Math.random() * viewport.width - el.x,
              Math.random() * viewport.width - el.x,
            ],
            y: [
              Math.random() * viewport.width - el.y,
              Math.random() * viewport.width - el.y,
              Math.random() * viewport.width - el.y,
            ],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
